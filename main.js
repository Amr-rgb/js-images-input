const img = document.getElementById("image");
const imgCaption = document.getElementById("imageCaption");
const imgInput = document.getElementById("imageInput");

imgInput.addEventListener("change", () => {
  const reader = new FileReader();
  reader.readAsDataURL(imgInput.files[0]);
  reader.onload = () => {
    img.setAttribute("src", reader.result);
    imgCaption.textContent = imgInput.files[0].name;
  };
});
