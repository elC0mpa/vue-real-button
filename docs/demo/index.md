<script setup>
import RealButton from '../../src/components/RealButton.vue'
</script>

# Demo

## Sizes

<div class="buttons-row">
<real-button size="small">Small</real-button>
<real-button>Default</real-button>
<real-button size="medium">Medium</real-button>
<real-button size="large">Large</real-button>
</div>

```js
<real-button size="small">Small</real-button>
<real-button>Default</real-button>
<real-button size="medium">Medium</real-button>
<real-button size="large">Large</real-button>
```

## Rounded and bold

<div class="buttons-row">
<real-button>Default</real-button>
<real-button bold>Bold</real-button>
<real-button rounded>Rounded</real-button>
<real-button bold rounded>Bold</real-button>
</div>

```js
<real-button>Default</real-button>
<real-button bold>Bold</real-button>
<real-button rounded>Rounded</real-button>
<real-button bold rounded>Bold</real-button>
```

## Types

<div class="buttons-row">
<real-button>Default</real-button>
<real-button type="link">Link</real-button>
<real-button type="info">Info</real-button>
<real-button type="success">Success</real-button>
<real-button type="warning">Warning</real-button>
<real-button type="danger">Danger</real-button>
<real-button type="link-light">Link</real-button>
<real-button type="info-light">Info</real-button>
<real-button type="success-light">Success</real-button>
<real-button type="warning-light">Warning</real-button>
<real-button type="danger-light">Danger</real-button>
<real-button type="light">Light</real-button>
<real-button type="dark">Dark</real-button>
</div>

```js
<real-button>Default</real-button>
<real-button type="link">Link</real-button>
<real-button type="info">Info</real-button>
<real-button type="success">Success</real-button>
<real-button type="warning">Warning</real-button>
<real-button type="danger">Danger</real-button>
<real-button type="link-light">Link</real-button>
<real-button type="info-light">Info</real-button>
<real-button type="success-light">Success</real-button>
<real-button type="warning-light">Warning</real-button>
<real-button type="danger-light">Danger</real-button>
<real-button type="light">Light</real-button>
<real-button type="dark">Dark</real-button>
```

## Custom styles

::: info
These styles will only be applied if there is no **type** property provided.
:::

<div class="buttons-row">
<real-button button-color="red" edge-color="black">Custom</real-button>
<real-button button-color="violet" edge-color="linear-gradient(to left, black 0%, indigo 8%, indigo 92%, black 100%);">Custom</real-button>
</div>

```js
<real-button button-color="red" edge-color="black">Custom</real-button>
<real-button button-color="violet" edge-color="linear-gradient(to left, black 0%, indigo 8%, indigo 92%, black 100%);">Custom</real-button>
```

::: tip
Notice how in order to give a real aspect, **edge color should be defined as a linear gradient**
:::

<style>
.buttons-row > * {
  margin-right: .5rem;
  margin-bottom: 1rem;
}
</style>
