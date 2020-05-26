export class MassFormaterValueConverter {
  public toView(value: number): string {
    return !value || value === 0 ? "unknown" : value + "kg";
  }
}
