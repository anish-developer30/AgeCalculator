const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const value = document.querySelector("#age").value;
  let date = new Date(value);
  let current = new Date();

  let year = current.getFullYear() - date.getFullYear();
  let month = current.getMonth() - date.getMonth();
  let day = current.getDate() - date.getDate();

  if (value == "") {
    year = 0;
    month = 0;
    day = 0;
  }

  if (
    current.getMonth() < date.getMonth() ||
    (current.getMonth() === date.getMonth() && current.getDate < date.getDate())
  ) {
    year--;
    month = 12 + current.getMonth() - date.getMonth();
    day = current.getDate() - date.getDate();
  }
  document.querySelector("#text").innerHTML = `
   year :  ${year} || month : ${month} || day : ${day}
  `;
});
