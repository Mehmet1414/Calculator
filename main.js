const display = document.getElementById("displayInput");



display.disabled = true; 

document.onkeydown = (e) => {
  const key = e.key;

  switch (key) {
    case "Backspace":
      display.value = display.value.slice(0, -1);
      break;
    case "Enter":
      display.value = eval(display.value);
      break;
    case "Escape":
      display.value = "";
      break;
    case "/":
    case "*":
    case "+":
    case "-":
      display.value += key;
      break;

    default:
      if (/[0-9]/.test(key)) {
        display.value += key;
      }
      break;
  }
};

