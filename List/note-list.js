(function(exports) {
  function List() {
    this.array = [];
  };

  exports.List = List;
})(this);

List.prototype.add = function(note) {
  this.array.push(note);
}

List.prototype.printlist = function() {
  for (i=0; i < this.array.length; i++){
      if (this.array[i] instanceof Note) {
        console.log(this.array[i].text);
      }
      console.log(this.array[i]);
  }
}

List.prototype.givelist = function() {
  return this.array;
}
