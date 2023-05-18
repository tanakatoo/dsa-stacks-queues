/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    if (this.first) {
      let newNode = new Node(val)
      newNode.next = this.first
      this.first = newNode

    } else {
      //this is empty
      this.first = new Node(val)
      this.last = this.first
    }
    this.size++
    return undefined
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.first) {
      const toReturn = this.first.val
      this.first = this.first.next
      this.size--
      return toReturn
    } else {
      throw new Error
    }

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first ? this.first.val : undefined
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !this.first ? true : false
  }
}

module.exports = Stack;
