import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bg2 from '../images/bg2.jpg'
import bg1 from '../images/bg1.jpg'
import bg3 from '../images/bg3.jpg'
import Slide from 'react-reveal/Slide';


class Gallery extends Component {
    render() {
        return (
            <div className='bg-dark ' id='gallery'>
                <Slide up>
                    <Carousel
                        className='container'
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                    >
                        <div style={{ height: '100%' }}>
                            <img className='h-100' src={bg1} alt=' 1' />
                            <p className="legend">Asphalting</p>
                        </div>
                        <div style={{ height: '100%' }}>
                            <img className='h-100' src={bg2} alt='2' />
                            <p className="legend">Construction</p>
                        </div>
                        <div style={{ height: '100%' }}>
                            <img className='h-100' src={bg3} alt='3' />
                            <p className="legend">Worker Safety</p>
                        </div>
                    </Carousel>
                </Slide>
            </div >
        )
    }
}
export default Gallery