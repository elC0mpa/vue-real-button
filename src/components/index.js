import RealButton from "./RealButton.vue";
RealButton.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default RealButton;