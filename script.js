const questions = [
  { q: "¿Cuál es tu color favorito?", options: ["Rojo", "Verde", "Negro", "Blanco", "Otro"] },
  { q: "¿Te gustan más las cosas claras o oscuras?", options: ["Claras", "Oscuras"] },
  { q: "¿Películas animadas o con actores?", options: ["Animadas", "Con actores"] },
  { q: "¿Tu género de película favorito?", options: ["Romance", "Acción", "Terror", "Comedia", "Drama"] },
  { q: "¿Serie que podrías ver mil veces?", options: [] },
  { q: "¿Animal que te encanta?", options: ["Perro", "Gato", "Conejo", "Otro"] },
  { q: "¿Dulce favorito?", options: ["Chocolate", "Caramelo", "Galletas", "Otro"] },
  { q: "¿Bebida favorita?", options: ["Café", "Té", "Chocolate caliente", "Otra"] },
  { q: "¿Prefieres quedarte en casa o salir?", options: ["Casa", "Salir"] },
  { q: "¿Te gustan las sorpresas?", options: ["Sí", "No", "Depende"] },
  { q: "¿Te gustan más los regalos útiles o sentimentales?", options: ["Útiles", "Sentimentales"] },
  { q: "¿Eres más tranquilo/a o energético/a?", options: ["Tranquilo/a", "Energético/a"] },
  { q: "¿Te gusta más escuchar o hablar?", options: ["Escuchar", "Hablar"] },
  { q: "¿Te gustan los aromas dulces?", options: ["Sí", "No"] },
  { q: "¿Te gustan los detalles pequeños?", options: ["Sí", "Mucho"] },
  { q: "¿Te gustan las cosas suaves?", options: ["Sí", "No"] },
  { q: "¿Te gustan los recuerdos físicos?", options: ["Sí", "No"] },
  { q: "¿Eres más de fotos o de momentos?", options: ["Fotos", "Momentos"] },
  { q: "¿Te gusta que te escriban mensajes lindos?", options: ["Sí", "Mucho"] },
  { q: "¿Algo pequeño que te haga feliz?", options: [] }
];

let current = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const textarea = document.getElementById("customAnswer");

document.getElementById("startBtn").onclick = () => {
  document.getElementById("welcome").classList.remove("active");
  document.getElementById("quiz").classList.add("active");
  loadQuestion();
};

document.getElementById("nextBtn").onclick = () => {
  current++;
  textarea.value = "";
  if (current < questions.length) loadQuestion();
  else {
    document.getElementById("quiz").classList.remove("active");
    document.getElementById("end").classList.add("active");
  }
};

function loadQuestion() {
  questionEl.innerText = questions[current].q;
  optionsEl.innerHTML = "";
  questions[current].options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;
    div.onclick = () => {
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      div.classList.add("selected");
    };
    optionsEl.appendChild(div);
  });
}

/* Nieve */
const snowContainer = document.querySelector(".snow-container");
for (let i = 0; i < 40; i++) {
  const snow = document.createElement("span");
  snow.innerHTML = "❄";
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.animationDuration = 5 + Math.random() * 10 + "s";
  snow.style.fontSize = Math.random() * 24 + 10 + "px";
  snowContainer.appendChild(snow);
}
