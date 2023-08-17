<template>
  <div class="card">
    <span>
      {{ product.name }}
    </span>
    <span> - {{ product.price }} </span>

    <button @click="addToCart()">Adicionar ao carrinho</button>
    <button @click="removeFromCart()">Remover ao carrinho</button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      this.$store.commit("storeCart", this.product);
    },
    removeFromCart(){
        this.$store.commit("removeProduct", this.product.id);
    }
  },
};
</script>

<style>
.card {
  background-color: bisque;
  padding: 6px;
  margin-bottom: 5px;
}
</style>
