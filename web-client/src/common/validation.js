const commonValidation = {
  methods: {
    validateObject(testObject) {
      return (
        typeof testObject === "object" &&
        testObject !== null &&
        testObject.hasOwnProperty("id")
      );
    },
  },
};

export default commonValidation;
