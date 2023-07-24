# Ana Store
Site de catálogo virtual de uma loja de semijóias.

## Funcionalidades
1. A aplicação possuí as seguintes funcionalidades:
   - Filtrar produto por nome
   - Filtrar produto por categoria
   - Filtrar produto por menor preço
   - Filtrar produto por maior preço
   - Filtrar produto por ordem alfabética de forma crescente
   - Filtrar produto por ordem alfabética de forma descrescente
   - Fazer pedido pelo WhatsApp
   - Scroll
   - Responsividade
  
a) Filtro por nome
Para filtrar basta digitar o nome do produto na barra de busca e é listado apenas o produto correspondente.

b) Demais filtros
Ficam localizados no menu lateral e ao ser clicados retornam apenas os produtos correspondentes.

c) Pedidos 
Ao clicar no card do produto o usuário é redirecionado para a página `/order` onde são retonados as informações do produto correspondente.
Abaixo tem um botão, que ao ser clicado, redireciona o usuário para o whatsapp da vendedora.

d) Scroll
O botão do scroll só aparece quando o usuário rola a tela. Ao clicar ele retorna para o início da página.

## Tecnologias utilizadas
  - ReactJs
  - Cors
  - ContextApi
  - React-router-dom
  - CMS Prismic

# Rodar projeto localmente
#### clone o repositório 

Com chave SSH

```bash
git@github.com:SinaraMoura/anastore.git
```

Sem chave SSH

```bash
https://github.com/SinaraMoura/anastore.git
```

### Entrar na pasta

```bash
cd anastore
```

Instalar as dependências

```bash
npm install
```

Rodando a aplicação

```bash
npm run dev
```
