<template>
  <main class="page" :style="pageStyle">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems"],
  computed: {
    isShowSubSidebar() {
      return this.$isShowSubSidebar;
    },
    pageStyle() {
      return this.$showSubSideBar ? {} : { "padding-right": 0 };
    },
  },
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';
</style>
