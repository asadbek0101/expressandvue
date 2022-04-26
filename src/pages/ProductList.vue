<template>
  <div class="container">
    <div class="row">
      <h1 class="text-center mt-4">This page Products page</h1>
      <div class="row">
        <div class="col-3">
          <div class="buttons text-center">
            <router-link to="add"
              ><button class="btn w-50">Add</button></router-link
            >
          </div>
        </div>
        <div class="col-6">
          <input
            v-model="searchValue"
            class="form-control w-100 col-6"
            type="text"
            placeholder="Search"
          />
        </div>
        <div class="col-3">
          <select v-model="searchSelect" class="form-select">
            <option value="allProduct" selected>All Products</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>
      </div>
      <div
        v-for="(item, index) in products"
        :key="index"
        class="col-xl-3 col-lg-4 col-md-6 col-sm-12 my-4"
      >
        <div class="card box shadow h-100 my-2 p-3">
          <div class="img">
            <p class="btn">
              {{ item.category }}
            </p>
            <img :src="item.image" alt="" />
          </div>
          <p class="fs-5 title m-0">
            Name : <strong> {{ item.title }}</strong>
          </p>
          <div class="buttons text-center">
            <button class="btn" @click="delProduct(item.id)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <router-link :to="{ name: 'EditPage', params: { id: item.id } }">
              <button class="btn">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </router-link>
            <router-link :to="{ name: 'Product', params: { id: item.id } }">
              <button class="btn"><i class="fa-solid fa-share"></i></button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      searchValue: "",
      searchSelect: "allProduct",
    };
  },
  computed: {
    data: function () {
      return this.$store.state.products.filter((item) => {
        return item.title.toLowerCase().match(this.searchValue.toLowerCase());
      });
    },
    products: function () {
      if (this.searchSelect == "allProduct") {
        return this.data;
      } else {
        console.log(this.searchSelect);
        return this.data.filter((item) => {
          console.log(item, "item");
          return item.category === this.searchSelect;
        });
      }
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    ...mapActions(["delProduct"]),
  },
};
</script>
<style scoped>
.box img {
  width: 100%;
  height: 300px;
}
.img {
  position: relative;
}
.img .btn {
  position: absolute;
  right: 0;
  background-color: #f7e233;
  cursor: default;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.btn {
  background-color: #f7e233;
  color: black;
  margin: 0 10px;
}
</style>
