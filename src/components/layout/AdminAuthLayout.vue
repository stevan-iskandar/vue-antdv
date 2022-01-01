<template>
  <a-layout-content
    :style="{
      minHeight: '100vh',
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
    }"
  >
    <router-view></router-view>
  </a-layout-content>
</template>

<script>
const bgImage = require("./../../assets/vue-js-bg.jpg");

export default {
  name: "AdminAuthLayout",
  data() {
    return {
      bgImage,
    };
  },
};
</script>
