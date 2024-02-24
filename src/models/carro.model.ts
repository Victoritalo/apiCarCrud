import { randomUUID } from "crypto";

export class Carro {
  public id: string;
  constructor(
    public modelo: string,
    public marca: string,
    public ano: string,
    public cor: string
  ) {
    this.id = randomUUID();
  }
}
