"use strict";
$(document).ready(function () {
  $("#articlesList").delegate("a", "click", function (event) {
    event.preventDefault();
    const articleDiv = $("article").clone();
    $("#articlesList").append(articleDiv[0]);
  });
});
