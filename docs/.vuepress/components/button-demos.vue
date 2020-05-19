<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/button";

export default {
  components: {
    "g-button": Button,
  },
  data() {
    return {
      content: `
            <g-button>默认按钮</g-button>
            <g-button icon="settings">默认按钮</g-button>
            <g-button :loading="true">默认按钮</g-button>
            <g-button disabled>默认按钮</g-button>
            `
        .replace(/\t+| +/g, "")
        .trim(),
      // 替换（所有的tab和空格）.去掉两头的空格
      // .replace(/^\s+/g,'')：“替换（所有的空格）”
    };
  },
};
</script>

<style lang="scss" scoped></style>
