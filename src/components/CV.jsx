import React from 'react';
import '../css/cv.css'

const skills = {
  main: ['Javascript', 'React', 'Node', 'Electron', 'HTML5', 'CSS3'],
  libraries: ['Leaflet.js', 'p5.js', 'd3.js', 'Markdown.js', 'fullcalendar.js', 'node-osmosis', 'node-commander', 'node-express', 'node-mongodb'],
  other: ['npm', 'git & github', 'Heroku', 'Photoshop'],
}

export default function CV() {
  return (
    <div className="body-right">
      <h3>About Fra A.S I</h3>
      <p>I am a hobbyist coder who dove too deep into javascript
        and built this little portfolio site
        in hopes of maybe landing a job in the industry one day.<br />
        Motto: If you can&apos;t learn it yourself, no school can help you.
      </p>
      <p>
        Choose a repository from the dropdown menu to view its README.md here.
      </p>
      <h3>CV</h3>
      <p>
        <b>Main skills</b><br />
        {skills.main.map(skill => (<li key={skill}>{skill}</li>))}<br />

        <b className="b">Some libraries I&apos;ve used along the way</b><br />
        {skills.libraries.map(lib => (<li key={lib}>{lib}</li>))}<br />

        <b>Other related technologies</b><br />
        {skills.other.map(other => (<li key={other}>{other}</li>))}

        <b>Quick links to ? projects</b>
      </p>

    </div>
  )
}
