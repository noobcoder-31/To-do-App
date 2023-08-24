import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import "./TaskItem.css";
export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = { task: this.props.taskItem.taskname, isEditing: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }
  deleteTask() {
    this.props.deleteTask(this.props.idx);
  }
  toggleTask() {
    this.props.toggleTask(this.props.idx);
  }
  setIsEditing(editing) {
    this.setState({ isEditing: editing });
  }
  handleChange(evt) {
    this.setState({ task: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editTask(this.props.idx, this.state.task);
    this.setState({ isEditing: false });
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <tr>
          <td colSpan="2">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.task}
                onChange={this.handleChange}
              />
              <span style={{ float: "right" }}>
                <button className="save task">
                  <FontAwesomeIcon icon={faFloppyDisk} />
                </button>
                <button
                  className="back task"
                  onClick={() => this.setIsEditing(false)}
                >
                  <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
                </button>
              </span>
            </form>
          </td>
        </tr>
      );
    } else {
      result = (
        <tr>
          <td onClick={this.toggleTask} className="task">
            <input
              type="checkbox"
              readOnly
              checked={this.props.taskItem.isCompleted}
            />
            <span
              className={
                this.props.taskItem.isCompleted ? "completed" : "not-completed"
              }
            >
              {this.props.taskItem.taskname}
            </span>
          </td>
          <td className="Actions">
            <button
              className="edit task"
              onClick={() => this.setIsEditing(true)}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button className="delete task" onClick={this.deleteTask}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </td>
        </tr>
      );
    }

    return result;
  }
}
