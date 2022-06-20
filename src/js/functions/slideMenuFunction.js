function slideMenu() {
  let menu = document.getElementById("menu");
  console.log(menu);
  if (menu.className === "menu") {
    return (menu.className = "menuHidden");
  }
  if (menu.className === "menuHidden") {
    return (menu.className = "menu");
  }
}

export default slideMenu;
