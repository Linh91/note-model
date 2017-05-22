
(function(exports) {
  function testList() {
    var list = new List();
    assert.isTrue(list.array.constructor === Array);
  };

  testList();
})(this);
