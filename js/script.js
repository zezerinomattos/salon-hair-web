"use strict";

// Service content and illustrative assets.
const services = [
  [
    "Mega hair",
    "Mais comprimento. Mais volume. Mais você.",
    "Valorize seu visual com extensões capilares e uma proposta de comprimento e volume pensada para você.",
    "Deseja cabelos mais longos ou mais volume? A escolha do mega hair começa pela avaliação dos seus fios e do resultado que você procura. Na consulta, converse sobre os métodos disponíveis, a combinação de cor e textura, a manutenção e os cuidados em casa. Entender essas etapas ajuda você a escolher com confiança e planejar seu novo visual.",
  ],
  [
    "Loiros",
    "Luminosidade que valoriza sua identidade.",
    "Explore nuances e pontos de luz que combinam com seu estilo, com atenção ao histórico e às necessidades dos seus fios.",
    "Um loiro personalizado envolve mais do que escolher uma tonalidade. A cor atual, o histórico de química e a condição dos fios ajudam a definir as possibilidades de clareamento. Compartilhe suas referências e converse sobre nuances, técnicas disponíveis, necessidade de teste de mecha e manutenção. A proposta é planejar a transformação com expectativas claras, respeitando os limites do cabelo.",
  ],
  [
    "Coloração",
    "Sua personalidade, em uma nova cor.",
    "Renove o tom, explore uma mudança ou converse sobre cobertura de brancos com orientação para o seu cabelo.",
    "Uma mudança de cor começa com uma boa conversa sobre o que você deseja: renovar a tonalidade, transformar o visual ou cobrir fios brancos. O histórico de coloração e outros procedimentos influencia o planejamento. Na avaliação, esclareça as possibilidades de tom, a necessidade de testes, a frequência de retoque e os cuidados para preservar a cor entre os atendimentos.",
  ],
  [
    "Progressiva e alisamento",
    "Seu cabelo, com o alinhamento que você procura.",
    "Conheça as opções para reduzir o volume e alinhar os fios, com avaliação do histórico químico e da compatibilidade.",
    "Antes de escolher um procedimento de alinhamento ou alisamento, é importante considerar a textura dos fios, as químicas anteriores e o efeito desejado. Na consulta, pergunte sobre os produtos utilizados, a indicação para o seu cabelo, o teste de mecha e os cuidados após o atendimento. O planejamento permite alinhar suas expectativas às possibilidades reais do procedimento.",
  ],
  [
    "Hidratação e tratamentos",
    "O cuidado certo começa por entender seus fios.",
    "Ressecamento, frizz ou aparência fragilizada? Conheça possibilidades de cuidado para as necessidades do seu cabelo.",
    "Nem todo cabelo precisa do mesmo tratamento. Ressecamento, porosidade, quebra e histórico químico são pontos que ajudam a orientar a escolha dos cuidados. Converse sobre as opções de hidratação, nutrição e reconstrução disponíveis no salão, além da frequência indicada e da rotina em casa. Um plano de cuidado faz mais sentido quando considera o estado atual dos fios e seus hábitos.",
  ],
  [
    "Bronzeamento artificial",
    "Seu próximo verão começa no planejamento.",
    "Conheça as modalidades e os pacotes disponíveis e tire suas dúvidas antes de escolher seu atendimento.",
    "Quer incluir o bronze no seu planejamento de verão? Antes de contratar um pacote, consulte o método utilizado, as condições de atendimento, as contraindicações e os cuidados necessários. Pergunte também sobre quantidade de sessões, intervalos, valores e validade do pacote. Essas informações ajudam você a avaliar a proposta com clareza, sem depender de promessas de resultado.",
  ],
];

const photoFiles = [
  "comprimento.png",
  "blonde.png",
  "color.png",
  "brunette.png",
  "treatment.png",
  "bronze.png",
  "interior.png",
  "hero.png",
];

function art(n = 0) {
  return `<img class="photo-fill" src="assets/${photoFiles[n % photoFiles.length]}" alt="Fotografia ilustrativa de ${["cabelo longo", "cabelo loiro", "cabelo castanho", "cabelo alinhado", "atendimento capilar", "ambiente de salão"][n % 6]} — banco de imagens" loading="${n === 0 ? "eager" : "lazy"}" decoding="async">`;
}

// Render hero and service cards.
document.querySelector(".hair-art").insertAdjacentHTML(
  "afterbegin",
  `<img
    class="photo-fill"
    src="assets/hero.png"
    alt="Imagem principal do SALON HAIR"
    loading="eager"
    decoding="async"
  >`
);
document.getElementById("service-grid").innerHTML = services
  .map(
    (s, i) =>
      `<article class="service"><div class="art service-art">${art(i)}</div><small>0${i + 1} / ${s[0].toUpperCase()}</small><h3 class="service-title">${s[1]}</h3><p>${s[2]}</p><div class="service-links"><button class="text-link" data-service="${i}">Saiba mais ↗</button><button class="text-link" data-consult="${i}">Consultar →</button></div></article>`,
  )
  .join("");

// Render the gallery.
const labels = [
  "Movimento & volume",
  "Loiros & luminosidade",
  "Cor & identidade",
];

const galleryElement = document.getElementById("gallery");

if (galleryElement) {
  galleryElement.innerHTML = labels
    .map(
      (label, index) => `
        <button
          type="button"
          class="art"
          data-gallery="${index}"
          aria-label="Ampliar imagem: ${label}"
        >
          ${art(index)}
          <span class="art-label">${label} ↗</span>
        </button>
      `,
    )
    .join("");
}

// Shared dialog and contact interactions.
const modal = document.getElementById("modal"),
  content = document.getElementById("modal-content");
function show(html) {
  content.innerHTML = html;
  modal.showModal();
}

function contact() {
  show(`
    <span class="eyebrow">Seu momento de beleza começa aqui</span>

    <h2>Vamos dar vida ao seu próximo visual?</h2>

    <p>
      Conte o que você deseja, tire suas dúvidas e consulte
      os horários disponíveis. Vamos encontrar o melhor
      momento para cuidar de você.
    </p>

    <p class="dialog-note">
      Quer se inspirar primeiro? Conheça nossos trabalhos
      e acompanhe o salão no Instagram.
    </p>

    <div class="actions">
      <a
        class="btn"
        href="https://wa.me/5551999299471"
        target="_blank"
        rel="noopener noreferrer"
      >
        Quero agendar meu momento ↗
      </a>

      <a
        class="text-link"
        href="https://www.instagram.com/larissatauimer_salon/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver trabalhos no Instagram ↗
      </a>
    </div>
  `);
}

document
  .querySelectorAll("[data-contact]")
  .forEach((b) => (b.onclick = contact));

document.querySelectorAll("[data-service]").forEach((button) => {
  button.onclick = () => {
    const service = services[Number(button.dataset.service)];

    show(`
      <span class="eyebrow">${service[0]}</span>

      <h2>${service[1]}</h2>

      <p>${service[3]}</p>

      <p class="dialog-note">
        Quer entender as possibilidades para você?
        Fale com Larissa, tire suas dúvidas e consulte
        valores e horários disponíveis.
      </p>

      <div class="actions">
        <a
          class="btn"
          href="https://wa.me/5551999299471"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conversar sobre ${service[0]} ↗
        </a>
      </div>
    `);
  };
});

document.querySelectorAll("[data-consult]").forEach(
  (b) =>
    (b.onclick = () => {
      contact();
    }),
);

// Gallery navigation.
function gallery(i) {
  show(
    `<span class="eyebrow">Nosso trabalho ${i + 1} / 3</span><h3>${labels[i]}</h3><div class="art modal-art">${art(i)}</div><div class="dialog-actions"><button class="text-link" id="prev">← Anterior</button><button class="text-link" id="next">Próxima →</button></div>`,
  );
  document.getElementById("prev").onclick = () => gallery((i + 2) % 3);
  document.getElementById("next").onclick = () => gallery((i + 1) % 3);
}
document
  .querySelectorAll("[data-gallery]")
  .forEach((b) => (b.onclick = () => gallery(+b.dataset.gallery)));
document.querySelector(".dialog-close").onclick = () => modal.close();
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    const r = modal.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      modal.close();
  }
});

// Mobile navigation.
const menu = document.querySelector(".menu");
menu.onclick = () => {
  const open = document.getElementById("nav").classList.toggle("open");
  menu.setAttribute("aria-expanded", open);
  menu.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  menu.textContent = open ? "×" : "☰";
};
document.querySelectorAll("nav a").forEach(
  (a) =>
    (a.onclick = () => {
      document.getElementById("nav").classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.textContent = "☰";
    }),
);

// Carrossel de depoimentos.
(() => {
  const track = document.getElementById("testimonials-track");
  const previous = document.getElementById("testimonials-prev");
  const next = document.getElementById("testimonials-next");
  const navigation = document.querySelector(".testimonials-navigation");

  if (!track || !previous || !next || !navigation) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  function updateControls() {
    const maxScroll = Math.max(
      0,
      track.scrollWidth - track.clientWidth
    );

    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= maxScroll - 2;
  }

  function moveCarousel(direction) {
    const card = track.querySelector(".testimonial-card");

    if (!card) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = card.getBoundingClientRect().width + gap;

    track.scrollBy({
      left: direction * distance,
      behavior: reducedMotion.matches ? "instant" : "smooth",
    });
  }

  previous.addEventListener("click", () => moveCarousel(-1));
  next.addEventListener("click", () => moveCarousel(1));

  track.addEventListener("scroll", updateControls, {
    passive: true,
  });

  track.addEventListener("keydown", (event) => {
    if (event.target !== track) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveCarousel(1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveCarousel(-1);
    }
  });

  window.addEventListener("resize", updateControls);
  window.addEventListener("load", updateControls, { once: true });

  navigation.hidden = false;
  updateControls();
})();