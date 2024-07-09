# Teste WS Work

Teste para a vaga de Frontend, utilizei a ferramenta Vite para facilitar a criação da aplicação e pela rapidez, Axios para realizar as requisições e Tailwind para estilização.
Optei por usar JSON Server para criar uma API fake por conta de problemas com CORS que enfrentei no momento de requisição da api pelos seguintes links:

- <a href="https://wswork.com.br/cars.json">cars.json</a>
- <a href="https://wswork.com.br/cars_by_brand.json">cars_by_brand.json</a>

<p align="center">
<img src="./src/assets/screen.png" alt="Imagem mostrando a tela de aplicação com um formulário e a listagem de carros."/>
</p>

## O que é possível fazer

- Visualizar lista de carros
- Adicionar carros a lista
- Deletar carros da lista

### Tecnologias

- Vite
- React
- TailwindCSS
- Axios

### Requerimentos

- NodeJS (v22.3.0)
- NPM (10.8.1)
- JSON Server (1.0.0-beta.1)

```
/* Clonar repositório */
git clone https://github.com/thawansilva/testewswork.git

/* Instalar os pacotes necessários */
npm install

/* Rodar a aplicação */
npm run dev

/* Simular uma API RESTful (Executar em outro terminal) */
npm run server

```
