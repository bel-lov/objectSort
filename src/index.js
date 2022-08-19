// const obj = {
//   name: 'мечник',
//   health: 10,
//   level: 2,
//   attack: 80,
//   defence: 40,
// };

export default function orderByProps(obj, arr) {
  const newArray = [];
  const newArray2 = [];
  if (arr.length === 0) {
    for (const key in obj) {
      newArray2.push({ key, value: obj[key] });
    }
    newArray2.sort((a, b) => (a.key > b.key ? 1 : -1));
  } else {
    for (const i in arr) {
      const value = arr[i];
      if (Object.keys(obj).includes(arr[i])) {
        newArray.push({ key: value, value: obj[value] });
      }
    }
    for (const key in obj) {
      if (!arr.includes(key)) {
        newArray2.push({ key, value: obj[key] });
      }
      newArray2.sort((a, b) => (a.key > b.key ? 1 : -1));
    }
  }
  return [...newArray, ...newArray2];
}

// console.log(orderByProps(obj, ['name', 'level']));
