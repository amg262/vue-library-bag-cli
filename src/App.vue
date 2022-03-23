<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <universal-library @add-to-basket="add"></universal-library>
      <library-basket :basket="libraryBasket" @remove-it="remove"></library-basket>
    </div>
  </div>
</template>

<script>
import UniversalLibrary from "@/components/UniversalLibrary";
import LibraryBasketCollection from "@/models/LibraryBasketCollection";
import LibraryBasket from "@/components/LibraryBasket";

export default {
  name: 'App',
  components: {
    UniversalLibrary,
    LibraryBasket
  },
  data() {
    return {
      libraryBasket: new LibraryBasketCollection()
    }
  },
  methods: {
    add: function (item) {
      this.libraryBasket.addBasketItem(item);
    },
    remove: function (item) {
      this.libraryBasket.removeBasketItem(item);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
