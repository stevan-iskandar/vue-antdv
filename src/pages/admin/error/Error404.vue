<template>
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <router-link :to="prevPage.fullPath">
        <a-button type="primary">{{ buttonText }}</a-button>
      </router-link>
    </template>
  </a-result>
</template>

<script>
import { ucWords } from "@/helpers/string";
import $_route from "@/helpers/route";
import * as constRoute from "@/constants/constRoute";

export default {
  name: "Export404",
  data() {
    return {
      prevPage: {
        fullPath: "/",
        name: "",
      },
      buttonText: "",
    };
  },
  watch: {
    prevPage(newVal) {
      const { name, meta } = newVal;

      if (name && meta.needAuth) {
        this.buttonText = `Back to ${ucWords(name)}`;
      } else {
        this.prevPage.fullPath = $_route(constRoute.DASHBOARD);
        this.buttonText = "Back Home";
      }
    },
  },
  beforeRouteEnter(_to, from, next) {
    next((state) => {
      state.prevPage = from;
    });
  },
};
</script>
