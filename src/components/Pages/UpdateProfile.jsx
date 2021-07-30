import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from '../../Context'
import { Link, useHistory } from 'react-router-dom'
import '../../App.css'
import './signup.css'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword, logout } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError('')
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })
    }

    // LOG OUT
    const [logerror, setLogerror] = useState("")

    async function handleLogOut() {
        setLogerror('')
        try {
            await logout()
            history.push('/')
        } catch {
            setLogerror('Failed to log out')
        }
    }

    return (

        <>
            <h1 className="update-profile">UPDATE PROFILE</h1>
            <Container className='sign-upContainer'>
                <div className='sign-upWrap'>
                    <Card>
                        <Card.Body>
                            {/* <h2 className="sign-upText">User: {currentUser.email}</h2> */}
                            <h2 className="sign-upText">User: {(currentUser == null) ? '' : currentUser.email}</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit} className="updateProfileForm">
                                <Form.Group id="email">
                                    <Form.Label>Email: </Form.Label>
                                    <Form.Control type="email" ref={emailRef} required defaultValue={(currentUser == null) ? '' : currentUser.email} className='sign-upInput' />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password: </Form.Label>
                                    <Form.Control type="password" ref={passwordRef} placeholder={'Leave blank to skip'} className='sign-upInput' />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label>Password Confirmation: </Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} placeholder={'Leave blank to skip'} className='sign-upInput' />
                                </Form.Group>
                                <Button disabled={loading} type="submit" className='btn-dark'>
                                    Update
                                </Button>
                                <Link to='/' className='link-cancel'>
                                    <Button className='btn-dark'>CANCEL
                                    </Button>
                                </Link>

                                <Button onClick={handleLogOut} className='btn-dark' >
                                    LOG OUT
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}
