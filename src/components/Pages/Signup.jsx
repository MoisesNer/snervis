import React, { useRef, useState } from 'react'
import { Container, Button, Form, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'

import '../../App.css'
import './signup.css'
import { useAuth } from '../../Context'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }
    return (
        <>
            <h1 className="sign-up">SIGN UP</h1>
            <Container className='sign-upContainer'>
                <div className='sign-upWrap'>
                    <Card>
                        <Card.Body>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit} className='sign-upForm'>
                                <Form.Group id="email" >
                                    <Form.Control type="email" ref={emailRef} required placeholder='Enter your email' className='sign-upInput' />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Control type="password" ref={passwordRef} required placeholder='Password' className='sign-upInput' />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Control type="password" ref={passwordConfirmRef} required placeholder='Password Confirmation' className='sign-upInput' />
                                </Form.Group>
                                <Button disabled={loading} className='btn-dark' type="submit">
                                    Sign Up
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="sign-upText"> Already have an account? <Link to='/login'>Log In</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}
