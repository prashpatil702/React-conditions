import React , {Component} from 'react'
class UserGreeting extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            loggedIn : true,
            anotherCondition : true
        }
    }
    render(){

        // let message
        // if(this.state.loggedIn)
        //     message = <div>Welcome Prashant </div>
        // else
        //     message = <div>Welcome Guest </div>
        // return <div>{message}</div>


        // if(this.state.loggedIn){
        //     return <div>Welcome Prashant </div>
        // }
        // else {
        //     return <div>Welcome Guest </div>
        // }

        //return this.state.loggedIn?(<div>Welcome Prashant</div>):(<div>Welcome Guest</div>)

        return this.state.loggedIn && <div>Welcome Prashant </div>
        
    }
}

export default UserGreeting