const calculateCube = (number) => {
  return number ** 3;
};

const makeResultElement = (i, text, parent) => {
  setTimeout(() => {
    const liElement = document.createElement("li");
    liElement.innerText = text;
    parent.append(liElement);
  }, (i - 1) * 100);
};

const calBtn = document.getElementById("calculate");
calBtn.addEventListener("click", () => {
  const input = document.querySelector("#input");
  const error = document.getElementById("error");
  const result = document.getElementById("result");

  if (!input.value) {
    error.innerText = "Please Enter At Least 1 Number";
    error.style.display = "block";
    result.style.display = "none";
  } else {
    if (input.value < 1) {
      error.innerText = "Please Enter Number Above 1";
      error.style.display = "block";
      result.style.display = "none";
    } else {
      error.style.display = "none";
      error.innerText = "";
      result.style.display = "flex";

      const ulElement = document.getElementById("resList");
      ulElement.innerHTML = "";
      for (let i = 1; i <= input.value; i++) {
        makeResultElement(
          i,
          `Current Number is : ${i} and the cube is ${calculateCube(i)}`,
          ulElement
        );
      }
    }
  }
});
