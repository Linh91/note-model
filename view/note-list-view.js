(function(exports) {
  function ViewList(noteList) {
    this.noteList = noteList;
  };
  exports.ViewList = ViewList;
})(this);

ViewList.prototype.view = function() {
  var html = "";
  for (var i =0; i < this.noteList.array.length; i++) {
        html += "<ul><li><div>" + this.noteList.array[i]+ "</ul></li></div>";
        console.log(html.toString);
      };
};

list = new List();
list.add("n1");
list.add("n2");
list.add("n3");
vl = new ViewList();
vl.noteList = list;
