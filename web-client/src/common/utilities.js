import moment from "moment";
import numberFormatter from "number-formatter";

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
    formatMoney(money) {
      return money > 0 ? numberFormatter("₱ #,###.00", money) : `₱ 0.00`;
    },
    formatDate(date) {
      return date ? moment(date).format("MMMM D, YYYY") : "";
    },
  },

  mounted() {
    this.scroll();
    this.matchHeight();
  },
};

export default commonUtilities;
