(function(exports) {
  function NoteController(list) {
    this.list = list;
    this.addSeltzer();
    this.addSeltzer();
    this.view = new ViewList(this.list);
    var html = this.view.view();
    document.getElementById("app").innerHTML = html;
  };

  NoteController.prototype.addSeltzer = function () {
    this.list.array.push("Favourite drink: seltzer");
  };

  exports.NoteController = NoteController;
})(this);
