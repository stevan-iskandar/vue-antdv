<template>
  <a-row :style="style.row" type="flex" justify="space-around" align="middle">
    <a-col :style="style.col" :lg="12" :xs="20">
      <slot></slot>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: "BaseAuthCard",
  data() {
    return {
      style: {
        row: {
          minHeight: "100vh",
          textAlign: "center",
        },
        col: {
          padding: "1rem",
          borderRadius: "10px",
          backgroundColor: "white",
          maxWidth: "540px",
        },
      },
    };
  },
};
</script>
