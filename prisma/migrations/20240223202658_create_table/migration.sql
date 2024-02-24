-- CreateTable
CREATE TABLE "Carro" (
    "id" UUID NOT NULL,
    "modelo" VARCHAR(15) NOT NULL,
    "marca" VARCHAR(15) NOT NULL,
    "ano" VARCHAR(4) NOT NULL,
    "cor" VARCHAR(10) NOT NULL,

    CONSTRAINT "Carro_pkey" PRIMARY KEY ("id")
);
