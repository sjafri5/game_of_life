$(document).ready( function(){
  console.log('asfsaf')
  var gameBeingPlayed = true
  row_value = $('.row_val').val();
  col_value = $('.col_val').val();

  $('.clickable').on('click', function(){
      $(this).toggleClass('alive')
      $(this).removeClass('will_live')
  });

  $('#start_life_btn').on('click', function(e){
      e.preventDefault();
    
    

   
      assignNextRoundstatus();
      changeLivesStatus();

    

  })

  $('#end_life_btn').on('click', function(){
        gameBeingPlayed = false
    })

})

var assignNextRoundstatus = function(){
  for (var r = 0; r < row_value ; r++) {
    for (var c = 0; c < col_value; c++) {
      var $cell = $('.row_' + r + ' .col_' + c)
      AssignSurvivorClass(findAdjacentCellCoords(r, c), $cell);
    }}
}

//counts living neighbors, assigns will_live class
var AssignSurvivorClass = function(arr_of_crd, cell_selector){
  // console.log(arr_of_crd);
  // console.log(cell_selector);
  var count = countNeighbors(arr_of_crd);
  if (cell_selector.hasClass('alive')) {
    // console.log("alive")
    // console.log(count)
    if (count < 2) {
      cell_selector.removeClass('will_live')
    }
    else if (count > 3) {
      cell_selector.removeClass('will_live')
    }
    else {

       cell_selector.addClass('will_live')
    }
  }
  else {
    if (count == 3) {
      cell_selector.addClass('will_live')
    }
  }
}


var countNeighbors = function(arr_of_crds){
  var count = 0
  for (ind in arr_of_crds) {
    var coord = arr_of_crds[ind]
    var $selector = $('.row_' + coord[1] + ' .col_' + coord[0])
    if ($selector.hasClass('alive')) {
      count += 1
    }
  }
  return count
}



var findAdjacentCellCoords = function(r, c){
  var arr_for_x = find_x_adders(c);
  var arr_for_y = find_y_adders(r);
  return find_coordinates(arr_for_x, arr_for_y, r, c);
}

var find_x_adders = function(c){
  if (c == 0)
    {return [0, 1]}
  else if (c == (col_value - 1))
    {return [-1, 0]}
  else
    {return [-1, 0, 1]}
}


var find_y_adders = function(r){
  if (r == 0)
    {return [0, 1]}
  else if (r == (row_value - 1))
    {return [-1, 0]}
  else
    {return [-1, 0, 1]}
}

var find_coordinates = function(arr_x, arr_y, r, c){
  var arr_of_coord = []
  for (i in arr_x) {
    for (e in arr_y) {
      if (!(arr_x[i] == 0 && arr_y[e] == 0)) {
        arr_of_coord.push([(c + arr_x[i]), (r + arr_y[e])])
      }
    }
  }
  return arr_of_coord
}

var changeLivesStatus = function(){
  for (var r = 0; r < row_value; r++) {
        for (var c = 0; c < col_value; c++) {
          var $cell = $('.row_' + r + ' .col_' + c)

          if ($cell.hasClass('will_live')){
            $cell.addClass('alive')
          }
          else{
            $cell.removeClass('alive')
          }
        }
      }
}


