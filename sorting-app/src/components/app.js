import React from 'react';
import Search from './search'
import ImageList from './imagelist';
class App extends React.Component{

    state = { pics : []}

     SubmitData = async (term)=>{
        const options={
            headers:{
                'Authorization': 'Client-ID gOI76iWx8YOY7vDqm-Od-JYdqRIy8b2WceGtwwVfG0I',
            }
        }
        let url='https://api.unsplash.com/search/photos?query=' + term;
        await fetch(url,options).then(response => response.json())
        .then(data =>{
            this.setState({pics: data.results})
        } );
        
    }

    render(){
        return <div className="app-component">
                <Search onSubmit={this.SubmitData} />
                <div className="italic">Found: {this.state.pics.length} Images</div>
                <ImageList images={this.state.pics}/>
            </div>;
    }
}


export default App;
