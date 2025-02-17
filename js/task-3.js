const input = document.querySelector("#name-input");
input.addEventListener("input", (event) => {
  console.log(event.target.value.trim());
  const output = document.querySelector("#name-output");
  if (event.target.value.trim() === "") {
    output.innerText = "Anonymous";
  } else {
    output.innerText = event.target.value.trim();
  }
});
