import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"

import '../../App.css'
import './signup.css'
import { useAuth } from '../../Context'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to sign in")
        }

        setLoading(false)
    }
    return (
        <>
            <h1 className="login">LOGIN</h1>
            <Container className='sign-upContainer'>
                <div className='sign-upWrap'>
                    <Card>
                        <Card.Body>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Control type="email" ref={emailRef} required placeholder='Enter your email' className='sign-upInput' />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Control type="password" ref={passwordRef} required placeholder='Enter your password' className='sign-upInput' />
                                </Form.Group>
                                <Button disabled={loading} className='btn-dark' type="submit">
                                    Log In
                                </Button>
                            </Form>
                            <div className="loginText">
                                <Link to='forgot-password'>Forgot password?</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="sign-upText">
                        Need an account? <Link to='/sign-up'>Sign Up</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}
