import React from 'react';
class Search extends React.Component{

    state= {term: ''};

    onFormSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return <div className="search">
            <h3>Search Image</h3>
            <form onSubmit={(event)=>this.onFormSubmit(event)}>
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Search..." 
                value={this.state.term}
                onChange={(e)=>this.setState({term: e.target.value})} />
            </form>
        </div>;
    }
}

export default Search;