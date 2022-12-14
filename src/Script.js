import { Component } from "react";
import time from './time.png';


export class YourGoal extends Component {
    state = {
        userInput: "",
        goalLine: []
    }

    onChangeEvent(e) {
       this.setState({userInput: e});
    }

    addItem(input) {
        if (input === '') {
            alert("Please enter an item");
        }

        else {
            let goalArray = this.state.goalLine;
            goalArray.push(input);
            this.setState({goalLine: goalArray, userInput: ''})
            console.log(goalArray);
        }
        
    }


    addnewElement(event) {
        const li = event.target;
        li.classList.toggle('newtoggel');
    }

    deletItem() {
       let goalArray = this.state.goalLine;
       goalArray = [];
       this.setState({goalLine: goalArray})
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render () {
        return(
        <div className="main_block"> 
            <form onSubmit={this.onFormSubmit}>

            <div>
                <img src={time} width="300px" alt="imge"/>
            </div>

            <div className="titel">
                <h1>Your goals</h1>
            </div>

            <div>
            <input placeholder="What are ypur goals?" type="text"
            onChange={(e) => {this.onChangeEvent(e.target.value)}} 
            value={this.state.userInput} />
            </div>

            <div>
                <button className="btn-add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
            </div>

            
                <ul>
                    {this.state.goalLine.map((item, index) => (
                        <li onClick={this.addnewElement} key={index}>{item}</li>
                    ))}
                </ul>
            <div>
                <button className="btn-delete" onClick={() => this.deletItem()}>Delete</button>
            </div>
            </form>
        </div>   
        )
    }
}