# apiCarCrud, teste feito sob supervisão de Fayra

# README - API de Gerenciamento de Carros

Esta é uma API em desenvolvimento para gerenciamento de carros, utilizando Node.js com Express e Prisma para interação com o banco de dados.

## Funcionalidades Implementadas

- **Cadastro de Carro**
  - Endpoint: `POST /carro`
  - Adiciona um novo carro ao banco de dados com as informações de modelo, marca, ano e cor.

- **Remoção de Carro**
  - Endpoint: `DELETE /carro/:id`
  - Remove um carro do banco de dados com base no ID fornecido.

- **Consulta de Carro por ID** (em desenvolvimento)
  - Endpoint: `GET /carro/:id`
  - Retorna as informações de um carro com base no ID fornecido.

## Como Executar

1. **Instalação de Dependências**
   Certifique-se de ter o Node.js e o npm instalados em sua máquina. Em seguida, execute o seguinte comando para instalar as dependências necessárias:

   ```bash
   npm install
   ```

2. **Configuração do Banco de Dados**
   Antes de iniciar o servidor, é necessário configurar a conexão com o banco de dados. Edite o arquivo `prisma/schema.prisma` com as configurações adequadas para o seu banco de dados.

3. **Iniciar o Servidor**
   Após configurar o banco de dados, você pode iniciar o servidor executando o seguinte comando:

   ```bash
   npm start
   ```

   O servidor será iniciado na porta `3333` por padrão.

## Exemplos de Uso

### Exemplo de Cadastro de Carro

```json
POST http://localhost:3333/carro

{
  "modelo": "Fusca",
  "marca": "Volkswagen",
  "ano": "1972",
  "cor": "Azul"
}
```

### Exemplo de Remoção de Carro

```json
DELETE http://localhost:3333/carro/:id
```

Substitua `:id` pelo ID do carro que deseja remover.

## Considerações Finais

Esta API está em desenvolvimento e novas funcionalidades serão implementadas em breve. Fique à vontade para contribuir e enviar sugestões de melhorias.
