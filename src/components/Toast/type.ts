import type { ExtractPropTypes } from "vue";
import type ToastMessage from "./ToastMessage.vue";

export type ToastMessageInstance = InstanceType<typeof ToastMessage>;

export const toastMessageProps = {
  message: {
    type: String,
    default: "",
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false,
  },
};
export type ToastMessageProps = ExtractPropTypes<typeof toastMessageProps>;
