import React from 'react';
import {Code2,FileImage} from 'lucide-react';
import {Reveal} from '../components/UI';
import {hackathons,startupExperiences} from '../data/experiences';
import '../styles/hackathons.css';

function HackathonList(){
  return <div className="hackathon-experiences" aria-labelledby="hackathon-heading">
    <div className="hackathon-heading">
      <p className="eyebrow">BUILDING THROUGH CHALLENGES</p>
      <h3 id="hackathon-heading">Hackathon experiences</h3>
      <p>Exploring ideas and putting learning into practice.</p>
    </div>
    <div className="hackathon-grid">
      {hackathons.map(event=><Reveal key={event.id} className={`hackathon-card${event.certificate?' has-certificate':''}`}>
        <article aria-labelledby={`${event.id}-title`}>
          <div className="hackathon-card-heading"><Code2 size={22} aria-hidden="true"/>{event.date&&<span>{event.date}</span>}</div>
          <h4 id={`${event.id}-title`}>{event.title}</h4>
          <p className="hackathon-role">{event.role}</p>
          <p>{event.description}</p>
          {event.certificate&&<figure className="hackathon-certificate">
            <a href={event.certificate} target="_blank" rel="noreferrer" aria-label={`View ${event.title} participation certificate (opens in a new tab)`}>
              <img src={event.certificate} width="1056" height="816" loading="lazy" alt="NASA Space Apps Challenge 2026 Galactic Problem Solver participation certificate presented to May Myat Thaw, dated November 14–15, 2026"/>
              <span><FileImage size={16} aria-hidden="true"/>View participation certificate</span>
            </a>
            <figcaption>{event.recognition}</figcaption>
          </figure>}
        </article>
      </Reveal>)}
    </div>
  </div>;
}

export default function HackathonExperience(){return <>
  <div className="hackathon-experiences" aria-labelledby="startup-heading">
    <div className="hackathon-heading"><p className="eyebrow">IDEAS & ENTREPRENEURSHIP</p><h3 id="startup-heading">AI startup experience</h3><p>Exploring AI innovation through startup competition participation.</p></div>
    {startupExperiences.map(event=><Reveal key={event.id} className="hackathon-card startup-card">
      <article aria-labelledby={`${event.id}-title`}>
        <div className="startup-copy">
          <div className="hackathon-card-heading"><Code2 size={22} aria-hidden="true"/><span>{event.date}</span></div>
          <h4 id={`${event.id}-title`}>{event.title}</h4><p className="hackathon-role">{event.role}</p>
          <p>{event.description}</p><p>{event.context}</p>
          <a className="text-link" href={event.source} target="_blank" rel="noreferrer">{event.sourceLabel}</a>
        </div>
        <figure className="hackathon-certificate">
          <a href={event.certificate} target="_blank" rel="noreferrer" aria-label="View AgroGuard participation certificate PDF (opens in a new tab)">
            <img src={event.preview} width={event.imageWidth} height={event.imageHeight} loading="lazy" alt={event.imageAlt}/>
            <span><FileImage size={16} aria-hidden="true"/>View participation certificate (PDF)</span>
          </a><figcaption>{event.recognition}</figcaption>
        </figure>
      </article>
    </Reveal>)}
  </div><HackathonList/>
</>}
