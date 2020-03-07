const arr = [];
for (i = 0; i < 100; i++) {
  arr[i] = Math.floor(Math.random() * 1000);
}

function gtnel(zangvac) {
  let gumar = 0;
  let min = Infinity;
  let max = -Infinity;
  let artadryal = 1;
  let bajanvuma2gumar = 0;
  let simetrikTver;

  // tver@  andam  andam

  let g = 0;
  let y = 0;
  let mnacord = Infinity;
  for (let index = 0; index < arr.length; index++) {
    let i = arr[index];
    if (i !== 0) {
      while (i > 0.9 || i < -0.9) {
        mnacord = i % 10;
        g += mnacord;
        i -= mnacord;
        i /= 10;
      }
      y += g;
      mnacord = 0;
      g = 0;
    }
  }
  console.log(y);

  for (i = 0; i < zangvac.length; i++) {
    gumar += zangvac[i];
  }
  console.log(gumar);

  //max tver@

  for (j = 0; j < zangvac.length; j++) {
    if (zangvac[j] > max) {
      max = zangvac[j];
    }
  }
  console.log(max);

  // //  min  tver@

  for (k = 0; k < zangvac.length; k++) {
    if (min > zangvac[k]) {
      min = zangvac[k];
    }
  }
  console.log(min);

  //  bolor  tveri  bazmapatik@

  for (let a = 0; a < zangvac.length; a++) {
    artadryal = zangvac[a];
    artadryal *= zangvac[a];
  }
  console.log(artadryal);

  // // bazanvume 2  &  gumar

  let gumar2 = 0;
  for (let b = 0; b < zangvac.length; b++) {
    const element = zangvac[b];
    if (element % 2 === 0) {
      gumar2 += element;
    }
  }
  console.log(gumar2 + "  gumar2");

  // simetrik tver

  const arr2 = [];
  let ak = "";
  let b;
  for (let index = 0; index < zangvac.length; index++) {
    let i = zangvac[index];
    if (i !== 0) {
      while (i > 0.9 || i < -0.9) {
        mnacord = i % 10;
        arr2.push(mnacord);
        i -= mnacord;
        i /= 10;
      }
    }

    for (let k = 0; k < arr2.length; k++) {
      ak += String(arr2[k]);
      arr2[k] = [];
    }

    if (ak === String(zangvac[index]) && ak > 10) {
      console.log("simetrik e " + ak);
    }
    ak = "";
  }

  return {
    gumar,
    max,
    min,
    artadryal,
    bajanvuma2gumar,
    simetrikTver // 111 1221 123321
  };
}

gtnel(arr);

