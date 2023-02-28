  // Pantalla de carga
  window.onload = function(){

    var pantalla = document.getElementById("pantalla_carga");
   
    pantalla.style.visibility = 'hidden';
    pantalla.style.opacity = '0';
}

  const cajasDeAptitudes = document.getElementsByClassName('cajaAptitudes')
  const cajaDeAptitudesTexto = document.getElementsByClassName('cajaAptitudesTexto')
  
  let fondoDeComunicacion = document.getElementById('cajaComunicacion')
  
  let iconoDeComunicacion = document.getElementById('iconoComunicacion')

  cajasDeAptitudes[0].addEventListener('mouseenter', () => {
      cajasDeAptitudes[0].classList.add('cajaAptitudesNaranja')
      cajaDeAptitudesTexto[0].classList.add('cajaAptitudesTexto2')
      fondoDeComunicacion.classList.add('fondoCajaBlanco')
      iconoDeComunicacion = document.getElementById('iconoComunicacion').src = 'Iconos/comments-solid-orange.png';
    })

    cajasDeAptitudes[0].addEventListener('mouseleave', () => {
      cajasDeAptitudes[0].classList.remove('cajaAptitudesNaranja')
      cajaDeAptitudesTexto[0].classList.remove('cajaAptitudesTexto2')
      fondoDeComunicacion.classList.remove('fondoCajaBlanco')
      iconoDeComunicacion = document.getElementById('iconoComunicacion').src = 'Iconos/comments-solid.png';
    })

    let fondoDeTrabajo = document.getElementById('cajaTrabajo')
  
    let iconoDeTrabajo = document.getElementById('iconoTrabajo')

    cajasDeAptitudes[1].addEventListener('mouseenter', () => {
      cajasDeAptitudes[1].classList.add('cajaAptitudesNaranja')
      cajaDeAptitudesTexto[1].classList.add('cajaAptitudesTexto2')
      fondoDeTrabajo.classList.add('fondoCajaBlanco')
      iconoDeAptitudes = document.getElementById('iconoTrabajo').src = 'Iconos/people-group-solid-orange.png';
    })

    cajasDeAptitudes[1].addEventListener('mouseleave', () => {
      cajasDeAptitudes[1].classList.remove('cajaAptitudesNaranja')
      cajaDeAptitudesTexto[1].classList.remove('cajaAptitudesTexto2')
      fondoDeTrabajo.classList.remove('fondoCajaBlanco')
      iconoDeAptitudes = document.getElementById('iconoTrabajo').src = 'Iconos/people-group-solid.png';
    })

    let fondoDeResponsabilidad = document.getElementById('cajaResponsabilidad')
  
    let iconoDeResponsabilidad = document.getElementById('iconoResponsabilidad')

    cajasDeAptitudes[2].addEventListener('mouseenter', () => {
      cajasDeAptitudes[2].classList.add('cajaAptitudesNaranja')
      cajaDeAptitudesTexto[2].classList.add('cajaAptitudesTexto2')
      fondoDeResponsabilidad.classList.add('fondoCajaBlanco')
      iconoDeResponsabilidad = document.getElementById('iconoResponsabilidad').src = 'Iconos/list-check-solid-orange.png';
    })

    cajasDeAptitudes[2].addEventListener('mouseleave', () => {
      cajasDeAptitudes[2].classList.remove('cajaAptitudesNaranja')
      cajaDeAptitudesTexto[2].classList.remove('cajaAptitudesTexto2')
      fondoDeResponsabilidad.classList.remove('fondoCajaBlanco')
      iconoDeResponsabilidad = document.getElementById('iconoResponsabilidad').src = 'Iconos/list-check-solid.png';
    })

    let fondoDeProactivo = document.getElementById('cajaProactivo')
  
    let iconoDeProactivo = document.getElementById('iconoProactivo')

    cajasDeAptitudes[3].addEventListener('mouseenter', () => {
      cajasDeAptitudes[3].classList.add('cajaAptitudesNaranja')
      cajaDeAptitudesTexto[3].classList.add('cajaAptitudesTexto2')
      fondoDeProactivo.classList.add('fondoCajaBlanco')
      iconoDeProactivo = document.getElementById('iconoProactivo').src = 'Iconos/rocket-solid-orange.png';
    })

    cajasDeAptitudes[3].addEventListener('mouseleave', () => {
      cajasDeAptitudes[3].classList.remove('cajaAptitudesNaranja')
      cajaDeAptitudesTexto[3].classList.remove('cajaAptitudesTexto2')
      fondoDeProactivo.classList.remove('fondoCajaBlanco')
      iconoDeProactivo = document.getElementById('iconoProactivo').src = 'Iconos/rocket-solid.png';
    })

    let fondoDeCI = document.getElementById('cajaCI')
  
    let iconoDeCI = document.getElementById('iconoCI')

    cajasDeAptitudes[4].addEventListener('mouseenter', () => {
      cajasDeAptitudes[4].classList.add('cajaAptitudesNaranja')
      cajaDeAptitudesTexto[4].classList.add('cajaAptitudesTexto2')
      fondoDeCI.classList.add('fondoCajaBlanco')
      iconoDeCI = document.getElementById('iconoCI').src = 'Iconos/laptop-solid-orange.png';
    })

    cajasDeAptitudes[4].addEventListener('mouseleave', () => {
      cajasDeAptitudes[4].classList.remove('cajaAptitudesNaranja')
      cajaDeAptitudesTexto[4].classList.remove('cajaAptitudesTexto2')
      fondoDeCI.classList.remove('fondoCajaBlanco')
      iconoDeCI = document.getElementById('iconoCI').src = 'Iconos/laptop-solid.png';
    })

    
    let fondoDeLiderazgo = document.getElementById('cajaLiderazgo')
  
    let iconoDeLiderazgo = document.getElementById('iconoLiderazgo')


    cajasDeAptitudes[5].addEventListener('mouseenter', () => {
      cajasDeAptitudes[5].classList.add('cajaAptitudesNaranja')
      cajaDeAptitudesTexto[5].classList.add('cajaAptitudesTexto2')
      fondoDeLiderazgo.classList.add('fondoCajaBlanco')
      iconoDeLiderazgo = document.getElementById('iconoLiderazgo').src = 'Iconos/handshake-solid-orange.png';
    })

    cajasDeAptitudes[5].addEventListener('mouseleave', () => {
      cajasDeAptitudes[5].classList.remove('cajaAptitudesNaranja')
      cajaDeAptitudesTexto[5].classList.remove('cajaAptitudesTexto2')
      fondoDeLiderazgo.classList.remove('fondoCajaBlanco')
      iconoDeLiderazgo = document.getElementById('iconoLiderazgo').src = 'Iconos/handshake-solid.png';
    })
