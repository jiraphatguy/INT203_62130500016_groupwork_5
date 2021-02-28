app.component("photo-view", {
  props: {
    isbigpicture: Boolean,
    bigpicturesrc: String,
  },
  template:
    /*html*/
    `
    <div class="h-96 max-w-xl bg-black flex justify-center" v-show="isbigpicture">
      <img :src="bigpicturesrc" class="h-96">
      <div @click="close" class="w-8 h-8 absolute bg-red-400 mt-3.5 ml-72 "></div>
    </div>
      `,
  methods: {
    close() {
      this.$emit('close')
    }
  },
});
