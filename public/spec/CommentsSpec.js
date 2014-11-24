describe("Comments", function() {
  var comments, addComment;

  beforeEach(function() {
    spyOn($, "ajax").and.callFake(function(options) {
      options.success({text: options.data.text});
    });
    
    comments = new Comments();
    addComment = jasmine.createSpy();
    comments.on("add", addComment);
  });

  describe("adding a new comment", function() {
    it("triggers the add event", function() {
      comments.add("new comment");
      expect(addComment).toHaveBeenCalledWith("new comment");
    });
  });
});