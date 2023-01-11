var mensagens = [
  "Até a jornada de mil milhas começa com um pequeno passo.",
  "Só há um tempo em que é fundamental despertar. Esse tempo é agora.",
  "A diferença entre ganhar e perder geralmente é não desistir.",
  "O homem começa a morrer na idade em que perde o entusiasmo.",
  "A vida verdadeira é vivida quando pequenas mudanças acontecem.",
  "A sabedoria é basicamente honestidade de pensamento.",
  "Mude a maneira como você vê as coisas e as coisas que você vê mudam.",
  "Mude seus pensamentos e mude seu mundo.",
  "A sabedoria é basicamente honestidade de pensamento",
  "Se você quiser mudar o mundo, pegue sua caneta e escreva.",
  "Quem olha para fora, sonha; quem olha para dentro, acorda.",
  "Se você pode sonhar, você pode fazer.",
  "Faça o que puder, com o que tiver, onde estiver.",
  "Você é muito poderoso, desde que saiba como você é poderoso.",
  "Aja como se o que você faz, faz a diferença. Porque faz.",
  "Não sei aonde vou, mas já estou no caminho.",
  "Feliz aquele que transfere o que sabe e aprende o que ensina.",
  "Você pode tudo se tiver entusiasmo.",
  "Cada sonho que você deixa para trás é um pedaço do seu futuro que deixa de existir.",
  "A maior aventura que você pode viver é viver a vida dos seus sonhos.",
  "Vença a si mesmo e terá vencido o seu próprio adversário.",

  "Tudo pode dar errado se você tentar. Mas se não fizer nada, tudo ficará igual.",
  "A mãe da frustração é você acreditar que pode realizar seus sonhos sem ser herdeiro.",
  "O meu trabalho dos sonhos seria ganhar para dormir. Enquanto não chego lá, me frustro com todos os outros trabalhos.",
  "O seu problema é estar cansado e continuar dormindo tarde sem vontade de mudar isso.",
  "Aquilo que te desafia, te tira a paciência com a vida.",
  "Abandone antes de tentar e evite maiores frustrações.",
  "Sonhar e se frustrar porque alguém realizou seus sonhos mais rápido que você.",
  "Não tem como subir a ladeira que se transformou a vida com as suas pernas fracas.",
  "Pode ser que seu propósito na vida seja nunca vencer, apenas viver de tentativa.",
  "O importante é acreditar na derrota e talvez se surpreender com a vitória.",
  "Os que não param de lutar estão sempre em busca da sua próxima derrota.",
  "As piores coisas da sua vida podem acontecer se você decidir sair de onde está.",
  "A esperança já te fez fazer coisas doidas e que você se arrependeu. Então, não tenha esperança em nada.",
  "Você não é especial e os outros também não são. Somos todos pessoas normais em busca do fracasso.",
  "O empate é o melhor resultado porque ninguém sai perdendo.",
  "Todos esperam que você falhe. Então, lute até provar que eles estão certos.",
  "Acredite quando falarem que não vai dar certo porque as pessoas são mais inteligentes que você.",
  "Não tenho pressa porque vai dar errado se eu correr ou não. Indo devagar, pelo menos poupo energia.",
  "O caminho não fica mais difícil, você é que fica mais cansado e não aguenta mais.",
  "Nada nunca fica mais fácil. Apenas a dificuldade tem garantia de crescimento.",
  "A frustração me ensinou que fazer nada não gera sofrimento.",
];
function abrirCookie() {
  document.getElementById("img-cookie").src = "opened-cookie.svg";
  document.getElementById("btn-cookie").hidden = false;
  let randoMenssage = mensagens[Math.floor(Math.random() * mensagens.length)];
  document.getElementById("p-msg").innerText = randoMenssage;
  document.getElementById("p-msg").hidden = false;
}
function novoCookie() {
  document.getElementById("img-cookie").src = "fortune-cookie.svg";
  document.getElementById("btn-cookie").hidden = true;
  document.getElementById("p-msg").hidden = true;
  document.getElementById("p-msg").innerText = "";
}
