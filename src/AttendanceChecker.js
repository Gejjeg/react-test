import React from "react";

export class AttendenceChecker extends React.Component {
    state = {
        name: "",
        classCount: "",
        inClass: ""
    }

    nameHandle = (event) => {
        const newName = event.target.value
        this.setState({
            name: newName = event.target.value
        })
    }

    nameUpdate = (event) => {
        const nameUpdate = event.target.value
        this.setState({
            name: nameUpdate,
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1 name="name" value={this.state.name}></h1>
                    <p name="classCount" value={this.state.classCount}></p>
                    <p name="inClass" value={this.state.inClass}></p>
                </div>
                <form>
                    <input name="studentName" placeholder="Student's name" onChange={this.nameHandle} />
                    <button name="saveName" onClick={this.nameHandle}>Save Student Name</button>
                </form>
                <button name="inClass">Join the class</button>
            </div>
        )
    }
}