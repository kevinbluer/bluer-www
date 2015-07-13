$(document).ready(function(){
  
 $('#contact-form').validate({
  rules: {
    name: {
      minlength: 2,
      required: true
    },
    email: {
      required: true,
      email: true
    },
    message: {
      minlength: 2,
      required: true
    }
  },
  highlight: function(element) {
    $(element)
    .closest('.control-group').removeClass('success').addClass('error');
  },
  success: function(element) {
    element
    .text('OK').addClass('valid')
    .closest('.form-group').removeClass('error').addClass('success');
  }
 });
});

$(document).ready(function(){
  
 $('#blog-form').validate({
  rules: {
    name: {
      minlength: 2,
      required: true
    },
    email: {
      required: true,
      email: true
    },
    message: {
      minlength: 2,
      required: true
    }
  },
  highlight: function(element) {
    $(element)
    .closest('.control-group').removeClass('success').addClass('error');
  },
  success: function(element) {
    element
    .text('OK').addClass('valid')
    .closest('.form-group').removeClass('error').addClass('success');
  }
 });
});