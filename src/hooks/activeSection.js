export function sectionActivationLine(headerBottom, viewportHeight, scrollPadding = 0) {
  // Recognize a section just beneath the header, before it crosses a thin line.
  return Math.max(headerBottom + Math.max(24, (viewportHeight - headerBottom) * .15), scrollPadding + 1);
}
export function activeSectionAt(sections, activationLine, atPageEnd = false) {
  if (!sections.length) return null;
  if (atPageEnd) return sections[sections.length - 1].id;
  let active = sections[0].id;
  for (const section of sections) {
    if (section.top <= activationLine) active = section.id;
    else break;
  }
  return active;
}
