function moreInformations() {
  if(document.getElementById("informations").value == "Mais Informações"){
    document.getElementById("informations").value = "Menos Informações";
   } else {
    document.getElementById("informations").value = "Mais Informações";
   }

  document.getElementById("show").classList.toggle("content");
}