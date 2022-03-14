<template>
  <div class="nav-bar-con">
    <div class="nav-bar">
      <ul>
        <li>
          <router-link to="/banner">Banner</router-link>
        </li>
        <li>
          <router-link to="/button">Button</router-link>
        </li>
        <li>
          <router-link to="/card">Card</router-link>
        </li>
        <li>
          <router-link to="/message">Message</router-link>
        </li>
      </ul>
      <theme-button />
    </div>
    <hr>  
  </div>
</template>

<script>
import ThemeButton from "@/components/ThemeButton.vue";
export default {
  components: { ThemeButton },
};
</script>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
ul {
  display: flex;
  margin-right: 10px;
  li {
    list-style-type: none;
    a {
      margin-left: 10px;
      color: var(--text-primary-color);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
