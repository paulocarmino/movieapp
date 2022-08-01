<p align="center"><img src="https://res.cloudinary.com/paulocarmino/image/upload/v1659345782/image_1_fivcay.svg"></p>
<h1 align="center" style="font-size:4em">MovieApp</h1>
<p align="center">Um simples app para pesquisar filmes :)</p>
<p align="center"><img width=100% src="https://res.cloudinary.com/paulocarmino/image/upload/v1659335399/movieapp_cfv7zd.png"></p>

<p align="center">Experimente o app acessando a url abaixo:</p>
<p align="center"><a href="https://movieapp-pied.vercel.app/">https://movieapp-pied.vercel.app/</a></p>

# Tecnologias envolvidas

- React
- Next.JS
- TailwindCSS
- Prisma

# Features

- Pesquisa de filmes
- Favoritar filmes por browser (localStorage e Prisma)
- Components desenhados no Storybook
- Backend via API Routes (NextJS)
- Testes automatizados (Jest)
- Imagem Docker
- CI/CD e deploy na Vercel
- App responsivo

# Storybook

Para ver os components desenvolvidos para esse app no storybook, clique no link abaixo:

[https://paulocarmino.github.io/movieapp](https://paulocarmino.github.io/movieapp)

# Rodando o projeto com docker-compose

```
# Clone esse repositorio
git clone https://github.com/paulocarmino/movieapp

# Faça o build da imagem
docker-compose build

# Inicie o banco e a aplicação
docker-compose up

```

# Desenvolvendo o projeto

```
# Clone esse repositorio
git clone https://github.com/paulocarmino/movieapp

# Entre no repositorio
cd movieapp

# Instale as dependencias
yarn install

# Inicie o banco pelo docker-compose
docker-compose up -d postgres

# Aplique as migrations no banco
yarn run prisma migrate deploy

# Build o projeto
yarn run build

# Rodando o projeto
yarn run dev
```

# API Routes

## Explicação Header Browser-Id

Em todas as requisições pode ser passado o header `Browser-Id` para identificação unica do browser e persistência dos favoritos.

Exemplo:

| Header     | Value                                |
| ---------- | ------------------------------------ |
| Browser-Id | d9cdc12c-79ea-443c-b1b9-efb6c314d653 |

## End-point: Search movie by name

### Method: GET

> ```
> /api/movies/search?searchTerm=[searchTerm]
> ```

### Query Params

| Param      | type   |
| ---------- | ------ |
| searchTerm | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get movie details

### Method: GET

> ```
> /api/movies/[movieId]
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Favorite a movie

### Method: POST

> ```
> /api/movies/[movieId]/favorite
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Unfavorite a movie

### Method: POST

> ```
> /api/movies/353081/unfavorite
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# Licença

MIT
