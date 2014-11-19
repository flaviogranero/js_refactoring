// app.js
var Comments = function() {};
Comments.prototype.add = function(comment, callback) {
  $.ajax({
    url: '/comments',
    type: 'POST',
    dataType: 'json',
    data: { text: comment },
    success: callback
  });
};

$(document).ready(function() {
  var comments = new Comments();
  $('#comment-form').on('submit', function(e) {
    e.preventDefault();
    var $textarea = $(this).find('textarea');
    comments.add($textarea.val(), function(data) {
      $('#comment-list').append('<li>' + data.text + '</li>');
      $textarea.val('');
    });
  });
});