<template>
  <div class="row" >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LunziRow",
  props: {
    gutter: {
      type: [Number, String],
    },
  },
};
</script>
<style lang="scss" scoped>
.row{
    display: flex;
}
</style>
