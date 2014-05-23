$(document).ready( function(){
  console.log('asfsaf')

  $('.clickable').on('click', function(){
      console.log('bitchin')
      $(this).toggleClass('alive')
  });
})
