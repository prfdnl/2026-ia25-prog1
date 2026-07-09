# Atividade de Recuperação - Trimestre 1

## Disciplina: Programação II

# Sistema Web de Confirmação de Participação em Evento

Desenvolva uma aplicação web de página única (Single Page Application) para confirmação de participação em um evento.

A aplicação deverá possuir:

* front-end em HTML, CSS e JavaScript;
* back-end responsável pela leitura e gravação dos dados;
* armazenamento utilizando exclusivamente um arquivo JSON.

# Funcionamento esperado

O sistema será utilizado por convidados de um evento.

Ao acessar a página, o usuário deverá:

1. pesquisar seu nome na lista de convidados;
2. selecionar seu nome;
3. informar:

   * se irá participar do evento;
   * quantidade de acompanhantes;
4. salvar sua confirmação.

O usuário não poderá cadastrar novos nomes.

Todos os convidados já devem existir previamente no arquivo JSON.

# Requisitos obrigatórios

## Front-end

A aplicação deve possuir apenas uma página web.

### Obrigatório

* HTML;
* CSS;
* JavaScript;
* layout organizado;
* uso de `fetch`;
* atualização dinâmica da página sem recarregar;
* validação de entradas.

# Back-end

O sistema deve possuir servidor próprio.

### Obrigatório

* orientação a objetos;
* rotas organizadas;
* leitura e escrita em JSON;
* tratamento de erros;
* separação entre lógica e rotas.

# Armazenamento

Não deve ser utilizado banco de dados.

Todos os dados devem ser armazenados exclusivamente em:

```txt
dados.json
```

---

# Estrutura esperada do JSON

Exemplo:

```json
[
  {
    "nome": "Ana",
    "confirmado": false,
    "acompanhantes": 0
  },
  {
    "nome": "Carlos",
    "confirmado": true,
    "acompanhantes": 2
  }
]
```

# Funcionalidades obrigatórias

## Pesquisa de convidado

O usuário deve conseguir pesquisar seu nome.

A busca deve funcionar parcialmente.

Exemplo:

* pesquisar “car” deve encontrar “Carlos”.

## Confirmação

Após selecionar seu nome, o usuário poderá:

* confirmar presença;
* informar quantidade de acompanhantes.

## Atualização

Ao salvar:

* o arquivo JSON deve ser atualizado;
* os dados devem permanecer salvos após reiniciar o servidor.

## Estatísticas

A página deve exibir automaticamente:

* total de convidados;
* total confirmado;
* total ausente;
* total de acompanhantes.

# Regras obrigatórias

* nomes não podem ser alterados;
* usuários não podem ser cadastrados manualmente pela interface;
* acompanhantes não podem ser negativos;
* o sistema deve impedir confirmação sem selecionar um nome;
* a aplicação não pode recarregar a página inteira durante o uso.

# Requisitos mínimos de código

O projeto deve possuir:

* mínimo de 4 classes;
* orientação a objetos;
* separação entre front-end e back-end;
* uso de arrays e objetos;
* manipulação de arquivo JSON;
* comunicação assíncrona com `fetch`.

# Tecnologias permitidas

Os alunos podem escolher:

* Node.js;
* Python;
* PHP;
* Java.

# Estrutura mínima esperada

```txt
prog2.tri1.rec/
│
├── frontend/
├── backend/
├── dados.json
├── README.md
└── .gitignore
```


# Nome obrigatório do repositório

O repositório deverá se chamar exatamente:

```txt id="gnwtvy"
prog2.tri1.rec
```


# README obrigatório

O `README.md` deve conter:

* descrição do sistema;
* tecnologias utilizadas;
* instruções de execução;
* prints da aplicação;
* explicação da estrutura do projeto.

# Critérios de avaliação

| Critério                 | Pontos |
| ------------------------ | ------ |
| Funcionamento do sistema | 3,0    |
| Manipulação do JSON      | 2,0    |
| Orientação a objetos     | 2,0    |
| Front-end                | 1,5    |
| Organização do código    | 1,0    |
| README                   | 0,5    |

Total: **10,0 pontos**

# Restrições

Não será aceito:

* uso de banco de dados;
* múltiplas páginas HTML;
* cadastro manual de convidados pela interface;
* projetos sem orientação a objetos;
* uso apenas de HTML estático;
* ausência de persistência em JSON.

# Observações finais

Durante a apresentação, os alunos deverão:

* demonstrar o funcionamento completo;
* mostrar o JSON sendo atualizado;
* explicar a estrutura do código;
* explicar a comunicação entre front-end e back-end.
