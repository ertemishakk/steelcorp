import React, { Component } from 'react'
import {
    Row, Col
} from 'reactstrap';
import pp from '../images/pp.jpeg'
import Slide from 'react-reveal/Slide';

class About extends Component {
    render() {
        return (

            <div id='about' className='bg-dark text-light'>
                <Slide up>
                    <h1 className='text-center pt-5'>ABOUT US</h1>
                    <Row className='py-3'>
                        <Col className='text-center'>
                            <img className='img-fluid px-3' src={pp} alt='steelcorp' />
                        </Col>
                    </Row>
                </Slide>
                <Slide up>
                    <Row>
                        <Col className='px-5 pt-3 mx-3'>
                            <p>
                                Founded by David Steel in
                                2009, the steelcorp began by hand laying
                                 asphalt driveways & pathways. From these
                                 humble beginnings the company dedicated
                                 itself to learning the asphalt craft and
                                 becoming a cut above the rest.
                             </p>
                            <p>
                                Now with a combined 25+ years of asphalting experience and a
                                professional and dedicated team, SteelCorp are
                                now servicing the biggest names in the construction & infrastructure
                                industries.  Companies and organisations such as Downer, Vic Roads,
                                Civilex, City West Water, Yarra Valley Water, South East Water, Rokon,
                                National Australian Pipelines Services, Kaycee Excavations, Comdain
                                Infrastructure, Multipipe & John Holland all trust SteelCorp
                                to deliver professional and exceptional quality results.
                        </p><br />
                        </Col>
                    </Row>
                </Slide>
            </div>

        )
    }
}
export default About