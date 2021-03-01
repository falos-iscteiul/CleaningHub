import React from "react"
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Login extends React.Component 
{
    constructor() {
        super()
        this.state = 
        {
          email: "",
          password: ""

        }
    }

    render() 
    {
        return (
                <div style={{paddingTop:100}} className="Login">
                  <Form>

                  {/* <Form onSubmit={handleSubmit}> */}
                    <Form.Group size="lg" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        autoFocus
                        type="email"
                        // onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Button block size="lg" type="submit">
                      Login
                    </Button>
                  </Form>
                </div>
        )
    }
}

export default Login