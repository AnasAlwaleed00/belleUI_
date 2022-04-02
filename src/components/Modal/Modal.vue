<template>
  <section class="modal-">
    <Button label="Show modal aa" color="primary" @click.native="showM()" />
    <button @click="showM()">aa</button>
    <DialogModal v-show="showModal" @close-modal="showModal = false" />
  </section>
</template>

<script>
import DialogModal from "@/components/Modal/DialogModal";
export default {
  components: {
    DialogModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    showM() {
      console.log("show");
      this.showModal = true;
    },
    close() {},
  },
};
</script>

<style scoped lang="scss"></style>
