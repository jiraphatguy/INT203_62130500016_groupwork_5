const app = {
    data() {
        return {
            tasks: [{ image: './images/guy1.jpg', title: '우리는 서로를 찾아 ', done: false },
            { image: './images/guy2.jpg', title: '우리 이야기', done: false },
            { image: './images/guy3.jpg', title: '내가 너의 Boss', done: false }
            ],
            searchbutton: false,
            isBigPicture: false,
            textSearch: '',
            bigPictureSrc: '',
            searchText: ''
        }
    },
    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        },
        searchBarToggle() {
            this.searchbutton = !this.searchbutton;
            this.form.searchText = '';
            this.textSearch = '';
        },
        bigPic(index) {
            this.bigPictureSrc = this.tasks[index].image
            this.isBigPicture = true
        },
        search() {
            this.textSearch = this.form.searchText
        }
    },

    computed: {
        countdone() {
            return this.tasks.filter(t => t.done).length
        },
        searched() {
            return this.tasks.filter((t) => {
                return t.title.toLowerCase().includes(this.searchText.toLowerCase());
            })
        }
    }
}
Vue.createApp(app).mount('#app')