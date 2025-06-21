document.addEventListener("DOMContentLoaded", () => {
  // --- CONTAGEM DE TEMPO ---
  const dataInicial = new Date(2024, 11, 23, 0, 0, 0); // 23/12/2024 00:00

  function atualizarTempo() {
    const agora = new Date();

    let anos = agora.getFullYear() - dataInicial.getFullYear();
    let meses = agora.getMonth() - dataInicial.getMonth();
    let dias = agora.getDate() - dataInicial.getDate();
    let horas = agora.getHours() - dataInicial.getHours();
    let minutos = agora.getMinutes() - dataInicial.getMinutes();
    let segundos = agora.getSeconds() - dataInicial.getSeconds();

    if (segundos < 0) { segundos += 60; minutos--; }
    if (minutos < 0) { minutos += 60; horas--; }
    if (horas < 0) { horas += 24; dias--; }
    if (dias < 0) {
      const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
      dias += ultimoMes.getDate();
      meses--;
    }
    if (meses < 0) { meses += 12; anos--; }

    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;

    if (document.getElementById('fraseAmor')) {
      let frase = '';
      if (anos >= 1) {
        frase += `${anos} ano${anos > 1 ? 's' : ''}, `;
      }
      frase += `${meses} mes${meses !== 1 ? 'es' : ''}, `;
      frase += `${dias} dia${dias !== 1 ? 's' : ''}, `;
      frase += `${horas} hora${horas !== 1 ? 's' : ''}, `;
      frase += `${minutos} minuto${minutos !== 1 ? 's' : ''} e `;
      frase += `${segundos} segundo${segundos !== 1 ? 's' : ''} de amor e companheirismo`;

      document.getElementById('fraseAmor').textContent = frase;
    }
  }

  atualizarTempo();
  setInterval(atualizarTempo, 1000);

  // --- SLIDESHOW ---
  const fotos = [
    '../img/L1.jpg',
    '../img/P1.png',
    '../img/PL1.png',
    '../img/L2.png',
    '../img/P2.png',
    '../img/PL2.png',
    '../img/L3.png',
    '../img/P3.jpg',
    '../img/PL3.png'
  ];

  let index = 0;
  const fotoAtual = document.getElementById('fotoAtual');

  function mostrarFoto(i) {
    fotoAtual.src = fotos[i];
  }

  let intervalo = setInterval(() => {
    index = (index + 1) % fotos.length;
    mostrarFoto(index);
  }, 5000);

  document.getElementById('btnAnterior').addEventListener('click', () => {
    clearInterval(intervalo);
    index = (index - 1 + fotos.length) % fotos.length;
    mostrarFoto(index);
  });

  document.getElementById('btnProximo').addEventListener('click', () => {
    clearInterval(intervalo);
    index = (index + 1) % fotos.length;
    mostrarFoto(index);
  });
})
