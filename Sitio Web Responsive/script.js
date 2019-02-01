/* se invoca al hacer click sobre el icono de menú hamburguesa
   Muestra la barra de navegación, y el icono de cerrar, y oculta el
   de menú hamburguesa */
function mostrar(elemento,abrir,cerrar){
           /* aparece la barra */
           elto=document.getElementById(elemento);
           elto.style.display="block";
           /* desaparece icono hamburguesa */
           abr=document.getElementById(abrir);
           abr.style.display="none";
           /* aparece icono cerrar */
           cerr=document.getElementById(cerrar);
           cerr.style.display="inline";
       }
/* se invoca al hacer click sobre el icono de cierre
   Oculta la barra de navegación, muestra el icono de menú hamburguesa, 
   y oculta el de cerrar */
function ocultar(elemento,abrir,cerrar){
           /* aparece la barra */
           elto=document.getElementById(elemento);
           elto.style.display="none";
           /* desaparece icono hamburguesa */
           abr=document.getElementById(abrir);
           abr.style.display="inline";
           /* aparece icono cerrar */
           cerr=document.getElementById(cerrar);
           cerr.style.display="none";
       }