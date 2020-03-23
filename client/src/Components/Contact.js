import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Row, Container, Col, Alert } from 'reactstrap';
import Slide from 'react-reveal/Slide';
import classnames from 'classnames'
import axios from 'axios'

class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        errors: {},
        success: ''
    }

    valueChanged = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }

    submitForm = (e) => {
        e.preventDefault();
        let data = this.state
        axios.post('/contact', data)
            .then(res => {
                this.setState({
                    success: res.data.success,
                    errors: {},
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                })
            })
    }
    render() {
        return (
            <div className='bg-dark py-4' id='contact'>
                <Container className='text-light py-5'>
                    <Slide right>
                        <h1 className='text-center'>GET IN TOUCH WITH US</h1>
                        <Row>
                            <Col>
                                <h5 className='mx-3 mt-3 text-center'>Have a question? We'd love to hear from you. Reach us using one of the
                                following methods and we'll respond as soon as possible.  </h5>
                            </Col>
                        </Row>
                        <Row className='pt-5'>
                            <Col>
                                <Form className='mx-3 mt-2 mb-3' onSubmit={this.submitForm}>
                                    <FormGroup>
                                        <Label for="name">Name*</Label>
                                        <Input type="text" value={this.state.name} name="name" placeholder="Name"
                                            onChange={this.valueChanged}
                                            className={classnames('', { 'is-invalid': this.state.errors.name })}
                                        />
                                        <div className='invalid-feedback'>{this.state.errors.name}</div>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleEmail">Email*</Label>
                                        <Input type="email" value={this.state.email} name="email" placeholder="Email"
                                            onChange={this.valueChanged}
                                            className={classnames('', { 'is-invalid': this.state.errors.email })}
                                        />
                                        <div className='invalid-feedback'>{this.state.errors.email}</div>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="subject">Subject*</Label>
                                        <Input type="text" value={this.state.subject} name="subject" placeholder="Subject"
                                            onChange={this.valueChanged}
                                            className={classnames('', { 'is-invalid': this.state.errors.subject })}
                                        />
                                        <div className='invalid-feedback'>{this.state.errors.subject}</div>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleText">Your message*</Label>
                                        <Input type="textarea" rows={10} value={this.state.message} name="message" placeholder='Drop your message here'
                                            onChange={this.valueChanged}
                                            className={classnames('', { 'is-invalid': this.state.errors.message })}
                                        />
                                        <div className='invalid-feedback'>{this.state.errors.message}</div>
                                    </FormGroup>

                                    {this.state.success !== '' && this.state.success !== undefined &&
                                        <Alert color='success'>{this.state.success}</Alert>

                                    }
                                    <FormGroup>
                                        <Input type='submit' className='bg-success border-0 text-light' value='Send' />
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </Slide>
                </Container>
            </div>
        )
    }
}
export default Contact