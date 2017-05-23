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
