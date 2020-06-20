import React, {Component} from 'react';
//to display an error message if the app breaks to the user

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
          if (this.state.hasError) {
              return <h1>Oooops, something went wrong</h1>
          } 
          return this.props.children 
        
    }
}


export default ErrorBoundary;