// Flash cards bíblicos
const flashcards = [
  { pergunta: "Quem construiu a arca?", resposta: "Noé" },
  { pergunta: "Qual foi o primeiro milagre de Jesus?", resposta: "Transformar água em vinho" },
  { pergunta: "Quem foi lançado na cova dos leões?", resposta: "Daniel" },
  { pergunta: "Quantos livros tem a Bíblia?", resposta: "66 livros" },
  { pergunta: "Quem traiu Jesus?", resposta: "Judas Iscariotes" },
  { pergunta: "Qual apóstolo negou Jesus três vezes?", resposta: "Pedro" },
  { pergunta: "Quem foi o homem mais forte da Bíblia?", resposta: "Sansão" }, // Corrigido: "masi" → "mais"
  { pergunta: "Onde Jesus nasceu?", resposta: "Belém" },
  { pergunta: "Quem dividiu o Mar Vermelho?", resposta: "Moisés" }, // Adicionado para completar 10 cards
  { pergunta: "Qual é o menor versículo da Bíblia?", resposta: "Jesus chorou (João 11:35)" } // Corrigido: "JOão" → "João"
];

// Renderizar os cards
const container = document.getElementById("flashcards"); // Corrigido: "falshcards" → "flashcards"

flashcards.forEach((item) => { // Corrigido: removido parênteses extras
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = item.pergunta;

  card.addEventListener("click", () => {
    if (card.classList.contains("flipped")) {
      card.textContent = item.pergunta;
      card.classList.remove("flipped");
    } else {
      card.textContent = item.resposta;
      card.classList.add("flipped");
    }
  });

  container.appendChild(card);
});

// Menu hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});