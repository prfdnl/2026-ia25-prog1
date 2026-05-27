# Trimestre 2, Atividade 1

## Enunciado

Nesta atividade, deve ser desenvolvida uma aplicação simples de lista de tarefas em TypeScript com Bun. O projeto deve ser dividido em dois arquivos principais, cada um com uma responsabilidade diferente:

- `src/core.ts`: deve conter a lógica principal da lista. Nesse arquivo devem estar as classes `Item` e `TodoList`, responsáveis por representar os itens, validar os dados, adicionar e remover tarefas, carregar as informações do arquivo JSON e salvar as alterações em disco.
- `src/cli.ts`: deve conter a interface de linha de comando. Esse arquivo deve interpretar os argumentos recebidos no terminal e chamar os métodos da classe `TodoList` para executar ações como adicionar, listar e remover itens.

## Objetivo

O objetivo desta atividade é compreender como separar a lógica de negócio da interface de uso, além de praticar:

- criação de classes e módulos em TypeScript;
- uso de métodos assíncronos para leitura e gravação de arquivos;
- validação de dados antes de salvar informações;
- construção de uma pequena aplicação executada pelo terminal.

### O que se espera

Ao final, o programa deve permitir que o usuário interaja com a lista de tarefas pelo terminal, mantendo os itens salvos em um arquivo JSON. A estrutura deve permanecer organizada para que a lógica fique no `core.ts` e os comandos de terminal fiquem no `cli.ts`.

### Tarefa

Deve ser implementada ou completada a aplicação para que ela funcione corretamente como uma lista de tarefas persistente. Deve ser garantido que:

- os itens devem ser carregados do arquivo ao iniciar o programa;
- novos itens devem poder ser adicionados com validação;
- itens devem poder ser removidos pelo índice;
- a lista deve poder ser consultada a qualquer momento;
- as alterações devem ficar salvas no arquivo `todolist.json`.

### Comandos esperados

- `add <item>`: deve adicionar um novo item à lista.
- `remove <index>`: deve remover um item da lista pelo índice.
- `list`: deve exibir os itens atuais.

### Observação

O foco não deve ser apenas fazer o programa rodar, mas organizar o código de modo que a lógica da lista fique desacoplada da interface de terminal.


## Ponto para avaliação

Para demonstração do conhecimento adiquirido, deve ser adicionado um novo comando `update <index> <new item>` que permita atualizar o texto de um item existente na lista. O comando deve validar o índice e o novo texto antes de realizar a atualização, garantindo que a estrutura do código continue organizada e que a lógica de negócio permaneça no `core.ts`.

