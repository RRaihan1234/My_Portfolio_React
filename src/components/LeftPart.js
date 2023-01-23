import "./leftPart.css";

import { NavLink } from "react-router-dom";
import classes from "../styles/Header.module.css";
import myImage from '../images/pic-removebg-preview.png';

function LeftPart() {
    return (
      <div className="leftPart">
         <div className="leftPartTop">
               <img src={myImage} alt="my-pic" className="imageOfMine" />
               <h5 style={{textAlign:"center"}}>Shah Md. Raihanul Haque</h5>
               <h6 className="h6_1" style={{textAlign:"center"}}>Web Development Enthusiast</h6>
               <h6 className="h6_2" style={{textAlign:"center"}}>Dhaka, Bangladesh</h6>
         </div>
         <div className="leftPartBottom">
                        <ul>
                            <li className="list_item">
                              <NavLink
                                style={{color:'black',textDecoration:'none'}}
                                to="/"
                                className={(navInfo) => (navInfo.isActive ? classes.active : "")}
                              >
                                 <p style={{textAlign:"center"}}>About Me</p>
                              </NavLink>
                            </li>
                            <li className="list_item">
                              <NavLink
                                style={{color:'black',textDecoration:'none'}}
                                to="/education"
                                className={(navInfo) => (navInfo.isActive ? classes.active : "")}
                              >
                                 <p style={{textAlign:"center"}}>Education</p>
                              </NavLink>
                            </li>
                            <li className="list_item">
                              <NavLink
                                style={{color:'black',textDecoration:'none'}}
                                to="/experience"
                                className={(navInfo) => (navInfo.isActive ? classes.active : "")}
                              >
                                <p style={{textAlign:"center"}}>Experience</p>
                              </NavLink>
                            </li>
                            <li className="list_item">
                              <NavLink
                                style={{color:'black',textDecoration:'none'}}
                                to="/portfolio"
                                className={(navInfo) => (navInfo.isActive ? classes.active : "")}
                              >
                                 <p style={{textAlign:"center"}}>Portfolio</p>
                              </NavLink>
                            </li>
                            <li className="list_item">
                              <NavLink
                                style={{color:'black',textDecoration:'none'}}
                                to="/contact"
                                className={(navInfo) => (navInfo.isActive ? classes.active : "")}
                              >
                                <p style={{textAlign:"center"}}>Contact</p>
                              </NavLink>
                            </li>  
                        </ul>      
        </div> 
      </div>
    );
  }
  
  export default LeftPart;