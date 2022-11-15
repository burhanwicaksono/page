import { React, useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
export default function Forms() {
    const [name, setName] = useState("");
    const [harga, setHarga] = useState("");
    const [jumlah, setJumlah] = useState("");
    const [sale, setSale] = useState("");
    const [total, setTotal] = useState("");
    const [bayar, setBayar] = useState("");
    const [sisa, setSisa] = useState("");
    const [inputs, setInputs] = useState("");
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setHarga(inputs.harga);
        setName(inputs.nama);
        setJumlah(inputs.jumlah);
        let totalHarga;
        if(jumlah >= 2){
            let sub = parseInt(inputs.harga) * parseInt(inputs.jumlah);
            let diskon = 0.1 * sub;
            totalHarga = sub - diskon;
        } 
        else{
            let sub = parseInt(inputs.harga) * parseInt(inputs.jumlah);
            let diskon = 0.0 * sub;
            totalHarga = sub - diskon;
        }

        let sale;
        if (jumlah >=2){
            sale = 10;
        }
        else {
            sale = 0;
        }
        setSale(sale);
        setTotal(totalHarga);
        setBayar(inputs.bayar);
        let sisa = parseInt(inputs.bayar) - totalHarga;
        setSisa(sisa);
    }
    
    return (
        <>
            <Container>
                <Row>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col className='bg-info'>
                                <Form.Label >Nama Pemesan</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nama"
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col className='bg-secondary'>
                                <Form.Label >Harga Test</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="harga"
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col className='bg-danger'>
                                <Form.Label >Jumlah Test</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="jumlah"
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col className='bg-info'>
                                <Form.Label >Bayar</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="bayar"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-grid gap-2">
                                    <Button variant="dark" size="lg" as="input" type="submit" value="Submit"/> {' '}                          
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <Container className="bg-light">
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nama Pemesan</th>
                                <th>Harga Test</th>
                                <th>Jumlah Test</th>
                                <th>Diskon</th>
                                <th>Total</th>
                                <th>Bayar</th>
                                <th>Sisa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{name}</td>
                                <td>{harga}</td>
                                <td>{jumlah}</td>
                                <td>{sale}</td>
                                <td>{total}</td>
                                <td>{bayar}</td>
                                <td>{sisa}</td>
                            </tr>
                        </tbody>
                </Table>
                </Container>
            </Container>
        </>
    )
}