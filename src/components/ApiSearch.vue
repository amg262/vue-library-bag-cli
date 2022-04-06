<template>

  <form @submit.prevent="query">
    <input type="text" class="form-control m-1" v-model="queryString" id="query-string"  placeholder="Search API">
    <input type="number" class="form-control m-1" v-model="termLimit" id="term-limit"  value="25">
    <span>Term limit must be >= 11</span>
    <div class="row">
      <select class="form-control" v-model="select">
        <option v-for="o in opts" :value="o.value" :key="o.value">{{ o.name }}</option>
      </select>
    </div>
    <button type="submit" class="btn btn-secondary" id="search-button">Search</button>
  </form>

</template>

<script>
import axios from 'axios';

export default {
  name: "ApiSearch",
  data() {
    return {
      queryString: '',
      termLimit: 25,
      queryResults: [],
      select: 'all',
      opts: [
        {value: 'all', name: 'All'},
        {value: 'tvShow', name: 'TV Show'},
        {value: 'music', name: 'Music'},
        {value: 'movie', name: 'Movie'},
        {value: 'podcast', name: 'Podcast'},

        {value: 'audiobook', name: 'Audiobook'},
        {value: 'ebook', name: 'E-book'},
        // {value: 'movie', name: 'Movie'},
        // {value: 'music', name: 'Music'},
        {value: 'musicVideo', name: 'Music Video'},
        // {value: 'podcast', name: 'Podcast'},
        {value: 'shortFilm', name: 'Short Film'},
        {value: 'software', name: 'Software'},
      ],
      limit: 25,

    }
  },
  methods: {
    query() {
      if (this.queryString) {

        const url = 'https://itunes.apple.com/search?'
        // const li = 20;



        const config = {
          params: {
            term: this.queryString,
            // limit: this.limit,
            media: this.select,
            limit: this.termLimit,
            // termLimit = this.termLimit
          }
        }

        if (config.params.limit <= 10) {
          config.params.limit = 11;
        }
        axios.get(url, config)
            .then(response => {
              if (response.data.results.length > 0) {
                this.queryResults = response.data.results;
                console.log(this.queryResults)
              } else {
                this.queryResults = [];
              }
            })
            .catch(error => {
              console.log('AJAX SEARCH ERROR', error);

            })
            .finally(() => {
              this.$emit('search-finished', this.queryResults);
              this.searching = false;
              this.searchTerm = '';
            })
      }
    }
  }
}
</script>

<style scoped>

</style>