massif = [];

do {
  lengthMassif = prompt(('Enter length of massif:'));
} while (isNaN(lengthMassif));

for (i = 0; i < lengthMassif; i++) {
  do {
    elementMassif = prompt(`Enter ${i+1} element of massif:`);
    massif.push(parseInt(elementMassif));
  } while (isNaN(elementMassif));
}

document.write(`Array before sorting: ${massif} <br>`);

for (i = 0; i < massif.length; i++) {
  for (j = 0; j < massif.length - i - 1; j++) {
    if (massif[j] > massif[j+1]) {
      temp = massif[j];
      massif[j] = massif[j+1];
      massif[j+1] = temp;
    }
  }
}

document.write(`Array after sorting: ${massif} <br>`);

massif.splice(1, 3);

document.write(`Array after removing elements 2 to 4: ${massif} <br>`);