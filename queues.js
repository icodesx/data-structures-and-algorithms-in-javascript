// Queues

function Queue() {

    // This collection will hold the queue
    var collection = [];
    
    // Print the entire queue
    this.print = function() {
        console.log(collection);
    }

    // Put a new value onto the queue that will be placed at the end
    this.enqueue = function(element) {
        collection.push(element);
    }

    // Removes the first element of the queue
    this.dequeue = function() {
        return collection.shift();
    }

    // Return the first element in the queue
    this.front = function() {
        return collection[0];
    }

    // Return the size of the queue
    this.size = function() {
        return collection.length;
    }

    // Check if the collection is empty
    this.isEmpty = function() {
        return (collection.length === 0);
    }

}

// Priority queue

function PriorityQueue() {

    // The collection will hold the priority queue values
    var collection = [];

    // Print the entire collection
    this.printCollection = function() {
        console.log(collection);
    }

    // Add a new item based on the priority that we gave it
    this.enqueue = function(element) {
        if(this.isEmpty()) {
            collection.push(element);
        }else {
            var added = false;
            for(var i = 0; i < collection.length; i++) {
                if(element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added) {
                collection.push(element);
            }
        }
    }

    // Remove the first value from the queue
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    }

    // Return the first element of the queue
    this.front = function() {
        return collection[0];
    }

    // Return the size of the queue
    this.size = function() {
        return collection.length;
    }

    // Check if there are no items in the queue
    this.isEmpty = function() {
        return (collection.length === 0);
    }

}