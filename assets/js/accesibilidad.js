let labels = {
  resetTitle: "Reiniciar",
  closeTitle: "Cerrar",
  menuTitle: "Accesibilidad",
  increaseText: "Aumentar tamaño del texto",
  decreaseText: "Disminuir tamaño del texto",
  increaseTextSpacing: "Aumentar espacio entre letras",
  decreaseTextSpacing: "Disminuir espacio entre letras",
  increaseLineHeight: "Aumentar altura de lineas",
  decreaseLineHeight: "Disminuir altura de lineas",
  invertColors: "Invertir colores",
  grayHues: "Monocromatico",
  underlineLinks: "Subrayar enlaces",
  bigCursor: "Cursor Grande",
  readingGuide: "Guía de lectura",
  textToSpeech: "Texto a voz",
  speechToText: "Dictado",
  disableAnimations: "Desactivar animaciones",
};

let options = {
  labels: labels,
};

options.icon = {
  circular: true,
  position: {
    top: { size: 2, units: "vh" },

    right: { size: 2, units: "%" },

    type: "absolute",
  },
};

window.addEventListener(
  "load",
  function () {
    new Accessibility(options);
  },
  false
);
