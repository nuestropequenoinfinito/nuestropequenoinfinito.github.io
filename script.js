// A birthday keepsake based on the memories Cristopher shared. No tracking.
const chapters = [
  {
    visual: 'visual-start', label: 'CAPÍTULO I', symbol: '✧',
    kicker: 'UN TEAM DE WHATSAPP',
    title: 'Todo comenzó <em>con un chisme.</em>',
    text: 'No sé si hay una manera más inesperada de conocer a alguien. En un canal de aquel team de WhatsApp, tú y otra integrante estaban hablando de un chisme relacionado conmigo. Yo terminé diciendo que las sacaría de ese canal si no me contaban qué pasaba. Al final, me lo dijeron.\n\nNo hubo una presentación elegante ni un momento de película. Solo una situación extraña, un poco absurda, que terminó conectando nuestras vidas.\n\nLo que me hizo fijarme en ti después no fue aquel chisme. Fue descubrir lo sociable que eras, lo bien que te expresabas, esa alegría y esa manera tuya de llenar de vida cualquier conversación. Eras tan distinta a mí que nuestra forma de llevarnos se sentía especial.',
    footnote: 'A veces una historia importante comienza de la manera menos importante.'
  },
  {
    visual: 'visual-firsts', label: 'CAPÍTULO II', symbol: '♡',
    kicker: 'BROMAS QUE PARECÍAN SOLO BROMAS',
    title: 'Los dos sabíamos <em>lo que hacíamos.</em>',
    text: 'Después empezamos a bromear mucho. Hasta había cierto coqueteo que ninguno de los dos tomaba demasiado en serio… al menos eso decíamos. En el fondo, creo que ambos entendíamos que algo se escondía detrás de tantas bromas.\n\nCuando yo organizaba las actividades de NGL, me gustaba muchísimo recibir lo que tú mandabas. A veces eran mensajes sin sentido, pero para mí tenían algo especial. Aunque fueran para que los viera todo el grupo, yo siempre encontraba una razón para sonreír con los tuyos.\n\nMe gustaba lo natural que era hablar contigo. Sin tener que preparar nada, una simple tontería podía hacer que el día se sintiera distinto.',
    footnote: 'Mensajes para todos. Un significado diferente para mí.'
  },
  {
    visual: 'visual-days', label: 'CAPÍTULO III', symbol: '☼',
    kicker: 'UN CONCIERTO Y OTRA BROMA',
    title: '¿Y si querías <em>otra mamá?</em>',
    text: 'Una vez fui a un concierto y subí una foto con mi mamá. Tú respondiste preguntándome si no quería otra mamá, bromeando con que querías ser la novia de ella. Esa clase de ocurrencias tuyas todavía me hacen reír cuando las recuerdo.\n\nNo tengo perfectamente ordenadas todas nuestras primeras conversaciones privadas. Recuerdo que otro chisme nos llevó a hablar a solas. Después seguimos conversando durante varios días.\n\nY entre esas conversaciones empecé a darme cuenta de que no podía seguir fingiendo que todo era solo una amistad cualquiera. Había cosas que necesitaba decirte.',
    footnote: 'Una foto con mi mamá. Y un recuerdo que sigue haciéndome sonreír.'
  },
  {
    visual: 'visual-small', label: 'CAPÍTULO IV', symbol: '✉',
    kicker: 'EL VALOR DE SER SINCERO',
    title: 'Tenía que <em>decírtelo.</em>',
    text: 'No creía que fueras a corresponderme. Pero lo que sentía ya era demasiado importante como para guardármelo. Te dije que necesitaba contarte algo y te envié un mensaje sincero, sin exigirte ninguna respuesta.\n\nTe hablé de tu forma de ser, de cómo me hacías reír, de lo mucho que valoraba nuestras conversaciones y de que, pasara lo que pasara, mi aprecio por ti no iba a cambiar.\n\nTu respuesta me sorprendió. Estabas llorando. Me contaste que también habías sentido algo y que pensabas que yo solo te veía como amiga. Durante un tiempo, los dos habíamos tenido miedo de algo parecido sin saberlo.',
    footnote: 'Dos personas tratando de adivinar lo que sentía la otra.'
  },
  {
    visual: 'visual-firsts', label: 'CAPÍTULO V', symbol: '❀',
    kicker: '31 DE DICIEMBRE DE 2025',
    title: 'Un regalo <em>pequeñito.</em>',
    text: 'Para tu cumpleaños de 2025 te preparé un pequeño regalo. Creo que fue un video acompañado de una página web. Yo apenas sabía programar y seguramente no era una maravilla técnica; ni siquiera sé si todavía tengo ese archivo.\n\nLo que sí recuerdo son las ganas de hacerte un detalle. Todavía no éramos novios oficialmente y, aunque creí que todo iba bien, al día siguiente sentí una respuesta distante. En vez de hablarlo, dejé de escribirte.\n\nEl 3 de enero me preguntaste si te quería como amiga o como algo más. Hablamos de confusiones sobre nuestra situación sentimental y de cosas que habíamos interpretado de maneras distintas. Esa conversación nos ayudó a entendernos un poco mejor.',
    footnote: 'No recuerdo cómo se veía aquella web. Sí recuerdo por qué quise hacerla.'
  },
  {
    visual: 'visual-days', label: 'CAPÍTULO VI', symbol: '10',
    kicker: '10 DE ENERO DE 2026',
    title: 'Un sí <em>a nuestra manera.</em>',
    text: 'El 10 de enero te pregunté por WhatsApp si querías ser mi novia. Me dijiste que me amabas, pero también me hablaste con sinceridad de tus miedos: confiar te costaba y dar un paso tan grande no era sencillo para ti.\n\nMe contaste que, si podía acompañarte con paciencia, querías ser mi pareja. Yo entendí esas palabras como un sí desde el primer momento.\n\nLo curioso es que hasta hace poco descubrí que tú todavía te preguntabas si yo lo había entendido así. Para mí, aquel 10 de enero había sido nuestra fecha desde el inicio. Cada día 10 se convirtió en un pequeño aniversario nuestro.',
    footnote: 'No fue una respuesta de película; fue una respuesta honesta.'
  },
  {
    visual: 'visual-small', label: 'CAPÍTULO VII', symbol: '♡',
    kicker: 'EL PRIMER MES Y SAN VALENTÍN',
    title: 'Querernos <em>desde lejos.</em>',
    text: 'Éramos una relación a distancia. Al principio ni siquiera hacíamos llamadas, pero eso no impidió que el primer mes se sintiera maravilloso. Nuestros mensajes alcanzaban para construir una felicidad muy nuestra.\n\nLlegó el 14 de febrero y nos hicimos detalles. Yo todavía conservo los tuyos. Me gusta pensar en ese día como una muestra de que las cosas hechas con cariño pueden quedarse con uno mucho después de que el calendario haya cambiado.\n\nEn el segundo mes aparecieron problemas. Me costaba comunicarte mis asuntos personales y llegamos a pensar en darnos un tiempo. El tercero fue más tranquilo. No todo era fácil, pero también existieron días suaves que quiero recordar con gratitud.',
    footnote: 'Hubo cariño incluso cuando nos separaban kilómetros y pantallas.'
  },
  {
    visual: 'visual-future', label: 'CAPÍTULO VIII', symbol: '☾',
    kicker: 'LO QUE TAMBIÉN DEBO RECONOCER',
    title: 'No todos nuestros días <em>fueron fáciles.</em>',
    text: 'Con el tiempo cometí errores que te hicieron daño. Traté de enmendarlos, pero sé que intentarlo no significa haber reparado lo que ocurrió. También me faltó hablar con más claridad cuando tenía problemas propios.\n\nEl 26 de julio terminé la relación abruptamente. Desde entonces hemos seguido hablando y a veces tratándonos con cariño, pero no hemos vuelto a ser pareja. Hemos tenido conversaciones difíciles, incluso sobre dejar de hablarnos y seguir caminos separados.\n\nEntiendo que hay heridas que no han sanado y que no me corresponde pedirte que cambies lo que sientes. No quiero discutir tus decisiones desde estas páginas. Quiero reconocer lo sucedido y agradecer lo que fue bonito sin convertir este regalo en una petición de volver.',
    footnote: 'Reconocer lo difícil también es una forma de tratar nuestra historia con respeto.'
  }
];

const memories = [
  { title: 'El chisme original', kicker: 'POSTAL Nº 01', symbol: '☾', text: 'En un canal de aquel team de WhatsApp, un chisme sobre mí terminó siendo el comienzo más inesperado posible. Qué curioso pensar que algo así hizo que empezáramos a conocernos.' },
  { title: 'Aquellos NGL', kicker: 'POSTAL Nº 02', symbol: '?', text: 'Cuando yo organizaba actividades de NGL, esperaba con una sonrisa lo que tú mandabas. Aunque fuera una tontería para que la viera todo el grupo, para mí tenía algo especial porque venía de ti.' },
  { title: '¿Quieres otra mamá?', kicker: 'POSTAL Nº 03', symbol: '✦', text: 'Aquella foto que subí con mi mamá después de ir a un concierto, y tú bromeando con que querías ser su novia. De todas las cosas que podían pasar, esa fue una de las más divertidas.' },
  { title: 'El mensaje valiente', kicker: 'POSTAL Nº 04', symbol: '♡', text: 'No estaba seguro de que sintieras lo mismo. Me confesé porque necesitaba ser honesto. Y cuando me contaste que tú también habías sentido algo, descubrí que durante un tiempo los dos habíamos guardado sentimientos parecidos.' },
  { title: 'Un regalo de 2025', kicker: 'POSTAL Nº 05', symbol: '☼', text: 'Un video, quizá una pequeña web, hecha con lo poquito que yo sabía de programación. No conservo el regalo original, pero sí recuerdo las ganas que tenía de hacerte sonreír en tu cumpleaños.' },
  { title: 'El primer 14 de febrero', kicker: 'POSTAL Nº 06', symbol: '∞', text: 'Nuestro primer San Valentín siendo pareja a distancia. Nos hicimos detalles y todavía guardo los tuyos. Me gusta saber que algunos recuerdos también se pueden sostener con las manos.' }
];

const wishes = [
  'Que nunca te falten motivos verdaderos para sonreír.',
  'Que encuentres paz en los días tranquilos y fuerza en los difíciles.',
  'Que cada paso que des sea a tu propio ritmo.',
  'Que te rodeen personas que te hagan sentir escuchada y respetada.',
  'Que tus sueños encuentren caminos nuevos para hacerse realidad.',
  'Que conserves esa alegría tan tuya que ilumina las conversaciones.',
  'Que te sorprendan cosas bonitas que hoy ni siquiera imaginas.',
  'Que recuerdes siempre lo valiosa que eres, por ti misma.',
  'Que este nuevo año de vida te traiga calma, aventuras y muchas risas.'
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function setChapter(index) {
  const chapter = chapters[index];
  if (!chapter) return;
  const visual = $('#chapterVisual');
  visual.className = `chapter-visual ${chapter.visual}`;
  $('#chapterVisualLabel').textContent = chapter.label;
  $('#chapterSymbol').textContent = chapter.symbol;
  $('#chapterKicker').textContent = chapter.kicker;
  $('#chapterTitle').innerHTML = chapter.title;
  $('#chapterText').textContent = chapter.text;
  $('#chapterFootnote').textContent = chapter.footnote;
  $$('.chapter-tab').forEach((tab, tabIndex) => {
    tab.classList.toggle('active', tabIndex === index);
    tab.setAttribute('aria-selected', String(tabIndex === index));
    tab.tabIndex = tabIndex === index ? 0 : -1;
  });
}

$$('.chapter-tab').forEach((tab, index) => {
  tab.addEventListener('click', () => setChapter(index));
  tab.addEventListener('keydown', (event) => {
    const movement = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 0;
    if (!movement) return;
    event.preventDefault();
    const nextIndex = (index + movement + chapters.length) % chapters.length;
    setChapter(nextIndex);
    $$('.chapter-tab')[nextIndex].focus();
  });
});
setChapter(0);

function bindRevealToggle(buttonId, contentId, expandedLabel, collapsedLabel) {
  const button = $(`#${buttonId}`);
  const content = $(`#${contentId}`);
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    content.hidden = !open;
    button.firstChild.textContent = open ? expandedLabel : collapsedLabel;
    button.querySelector('span').textContent = open ? '−' : '＋';
  });
}
bindRevealToggle('confessionToggle', 'confessionReveal', 'Cerrar mi confesión ', 'Leer mi confesión ');
bindRevealToggle('replyToggle', 'replyReveal', 'Cerrar el recuerdo ', 'Recordar tu respuesta ');

const dialog = $('#memoryDialog');
$$('[data-memory]').forEach((card) => {
  card.addEventListener('click', () => {
    const memory = memories[Number(card.dataset.memory)];
    if (!memory) return;
    $('#dialogArt').textContent = memory.symbol;
    $('#dialogTitle').textContent = memory.title;
    $('#dialogKicker').textContent = memory.kicker;
    $('#dialogText').textContent = memory.text;
    dialog.showModal();
  });
});
$('#closeDialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

let wishIndex = -1;
$('#wishButton').addEventListener('click', () => {
  const result = $('#wishResult');
  let next = Math.floor(Math.random() * wishes.length);
  if (next === wishIndex) next = (next + 1) % wishes.length;
  wishIndex = next;
  result.classList.add('is-changing');
  window.setTimeout(() => {
    result.textContent = wishes[next];
    result.classList.remove('is-changing');
  }, 190);
});

$('#birthdayButton').addEventListener('click', () => {
  $('#birthdayMessage').textContent = 'Que la vida te trate bonito, Mia. Feliz cumpleaños. ♡';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const layer = $('#confettiLayer');
  const colors = ['#e8b987', '#c7808c', '#f2dbb3', '#bca1c5', '#e6a4a9', '#fff0d8'];
  for (let i = 0; i < 105; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.setProperty('--left', `${Math.random() * 100}%`);
    piece.style.setProperty('--drift', `${(Math.random() - .5) * 330}px`);
    piece.style.setProperty('--rotation', `${Math.random() * 360}deg`);
    piece.style.setProperty('--fall-duration', `${3 + Math.random() * 2.4}s`);
    piece.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
    piece.style.animationDelay = `${Math.random() * 1.2}s`;
    layer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 6500);
  }
});

function updateScroll() {
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  const percentage = scrollable > 0 ? Math.min(100, Math.max(0, scrollY / scrollable * 100)) : 0;
  $('#progressFill').style.width = `${percentage}%`;
  $('#topbar').classList.toggle('is-sticky', scrollY > 90);
}
addEventListener('scroll', updateScroll, { passive: true });
addEventListener('resize', updateScroll);
updateScroll();

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .09, rootMargin: '0px 0px -18px 0px' });
  $$('.reveal').forEach((element) => observer.observe(element));
} else {
  $$('.reveal').forEach((element) => element.classList.add('is-visible'));
}
