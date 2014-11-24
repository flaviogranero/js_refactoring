describe("CommentListView", function() {
  var $el, comments, view;

  beforeEach(function() {
    $el = $("<ul></ul>");
    comments = {};
    BackboneEvents.mixin(comments);
    view = new CommentListView({el: $el, comments: comments});
  });

  describe("adding a new comment", function() {
    it("appends a new list item", function() {
      comments.trigger("add", "new comment");
      expect($el.find("li:last").html()).toEqual("new comment");
    });
  });
});