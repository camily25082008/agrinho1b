function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let questions;
let current = 0;
let score = 0;
let showNext = false;

function setup() {
  createCanvas(500, 400);
  textAlign(CENTER, CENTER);
  textSize(18);
  initQuestions();
}

function draw() {
  background(220);

  drawEnvironment();

  fill(0);
  textSize(18);
  text("Escolha a opção correta:", width / 2, 50);

  let q = questions[current];
  textSize(20);
  text(q.question, width / 2, 100);

  for (let i = 0; i < q.choices.length; i++) {
    fill(255);
    rect(100, 140 + i * 60, 300, 40, 10);
    fill(0);
    text(q.choices[i], 250, 160 + i * 60);
  }

  if (score >= 5) {
    background(100, 200, 100);
    fill(255);
    textSize(28);
    text("Parabéns! Você chegou ao campo! 🌻", width / 2, height / 2);
  }
}

function mousePressed() {
  if (score >= 5) return;

  let q = questions[current];

  for (let i = 0; i < q.choices.length; i++) {
    if (
      mouseX > 100 &&
      mouseX < 400 &&
      mouseY > 140 + i * 60 &&
      mouseY < 180 + i * 60
    ) {
      if (i === q.correct) {
        score++;
      }

      current++;
      if (current >= questions.length) current = 0; // loop nas perguntas
    }
  }
}

function initQuestions() {
  questions = [
    {
      question: "Qual dessas ações é mais sustentável?",
      choices: ["Plantar árvores", "Jogar lixo na rua", "Usar plástico descartável"],
      correct: 0
    },
    {
      question: "Qual transporte é mais ecológico?",
      choices: ["Bicicleta", "Carro a gasolina", "Avião particular"],
      correct: 0
    },
    {
      question: "Qual atitude ajuda o planeta?",
      choices: ["Economizar água", "Deixar a torneira aberta", "Desperdiçar comida"],
      correct: 0
    },
    {
      question: "O que é reciclar?",
      choices: ["Reaproveitar materiais", "Queimar lixo", "Jogar tudo fora"],
      correct: 0
    },
    {
      question: "Como gerar menos lixo?",
      choices: ["Usar sacola reutilizável", "Usar sacola plástica", "Comprar tudo embalado"],
      correct: 0
    }
  ];
}

function drawEnvironment() {
  // Cidade poluída vai ficando mais verde com o progresso
  let pollution = map(score, 0, 5, 180, 50);
  let green = map(score, 0, 5, 60, 200);

  background(pollution, green, pollution);

  for (let i = 0; i < 5; i++) {
    let x = 80 + i * 80;
    fill(100);
    rect(x, height - 100, 40, 100);

    // Plantinhas surgem com progresso
    if (score > i) {
      fill(34, 139, 34);
      ellipse(x + 20, height - 110, 30, 30);
    }
  }
}
