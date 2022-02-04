export default {
  name: "postsSection",

  data() {
    return { isSorted: true, readMore: {} };
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    paginated() {
      let start = (this.currentPage - 1) * this.perPage,
        end = start + this.perPage;
      return this.$store.getters.filtered.slice(start, end);
    },
  },
  methods: {
    onDeletePost(post) {
      this.$store.dispatch("deletePost", post);
    },
    readMoreHandler(id) {
      this.readMore[id] = !this.readMore[id];
    },
  },
};
