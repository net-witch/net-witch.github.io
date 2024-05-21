const foldableNavList = document.getElementById("foldable-nav-list");
const navLinksList = document.querySelectorAll("#foldable-nav-list a");
foldableNavList.isHidden = true;

navLinksList.forEach((a) => {
  a.onclick = () => {
    foldableNavList.isHidden = true;
    foldableNavList.style.transform = "translateX(-100%)";
  };
});

function onHamburgerButtonClick() {
  if (foldableNavList.isHidden) {
    foldableNavList.isHidden = false;
    foldableNavList.style.transform = "translateX(0)";
  } else {
    foldableNavList.isHidden = true;
    foldableNavList.style.transform = "translateX(-100%)";
  }
}
