<template>
  <section class="notifications-list">
    <Notification
      v-for="notification in notifications"
      :key="notification.is"
      :notification="notification"
    />
  </section>
</template>

<script>
import Notification from "@/components/Notification/Notification";
export default {
  components: { Notification },
  data() {
    return {};
  },
  computed: {
    notifications: {
      get() {
        return this.$store.state.notifications
      },
    },
  },
};
</script>

<style scoped lang="scss">
.notifications-list {
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 1rem;
  min-width: 320px;
}
</style>
