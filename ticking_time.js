function clock() {
  //Target the div with id clock
  //const clockNode = document.querySelector("#clock");
  return setInterval(() => {
    let date = new Date();
    let tick = date.toLocaleTimeString();
    //clockNode.textContent = tick;
    console.log(tick);
  }, 1000);
}

clock();