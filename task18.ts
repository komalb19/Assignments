let areas = ["France", "Italy", "Rome", "Singapore", "Baku"];
// copy all the elements from areas into new array called original areas
let originalareas = [...areas];

// print areas in original order
for (let i = 0; i < areas.length; i++) {
    console.log(`${areas[i]}`);
  }

  // print areas in alphabetical order
  console.log("Places in alphabetical order");
  areas.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < areas.length; i++) {
    console.log(`${areas[i]}`)};

    // print areas in reverse alphabetical order
    console.log("Areas in reverse alphabetical order");
    areas.sort((a, b) => b.localeCompare(a));
    for (let i = 0; i < areas.length; i++) {
        console.log(`${areas[i]}`)};

  // print areas in original (unchanged) order
console.log("Places in original order");
for (let i = 0; i < originalareas.length; i++) {
  console.log(`${originalareas[i]}`)};