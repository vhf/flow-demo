// @flow
const List = require('./lib/linkedlist')

const myList = new List()

myList.add({
  name: 'first',
  payload: [1, 2, 3]
})

myList.forEach((node) => console.log(JSON.stringify(node)))

const nodes = []
for (const node of myList.nodes()) {
  nodes.push(node)
}
