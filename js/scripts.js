$(document).ready(function(){
  $("form#luck_survey").submit(function(event){
    event.preventDefault();
    $("#badResponses").show();
    // var lucky = 0;
    $("input:checkbox[name=badLuck]:checked").each(function(){
      // var badLuckSurvey = $(this).val();
      // console.log(badLuckSurvey);
      lucky -= 1;
      console.log(lucky);
      $('#badResponses').append(badLuckSurvey + "<br>");
    });
    $("#goodResponses").show();
    $("input:checkbox[name=goodLuck]:checked").each(function(){
      // var goodLuckSurvey = $(this).val();
      // console.log(goodLuckSurvey);
      lucky += 1;
    //   $('#goodResponses').append(goodLuckSurvey + "<br>");
    // });
    // $('#luck_survey').show();
    // var lucky = 0
    // for (var i = 0; 0 <= i <= 10; i ++) {

    // .forEach(function(responses) {
    //   var badLuck = 0;
    //   var goodLuck = 0;
    //   if (badLuckSurvey) {
    //     lucky = lucky -1;
    //   }
    //   else {
    //     lucky += 1;
    //   }
    var lucky = 0;
    });
  });
  console.log(lucky);
});


$(document).ready(function() {
  $("form#luck_survey").submit(function(event) {
    event.preventDefault();
    var badLuckVal = $("input:checkbox[name=badLuck]:checked").val();
    console.log(badLuckVal);
    var goodLuckVal = $("input:checkbox[name=goodLuck]:checked").val();

    var lucky = 0;
    newArray = [];
    badLuckVal.forEach(function(luck){
      if (luck === true) {
        lucky -= 1;
        newArray.push(luck);
      }
    // goodLuckVal.forEach(function(luck){
    //   if (luck === true) {
    //     lucky += 1;
    //     newArray.push(luck);
    //   }
    // });
    // console.log(newArray);
    var total = (newArray);
    console.log(total);
    // $('#display').text(combine);
    // $("#container2").show();
    // $("#container1").hide();
  })
    event.preventDefault();
  });
});
