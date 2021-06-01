<template>
  <div class="message" :class="['msg-' + type]">
    <div class="msg-title" v-if="title">
      {{ title }}
    </div>

    <div class="msg-description" v-if="description">
      {{ description }}
    </div>
  </div>
</template>

<script>
/**
 * TODO: Add with icons
 */
export default {
  name: "Message",
  props: {
    type: {
      type: String,
      default: "info",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    closable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.message {
  padding: 1.25rem;
  border-radius: 0.4rem;
  margin: 1rem;
}
.msg-title {
  display: block;
  font-weight: bold;
  font-size: 1.2rem;
}
.msg-description {
  font-size: 0.9rem;
}
.msg-info {
  background-color: #1398ee;
  color: white;
}
.msg-success {
  background-color: #57b05a;
  color: white;
}
.msg-warning {
  background-color: #fec656;
  color: #1b1c1e;
}
.msg-error {
  background-color: #ef4e42;
  color: white;
}
</style>
