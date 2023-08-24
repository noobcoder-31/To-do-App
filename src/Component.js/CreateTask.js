import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./CreateTask.css";
export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlenewTask = this.handlenewTask.bind(this);
  }
  handleChange(evt) {
    this.setState({ task: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTask(this.state.task);
    let form = document.querySelector("form");
    form.hidden = true;
    let task = document.querySelector(".NewTask");
    task.hidden = false;
    this.setState({ task: "" });
  }
  handlenewTask(e) {
    let form = document.querySelector("form");
    form.hidden = false;
    let task = document.querySelector(".NewTask");
    task.hidden = true;
  }
  render() {
    return (
      <>
        <div className="NewTask">
          <button className="newTask" id="btn" onClick={this.handlenewTask}>
            <span>New Task </span>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <form onSubmit={this.handleSubmit} hidden>
          <input
            type="text"
            className="TextBox"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button type="submit" className="add" id="btn">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </form>
      </>
    );
  }
}
