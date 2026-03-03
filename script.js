const EMAILJS_CONFIG = {
  publicKey: "MB_38F98BgPeGvf6-",
  serviceId: "service_rtliwtq",
  templateId: "template_bgsn3gt",
  captcha: {
    provider: "turnstile",
    siteKey: "",
    strict: false
  },
  minSubmitIntervalMs: 45000
};

const TRANSLATIONS = {
  en: {
    page_title: "EVENTI - Your Event Buddy",
    lang_button: "AR",
    tagline: "YOUR EVENT BUDDY",
    nav_home: "HOME",
    nav_about: "ABOUT",
    nav_services: "SERVICES",
    nav_contact: "CONTACT",
    nav_location: "RIYADH, SAUDI ARABIA",
    hero_eyebrow: "RIYADH - SAUDI ARABIA",
    hero_sub: "YOUR EVENT BUDDY",
    hero_desc: "Elevating every occasion with exceptional talent, flawless execution, and unwavering commitment to excellence.",
    hero_contact_btn: "GET IN TOUCH",
    hero_services_btn: "OUR SERVICES",
    about_mini: "WHO WE ARE",
    about_title: "ABOUT <span>US</span>",
    about_p1: "At Eventi, we believe that every event tells a unique story. As a premier event management company, we specialize in turning your visions into unforgettable experiences.",
    about_p2: "We work closely with our clients to understand their goals, tailoring each event to reflect their identity. At Eventi, we don't just plan events; we create memories.",
    about_why_title: "WHY CHOOSE EVENTI?",
    about_b1: "Commitment to excellence",
    about_b2: "Professional execution",
    about_b3: "Attention to detail",
    about_b4: "Fast response time",
    clients_mini: "OUR CLIENTS",
    clients_title: "TRUSTED BY <span>BRANDS</span>",
    services_mini: "OUR SERVICES",
    services_title: "WHAT WE <span>DO</span>",
    services_sub: "Comprehensive event solutions tailored to your needs - from setup to final breakdown.",
    service_1_title: "EVENT STAFFING",
    service_1_text: "Professional personnel for various event roles - from corporate functions to luxury galas.",
    service_2_title: "LABORS",
    service_2_text: "Skilled workers to support event operations including setup, logistics, and load-in/out.",
    service_3_title: "CLEANING SERVICES",
    service_3_text: "Thorough and efficient cleaning before, during, and after every event.",
    service_4_title: "USHERS",
    service_4_text: "Courteous and effective guidance for guests - elegantly presented and professionally trained.",
    values_mini: "OUR FOUNDATION",
    values_title: "OUR <span>VALUES</span>",
    value_1_title: "COMMITMENT",
    value_1_text: "We invest the effort, time, and resources needed to ensure every detail is executed flawlessly.",
    value_2_title: "PROFESSIONALISM",
    value_2_text: "We maintain the highest levels of professionalism with integrity, transparency, and respect.",
    value_3_title: "QUALITY",
    value_3_text: "Quality is at the heart of everything we do - no detail is too small.",
    contact_mini: "CONTACT",
    contact_title: "LET'S <span>TALK</span>",
    contact_lead: "Have a question, a brilliant idea, or just want to say hi? We're all ears.",
    contact_location_label: "Location",
    contact_location_value: "Saudi Arabia, Riyadh",
    contact_email_label: "Email",
    contact_phone_label: "Phone",
    contact_quote: "\"Whether you're a potential partner, or just someone with a spark of inspiration, we'd love to hear from you.\"",
    contact_quote_author: "- EVENTI TEAM",
    form_name_label: "NAME *",
    form_name_placeholder: "Your full name",
    form_phone_label: "PHONE",
    form_phone_placeholder: "+966 XXX XXXX",
    form_email_label: "EMAIL",
    form_email_placeholder: "your@email.com",
    form_message_label: "MESSAGE *",
    form_message_placeholder: "Tell us about your event...",
    form_submit: "SEND MESSAGE",
    footer_copy: "&copy; 2026 EVENTI. All rights reserved.",
    menu_toggle_aria: "Toggle menu",
    status_name_required: "Name is required.",
    status_email_invalid: "Please enter a valid email.",
    status_message_required: "Message is required.",
    status_sending: "Sending...",
    status_email_service_missing: "Email service not loaded. Please email us directly: info@eventiksa.com",
    status_success: "Message sent successfully! We'll get back to you soon.",
    status_failed: "Failed to send. Please email us directly: info@eventiksa.com"
  },
  ar: {
    page_title: "إيفينتي - رفيقك في تنظيم الفعاليات",
    lang_button: "EN",
    tagline: "رفيقك في تنظيم الفعاليات",
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "الخدمات",
    nav_contact: "تواصل معنا",
    nav_location: "الرياض، المملكة العربية السعودية",
    hero_eyebrow: "الرياض - المملكة العربية السعودية",
    hero_sub: "رفيقك في تنظيم الفعاليات",
    hero_desc: "نرتقي بكل مناسبة من خلال كفاءات استثنائية، وتنفيذ متقن، والتزام لا يتزعزع بالتميز.",
    hero_contact_btn: "تواصل معنا",
    hero_services_btn: "خدماتنا",
    about_mini: "من نحن",
    about_title: "عن <span>إيفينتي</span>",
    about_p1: "في إيفينتي نؤمن أن كل فعالية تحكي قصة فريدة. نحن شركة متخصصة في إدارة الفعاليات، ونحوّل رؤيتكم إلى تجارب لا تنسى.",
    about_p2: "نعمل عن قرب مع عملائنا لفهم أهدافهم وتخصيص كل فعالية بما يعكس هويتهم. في إيفينتي لا ننظم الفعاليات فقط، بل نصنع ذكريات.",
    about_why_title: "لماذا إيفينتي؟",
    about_b1: "التزام كامل بالتميز",
    about_b2: "تنفيذ احترافي",
    about_b3: "اهتمام دقيق بالتفاصيل",
    about_b4: "سرعة في الاستجابة",
    clients_mini: "عملاؤنا",
    clients_title: "موثوقون من <span>علامات رائدة</span>",
    services_mini: "خدماتنا",
    services_title: "ماذا <span>نقدم</span>",
    services_sub: "حلول متكاملة للفعاليات مصممة حسب احتياجكم - من التجهيز حتى الإنهاء الكامل.",
    service_1_title: "توفير الطواقم",
    service_1_text: "كوادر محترفة لمختلف أدوار الفعاليات - من المناسبات المؤسسية إلى الحفلات الفاخرة.",
    service_2_title: "العمالة",
    service_2_text: "عمالة ماهرة لدعم تشغيل الفعاليات بما يشمل التجهيز واللوجستيات وأعمال التحميل والتنزيل.",
    service_3_title: "خدمات النظافة",
    service_3_text: "تنظيف شامل وفعال قبل الفعالية وأثناءها وبعدها.",
    service_4_title: "الاستقبال والإرشاد",
    service_4_text: "تنظيم حركة الضيوف وإرشادهم بأسلوب راق واحترافي.",
    values_mini: "أساسنا",
    values_title: "قيمنا <span>الأساسية</span>",
    value_1_title: "الالتزام",
    value_1_text: "نبذل الجهد والوقت والموارد لضمان تنفيذ كل تفصيل بدقة عالية.",
    value_2_title: "الاحترافية",
    value_2_text: "نلتزم بأعلى معايير الاحترافية بنزاهة وشفافية واحترام.",
    value_3_title: "الجودة",
    value_3_text: "الجودة هي جوهر كل ما نقدمه، ولا يوجد تفصيل صغير.",
    contact_mini: "تواصل معنا",
    contact_title: "دعنا <span>نتحدث</span>",
    contact_lead: "لديك سؤال أو فكرة مميزة أو ترغب فقط بالتحية؟ يسعدنا سماعك.",
    contact_location_label: "الموقع",
    contact_location_value: "المملكة العربية السعودية، الرياض",
    contact_email_label: "البريد الإلكتروني",
    contact_phone_label: "الهاتف",
    contact_quote: "\"سواء كنت شريكًا محتملًا أو لديك فكرة ملهمة، يسعدنا التواصل معك.\"",
    contact_quote_author: "- فريق إيفينتي",
    form_name_label: "الاسم *",
    form_name_placeholder: "الاسم الكامل",
    form_phone_label: "الهاتف",
    form_phone_placeholder: "+966 XXX XXXX",
    form_email_label: "البريد الإلكتروني",
    form_email_placeholder: "your@email.com",
    form_message_label: "الرسالة *",
    form_message_placeholder: "حدثنا عن فعاليتك...",
    form_submit: "إرسال الرسالة",
    footer_copy: "&copy; 2026 إيفينتي. جميع الحقوق محفوظة.",
    menu_toggle_aria: "فتح وإغلاق القائمة",
    status_name_required: "الاسم مطلوب.",
    status_email_invalid: "الرجاء إدخال بريد إلكتروني صحيح.",
    status_message_required: "الرسالة مطلوبة.",
    status_sending: "جاري الإرسال...",
    status_email_service_missing: "خدمة البريد غير متاحة. يرجى مراسلتنا مباشرة على: info@eventiksa.com",
    status_success: "تم إرسال الرسالة بنجاح. سنعود إليك قريبًا.",
    status_failed: "تعذر الإرسال. يرجى مراسلتنا مباشرة على: info@eventiksa.com"
  }
};

const MIN_FORM_FILL_MS = 2500;
const formLoadedAt = Date.now();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");
const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");
const langToggle = document.getElementById("langToggle");
const i18nTextNodes = Array.from(document.querySelectorAll("[data-i18n]"));
const i18nHtmlNodes = Array.from(document.querySelectorAll("[data-i18n-html]"));
const i18nPlaceholderNodes = Array.from(document.querySelectorAll("[data-i18n-placeholder]"));
const captchaContainer = document.getElementById("captchaContainer");
const captchaTokenInput = document.getElementById("cfTurnstileToken");
const IS_ANDROID = /Android/i.test(navigator.userAgent || "");
const SUBMIT_TS_KEY = "eventi_last_submit_ts";
let captchaWidgetId = null;
let captchaReady = false;
let captchaLoadFailed = false;

function getSavedLang() {
  try {
    const saved = localStorage.getItem("eventi_lang");
    return saved === "ar" ? "ar" : "en";
  } catch (error) {
    return "en";
  }
}

let currentLang = getSavedLang();

function t(key) {
  const currentDict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  return currentDict[key] || TRANSLATIONS.en[key] || key;
}

function setHtmlSafe(el, value) {
  const next = String(value ?? "");
  if (IS_ANDROID) {
    // Android fallback: avoid potential parser/render issues on dynamic HTML strings.
    const plain = next.replace(/<[^>]+>/g, "");
    if (el.textContent !== plain) el.textContent = plain;
    return;
  }
  if (el.innerHTML !== next) el.innerHTML = next;
}

function resetHorizontalScroll() {
  try {
    window.scrollTo({ left: 0, top: window.scrollY, behavior: "auto" });
  } catch (error) {
    window.scrollTo(0, window.scrollY);
  }
  document.documentElement.scrollLeft = 0;
  if (document.body) document.body.scrollLeft = 0;
}

function applyTranslations() {
  document.title = t("page_title");
  document.documentElement.lang = currentLang;
  document.documentElement.dir = "ltr";
  document.body.classList.toggle("is-arabic", currentLang === "ar");
  document.body.classList.toggle("is-rtl", currentLang === "ar");

  if (langToggle) {
    langToggle.textContent = t("lang_button");
  }

  if (menuToggle) {
    menuToggle.setAttribute("aria-label", t("menu_toggle_aria"));
  }

  i18nTextNodes.forEach((el) => {
    try {
      const key = el.getAttribute("data-i18n");
      const next = t(key);
      if (el.textContent !== next) el.textContent = next;
    } catch (error) {
      console.error("Text translation failed:", error);
    }
  });

  i18nHtmlNodes.forEach((el) => {
    try {
      const key = el.getAttribute("data-i18n-html");
      setHtmlSafe(el, t(key));
    } catch (error) {
      console.error("HTML translation failed:", error);
    }
  });

  i18nPlaceholderNodes.forEach((el) => {
    try {
      const key = el.getAttribute("data-i18n-placeholder");
      const next = t(key);
      if (el.getAttribute("placeholder") !== next) {
        el.setAttribute("placeholder", next);
      }
    } catch (error) {
      console.error("Placeholder translation failed:", error);
    }
  });

  // Android/WebView can keep stale horizontal scroll when dir flips ltr/rtl.
  window.requestAnimationFrame(resetHorizontalScroll);
  window.setTimeout(resetHorizontalScroll, 0);
  window.setTimeout(resetHorizontalScroll, 120);
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "ar" : "en";
  try {
    localStorage.setItem("eventi_lang", currentLang);
  } catch (error) {
    console.warn("Could not save language preference:", error);
  }
  document.body.classList.add("is-lang-switching");
  window.requestAnimationFrame(() => {
    applyTranslations();
    window.setTimeout(() => {
      document.body.classList.remove("is-lang-switching");
    }, 120);
  });
}

function setStatus(text, type) {
  if (!status) return;
  status.textContent = text;
  status.className = "status" + (type ? ` ${type}` : "");
}

function setLoading(isLoading) {
  if (!submitBtn) return;
  submitBtn.disabled = isLoading;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

function isBotLikeSubmission(formEl) {
  const honeypot = formEl.querySelector('input[name="website"]');
  const hasTrapValue = Boolean(honeypot && honeypot.value.trim());
  const submittedTooFast = Date.now() - formLoadedAt < MIN_FORM_FILL_MS;
  return hasTrapValue || submittedTooFast;
}

function shouldUseCaptcha() {
  return Boolean(EMAILJS_CONFIG.captcha && EMAILJS_CONFIG.captcha.siteKey);
}

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
      } else {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error("Script failed to load")), { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error("Script failed to load"));
    document.head.appendChild(script);
  });
}

function initCaptcha() {
  if (!shouldUseCaptcha()) return;
  if (!captchaContainer) return;

  captchaContainer.classList.add("is-visible");

  const provider = EMAILJS_CONFIG.captcha.provider;
  if (provider !== "turnstile") return;

  const turnstileSrc = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

  const renderWidget = () => {
    if (!window.turnstile) {
      captchaLoadFailed = true;
      return;
    }
    if (captchaWidgetId !== null) return;

    captchaWidgetId = window.turnstile.render("#turnstileWidget", {
      sitekey: EMAILJS_CONFIG.captcha.siteKey,
      theme: "dark",
      callback: function (token) {
        captchaReady = true;
        if (captchaTokenInput) captchaTokenInput.value = token || "";
      },
      "error-callback": function () {
        captchaLoadFailed = true;
      },
      "expired-callback": function () {
        if (captchaTokenInput) captchaTokenInput.value = "";
      }
    });
    captchaReady = true;
  };

  loadScriptOnce(turnstileSrc)
    .then(renderWidget)
    .catch((error) => {
      captchaLoadFailed = true;
      console.warn("Captcha script failed to load:", error);
    });
}

function getCaptchaToken() {
  if (!shouldUseCaptcha()) return "";
  if (EMAILJS_CONFIG.captcha.provider !== "turnstile") return "";
  if (!window.turnstile || captchaWidgetId === null) return "";

  try {
    return window.turnstile.getResponse(captchaWidgetId) || "";
  } catch (error) {
    return "";
  }
}

function resetCaptcha() {
  if (captchaTokenInput) captchaTokenInput.value = "";
  if (!window.turnstile || captchaWidgetId === null) return;
  try {
    window.turnstile.reset(captchaWidgetId);
  } catch (error) {
    console.warn("Captcha reset skipped:", error);
  }
}

function isRateLimited() {
  const minInterval = Number(EMAILJS_CONFIG.minSubmitIntervalMs || 0);
  if (!minInterval) return false;
  try {
    const lastTs = Number(localStorage.getItem(SUBMIT_TS_KEY) || 0);
    return Date.now() - lastTs < minInterval;
  } catch (error) {
    return false;
  }
}

function markSubmissionTime() {
  try {
    localStorage.setItem(SUBMIT_TS_KEY, String(Date.now()));
  } catch (error) {
    // no-op when storage is unavailable
  }
}

(function initEmailJS() {
  if (typeof emailjs !== "undefined") {
    try {
      emailjs.init(EMAILJS_CONFIG.publicKey);
      console.log("EmailJS initialized successfully");
    } catch (error) {
      console.error("EmailJS initialization failed:", error);
    }
  } else {
    console.error("EmailJS library not loaded! Check your internet connection.");
  }
})();

initCaptcha();

if (langToggle) {
  langToggle.addEventListener("click", toggleLanguage);
}

applyTranslations();

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (isBotLikeSubmission(form)) {
      setStatus(t("status_failed"), "error");
      return;
    }

    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name) return setStatus(t("status_name_required"), "error");
    if (!email || !isValidEmail(email)) return setStatus(t("status_email_invalid"), "error");
    if (!message) return setStatus(t("status_message_required"), "error");
    if (isRateLimited()) return setStatus("Please wait a moment before sending another message.", "error");

    if (shouldUseCaptcha()) {
      const token = getCaptchaToken();
      const strict = Boolean(EMAILJS_CONFIG.captcha && EMAILJS_CONFIG.captcha.strict);

      if (!token && strict) {
        setStatus("Please complete the verification and try again.", "error");
        return;
      }

      // Safe mode: do not block users if captcha provider is unavailable.
      if (!token && captchaLoadFailed && !strict) {
        console.warn("Captcha unavailable; continuing in safe mode.");
      }

      if (captchaTokenInput) captchaTokenInput.value = token;
    }

    setStatus(t("status_sending"), "");
    setLoading(true);

    if (typeof emailjs === "undefined") {
      setStatus(t("status_email_service_missing"), "error");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, this)
      .then(() => {
        setStatus(t("status_success"), "success");
        markSubmissionTime();
        form.reset();
        resetCaptcha();
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS send error:", error);
        setStatus(t("status_failed"), "error");
        resetCaptcha();
        setLoading(false);
      });
  });
} else {
  console.error("Contact form not found! Check if form element exists.");
}

if (navbar && menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
