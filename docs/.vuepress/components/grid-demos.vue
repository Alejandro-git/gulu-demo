<template>
  <div>
    <g-row>
      <g-col span="12-1">1</g-col>
      <g-col span="12-2">2</g-col>
    </g-row>
    <br />
    <g-row gutter="10">
      <g-col span="12-1">1</g-col>
      <g-col span="12-2">2</g-col>
    </g-row>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Row from "../../../src/row";
import Col from "../../../src/col";

export default {
  components: {
    "g-row": Row,
    "g-col": Col,
  },
  data() {
    return {
      content: `
            <g-row>
  <g-col span="12-1">1</g-col>
  <g-col span="12-2">2</g-col>
</g-row>
<br>
<g-row gutter="10">
  <g-col span="12-1">1</g-col>
  <g-col span="12-2">2</g-col>
</g-row>
            `
        // .replace(/\t+| +/g, "")
        .trim(),
      // 替换（所有的tab和空格）.去掉两头的空格
      // .replace(/^\s+/g,'')：“替换（所有的空格）”
    };
  },
};
</script>

<style lang="scss">
.row {
  /* border: 1px solid grey; */
  .col {
    > .col-12-1 {
      background: rgb(64, 173, 255);
    }
    > .col-12-2 {
      background: rgb(0, 146, 255);
    }
  }
}
</style>
