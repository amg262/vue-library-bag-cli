<template>
  <div id="app" class="container-fluid">

    <div class="row m-5">
      <api-search @search-finished="display"></api-search>
    </div>
    <div class="row">
      <universal-library @add-to-basket="add" :library="library"></universal-library>
      <library-basket :basket="libraryBasket" @remove-it="remove" ></library-basket>
    </div>
  </div>
</template>

<script>
import UniversalLibrary from "@/components/UniversalLibrary";
import LibraryBasketCollection from "@/models/LibraryBasketCollection";
import LibraryBasket from "@/components/LibraryBasket";
import {Song, Book, Movie, MusicVideo, Podcast, TvShow, Software} from "@/models/LibraryItems";

import ApiSearch from "@/components/ApiSearch";
import LibraryCollection from "@/models/LibraryCollection";

export default {
  name: 'App',
  components: {
    ApiSearch,

    UniversalLibrary,
    LibraryBasket
  },
  data() {
    return {
      library: new LibraryCollection(),
      libraryBasket: new LibraryBasketCollection()
    }
  },
  methods: {
    add: function (item) {
      this.libraryBasket.addBasketItem(item);
    },
    remove: function (item) {
      this.libraryBasket.removeBasketItem(item);
    },
    display: function (res) {
     //
      do {
        this.library.pop();
      } while (this.library.length > 0);

      for(const i in res){

        switch (res[i].kind) {
          case 'software': this.library.addItem(new Software(res[i].trackName, res[i].primaryGenreName, res[i].artworkUrl100));
          break;
          case 'music-video': this.library.addItem(new MusicVideo(res[i].trackName, res[i].artistName, res[i].artworkUrl100));
            break;
          case 'podcast': this.library.addItem(new Podcast(res[i].collectionName, res[i].artistName, res[i].artworkUrl100));
            break;
          case 'tv-episode': this.library.addItem(new TvShow(res[i].trackName, res[i].collectionName, res[i].artworkUrl100));
            break;
          case 'feature-movie': this.library.addItem(new Movie(res[i].trackName, res[i].artistName, res[i].artworkUrl100));
            break;
          case 'audiobook': this.library.addItem(new Book(res[i].collectionName, res[i].artistName, res[i].artworkUrl100));
            break;
          case 'song': this.library.addItem(new Song(res[i].trackName, res[i].artistName, res[i].collectionName, res[i].artworkUrl100));
            break;
          default:
            break;
          // case 'software': this.library.add(new Software(res[i].trackName, res[i].primaryGenreName, res[i].artworkUrl100));
          //   break;
          // case 'software': this.library.add(new Software(res[i].trackName, res[i].primaryGenreName, res[i].artworkUrl100));
          //   break;
          // case 'software': this.library.add(new Software(res[i].trackName, res[i].primaryGenreName, res[i].artworkUrl100));
          //   break;
        }

      }
    },
  }
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
