<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LunziTabsPane",
  inject: ["eventBus"],
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    classes() {
      return {
        active: this.active,
      };
    },
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      //   if (name === this.name) {
      //     console.log(`pane${this.name}被选中`);
      //   } else {
      //     console.log(`pane${this.name}没被选中`);
      //   }
      this.active = name === this.name;
    });
  },
};
</script>

<style lang="scss" scoped>
.tabs-pane {
  $blue: blue;

  &.active {
    color: $blue;
    font-weight: bold;
  }
}
</style>
