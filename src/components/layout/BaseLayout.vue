<template>
  <AdminLayout v-if="isAuthenticated" />
  <AdminAuthLayout v-else />
</template>

<script>
import { mapGetters } from "vuex";
import $_lazy from "@/helpers/lazy";

const AdminAuthLayout = $_lazy(() => import("./AdminAuthLayout.vue"));
const AdminLayout = $_lazy(() => import("./AdminLayout.vue"));

export default {
  name: "BaseLayout",
  components: {
    AdminAuthLayout,
    AdminLayout,
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
};
</script>
