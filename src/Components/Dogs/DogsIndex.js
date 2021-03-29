import React, { Component } from "react";
import DogsDisplay from "./DogsDisplay";

 class DogsIndex extends Component {
    constructor(props) {
      super(props);
      this.state = {
        img: "",
      };
    }

    componentDidMount() {

        fetch("https://dog.ceo/api/breeds/image/random")
          .then((res) => res.json())
          .then((data) =>
            this.setState({
              img: data.message ,
            })
            )
            .catch((error) => 
              this.setState({
                img:"https://image.freepik.com/free-vector/broken-computer-design_1133-30.jpg" ,
              })
          );  
      }


      render() {
        return (
          <div>
            <h1>Random Dog Photos</h1>
              <button 
              onClick={this.componentDidMount.bind(this)}>
              See Dogs Here</button>
            <DogsDisplay image={this.state.img} />
          </div>
        );
      }
    }

    export default DogsIndex;