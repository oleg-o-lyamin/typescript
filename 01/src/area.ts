

// не понял, что такое "прямоугольная область, описывающая примитив" в описании к заданию, поэтому не стал реализовать
export abstract class MyGraphicsPrimitive2D {
  public abstract move(x: number, y: number): void
}

export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  protected _area: number
  public get area(): number { return this._area }
  protected abstract calculateArea(): void
}

export class MyCircle extends MyAreaPrimitive2D {
  private static PI = 3.14

  public get radius() { return this._radius }
  public set radius(radius: number) {
    this._radius = radius
    this.calculateArea()
  }

  public get center() { return { x: this.center_x, y: this.center_y } }

  constructor(private center_x: number, private center_y: number, private _radius: number) {
    super()
    this.calculateArea()
  }

  protected calculateArea(): void {
    this._area = MyCircle.PI * this._radius * this._radius
  }

  public move(x: number, y: number): void {
    this.center_x += x
    this.center_y += y
  }
}

export class MyRectangle extends MyAreaPrimitive2D {
  public get width() { return this._width }
  public set width(width: number) {
    this._width = width
    this.calculateArea()
  }

  public get height() { return this._height }
  public set height(height: number) {
    this._height = height
    this.calculateArea()
  }

  public get topLeft() { return { x: this.x_left, y: this.y_top } }

  // в описании "ширина и высоты, левая верхняя граница и правая нижняя граница", но я сделал так
  // т.е. прямоугольник определяется верхней левой вершиной и размерностями
  constructor(private x_left: number, private y_top: number, private _width: number, private _height: number) {
    super()
    this.calculateArea()
  }

  protected calculateArea(): void {
    this._area = this._width * this._height
  }

  public move(x: number, y: number): void {
    this.x_left += x
    this.y_top += y
  }
}
