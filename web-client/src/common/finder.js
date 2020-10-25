const commonFinder = {
  computed: {
    genericDestinations() {
      return this.$store.state.generic.destinations;
    },
  },

  methods: {
    getDestinationName(destinationID) {
      const foundDestination = this.genericDestinations.find(
        (destination) => destination.id === destinationID
      );
      return foundDestination.name;
    },
  },
};

export default commonFinder;
