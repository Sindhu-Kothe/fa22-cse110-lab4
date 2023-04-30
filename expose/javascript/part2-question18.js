function toPrint(){
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

const intervalID = setInterval(toPrint, 1000);
