/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    if (this.first) {
      let newNode = new Node(val)
      this.last.next = newNode
      this.last = newNode
      this.size++

    } else {
      this.first = new Node(val)
      this.last = this.first
      this.size++
    }
    return undefined
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size == 0) {
      throw new Error
    } else {

      const toReturn = this.first.val
      this.first = this.first.next
      this.size--
      console.log('size is now', this.size)
      return toReturn
    }

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {

    return this.first ? this.first.val : undefined
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return !this.first ? true : false
  }
}

module.exports = Queue;
