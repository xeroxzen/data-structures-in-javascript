 class PriorityQueue {
   constructor() {
     this.items = [];
   }

   enqueue(item, priority) {
     this.items.push({ item, priority });
     this.items.sort((a, b) => a.priority - b.priority);
   }

   dequeue() {
     if (!this.isEmpty()) {
       return this.items.shift().item;
     }
     return null;
   }

   isEmpty() {
     return this.items.length === 0;
   }

   size() {
     return this.items.length;
   }
 }
