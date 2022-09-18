import React, { Component } from 'react'

class Registration extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            email : '',
            address :'',
            topic : ''
        }
    }

    handleChangeUsername = event => {
        this.setState(
            {   
                email : event.target.value
            }
        )
    }

    handleChangeAddress = event =>{
        this.setState(
            {
                address : event.target.value
            }
        )
    }

    handleChangeTopic = event => {
        this.setState(
            {
                topic : event.target.value
            }
        )
    }

    handleSubmit = event =>{
        alert(`${this.state.email} ${this.state.address} ${this.state.topic}`)
        event.preventDefault()
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Username
                    </label>
                    <input type='text' value={this.state.email} onChange={this.handleChangeUsername}></input>
                </div>
                <div>
                    <label>Address</label>
                    <textarea value={this.state.address} onChange={this.handleChangeAddress}></textarea>
                </div>
                <div>
                    <label>Topics</label>
                    <select value={this.state.topic} onChange={this.handleChangeTopic}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div>
                <div>
                  <button type='Submit'>Submit</button>  
                </div>
            </form>
        )
    }   
}

export default Registration
