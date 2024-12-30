import "../css/output.css";
import { appendTodoList, getNewTodo, removeTodoListElement, Todo } from "./todo";
import { getElementById, getInputElementById } from "./utils/dom";

let todoList: Todo[] = [];
let filterWord: string = "";

// 登録ボタン押下時の処理
const buttonRegister = getElementById("button-register")!;
buttonRegister.addEventListener("click", () => {
  // 新しいTODOからDOMを取得する
  todoList = [...todoList, getNewTodo()];

  // TODO一覧を表示する
  removeTodoListElement();
  appendTodoList(todoList, filterWord, deleteTodo);

  console.log("登録 todoList", todoList);
});

// 絞り込み入力時の処理
const filterInput = getInputElementById("filter");
filterInput.addEventListener("input", () => {
  filterWord = filterInput.value;
  removeTodoListElement();
  appendTodoList(todoList, filterWord, deleteTodo);

  console.log("絞り込み todoList", todoList);
});

/**
 * TODOを削除する
 * @param id
 * @returns void
 */
const deleteTodo = (id: number) => {
  todoList = todoList.filter((todo) => todo.id !== id);
  removeTodoListElement();
  appendTodoList(todoList, filterWord, deleteTodo);

  console.log("削除 todoList", todoList);
};
