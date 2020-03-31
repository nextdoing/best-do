<template>
  <div>
    <p>this is Index Page @ route => index.html</p>
    <button @click="go()">send 666</button>
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
    go() {
      this.setBus("666@Home");
    }
  }
};
</script>
