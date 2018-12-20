
 $("#emailform").change(function () {
      var emailname = $(this).val();

      $.ajax({
        url: '/ajax/validate_email/',
        data: {
          'emailname': emailname
        },
        dataType: 'json',
        success: function (data) {
          if (data.is_taken) {
            alert("Email Address already exists.");
          }

        }
      });

    });



$("a").click(function() {

    link = $(this).attr("href").toString();

    if(link != undefined ){

    res = linkCheck(link);

     if(res){

       $.ajax({
        url: '/api/save_link/',
        dataType: 'json',
        data: { 'link': link},
        success: function(data) {
          console.log("outbound link : "+data.saved)
        },
         error:function(response){

          console.log("ajax error");
        }

      });
     }

   }

  });



//add to cart button click
$(".add-to-cart-btn").click(function() {

    link = $(this).attr("onclick").toString();

    if(link != undefined ){

    link = link.replace("window.open('","").replace("')","");

    res = linkCheck(link);

     if(res){

       $.ajax({
        url: '/api/save_link/',
        dataType: 'json',
        data: { 'link': link},
        success: function(data) {
          console.log("outbound link : "+data.saved)
        },
         error:function(response){
          console.log("ajax error");
        }

      });

     }

   }

  });


function linkCheck(link)
{

  var re = /pricehub/gi
  var http = /http/gi

   //returns true if link is outbound
  return (link.search(re) == -1 && link.search(http) != -1 )

}
