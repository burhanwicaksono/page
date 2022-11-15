import React from 'react'
import {Carousel} from 'react-bootstrap';
import Service from './Service';
import About from './About';
import stifin2 from '../assets/stifin2.jpg';
function Home() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.psikologanda.com/assets/images/program/2021-11-15-10-57-53.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Ketahui Kecerdasan Otak Anda</h3>
                        <p>Segera Lakukan Test Kecerdasan Otak Anda Dengan STIFIn Amazing</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://1.bp.blogspot.com/-IoYB3hABfgo/X8cUeSAhkeI/AAAAAAAARw8/Y3QwFiCOeU4Yd8R8K6mLhP_Dv7g4d4xGgCLcBGAsYHQ/s2048/cropped-logo-stifin-genetic-intelligence-kab-malang1.png"
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={stifin2}
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
            <Service />
            <About />
        </>
    )
}

export default Home