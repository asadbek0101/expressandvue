<template>
  <div class="container">
    <h1>This Edit page</h1>
    <h1>{{ $route.params.id }}</h1>
    <h1>Data : {{ editProdut }}</h1>
    <button @click="editProduct">Edit</button>
    <!-- <form @submit="handleSubmit" class="shadow p-4 mt-3">
      <router-link to="/">Home</router-link>
      <h1 class="text-center">Add Product</h1>
      <div class="top d-flex">
        <div class="left w-50">
          <label for="title">Title</label> <br />
          <input
            @input="element.title = $event.target.value"
            :value="element.title"
            class="form-control"
            type="text"
            id="title"
            placeholder="Title"
          />
        </div>
        <div class="right w-50">
          <label for="categoriya">Categoriya</label>
          <input
            @input="element.category = $event.target.value"
            :value="element.category"
            class="form-control"
            type="text"
            id="categoriya"
            placeholder="Categoriya"
          />
        </div>
      </div>
      <div class="center">
        <label for="discreption">Discreption</label>
        <textarea
          @input="element.description = $event.target.value"
          :value="element.description"
          class="form-control"
          id="discreption"
          type="text"
          name="discreption"
        />
      </div>
      <div class="bottom d-flex">
        <div class="left w-50">
          <label for="img">Img URL</label>
          <input
            @input="element.image = $event.target.value"
            :value="element.image"
            class="form-control"
            type="text"
            id="img"
            placeholder="Img URL"
          />
        </div>
        <div class="right w-50">
          <label for="price">Price</label>
          <input
            @input="element.price = $event.target.value"
            :value="element.price"
            class="form-control"
            type="number"
            id="price"
            placeholder="Price"
          />
        </div>
      </div>
      <div class="buttons text-center mt-4">
        <button class="btn bg-success text-light addButton">ADD Product</button>
      </div>
    </form> -->
  </div>
</template>

<script>
export default {
  computed: {
    editProdut() {
      return this.$store.state.editProdut;
    },
    // mounted() {
    //   // this.$store.dispatch("editProduct", this.$route.params.id);
    // },
  },
};
</script>

<style lang="scss" scoped></style>
