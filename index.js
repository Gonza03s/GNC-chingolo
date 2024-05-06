"use strict";

let boton = document.querySelector('.menu');
let navContainer = document.querySelector('.navbar');
let hero = document.getElementById('inyeccion');
let enlaceAncla = document.querySelectorAll('.links a');

let form = document.getElementById('formulario');

let errorNombre = document.getElementById('errorNombre');
let errorAsunto = document.getElementById('errorAsunto');
let errorEmail = document.getElementById('errorEmail');
let errorMensaje = document.getElementById('errorMensaje');


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById('nombre_usuario').value;
    let asunto = document.getElementById('asunto_usuario').value;
    let email = document.getElementById('email_usuario').value;
    let mensaje = document.getElementById('textarea').value;

    // Validar nombre
    if (nombre.length < 3) 
    {
        errorNombre.innerHTML = 'El nombre debe tener al menos 3 caracteres';
        return;
    } 
    else 
    {
        errorNombre.innerHTML = '';
    }

    // Validar asunto
    if (asunto.length < 3) 
    {
        errorAsunto.innerHTML = 'El asunto debe tener al menos 3 caracteres';
        return;
    }
    else 
    {
        errorAsunto.innerHTML = '';
    }

    // Validar email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) 
    {
        errorEmail.innerHTML = 'Ingrese un email válido';
        return;
    } 
    else 
    {
        errorEmail.innerHTML = '';
    }

    // Validar mensaje
    if (mensaje.length < 4) 
    {
        errorMensaje.innerHTML = 'Ingrese al menos 4 caracteres en el mensaje';
        return;
    }
     else 
     {
        errorMensaje.innerHTML = '';
    }

   

    form.submit(); //envio form
});

boton.addEventListener('click',()=>
{
    navContainer.classList.toggle('show');

    if(navContainer.classList.contains('show'))
    {
        boton.innerHTML = "<i class='bx bx-x'></i>";
        boton.classList.add('transform');
    }
    else
    {
        boton.innerHTML = "<i class='bx bx-menu'></i>";
        boton.classList.remove('transform');
    }
});

enlaceAncla.forEach(enlace=>
    {
        enlace.addEventListener('click',()=>
        {
            navContainer.classList.remove('show')
            boton.innerHTML = "<i class='bx bx-menu'></i>";
            boton.classList.remove('transform');
            
        })
    })


function handleScroll()
{
    let heroBottom = hero.getBoundingClientRect().bottom

    if(window.scrollY > heroBottom)
    {
        navContainer.classList.add('sticky');
    }
    else
    {
        navContainer.classList.remove('sticky');
    }
}

function revealElement(selector, options) {
    ScrollReveal().reveal(selector,
    {
      origin: options.origin,
      distance: options.distance,
      duration: options.duration ,
      reset: false,
      delay: options.delay
    });
  }


revealElement('.inyeccion_img', { origin: 'left', distance: '85px', duration:1500 , delay: 100 });
revealElement('.inyeccion_txt', { origin: 'top', distance: '85px', duration:1500 , delay: 100 });

revealElement('.refrigeracion_txt', { origin: 'top', distance: '85px', duration:1500 , delay: 100 });
revealElement('.img_refrigeracion', { origin: 'right', distance: '85px', duration:1500 , delay: 100 });

revealElement('.refrigeracion_txt', { origin: 'top', distance: '85px', duration:1500 , delay: 100 });


revealElement('.galery_container', { origin: 'top', distance: '85px', duration:1500 , delay: 100 });
revealElement('.h2_galery', { origin: 'top', distance: '85px', duration:1500 , delay: 100 });


revealElement('.ubicacion_content', { origin: 'top', distance: '85px', duration:1500 , delay: 100 });


revealElement('.about_img', { origin: 'left', distance: '85px', duration:1500 , delay: 100 });
revealElement('.about_txt', { origin: 'top', distance: '85px', duration:1500 , delay: 100 });


revealElement('.title_form', { origin: 'top', distance: '85px', duration:1500 , delay: 100 });
revealElement('.form_container', { origin: 'top', distance: '85px', duration:1500 , delay: 100 });

revealElement('.footer_content', { origin: 'left', distance: '85px', duration:1500 , delay: 100 });




document.addEventListener('DOMContentLoaded', handleScroll);
document.addEventListener('scroll',handleScroll)



