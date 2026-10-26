// A deliberately editable first draft. Replace the poetic placeholder text
// with real memories, dates, places and photos before gifting this page.
const chapters = [
  {
    visual: 'visual-start', label: 'CAPÍTULO I', symbol: '✧',
    kicker: 'EL INICIO DE TODO',
    title: 'Y pensar que todo <em>empezó en algún lugar…</em>',
    text: 'A veces me pregunto si en ese primer instante teníamos idea de la historia que nos esperaba. Me gusta pensar que no. Que lo más bonito fue ir descubriéndolo, día tras día, sin conocer todavía todos los recuerdos que íbamos a guardar.',
    footnote: 'Hay comienzos que se vuelven nuestro lugar favorito.'
  },
  {
    visual: 'visual-firsts', label: 'CAPÍTULO II', symbol: '♡',
    kicker: 'LOS PRIMEROS RECUERDOS',
    title: 'Todas esas primeras veces <em>que se sienten únicas.</em>',
    text: 'Las primeras conversaciones, las primeras risas y esa sensación tan bonita de ir conociendo a alguien un poquito más. Hay momentos que no se repiten exactamente igual, y tal vez por eso los guardamos con tanto cariño.',
    footnote: 'Todo lo que hoy es un recuerdo, una vez fue una primera vez.'
  },
  {
    visual: 'visual-days', label: 'CAPÍTULO III', symbol: '☼',
    kicker: 'NUESTROS DÍAS FAVORITOS',
    title: 'Los días que ojalá <em>duraran un poco más.</em>',
    text: 'Si pudiéramos guardar ciertos días dentro de una cajita, seguro abriríamos esa caja muchas veces. Algunos por lo que hicimos. Otros por cómo nos sentimos. Todos porque, de alguna manera, terminaron siendo nuestros.',
    footnote: 'Un día bonito también puede durar toda una vida en la memoria.'
  },
  {
    visual: 'visual-small', label: 'CAPÍTULO IV', symbol: '❀',
    kicker: 'LA MAGIA DE LO COTIDIANO',
    title: 'La felicidad se esconde <em>en los detalles.</em>',
    text: 'No todo lo importante tiene una fecha especial o una foto perfecta. A veces basta una palabra a tiempo, una risa que aparece de la nada o un instante tranquilo. Son esas cositas las que hacen que una historia se sienta de verdad.',
    footnote: 'Que nunca se nos olvide lo bonito de lo sencillo.'
  },
  {
    visual: 'visual-future', label: 'CAPÍTULO V', symbol: '∞',
    kicker: 'TODO LO QUE AÚN NOS ESPERA',
    title: 'Todavía quedan páginas <em>por escribir.</em>',
    text: 'Este sitio mira hacia atrás con cariño, pero también hacia adelante con ilusión. A los lugares que todavía no conocemos, las historias que aún no contamos y a todos esos días que algún día miraremos como hoy miramos este año.',
    footnote: 'Lo más bonito de una historia es que puede seguir creciendo.'
  }
];

const memories = [
  { title: 'Donde comenzó todo', kicker: 'POSTAL Nº 01', symbol: '☾', text: 'Para guardar el verdadero inicio de nuestra historia: dónde nos conocimos, cómo fue aquella primera conversación y qué sentimos sin saber todavía lo importante que sería después.' },
  { title: 'Una sonrisa para guardar', kicker: 'POSTAL Nº 02', symbol: '✿', text: 'Un espacio para esa primera foto favorita, una broma que todavía nos hace reír o un recuerdo que nos ilumina incluso en un día complicado.' },
  { title: 'Un día que fue nuestro', kicker: 'POSTAL Nº 03', symbol: '✦', text: 'Aquí vivirá una salida, una aventura, un lugar especial o uno de esos días que siempre nos gusta volver a contar.' },
  { title: 'Las cosas más simples', kicker: 'POSTAL Nº 04', symbol: '♡', text: 'Para recordar que a veces los mejores momentos no necesitan ningún plan. Solo la compañía correcta y ganas de estar ahí.' },
  { title: 'Un recuerdo inesperado', kicker: 'POSTAL Nº 05', symbol: '☼', text: 'Para esa sorpresa, coincidencia o instante inesperado que terminó convirtiéndose en una de nuestras historias favoritas.' },
  { title: 'Y todos los que faltan', kicker: 'POSTAL Nº 06', symbol: '∞', text: 'La última postal está abierta a todo lo que todavía no hemos vivido. Porque, si algo deseo, es que sigamos teniendo recuerdos para llenar muchísimas páginas más.' }
];

const wishes = [
  'Que nunca te falten motivos para sonreír.',
  'Que la vida te sorprenda con cosas tan bonitas como tu corazón.',
  'Que todos tus sueños encuentren un camino para hacerse realidad.',
  'Que siempre recuerdes lo muchísimo que vales.',
  'Que tus días estén llenos de paz, risas y abrazos sinceros.',
  'Que el mundo te devuelva toda la luz que tú le regalas.',
  'Que tengas miles de momentos que merezcan convertirse en recuerdos.',
  'Que cada cumpleaños sea el principio de algo precioso.'
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
  $('#birthdayMessage').textContent = 'Que tengas un cumpleaños tan hermoso como tú. ♡';
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
