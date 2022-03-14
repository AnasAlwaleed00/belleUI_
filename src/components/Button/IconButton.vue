<template>
  <div class="icon-button">
    <div class="icon-btn-con">
        <button class="icon-btn">
      <span class="btn-icon">
        <unicon name="exclamation-circle" fill="#fff" width="18" height="18"></unicon>
      </span>
      <span class="btn-txt">
        Button
      </span>
    </button>
    <button class="icon-btn">
      <span class="btn-icon">
        <unicon name="plus" fill="#fff" width="18" height="18"></unicon>
      </span>
      <span class="btn-txt">
        Add
      </span>
    </button>
    <button class="icon-btn">
      <span class="btn-icon">
        <unicon name="location-arrow" fill="#fff" width="18" height="18"></unicon>
      </span>
      <span class="btn-txt">
        Your Location
      </span>
    </button>
    <button class="icon-btn">
      <span class="btn-icon">
        <unicon name="apple" fill="#fff" width="18" height="18"></unicon>
      </span>
      <span class="btn-txt">
        Apple
      </span>
    </button>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  font-weight: 600;
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
  font-size: 15px;
  line-height: 1.42857143;
  border-radius: 6px;
  margin-right: 4px;
  &:disabled {
    cursor: default;
    background-color: #7ac0f8;
  }
}
.icon-btn {
  background-color: $primary;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
  .btn-icon {
      height: 18px;
      width: 18px;
      margin-right: 5px;
  }
  .unicon {
      height: 18px;
      width: 18px;
  }
}
.icon-btn-con {
    display: flex;
}
</style>
