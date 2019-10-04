export class Token {
  public trimLeft = false
  public trimRight = false
  public type = 'notset'
  public line: number
  public col: number
  public raw: string
  public input: string
  public file?: string
  public value: string
  private x: any;
  public constructor (raw: string, input: string, line: number, col: number, file?: string) {
    this.x = Number(raw)
    this.col = col
    this.line = line
    this.raw = raw
    this.value = raw
    this.input = input
    this.file = file
  }
}
