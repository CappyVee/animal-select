$(document).ready(function(){
  $("select#animals").change(function() {
    var select = parseInt($(this).val());
    if (select === 2) {
      $("#bear").hide();
      $("#muskox").hide();
      $("#kraken").show();
    } else if (select === 3) {
      $("#kraken").hide();
      $("#muskox").hide();
      $("#bear").show();
    } else if (select === 4) {
      $("#kraken").hide();
      $("#bear").hide();
      $("#muskox").show();
    }
  });

});//doc ready end
