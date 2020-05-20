<template>
  <div>
    <g-input value="张三" :disabled="true"></g-input>
    <g-input value="李四" readonly></g-input>
    <g-input value="王五"></g-input>
    <g-input value="赵六" error="姓名不能少于两个字"></g-input>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Input from "../../../src/input";
import Vue from "vue";

export default {
  components: {
    "g-input": Input,
  },
  data() {
    return {
      content: `
            <g-input value="张三" :disabled="true"></g-input>
            <g-input value="李四" readonly></g-input>
            <g-input value="王五"></g-input>
            <g-input value="赵六" error="姓名不能少于两个字"></g-input>
            `
        .replace(/\t+| +/g, "")
        .trim(),
    };
  },
};
</script>

<style lang="scss" scoped></style>
