<template>
  <template v-for="menu in menus">
    <a-sub-menu v-if="menu.children" :key="menu.key">
      <template v-if="menu.icon" #icon>
        {{ menu.icon }}
      </template>
      <template #title>{{ menu.title }}</template>
      <AdminSiderMenu :menus="menu.children" />
    </a-sub-menu>
    <a-menu-item v-else :key="menu.key">
      <router-link :to="'/'">
        <template v-if="menu.icon">
          {{ menu.icon }}
          <span>{{ menu.title }}</span>
        </template>
        <template v-else>
          {{ menu.title }}
        </template>
      </router-link>
    </a-menu-item>
  </template>
</template>

<script>
// import $_route from '@/helpers/route'

export default {
  name: "AdminSiderMenu",
  props: ["menus"],
};
</script>
