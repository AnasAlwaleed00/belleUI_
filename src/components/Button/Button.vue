<template>
  <button
    class="btn"
    :class="['btn-' + color, btnClass]"
    :style="btnStyles"
    id="btn"
  >
    <span class="btn-label">{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "Hello World",
    },
    color: {
      type: String,
      default: "default",
    },
    rounded: {
      type: Boolean,
    },
    outlined: {
      type: Boolean,
    },
    gradient: {
      type: Boolean,
    },
    g1: {
      type: String,
      default: "#ffffff",
    },
    g2: {
      type: String,
      default: "#000000",
    },
    dir: {
      type:String,
      default: 'to left'
    },
    size: {
      type: String,
      default:'md'
    }
  },
  computed: {
    btnClass() {
      return {
        btn: true,
        "btn-rounded": this.rounded,
        "btn-outlined": this.outlined,
        "btn-gradient": this.gradient,
      };
    },
    btnStyles() {
      if (this.gradient) {
        return {
          '--g1': this.g1,
          '--g2': this.g2,
          '--dir': this.dir

          // "background-color": this.g1,
        };
      }
      return ''
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  outline: 0 !important;
  white-space: nowrap;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 9px 14px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 6px;
  margin-right: 4px;
  &:disabled {
    cursor: default;
    background-color: #7ac0f8;
  }
}
.btn-default {
  color: #575757;
  background: $default;
  transition: color 0.2s linear, background-color 0.3s linear;
  &:hover {
    color: #575757;
    background-color: #e5e5ea;
  }
  &:active {
    color: #575757;
    background-color: #d9d9d9;
  }
}

.btn-link {
  background-color: transparent;
  color: #1675e0;
  -webkit-transition: color 0.2s linear;
  transition: color 0.2s linear;
  font-weight: 400;
  border-radius: 0;
  &:focus,
  &:hover {
    color: #0a5dc2;
    text-decoration: underline;
    background-color: transparent;
  }
}
.btn-primary {
  color: $white;
  background-color: $primary;
}
.btn-secondary {
  background-color: $secondary;
  color: $white;
}
.btn-success {
  background-color: $success;
  color: $white;
}
.btn-info {
  background-color: $info;
  color: $white;
}
.btn-warning {
  background-color: $warning;
  color: $white;
}
.btn-help {
  background-color: $help;
  color: $white;
}
.btn-danger {
  background-color: $danger;
  color: $white;
}

.btn-rounded {
  border-radius: 2.5rem;
}

// Outlined
.btn-outlined {
  background-color: transparent;
  color: $primary;
  border: 1px solid;
}

.btn-primary.btn-outlined {
  color: $primary;
}
.btn-secondary.btn-outlined {
  color: $secondary;
}
.btn-success.btn-outlined {
  color: $success;
}
.btn-info.btn-outlined {
  color: $info;
}
.btn-warning.btn-outlined {
  color: $warning;
}
.btn-help.btn-outlined {
  color: $help;
}
.btn-danger.btn-outlined {
  color: $danger;
}

.btn-gradient {
  // background-color: var(--g-color);
    background-image: linear-gradient(var(--dir), var(--g1), var(--g2));
    color: white
}
</style>
