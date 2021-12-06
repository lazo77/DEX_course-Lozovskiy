import React from "react";
import { ITodo } from "../types";
import { TodoCard } from "./TodoCard";

interface ITodoListProps {
  todos: ITodo[];
  deleteCallback: (id: number) => void;
}

export class TodoList extends React.Component<ITodoListProps> {
  render() {
    const { todos, deleteCallback } = this.props;
    const listItems = todos.map((todo) => (
      <TodoCard
        key={todo.id}
        todo={todo}
        deleteCallback={deleteCallback}
        id={todos.indexOf(todo)}
      />
    ));
    return (
      <ul>
        Список
        {listItems}
      </ul>
    );
  }
}
//TODO: сделать TodoList компонент
