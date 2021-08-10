/*
Jason Lazera
jason_lazera@student.uml.edu 
GUI Programming I
*/

$( function() {
    $( "#tabs" ).tabs();
  } );
  
  /*
  reimplementing table creation for a new tab
  Used this code from jfiddle to help http://jsfiddle.net/axrwkr/ujUu2/ 
  */
  function create_tab(){
    //define variables needed for table creation
    var min_col = parseInt(document.getElementById("min_col").value);
    var max_col = parseInt(document.getElementById("max_col").value);
    var min_row = parseInt(document.getElementById("min_row").value);
    var max_row = parseInt(document.getElementById("max_row").value);
  
    var temp1, temp2;
    var mult_table = "";
  
    //get table outline
    mult_table += "<table class='table_2'>";
  
    // iterate through rows
    for (temp1 = min_row - 1; temp1 <= max_row; temp1++) {
      mult_table = mult_table + "<tr>"; //for each temp1++, add a space
  
      //make sure there is blank space
      if (temp1 == min_row - 1) {
        mult_table = mult_table + "<td></td>";// <td></td> creates empty space
  
        //iterate through the columns
        for (temp2 = min_col; temp2 <= max_col; temp2++) {
          mult_table = mult_table + "<td>" + temp2 + "</td>";//adds a space, temp2 value, then goes onto next
        }
      }
  
      else {
        mult_table = mult_table + "<td>" + temp1 + "</td>";
        for (temp2 = min_col; temp2 <= max_col; temp2++) {
          mult_table = mult_table + "<td>" + temp1 * temp2 + "</td>"; //table multiplication computed
        }
      }
  
      mult_table = mult_table + "</tr>"; //ends the table
    }
  
    //keep track of the index
    var index = $("div#tabs ul li").length + 1;
  
    //add the tabs together
    $("div#tabs ul").append(
      "<li><a href='#tab" + index + "'>Tab " + index + "</a><input type='checkbox' class='tabCheckBox'></li>"
    );
  
    //this puts info into the tab
    $("div#tabs").append(
      "<div id='tab" + index + "'>" + mult_table + "</div>"
    );
  
    //tab is reset
    $("div#tabs").tabs("refresh");
  }
  
  /*
  I used this link for more tab code: https://www.tutorialrepublic.com/faq/how-to-check-a-checkbox-is-checked-or-not-using-jquery.php
  */
  function delete_tab(){
    $("#tabs ul li").each(function() {
      if ($(this).find('input').prop("checked")) {
        $(this).remove();
        $("#tabs").tabs("refresh");
      }
    });
  }
  