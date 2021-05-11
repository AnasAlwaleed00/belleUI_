<template>
  <section class="btn">
    <button class="btn btn-default">
      {{ label }}
    </button>
    <button class="btn btn-primary">
      {{ label }}
    </button>
    <button class="btn btn-primary" disabled>
      {{ label }}
    </button>
    <button class="btn btn-link">
      {{ label }}
    </button>
  </section>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "Hello World",
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
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 6px;
}
.btn-default {
  color: #575757;
  background: #f7f7fa;
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
.btn-primary {
  color: #ffffff;
  background-color: #3498ff;
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
</style>
