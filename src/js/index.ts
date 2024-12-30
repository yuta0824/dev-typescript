import "../css/output.css";
import { appendTodoList, getNewTodo, removeTodoListElement, Todo } from "./todo";
import { getElementById } from "./utils/dom";

let todoList: Todo[] = [];

const buttonRegister = getElementById("button-register")!;

buttonRegister.addEventListener("click", () => {
  // 新しいTODOからDOMを取得する
  todoList = [...todoList, getNewTodo()];

  // TODO一覧を表示する
  removeTodoListElement();
  appendTodoList(todoList);
});
