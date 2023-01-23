import "./portfolio.css"

import Carousel from 'react-bootstrap/Carousel';

import socialmedia from '../images/socialmedia.PNG';
import chatlatest from '../images/chatlatest.PNG';
import quiz1 from '../images/quiz1.PNG';
import crud from '../images/crud.PNG';
import quiz from '../images/quiz.PNG';
import country from '../images/country.PNG';
import bookRedux from '../images/bookRedux.PNG';
import emp_info_storage from '../images/emp_info_storage.PNG';
import html_css1 from '../images/html_css1.PNG';
import html_css2 from '../images/html_css2.PNG';

function Portfolio() {
  return (
    <div className="portfolio_section">
          <Carousel>
            <Carousel.Item>
              <div className="c1">
                  <img
                    className="d-block w-100 img1"
                    src={socialmedia}
                    alt="socialmedia"
                  />
              </div>
              <Carousel.Caption>
                <h3>Social Media App using MERN Stack</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="c2">
                  <img
                    className="d-block w-100 img2"
                    src={chatlatest}
                    alt="chat app"
                  />
              </div>
              <Carousel.Caption>
                <h3>Realtime Chat App using MERN Stack and Socket.io</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="c3">
                  <img
                    className="d-block w-100 img3"
                    src={quiz1}
                    alt="quiz app"
                  />
              </div>
              <Carousel.Caption>
                <h3>Millionaire Quiz Application using React</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="c4">
                  <img
                    className="d-block w-100 img4"
                    src={crud}
                    alt="CRUD App"
                  />
              </div>
              <Carousel.Caption>
                <h3>Food CRUD Application using MERN Stack
                                      (this has also been completed using MySQL,
                                      Node JS, Express JS, React JS, and MEAN Stack)</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="c5">
                  <img
                    className="d-block w-100 img5"
                    src={quiz}
                    alt="Another quiz app"
                  />
              </div>
              <Carousel.Caption>
                <h3>Quiz Application using React</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="c6">
                  <img
                    className="d-block w-100 img6"
                    src={country}
                    alt="Country App"
                  />
              </div>
              <Carousel.Caption>
                <h3>Country Application using React</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="c7">
                  <img
                    className="d-block w-100 img7"
                    src={bookRedux}
                    alt="bookRedux App"
                  />
              </div>
              <Carousel.Caption>
                <h3>React Book CRUD App using Redux</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="c8">
                  <img
                    className="d-block w-100 img8"
                    src={emp_info_storage}
                    alt="Employee Info Storage App"
                  />
              </div>
              <Carousel.Caption>
                <h3>Employee Info Storage Application using Angular, 
                                      Bootstrap, and JSON Server</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="c9">
                  <img
                    className="d-block w-100 img9"
                    src={html_css1}
                    alt="Web Template 01"
                  />
              </div>
              <Carousel.Caption>
                <h3>A website template demo using HTML and CSS</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="c10">
                  <img
                    className="d-block w-100 img10"
                    src={html_css2}
                    alt="Web Template 02"
                  />
              </div>
              <Carousel.Caption>
                <h3>A website template demo using HTML and CSS</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="para">
            <p style={{textAlign:"center"}}>Note : I did this project with the help of the internet.</p>
        </div>
    </div>
  );
}

export default Portfolio;