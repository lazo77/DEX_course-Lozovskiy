import React from "react";
import { ITodo } from "../types";

interface TodoCardProps {
  todo: ITodo;
  deleteCallback: (id: number) => void;
  id: number;
}
export class TodoCard extends React.Component<TodoCardProps> {
  render() {
    const { todo, deleteCallback, id } = this.props;
    return (
      <li className="todoCard">
        <div>{todo.text}</div>
        <div className="delete_todo" onClick={() => deleteCallback(id)}>
          &#10006;
        </div>
      </li>
    );
  }
}

//TODO: сделать компонент TodoCard
