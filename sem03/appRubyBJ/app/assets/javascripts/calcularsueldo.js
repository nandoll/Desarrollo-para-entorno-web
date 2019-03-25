$(document).ready(function(){
     // Fetch all the forms we want to apply custom Bootstrap validation styles to
     var forms = document.getElementsByClassName('needs-validation');
     // Loop over them and prevent submission
     var validation = Array.prototype.filter.call(forms, function(form) {
       form.addEventListener('submit', function(event) {
         event.preventDefault();
         event.stopPropagation(); 
         var tipoTrabajador = document.querySelector(".tipo_trabajador").value
         var horasTrabajadas = parseInt(document.querySelector(".horas").value)
         
         
        //  form.checkValidity() === false ? form.classList.add('was-validated') : form.classList.add('was-not-validated')
        if(form.checkValidity() === false){
            form.classList.add('was-validated')
        }
        else{
            var cantidadHijos = parseInt(document.querySelector('input[name="cantidadHijos"]:checked').value)
            fntOperacion(tipoTrabajador, horasTrabajadas, cantidadHijos)            
        }
         
       }, false);
     });
     function fntOperacion(tipo, horas, hijos){
        //  var res = eval( ipt1 + cbo + ipt2)
        //  var modal_body = document.querySelector(".modal-body")         
        //  modal_body.textContent = "El resultado es : " + res
        //  $("#modalResultado").modal({show:true})
        
        /******************* 
        ======================
            Sueldo bruto 
        ====================== 
        ***/
        // Cálculo de Sueldo Bruto
        var sueldoBruto = tipo * horas
        var iptSueldoBruto = document.querySelector(".sueldo_bruto")
        // Asignar el Sueldo Bruto al input correspondiente
        iptSueldoBruto.value = sueldoBruto;

         /******************* 
        ======================
            Impuesto del 18% 
        ====================== 
        ***/
        // Cálculo de Sueldo Bruto
        var impuesto = 0.18
        var iptImpuesto = document.querySelector(".impuesto")
        // Asignar el Sueldo Bruto al input correspondiente
        iptImpuesto.value = iptSueldoBruto.value * impuesto;

         /******************* 
        ======================
            Bono por hijos
        ====================== 
        ***/
        // Cálculo de Sueldo Bruto
        var bono = hijos
        var iptBono = document.querySelector(".bono_hijo")
        // Asignar el Sueldo Bruto al input correspondiente
        iptBono.value = bono;

         /******************* 
        ======================
            Sueldo Neto
        ====================== 
        ***/
        // Cálculo de Sueldo Neto
        var neto = sueldoBruto - ( sueldoBruto * impuesto) + bono
        var iptNeto = document.querySelector(".sueldo_neto")
        // Asignar el Sueldo Bruto al input correspondiente
        iptNeto.value = neto;





        // console.log(cbo + " " + ipt1 + " " + ipt2)
                
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