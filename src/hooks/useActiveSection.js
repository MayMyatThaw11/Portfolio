import {useEffect,useState} from 'react';
import {activeSectionAt,sectionActivationLine} from './activeSection';
const sectionIds=['home','about','projects','skills','experience','contact'];
export function useActiveSection(pathname){
  const [active,setActive]=useState('home');
  useEffect(()=>{
    if(pathname!=='/')return;
    let frame=null;
    const update=()=>{
      frame=null;
      const sections=sectionIds.map(id=>document.getElementById(id)).filter(Boolean);
      const headerBottom=document.querySelector('.nav-inner')?.getBoundingClientRect().bottom||0;
      const padding=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0;
      const atEnd=window.scrollY>0&&window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-2;
      const next=activeSectionAt(sections.map(el=>({id:el.id,top:el.getBoundingClientRect().top})),sectionActivationLine(headerBottom,window.innerHeight,padding),atEnd);
      if(next)setActive(next);
    };
    const schedule=()=>{if(frame===null)frame=requestAnimationFrame(update)};
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',schedule);
    const observer=new ResizeObserver(schedule);
    const main=document.querySelector('main');
    if(main)observer.observe(main);
    schedule();
    return()=>{window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);observer.disconnect();if(frame!==null)cancelAnimationFrame(frame)};
  },[pathname]);
  return pathname.startsWith('/projects/')?'projects':pathname==='/'?active:null;
}
