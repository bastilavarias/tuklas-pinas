const commonValidation = {
  methods: {
    validateObject(testObject, property) {
      return (
        typeof testObject === "object" &&
        testObject !== null &&
        testObject.hasOwnProperty(property)
      );
    },
  },
};

export default commonValidation;
