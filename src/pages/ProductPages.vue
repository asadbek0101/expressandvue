<template>
  <div class="container">
    <div class="row shadow mt-5">
      <div class="col-6">
        <img :src="product.image" alt="" />
      </div>
      <div class="col-6">
        <p class="fs-3 fs-bold"><strong>Name :</strong> {{ product.title }}</p>
        <p class="fs-4"><strong>Info : </strong> {{ product.description }}</p>
        <p class="fs-4">
          <strong>Kategoriya : </strong> {{ product.category }}
        </p>
        <p class="fs-4">
          <strong>Price : ${{ product.price }} </strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
  },

  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 400px;
}
</style>
