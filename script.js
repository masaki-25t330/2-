window.onload = function() {
  alert("ようこそ！紹介ページへ！");
};

window.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".card");

  const appearOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");

          
          setTimeout(() => {
            entry.target.classList.remove("fade-in");
          }, 1000);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  fadeElements.forEach((el) => {
    appearOnScroll.observe(el);
  });
});

