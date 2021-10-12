import RealButton from "./packages/realButton/src/RealButton.vue";
RealButton.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default RealButton;
