const No = document.getElementById("cancer-carefor");
const add = document.getElementById("accept-carefors");
const accept = document.getElementById("accept");
const hide = document.getElementById("hide");

No.addEventListener("click", function () {
  console.log("click");
  hide.style.display = "block";
  add.style.display = "none";
});

add.addEventListener("click", function () {
  console.log("click");
  accept.style.display = "block";
  No.style.display = "none";
});
