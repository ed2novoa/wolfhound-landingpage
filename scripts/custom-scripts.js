
/****** SMOOTH SCROLL *****/

var scroll = new SmoothScroll('a[href*="#"]', {easing: 'easeInOutCubic', offset: 65});

/****** FORM SCRIPTS *****/

$("#contactForm").submit(function(b) {
  var a = "";
  if ($("#name").val() == "") {
    a += "Favor ingrese un Nombre.<br>"
  }
  if ($("#email").val() == "") {
    a += "Favor ingrese su Email<br>"
  }
  if ($("#subject").val() == "") {
    a += "Favor ingrese un Asunto.<br>"
  }
  if ($("#content").val() == "") {
    a += "Favor ingrese su mensaje o consulta.<br>"
  }
  if (a != "") {
    $("#resultDiv").html('<div class="alert alert-danger" role="alert">' + a + "</div>");
    return false
  } else {
    return submitForm()
  }
});
function submitForm() {
  $("#loadingIcon").show();
  $.ajax({
    type: "POST",
    url: "http://novoaweb.com/test/wolfhound/submitForm.php",
    data: $("#contactForm").serialize(),
    success: function(a) {
      setTimeout(c(a), 1000);
      function c(e) {
        if (e == 1) {
          $("#resultDiv").html('<div class="alert alert-success" role="alert">¡Éxito! Muchas gracias.<br>Nos estaremos comunicando con usted dentro de poco.</div>');
        } else {
          $("#resultDiv").html('<div class="alert alert-danger" role="alert"><p><strong>Su mensaje no pudo ser enviado.<br>Por favor inténtelo de nuevo.</div>')
        }
      }
      d.to(b, 0.6, {opacity: 1})
    },
    complete: function() {
      $("#loadingIcon").hide()
    }
  });
  return false
}
