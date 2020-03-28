import React, {Component} from 'react'
import API from '../utils/API'

export default class Logout extends Component{

    componentDidMount(){
       API.Logout().then(data=>{
           window.location.href="/Login"
       })
    }
    render (){
        return (
            <div> 
                Logout
            </div>
        )
    }
}