import { createElement, getInputElementById } from "./utils/dom";

/**
 * Todoの型宣言
 */
export type Todo = {
  id: number;
  name: string;
  person: string;
  deadline: string;
};

/**
 * DOMのinput要素から新しいTODOを取得する
 * @returns Todo
 */
export const getNewTodo = (): Todo => ({
  id: Date.now(),
  name: getInputElementById("new-todo-name").value,
  person: getInputElementById("new-person").value,
  deadline: getInputElementById("new-deadline").value,
});

/**
 * DOMにTODO一覧を表示する
 */
export const appendTodoList = (todoList: Todo[], deleteTodo: (id: number) => void) => {
  todoList.forEach((todo) => {
    const nameTd = createElement("td", todo.name, "border border-gray-400 px-2 py-2");
    const personTd = createElement("td", todo.person, "border border-gray-400 px-2 py-2");
    const deadlineTd = createElement("td", todo.deadline, "border border-gray-400 px-2 py-2");

    // 削除ボタンを追加
    const deleteButton = createElement("button", "削除", "border bg-red p-1");
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));
    const deleteButtonTd = createElement("td", undefined, "border border-gray-400 px-2 py-2");
    deleteButtonTd.appendChild(deleteButton);

    const tr = createElement("tr");
    tr.appendChild(nameTd);
    tr.appendChild(personTd);
    tr.appendChild(deadlineTd);
    tr.appendChild(deleteButtonTd);
    const tbody = getInputElementById("todo-list");
    tbody.appendChild(tr);
  });
};

/**
 * DOMからTODO一覧を削除する
 *
 *  @returns void
 */
export const removeTodoListElement = (): void => {
  const tbody = getInputElementById("todo-list");
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }
};
