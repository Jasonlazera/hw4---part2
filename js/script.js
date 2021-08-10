/*
Jason Lazera
jason_lazera@student.uml.edu 
GUI Programming I 
*/

$(function(){

    $.validator.addMethod("greaterThan", function(value, element, params) {
      return this.optional(element) || parseInt(value) >= parseInt($(params).val());
    }, "The second number must <em> not </em> be less than the first number you inputted. Please enter it in again.");
  
    //rules are created for the input fields
    $("#form").validate({
      rules: {
        min_col: {
          required: true,
          number: true,
          range: [-50,50],
        },
        max_col:{
          required: true,
          number: true,
          range: [-50,50],
          greaterThan: "#min_col"
        },
        min_row: {
          required: true,
          number: true,
          range: [-50,50],
        },
        max_row: {
          required: true,
          number: true,
          range: [-50,50],
          greaterThan: "#min_row"
        }
      },
      submitHandler: function(form) {
        create_tab();
        input_and_table();
      }
    });
  });
  
  //table creation
  function input_and_table() {
  
    // define variables necessary to build the table
    var min_col = parseInt(document.getElementById("min_col").value);
    var max_col = parseInt(document.getElementById("max_col").value);
    var min_row = parseInt(document.getElementById("min_row").value);
    var max_row = parseInt(document.getElementById("max_row").value);
  
    // warnings and messages are defined
    var warning=document.getElementById("warning");
    var warning_message = "";
  
    var temp1, temp2;
    var mult_table = "";
  
    // iterate through the rows
    for (temp1 = min_row - 1; temp1 <= max_row; temp1++) {
      mult_table = mult_table + "<tr>"; //add space
  
      if (temp1 == min_row - 1) {
        mult_table = mult_table + "<td></td>";// <td></td> creates the empty space
  
        // itereate through the columns
        for (temp2 = min_col; temp2 <= max_col; temp2++) {
          mult_table = mult_table + "<td>" + temp2 + "</td>"; //adds space, then moves to next value
        }
      }
  
      //if you dont need to check
      else {
        mult_table = mult_table + "<td>" + temp1 + "</td>";
        for (temp2 = min_col; temp2 <= max_col; temp2++) {
          mult_table = mult_table + "<td>" + temp1 * temp2 + "</td>"; //computes the multiplication for the table
        }
      }
  
      mult_table = mult_table + "</tr>"; //table complete
    }
    
    //update the table
    document.getElementById("mult_table").innerHTML = mult_table;
  }
  
  