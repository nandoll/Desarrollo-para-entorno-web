$(document).ready(function(){
     // Fetch all the forms we want to apply custom Bootstrap validation styles to
     var forms = document.getElementsByClassName('needs-validation');
     // Loop over them and prevent submission
     var validation = Array.prototype.filter.call(forms, function(form) {
       form.addEventListener('submit', function(event) {
         event.preventDefault();
         event.stopPropagation(); 
         var operacion = document.querySelector(".operacion").value
         var val_1 = parseInt(document.querySelector(".valor1").value)
         var val_2 = parseInt(document.querySelector(".valor2").value)
        //  form.checkValidity() === false ? form.classList.add('was-validated') : form.classList.add('was-not-validated')
        if(form.checkValidity() === false){
            form.classList.add('was-validated')
        }
        else{
            fntOperacion(operacion, val_1, val_2)            
        }
         
       }, false);
     });
     function fntOperacion(cbo, ipt1, ipt2){
         var res = eval( ipt1 + cbo + ipt2)
         var modal_body = document.querySelector(".modal-body")         
         modal_body.textContent = "El resultado es : " + res
         $("#modalResultado").modal({show:true})

         

        // console.log(res)
    }

     

     /*  Btn Limpiar */
     var btnLimpiar = document.querySelector(".btn-secondary")
     var formulario = document.getElementsByClassName("needs-validation")
     btnLimpiar.addEventListener('click', function(){
        formulario[0].reset()
        console.log("reset")
     })
     /* Detener después de validar  7 y 8 para todo*/
     
})
/* Inicializar el documento */