import React from "react"

class Login extends React.Component 
{
    constructor() {
        super()
        this.state = 
        {
        }
    }

    render() 
    {
        return (
                <div className="Login">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                      Login
                    </Button>
                  </Form>
                </div>
        )
    }
}

export default Login