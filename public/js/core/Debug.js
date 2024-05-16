import { ID_PARENT_VIEW } from "./Constans.js";

class ImageOff {
  static hide = false;
  static toogleImage() {
    console.log(ImageOff.hide);
    const root = document.getElementById(ID_PARENT_VIEW);
    ImageOff.toogleImageDisplay(root)
    ImageOff.hide = !ImageOff.hide;
  }

  static toogleImageDisplay(child) {
    Array.from(child.children).forEach(function (child) {
      if (child.tagName.toLowerCase() === "img") {
        child.style.display = ImageOff.hide ? "block" : "none";
      }
      if (child.tagName.toLowerCase() === "a") {
        child.style.userSelect = ImageOff.hide ? "none" : "auto";
      }
      if (child.childElementCount > 0) {
        ImageOff.toogleImageDisplay(child);
      }
    });
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "u" || event.key === "U") {
    console.log("UUU");
    ImageOff.toogleImage();
  }
});
