import { Request, Response } from "express";
import { Carro } from "../models/carro.model";
import { repository } from "../prisma";

export class CarController {
  public async create(request: Request, response: Response) {
    const { modelo, marca, ano, cor } = request.body;

    if (!modelo || !marca || !ano || !cor)
      return response
        .status(400)
        .send({ ok: false, message: "Por favor, preencha todos os campos!" });

    try {
      const carro = new Carro(modelo, marca, ano, cor);
      const result = await repository.carro.create({ data: carro });

      return response.status(200).send({
        ok: true,
        message: "Carro cadastrado com sucesso!",
        data: result,
      });
    } catch (error: any) {
      return response
        .status(500)
        .send({ ok: false, message: error.toString() });
    }
  }

  public async remove(request: Request, response: Response) {
    const { id } = request.params;
    if (!id)
      return response
        .status(400)
        .send({ ok: false, message: "Por favor, informe o ID do carro" });
    const carro = await repository.carro.findUnique({ where: { id } });

    if (!carro)
      return response
        .status(404)
        .send({ ok: false, message: "Carro não encontrado!" });
    await repository.carro.delete({ where: { id } });

    return response.status(200).send({
      ok: true,
      message: "Carro deletado da tabela!",
    });
  }
}
