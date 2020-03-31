import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component{
    state = {images: []}
    onSearchSubmit = term=> {
        unsplash.get('/search/photos', {
            params: {
                query: term
            }
        })
            .then(pics => {
                this.setState({ images: pics.data.results })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        return (
            <div className= "ui container" style ={{marginTop:"20px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
    
};

export default App;