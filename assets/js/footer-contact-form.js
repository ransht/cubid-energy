$(function(){
  $("#contact_footer_form").validate({
    rules: {
      fullName: "required",
      phone: "required",
      email: {
        required: true,
        email: true,
      }
    },
    messages: {
      fullName: "אנא הזן את שמך המלא",
      email: "אנא הכנס כתובת דואר אלקטרוני נכונה",
      phone: "אנא הכנס טלפון חוקי"
    },
    submitHandler: function(form) {
        var formdata  = $(form).serializeArray();
        var data = {};
        $(formdata).each(function(index, obj){
            data[obj.name] = obj.value;
        });
        data['demo'] = true;
        $.ajax({
            url: "https://api.cubid.net/api/v1/Contact",
            type: "POST",
            data: JSON.stringify(data),
            contentType:"application/json; charset=utf-8",
            success: function(){
                $(form).trigger("reset");
                $('.footer-form').append('<div class="alert alert-success mt-3">תודה שפנית אלינו נחזור אליך בקרוב.</div>');
                setTimeout(function() {
                    $('.footer-form .alert').remove();
                }, 2000);
            }
        })
        return false;
    }
  });

  $("#side_contact_footer_form").validate({
    rules: {
      fullName: "required",
      phone: "required",
      email: {
        required: true,
        email: true,
      }
    },
    messages: {
      fullName: "אנא הזן את שמך המלא",
      email: "אנא הכנס כתובת דואר אלקטרוני נכונה",
      phone: "אנא הכנס טלפון חוקי"
    },
    submitHandler: function(form) {
        var formdata  = $(form).serializeArray();
        var data = {};
        $(formdata).each(function(index, obj){
            data[obj.name] = obj.value;
        });
        data['demo'] = true;
        $.ajax({
            url: "https://api.cubid.net/api/v1/Contact",
            type: "POST",
            data: JSON.stringify(data),
            contentType:"application/json; charset=utf-8",
            success: function(){
                $(form).trigger("reset");
                $('.sidebar-form').append('<div class="alert alert-success mt-3">תודה שפנית אלינו נחזור אליך בקרוב.</div>');
                setTimeout(function() {
                    $('.sidebar-form .alert').remove();
                }, 2000);
            }
        })
        return false;
    }
  });
});
