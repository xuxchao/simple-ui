import type { ExtractPropTypes, PropType } from "vue";
import type ToastMessage from "./PreviewImage.vue";

export type PreviewImageInstance = InstanceType<typeof ToastMessage>;

export const previewImageProps = {
  urls: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
};
export type PreviewImageProps = ExtractPropTypes<typeof previewImageProps>;
