app.component("photo-item", {
  props: {
    task: Object,
    index : Number
  },
  template:
    /*html*/
    `
    <ul>
      <li class="py-3.5 space-x-6 items-center rounded-lg">
        <div class="rounded-lg inline"><img v-bind:src="task.image" alt="task.title" class="h-48 py-3 inline "
            @click="bigPic(index)">
        </div>

        <span class="text-gray-700 font-semibold text-sm inline">{{task.title}} </span>
        <span v-show="!task.done" v-on:click="toggleDone(index)"
          class="material-icons text-red-500 align-middle cursor-pointer">favorite_border</span>
        <span v-show="task.done" v-on:click="toggleDone(index)"
          class="material-icons text-red-500 align-middle cursor-pointer">favorite</span>
      </li>
    </ul>
    `,

  methods: {
    bigPic(index) {
      this.$emit("when-big", index);
    },
    toggleDone(index) {
      this.$emit("when-toggle", index);
    },
  },
});
