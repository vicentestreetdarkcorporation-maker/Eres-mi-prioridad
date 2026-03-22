// ======================== CONFIGURACIÓN DE IMÁGENES ========================
// Las imágenes se cargan desde la carpeta local
// IMPORTANTE: Coloca tus imágenes en la misma carpeta que este archivo
// o ajusta las rutas según corresponda

const imagen1 = document.getElementById("womanImage1");
const imagen2 = document.getElementById("womanImage2");
const imagen3 = document.getElementById("womanImage3");

// Usa rutas relativas - coloca las imágenes en la misma carpeta que index.html
// o en una subcarpeta llamada "img"
imagen1.src = "anyela.png";
imagen2.src = "anyela2.png";
imagen3.src = "anyela4.png";

// Manejo de errores de carga de imágenes
function manejarErrorImagen(img, rutaAlternativa) {
  img.onerror = function() {
    console.warn(`No se pudo cargar la imagen: ${this.src}`);
    // Imagen de respaldo con gradiente
    this.style.background = "linear-gradient(135deg, #ffd9e2, #ffc0d0)";
    this.style.objectFit = "cover";
    this.alt = "Imagen no disponible";
  };
}

manejarErrorImagen(imagen1);
manejarErrorImagen(imagen2);
manejarErrorImagen(imagen3);

// ======================== MENSAJES ROMÁNTICOS ========================
const mensajes = [
  {
    texto: "Eres la guerrera que escribe historias de amor con cada latido. Tu hijo tiene el privilegio de ser guiado por una mujer tan fuerte y tan bella.",
    autor: "— Coraje y dulzura"
  },
  {
    texto: "Entre batallas y caricias, tu esencia florece. Eres la rosa que protege a tu retoño con espinas de coraje y pétalos de ternura.",
    autor: "— Madre, mi inspiración"
  },
  {
    texto: "Tus manos construyen sueños, tu mirada es un faro. Por cada noche en vela, por cada sonrisa que regalas: te admiro con el alma, valiente mujer.",
    autor: "— Amor infinito"
  },
  {
    texto: "Hermosa luchadora: tu amor no conoce cansancio, tu risa es medicina, tu abrazo es mi lugar en el mundo. Gracias por ser la mujer que eres.",
    autor: "— Para la reina del hogar"
  },
  {
    texto: "Eres la fuerza que mueve montañas y la suavidad que calma tormentas. Tu corazón es el más hermoso ejemplo de resiliencia y romanticismo.",
    autor: "— Admiración eterna"
  },
  {
    texto: "Como la luna guía las mareas, tú guías nuestros días con amor inquebrantable. Madre, compañera, luchadora: eres mi verso favorito.",
    autor: "— Poema a ti"
  },
  {
    texto: "Detrás de cada logro hay una mujer que lo hizo posible con su magia. Eres ese soplo divino, mi confidente, mi amor más puro.",
    autor: "— Orgullo y pasión"
  },
  {
    texto: "Tu hijo lleva tu fortaleza en la sangre, pero también tu ternura en el alma. Mujer de temple y miel, hoy te celebramos con el corazón encendido.",
    autor: "— Celebración de tu grandeza"
  }
];

let indiceActual = 0;
const mensajeElem = document.getElementById("mensajeDinamico");
const autorElem = document.getElementById("autorMensaje");
const indicadorSpan = document.getElementById("indicadorMsg");

function actualizarMensaje() {
  if (!mensajeElem || !autorElem) return;
  const msg = mensajes[indiceActual];
  mensajeElem.style.opacity = "0";
  setTimeout(() => {
    if (mensajeElem && autorElem) {
      mensajeElem.textContent = `“${msg.texto}”`;
      autorElem.textContent = msg.autor;
      mensajeElem.style.opacity = "1";
    }
  }, 120);
  if (indicadorSpan) {
    indicadorSpan.textContent = `Mensaje ${indiceActual + 1} de ${mensajes.length}`;
  }
  if (mensajeElem) {
    mensajeElem.classList.add("glow-text");
    setTimeout(() => mensajeElem.classList.remove("glow-text"), 500);
  }
}

function siguienteMsg() {
  indiceActual = (indiceActual + 1) % mensajes.length;
  actualizarMensaje();
}

function anteriorMsg() {
  indiceActual = (indiceActual - 1 + mensajes.length) % mensajes.length;
  actualizarMensaje();
}

// Botones de navegación
const btnSiguiente = document.getElementById("btnSiguiente");
const btnAnterior = document.getElementById("btnAnterior");

if (btnSiguiente) {
  btnSiguiente.addEventListener("click", siguienteMsg);
}
if (btnAnterior) {
  btnAnterior.addEventListener("click", anteriorMsg);
}

// ======================== SORPRESA ROMÁNTICA ========================
const romanticExtras = [
  "🌹 Aunque tú no lo sepas, te robaste mi corazón y eres la guerrera que admiro. Te mereces flores todos los días, pero hoy, estrellas. 🌟",
  "💕 Tu risa es el eco más dulce. Madre y amada, eres el motor de la alegría. Cada latido es tuyo.",
  "✨ En tus ojos veo el reflejo de una mujer inigualable: valiente como leona, tierna como brisa. Eres mi todo.",
  "🌸 Cada sacrificio tuyo es una lección de amor. Eres la definición de belleza con carácter. ¡Te adoro!",
  "🌙 Hoy la luna brilla más porque sabe que existes. Gracias por dar tanto, por luchar y amar sin medida.",
  "💪❤️ Mujer que abraza la vida con garra y suavidad: tu fuerza es poesía, tu ternura es mi paz.",
  "🌷 Una reina, una madre, una compañera eterna. Tu camino está lleno de flores porque tú eres la primavera.",
  "🎀 Eres refugio, ejemplo, el latido favorito. Gracias por ser la luchadora más hermosa."
];

const sorpresaBtn = document.getElementById("btnSorpresa");
const sorpresaDiv = document.getElementById("sorpresaTexto");

function mostrarSorpresa() {
  if (!sorpresaDiv) return;
  const randomIdx = Math.floor(Math.random() * romanticExtras.length);
  const extraMsg = romanticExtras[randomIdx];
  sorpresaDiv.innerHTML = `<span style="background:#ffeef4; padding: 0.4rem 1rem; border-radius: 50px; display:inline-block; animation: fadeUp 0.3s;">✨ ${extraMsg} ✨</span>`;
  
  if (!document.querySelector('#sorpresaAnimation')) {
    const styleAnimate = document.createElement('style');
    styleAnimate.id = 'sorpresaAnimation';
    styleAnimate.innerText = `@keyframes fadeUp { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: translateY(0); } }`;
    document.head.appendChild(styleAnimate);
  }
  
  setTimeout(() => {
    if (sorpresaDiv.innerHTML !== "") {
      sorpresaDiv.style.transition = "opacity 0.5s";
      sorpresaDiv.style.opacity = "0";
      setTimeout(() => {
        sorpresaDiv.innerHTML = "";
        sorpresaDiv.style.opacity = "1";
      }, 500);
    }
  }, 4200);
}

if (sorpresaBtn) sorpresaBtn.addEventListener("click", mostrarSorpresa);

// ======================== CORAZONES INTERACTIVOS ========================
const corazones = document.querySelectorAll(".corazon");

function crearAnimacionFlotante() {
  if (!document.querySelector('#floatAnimation')) {
    const keyframeStyle = document.createElement('style');
    keyframeStyle.id = 'floatAnimation';
    keyframeStyle.innerHTML = `@keyframes floatUpFade {
      0% { transform: translateY(0) scale(0.8); opacity: 1; }
      100% { transform: translateY(-70px) scale(1.1); opacity: 0; visibility: hidden; }
    }`;
    document.head.appendChild(keyframeStyle);
  }
}

crearAnimacionFlotante();

corazones.forEach(corazon => {
  corazon.addEventListener("click", (e) => {
    e.stopPropagation();
    const emoji = corazon.getAttribute("data-emoji") || "❤️";
    const floatMsg = document.createElement("div");
    floatMsg.innerText = `${emoji} ¡Eres mi prioridad! ${emoji}`;
    floatMsg.style.position = "fixed";
    floatMsg.style.left = `${e.clientX - 40}px`;
    floatMsg.style.top = `${e.clientY - 30}px`;
    floatMsg.style.backgroundColor = "#ffecf0";
    floatMsg.style.color = "#bf3f62";
    floatMsg.style.padding = "8px 15px";
    floatMsg.style.borderRadius = "40px";
    floatMsg.style.fontWeight = "bold";
    floatMsg.style.fontSize = "1rem";
    floatMsg.style.boxShadow = "0 5px 18px rgba(0,0,0,0.2)";
    floatMsg.style.zIndex = "999";
    floatMsg.style.pointerEvents = "none";
    floatMsg.style.fontFamily = "'Poppins', sans-serif";
    floatMsg.style.backdropFilter = "blur(4px)";
    floatMsg.style.border = "1px solid #ffb7c7";
    floatMsg.style.animation = "floatUpFade 1.2s forwards";
    document.body.appendChild(floatMsg);
    
    setTimeout(() => {
      if (floatMsg && floatMsg.remove) floatMsg.remove();
    }, 1200);
  });
});

// ======================== PÉTALOS FLOTANTES ========================
function crearPetales() {
  const container = document.getElementById("petal-container");
  if (!container) return;
  
  container.innerHTML = '';
  
  const numPetals = 25;
  for (let i = 0; i < numPetals; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    const size = 12 + Math.random() * 28;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${6 + Math.random() * 12}s`;
    petal.style.animationDelay = `${Math.random() * 15}s`;
    petal.style.opacity = 0.3 + Math.random() * 0.5;
    petal.style.background = `rgba(255, ${140 + Math.random() * 80}, ${160 + Math.random() * 70}, 0.5)`;
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(petal);
  }
}

crearPetales();

// ======================== EFECTOS ADICIONALES ========================
const msgBox = document.querySelector(".mensajes-box");
if (msgBox) {
  msgBox.addEventListener("mouseenter", () => {
    msgBox.style.transition = "box-shadow 0.2s";
    msgBox.style.boxShadow = "0 20px 28px rgba(233,30,99,0.2), inset 0 0 0 2px #ffe2ec";
  });
  msgBox.addEventListener("mouseleave", () => {
    msgBox.style.boxShadow = "inset 0 0 0 1px #ffe0e8, 0 10px 20px rgba(0, 0, 0, 0.05)";
  });
}

// Inicializar
actualizarMensaje();

console.log("%c💖 ERES MI PRIORIDAD — Para la mujer que ilumina la vida, con amor eterno y admiración profunda 💖", "color: #e8436e; font-size: 16px; font-weight: bold;");
