import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

export default class Users extends Component {
    
    state = {
        personsValue: [],
      }
      constructor(props) {
        super(props);
        this.personsData = [];
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            this.personsData = res.data;
            this.setState({ persons : res.data });
            console.log("person data", this.personsData);   
          })
      }

     

    render() {
        return (
            <div>
                <b>Users Data used https://jsonplaceholder.typicode.com/users   api</b>
                <Container>
                    <Row>
                    { this.personsData.map(person =>
                    <Col md="6"  key={person.id}>
                        <div style={{ background: 'grey', margin: '20px'}}>
                            <div>{person.id}.{person.name}</div>
                            <div>{person.username}</div>
                            <div>{person.email}</div>
                            <div>{person.phone}</div>
                            <div>{person.website}</div>
                            <div>Address:</div>
                            <div>{person.address.street}</div>
                        </div>
                    </Col>
                
                )}
                </Row>
                </Container>
                   




            </div>
        );
    }
}
