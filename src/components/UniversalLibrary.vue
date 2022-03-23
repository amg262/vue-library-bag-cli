<template>
  <div class="card-columns col-12 col-md-8">
    <library-item v-for="(item, i) in library" :key="i"
                  :item="item" @add-to-basket="theItemEmitted => $emit('add-to-basket', theItemEmitted)"></library-item>
  </div>
</template>

<script>
import LibraryCollection from "@/models/LibraryCollection";
import {Album, Book, Movie} from "@/models/LibraryItems";
import LibraryItem from "@/components/LibraryItem";

export default {
  name: "UniversalLibrary",
  components: {LibraryItem},
  props: {},
  data() {
    return {
      library: new LibraryCollection()
          .addItem(new Album('Some album', 'some band', 10))
          .addItem(new Album('Some album 2', 'some band', 10))
          .addItem(new Album('Some album 3', 'some band', 10))
          .addItem(new Album('Some album 4', 'some band', 10))
          .addItem(new Album('Some album 6', 'some band', 10))
          .addItem(new Book('Seductive Interaction Design', 234))
          .addItem(new Book('Learn Vue', 234))
          .addItem(new Book('Learn Boo', 2345))
          .addItem(new Movie('The Muppets', 107))
          .addItem(new Movie('Strange Brew', 97)),
      repairs: new LibraryCollection(),
    }
  },
}
</script>

<style scoped>

</style>