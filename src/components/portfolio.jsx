import React from "react";

//import stock
import stock from "../img/bus.jpg";
import stock1 from "../img/ias.jpg";
import stock2 from "../img/quiz.jpg";
import stock3 from "../img/cache.jpg";
import stock4 from "../img/transport.jpg";
import stock5 from "../img/ply.png";

import {Link} from 'react-router-dom';

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">My Works</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title"><a href="https://github.com/nidh-ish/Bus_Ticketing_System" target="_blank" rel="noopener noreferrer">Bus Ticketing System</a></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            C/C++
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title"><a href="https://github.com/nidh-ish/IAS_Computer" target="_blank" rel="noopener noreferrer">IAS Computer</a></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title"><a href="https://github.com/nidh-ish/Socket_Programming" target="_blank" rel="noopener noreferrer">Multiplayer Quiz Game</a></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title"><a href="https://github.com/nidh-ish/Caches" target="_blank" rel="noopener noreferrer">Cache Implementation</a></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={stock4} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title"><a href="https://github.com/nidh-ish/Transport_System" target="_blank" rel="noopener noreferrer">Transport System</a></h2>
                        <div className="w-more">
                          <span className="w-ctegory">Java</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={stock5} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title"><a href="https://github.com/nidh-ish/CPP_Project" target="_blank" rel="noopener noreferrer">PLY File Reader</a></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            C/C++
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;