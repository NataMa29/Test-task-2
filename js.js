function myFunc() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1); 
    var totalNumbeOfRows = table.rows.length;
    
    var c1 = row.insertCell(0);
    var c2 = row.insertCell(1);
    var c3 = row.insertCell(2);
    var c4 = row.insertCell(3);
    var c5 = document.createElement("button");
 
    c2.contentEditable= true;
    c3.contentEditable= true;
    c4.contentEditable= true;
    c1.innerText = totalNumbeOfRows - 1;
    c2.innerText = document.getElementById("name").value;
    c3.innerText = document.getElementById("email").value;
    c4.innerText = document.getElementById("age").value;
    c5.innerText = "x";
    row.appendChild(c5);
    c5.onclick = function(){
      return deleteRow(this);
  };
  document.getElementsByTagName("td").contentEditable = true;
  }

  function deleteRow(btn){
   (btn).closest("tr").remove();
  }

 

  