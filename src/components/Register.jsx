import React from "react"
import firebase from 'firebase';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Register extends React.Component 
{
    constructor() {
        super()
        this.state = 
        {
            primeiroNome: "",
            segundoNome: "",
            nacionalidade: "",
            dataNascimento: "",
            rua: "",
            codigoPostal: "",
            localidade: "",
            contactoTelefonico: "",
            email: ""
        }

        this.registerClick = this.registerClick.bind(this);
    }

    registerClick() 
    {
            const config = 
            {
                apiKey: "AIzaSyB2t8aMWPcQFGCKCy-TzAW_WsA-vm37VrQ",
                authDomain: "cleaninghub-23a2c.firebaseapp.com",
                databaseURL: "https://cleaninghub-23a2c-default-rtdb.firebaseio.com",
                projectId: "cleaninghub-23a2c",
                storageBucket: "cleaninghub-23a2c.appspot.com",
                messagingSenderId: "967816808845",
                appId: "1:967816808845:web:2fba9803b8bbafff38d5c4",
                measurementId: "G-MMCZ5W595Q"
            };
            
            firebase.initializeApp(config);
            
            const db = firebase.firestore();
            
            db.collection("Colaboradores").doc("CB2").set({
              primeiroNome: this.state.primeiroNome,
              segundoNome: this.state.segundoNome,
              nacionalidade: this.state.nacionalidade,
              dataNascimento: this.state.dataNascimento,
              rua: this.state.rua,
              codigoPostal: this.state.codigoPostal,
              localidade: this.state.localidade,
              contactoTelefonico: this.state.contactoTelefonico,
              email: this.state.email
            })
            .then(() => {
                alert("Document successfully written!");
            })
            .catch((error) => {
                alert("Error writing document: ", error);
            });
        
    }

    render() 
    {
        return (
                <div style={{paddingTop:100}} className="Login">
                  <Form>

                  {/* <Form onSubmit={handleSubmit}> */}
                    <Form.Group size="lg">
                      <Form.Label>Primeiro Nome</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        onChange={(e) => this.state.primeiroNome = e.target.value}
                      />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                      <Form.Label>Segundo Nome</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => this.state.segundoNome = e.target.value}
                      />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                      <Form.Label>Nacionalidade</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => this.state.nacionalidade = e.target.value}
                      />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                      <Form.Label>Data Nascimento</Form.Label>
                      <Form.Control
                        type="date"
                        onChange={(e) => this.state.dataNascimento = e.target.value}
                      />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                      <Form.Label>Rua</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => this.state.rua = e.target.value}
                      />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                      <Form.Label>Código-postal</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => this.state.codigoPostal = e.target.value}
                      />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                      <Form.Label>Localidade</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => this.state.localidade = e.target.value}
                      />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                      <Form.Label>Contacto telefónico</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => this.state.contactoTelefonico = e.target.value}
                      />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => this.state.email = e.target.value}
                      />
                    </Form.Group>
                    <Button onClick={this.registerClick}>
                      Login
                    </Button>
                  </Form>
                </div>
        )
    }
}

export default Register