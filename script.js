window.onload = function() {
  alert("ようこそ！このページへ！");
};

window.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".card");

  const appearOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");

          // 1秒後にクラスを削除して再びフェードイン可能にする
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

