"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnCoordinationTransformer = exports.ColumnNumericTransformer = void 0;
class ColumnNumericTransformer {
    to(data) {
        return data;
    }
    from(data) {
        return parseFloat(data);
    }
}
exports.ColumnNumericTransformer = ColumnNumericTransformer;
exports.ColumnCoordinationTransformer = {
    from: (value) => value,
    to: (value) => `${value.latitude},${value.longitude}`,
};
//# sourceMappingURL=helper.js.map