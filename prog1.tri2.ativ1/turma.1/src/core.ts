/**
 * @todo
 * known issues:
 * - getItems needs to await loadListFromDisk()
 */

// class Item_ { 
//   public title: string
//   constructor(title: string) {
//     this.title = title
//   }
// }

class Item {
  constructor(public title: string) { }
}

class TodoList {
  private items: Item[] = []
  private filePath: string

  constructor(filePath: string) {
    this.filePath = filePath
    this.loadListFromDisk()
  }

  private async saveListToDisk() {
    const file = Bun.file(this.filePath)
    const data = JSON.stringify(this.items)
    await file.write(data)
  }

  private async loadListFromDisk() {
    const file = Bun.file(this.filePath)
    // const text = await file.text()
    // const data = JSON.parse(text)
    const data = await file.json();
    this.items = data.map((v: any) => new Item(v.title))
  }

  /**
   * Função que adiciona um novo item a lista
   */
  async addItem(item: Item) {
    this.items.push(item)
    await this.saveListToDisk()
  }

  /**
   * Remove item da lista por um indice
   */
  async removeItem(index: number) {
    this.items.splice(index, 1)
    await this.saveListToDisk()
  }

  /**
   * Retorna a cópia da lista de itens
   */
  getItems() {
    return Array.from(this.items)
  }
}