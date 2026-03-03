(function initReactEnhancements() {
  if (!window.React || !window.ReactDOM) return;

  const h = React.createElement;
  const useEffect = React.useEffect;
  const useRef = React.useRef;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isFinePointer = window.matchMedia("(pointer:fine)").matches;

  const host = document.createElement("div");
  host.setAttribute("hidden", "hidden");
  document.body.appendChild(host);

  function App() {
    const titlePreparedRef = useRef(false);

    useEffect(function splitHeroTitle() {
      if (titlePreparedRef.current) return;
      const title = document.querySelector(".hero-title-main");
      if (!title || reducedMotion) return;

      const rawText = (title.textContent || "").trim();
      if (!rawText) return;

      const chars = rawText.split("");
      title.textContent = "";
      chars.forEach(function (char, index) {
        const span = document.createElement("span");
        span.className = "title-char";
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.setProperty("--char-delay", String(index * 80) + "ms");
        title.appendChild(span);
      });
      titlePreparedRef.current = true;
    }, []);

    useEffect(function revealAndTimeline() {
      const targets = Array.from(
        document.querySelectorAll(
          ".hero-content > *, .highlight-box, .card, .contact-left, .contact-form, .clients-grid img, .client-item, .section-title, .mini-title"
        )
      );

      targets.forEach(function (node, index) {
        node.classList.add("reveal-target");
        node.style.setProperty("--reveal-delay", String((index % 10) * 55) + "ms");
      });

      if (reducedMotion) {
        targets.forEach(function (node) {
          node.classList.add("is-visible");
        });
        return undefined;
      }

      if (!("IntersectionObserver" in window)) {
        targets.forEach(function (node) {
          node.classList.add("is-visible");
        });
        return undefined;
      }

      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
      );

      targets.forEach(function (node) {
        observer.observe(node);
      });

      return function cleanup() {
        observer.disconnect();
      };
    }, []);

    useEffect(function scrollProgress() {
      const progress = document.getElementById("scrollProgressBar");
      if (!progress) return undefined;

      let ticking = false;
      function paint() {
        const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const ratio = Math.min(Math.max(window.scrollY / max, 0), 1);
        progress.style.transform = "scaleX(" + ratio.toFixed(4) + ")";
        ticking = false;
      }

      function onScroll() {
        if (ticking) return;
        window.requestAnimationFrame(paint);
        ticking = true;
      }

      paint();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);

      return function cleanup() {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }, []);

    useEffect(function navScrollSpy() {
      const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
      if (!navLinks.length) return undefined;

      const mapping = navLinks
        .map(function (link) {
          const selector = link.getAttribute("href");
          if (!selector) return null;
          const section = document.querySelector(selector);
          if (!section) return null;
          return { link: link, section: section };
        })
        .filter(Boolean);

      if (!mapping.length) return undefined;

      function setActive(sectionId) {
        mapping.forEach(function (item) {
          const isActive = item.section.id === sectionId;
          item.link.classList.toggle("is-active", isActive);
        });
      }

      function byViewportCenter() {
        const viewportCenter = window.innerHeight * 0.36;
        let bestId = mapping[0].section.id;
        let bestDistance = Number.POSITIVE_INFINITY;
        mapping.forEach(function (item) {
          const rect = item.section.getBoundingClientRect();
          const distance = Math.abs(rect.top - viewportCenter);
          if (distance < bestDistance) {
            bestDistance = distance;
            bestId = item.section.id;
          }
        });
        setActive(bestId);
      }

      if ("IntersectionObserver" in window) {
        const seen = new Map();
        const observer = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              seen.set(entry.target.id, entry.intersectionRatio);
            });

            let best = mapping[0].section.id;
            let bestRatio = -1;
            mapping.forEach(function (item) {
              const ratio = seen.get(item.section.id) || 0;
              if (ratio > bestRatio) {
                bestRatio = ratio;
                best = item.section.id;
              }
            });
            setActive(best);
          },
          { threshold: [0.2, 0.4, 0.6], rootMargin: "-16% 0px -56% 0px" }
        );

        mapping.forEach(function (item) {
          observer.observe(item.section);
        });
        byViewportCenter();

        return function cleanup() {
          observer.disconnect();
        };
      }

      byViewportCenter();
      window.addEventListener("scroll", byViewportCenter, { passive: true });
      window.addEventListener("resize", byViewportCenter);
      return function cleanup() {
        window.removeEventListener("scroll", byViewportCenter);
        window.removeEventListener("resize", byViewportCenter);
      };
    }, []);

    useEffect(function cardAndButtonInteraction() {
      if (reducedMotion) return undefined;

      const cards = Array.from(document.querySelectorAll(".card"));
      const buttons = Array.from(document.querySelectorAll(".hero-actions .btn, #submitBtn"));
      const cleanups = [];

      if (isFinePointer) {
        cards.forEach(function (card) {
          card.classList.add("react-tilt");
          const move = function (event) {
            const rect = card.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width - 0.5;
            const py = (event.clientY - rect.top) / rect.height - 0.5;
            const rotateY = px * 7;
            const rotateX = py * -7;
            card.style.transform =
              "perspective(920px) rotateX(" +
              rotateX.toFixed(2) +
              "deg) rotateY(" +
              rotateY.toFixed(2) +
              "deg) translateY(-2px)";
          };
          const leave = function () {
            card.style.transform = "";
          };
          card.addEventListener("mousemove", move);
          card.addEventListener("mouseleave", leave);
          cleanups.push(function () {
            card.removeEventListener("mousemove", move);
            card.removeEventListener("mouseleave", leave);
            card.style.transform = "";
          });
        });

        buttons.forEach(function (button) {
          button.classList.add("react-magnetic");
          const move = function (event) {
            const rect = button.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            button.style.transform = "translate(" + (x * 8).toFixed(1) + "px," + (y * 7).toFixed(1) + "px)";
          };
          const leave = function () {
            button.style.transform = "";
          };
          button.addEventListener("mousemove", move);
          button.addEventListener("mouseleave", leave);
          cleanups.push(function () {
            button.removeEventListener("mousemove", move);
            button.removeEventListener("mouseleave", leave);
            button.style.transform = "";
          });
        });
      } else {
        cards.forEach(function (card) {
          card.classList.add("react-mobile-card");
          const down = function () {
            card.classList.add("is-pressed");
          };
          const up = function () {
            card.classList.remove("is-pressed");
          };
          card.addEventListener("touchstart", down, { passive: true });
          card.addEventListener("touchend", up);
          card.addEventListener("touchcancel", up);
          cleanups.push(function () {
            card.removeEventListener("touchstart", down);
            card.removeEventListener("touchend", up);
            card.removeEventListener("touchcancel", up);
            card.classList.remove("is-pressed");
          });
        });

        buttons.forEach(function (button) {
          button.classList.add("react-touch-btn");
          const down = function () {
            button.classList.add("is-pressed");
          };
          const up = function () {
            button.classList.remove("is-pressed");
          };
          button.addEventListener("touchstart", down, { passive: true });
          button.addEventListener("touchend", up);
          button.addEventListener("touchcancel", up);
          cleanups.push(function () {
            button.removeEventListener("touchstart", down);
            button.removeEventListener("touchend", up);
            button.removeEventListener("touchcancel", up);
            button.classList.remove("is-pressed");
          });
        });
      }

      return function cleanup() {
        cleanups.forEach(function (fn) {
          fn();
        });
      };
    }, []);

    return null;
  }

  ReactDOM.createRoot(host).render(h(App));
})();
