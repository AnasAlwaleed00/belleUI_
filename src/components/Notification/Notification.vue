<template>
  <div class="notification" :class="typeClass">
    {{ notification.msg }}

    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
    },
  },
  computed: {
    typeClass() {
      return `notification-${this.notification.type}`;
    },
  },
};
</script>

<style scoped lang="scss">
.notification {
  padding: 1rem;
  border-radius: 0.3rem;
  margin-top: 1rem;
}
.notification-info {
  color: white;
  background-color: $primary;
}
.notification-success {
  color: white;
  background-color: $success;
}
.notification-warning {
  color: white;
  background-color: $warning;
}
.notification-error {
  color: white;
  background-color: $error;
}
</style>
