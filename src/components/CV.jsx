import React from 'react';
import '../css/cv.css'

const info = {
  mainSkills: ['Javascript', 'React', 'Node', 'Electron', 'HTML5', 'CSS3'],
  libraries: ['Leaflet.js', 'p5.js', 'd3.js', 'Markdown.js', 'fullcalendar.js', 'node-osmosis', 'node-commander', 'node-express', 'node-mongodb'],
  other: ['git & github', 'npm', 'Heroku', 'Photoshop'],
  quickLinks: [
    {
      link: 'https://github.com/Fraasi/PDTapp',
      name: 'PDTapp',
      description: '(personal desktop app, biggest project so far)',
    },
    {
      link: 'https://github.com/Fraasi/Phyllotaxis-leaf-arrangement',
      name: 'Phyllotaxis',
      description: '(mathematical graphics app)',
    },
    {
      link: 'https://github.com/Fraasi/teetoes"',
      name: 'Teetoes',
      description: '(electron desktop text to speech app with google cloud voices)',
    },
    {
      link: 'http://github.com/Fraasi/Rogue-like-fcc',
      name: 'Alien adventure',
      description: '(a little rogue like game)',
    },
    {
      link: 'https://github.com/Fraasi/nasijarven-jaat-chart',
      name: 'Näsijärven jäät chart',
      description: '(d3.js chart showing dates Näsijärvi lake froze & unfroze between 1975-2017)',
    },
    {
      link: 'https://github.com/Fraasi/folder-file-names',
      name: 'Folder file names',
      description: '(npm package of a node command line interface)',
    },
    {
      link: 'http://github.com/Fraasi/Leaflet-GPX-Map',
      name: 'Leaflet gpx map',
      description: '(leaflet map to show gpx tracks with some additional plugins, first project ever, reason why I got into coding)',
    },
  ],
}

export default function CV() {
  return (
    <div className="body-right">
      <h3>About Fra A.S I
        <img src="https://avatars1.githubusercontent.com/u/22402899?s=50&u=a34f7090e4ce049968617f805aaf4f605559d629&v=4" alt="github avatar" />
      </h3>
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
        {info.mainSkills.map(skill => (<li key={skill}>{skill}</li>))}<br />

        <b className="b">Some libraries I&apos;ve used along the way</b><br />
        {info.libraries.map(lib => (<li key={lib}>{lib}</li>))}<br />

        <b>Other related technologies</b><br />
        {info.other.map(other => (<li key={other}>{other}</li>))}<br />

        <b>Quick links to some presentable projects</b><br />
        {info.quickLinks.map(({ name, link, description }) => (
          <React.Fragment key={name}>
            <li><a href={link} target="_blank" rel="noopener noreferrer">{name}</a></li>
            <li>{description}</li>
          </React.Fragment>
        ))
        }
        <br />
        <b>Contact</b><br />
        <li>Fraasi.gh<span style={{ display: 'none' }}>foo</span>@gmail.com (English/Finnish)</li>
      </p>

    </div>
  )
}
