const CommonUtilities = {
  data() {
    return {
      isScrollingDown: false,
      stickyParentHeight: 0,
    };
  },

  methods: {
    scroll() {
      window.onscroll = () => {
        if (window.pageYOffset > 5) {
          this.isScrollingDown = true;
          return;
        }
        this.isScrollingDown = false;
      };
    },
    goBack() {
      this.$router.go(-1);
    },
    matchHeight() {
      this.stickyParentHeight = this.$refs.stickyParent.clientHeight;
    },
  },

  mounted() {
    this.scroll();
    this.matchHeight();
  },
};

export default CommonUtilities;
