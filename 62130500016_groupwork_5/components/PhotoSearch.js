app.component("photo-search", {
  props: {
    searchtext: String,
    searchbutton : Boolean
  },
  template:
    /*html*/
    `
    <div id="search-bar" class="mt-5">
      <span class="material-icons text-xl cursor-pointer" v-show="!searchbutton" @click="searchBarToggle">search</span>
      <div v-show="searchbutton"><input type="text" placeholder="Search the photo" v-model="searchtext"
          class="border border-gray-500 shadow " @keyup.enter="search">
        <button @click="searchBarToggle"
          class="ml-2 inline shadow text-white bg-blue-500 rounded-sm w-16 h-7 hover:bg-blue-700">Cancel</button>
      </div>
     </div>
    `,

  methods: {
    search() {
     this.$emit('when-search')
    },
    searchBarToggle() {
      this.$emit('when-search-toggle')
    },
  },
});
