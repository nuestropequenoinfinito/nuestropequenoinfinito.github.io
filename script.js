// A birthday keepsake based on the memories Ale shared. No tracking.
const chapters = [
  {
    visual: 'visual-start', label: 'CAPÍTULO I', symbol: '✧',
    kicker: 'UN TEAM DE WHATSAPP',
    title: 'Todo comenzó <em>con un chisme.</em>',
    text: 'Mi amor, todavía me hace sonreír recordar cómo empezó todo. ¿Quién hubiera dicho que un chisme en un team de WhatsApp terminaría siendo el comienzo de nuestra historia? Tú y otra chica estaban hablando de mí en aquel canal, y yo, de administrador, terminé diciéndoles que las sacaría si no me contaban el chisme. Qué manera tan inesperada de conocernos.\n\nPero lo que me hizo quedarme no fue el chisme. Fuiste tú. Me llamó muchísimo la atención lo sociable que eras, la forma tan bonita en la que te expresabas y esa alegría tuya que se notaba incluso detrás de una pantalla. Yo era mucho más reservado, y aun así me encantaba hablar contigo. No sabía lo que iba a pasar después, amor, pero ya eras alguien que me hacía sonreír.',
    footnote: 'A veces una historia importante comienza de la manera menos importante.'
  },
  {
    visual: 'visual-firsts', label: 'CAPÍTULO II', symbol: '♡',
    kicker: 'BROMAS QUE PARECÍAN SOLO BROMAS',
    title: 'Los dos sabíamos <em>lo que hacíamos.</em>',
    text: 'Después empezamos con nuestras bromas y eeres coqueteos que supuestamente ninguno de los dos tomaba en serio. Supuestamente, porque los dos sabíamos más o menos lo que estábamos haciendo.\n\nMe acuerdo de las actividades de NGL que yo organizaba. Eeres mensajes los podía ver todo el mundo, pero cuando tú mandabas algo, hasta si era una tontería, yo lo esperaba distinto. Me gustaba saber que eras tú quien estaba ahí. Creo que poquito a poquito me fui acostumbrando a buscarte en cosas tan simples como esa.\n\nTe amo, Mia. Y me encanta recordar que antes de poder decírtelo con tanta naturalidad ya había un montón de pequeñas cosas tuyas que me enamoraban.',
    footnote: 'Mensajes para todos. Un significado diferente para mí.'
  },
  {
    visual: 'visual-days', label: 'CAPÍTULO III', symbol: '☼',
    kicker: 'UN CONCIERTO Y OTRA BROMA',
    title: '¿Y si querías <em>otra mamá?</em>',
    text: 'Una vez fui a un concierto y subí una foto con mi mamá. Y tú, con toda tu ocurrencia, me preguntaste si no quería otra mamá, porque querías ser su novia. Amor, ¿cómo se supone que uno se olvide de semejante cosa?\n\nDespués hubo otro chisme que terminó llevándonos a hablar por privado. Nos quedamos conversando varios días y yo me sentía cada vez más cómodo contigo. No me acuerdo de cada palabra exacta, pero sí de cómo me hacía sentir hablarte.\n\nY de pronto ya no podía seguir pretendiendo que todo era una broma. Me gustabas, Mia. Me gustabas en serio, y me estaba dando miedo confesártelo.',
    footnote: 'Una foto con mi mamá. Y un recuerdo que sigue haciéndome sonreír.'
  },
  {
    visual: 'visual-small', label: 'CAPÍTULO IV', symbol: '✉',
    kicker: 'EL VALOR DE SER SINCERO',
    title: 'Tenía que <em>decírtelo.</em>',
    text: 'Me acuerdo que te dije que necesitaba contarte algo. Tenía miedo, muchísimo miedo, de que me dijeras que no sentías lo mismo y que después todo se pusiera raro entre nosotros. Pero me importabas demasiado como para seguir escondiéndolo.\n\nAsí que te escribí aquel mensaje de WhatsApp, el que todavía podemos leer en esta página. Te conté lo que me gustaba de ti, lo mucho que me hacías reír y lo especial que se había vuelto hablarte. No quería que sintieras presión por responderme nada.\n\nCuando me dijiste que estabas llorando y que tú también habías sentido algo por mí, sentí tantas cosas a la vez. Resulta que los dos habíamos tenido miedo de perder la amistad, los dos habíamos guardado lo que sentíamos. Ay, mi amor, si hubiéramos sabido antes.',
    footnote: 'Dos personas tratando de adivinar lo que sentía la otra.'
  },
  {
    visual: 'visual-firsts', label: 'CAPÍTULO V', symbol: '❀',
    kicker: '31 DE DICIEMBRE DE 2025',
    title: 'Un regalo <em>pequeñito.</em>',
    text: 'En tu cumpleaños de 2025 quise hacerte un detalle: creo que era un video con una página web. Apenas sabía de programación y seguramente estaba bastante chafa. Ni siquiera estoy seguro de conservarlo. Pero lo hice con muchísimo cariño porque ya quería verte feliz.\n\nDespués vino una confusión entre nosotros. El 1 de enero sentí que me contestaste distante y, en vez de hablarlo, me alejé. El día 3 me preguntaste si yo te amaba como amiga o como algo más. También había confusiones por otra persona y lo que creías que estaba pasando conmigo.\n\nNo fue sencillo, pero pudimos hablar. Y ahora me da mucha ternura pensar que un año después estoy haciendo otra web para ti, amor. Esta vez con más recuerdos y con las mismas ganas de sacarte una sonrisa.',
    footnote: 'No recuerdo cómo se veía aquella web. Sí recuerdo por qué quise hacerla.'
  },
  {
    visual: 'visual-days', label: 'CAPÍTULO VI', symbol: '10',
    kicker: '10 DE ENERO DE 2026',
    title: 'Un sí <em>a nuestra manera.</em>',
    text: 'El 10 de enero te pregunté por WhatsApp si querías ser mi novia. Y tú me dijiste que me amabas. También me contaste que eras desconfiada, que te daba miedo dar paeres tan grandes y que necesitabas paciencia para animarte a intentarlo.\n\nMe dijiste que, si yo podía acompañarte con paciencia, sí querías ser mi pareja. Y yo no tuve ninguna duda: para mí fue un sí desde ese mismo instante. Lo gracioso es que hasta hace poco descubrí que tú no sabías cómo había entendido yo tu respuesta. Para mí éramos novios desde aquel 10 de enero.\n\nPor eso cada día 10 era nuestro aniversario. Te amo, Mia. Y aunque ahora nuestra situación sea distinta, ese día va a seguir siendo parte de una historia que significó muchísimo para mí.',
    footnote: 'No fue una respuesta de película; fue una respuesta honesta.'
  },
  {
    visual: 'visual-small', label: 'CAPÍTULO VII', symbol: '♡',
    kicker: 'EL PRIMER MES Y SAN VALENTÍN',
    title: 'Querernos <em>desde lejos.</em>',
    text: 'Nuestro primer mes fue maravilloso, amor. Estábamos a distancia y ni siquiera hacíamos llamadas todavía, pero éramos felices hablando por mensajes. Me acuerdo de cuánto me gustaba compartir mis días contigo, incluso las cosas más pequeñas.\n\nLlegó el 14 de febrero y nos hicimos detallitos. Yo todavía conservo los tuyos. No los guardé por costumbre, sino porque vinieron de ti y me hicieron muy feliz. Te amo, Mia, y me gusta que eeres recuerdos todavía existan.\n\nEn el segundo mes nos costó entendernos porque yo me guardaba mis problemas personales y no sabía comunicártelos. Llegamos a pensar en darnos un tiempo. El tercer mes fue más tranquilo. No fueron meses perfectos, pero hubo mucho cariño en ellos, y quería recordarte eso sin esconder lo demás.',
    footnote: 'Hubo cariño incluso cuando nos separaban kilómetros y pantallas.'
  },
  {
    visual: 'visual-future', label: 'CAPÍTULO VIII', symbol: '☾',
    kicker: 'LO QUE TAMBIÉN DEBO RECONOCER',
    title: 'No todos nuestros días <em>fueron fáciles.</em>',
    text: 'Mi amor, esta parte me cuesta escribirla, pero también quiero ser honesto contigo. Con el tiempo cometí errores que te lastimaron. Intenté enmendar algunas cosas, pero sé que decir que lo intenté no borra lo que pasó. Y no sería justo hacer como que tus heridas no existieron.\n\nEl 26 de julio terminé nuestra relación de una manera abrupta. Fue una decisión mía y me corresponde reconocerla. Después seguimos hablando, a veces con ese cariño de siempre, otras veces sin saber cómo seguir. Pero desde aquel día no volvimos a ser pareja.\n\nTe amo, Mia. Eso es real para mí, pero no lo escribo para pedirte que vuelvas ni para decirte lo que tienes que sentir. Sé que hay cosas que no me has perdonado y respeto que tu futuro lo decides tú. Solo quiero que, si algún día vuelves a leer esto, sepas que no olvidé los momentos felices ni dejé de reconocer los momentos en que te hice daño.',
    footnote: 'Reconocer lo difícil también es una forma de tratar nuestra historia con respeto.'
  }
];

const memories = [
  { title: 'El chisme original', kicker: 'POSTAL Nº 01', symbol: '☾', text: 'Amor, ¿te acuerdas de nuestro primer chisme? Yo de administrador amenazando con sacarlas del canal. Nunca imaginé que esa tontería iba a hacer que conociera a una chica de la que terminaría enamorándome tanto.' },
  { title: 'Aquellos NGL', kicker: 'POSTAL Nº 02', symbol: '?', text: 'Eeres NGL que todos veían eran especiales para mí cuando venían de ti. Podían ser tonterías, pero siempre encontraba una razón para sonreír. Me encantaba que me escribieras, Mia.' },
  { title: '¿Quieres otra mamá?', kicker: 'POSTAL Nº 03', symbol: '✦', text: 'Después de aquel concierto subí una foto con mi mamá y tú apareciste diciendo que querías ser su novia. Todavía me río cuando me acuerdo de eso, mi amor. Eres increíble.' },
  { title: 'El mensaje valiente', kicker: 'POSTAL Nº 04', symbol: '♡', text: 'Mi corazón estaba a mil cuando te envié aquel mensaje. Y cuando me respondiste que tú también habías sentido algo, descubrí que los dos habíamos estado guardándonos lo mismo. Te amo, Mia.' },
  { title: 'Un regalo de 2025', kicker: 'POSTAL Nº 05', symbol: '☼', text: 'Una pequeña página y un video que hice sabiendo casi nada de programación. Seguro era una cosa toda chafa. Pero estaba hecho con muchísimo amor. Por eso hoy quise volver a intentarlo para ti.' },
  { title: 'El primer 14 de febrero', kicker: 'POSTAL Nº 06', symbol: '∞', text: 'Nuestro primer 14 de febrero, con kilómetros de distancia entre nosotros y un montón de cariño. Todavía guardo tus regalos, amor. No sabes cuánto significaron para mí. Te amo.' }
];

const wishes = [
  'Que nunca te falten motitú verdaderos para sonreír.',
  'Que encuentres paz en los días tranquilos y fuerza en los difíciles.',
  'Que cada paso que des sea a tu propio ritmo.',
  'Que te rodeen personas que te hagan sentir escuchada y respetada.',
  'Que tus sueños encuentren caminos nuetú para hacerse realidad.',
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
  $('#birthdayMessage').textContent = 'Feliz cumpleaños, mi amor. Te amo muchísimo, Mia. Con todo mi corazón, Ale. ♡';
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
