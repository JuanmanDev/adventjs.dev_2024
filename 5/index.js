/*
Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los tamaños disponibles después de emparejar las botas.
*/

function organizeShoes(shoes) {

    const data = {
      R: {},
      I: {},
    }
  
    const matches = [];
  
    for(let i = 0; i < shoes.length; i++){
      const shoe = shoes[i]
      const typeOpposite = shoe.type === "R" ? "I" : "R";
      if (data[typeOpposite][shoe.size] > 0) {
        matches.push(shoe.size);
        data[typeOpposite][shoe.size]--;
      } else {
        if (!data[shoe.type][shoe.size]) {
          data[shoe.type][shoe.size] = 1;
        } else {
          data[shoe.type][shoe.size]++;
        }
      }
    }
  
    return matches;
  
  
  
    // 2X - 1569 - 7
    // const g1 = Object.groupBy(shoes, ({ size }) => size)
    // let matches = [];
    
    // for (let number of Object.keys(g1)) {
    //   let r = 0;
    //   let i = 0;
    //   g1[number].forEach(o => {
    //     if (o.type == "I") i++;
    //     if (o.type == "R") r++;
    //   })
    //   const total = Math.min(i, r)
    //   for (let i = 0; i < total; i++ ) {
    //     matches.push(Number(number));
    //   }
    // }
    // return matches
  }