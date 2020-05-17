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
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console &&
          console.warn &&
          console.warn(
            "tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件"
          );
      }
    },
    selectTab() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === "GuluTabsHead") {
          vm.$children.forEach((childVm) => {
            if (
              childVm.$options.name === "GuluTabsItem" &&
              childVm.name === this.selected
            ) {
              this.eventBus.$emit("update:selected", this.selected, childVm);
            }
          });
        }
      });
    },
  },
  mounted() {
    this.checkChildren();
    this.selectTab();
  },
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
