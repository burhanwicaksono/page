import React from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import tarif from '../assets/tarif.jpeg'

function Service() {
    return (
        <Container>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={tarif}/>
                <Card.Body>
                    <Card.Title>Silakan Pilih Jenis Test</Card.Title>
                    <Card.Text>
                        Anda dapat memilih jenis test STIFIn yang Anda kehendaki dengan membaca brosur diatas dan silakan mengklik tombol dibawah
                        untuk memesannya.
                    </Card.Text>
                    <Button variant="dark" href="./Form">Booking Test STIFIn</Button> { }
                </Card.Body>
            </Card>
        </Container>

    )
}

export default Service