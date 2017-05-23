(function(exports) {
  function testNote() {
    var note = new Note();

    assert.isTrue(note.text === "My favourite language is JavaScript");
  };

  testNote();
})(this);
