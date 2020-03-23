import React, { Component } from 'react'
import {
    Row, Col
} from 'reactstrap';
import Slide from 'react-reveal/Slide';

class Services extends Component {
    render() {
        return (
            <div className='bg-dark text-light'>
                <div id='services' className='container py-4'>
                    <Slide up>
                        <Row className='pt-4 my-5'>
                            <Col className='text-center'>
                                <i className="fas fa-hard-hat fa-3x text-muted"></i>
                                <h5 className='pt-3' >Building Construction</h5>
                                <p className='text-muted'> We are one of the the largest construction companies serving
                            in Melbourne metropolitan area as well as regional Victoria.</p>
                            </Col>
                            <Col className='text-center'>
                                <i className="fas fa-truck-pickup fa-3x text-muted"></i>
                                <h5 className='pt-3' >Building Repairs</h5>
                                <p className='text-muted'> Domestic and commercial building maintenance services and building repairs in Melbourne</p>
                            </Col>
                            <Col className='text-center'>
                                <i className="fas fa-ruler-combined fa-3x text-muted"></i>
                                <h5 className='pt-3' >Demolition</h5>
                                <p className='text-muted'>  We have a strong and reliable reputation on
                                delivering top quality services within your
                            desired timeframe and all for affordable prices. </p>
                            </Col>
                        </Row>
                    </Slide>
                    <Slide up>
                        <Row className='py-4 my-5'>
                            <Col className='text-center'>
                                <i className="fas fa-hammer fa-3x text-muted"></i>
                                <h5 className='pt-3' >Foundation</h5>
                                <p className='text-muted'> Foundations are perhaps the most vital element of
                            any building, so you need to get them right. </p>
                            </Col>
                            <Col className='text-center'>
                                <i className="fas fa-wrench fa-3x text-muted"></i>
                                <h5 className='pt-3' >Painting & Exterior</h5>
                                <p className='text-muted'> Top-quality brush. Investing
                            in good equipment pays off in faster, better quality work.</p>
                            </Col>
                            <Col className='text-center'>
                                <i className="fas fa-drafting-compass fa-3x text-muted"></i>
                                <h5 className='pt-3' >Site Management</h5>
                                <p className='text-muted'> Construction site management involves managing construction projects,
                            such as buildings, bridges, roads or industrial facilities.</p>
                            </Col>
                        </Row>
                    </Slide>

                </div>
            </div>
        )
    }
}
export default Services