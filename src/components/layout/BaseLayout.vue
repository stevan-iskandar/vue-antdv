<template>
  <AdminLayout v-if="auth.status" />
  <AdminAuthLayout v-else />
</template>

<script>
import $_lazy from "./../../helpers/lazy";

const AdminAuthLayout = $_lazy(() => import("./AdminAuthLayout.vue"));
const AdminLayout = $_lazy(() => import("./AdminLayout.vue"));

export default {
  name: "BaseLayout",
  components: {
    AdminAuthLayout,
    AdminLayout,
  },
  inject: ["auth"],
};
</script>
