# Aromatik 1.5 — Front-end Web App

**visualizar projeto:** https://rafaguanciale.github.io/Aromatik/

O Aromatik é um projeto pessoal desenvolvido em paralelo às sprints do curso de Web Development da TripleTen. Ele funciona como um laboratório contínuo de evolução, onde aplico de forma prática os conceitos aprendidos em HTML, CSS e JavaScript, sempre com foco em organização, clareza, escalabilidade e visão de produto.

A partir da versão 1.5, o Aromatik deixa de ser apenas um site visual e passa a se comportar como um mini app front-end, com estado, interação, modais e leitura de dados da coleção.

Objetivo do Projeto

O Aromatik não é um catálogo de perfumes.
A proposta é funcionar como uma ferramenta de leitura de coleção pessoal, ajudando o usuário a:

- Visualizar sua coleção de forma organizada
- Entender o perfil predominante das fragrâncias
- Refletir sobre equilíbrio, uso e identidade olfativa
- Contextualizar cada perfume dentro do todo

## Tecnologias Utilizadas

- HTML5
- CSS3
- Flexbox e Grid Layout
- Arquitetura modular de CSS
- JavaScript (DOM, eventos, modais)
- Templates HTML (<template>)
- Manipulação dinâmica de DOM
- Controle de estado visual via classes
- Metodologia BEM
- Tipografia com Google Fonts

## Principais Funcionalidades e Soluções Técnicas

1. Coleção de Perfumes (Cards Dinâmicos)

- Cards criados dinamicamente a partir de um template HTML
- Estrutura clara com imagem, marca e nome do perfume
- Layout responsivo utilizando CSS Grid
- Hover sutil com transições controladas
- Remoção de cards com controle correto de eventos (event bubbling)

2. Modal de Detalhe do Perfume

- Modal individual para cada perfume
- Overlay com bloqueio de scroll do body
- Conteúdo estruturado com hierarquia clara:
- Imagem em destaque
- Marca e nome
- Descrição objetiva
- Labels de perfil, clima e período
- Papel do perfume dentro da coleção
- Implementação com event delegation
- Separação correta entre overlay e conteúdo
- Botão de fechar posicionado de forma contextual

3. Adição de Perfumes via Modal

- Modal dedicado para adicionar novos perfumes
- Formulário controlado com JavaScript
- Criação dinâmica de novos cards
- Reset do formulário após submissão
- Estrutura preparada para persistência futura (LocalStorage)

4. Modais Padronizados

- Funções reutilizáveis para abrir e fechar modais
- Controle de estado via classes CSS
- Padronização visual e comportamental entre todos os modais
- Correção de conflitos de eventos com stopPropagation

5. Estrutura de Layout como App (SPA-like)

- Site estruturado em sections interligadas
- Navegação fluida sem troca de páginas
- Compartilhamento de estado visual entre seções
- Base sólida para evolução até a versão 2.0

## Aprendizados Pessoais

Esta versão do Aromatik representou uma evolução significativa em organização e clareza de código. Alguns aprendizados importantes:

- Uso correto de event delegation em listas dinâmicas
- tendimento profundo de event bubbling e controle de propagação
- Diferença entre conteúdo e overlay em modais
- Especificidade e ordem de regras CSS
- Uso consciente de Grid vs Flexbox
- Estruturação de componentes reutilizáveis
- Separação de responsabilidades entre HTML, CSS e JS
- Pensar UI como parte de um sistema, não como blocos isolados
- Evolução de pensamento de “site” para “aplicação”

Além do aspecto técnico, a versão 1.5 marcou uma evolução clara na visão de produto, deixando de focar apenas em layout e passando a refletir sobre uso real, contexto e leitura de dados.

## Melhorias Futuras (Roadmap)

Aromatik 1.6

- Tornar o conteúdo do modal totalmente dinâmico
- Estruturar dados dos perfumes para análise
- Refinar leitura da coleção (equilíbrio, perfil predominante)
- Pequenos refinamentos de UX

Aromatik 2.0

- Inteligência da coleção baseada em regras
- Análises automáticas do perfil olfativo
- Recomendações por contexto (clima, período)
- Persistência completa com LocalStorage
- Front-end finalizado como app pessoal

## Screenshots

Header
![Header](./images/screenshots/profile.modal.JPG)

Coleção
![Coleção](./images/screenshots/collection.JPG)

Card Modal
![Cards](./images/screenshots/card.modal.JPG)

Categorias
![Categorias](./images/screenshots/categories.jpg)
