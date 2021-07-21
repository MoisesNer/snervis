import React, { useRef, useState } from "react"
import { Container, Form, Button, Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from '../../Context'

import '../../App.css'
import './signup.css'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your email inbox for further instructions')
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }

    return (

        <>
            <h1 className="forgot-password">PASSWORD RESET</h1>
            <Container className='sign-upContainer'>
                <div className='sign-upWrap'>
                    <Card>
                        <Card.Body>
                            <h2 className="sign-upText">Enter your data to receive further instructions</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {message && <Alert variant="success">{message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Control type="email" ref={emailRef} required placeholder='Enter your email' className='fp-input' />
                                </Form.Group>
                                <Button disabled={loading} className="btn-dark" type="submit">
                                    Reset Password
                                </Button>
                            </Form>
                            <div className="loginText">
                                <Link to='login'>Log In</Link>
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
