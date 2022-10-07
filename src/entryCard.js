import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Tab, Tabs } from 'react-bootstrap';

const Cards = () => {

    return(
        <Card className="credentials">
            <Card.Body>
                <Tabs    
                defaultActiveKey = "signUp"
                className = "mb-3" >
                    <Tab
                    eventKey= "signUp"
                    title = "Sign Up" >
                        <Form>
                            <Form.Group 
                            controlId="formBasicEmail"
                            className="form-spacing">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group 
                            controlId="formBasicPassword"
                            className="form-spacing">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group 
                            controlId="formBasicPassword"
                            className="form-spacing" >
                                <Form.Label>Re-Enter password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className="card-btn" type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </Tab>
                    <Tab
                    eventKey="logIn"
                    title = "Log In" >
                        <Form>
                            <Form.Group 
                            controlId="formBasicEmail"
                            className="form-spacing">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group 
                            controlId="formBasicPassword"
                            className="form-spacing">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className="card-btn" type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
        
    );
}

export default Cards;