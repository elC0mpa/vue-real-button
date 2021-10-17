<template>
  <div class="row">
    <real-button size="small">Small</real-button>
    <real-button size="default">Default</real-button>
    <real-button size="medium">Medium</real-button>
    <real-button size="large">Large</real-button>
  </div>
  <div class="row">
    <real-button type="link">Link</real-button>
    <real-button type="info">Info</real-button>
    <real-button type="success">Success</real-button>
    <real-button type="warning">Warning</real-button>
    <real-button type="danger">Danger</real-button>
  </div>
  <div class="row">
    <real-button type="link-light">Link</real-button>
    <real-button type="info-light">Info</real-button>
    <real-button type="success-light">Success</real-button>
    <real-button type="warning-light">Warning</real-button>
    <real-button type="danger-light">Danger</real-button>
  </div>
</template>

<script>
import RealButton from "./components/RealButton.vue";
export default {
  name: "App",
  components: {
    RealButton,
  },
};
</script>

<style lang="scss">
html {
  font-size: 62.5%;
}
body {
  background: #fff;
}
.row {
  margin-top: 30px;
  > * {
    margin-right: 10px;
  }
}
</style>
