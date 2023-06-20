$(document).ready(function() {
    $("#searchInp").keyup(function() {
        var search = $(this).val().toLowerCase();
        $(".blogName").each(function() {
            var text = $(this).text().toLowerCase();
            if (text.includes(search)) {
                $(this).parent().parent().parent().show();
            } else {
                $(this).parent().parent().parent().hide();
            }
        });
    });
  });