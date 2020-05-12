import React from "react";
import SearchBar from "./SearchBar";
import LocationList from "./LocationList";
import geoLocation from "../api/geoLocation";
import Header from './layout/Header'
import {BrowserRouter, Route} from 'react-router-dom'
import About from './pages/About'
class App extends React.Component {

    state = { locations: [] }
    onSearchSubmit = (loc) => {
        geoLocation.get('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php', {
            params: {
                location: loc
            }
        })
            .then((response) => {
                this.setState({ locations: response.data.Results })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="ui container" style={{ marginTop: "20px", background: "#ffffff" }}>
                    <Header />
                    <Route exact path="/" render={props => (<React.Fragment>
                        <SearchBar onSubmit={this.onSearchSubmit} />
                        <LocationList locations={this.state.locations} />
                    </React.Fragment>)} />
                        <Route path ="/about" component={About}/>
                </div>
            </BrowserRouter>
        ); 
    }
    
};

export default App;