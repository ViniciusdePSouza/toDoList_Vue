<template>
  <div :class="baseClass">
    {{ text }}
    <button @click="onClick">X</button>
  </div>
</template>

<script>
export default {
  props: ["variant", "text"],
  computed: {
    baseClass() {
      return ['alert', this.variant ? this.variant : ""];
    },
  },
  methods: {
    onClick() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.alert {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-radius: 6px;
  color: gray;
  background: #ddd;
}

.success {
  background: #42b983;
  color: #fff;
}

.danger {
  background: red;
  color: black;
}
</style>
