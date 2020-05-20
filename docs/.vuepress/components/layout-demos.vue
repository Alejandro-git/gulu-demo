<template>
  <div>
    <g-layout style="height: 100vh;">
        <g-sider>sider</g-sider>
        <g-layout>
            <g-header>header</g-header>
            <g-content>content</g-content>
            <g-footer>footer</g-footer>
        </g-layout>
    </g-layout>


    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Layout from "../../../src/layout";
import Sider from "../../../src/sider";
import Header from "../../../src/header";
import Content from "../../../src/content";
import Footer from "../../../src/footer";

export default {
  components: {
    "g-layout": Layout,
    "g-sider": Sider,
    "g-header": Header,
    "g-content": Content,
    "g-footer": Footer,
  },
  data() {
    return {
      content: `
            <g-layout style="height: 100vh;">
  <g-sider>sider</g-sider>
  <g-layout>
      <g-header>header</g-header>
      <g-content>content</g-content>
      <g-footer>footer</g-footer>
  </g-layout>
</g-layout>
            `
        // .replace(/\t+| +/g, "")
        .trim(),
    };
  },
};
</script>

<style lang="scss" scoped></style>
