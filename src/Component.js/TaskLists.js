import React, { Component } from "react";

export default class TaskLists extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: this.props.tasks };
  }
  render() {
    let lists = this.state.tasks.map((task) => {
      <TaskItems task={task} />;
    });
    return (
      <div>
        <SubHeading>
          <span>Task</span>
          <span>Actions</span>
        </SubHeading>
      </div>
    );
  }
}
