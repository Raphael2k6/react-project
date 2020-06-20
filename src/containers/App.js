import React,{Component} from 'react'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import Contact from '../components/Contact'
import SearchBox from '../components/SearchBox'
import './App.css'



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
//receiving data from an API
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        //Add this line of code is the date to be received is large and there will be a little lag
        if (this.state.robots.length === 0) {
            return (
                <div className='centre'>
                    <hi>Loading...</hi>
                </div>
            )
        } else {
            return (
                <div className='tc'>
                    <h1>Robotfriends</h1>
                    <Contact />
                    <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>    
                                <CardList robots={filteredRobots}/>
                            </ErrorBoundary>
                        </Scroll>
                    <footer><p>Raphael Donanu, Copyright &copy; 2020</p></footer>           
                </div>
            )
        }
        
    }
}
    


export default App;