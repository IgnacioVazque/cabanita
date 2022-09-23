function openNav() {
    document.getElementById("sidenav").style.width = "250px"; //mostrar menu
    // document.getElementById("main").style.width = "250px";  // empujar contenido
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";  //darle opacidad al mostrar menu
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    // document.getElementById("main").style.width = "0";
    document.body.style.backgroundColor = "white";
} 