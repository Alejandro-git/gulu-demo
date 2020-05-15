<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "LunziTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    // provide:eventBus 所有子组件都可以调用的属性
    // 使用时 inject:[''eventBus]
    return {
      eventBus: this.eventBus,
    };
  },
  created() {
    //   this.$emit('update:selected', 'xxx')
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "LunziTabsHead") {
        vm.$children.forEach((childVm) => {
          if (
            childVm.$options.name === "LunziTabsItem" &&
            childVm.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, childVm);
          }
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
