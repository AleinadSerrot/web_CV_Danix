$(document).ready(function() {
    
    // 1. cambio de tema claro/oscuro
    $('#btn-tema').click(function() {
        $('body').toggleClass('dark-mode');
        
        // lógica para cambiar el texto del botón
        if ($('body').hasClass('dark-mode')) {
            $(this).text('tema claro');
            // cambiar estilos del botón via css classes de bootstrap o manual
            $(this).removeClass('btn-outline-dark').addClass('btn-outline-light');
        } else {
            $(this).text('tema oscuro');
            $(this).removeClass('btn-outline-light').addClass('btn-outline-dark');
        }
    });

    // 2. validación de formulario en tiempo real
    $('#email').on('input', function() {
        let valorEmail = $(this).val();
        
    // si tiene @ y punto, es válido (validación básica)
        if (valorEmail.includes('@') && valorEmail.includes('.')) {
            $(this).addClass('is-valid').removeClass('is-invalid');
        } else {
            $(this).addClass('is-invalid').removeClass('is-valid');
        }
    });

    // prevenir envío real del formulario
    $('#formulario-contacto').submit(function(evento) {
        evento.preventDefault();
        alert('Mensaje enviado✨');
        this.reset();
        $('#email').removeClass('is-valid');
    });

   
    // 3. animación al hacer scroll 
    $(window).scroll(function() {
        let posicionTop = $(window).scrollTop();
        let alturaVentana = $(window).height();

        $('.seccion-animada').each(function() {
            let distanciaElemento = $(this).offset().top;
            
            // si el elemento entra en pantalla
            if (posicionTop + alturaVentana - 150 > distanciaElemento) {
                $(this).addClass('visible');
            }
        });
    });

    // disparar scroll al inicio para mostrar elementos visibles
    $(window).trigger('scroll');
});