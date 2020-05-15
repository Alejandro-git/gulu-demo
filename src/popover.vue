<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LunziPopover",
  data() {
    return { visible: false };
  },
  methods: {
    xxx() {
      this.visible = !this.visible;
      if (this.visible === true) {
        this.$nextTick(() => {
          let eventHandler = () => {
            this.visible = false;
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        });
      } else {
        console.log("vm 隐藏的 popover");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  margin-top: 100px;
  margin-left: 100px;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>
