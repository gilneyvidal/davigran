const whatsappNumber = "5511996826361";

const defaultMessage =
  "Olá, vim pelo site da Davigran e gostaria de solicitar um orçamento de granilite.";

const services = [
  {
    category: "Pisos em granilite",
    name: "Piso de granilite sob medida",
    description:
      "Execução de piso em granilite para áreas residenciais, comerciais e projetos personalizados.",
    image: "assets/servicos/piso-granilite.jpg"
  },
  {
    category: "Acabamento interno",
    name: "Granilite polido",
    description:
      "Acabamento elegante para ambientes internos, com visual sofisticado e fácil valorização do espaço.",
    image: "assets/servicos/granilite-polido.jpg"
  },
  {
    category: "Área externa",
    name: "Granilite fulgê",
    description:
      "Opção indicada para áreas externas, rampas, calçadas e locais que precisam de acabamento mais aderente.",
    image: "assets/servicos/granilite-fulge.jpg"
  },
  {
    category: "Projetos especiais",
    name: "Bancadas em granilite",
    description:
      "Solução personalizada para bancadas, lavatórios, áreas gourmet e detalhes decorativos.",
    image: "assets/servicos/bancada-granilite.jpg"
  },
  {
    category: "Escadas",
    name: "Escadas em granilite",
    description:
      "Revestimento para escadas com acabamento resistente, durável e visual personalizado.",
    image: "assets/servicos/escada-granilite.jpg"
  },
  {
    category: "Restauração",
    name: "Manutenção e recuperação",
    description:
      "Serviços de recuperação, revitalização e manutenção de superfícies em granilite.",
    image: "assets/servicos/manutencao-granilite.jpg"
  }
];

const galleryItems = [
  {
    title: "Piso em granilite finalizado",
    category: "Pisos",
    image: "assets/servicos/galeria-01.jpg"
  },
  {
    title: "Acabamento polido em ambiente interno",
    category: "Granilite polido",
    image: "assets/servicos/galeria-02.jpg"
  },
  {
    title: "Granilite para área externa",
    category: "Área externa",
    image: "assets/servicos/galeria-03.jpg"
  },
  {
    title: "Detalhe de superfície em granilite",
    category: "Detalhes",
    image: "assets/servicos/galeria-04.jpg"
  },
  {
    title: "Projeto residencial sob medida",
    category: "Residencial",
    image: "assets/servicos/galeria-05.jpg"
  },
  {
    title: "Projeto comercial em granilite",
    category: "Comercial",
    image: "assets/servicos/galeria-06.jpg"
  },
  {
    title: "Escada revestida em granilite",
    category: "Escadas",
    image: "assets/servicos/galeria-07.jpg"
  },
  {
    title: "Bancada personalizada",
    category: "Bancadas",
    image: "assets/servicos/galeria-08.jpg"
  },
  {
    title: "Ambiente com acabamento decorativo",
    category: "Decorativo",
    image: "assets/servicos/galeria-09.jpg"
  },
  {
    title: "Granilite com composição personalizada",
    category: "Sob medida",
    image: "assets/servicos/galeria-10.jpg"
  },
  {
    title: "Piso restaurado em granilite",
    category: "Restauração",
    image: "assets/servicos/galeria-11.jpg"
  },
  {
    title: "Acabamento em área de circulação",
    category: "Pisos",
    image: "assets/servicos/galeria-12.jpg"
  },
  {
    title: "Detalhe de paginação do piso",
    category: "Paginação",
    image: "assets/servicos/galeria-13.jpg"
  },
  {
    title: "Granilite para hall de entrada",
    category: "Ambientes",
    image: "assets/servicos/galeria-14.jpg"
  },
  {
    title: "Projeto com visual moderno",
    category: "Design",
    image: "assets/servicos/galeria-15.jpg"
  },
  {
    title: "Área gourmet com granilite",
    category: "Área gourmet",
    image: "assets/servicos/galeria-16.jpg"
  },
  {
    title: "Superfície personalizada",
    category: "Personalização",
    image: "assets/servicos/galeria-17.jpg"
  },
  {
    title: "Acabamento resistente para uso diário",
    category: "Durabilidade",
    image: "assets/servicos/galeria-18.jpg"
  },
  {
    title: "Obra em andamento",
    category: "Execução",
    image: "assets/servicos/galeria-19.jpg"
  },
  {
    title: "Resultado final de ambiente",
    category: "Finalização",
    image: "assets/servicos/galeria-20.jpg"
  },
  {
    title: "Granilite em ambiente amplo",
    category: "Ambientes amplos",
    image: "assets/servicos/galeria-21.jpg"
  },
  {
    title: "Detalhe de cor e pedra",
    category: "Composição",
    image: "assets/servicos/galeria-22.jpg"
  },
  {
    title: "Acabamento para circulação externa",
    category: "Externo",
    image: "assets/servicos/galeria-23.jpg"
  },
  {
    title: "Granilite aplicado em área social",
    category: "Social",
    image: "assets/servicos/galeria-24.jpg"
  },
  {
    title: "Projeto técnico sob medida",
    category: "Sob medida",
    image: "assets/servicos/galeria-25.jpg"
  },
  {
    title: "Piso com acabamento uniforme",
    category: "Acabamento",
    image: "assets/servicos/galeria-26.jpg"
  },
  {
    title: "Detalhe de borda e canto",
    category: "Detalhamento",
    image: "assets/servicos/galeria-27.jpg"
  },
  {
    title: "Granilite para área comercial",
    category: "Comercial",
    image: "assets/servicos/galeria-28.jpg"
  },
  {
    title: "Ambiente renovado com granilite",
    category: "Renovação",
    image: "assets/servicos/galeria-29.jpg"
  },
  {
    title: "Inspiração para novo projeto",
    category: "Inspiração",
    image: "assets/servicos/galeria-30.jpg"
  }
];

let currentGalleryIndex = 0;

function createWhatsappLink(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}

function renderServices() {
  const servicesGrid = document.getElementById("servicesGrid");

  if (!servicesGrid) {
    return;
  }

  servicesGrid.innerHTML = "";

  services.forEach((service) => {
    const card = document.createElement("article");
    card.className = "service-card";

    const message = `Olá, vim pelo site da Davigran e gostaria de solicitar um orçamento para: ${service.name}.`;

    card.innerHTML = `
      <div class="service-image">
        <img src="${service.image}" alt="${service.name}" />
      </div>

      <div class="service-content">
        <span class="service-category">${service.category}</span>
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <a href="${createWhatsappLink(message)}" class="btn btn-primary" target="_blank" rel="noopener">
          Solicitar orçamento
        </a>
      </div>
    `;

    servicesGrid.appendChild(card);
  });
}

function renderGallery() {
  const galleryGrid = document.getElementById("galleryGrid");

  if (!galleryGrid) {
    return;
  }

  galleryGrid.innerHTML = "";

  galleryItems.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "gallery-item";
    button.type = "button";
    button.setAttribute("aria-label", `Abrir imagem: ${item.title}`);

    button.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="gallery-item-info">
        <strong>${item.title}</strong>
        <span>${item.category}</span>
      </div>
    `;

    button.addEventListener("click", () => {
      openLightbox(index);
    });

    galleryGrid.appendChild(button);
  });
}

function setupWhatsappButtons() {
  const whatsappButtons = document.querySelectorAll("[data-whatsapp]");

  whatsappButtons.forEach((button) => {
    button.setAttribute("href", createWhatsappLink(defaultMessage));
    button.setAttribute("target", "_blank");
    button.setAttribute("rel", "noopener");
  });
}

function openLightbox(index) {
  currentGalleryIndex = index;

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxCategory = document.getElementById("lightboxCategory");

  if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxCategory) {
    return;
  }

  const currentItem = galleryItems[currentGalleryIndex];

  lightboxImage.src = currentItem.image;
  lightboxImage.alt = currentItem.title;
  lightboxTitle.textContent = currentItem.title;
  lightboxCategory.textContent = currentItem.category;

  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");

  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
}

function showPreviousImage() {
  currentGalleryIndex =
    currentGalleryIndex === 0 ? galleryItems.length - 1 : currentGalleryIndex - 1;

  openLightbox(currentGalleryIndex);
}

function showNextImage() {
  currentGalleryIndex =
    currentGalleryIndex === galleryItems.length - 1 ? 0 : currentGalleryIndex + 1;

  openLightbox(currentGalleryIndex);
}

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", showPreviousImage);
  }

  if (lightboxNext) {
    lightboxNext.addEventListener("click", showNextImage);
  }

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    const isLightboxOpen = document.body.classList.contains("lightbox-open");

    if (!isLightboxOpen) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      showPreviousImage();
    }

    if (event.key === "ArrowRight") {
      showNextImage();
    }
  });
}

renderServices();
renderGallery();
setupWhatsappButtons();
setupLightbox();