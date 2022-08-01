<p align="center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" height="120px">
  <path style="stroke:none;fill-rule:nonzero;fill:#ffcc3c;fill-opacity:1" d="m58.078 37.188-27.5-16.72C28.11 19.095 25 20.86 25 23.75v32.5c0 2.875 3.094 4.656 5.578 3.281l27.5-15.781c2.563-1.422 2.563-5.125 0-6.563ZM78.75 40C78.75 18.594 61.406 1.25 40 1.25S1.25 18.594 1.25 40 18.594 78.75 40 78.75 78.75 61.406 78.75 40Zm-70 0C8.75 22.734 22.734 8.75 40 8.75S71.25 22.734 71.25 40 57.266 71.25 40 71.25 8.75 57.266 8.75 40Zm0 0"/>
</svg>
</p>
<h1 align="center" style="font-size:4em">MovieApp</h1>
<p align="center">Um simples app para pesquisar filmes :)</p>
<p align="center"><img width=100% src="https://res.cloudinary.com/paulocarmino/image/upload/v1659335399/movieapp_cfv7zd.png"></p>

<p align="center">Experimente o app acessando a url abaixo:</p>
<p align="center"><a href="https://movieapp.vercel.app/">https://movieapp.vercel.app</a></p>

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

[Link para o storybook](http://www.google.com/)

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
