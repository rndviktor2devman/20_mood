$(document).ready(function()
  {
      var data = JSON.parse($("#quotes_json").html());
      var randomData = data[Math.floor(Math.random() * data.length)];
      $("h1#phrase").html(randomData.phrase).show();
      $("p#signature").html(randomData.signature).show();
})
