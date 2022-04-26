<template>
  <div class="container">
    <form @submit="handleSubmit" class="shadow p-4 mt-3">
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
          placeholder="Dedcreption"
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
        <button class="btn bg-success text-light addButton" @click="addProduct">
          ADD Product
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      element: {
        id: 21,
        category: "",
        price: null,
        title: "",
        description: "",
        image: "",
      },
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
    },
    ...mapActions(["addProduct"]),
  },
};
</script>

<style scoped>
.left,
.right {
  padding: 20px;
}
label {
  font-size: 20px;
  margin-bottom: 10px;
}
input {
  font-size: 20px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.center {
  padding: 0 20px;
}
.center textarea {
  resize: none;
  font-size: 20px;
}
.addButton {
  font-size: 20px;
}

a {
  text-decoration: none;
  color: black;
  padding: 10px 30px;
  border-radius: 4px;
  background-color: #f7e233;
}
a:hover {
  color: black;
}
</style>
