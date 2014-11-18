// app.js
$(document).ready(function() {
  $('#comment-form').on('submit', function(e) {
    e.preventDefault();
    var $this = $(this);
    $.ajax({
      url: '/comments',
      type: 'POST',
      dataType: 'json',
      data: { text: $this.find('textarea').val() },
      success: function(data) {
        $('#comment-list').append('<li>' + data.text + '</li>');
        $this.find('textarea').val('');
      }
    });
  });
});