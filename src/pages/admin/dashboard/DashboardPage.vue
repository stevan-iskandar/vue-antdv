<template>
  <h1>Dashpoard Page</h1>
  <button @click="logout">Logout</button>
</template>

<script>
export default {
  name: "DashboardPage",
  inject: ["logout"],
};
</script>
