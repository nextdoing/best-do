<template>
  <div>
    <p>this is EFDE Page @ route => about.html</p>
    <h4>{{ bus }}</h4>
    <v-icon name="email" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(["bus"])
  }
};
</script>

<style lang="less" scoped></style>
