import React, { Component } from 'react'
import NewSearch from './NewSearch.js'

 class SearchB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              querys:'',
              result:[]
         }
         this.ChangeState=this.ChangeState.bind(this)
     }
     ChangeState=event=>
     
         this.setState({querys:event.target.value})
     
     
    render() {
        return (
            <div>
            <input type="text" value={this.state.querys} onChange={this.ChangeState} placeholder="Search..."></input>
            <button onClick={this.ChangeState,console.log('jerry')}>SEARCH</button>
            <NewSearch query={this.state.querys,console.log(this.state.querys)}>
            
            </NewSearch>
            </div>
        )
    }
}

export default SearchB
