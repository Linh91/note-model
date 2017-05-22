var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

(function(exports) {
  function testList() {
    var list = new List();
    assert.isTrue(list.array.constructor === Array);
  };

  testList();
})(this);
