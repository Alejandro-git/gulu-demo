<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible = false">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "LunziSider",
  data() {
    return {
      visible: true,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  border: 1px solid grey;
  background: #666;
  width: 200px;

  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s;
}
.slide-enter,
.slide-leave-to {
  margin-left: -200px;
}
</style>
