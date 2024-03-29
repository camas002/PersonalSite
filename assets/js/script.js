let navLinks = document.querySelectorAll("div.menubar ul li a");

navLinks.forEach((item) => {
  console.log(item);
  item.addEventListener("click", function () {
    document
      .querySelector("div.menubar ul li a.active")
      .classList.remove("active");
    item.classList.add("active");

    document.querySelector("main > section.active").classList.remove("active");
    document
      .querySelector(`main > section${item.getAttribute("href")}`)
      .classList.add("active");
  });
});
