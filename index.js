const cactus = document.getElementById("cactus");
const heightpx = document.getElementById("height");
let height = 60;

function growCactus() {
  const startDate = new Date("2023-05-08T21:00:00.000Z");
  var timeDiff = Math.abs(Date.now() - startDate.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  height += 10;
  heightpx.innerText  = (diffDays * 10) + 'px'
  cactus.style.height = (diffDays * 10) + 'px';
}

growCactus()
