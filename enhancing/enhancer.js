module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancement = item.enhancement
  if (enhancement < 20) {
    ++enhancement
  }
  return { ...item, enhancement };
}

function fail(item) {
  let enhancement = item.enhancement;
  let durability = item.durability;
  if (enhancement < 15) {
    durability = durability - 5;
  } else {
    durability = durability - 10
    if (enhancement >= 17) {
      --enhancement;
    }
  }
  return { ...item, enhancement, durability };
}

// function repair(item) {
//   if (item && typeof item === 'object') {
//     const objectProperties = Object.getOwnPropertyNames(item)
//     const objectNames = ['name', 'durability', 'enhancement']
//     if (arraysEqual(objectProperties, objectNames)) {
//       const newItem = {
//         name: item.name,
//         durability: 100,
//         enhancement: item.enhancement
//       }
//       return newItem
//     }
//   } else {
//     return null
//   }
// }

function repair(item) {
  return { ...item, durability: 100 };
}


function get(item) {
  if(item.enhancement > 0){
    return {...item, name: `[+${item.enhancement}] ${item.name}`};
  } else {
    return {...item};
  }
}


