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
        return <div className="ui segment"  style={{background: "#cccccc", borderRadius: "8px"}}> 
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <h1 style={{textAlign: 'center'}}>Put city name to get its geographical coordinates</h1>
                <input type="text" style={{textAlign: 'center'}} onChange={(e)=>this.setState({term: e.target.value})}
                value={this.term}/>
                </div>
            </form>
        </div>
    }
}

export default SearchBar;