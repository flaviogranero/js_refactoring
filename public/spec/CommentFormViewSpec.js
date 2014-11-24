describe("CommentFormView", function() {
  var $el, comments, view;

  beforeEach(function() {
    $el = $("<form><textarea>My Comment</textarea></form>");
    comments = {add: jasmine.createSpy("add")};
    BackboneEvents.mixin(comments);
    view = new CommentFormView({el: $el, comments: comments});
  });

  describe("submitting the form", function() {
    it("creates a comment", function() {
      $el.trigger("submit");
      expect(comments.add).toHaveBeenCalledWith("My Comment");
    });
  });

  describe("adding a new comment", function() {
    it("clears the input", function() {
      comments.trigger("add");
      expect($el.find("textarea").val()).toEqual("");
    });
  });
});