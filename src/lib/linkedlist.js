// @flow
/*::
type NodeData = {
  name: string,
  payload: Array<number>
}
type EqFn = (a: any, b: any) => boolean
*/

const defaultEqFn/*: EqFn*/ = (a, b) => a === b

class Node {
  /*::
  prev: Node
  next: Node
  data: NodeData
  */

  constructor (data/*: NodeData*/) {
    this.data = data
  }
}

class List {
  /*::
  head: Node
  tail: Node
  size: number
  */

  constructor () {
    this.size = 0
  }

  addNode (node/*: Node*/)/*: void*/ {
    if (!this.head) {
      this.head = this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }

    this.size++
  }

  add (obj/*: NodeData*/)/*: Node*/ {
    const node = new Node(obj)
    this.addNode(node)
    return node
  }

  findNode (obj/*: NodeData*/, eqFn/*: EqFn*/ = defaultEqFn)/*: ?Node*/ {
    for (const node of this.nodes()) {
      if (eqFn(node.data, obj)) {
        return node
      }
    }
  }

  has (obj/*: NodeData*/, eqFn/*: EqFn*/ = defaultEqFn)/*: boolean*/ {
    return !!this.findNode(obj, eqFn)
  }

  remove (obj/*: NodeData*/, eqFn/*: EqFn*/ = defaultEqFn)/*: void*/ {
    this.removeNode(this.findNode(obj, eqFn))
  }

  removeNode (node/*: ?Node*/)/*: void*/ {
    if (!node) {
      return
    }

    if (!node.prev) {
      this.head = node.next
    } else {
      node.prev.next = node.next
    }

    if (!node.next) {
      this.tail = node.prev
    } else {
      node.next.prev = node.prev
    }

    this.size--
  }

  isEmpty ()/*: boolean*/ {
    return this.size === 0
  }

  forEach (callback/*: (NodeData) => any*/, reversed/*: boolean*/ = false)/*: void*/ {
    for (const node of this.nodes(reversed)) {
      if (callback(node.data) === false) {
        break
      }
    }
  }

  *nodes (reversed/*: boolean*/ = false)/*: Iterable<Node>*/ {
    let node = reversed ? this.tail : this.head
    while (node) {
      yield node
      node = reversed ? node.prev : node.next
    }
  }
}

module.exports = List
