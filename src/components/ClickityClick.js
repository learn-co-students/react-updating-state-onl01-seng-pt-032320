// Code ClickityClick Component Here
import React from 'react'


class ClickityClick extends React.Component {
    constructor(){
        super()

        this.state ={
            hasBeenClicked: false,
            
        };
    }

    handleClick = () =>{
        
        this.setState(previousState =>{
            return{
            hasBeenClicked: !previousState.hasBeenClicked,
            }
        })
        
    };


    render(){
        return(
            <div>
                <p>The light is {this.state.hasBeenClicked ? 'Off' : 'On'}!</p>
                <button onClick={this.handleClick}>{this.state.hasBeenClicked ? 'Off' :'On'}</button>
            </div>
        )
    }


}

export default ClickityClick;
