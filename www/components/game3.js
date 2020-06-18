var grids = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,];
grids = shuffle(grids);
console.log(grids);

function randomGrids(){

  grids.forEach(grid => {
    
      //ランダムな順に同じことしてる。。。
      document.getElementById(`g${grid}`).setAttribute("id",`h${i}`);
      console.log(document.getElementById(`h${i}`));
  });  
    // console.log(document.getElementById(`g${grid}`));
    // var t = document.getElementById(`g${grid+1}`).getAttribute('id'); 
    // document.getElementById(`g${grid}`).removeAttribute('id');
    // console.log(t);
    // document.getElementById(`${t}`).setAttribute("id",`${t}`);
  
  for(i=0;i<30;i++){
    document.getElementById(`h${i}`).textContent = i;
  }
}






