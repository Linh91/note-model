(function(exports) {
  function testList() {
    var list = new List();
    assert.isTrue(list.array.constructor === Array);
  };

  testList();
})(this);

(function(exports) {
  function testAdd() {
    var list = new List();
    list.add("TEXT");
    assert.isTrue(list.array[0] === "TEXT");
  };

  testAdd();
})(this);

(function(exports) {
  function testPrintlist() {
    var list = new List();
    list.add("TEXT");
    assert.isTrue(list.array.includes ("TEXT"));
  };

  testPrintlist();
})(this);
