<template>
  <div class="card-view">
    <h2>Cards</h2>
    <h3>Large</h3>
    <div class="row">
      <div class="col-6">1</div>
      <div class="col-6">2</div>
    </div>
    <div class="card-large">
      <div class="card-img">
        <img src="@/assets/images/card.jpg" alt="" />
      </div>
      <div class="card-txt">
        <div class="card-title">
          <h4>
            NodeJS: How To Create A Simple Server Using The HTTP Module
          </h4>
        </div>
        <div class="card-des">
          <span>James Miller - </span>
          <span>Advanced - </span>
          <span>Mar 14, 2022</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.card-large {
  width: 620px;
}
.card-img {
  height: 188px;
  img {
    width: 100%;
    height: 100%;
  }
}
.card-des {
    color: var(--text-primary-color);
}
.card-view {
//   padding: 10px;
}
</style>
