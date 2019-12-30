import React, { Component } from 'react'
import  SearchB from './components/SearchB.js' 
import NewSearch from './components/NewSearch'

 class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        posts:[]
     }
   }
   
  
   
  render(){
    
    return (
      <div>
      <SearchB/>
      </div>
    )
  }
}

export default App
