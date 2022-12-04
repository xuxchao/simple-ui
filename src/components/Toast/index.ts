import ToastMessage from "./ToastMessage.vue";
import { createVNode, render } from "vue";
import "../../common/style.scss";
export * from "./type";
import type { ToastMessageProps } from "./type";

export interface ToastParams {
  /** 多少秒后消失，-1 永远不消失, 默认 1s */
  time?: number;
  /** 追加到某个元素之后, 默认 document.body */
  appendTo?: string | HTMLElement;
  /** 接受的提示信息 */
  message?: string;
  /** 是否将接受的 message 转为 html 片段，默认为 false */
  dangerouslyUseHTMLString?: boolean;
}

export type ToastReturn = { close(): void };

export function Toast(message: string): ToastReturn;
export function Toast(params: ToastParams): ToastReturn;
export function Toast(params: string | ToastParams) {
  let initParams: Required<ToastParams> = {
    time: 1,
    appendTo: document.body,
    dangerouslyUseHTMLString: false,
    message: "",
  };
  if (typeof params === "string") {
    initParams.message = params;
  } else {
    initParams = {
      ...initParams,
      ...params,
    };
  }

  const props: ToastMessageProps = {
    message: initParams.message,
    dangerouslyUseHTMLString: initParams.dangerouslyUseHTMLString,
  };
  const container = document.createElement("div");
  container.classList.add("xu-toast");
  const vnode = createVNode(ToastMessage, props);
  let timeoutIndex = 0;
  render(vnode, container);
  if (typeof initParams.appendTo === "string") {
    document.querySelector(initParams.appendTo)?.appendChild(container);
  } else {
    initParams.appendTo.appendChild(container);
  }
  if (initParams.time !== -1) {
    timeoutIndex = window.setTimeout(() => close(), initParams.time * 1000);
  }
  const close = () => {
    clearTimeout(timeoutIndex);
    render(null, container);
    container.remove();
  };
  return {
    close,
  };
}
