import React, { Component } from 'react'

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
    <div className="movie-card card">
      <img className="card-img-top" alt="" 
        src="http://react-movie-cards.drminnaar.me/images/Final_Fantasy_Spirits_Within.jpg"/>
      <div className="card-body">
        <h4 className="card-title">Kingsglaive</h4>
        <h6 className="card-subtitle mb-2 text-muted">Final Fantasy XV</h6>
        <p className="text-justify" style={{fontSize: "14px"}}>King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom
          from the Niflheim empire's plans to steal the sacred crystal.
        </p>
      </div>
      <div className="card-footer">
        <div className="clearfix">
          <div className="float-left mt-1">
            <div>
              <div style={{overflow: "hidden"}}>
                <div style={{width: "99px"}}>
                  <div style={{width: "110px", position: "absolute"}}>
                    <i className="fa fa-star-o fa-lg" style={{padding: "1px"}}></i>
                    <i className="fa fa-star-o fa-lg" style={{padding: "1px"}}></i>
                    <i className="fa fa-star-o fa-lg" style={{padding: "1px"}}></i>
                    <i className="fa fa-star-o fa-lg" style={{padding: "1px"}}></i>
                    <i className="fa fa-star-o fa-lg" style={{padding: "1px"}}></i>
                  </div>
                  <div style={{width: "110px"}}>
                    <i className="fa fa-star fa-lg" style={{padding: "1px"}}></i>
                    <i className="fa fa-star fa-lg" style={{padding: "1px"}}></i>
                    <i className="fa fa-star fa-lg" style={{padding: "1px"}}></i>
                    <i className="fa fa-star fa-lg" style={{padding: "1px"}}></i>
                    <i className="fa fa-star fa-lg" style={{padding: "1px"}}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer-badge float-right badge badge-primary badge-pill">4.5</div>
        </div>
      </div>
    </div>
    );
  }
}
 
export default MovieCard;