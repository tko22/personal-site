import React, { Component } from 'react';
import classnames from 'classnames';
import Reveal from 'react-reveal';


class AboutMe extends Component {
    render() {
        const sectionClass = classnames({'about-me-section':'true','main-section':'true'});
        return(
            <section className={sectionClass}>
                <Reveal effect="animated fadeInUp" fraction="0.99">
                    <div className="container">
                        <h1>I'm Tim.</h1>
                        <h5>An Ambitious Developer passionate about the web and learning just about everything.
                             </h5>
                        <hr className="about-me-top-hr"/>
                        <div className="row">
                            <div className="col-md-8">
                                <p>I enjoy the process of envisioning solutions and designing architectures of software products
                                    and diving deep into the code and functionalities. I love learning cutting-edge technologies and
                                    I am always looking to work with brilliant people to gain more knowledge so that in the end,
                                    I'll be able to give back and build innovate but simple solutions to improve our lives.
                                    <hr width="40" style={{marginLeft:0}}/>
                                    And oh yeah. I'm a sophomore studying Computer Engineering at the University of Illinois Urbana-Champaign.
                                    When not coding, I love going outdoors to enjoy nature, whether it's
                                    camping or going to the beach or as simple as walking around the block.
                                    I also love playing the piano and guitar in my spare time and have made some music for fun!.
                                    </p>
                            </div>
                            <div className="col-md-4">

                            </div>

                        </div>
                    </div>
                </Reveal>
            </section>
        );
    }
}
export default AboutMe;