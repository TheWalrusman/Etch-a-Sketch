let hexGuideArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
function randomHexColor() {
  let colorCode = "";

  for (let i = 0; i < 6; i++) {
      colorCode += String(hexGuideArray[Math.floor(Math.random()*16)]);

  }
  return colorCode;
}
 function increaseBlackLevel() {
    let colorValue = this.style.backgroundColor;
    colorValue = colorValue.slice(4,colorValue.length-1);
    colorValue = colorValue.split(',');
    colorValue = Number(colorValue  [0]);
    colorValue -=26;
    if (colorValue < 0){
      colorValue = 0;
    }
    this.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
}
function gridBoxSetup() {
  let childGrids = document.querySelectorAll('.childGrid');
  for (let i = 0; i < childGrids.length; i++) {
    childGrids[i].remove();
  }

  let numberofBoxes = document.getElementById('boxSizeValue').value;
  let gridContainer = document.getElementById('gridContainer');
  document.getElementById('gridContainer').style.gridTemplateColumns = `repeat(${numberofBoxes},1fr )`;
  document.getElementById('gridContainer').style.gridTemplateRows = `repeat(${numberofBoxes},1fr )`;
  for (let i = 0; i < numberofBoxes * numberofBoxes; i++) {
    let newGrid = document.createElement('div');
    newGrid.classList.add('childGrid');
    newGrid.id = `${i}`;
    //newGrid.style.backgroundColor = `#${randomHexColor()}`;
    newGrid.style.backgroundColor = `rgb(255, 255, 255)`;
    //currentGrid.textContent = `${i+1}`;
    gridContainer.appendChild(newGrid);
    newGrid.addEventListener("mouseenter", function(e){ increaseBlackLevel.call(this, e) },true  );
    //document.getElementById(`${i}`).style.backgroundColor = `#${randomHexColor()}`;
  }



}
gridBoxSetup();
document.getElementById('boxSizeValue').addEventListener("change", gridBoxSetup);
document.getElementById('clearBox').addEventListener("click", gridBoxSetup);
