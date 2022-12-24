import type { ExtractPropTypes, PropType } from "vue";
import type DropDown from ".|DropDown.vue";

export type DropDownInstance = InstanceType<typeof DropDown>;

export const dropDownProps = {
  placement: {
    type: String as PropType<
      "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end"
    >,
    default: "bottom",
  },
  trigger: {
    type: String as PropType<"hover" | "click">,
    default: "hover",
  },
  hideOnClick: {
    type: Boolean,
    default: true,
  },
  teleported: {
    type: Boolean,
    default: true,
  },
};
export type DropDownPropsProps = ExtractPropTypes<typeof dropDownProps>;
