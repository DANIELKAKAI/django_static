
(function ($) {


    $("#start").change(function(){
      var start = $(this).val();
      var end = $("#end").val();

      if(start!="" && end ==""){
        $("#end").val(start);
      }
       
    });

    $("#end").change(function(){
      var start = $("#start").val();
      var end = $(this).val();

      if(start=="" && end !=""){
        $("#start").val(end);
      }
       
    });
    
    $("#check-btn").click(function(){
    	var start = $("#start").val();
    	var end = $("#end").val();

      if(end=="" && start==""){
          alert("Enter Start date and End date");
      }

    	$.ajax({
        url: "/data/date-api/range/",
        data: {
          'start': start,
          'end':end
        },
        dataType: 'json',
        success: function (data) {
          console.log("success");
          $("tbody").html(data.result)

        },
        error:function(err){
          console.log("error")
        }
      });
    });


    $("#month-btn").click(function(){

      $.ajax({
        url: "/data/date-api/month/",
        data: {'data':false},
        dataType: 'json',
        success: function (data) {
          console.log("success");
          $("tbody").html(data.result)

        },
        error:function(err){
          console.log("error")
        }
      });
    });

    $("#week-btn").click(function(){

      $.ajax({
        url: "/data/date-api/week/",
        data: {'data':false},
        dataType: 'json',
        success: function (data) {
          console.log("success");
          $("tbody").html(data.result)

        },
        error:function(err){
          console.log("error")
        }
      });
    });

        
    

})(jQuery);