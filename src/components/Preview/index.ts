import ToastMessage from "./PreviewImage.vue";
import { createVNode, render } from "vue";
import "../../common/style.scss";
export * from "./type";
import type { ToastMessageProps } from "./type";

export interface ToastParams {
  /** 多少秒后消失，-1 永远不消失, 默认 1s */
  time?: number;
  /** 追加到某个元素之后, 默认 document.body */
  appendTo?: string | HTMLElement;
  /** 是否将接受的 message 转为 html 片段，默认为 false */
  dangerouslyUseHTMLString?: boolean;
}

export interface ToastReturn {
  close(): void;
}

export function Toast(message: string, otherParams?: ToastParams) {
  const initParams: Required<ToastParams> = {
    time: 2,
    appendTo: document.body,
    dangerouslyUseHTMLString: false,
    ...otherParams,
  };

  const props: ToastMessageProps = {
    message,
    dangerouslyUseHTMLString: initParams.dangerouslyUseHTMLString,
  };
  const container = document.createElement("div");
  container.classList.add("simple-toast");
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
