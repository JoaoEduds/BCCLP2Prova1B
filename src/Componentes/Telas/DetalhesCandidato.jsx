import { Container, Card, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function DetalhesCandidato(props) {
    const [formValidado, setFormValidado] = useState(false); // Adicionei o estado para validação

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setFormValidado(true);
    };

    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height="300" width="300" src={props.candidatoSelecionado.avatar} />
                <Card.Body>
                    <Card.Title>{"Candidato: " + props.candidatoSelecionado.nome}</Card.Title>
                    <Card.Text>
                        <p>{"Email: " + props.candidatoSelecionado.email}</p>
                        <p>{"Questionamentos: "}</p>
                        <p>{"Propostas: " + props.candidatoSelecionado.propostas.join(", ")}</p>
                    </Card.Text>
                    <Button className="mt-1" variant="success" onClick={() => props.setDetalharCandidato(false)}>Voltar</Button>
                </Card.Body>
            </Card>
            <Form noValidate validated={formValidado} onSubmit={handleSubmit}>
                <Row className="mb-4">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Dúvida</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="duvida"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira uma dúvida.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Enviar Dúvida</Button>
            </Form>
        </Container>
    );
}
