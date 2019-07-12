import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

class Images extends Component {

    state = {
        persons: [],
        textVal: ""
      }

      constructor(props) {
        super(props);
        this.personsArray = "";
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
          .then(res => {
            this.personsArray = res.data;
            this.setState({ persons : res.data });
            console.log("data",this.state.persons);
          })
      }

      handleKeyPress = (event) =>{
        event.persist();
          console.log("search value entered",event.target.value);
          this.setState((prevState) =>{
              return {
                  persons: this.personsArray.filter(x => x.title.startsWith(event.target.value))
              }
          })
      }

    render() {
        return (
            <div>
                <div>
                    <span className="text-primary" >Enter title to search</span>
                    <p><input type="textbox"  name="searchValue" onKeyUp ={this.handleKeyPress}/></p>
                </div>
                <div>API is large wait for some time to display</div>
                <div>
                <Container>
                    <Row>
                    { this.state.persons.map(person =>
                    <Col md="3" style={{}} key={person.id}>
                        <div>{person.title}</div>
                        <img src={person.thumbnailUrl} alt={"logo"}/>
                    </Col>
                
                )}
                </Row>
                </Container>
                </div>    




            </div>
        );
    }
}

export default Images;