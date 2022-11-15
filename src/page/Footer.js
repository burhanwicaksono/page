import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
function Footer() {
    return (
        <Container>
            <Row >
                <Col md={12}>
                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>© 2022 Copyright: Burhan Wicaksono</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer