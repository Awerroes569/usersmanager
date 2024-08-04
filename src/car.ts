class Car implements CarInterface {
    public foo: string = 'bar';
    private model: string;
    private maxSpeed: number;
    private engine: number;
  
    constructor(model: string) {
      this.model = model;
      this.maxSpeed = 100;
      this.engine = 120;
    }
  
    private formatSpeed(value: number): string {
      return value + 'km/h';
    }
  
    public getCarInfo(): string {
      return (
        'Car info: '
        + this.model
        + ', '
        + this.formatSpeed(this.maxSpeed)
        + ', engine: '
        + this.engine
      );
    }
  }