$(document).ready(function() {
  var color = 'black';
  var box = '.box'
  $(box).on('click', function() {
    $(this).addClass(color);
  })

  $(box).on('dblclick', function() {
    $(this).removeClass(color);
  })

  $('#reset').on('click', function() {
    $('.box').removeClass(color) // Using "this" would have accessed #reset.
  })
  $('#reset').on('dblclick', function() {
    $('.box').removeClass('red blue green yellow black')
  })

  $('#red').on('click', function() {
    color = 'red';
  })
  $('#blue').on('click', function() {
    color = 'blue';
  })
  $('#green').on('click', function() {
    color = 'green';
  })
  $('#yellow').on('click', function() {
    color = 'yellow';
  })
  $('#white').on('click', function() {
    color = 'black';
  })










})
