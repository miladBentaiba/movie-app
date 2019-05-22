import React, { Component } from 'react'

export default class MovieCard extends Component {
  render() {
    const { title, image, description, year, ranking } = this.props.item
    return (
      <div className="movie-card">
        <img className="card-img-top img-movie" alt="" src={image} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{year}</h6>
          <p className="text-justify" style={{ fontSize: "14px" }}>{description}</p>
        </div>
        <div className="card-footer">
          <div className="card-footer-badge float-right badge badge-primary badge-pill">{ranking}</div>
        </div>
      </div>
    );
  }
}