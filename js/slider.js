/*
Jason Lazera
jason_lazera@student.uml.edu
GUI Programming I
*/

//I used this website: https://www.tutorialspoint.com/jqueryui/jqueryui_slider.htm
//implement the sliders
$(function() {
    $( "#mincol_slider" ).slider({
       orientation:"horizontal",
       value:0,
       range: [-50, 50],
       min: -50,
       max: 50,
       slide: function( event, ui ) {
          $( "#min_col" ).val( ui.value );
          $("#form").valid();
       }
    });
    $( "#min_col" ).val( $( "#mincol_slider" ).slider( "value" ) );
 });
 
 $(function() {
 
    $( "#maxcol_slider" ).slider({
       orientation:"horizontal",
       value:0,
       range: [-50, 50],
       min: -50,
       max: 50,
       slide: function( event, ui ) {
          $( "#max_col" ).val( ui.value );
          $("#form").valid();
       }
    });
    $( "#max_col" ).val( $( "#maxcol_slider" ).slider( "value" ) );
 });
 
 $(function() {
    $( "#minrow_slider" ).slider({
       orientation:"horizontal",
       value:0,
       range: [-50, 50],
       min: -50,
       max: 50,
       slide: function( event, ui ) {
          $( "#min_row" ).val( ui.value );
          $("#form").valid();
       }
    });
    $( "#min_row" ).val( $( "#minrow_slider" ).slider( "value" ) );
 });
 
 $(function() {
    $( "#maxrow_slider" ).slider({
       orientation:"horizontal",
       value:0,
       range: [-50, 50],
       min: -50,
       max: 50,
       slide: function( event, ui ) {
          $( "#max_row" ).val( ui.value );
          $("#form").valid();
       }
    });
    $( "#max_row" ).val( $( "#maxrow_slider" ).slider( "value" ) );
 });
 