var rows =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,];
console.log(rows[25]);

function grid(){
  var grid = document.getElementsByClassName('grid');
  console.log(grid[0]);
  grid[12].setAttribute('style','{ opacity : 0.2 ; }');
}
// grid.addEventListener('click',()=>{
// });