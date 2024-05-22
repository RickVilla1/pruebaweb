import { ID_PARENT_VIEW } from "./Constans.js";

export class DebugCore {
  static hide = false;
  // static conterHeader = 0
  static toogleImage() {
    const root = document.getElementById(ID_PARENT_VIEW);
    DebugCore.toogleImageDisplay(root);
    DebugCore.hide = !DebugCore.hide;
  }

  static toogleImageDisplay(child) {
    Array.from(child.children).forEach(function (child) {
      if (child.tagName.toLowerCase() === "img") {
        child.style.display = DebugCore.hide ? "block" : "none";
      }
      if (child.tagName.toLowerCase() === "a") {
        child.style.userSelect = DebugCore.hide ? "none" : "auto";
      }
      if (child.childElementCount > 0) {
        DebugCore.toogleImageDisplay(child);
      }
    });
  }
  // static headerToogleImage() {
  //   DebugCore.conterHeader = DebugCore.conterHeader + 1;
  //   if (DebugCore.conterHeader > 2) {
  //     DebugCore.toogleImage();
  //     DebugCore.conterHeader = 0;
  //   }
  // }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "u" || event.key === "U") {
    DebugCore.toogleImage();
  }
});
