
/****** SMOOTH SCROLL *****/

var scroll = new SmoothScroll('a[href*="#"]', {easing: 'easeInOutCubic', offset: 65});

/****** FORM SCRIPTS *****/

$("#contactForm").submit(function(e) {
  var message = "";
  if ($("#name").val() == "") {
    message += "Favor ingrese un Nombre.<br>"
  }
  if ($("#email").val() == "") {
    message += "Favor ingrese su Email<br>"
  }
  if ($("#subject").val() == "") {
    message += "Favor ingrese un Asunto.<br>"
  }
  if ($("#content").val() == "") {
    message += "Favor ingrese su mensaje o consulta.<br>"
  }
  if (message != "") {
    $("#resultDiv").html('<div class="alert alert-danger" role="alert">' + a + "</div>");
    return false
  } else {
    return submitForm()
  }
});
function submitForm() {
  if (!($("#resultDiv").hasClass("opacity-0"))) {
    $("#resultDiv").addClass("opacity-0")
  }
  $("#loadingIcon").show();
  $.ajax({
    type: "POST",
    url: "http://novoaweb.com/test/wolfhound/submitForm.php",
    data: $("#contactForm").serialize(),
    success: function(r) {
      setTimeout(showResponse(r), 1000);
      function showResponse(e) {
        $("#resultDiv").removeClass("opacity-0")
        if (e == 1) {
          $("#resultDiv").html('<div class="alert alert-success" role="alert">¡Éxito! Muchas gracias.<br>Nos estaremos comunicando con usted dentro de poco.</div>');
        } else {
          $("#resultDiv").html('<div class="alert alert-danger" role="alert"><p><strong>Su mensaje no pudo ser enviado.<br>Por favor inténtelo de nuevo o contáctenos a nuestro correo electrónico.</div>')
        }
      }
    },
    complete: function() {
      $("#loadingIcon").hide()
    }
  });
  return false
}
