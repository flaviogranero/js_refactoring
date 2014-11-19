// app.js
function addComment(comment, callback) {
  $.ajax({
    url: '/comments',
    type: 'POST',
    dataType: 'json',
    data: { text: comment },
    success: callback
  });
};

$(document).ready(function() {
  $('#comment-form').on('submit', function(e) {
    e.preventDefault();
    var $textarea = $(this).find('textarea');
    addComment($textarea.val(), function(data) {
      $('#comment-list').append('<li>' + data.text + '</li>');
      $textarea.val('');
    });
  });
});