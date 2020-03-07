const array = [];

for (let i = 0; i <= 2; i++) {
  array[i] = [];

  for (let j = 0; j < 3; j++) {
    array[i][j] = Math.floor(Math.random() * 100);
  }
}

function gtnel(zangvac) {
  let gumar = 0;
  let min = Infinity;
  let max = -Infinity;
  let artadryal = 1;
  let bajanvuma2gumar = 0;
  let simetrikTver;
  for (let i = 0; i < zangvac.length; i++) {
    for (let k = 0; k < zangvac.length; k++) {
      gumar += array[i][k];
    }
  }

  console.log(gumar);

  //  min
  for (let i = 0; i < zangvac.length; i++) {
    for (let k = 0; k < zangvac.length; k++) {
      if (min > array[i][k]) min = array[i][k];
    }
  }

  console.log(min);

  //  max

  for (let i = 0; i < zangvac.length; i++) {
    for (let k = 0; k < zangvac.length; k++) {
      if (array[i][k] > max) max = array[i][k];
    }
  }

  console.log(max);

  for (i = 0; i < zangvac.length; i++) {
    for (j = 0; j < zangvac.length; j++) {
      artadryal *= zangvac[i][j];
    }
  }

  console.log(artadryal);

  for (let i = 0; i < zangvac.length; i++) {
    for (let j = 0; j < zangvac.length; j++) {
      if (zangvac[i][j] % 2 == 0) bajanvuma2gumar += zangvac[i][j];
    }
  }

  console.log(bajanvuma2gumar);

  return {
    gumar,
    max,
    min,
    artadryal,
    bajanvuma2gumar,
    simetrikTver // 111 1221 123321
  };
}

const newArray = [];

for (let i = 0; i < 1; i++) {
  newArray[i] = [];
  for (let j = 0; j < 1; j++) {
    newArray[i][j] = [];
    for (let k = 0; k < 10; k++) {
      newArray[i][j][k] = Math.floor(Math.random() * 100);
    }
  }
}
console.log(newArray);

gtnel(array)