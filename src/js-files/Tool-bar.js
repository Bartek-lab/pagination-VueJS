export default {
  name: "toolBar",
  data() {
    return {
      input: "",
      isSorted: true,
    };
  },
  methods: {
    search() {
      this.$store.commit("SET_Searched", this.input);
      return this.$store.getters.filtered;
    },
    sorted(event) {
      if (event.target.value === "asc") {
        this.isSorted = true;
      }
      if (event.target.value === "dsc") {
        this.isSorted = false;
      }

      this.$store.commit("SET_Sorted", this.isSorted);
      return this.$store.getters.sorted;
    },
  },
};
