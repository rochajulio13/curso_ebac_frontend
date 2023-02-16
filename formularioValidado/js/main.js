$(document).ready(function(){
  
    let seuCampCpf = $('#cp')

    $(seuCampCpf).mask('000-000-000-00', {reverse:true})

    let seuCep = $(cep)

    $(seuCep).mask('00000-000')

 $('#telefo').mask('00/00/000')

})
