import React, { Component } from 'react'
import showdown from 'showdown'

showdown.setFlavor('github')
const converter = new showdown.Converter()


export default class RightSide extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const currentRepo = this.props.currentRepo
    return (
      <div className="body-right">
        <h3>{currentRepo.title}</h3>
        {`Created: ${currentRepo.created_at}`}<br />
        {`Updated: ${currentRepo.updated_at}`}<br />
        <a rel="noopener noreferrer" href={currentRepo.html_url} target="_blank">Url</a><br />
        <div className="markdown"
          dangerouslySetInnerHTML={{ __html: converter.makeHtml(currentRepo.readme) }}>
        </div>
      </div>
    )
  }
}
