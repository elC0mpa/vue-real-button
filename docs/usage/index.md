# Usage

## Import as a Plugin

```js
import { createApp } from "vue";
import App from "./App.vue";
import RealButton from "vue-real-button";

createApp(App).use(RealButton).mount("#app");
```

## Import Locally

```js
<script>
import RealButton from "vue-real-button";
export default {
  name: "App",
  components: {
    RealButton,
  },
};
</script>
```

[← Installation](../installation/)
[Properties →](../properties/)
