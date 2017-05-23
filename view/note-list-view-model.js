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
      }; return html
};

(function(exports) {
  function testViewList() {
    var list = new List();
    list.add("ListOne");
    var viewList = new ViewList();
    viewList.noteList = list;
    assert.isTrue(viewList.view() == "<ul><li><div>ListOne</ul></li></div>");
  };
  testViewList();
})(this);
