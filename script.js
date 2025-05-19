
function toggleTurmas(id) {
    const div = document.getElementById(id);
    div.style.display = div.style.display === "flex" ? "none" : "flex";
  }

  function redirecionar(pagina) {
    window.location.href = pagina;
  }