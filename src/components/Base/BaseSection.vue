<template>
  <section
    :style="{
      width: '100%',
      marginTop: '1rem',
      padding: '1.5rem',
      backgroundColor: '#fff',
    }"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "BaseSection",
};
</script>
