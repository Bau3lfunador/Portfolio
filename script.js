/* Arma la página con los datos de datos.js.
   No hace falta tocar este archivo para cargar tus proyectos. */
(function () {
  "use strict";

  var root = document.getElementById("app");
  var data = typeof PORTFOLIO !== "undefined" ? PORTFOLIO : null;

  /* ---------- utilidades ---------- */

  // Crea un elemento HTML. Los textos se insertan como texto, nunca como HTML.
  function h(tag, props, kids) {
    var el = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      var v = props[k];
      if (v === null || v === undefined || v === false) return;
      if (k === "class") el.className = v;
      else if (k === "text") el.textContent = v;
      else el.setAttribute(k, String(v));
    });
    (kids || []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return el;
  }

  function plural(n, uno, varios) {
    return n + " " + (n === 1 ? uno : varios);
  }

  // Convierte "usuario/repo" o "usuario" en un link de GitHub. Solo acepta http y https.
  function normalizarUrl(raw, esPerfil) {
    var v = String(raw || "").trim();
    if (!v) return "";
    if (/^https?:\/\//i.test(v)) return v;
    if (/^[a-z][a-z0-9+.\-]*:/i.test(v)) return "";
    if (/^(github\.com|www\.)/i.test(v)) return "https://" + v;
    if (esPerfil && /^@?[\w\-]+$/.test(v)) return "https://github.com/" + v.replace(/^@/, "");
    if (/^[\w\-]+\/[\w.\-]+$/.test(v)) return "https://github.com/" + v;
    return "";
  }

  function textoCorto(url) {
    return url.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, "");
  }

  function listaTecnologias(t) {
    var items = Array.isArray(t) ? t : String(t || "").split(",");
    return items
      .map(function (s) { return String(s).trim(); })
      .filter(Boolean);
  }

  /* ---------- vistas ---------- */

  function proyecto(p) {
    var repo = normalizarUrl(p.repo, false);
    var demo = normalizarUrl(p.demo, false);
    var tecnologias = listaTecnologias(p.tecnologias);
    var enlaces = [];

    if (repo) {
      enlaces.push(
        h("a", { class: "link", href: repo, target: "_blank", rel: "noopener noreferrer", text: textoCorto(repo) + " ↗" })
      );
    }
    if (demo) {
      enlaces.push(
        h("a", { class: "link", href: demo, target: "_blank", rel: "noopener noreferrer", text: "Ver online ↗" })
      );
    }

    return h("article", { class: "project" }, [
      h("h3", { class: "p-title" }, [
        p.nombre || "Proyecto sin nombre",
        p.ejemplo ? h("span", { class: "badge", text: "Ejemplo" }) : null,
      ]),
      p.info ? h("p", { class: "p-desc", text: p.info }) : null,
      tecnologias.length
        ? h("ul", { class: "tags" }, tecnologias.map(function (t) { return h("li", { class: "tag", text: t }); }))
        : null,
      enlaces.length ? h("div", { class: "links" }, enlaces) : null,
    ]);
  }

  function anio(a) {
    var proyectos = Array.isArray(a.proyectos) ? a.proyectos : [];
    var lista = h("div", { class: "projects" }, proyectos.map(proyecto));
    if (!proyectos.length) {
      lista.appendChild(h("p", { class: "empty", text: "Sin proyectos cargados en este año." }));
    }
    return h("section", { class: "year" }, [
      h("div", { class: "year-label" }, [
        h("h2", { class: "year-num", text: String(a.anio) }),
        h("p", { class: "year-count", text: plural(proyectos.length, "proyecto", "proyectos") }),
      ]),
      lista,
    ]);
  }

  function pagina(d) {
    var anios = (Array.isArray(d.anios) ? d.anios.slice() : []).sort(function (a, b) {
      return b.anio - a.anio;
    });
    var totalProyectos = anios.reduce(function (n, a) {
      return n + (Array.isArray(a.proyectos) ? a.proyectos.length : 0);
    }, 0);
    var github = normalizarUrl(d.github, true);
    var nombre = d.nombre || "Tu nombre";

    document.title = nombre + " · Portfolio";

    return h("div", { class: "wrap" }, [
      h("div", { class: "topbar" }, [h("span", { class: "mark", text: "Portfolio" })]),
      h("header", { class: "hero" }, [
        h("h1", { text: nombre }),
        d.rol ? h("p", { class: "role", text: d.rol }) : null,
        d.sobreMi ? h("p", { class: "bio", text: d.sobreMi }) : null,
        github
          ? h("a", { class: "btn", href: github, target: "_blank", rel: "noopener noreferrer", text: "Ver mi GitHub ↗" })
          : null,
        h("p", {
          class: "stats",
          text: plural(totalProyectos, "proyecto", "proyectos") + " en " + plural(anios.length, "año", "años"),
        }),
      ]),
      h(
        "main",
        { class: "timeline" },
        anios.length
          ? anios.map(anio)
          : [h("p", { class: "empty", text: "Todavía no hay proyectos cargados. Agregalos en datos.js." })]
      ),
      h("footer", { class: "footer", text: "© " + new Date().getFullYear() + " " + nombre }),
    ]);
  }

  /* ---------- inicio ---------- */

  if (!data) {
    root.textContent = "No se encontró datos.js. Revisá que esté en la misma carpeta que index.html.";
    return;
  }
  root.replaceChildren(pagina(data));
})();
