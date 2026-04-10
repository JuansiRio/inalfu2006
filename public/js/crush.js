(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function waitPromocion(cb, tries) {
    tries = tries || 0;
    if (typeof PROMOCION !== "undefined") {
      cb();
      return;
    }
    if (tries > 200) return;
    setTimeout(function () {
      waitPromocion(cb, tries + 1);
    }, 25);
  }

  function normalizar(texto) {
    if (texto == null) return "";
    var s = String(texto).trim().toLowerCase();
    s = s.replace(/ü/g, "u").replace(/ñ/g, "n");
    s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return s;
  }

  function primerPalabra(nombreCompleto) {
    var t = String(nombreCompleto || "").trim().split(/\s+/)[0] || "";
    return t;
  }

  /** Nombre corto para mostrar (ej. "Laura Vanessa" de "Laura Vanessa Dávila Porras"). */
  function nombreCrushParaMostrar(nombreCompleto) {
    var partes = String(nombreCompleto || "").trim().split(/\s+/);
    if (!partes.length || !partes[0]) return "";
    if (partes.length === 1) return partes[0];
    return partes[0] + " " + partes[1];
  }

  function primerNombreNormalizado(nombreCompleto) {
    return normalizar(primerPalabra(nombreCompleto));
  }

  function elegirAlAzar(arr) {
    if (!arr || !arr.length) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  ready(function () {
    waitPromocion(init);
  });

  function init() {
    var input = document.getElementById("input-nombre");
    var btn = document.getElementById("btn-crush");
    var resultado = document.getElementById("resultado-crush");
    var nombreCrush = document.getElementById("nombre-crush");
    var fraseCrush = document.getElementById("frase-crush");
    var btnReintentar = document.getElementById("btn-reintentar");
    var errorEl = document.getElementById("error-crush");

    if (!input || !btn || !resultado || !nombreCrush || !fraseCrush || !btnReintentar || !errorEl) {
      return;
    }

    var typewriterTimerId = null;

    function clearTypewriter() {
      if (typewriterTimerId !== null) {
        clearInterval(typewriterTimerId);
        typewriterTimerId = null;
      }
    }

    function hideError() {
      errorEl.textContent = "";
      errorEl.classList.add("hidden");
    }

    function showError(msg) {
      errorEl.textContent = msg;
      errorEl.classList.remove("hidden");
    }

    function resetView() {
      clearTypewriter();
      hideError();
      input.value = "";
      resultado.classList.add("hidden");
      btn.classList.remove("hidden");
      nombreCrush.textContent = "";
      fraseCrush.textContent = "";
      fraseCrush.classList.add("hidden");
      input.focus();
    }

    btnReintentar.addEventListener("click", function () {
      resetView();
    });

    btn.addEventListener("click", function () {
      clearTypewriter();
      hideError();

      var escrito = normalizar(primerPalabra(input.value || ""));
      if (!escrito) {
        showError("Escribe tu primer nombre.");
        return;
      }

      var matchesHombres = PROMOCION.hombres.filter(function (nombre) {
        return primerNombreNormalizado(nombre) === escrito;
      });
      var matchesMujeres = PROMOCION.mujeres.filter(function (nombre) {
        return primerNombreNormalizado(nombre) === escrito;
      });

      var poolCrush = null;
      if (matchesHombres.length > 0) {
        poolCrush = PROMOCION.mujeres;
      } else if (matchesMujeres.length > 0) {
        poolCrush = PROMOCION.hombres;
      }

      if (!poolCrush || !poolCrush.length) {
        showError(
          "Ese nombre no aparece en la lista. ¿Te graduaste por ventanilla?"
        );
        return;
      }

      var crushCompleto = elegirAlAzar(poolCrush);
      if (!crushCompleto) return;

      var frase = elegirAlAzar(PROMOCION.frases);
      if (frase == null) frase = "";

      var textoTypewriter = nombreCrushParaMostrar(crushCompleto);

      resultado.classList.remove("hidden");
      btn.classList.add("hidden");
      nombreCrush.textContent = "";
      fraseCrush.textContent = "";
      fraseCrush.classList.add("hidden");

      var i = 0;
      typewriterTimerId = setInterval(function () {
        if (i < textoTypewriter.length) {
          i += 1;
          nombreCrush.textContent = textoTypewriter.slice(0, i);
        } else {
          clearInterval(typewriterTimerId);
          typewriterTimerId = null;
          fraseCrush.textContent = frase;
          fraseCrush.classList.remove("hidden");
        }
      }, 80);
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        btn.click();
      }
    });
  }
})();
