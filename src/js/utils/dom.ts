/**
 * id属性からHTML要素を取得する
 * @param id
 * @returns HTMLElement
 */
export const getElementById = (id: string): HTMLElement => {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`${id} not found`);
  }

  return element;
};

/**
 * id属性からHTMLInputElement要素を取得する
 * @param id
 * @returns HTMLInputElement
 */
export const getInputElementById = (id: string): HTMLInputElement => {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`${id} not found`);
  }

  return element as HTMLInputElement;
};

/**
 * HTML要素を生成する
 *
 * @param elementName 要素名
 * @param textContent 要素のテキストコンテント
 * @param className 要素のクラス属性
 * @returns HTMLElement
 */
export const createElement = (
  elementName: string,
  textContent?: string,
  className?: string
): HTMLElement => {
  const element = document.createElement(elementName);

  if (typeof textContent !== "undefined") {
    element.textContent = textContent;
  }

  if (typeof className !== "undefined") {
    element.className = className;
  }

  return element;
};
