var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

(function(exports) {
  function testNote() {
    var note = new Note();

    assert.isTrue(note.text === "My favourite language is JavaScript");
  };

  testNote();
})(this);
