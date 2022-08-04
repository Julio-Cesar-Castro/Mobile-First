const addCount = document.querySelector(".plusSign");
const removeCout = document.querySelector(".minusSign");
const showScreean = document.querySelector(".showCount");

let count = 0;

showScreean.innerHTML = count;

addNumber = () => {
  count++;
  showScreean.innerHTML = count;
};

removeNumber = () => {
  if (count <= 0) {
    alert("Por favor adicione um valor válido para continuar");
  } else {
    count--;
    showScreean.innerHTML = count;
  }
};

addCount.addEventListener("click", addNumber);
removeCout.addEventListener("click", removeNumber);
