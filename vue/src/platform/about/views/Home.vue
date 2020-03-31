<template>
  <div>
    <p>this is About Page @ route => about.html</p>
    <button @click="py()">send 999</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setBus"]),
    py() {
      this.setBus("999@About");
    }
  }
};
</script>

<style lang="less" scoped></style>
