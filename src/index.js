class Sorter {
  constructor() {
    this.data = [];
    this.defaultComparator = (a, b) => a - b;
    this.comparator = this.defaultComparator;
  }

  add(element) {
    this.data.push(element);
  }

  at(index) {
    return this.data[index];
  }

  get length() {
    return this.data.length;
  }

  toArray() {
    return this.data;
  }

  sort(indices) {
    let toSort = [];
    for (let i = 0; i < indices.length; i++) {
      toSort.push(this.data[indices[i]]);
    }
    let sorted = toSort.sort(this.comparator);
    let sortedIndices = indices.sort(this.defaultComparator);
    for (let i = 0; i < sortedIndices.length; i++) {
      this.data[sortedIndices[i]] = sorted[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction; 
  }
}

module.exports = Sorter;