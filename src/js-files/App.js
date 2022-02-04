import paginationContainer from "../components/pagination-container.vue";
import toolBar from "../components/tool-bar.vue";
import postsSection from "../components/posts-section.vue";
import headerContainer from "../components/header.vue";
import footerContainer from "../components/footer.vue";
export default {
  name: "App",

  components: {
    toolBar,
    postsSection,
    paginationContainer,
    headerContainer,
    footerContainer,
  },
  mounted() {
    this.$store.dispatch("loadPosts");
  },
  data() {
    return { currentPage: 1 };
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
