export class ColumnNumericTransformer {
  to(data: number): number {
    return data;
  }
  from(data: string): number {
    return parseFloat(data);
  }
}

export const ColumnCoordinationTransformer = {
  from: (value: any) => value,
  to: (value: { latitude: any; longitude: any }) =>
    `${value.latitude},${value.longitude}`,
};
