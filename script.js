// 자주 수정하는 정보는 여기에서 관리하면 편합니다.
const portfolioConfig = {
  githubUrl: "",
  githubLabel: "GitHub"
};

<<<<<<< Updated upstream
const sectionIds = [
  "intro",
  "core",
  "projects",
  "skills",
  "career",
  "education",
  "certification"
];
=======
const sectionIds = ["intro", "projects", "skills", "career"];
>>>>>>> Stashed changes

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = [
  ...document.querySelectorAll('.site-nav a[href^="#"]')
];
const copyEmailButton = document.getElementById("copy-email");
const githubLink = document.querySelector("[data-github-link]");
const currentYear = document.getElementById("current-year");
const projectExpanders = [...document.querySelectorAll("[data-project-expand]")];

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// GitHub 주소를 넣으면 연락처 버튼이 자동으로 활성화됩니다.
if (githubLink) {
  if (portfolioConfig.githubUrl) {
    githubLink.href = portfolioConfig.githubUrl;
    githubLink.target = "_blank";
    githubLink.rel = "noreferrer";
    githubLink.textContent = portfolioConfig.githubLabel || "GitHub";
    githubLink.classList.remove("is-disabled");
    githubLink.removeAttribute("aria-disabled");
  } else {
    githubLink.setAttribute("aria-disabled", "true");
  }
}

// 모바일 메뉴 토글
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    nav.classList.toggle("is-open", !isExpanded);
  });
}

// 메뉴를 눌렀을 때 모바일 메뉴는 닫히도록 처리합니다.
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!menuToggle || !nav) {
      return;
    }

    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  });
});

// 현재 보고 있는 섹션에 맞춰 메뉴를 강조합니다.
const setActiveNav = (id) => {
  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", isCurrent);
  });
};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visibleEntry) {
      setActiveNav(visibleEntry.target.id);
    }
  },
  {
    rootMargin: "-35% 0px -50% 0px",
    threshold: [0.2, 0.5, 0.8]
  }
);

sectionIds.forEach((id) => {
  const section = document.getElementById(id);
  if (section) {
    sectionObserver.observe(section);
  }
});

// 이메일 복사 버튼
if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    const email = "swdfrgt3701@naver.com";
    const defaultLabel = "이메일 복사";

    try {
      await navigator.clipboard.writeText(email);
      copyEmailButton.textContent = "복사 완료";
    } catch (error) {
      copyEmailButton.textContent = email;
    }

    window.setTimeout(() => {
      copyEmailButton.textContent = defaultLabel;
    }, 1800);
  });
}

// 대표 프로젝트의 추가 설명을 접고 펼치는 버튼
projectExpanders.forEach((expander) => {
  const button = expander.querySelector(".project-expand-button");
  const panel = expander.querySelector(".project-expand-panel");

  if (!button || !panel) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    panel.setAttribute("aria-hidden", String(isOpen));
    expander.classList.toggle("is-open", !isOpen);
  });
});
