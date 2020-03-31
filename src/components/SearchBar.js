import React from 'react'

class SearchBar extends React.Component {

    state={
        term: ''
    };

    onInputChange(event){
        console.log(event.target.value)
        

    }
    onInputClick(){
        console.log("klik")
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return <div className="ui segment"> 
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Wyszukiwarka obrazków</label>
                <input type="text" onChange={(e)=>this.setState({term: e.target.value})}
                value={this.term}/>
                </div>
            </form>
        </div>
    }
}

export default SearchBar;