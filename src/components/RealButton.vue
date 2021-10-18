<template>
  <button class="real-button">
    <span
      class="real-button__shadow"
      :class="{
        'is-small': size === 'small',
        'is-default': size === 'default',
        'is-medium': size === 'medium',
        'is-large': size === 'large',
        'is-rounded': rounded,
      }"
      :style="`background: 
      ${shadowColor}`"
    ></span>
    <span
      class="real-button__edge"
      :class="{
        'is-small': size === 'small',
        'is-default': size === 'default',
        'is-medium': size === 'medium',
        'is-large': size === 'large',
        'is-link': type === 'link',
        'is-info': type === 'info',
        'is-success': type === 'success',
        'is-danger': type === 'danger',
        'is-light': type === 'light',
        'is-dark': type === 'dark',
        'is-warning': type === 'warning',
        'is-link-light': type === 'link-light',
        'is-info-light': type === 'info-light',
        'is-success-light': type === 'success-light',
        'is-danger-light': type === 'danger-light',
        'is-light-light': type === 'light',
        'is-warning-light': type === 'warning-light',
        'is-rounded': rounded,
      }"
      :style="`background: 
      ${edgeColor}`"
    ></span>
    <span
      class="real-button__front"
      :class="{
        'is-small': size === 'small',
        'is-default': size === 'default',
        'is-medium': size === 'medium',
        'is-large': size === 'large',
        'is-link': type === 'link',
        'is-info': type === 'info',
        'is-success': type === 'success',
        'is-danger': type === 'danger',
        'is-light': type === 'light',
        'is-dark': type === 'dark',
        'is-warning': type === 'warning',
        'is-link-light': type === 'link-light',
        'is-info-light': type === 'info-light',
        'is-success-light': type === 'success-light',
        'is-danger-light': type === 'danger-light',
        'is-light-light': type === 'light',
        'is-warning-light': type === 'warning-light',
        'is-rounded': rounded,
        'is-bold': bold,
      }"
      :style="`background: 
      ${buttonColor}`"
    >
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "RealButton",
  props: {
    shadowColor: {
      type: String,
      default: "transparent",
    },
    edgeColor: {
      type: String,
      default: "lightblue",
    },
    buttonColor: {
      type: String,
      default: "#0e59e7",
    },
    size: {
      type: String,
      default: "default",
      validator(value) {
        return ["small", "default", "medium", "large"].includes(value);
      },
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "",
      validator(value) {
        return [
          "link",
          "info",
          "success",
          "warning",
          "danger",
          "link-light",
          "info-light",
          "success-light",
          "warning-light",
          "danger-light",
          "light",
          "dark",
          "",
        ].includes(value);
      },
    },
    bold: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return { props };
  },
};
</script>

<style lang="scss">
.real-button {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  &__shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    will-change: transform;
    border-radius: 5px;
    transform: translateY(0.2rem);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    &:hover {
      transform: translateY(4px);
      transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
    }
    &:active {
      transform: translateY(0.1rem);
      transition: transform 34ms;
    }
    &.is-rounded {
      border-radius: 12px;
    }
  }
  &__edge {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    border-radius: 5px;
    &.is-rounded {
      border-radius: 12px;
    }
    &.is-link {
      background: linear-gradient(
        to left,
        hsl(229, 53%, 30%) 0%,
        hsl(229, 53%, 45%) 8%,
        hsl(229, 53%, 45%) 92%,
        hsl(229, 53%, 30%) 100%
      ) !important;
    }
    &.is-info {
      background: linear-gradient(
        to left,
        #4756ca 0%,
        #3186b2 8%,
        #3186b2 92%,
        #4756ca 100%
      ) !important;
    }
    &.is-success {
      background: linear-gradient(
        to left,
        hsl(153, 53%, 25%) 0%,
        hsl(153, 53%, 40%) 8%,
        hsl(153, 53%, 40%) 92%,
        hsl(153, 53%, 25%) 100%
      ) !important;
    }
    &.is-danger {
      background: linear-gradient(
        to left,
        hsl(348, 86%, 30%) 0%,
        hsl(348, 86%, 45%) 8%,
        hsl(348, 86%, 45%) 92%,
        hsl(348, 86%, 30%) 100%
      ) !important;
    }
    &.is-warning {
      background: linear-gradient(
        to left,
        hsl(44, 100%, 35%) 0%,
        hsl(44, 100%, 50%) 8%,
        hsl(44, 100%, 50%) 92%,
        hsl(44, 100%, 35%) 100%
      ) !important;
    }
    &.is-link-light {
      background: linear-gradient(
        to left,
        hsl(229, 53%, 30%) 0%,
        hsl(229, 53%, 45%) 8%,
        hsl(229, 53%, 45%) 92%,
        hsl(229, 53%, 30%) 100%
      ) !important;
    }
    &.is-info-light {
      background: linear-gradient(
        to left,
        #4756ca 0%,
        #3186b2 8%,
        #3186b2 92%,
        #4756ca 100%
      ) !important;
    }
    &.is-success-light {
      background: linear-gradient(
        to left,
        hsl(153, 53%, 25%) 0%,
        hsl(153, 53%, 40%) 8%,
        hsl(153, 53%, 40%) 92%,
        hsl(153, 53%, 25%) 100%
      ) !important;
    }
    &.is-danger-light {
      background: linear-gradient(
        to left,
        hsl(348, 86%, 30%) 0%,
        hsl(348, 86%, 45%) 8%,
        hsl(348, 86%, 45%) 92%,
        hsl(348, 86%, 30%) 100%
      ) !important;
    }
    &.is-warning-light {
      background: linear-gradient(
        to left,
        hsl(44, 100%, 35%) 0%,
        hsl(44, 100%, 50%) 8%,
        hsl(44, 100%, 50%) 92%,
        hsl(44, 100%, 35%) 100%
      ) !important;
    }
    &.is-light {
      background: linear-gradient(
        to left,
        hsl(0, 0%, 70%) 0%,
        hsl(0, 0%, 85%) 8%,
        hsl(0, 0%, 85%) 92%,
        hsl(0, 0%, 70%) 100%
      ) !important;
    }
    &.is-dark {
      background: linear-gradient(
        to left,
        hsl(0, 0%, 5%) 0%,
        hsl(0, 0%, 15%) 8%,
        hsl(0, 0%, 15%) 92%,
        hsl(0, 0%, 5%) 100%
      ) !important;
    }
  }
  &__front {
    display: block;
    position: relative;
    padding: 12px 30px;
    font-size: 1.25rem;
    color: white;
    will-change: transform;
    transform: translateY(-0.5rem);
    border-radius: 5px;
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    &:hover {
      transform: translateY(-0.7rem);
      transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
    }
    &:active {
      transform: translateY(-0.3rem);
      transition: transform 34ms;
    }
    &.is-bold {
      font-weight: bold;
    }
    &.is-rounded {
      border-radius: 12px;
    }
    &.is-small {
      padding: 12px 25px;
      font-size: 1rem;
      transform: translateY(-0.3rem);
      &:hover {
        transform: translateY(-0.5rem);
        transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
      }
      &:active {
        transform: translateY(-0.1rem);
        transition: transform 34ms;
      }
    }
    &.is-medium {
      padding: 12px 35px;
      font-size: 1.5rem;
      transform: translateY(-0.5rem);
      &:hover {
        transform: translateY(-0.7rem);
        transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
      }
      &:active {
        transform: translateY(-0.3rem);
        transition: transform 34ms;
      }
    }
    &.is-large {
      padding: 12px 42px;
      font-size: 2rem;
      transform: translateY(-0.7rem);
      &:hover {
        transform: translateY(-0.9rem);
        transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
      }
      &:active {
        transform: translateY(-0.5rem);
        transition: transform 34ms;
      }
    }
    &.is-link {
      background: #485fc7 !important;
    }
    &.is-info {
      background: #3e8ed0 !important;
    }
    &.is-success {
      background: #48c78e !important;
    }
    &.is-danger {
      background: #f14668 !important;
    }
    &.is-warning {
      background: #ffe08a !important;
    }
    &.is-link-light {
      background: #eff1fa !important;
      color: #3850b7 !important;
    }
    &.is-info-light {
      background: #eff5fb !important;
      color: #296fa8;
    }
    &.is-success-light {
      background: #effaf5 !important;
      color: #257953 !important;
    }
    &.is-danger-light {
      background: #feecf0 !important;
      color: #cc0f35 !important;
    }
    &.is-warning-light {
      background: #fffaeb !important;
      color: #946c00 !important;
    }
    &.is-light {
      background: #f5f5f5 !important;
      color: black !important;
    }
    &.is-dark {
      background: #363636 !important;
    }
  }
  &:hover {
    filter: brightness(110%);
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
}
</style>
