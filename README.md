# Server

Web Api básica construída com Node.js, Express, e MySQL.

## Descrição

Este projeto é uma API simples que permite criar, ler, atualizar e excluir clientes. Utiliza o Express para o servidor e o MySQL para o banco de dados.

## Dependências

- `dotenv`: ^16.4.5
- `express`: ^4.19.2
- `mysql2`: ^3.10.3

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/PhilipeSousa/web-api-node-mysql.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e configure suas variáveis de ambiente:
    ```env
    PORT=3000
    CONNECTION_STRING="sua-string-de-conexão-ao-mysql"
    ```

## Executando o servidor

Para iniciar o servidor, use o comando:
```bash
npm start
