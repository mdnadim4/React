import React, { Component } from 'react'

class States extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            count: 10,
            color: 'black',
            textAlign: 'center'
        }
    }

    decrease = () => {
        this.setState({
            count: this.state.count - 1
        })

        if(this.state.count <= 5){
            this.setState({
                color: 'red'
            })
        }else if(this.state.count >= 15){
            this.setState({
                color: 'green'
            })
        }else{
            this.setState({
                color: 'black'
            })
        }
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        })

        if(this.state.count <= 5){
            this.setState({
                color: 'red'
            })
        }else if(this.state.count >= 15){
            this.setState({
                color: 'green'
            })
        }else{
            this.setState({
                color: 'black'
            })
        }
    }

    render(){
        return(
            <div>
                <h1 style = {{ color: this.state.color, textAlign: this.state.textAlign }}>
                    <button onClick = { this.decrease } > - </button>
                    { this.state.count } 
                    <button onClick = { this.increase } > + </button>
                </h1>
            </div>
        )
    }
}

export default States