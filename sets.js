// In sets we cannot have duplicated items, and are also in no particular order

function mySet() {

    // This array will hold the set
    var collection = [];

    // Check if an element is within the collection, and return true or false
    this.has = function(element) {
        // If it returns -1, the element is NOT in the collection
        return (collection.indexOf(element) !== -1);
    }

    // Returns the entire set
    this.values = function() {
        return collection;
    }

    // Add an element to the set
    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }

    // Remove an element from the collection
    this.remove = function(element) {
        if(this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    // Return the size of the set
    this.size = function() {
        return collection.length;
    }

    // Return the union of 2 sets
    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();

        firstSet.forEach(function(e) {
            unionSet.add(e);
        });

        secondSet.forEach(function(e) {
            unionSet.add(e)
        });
        return unionSet;
    }

    // Return the intersection of 2 sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if(otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    // Return the difference between 2 sets as a new set
    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if(!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    // Check if the set is a subset of the other set
    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(e) {
            return otherSet.has(e);
        });
    }

}