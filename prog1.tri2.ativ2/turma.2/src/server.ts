import TodoList, { Item } from './core'
const todolist = new TodoList('todolist.json')

async function requestTest(req: Bun.BunRequest) {
    return Response.json({
        method: req.method,
        time: new Date().toLocaleString('pt-BR'),
        body: await req.body?.text(),
    });
}

const server = Bun.serve({
    port: 3000,
    routes: {
        '/' : () => new Response(Bun.file('./public/index.html')),
        '/api-debugger': (req) => new Response(Bun.file('./public/api-debugger.html')),
        '/test': requestTest,
        '/todo': {
            GET: async () => {
                const items = await todolist.getItems()
                return Response.json(items)
            },
            POST: async (req) => {
                let data

                try {
                    data = await req.body?.json()
                } catch (e) {
                    return new Response('json inválido', { status: 400 })
                }

                if (!data?.title)
                    return new Response('É preciso informar title', { status: 400 })

                try {
                    await todolist.addItem(new Item(data.title))
                } catch (error) {
                    return new Response('Erro ao adicionar item', { status: 500 })
                }

                return new Response('Created', { status: 201 })
            }
        },
        '/todo/:index': {
            GET: () => {
                // @todo: DEVE RETORNAR A INFORMAÇÃO DE UM ITEM ESPECÍFICO
                return new Response('Not Implemented yet!', { status: 501 })
            },
            DELETE: async (req) => {
                const indexStr = req.params.index
                const index = parseInt(indexStr)
                if (isNaN(index))
                    return new Response('index precisa ser um número inteiro', { status: 400 })
                await todolist.removeItem(index)
                return new Response(`Item de indice ${index}, removido com sucesso`)
            }
        }
    },
    fetch(req) {
        return new Response("Not Found", { status: 404 });
    },
});

console.log(`Server running at http://localhost:${server.port}`);
