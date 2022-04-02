<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <header class="modal-header">
          <div class="modal-header-txt">
            <h3>Modal Header</h3>
          </div>
          <button type="button" class="btn-close" @click="$emit('close-modal')">
            x
          </button>
        </header>

        <section class="modal-body">
          <div class="modal-body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            neque dolorum facilis molestiae odit recusandae, architecto quia
            veritatis magni sed sunt, incidunt asperiores? Illum provident
            labore repudiandae, excepturi facilis ea.
          </div>
        </section>

        <footer class="modal-footer">
          <button type="button" class="btn-modal" @click="$emit('close-modal')">
            Apply
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    colse() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  border-radius: 10px;
  padding: 8px;
  box-shadow: 0px 18px 20px 1px #05103715;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 480px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  color: $neutral100;
  justify-content: space-between;
  h3 {
    margin-bottom: 0;
    margin-top: 0;
  }
}

.modal-footer {
  justify-content: flex-end;
  .btn-modal {
    color: white;
    background: $primary;
    border-radius: 2px;
    font-size: 16px;
    border-radius: 4px;
    font-weight: bold;
    padding: 0.6rem 1rem;
    border: none;
    cursor: pointer;
  }
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 4px;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: $neutral100;
  background: transparent;
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
