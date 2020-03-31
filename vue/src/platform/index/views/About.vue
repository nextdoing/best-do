<template>
  <div>
    <p>this is ABCD Page @ route => index.html</p>
    <h4>{{ bus }}</h4>
    <v-icon name="eye" />
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
