
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
