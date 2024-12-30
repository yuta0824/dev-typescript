import { createElement, getInputElementById } from "./utils/dom";

/**
 * Todoの型宣言
 */
export type Todo = {
  name: string;
  person: string;
  deadline: string;
};

/**
 * DOMのinput要素から新しいTODOを取得する
 * @returns Todo
 */
export const getNewTodo = (): Todo => ({
  name: getInputElementById("new-todo-name").value,
  person: getInputElementById("new-person").value,
  deadline: getInputElementById("new-deadline").value,
});

/**
 * DOMにTODO一覧を表示する
 */
export const appendTodoList = (todoList: Todo[]): void => {
  todoList.forEach((todo) => {
    const nameTd = createElement(
      "td",
      todo.name,
      "w-[30%] border border-gray-400 px-2 py-2"
    );
    const personTd = createElement(
      "td",
      todo.person,
      "w-[30%] border border-gray-400 px-2 py-2"
    );
    const deadlineTd = createElement(
      "td",
      todo.deadline,
      "w-[30%] border border-gray-400 px-2 py-2"
    );
    const tr = createElement("tr");
    tr.appendChild(nameTd);
    tr.appendChild(personTd);
    tr.appendChild(deadlineTd);
    const tbody = getInputElementById("todo-list");
    tbody.appendChild(tr);
  });
};
