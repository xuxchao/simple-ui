import PreviewImage from "./PreviewImage.vue";
import { createVNode, render } from "vue";
import "../../common/style.scss";
export * from "./type";
import type { PreviewImageProps } from "./type";

export interface PreviewParams {
  initialIndex: number;
}

export function Preview(urls: string[], otherParams?: PreviewParams) {
  const props: PreviewImageProps = {
    urls,
    initialIndex: 0,
    ...otherParams,
  };
  const container = document.createElement("div");
  container.classList.add("simple-preview");
  const vnode = createVNode(PreviewImage, {
    ...props,
    onClose() {
      render(null, container);
      container.remove();
    },
  });
  render(vnode, container);
  document.body.appendChild(container);
}
