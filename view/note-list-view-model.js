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
