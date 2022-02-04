export default {
  name: "pagination-conatiner",

  data() {
    return { input: "", readMore: {} };
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
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
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      if (this.totalPages === 0) {
        return true;
      }

      return this.currentPage === this.totalPages;
    },
    startPage() {
      // na pierwszej stronie

      if (this.currentPage === 1) {
        return 1;
      }
      // na ostatniej stronie
      if (this.totalPages < this.maxVisibleButtons) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      // pomiedzy
      return this.currentPage - 1;
    },
    endPage() {
      if (this.totalPages === 0) {
        return 1;
      }
      if (this.totalPages < this.maxVisibleButtons) {
        return this.totalPages;
      }
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      const range = [];
      for (let i = this.startPage; i <= this.endPage; i++) {
        range.push({
          number: i,
          isDisabled: i === this.currentPage,
        });
      }
      return range;
    },
  },
  methods: {
    onClickFirstPage() {
      if (this.isInFirstPage) {
        return false;
      }
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      if (this.isInFirstPage) {
        return true;
      }
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      if (this.isInLastPage) {
        return false;
      }
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      if (this.isInLastPage) {
        return false;
      }
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
    onPageChange(page) {
      this.currentPage = page;
    },
  },
};
