function prepareGifts(gifts) {
  // Code here
  return [...new Set(gifts)].sort((a, b) => a - b)

  // const o = [];
  // gifts.forEach (g => o[g] = true);
  // const arr = Object.keys(o).map(a => Number(a)).sort((a, b) => a - b);
  // return arr;  
}
