<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LunziTabsItem",
  props: {
    disable: {
      type: Boolean,
      default: true,
    },
  }
};
</script>

<style lang="scss" scoped>
.tabs-item {
}
</style>
