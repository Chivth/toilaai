const No = document.getElementById("cancer-carefor");
const Yes = document.getElementById("accept-carefor");
const hide = document.getElementById("hide");
const add = document.getElementById("accept-carefors");
const accept = document.getElementById("accept");

No.addEventListener("click", function () {
  console.log("click");
  hide.style.display = "block";
  Yes.style.display = "none";
  add.style.display = "none";
});

Yes.addEventListener("click", function () {
  console.log("click");
});

add.addEventListener("click", function () {
  console.log("click");
  accept.style.display = "block";
});
