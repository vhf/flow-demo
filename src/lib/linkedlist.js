const defaultEqFn = (a, b) => a === b

class Node {
  constructor (data) {
    this.data = data
  }
}

class List {

  constructor () {
    this.size = 0
  }

  addNode (node) {
    if (!this.head) {
      this.head = this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }

    this.size++
  }

  add (obj) {
    const node = new Node(obj)
    this.addNode(node)
    return node
  }

  findNode (obj, eqFn = defaultEqFn) {
    for (const node of this.nodes()) {
      if (eqFn(node.data, obj)) {
        return node
      }
    }
  }

  has (obj: NodeData, eqFn = defaultEqFn) {
    return !!this.findNode(obj, eqFn)
  }

  forEach (callback, reversed = false) {
    for (const node of this.nodes(reversed)) {
      if (callback(node.data) === false) {
        break
      }
    }
  }

  *nodes (reversed = false) {
    let node = reversed ? this.tail : this.head
    while (node) {
      yield node
      node = reversed ? node.prev : node.next
    }
  }
}

module.exports = List
