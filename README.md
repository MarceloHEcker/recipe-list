# Recipe List

Aplicação desenvolvida com Node.js para o teste da Delivery Much, o maior aplicativo de delivery de comida do interior do país. A aplicação dispõe de uma API que retorna uma lista de receitas de acordo com uma lista de ingredientes enviada por parâmetro.

### Detalhes de Implementação

Aplicação desenvolvida utilizando **NodeJS**, **Typescript** e utilizando TDD (Test Driven Development). Quando desenvolvi a aplicação a primeira coisa que pensei foi na estrutura do projeto, depois nos testes e por último nos detalhes técnicos da aplicação. Para a realização dos testes optei pela biblioteca de testes **Jest** já que tenho mais experiência com ela. Para realizar os testes de Integração optei pelo uso do **Supertest**, já que ele funciona muito em parceria com o Jest.

Por se tratar de uma aplicação com uma complexidade simples, optei por não desenvolver com todos os conceitos do **SOLID** e do **DDD**.

Para esse teste forma utilizadas duas APIs externas:

- [Recipe Puppy API](http://www.recipepuppy.com/about/api/) para obter as receitas
- [Giphy API](https://developers.giphy.com/docs/) para obter os gifs relativos às receitas

Para utilizar a Giphy API é necessário criar uma API Key, disponível no [link](https://developers.giphy.com/docs/api#quick-start-guide).

### 1. Executar a aplicação

Para colocar a aplicação desenvolvida em funcionamento você precisará iniciar um container da imagem definida no arquivo Dockerfile.

Você precisará de um arquivo **.env** com a seguinte variável:
GIPHY_KEY=

#### 1.2 Pelo código-fonte

1. Baixe os arquivos ou clone o seguinte repositório:

```
git clone https://github.com/MarceloHEcker/recipe-list
```

2. Instale as dependências

```
npm install
```

ou

```
yarn
```

3. Execute a aplicação

```
npm dev:server
```

ou

```
yarn dev:server
```

4. The application rodará na porta padrão 3333.

```
http://localhost:3333
```

#### 1.3 Pelo Docker

Na pasta do projeto, você deverá rodar o seguinte comando:

```
// Criar imagem
docker build -t recipes-list .

// Roda imagem criada na porta 3333
docker run -p 3333:3333 recipes-list:latest
```

#### 1.4 Acessando a aplicação

A aplicação estará disponível no navegador através da URL:

```
http://localhost:3333/recipes/?i=onion,chicken
```

Você também poderá executar a aplicação no terminal, digitando o seguinte comando:

```
curl http://localhost:3333/recipes/?i=onion,chicken
```

#### 1.5 Rodando os testes

Você poderá rodar os testes da aplicação com o seguinte comando:

```
npm test
```

ou

```
yarn test
```

#### Observações

##### Paginação das APIs externas

Como na descrição do teste não havia detalhes sobre a paginação do projeto, optei por retornar apenas as 10 primeiras receitas da api do Recipe Puppy e um GIF para cada receita.

##### Mensagens de Commit

Desenvolvi a aplicação toda no mesmo dia, por isso acabei não realizando os commits intermediários (depois vi que as mensagens dos commits seriam um dos detalhes de avaliação do teste). Peço desculpas por isso.

Costumo utilizar algumas regras definidas no GitFlow, como a criação de feature-branchs e definição de chamadas para as mensagens de commit, como por exemplo:

- **ADD** adding new feature - caso adicione um novo comportamento ao código antigo ou uma nova funcionalidade
- **FIX** a bug - correção de uma funcionalidade
- **DOC** documentation only - apenas documentação como o readme ou changelog
- **REF** refactoring that doesn't include any changes in features - não corrige nem adiciona comportamento novo. Em geral, alguma melhoria de performance, usabilidade ou só alterações de estruturas de dados.
- **FMT** formatting only (spacing...) - apenas formatação, erros de digitação, quebra de linha, etc.
- **MAK** repository related changes - alterações no .gitignore, pipeline, configurações do apache (ssl.conf), Dockerfile, tslint, etc...
- **TEST** related to test code only - apenas arquivos de teste

A descrição da atividade vem posterior a tag e após a mensagem vem o código da tarefa desenvolvido (como por exemplo, o código da tarefa em um sistema de gerenciamento de projetos como o JIRA). Ex.:

> [FIX] Corrigindo download de documentos [COD-999]

##### Ingredientes sem receitas

Quando a consulta de ingredientes na API Recipe Puppy não retornar resultados, devido aos ingredientes passados por parâmetro, optei por não retornar nenhuma informação no corpo da requisição, em um resultado com o status 204 (NO CONTENT).
