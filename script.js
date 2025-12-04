let button = document.querySelector(".btn")
let para = document.querySelector(".para")



button.addEventListener("click", () => {
      para.textContent = button.textContent;
    });
para.append(button)

