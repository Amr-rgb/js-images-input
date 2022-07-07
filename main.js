const imgsContainer = document.getElementById("imgsContainer");
const inputBtn = document.getElementById("imageInput");
const selected = document.getElementById("selected");

inputBtn.addEventListener("change", () => {
  const frag = document.createDocumentFragment();
  selected.textContent = inputBtn.files.length + " files selected";

  for (item of inputBtn.files) {
    const reader = new FileReader();
    reader.readAsDataURL(item);

    const fig = document.createElement("figure");
    const figcaption = document.createElement("figcaption");
    const img = document.createElement("img");

    fig.className = "image-container";
    fig.append(img, figcaption);

    reader.onload = () => {
      img.setAttribute("src", reader.result);
      figcaption.textContent = item.name;
    };

    frag.append(fig);
  }

  imgsContainer.innerHTML = "";
  imgsContainer.append(frag);
});
