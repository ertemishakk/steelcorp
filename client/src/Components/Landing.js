import React, { Component } from 'react'
import {
    Col,
    Row,
    Button

} from 'reactstrap';
import Flip from 'react-reveal/Flip';

class Landing extends Component {
    render() {
        return (

            <header class="masthead">
                <div style={{ height: '100%' }}>
                    < div className='overlay' >
                        <Row className='motto mx-0 '  >
                            <Col className='text-center my-auto py-auto'>
                                <Flip left cascade >
                                    <h1 className='title-text font-weight-bold text-center'>
                                        <span>STEELCORP </span>
                                        <span>INFRASTRUCTURE </span>
                                        <span>SERVICES</span>  </h1>
                                    <h1 className='subtitle-text text-light text-center'>ALWAYS DEDICATED AND DEVOTED</h1>
                                    <a href="#contact"> <Button className='mt-4 border-0 btn-lg' color='warning'>Get a Quote</Button></a>
                                </Flip>
                            </Col>
                        </Row>
                    </div >
                </div>



            </header>
        )
    }
}
export default Landing