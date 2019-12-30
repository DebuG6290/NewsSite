import React, { Component } from 'react'
import axios from 'axios'
 class NewSearch extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              querys:'',
              results:[]
         }
     }
     componentDidMount(props){
         const urlAdd= this.props.query
         const theUrl='https://newsapi.org/v2/everything?q='+ urlAdd +'&sortBy=popularity&apiKey=2fdbf931094746babe5b35c90c26dc9a'
         if(urlAdd==''){
             axios.get('https://newsapi.org/v2/top-headlines?' +'country=us&' +'apiKey=2fdbf931094746babe5b35c90c26dc9a')
             .then(response=>{this.setState({results:response.data.articles})})
             .catch(error=>{console.log(error)})}
         else{
        axios.get(theUrl)
        .then(response=>{ this.setState({results:response.data.articles})})
        .catch(error=>{console.log(error)})}
   
          
         }
    render() {
        const {results}=this.state
        return (
            <div>
                
                {this.state.results.map(result=>(
            
             <li key={result.id}>
                 <img src={result.urlToImage}></img>
                <h1>{result.title}</h1>
              
              <h2>
               BY-{result.author}
              </h2>
              <p>{result.description}      To Know more click <a href={result.url}>HERE</a></p>
              
              
             </li>
           ))}
            </div>
        )
    }
}

export default NewSearch
