<template>
  <div class="accordion">
    <div class="accordion-header">
      <div class="header-txt">Lorem ipsum dolor sit amet consectetur</div>
      <div class="header-icon" @click="switchAccordion()">+</div>
    </div>
    <transition name="modal-fade"
      ><div class="accordion-body" v-if="showBody">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, fuga
        voluptas? Nobis officiis perspiciatis atque ex incidunt vitae nulla
        sapiente, excepturi earum ipsum, hic et enim, dolorem officia eum
        veritatis?
      </div></transition
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBody: false,
    };
  },
  methods: {
    switchAccordion() {
      this.showBody = !this.showBody;
    },
  },
};
</script>

<style scoped lang="scss">
.accordion {
  background-color: $neutral10;
  width: 385px;
  padding: 20px;
  border-radius: 5px;
  .accordion-header {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    .header-icon {
      color: $primary;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .accordion-body {
    margin-top: 20px;
  }
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
