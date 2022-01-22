import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';

class App extends React.Component{
    state = {lat : null, errMessage : ''};
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            err => this.setState({errMessage : err.message})
        );
    }
    render(){
        // return <div>Latitude : {this.state.errMessage ? this.state.errMessage : this.state.lat}</div>
        return this.state.lat ?  <SeasonDisplay lat={this.state.lat} /> : <Spinner message = "Please accept location request" />
    }
}



ReactDom.render(<App />,document.querySelector("#root"));