import React, { Component } from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";
export default class TaskList extends Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.tasks.map((t, index) => {
            return (
              <TaskItem
                key={index}
                taskItem={t}
                idx={index}
                deleteTask={this.props.deleteTask}
                editTask={this.props.editTask}
                toggleTask={this.props.toggleTask}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
