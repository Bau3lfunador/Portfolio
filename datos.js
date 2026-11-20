/* ==========================================================================
   ESTE ES EL ÚNICO ARCHIVO QUE TENÉS QUE EDITAR.

   Acá van tu nombre, tu GitHub y tus proyectos de cada año.
   Respetá las comillas "" y las comas , al final de cada línea.

   Para cada proyecto podés completar:
     nombre       el título del proyecto
     info         qué hace y qué hiciste vos
     tecnologias  lista de tecnologías, entre corchetes y comillas
     repo         el repositorio de GitHub: "usuario/repositorio"
                  o el link completo "https://github.com/usuario/repositorio"
     demo         (opcional) link a la versión online, si la tiene
     ejemplo      true muestra la etiqueta "Ejemplo". Borrá esa línea
                  (o poné false) cuando reemplaces el proyecto por uno tuyo.
   ========================================================================== */

const PORTFOLIO = {
  nombre: "Tu nombre",
  rol: "Programación y proyectos propios",
  sobreMi:
    "Me gusta construir herramientas que resuelven problemas concretos. Acá reúno lo que hice año a año, cada proyecto con su código en GitHub.",

  // Tu usuario de GitHub (por ejemplo "juanperez") o el link completo de tu perfil.
  github: "",

  anios: [
    {
      anio: 2026,
      proyectos: [
        {
          nombre: "Asistente de voz para la PC",
          info: "Programa que escucha por el micrófono, muestra un indicador mientras te atiende y ejecuta órdenes habladas: abrir programas de la PC y buscar en el navegador.",
          tecnologias: ["Python", "Reconocimiento de voz", "Windows"],
          repo: "", // Ejemplo: "tu-usuario/asistente-de-voz"
          demo: "",
        },
        {
          nombre: "Ordenador de Descargas",
          info: "Script que revisa la carpeta de Descargas y manda cada archivo a su carpeta según el tipo: imágenes, documentos, instaladores y comprimidos.",
          tecnologias: ["Python"],
          repo: "",
          demo: "",
          ejemplo: true,
        },
        {
          nombre: "Control de gastos del mes",
          info: "Aplicación web para anotar gastos por categoría y ver con un gráfico cuánto va gastado del presupuesto.",
          tecnologias: ["HTML", "CSS", "JavaScript"],
          repo: "",
          demo: "",
          ejemplo: true,
        },
        {
          nombre: "Bot de Discord para estudiar",
          info: "Bot que arma turnos de estudio, avisa con un temporizador y lleva el ranking de quién estudió más en la semana.",
          tecnologias: ["Python", "discord.py"],
          repo: "",
          demo: "",
          ejemplo: true,
        },
        {
          nombre: "Juego de plataformas 2D",
          info: "Juego hecho desde cero, con niveles, enemigos y puntajes que se guardan entre partidas.",
          tecnologias: ["Python", "Pygame"],
          repo: "",
          demo: "",
          ejemplo: true,
        },
        {
          nombre: "Página para un comercio del barrio",
          info: "Sitio con catálogo de productos, horarios y botón directo a WhatsApp para un negocio local.",
          tecnologias: ["HTML", "CSS"],
          repo: "",
          demo: "",
          ejemplo: true,
        },
      ],
    },

    {
      anio: 2025,
      proyectos: [
        {
          nombre: "Calculadora de promedios",
          info: "Calculadora que suma las notas de cada materia y muestra el promedio y cuánto falta para aprobar.",
          tecnologias: ["JavaScript"],
          repo: "",
          demo: "",
          ejemplo: true,
        },
        {
          nombre: "Mi primera página web",
          info: "Primer sitio publicado, con presentación personal, fotos y un formulario de contacto.",
          tecnologias: ["HTML", "CSS"],
          repo: "",
          demo: "",
          ejemplo: true,
        },
      ],
    },

    /* Para agregar otro año, copiá este bloque, sacale los comentarios y pegalo arriba o abajo:

    {
      anio: 2024,
      proyectos: [
        {
          nombre: "Nombre del proyecto",
          info: "Qué hace y qué hiciste vos.",
          tecnologias: ["Python"],
          repo: "tu-usuario/tu-repositorio",
          demo: "",
        },
      ],
    },
    */
  ],
};
