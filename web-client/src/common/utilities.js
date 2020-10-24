import moment from "moment";

const commonUtilities = {
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
      try {
        this.stickyParentHeight = this.$refs.stickyParent.clientHeight - 500;
      } catch (error) {
        this.stickyParentHeight = 0;
      }
    },
    formatTime(time) {
      return time ? moment(time, "hh:mm").format("LT") : "";
    },
  },

  mounted() {
    this.scroll();
    this.matchHeight();
  },
};

export default commonUtilities;
