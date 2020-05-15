<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions" ></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LunziTabsHead",
  inject: ["eventBus"],
  created() {},
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;

.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  border-bottom: 1px solid red;
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
