// !! FAIT EN ÉQUIPE AVEC SANDRINE !!


$ (".panda").on("click", function () {
    
    var type= $(this).attr("data-type"); //$(this) permet d'accéder à un objet jQuery à la place de l'élément DOM habituel.
    console.log(type);
    var tendance= $(this).attr("data-tendance"); // .attr permet d'obtenir la valeur d'un attribut.
    console.log(tendance);
    
    
//Si on click sur un boutton qui n'a pas d'attribut =
if (type == undefined) {
    alert ("Sauver les pandas et manger du riz !!!!");
    console.log("Sauver les pandas et manger du riz !!!!");
}else {
   alert (" " + type + " " + tendance);
    
}
})
