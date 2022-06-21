function slideMenu() {
  let menu = document.getElementById("menu");
  let nested = document.getElementById("nested");
  if (menu.className === "menu") {
    let one = (nested.className = "not-nested");
    let two = (menu.className = "menuHidden");
    return { one, two };
  }
  if (menu.className === "menuHidden") {
    let three = (nested.className = "nested");
    let four = (menu.className = "menu");
    return { three, four };
  }
}

export default slideMenu;
