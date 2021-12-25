<template>
  <AdminLayout v-if="auth.status" />
  <AdminAuthLayout v-else />
</template>

<script>
import AdminAuthLayout from "./AdminAuthLayout.vue";
import AdminLayout from "./AdminLayout.vue";

export default {
  name: "BaseLayout",
  components: {
    AdminAuthLayout,
    AdminLayout,
  },
  inject: ["auth"],
};
</script>
