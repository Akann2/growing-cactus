const cactus = document.getElementById("cactus");
let height = 60;

function growCactus() {
  const startDate = new Date("2022-05-10T21:00:00.000Z");
  var timeDiff = Math.abs(Date.now() - startDate.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  height += 10;
  cactus.style.height = (diffDays * 10) + 'px';
}

growCactus()
