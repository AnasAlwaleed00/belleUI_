<template>
  <div class="toast" :class="type">
    <div class="toast-header">
      <div class="toast-title">
        <h4>
            {{title}}
        </h4>
      </div>
      <div class="colse-btn">X</div>
    </div>

    <div class="toast-text">
      {{body}}
    </div>
    <div class="toast-line"></div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "success",
    },
    body: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.toast {
  width: 400px;
  -webkit-box-shadow: 0px 10px 30px 3px rgba(5, 16, 55, 0.15);
  box-shadow: 0px 10px 30px 3px rgba(5, 16, 55, 0.15);
  background: white;
  position: relative;
  padding: 20px;
  border-radius: 8px;
  overflow: hidden;
  .toast-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .toast-title {
      h4 {
        margin-top: 0;
        margin-bottom: 0;
        color: $neutral90;
      }
      font-weight: bold;
    }
  }
  .toast-text {
    margin-top: 10px;
    color: $neutral80;
  }
  .toast-line {
    position: absolute;
    left: 0;
    top: 0;
    width: 7px;
    height: 100%;
  }
}
.success {
  .toast-line {
    background-color: $success;
  }
}
.primary {
  .toast-line {
    background-color: $primary;
  }
}
.info {
  .toast-line {
    background-color: $info;
  }
}
.warning {
  .toast-line {
    background-color: $warning;
  }
}
.help {
  .toast-line {
    background-color: $help;
  }
}
.error {
  .toast-line {
    background-color: $error;
  }
}
.neutral {
  .toast-line {
    background-color: $neutral60;
  }
}
</style>
