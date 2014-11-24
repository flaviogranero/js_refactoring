// app.js
var Comments = function() {};
BackboneEvents.mixin(Comments.prototype);
Comments.prototype.add = function(comment) {
  var _this = this;
  $.ajax({
    url: '/comments',
    type: 'POST',
    dataType: 'json',
    data: { text: comment },
    success: function(data){ _this.trigger('add', data.text);}
  });
};

var CommentFormView = function(options) {
  this.$el = options.el;
  this.$textarea = this.$el.find('textarea');
  this.comments = options.comments;
  this.comments.on('add', this.clearInput, this);
  this.$el.on("submit", $.proxy(this.addComment, this));
};
CommentFormView.prototype.addComment = function(e) {
  e.preventDefault();
  this.comments.add(this.$textarea.val());
};
CommentFormView.prototype.clearInput = function() {
  this.$textarea.val('');
};

var CommentListView = function(options) {
  this.$el = options.el;
  this.comments = options.comments;
  this.comments.on('add', this.appendComment, this);
};
CommentListView.prototype.appendComment = function(text) {
  this.$el.append('<li>' + text + '</li>');
};

$(document).ready(function() {
  var comments = new Comments();
  new CommentFormView({ el: $('#comment-form'), comments: comments });
  new CommentListView({ el: $('#comment-list'), comments: comments });
});