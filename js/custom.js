// next prev
var divs = $(".show-section section");
var now = 0; // currently shown div
divs.hide().first().show(); // hide all divs except first

const nombre = $("#nombre");
const correo = $("#correo");
const estados = $("#estados");
const terminos = $("#terminos");

$(document).on('keydown', function(event) {
  // Check if the pressed key is Enter (keyCode 13)
  if (event.keyCode === 13) {
    // Prevent the default behavior of Enter key press
    event.preventDefault();
    
    // Optionally, replace this with your desired behavior
    console.log("Enter key pressed!");
  }
});

function next() {
  divs.eq(now).hide();
  now = now + 1 < divs.length ? now + 1 : 0;
  divs.eq(now).show(); // show next
  console.log(now);
}

// $(".radioField2").click(function () {
//   $(".radioField2").removeClass("checked");
//   $(".radioField2 input").attr("checked", false);
//   $(this).addClass("checked");
//   $(this).children("input").attr("checked", true);
// });

// quiz validation
// var checkedradio = false;

// function radiovalidate(stepnumber) {
//   var checkradio = $("#step" + stepnumber + " input")
//     .map(function () {
//       if ($(this).is(":checked")) {
//         return true;
//       } else {
//         return false;
//       }
//     })
//     .get();

//   checkedradio = checkradio.some(Boolean);
// }

function obtenerValorCookie(nombreCookie) {
  // Buscar la cookie por nombre
  let cookie = document.cookie.match(new RegExp(`(^| )${nombreCookie}=([^;]+)`));

  // Si la cookie existe, retornar su valor
  if (cookie) {
    return decodeURIComponent(cookie[2]);
  }

  // Si la cookie no existe, retornar null
  return null;
}

const emailInput = document.getElementById("correo");
const submitButton = document.getElementById("step0btn");
// Obtener referencia al campo "select" y al botón
const estadosSelect = document.getElementById("estados");


const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

// check step0
$("#step0btn").on("click", function (e) {

  const longitud = nombre.val().length;
  const longitudCorreo = correo.val().length;
  const selectedIndex = estadosSelect.selectedIndex;

  // const correokey = $("#correo");

  // const regexCorreo2 = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  //   const validoCorreo2 = regexCorreo2.test(correokey);

// Regular expression for validating email format
const email = emailInput.value.trim(); // Get the email value and trim whitespace


  const nombreUsuario = obtenerValorCookie("nombreUsuario");
  var valoruser = document.getElementById("correo").value;

  // var nombreUsuario2 = document.getElementById("correo").value;

  const fechaExpiracion = new Date();
fechaExpiracion.setDate(fechaExpiracion.getDate() + 30); // Agregar 30 días a la fecha actual
const cookieExpiracion = fechaExpiracion.toUTCString();

  // Establece la cookie con el nombre del usuario
  document.cookie = `nombreUsuario=${valoruser}; expires=${cookieExpiracion}`;



  if (nombreUsuario && nombreUsuario === valoruser) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 100);
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">El usuario ya existe</div>'
      )
    );
  } 

   else if (nombre.val() === "" || correo.val() === "") {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 100);
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">Debes llenar todos los campos</div>'
      )
    );
  } else if (longitud > 70 || longitud <= 3) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 100);
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">El nombre no cumple la longitud mínima</div>'
      )
    );
  } else if (longitudCorreo > 30 || longitudCorreo <= 6) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 100);
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">El correo no cumple con la longitud mínima</div>'
      )
    );
  }

  else if (!emailRegex.test(email)){
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 100);
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">El correo no cumple con el formato</div>'
      )
    );
  }

  else if (selectedIndex == 0) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 100);
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">Debes seleccionar un estado</div>'
      )
    );
  }


  
 else if (!terminos.is(":checked")) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 100);
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">Debes aceptar terminos y condiciones</div>'
      )
    );
  } else {

    $('.show-section').submit(function() {
      console.log("Se envio el formulario")
      TikTokPixel.track('FormPalnorte2024');
    });

    $(".surveyForm").addClass("d-none");
    $(".loading").addClass("d-grid");
    setTimeout(function () {
      $(".loading").removeClass("d-grid");
      $(".loading").addClass("d-none");
      $(".thankyou").addClass("d-grid");
    }, 2000);

    $("#sub").html("done");
    // $(this).unbind('submit').submit();
  }



  
  // else {
  //   next();
  // }
});

// check step1
// $("#step1btn").on("click", function () {
//   radiovalidate(1);

//   if (checkedradio == false) {
//     (function (el) {
//       setTimeout(function () {
//         el.children().remove(".reveal");
//       }, 3000);
//     })(
//       $("#error").append(
//         '<div class="reveal alert alert-danger">Escoge una opción</div>'
//       )
//     );

//     radiovalidate(1);
//   } else {
//     next();
//   }
// });

// check step2
// $("#step2btn").on("click", function () {
//   radiovalidate(2);

//   if (checkedradio == false) {
//     (function (el) {
//       setTimeout(function () {
//         el.children().remove(".reveal");
//       }, 3000);
//     })(
//       $("#error").append(
//         '<div class="reveal alert alert-danger">Escoge una opción</div>'
//       )
//     );

//     radiovalidate(2);
//   } else {
//     next();
//   }
// });

// check step3
// $("#step3btn").on("click", function () {
//   radiovalidate(3);

//   if (checkedradio == false) {
//     (function (el) {
//       setTimeout(function () {
//         el.children().remove(".reveal");
//       }, 3000);
//     })(
//       $("#error").append(
//         '<div class="reveal alert alert-danger">Escoge una opción</div>'
//       )
//     );

//     radiovalidate(3);
//   } else {
//     next();
//   }
// });

// check step4
// $("#step4btn").on("click", function () {
//   radiovalidate(4);

//   if (checkedradio == false) {
//     (function (el) {
//       setTimeout(function () {
//         el.children().remove(".reveal");
//       }, 3000);
//     })(
//       $("#error").append(
//         '<div class="reveal alert alert-danger">Escoge una opción</div>'
//       )
//     );

//     radiovalidate(4);
//   } else {
//     next();
//   }
// });

// check last step
$("#sub").on("click", function (e) {
  // var condicionesCumplidas = false;
  // const longitudComent = comentarios.val().length;
  // e.preventDefault();

  var nombreUsuario2 = document.getElementById("correo").value;

  const fechaExpiracion = new Date();
  fechaExpiracion.setDate(fechaExpiracion.getDate() + 30); // Agregar 30 días a la fecha actual
  const cookieExpiracion = fechaExpiracion.toUTCString();

  // Establece la cookie con el nombre del usuario
  document.cookie = `nombreUsuario=${nombreUsuario2}; expires=${cookieExpiracion}`;

  // if (comentarios.val() === "") {
  //   e.preventDefault();
  //   (function (el) {
  //     setTimeout(function () {
  //       el.children().remove(".reveal");
  //     }, 3000);
  //   })(
  //     $("#error").append(
  //       '<div class="reveal alert alert-danger">Cuéntanos tu historia</div>'
  //     )
  //   );
  // } 
  // else if (longitudComent > 500 || longitudComent <= 50) {
  //   e.preventDefault();
  //   $("html, body").animate({
  //     scrollTop: 0
  //   }, 100);
  //   (function (el) {
  //     setTimeout(function () {
  //       el.children().remove(".reveal");
  //     }, 3000);
  //   })(
  //     $("#error").append(
  //       '<div class="reveal alert alert-danger">Debes cumplir al menos 50 caracteres</div>'
  //     )
  //   );
  // }
  
  if (!terminos.is(":checked")) {
    e.preventDefault();
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">Debes aceptar el aviso de privacidad</div>'
      )
    );
  } else {

    $('.show-section').submit(function() {
      console.log("Se envio el formulario")
      TikTokPixel.track('FormPalnorte2024');
    });

    $(".surveyForm").addClass("d-none");
    $(".loading").addClass("d-grid");
    setTimeout(function () {
      $(".loading").removeClass("d-grid");
      $(".loading").addClass("d-none");
      $(".thankyou").addClass("d-grid");
    }, 2000);

    $("#sub").html("done");
    // $(this).unbind('submit').submit();
  }
});

// EVITAR ESCIBIR si no es texto válido

$(document).ready(function () {
  // Selecciona el campo de texto
  const nombrekey = $("#nombre");
  const correokey = $("#correo");
  // const comentarioskey = $("#comentarios");

  // Función para evitar que se escriban más de 100 caracteres
  function limitarCaracteres() {
    // Obtiene la longitud del valor del campo de texto
    const longkey = nombrekey.val().length;
    const longkeyinsta = correokey.val().length;
    // const longkeycomentarios = comentarioskey.val().length;

    // Si la longkey es mayor a 100, elimina los caracteres sobrantes
    if (longkey > 70) {
      nombrekey.val(nombrekey.val().substring(0, 70));
    }
    if (longkeyinsta > 30) {
      correokey.val(correokey.val().substring(0, 30));
    }
    // if (longkeycomentarios > 500){
    //   comentarioskey.val(comentarioskey.val().substring(0,500));
    // }


    //  VALIDACIÓN SOLO LETRAS

    // Obtiene el valor del campo de texto
    const nombreval = nombre.val();
    const correoval = correo.val();

    // Expresión regular para validar letras, incluyendo acentos y la ñ
    const regex = /^[a-záéíóúñA-Z ]+$/i;
    const regexCorreo = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/i;

    // Valida si el nombre cumple con la expresión regular
    const valido = regex.test(nombrekey);
    const validoCorreo = regexCorreo.test(correokey);

    // Si el nombre no es válido, muestra un mensaje de error
    if (!valido) {
      nombrekey.val(nombreval.replace(/[^a-záéíóúñA-Z ]+/g, ""));
    }

    // Si el nombre no es válido, muestra un mensaje de error
    if (!validoCorreo) {
      correokey.val(correoval.replace(/[^a-zA-Z\d_@.]+/g, ""));
    }
  }

  // Limita los caracteres al escribir en el campo de texto
  nombrekey.on("keyup", limitarCaracteres);
  correokey.on("keyup", limitarCaracteres);
  // comentarioskey.on("keyup", limitarCaracteres);
});

//   const regex = /^(?!.*\.{2})^([a-z\d_]{1,30})$/i;
// nombrekey.val(nombreval.replace(/[^a-z\d_]+/g, ''));

$('input[type="checkbox"]').css({
  width: "20px",
  height: "20px",
});


// $(document).ready(function() {
//   const limiteCaracteres = 500; // Límite de caracteres
//   const caracteresEscritos = $('#caracteres-escritos');
//   const textarea = $('textarea');  Selecciona el textarea en el que se escribe

//    Actualizar el contador al escribir
//   textarea.on('keyup keydown change paste', function() {
//     const longitudActual = $(this).val().length;
//     caracteresEscritos.text(longitudActual + '/' + limiteCaracteres);
//   });

//    Mostrar el valor inicial del contador
//   textarea.trigger('keyup');  Simular un evento 'keyup' para actualizar el contador

// });