<template>
  <a-layout-content :style="style.layoutContent">
    <a-row :style="style.row" type="flex" justify="space-around" align="middle">
      <a-col :style="style.col" :span="12">
        <router-view></router-view>
      </a-col>
    </a-row>
  </a-layout-content>
</template>

<script>
const bgImage = require("./../assets/vue-js-bg.jpg");

export default {
  name: "AdminAuthLayout",
  data() {
    return {
      style: {
        layoutContent: {
          minHeight: "100vh",
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        },
        row: {
          minHeight: "100vh",
          textAlign: "center",
        },
        col: {
          padding: "1rem",
          borderRadius: "10px",
          backgroundColor: "white",
        },
      },
    };
  },
};
</script>
