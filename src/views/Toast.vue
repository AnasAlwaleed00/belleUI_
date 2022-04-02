<template>
  <div class="toasts-view">
    <h2>Toasts</h2>

    <h3>
      Success Toast
    </h3>
    <Toast
      title="Toast title"
      type="success"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      class="aa"
    />

    <h3>
      Error Toast
    </h3>

    <Toast
      title="Toast title"
      type="error"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      class="aa"
    />


    <h3>
      Info Toast
    </h3>

    <Toast
      title="Toast title"
      type="info"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      class="aa"
    />


    <h3>
      Warning Toast
    </h3>

    <Toast
      title="Toast title"
      type="warning"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      class="aa"
    />


    <h3>
      Neutral Toast
    </h3>

    <Toast
      title="Toast title"
      type="neutral"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      class="aa"
    />
  </div>
</template>

<script>
import Toast from "@/components/Toast/Toast.vue";
export default {
  components: {
    Toast,
  },
};

</script>

<style scoped lang="scss">
.toasts-view {
  padding: 20px
}
.aa{
  margin-bottom: 20px;
}
</style>
