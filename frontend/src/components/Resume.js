import React, { Component } from 'react';
import classnames from 'classnames';
import uiuc from '../uiuc.png'

class Resume extends Component {
    render() {
        const sectionClass = classnames({'main-section':'true','work-experience-section':'true'});
        const subRightClass = classnames({'sub':'true','right':'true'});
        return(
            <section className={sectionClass}>
                <h5 style={{fontSize:24, paddingBottom:10}}>Resume</h5>
                <div className="container">
                    <p className="small-header">EDUCATION</p>
                    <hr/>
                    <div className="row" style={{marginTop:30}}>
                        <div className="col-1">
                            <img style={{paddingTop:4}}src={uiuc} height="40" width="31"/>
                        </div>
                        <div className="col-8">
                            <div className="left-align-wrapper">
                                <p className="title">University of Illinois Urbana Champaign</p>
                                <p className="sub">Computer Engineering, B.S. &#8212; Deans List, James Scholar</p>
                                <div className="content" style={{fontSize:13,marginTop:20}}>
                                    <p className="sub">Some Relevant Classes</p>
                                    <ul style={{textDecoration:'none'}}>
                                        <li>ECE 220: Computer Systems and Programming(C and LC3 Assembly)</li>
                                        <li>ECE 210: Analog Signal Processing</li>
                                        <li>MATH 241: MultiVariable Calculus</li>
                                        <li>MATH 286: Differential Equations Plus Linear Systems </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <p className="right" style={{marginBottom:0}}>2016-2020</p>
                            <p className={subRightClass}>3.75 GPA</p>
                        </div>


                    </div>
                </div>
            </section>
        );
    }
}
export default Resume;