<template>
  <div class="banner-view">
    <h2>
      Banners
    </h2>
    <div class="banner success bn">
      This is generic method, you can use this method to make any kind of toast.
    </div>
    <div class="banner-icon success bn" id="banner-1">
      <span class="banner-txt">
        This is generic method, you can use this method to make any kind of
        toast.
      </span>
      <span class="banner-ico">
        <unicon
          name="times"
          fill="#fff"
          width="20"
          height="20"
          @click="hideBanner('banner-1')"
        ></unicon>
      </span>
    </div>

    <div class="banner primary bn">
      This is generic method, you can use this method to make any kind of toast.
    </div>
    <div class="banner-icon primary bn" id="banner-4">
      <span class="banner-txt">
        This is generic method, you can use this method to make any kind of
        toast.
      </span>
      <span class="banner-ico">
        <unicon
          name="times"
          fill="#fff"
          width="20"
          height="20"
          @click="hideBanner('banner-4')"
        ></unicon>
      </span>
    </div>


    <div class="banner warning bn">
      This is generic method, you can use this method to make any kind of toast.
    </div>
    <div class="banner-icon warning bn" id="banner-2">
      <span class="banner-txt">
        This is generic method, you can use this method to make any kind of
        toast.
      </span>
      <span class="banner-ico">
        <unicon
          name="times"
          fill="#fff"
          width="20"
          height="20"
          @click="hideBanner('banner-2')"
        ></unicon>
      </span>
    </div>



    <div class="banner danger bn">
      This is generic method, you can use this method to make any kind of toast.
    </div>
    <div class="banner-icon danger bn" id="banner-3">
      <span class="banner-txt">
        This is generic method, you can use this method to make any kind of
        toast.
      </span>
      <span class="banner-ico">
        <unicon
          name="times"
          fill="#fff"
          width="20"
          height="20"
          @click="hideBanner('banner-3')"
        ></unicon>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideBanner(bannerId) {
        var element = document.getElementById(bannerId);
        element.classList.add("hide");
    },
  },
};
</script>

<style scoped lang="scss">
.banner-view {
  padding: 10px;
}
.bn {
  margin-top: 20px;
}
.banner,
.banner-icon {
  
  color: $white;
  text-align: center;
  padding: 1rem 2rem;
}

.banner-icon {
  text-align: center;
  position: relative;
  .banner-ico {
      cursor: pointer;
      position: absolute;
      right: 10px;
    height: 20px;
    width: 20px;
    .unicon {
      height: 100%;
      width: 100%;
    }
  }
}
.success {
background: $success;
}
.warning {
background: $warning;
}
.primary {
background: $primary;
}
.danger {
background: $danger;
}
.hide {
    display: none;
}

</style>
