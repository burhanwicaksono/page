import React from 'react'
import { Container, Card } from 'react-bootstrap'
function Contact() {
    return (
        <Container className='mt-5'>
            <Card style={{ width: '100%' }}>
                <Card.Header as="h5">Hubungi Kami</Card.Header>
                <Card.Body>
                    <Card.Title>Burhan Wicaksono</Card.Title>
                    <Card.Text className='bg-critical'>
                        NIM : 2110058
                        <p>Email : burhan_wicaksono@yahoo.co.id</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Contact