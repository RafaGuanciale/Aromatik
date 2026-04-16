# Aromatik 1.9 — Front-end Web App

**visualizar projeto:** https://rafaguanciale.github.io/Aromatik/

O Aromatik é um projeto pessoal desenvolvido em paralelo às sprints do curso de Web Development da TripleTen. Ele funciona como um laboratório contínuo de evolução, onde aplico de forma prática os conceitos aprendidos em HTML, CSS e JavaScript, sempre com foco em organização, clareza, escalabilidade e visão de produto.

A versão 2.0 marca uma evolução significativa na proposta do projeto, introduzindo uma abordagem mais inteligente e contextualizada de recomendação de perfumes, baseada na análise da coleção do usuário.

## Objetivo do projeto

O Aromatik **não é um catálogo de perfumes**.  
A proposta é funcionar como uma ferramenta de leitura de coleção pessoal, ajudando o usuário a:

- Visualizar sua coleção de forma organizada
- Entender o perfil predominante das fragrâncias
- Descobrir se a coleção está balanceada e o que incluir para completá-la
- Explorar fragrâncias por categoria e ocasião
- Navegar por fluxos próximos de uma aplicação real, com autenticação e persistência

## Tecnologias Utilizadas

- HTML5
- CSS3
- Metodologia BEM
- Arquitetura modular de CSS (por blocos)
- JavaScript (ES6+)
- Manipulação de DOM
- POO com classes (ES Modules)
- Validação de formulários (FormValidator)
- Sistema de modais reutilizável (Popup / PopupWithForm)
- Google Fonts 
- Node.js + npm
- json-server (API REST local)
- Fetch API + Promises
- localStorage (persistência de sessão)

## API local (json-server)

A versão 1.9 introduz uma API REST local construída com **json-server**, hospedada em um repositório separado (`aromatik-api`). A API expõe três endpoints:

- `/users` — dados de autenticação do usuário
- `/perfumes` — catálogo de fragrâncias disponíveis
- `/collection` — coleção pessoal do usuário (referências por `perfumeId`)

## Principais funcionalidades e soluções técnicas

1. **Classe `Api` com métodos de comunicação**
   - `checkApi()` — verifica se a API está online antes de qualquer requisição
   - `getUserLogin(username)` — busca usuário por username para autenticação
   - `getCollection()` — busca os itens da coleção do usuário
   - `getPerfumeById(id)` — busca dados completos de um perfume pelo id
   - `searchPerfume(name)` — busca perfume no catálogo por nome
   - `addToCollection(data)` — adiciona perfume à coleção (POST com `perfumeId`)
   - `removeFromCollection(id)` — remove item da coleção (DELETE)

2. **Sistema de login conectado à API**
   - Validação real de usuário e senha contra o servidor
   - Três cenários tratados: usuário inexistente, senha inválida e login correto
   - Persistência de sessão via `localStorage`
   - Restauração automática do estado de login ao recarregar a página

3. **Fallback para GitHub Pages**
   - `checkApi()` determina se a API está disponível
   - Quando offline: login simulado + cards estáticos do array local
   - Quando online: fluxo completo conectado à API
   - Permite que visitantes do portfólio experimentem a aplicação sem rodar a API

4. **Coleção dinâmica via API**
   - Carregamento inicial com `getCollection()` + `Promise.all()` para buscar perfumes em paralelo
   - Adição de perfumes via busca no catálogo + `addToCollection()`
   - Remoção com `removeFromCollection()` — DOM atualizado apenas após confirmação do servidor

5. **UI dinâmica por estado de login**
   - Classe `Ui` (evolução da `HeaderUi`) controla todas as sections
   - Antes do login: sections de coleção e categorias ocultas
   - Após login: home, sobre e autor ocultados — coleção e categorias reveladas
   - Estado restaurado automaticamente via `localStorage`

6. **Redesign visual completo**
   - Nova identidade com Playfair Display + Montserrat
   - Paleta refinada: Champagne, Reseda Green, Bistre, Khaki e Blush
   - Hero com layout split e divisória diagonal em SVG
   - Section "Sobre o Aromatik" com mockups reais do projeto
   - Section "Sobre mim" com foto biografia e overlay com gradiente
   - Divisores Khaki entre sections
   - Elementos decorativos sutis (círculos concêntricos na section 2)
   - Box-shadow e hover em mockups, foto e botões
   - Cards de categoria com efeito de expansão e reveal no hover (CSS puro)

7. **Sistema de recomendações (novo na v2.0)**
   - Foi implementada uma nova section que sugere perfumes com base na análise da coleção do usuário.
   - As recomendações são organizadas por:
    * Categoria olfativa (ex: frescos, cítricos, florais)
    * Faixa de preço (tiers light, premium, high)

8. **Sistema de expansão de categorias**
   - Cada categoria da section de recomendações funciona como um bloco interativo
   - O container de perfumes inicia com max-height: 0 e opacity: 0
   - Ao clicar na categoria, uma classe é adicionada/removida
   - Assim o container expande com uma transição suave.
   - Uso de dataset para identificar as categorias e toggle para controle de estado
   - Feedback visual no estado da categoria pela seta indicadora

## Decisões arquiteturais

- `index.js` como **orquestrador**: instâncias, listeners, bootstrap e verificação de API
- Separação clara entre **fluxo com API** e **fluxo sem API** em todos os handlers
- Classes com responsabilidade única:
  - `Api` (comunicação com o servidor)
  - `Popup` / `PopupWithForm` (modais)
  - `Section` (renderização de listas)
  - `Card` (template + listeners)
  - `UserInfo` (leitura/escrita de perfil)
  - `Ui` (estado visual global da aplicação)

## Aprendizados pessoais

- Construção de uma API REST do zero com json-server
- Modelagem de banco de dados com recursos relacionados (perfumes × collection)
- Fetch API com encadeamento de Promises e `Promise.all()`
- Persistência de estado com `localStorage`
- Arquitetura de fallback para ambientes sem servidor
- Design system completo: paleta, tipografia, espaçamentos e componentes
- Separação real entre estado, UI e orquestração

## Melhorias futuras (roadmap v2.1+)

- Reescrita completa em **React**
- Componentização de cards, modais e formulários
- Gerenciamento de estado com hooks
- Integração com API externas (Claude / Fragella)
- Sistema de recomendação mais inteligente
- Filtros e busca por categoria, ocasião e perfil olfativo
- Persistência completa com backend real
- Perfil do usuário com estatísticas da coleção
- Dashboard completo para o usuário
- Blog implementado

## Screenshots

Header
![New landpage](./images/screenshots/newLandpage.JPG)
![New landpage](./images/screenshots/newProfile.JPG)

Coleção
![Coleção](./images/screenshots/newCollection.JPG)

Card Modal
![Cards](./images/screenshots/modal-collection-card.jpg)

Categorias
![Categorias](./images/screenshots/section-categories.jpg)

Identidade Olfativa
![Categorias](./images/screenshots/newIdentity.JPG)

Recomendações
![Categorias](./images/screenshots/section-recomendation.jpg)

This project is for educational and portfolio purposes only.
Commercial use is not permitted without explicit authorization.
