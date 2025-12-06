![PoupApp](thumb.png)

# 💰 PoupApp

O PoupApp é uma plataforma de gerenciamento financeiro voltada para ajudar usuários a organizar suas finanças. Focado na simplicidade, o PoupApp permite que os usuários acompanhem seus gastos, definam metas financeiras e visualizem seu progresso através de gráficos dinâmicos.

Com funcionalidades que incentivam o controle de despesas e a organização do orçamento diário, o PoupApp se torna o parceiro ideal para quem busca saúde financeira e realização de objetivos pessoais.

<p align="center">
  <img src="./poupapp-home.png" alt="Página Inicial" width="30%" style="vertical-align: top; margin-right: 20px;" />
</p>

## 🔨 Funcionalidades do projeto

O PoupApp oferece as seguintes funcionalidades:

### 📊 Dashboard Financeiro

- **Orçamento Diário**: Visualização do orçamento disponível calculado automaticamente com base na renda e nas transações realizadas
- **Balanço Financeiro**: Exibição do saldo atual considerando receitas e despesas
- **Saudação Personalizada**: Mensagem de boas-vindas com o nome do usuário

### 💸 Gestão de Transações

- **Cadastro de Transações**: Adicione receitas e despesas de forma simples e rápida
- **Categorização**: Organize suas transações por categorias personalizadas
- **Listagem Completa**: Visualize todas as suas transações em uma lista organizada
- **Busca**: Encontre transações específicas através da barra de pesquisa

### 📈 Análise e Visualização

- **Gráficos Dinâmicos**: Visualize seus gastos por categoria através de gráficos interativos
- **Cálculo Automático**: O orçamento diário é recalculado automaticamente a cada nova transação
- **Controle de Saldo**: Acompanhe em tempo real o impacto das transações no seu saldo

### 👤 Gestão de Usuário

- **Cadastro Inicial**: Crie seu perfil informando nome e renda mensal
- **Cálculo Automático de Orçamento**: O orçamento diário é calculado automaticamente (renda / 30 dias)

## ✔️ Técnicas e tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- `TypeScript` - Linguagem que adiciona tipagem estática ao JavaScript.
- `React.js` - Biblioteca para construção de interfaces dinâmicas.
- `Vite` - Ferramenta de construção rápida para desenvolvimento com JavaScript moderno.
- `Styled-components` - Para estilização de componentes com CSS-in-JS.
- `Context API` - Gerenciamento de estado de forma reativa.
- `React Router` - Para navegação entre páginas da aplicação.
- `Recharts` - Para criação e visualização de gráficos.
- `Axios` - Cliente HTTP para realizar requisições à API.
- `JSON Server` - Servidor REST mockado para desenvolvimento e testes.
- `Figma` - Para prototipagem e design visual do projeto.

E outras dependências e ferramentas auxiliares.

## 📁 Estrutura do projeto

O projeto está organizado da seguinte forma:

```
src/
├── api/              # Configuração e funções da API
├── assets/           # Imagens e recursos estáticos
├── componentes/      # Componentes reutilizáveis da aplicação
│   ├── BalancoFinanceiro/
│   ├── BarraLateral/
│   ├── BarraPesquisa/
│   ├── Botao/
│   ├── CampoTexto/
│   ├── Cartao/
│   ├── Fieldset/
│   ├── Form/
│   ├── Icones/
│   ├── Label/
│   ├── Modal/
│   ├── OrcamentoDiario/
│   ├── SaudacaoUsuario/
│   ├── Select/
│   ├── Transacao/
│   └── Transacoes/
├── context/          # Context API para gerenciamento de estado global
├── GlobalStyle/      # Estilos globais da aplicação
├── hooks/            # Hooks customizados
│   └── useGastosPorCategoria.tsx
├── screens/          # Páginas/telas da aplicação
│   ├── Cadastro/
│   └── Home/
├── types/            # Definições de tipos TypeScript
└── main.tsx          # Ponto de entrada da aplicação
```

## 🏗️ Arquitetura

### Gerenciamento de Estado

O projeto utiliza a **Context API** do React para gerenciar o estado global da aplicação. O `AppContext` fornece:

- **Usuário**: Dados do usuário logado, incluindo nome, renda e orçamento diário
- **Transações**: Lista de todas as transações (receitas e despesas)
- **Funções**: Métodos para criar usuário e transações

### API e Backend Mockado

A aplicação utiliza o **JSON Server** para simular uma API REST. O servidor mockado fornece endpoints para:

- `GET /usuarios` - Lista todos os usuários
- `POST /usuarios` - Cria um novo usuário
- `PATCH /usuarios/:id` - Atualiza um usuário
- `GET /transacoes` - Lista todas as transações
- `POST /transacoes` - Cria uma nova transação

### Hooks Customizados

- **`useGastosPorCategoria`**: Calcula e retorna os gastos agrupados por categoria, facilitando a visualização em gráficos.

### Componentes Principais

- **BalancoFinanceiro**: Exibe o saldo financeiro do usuário
- **OrcamentoDiario**: Mostra o orçamento diário disponível
- **Transacoes**: Lista e gerencia todas as transações
- **BarraPesquisa**: Permite buscar transações
- **Modal**: Componente reutilizável para modais
- **Form**: Formulários para cadastro e criação de transações

### Rotas

- `/` - Página de cadastro de usuário
- `/home` - Página principal com dashboard financeiro

## 🛠️ Abrir e rodar o projeto

Para rodar o projeto em sua máquina local, siga estes passos:

1. Baixe o repositório do projeto para o seu computador.

2. Navegue até a pasta do projeto, extraia os arquivos e abra no seu editor de código favorito.

3. Instale as dependências executando:

   ```bash
   npm install
   ```

4. **Importante:** O projeto utiliza um servidor JSON mockado para simular uma API. Antes de iniciar a aplicação, você precisa iniciar o servidor JSON em um terminal separado:

   ```bash
   npm run server
   ```

   O servidor estará disponível em http://localhost:5000.

5. Em outro terminal, inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

6. O projeto estará disponível em http://localhost:5173.

### 📋 Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter para verificar erros de código
- `npm run server` - Inicia o servidor JSON mockado na porta 5000

## 🔧 Funcionalidades Técnicas

### Cálculo de Orçamento Diário

O orçamento diário é calculado automaticamente da seguinte forma:

1. **Cálculo Inicial**: Ao criar um usuário, o orçamento diário é definido como `renda / 30`
2. **Atualização Dinâmica**: A cada nova transação, o orçamento é recalculado:
   - O saldo é calculado somando todas as receitas e subtraindo todas as despesas
   - O novo orçamento diário = `(renda / 30) + saldo`

### Tipos de Dados

O projeto utiliza TypeScript com as seguintes interfaces principais:

- **IUsuario**: Representa um usuário com id, nome, renda e orçamento diário
- **ITransacoes**: Representa uma transação com id, userId, nome, valor, tipo (receita/despesa), categoria e data

## 📚 Mais informações do curso

Gostou do projeto e quer conhecer mais?

O design e protótipo deste projeto podem ser encontrados [aqui](https://www.figma.com/community/file/1468989433664551328). Este projeto é fictício e sem fins lucrativos.

Aproveite o desenvolvimento e aprimoramento do PoupApp!
