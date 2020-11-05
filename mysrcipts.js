var row = 1;
var count = " ";
var selectedRow = null;
// var number=3;

function onFormSubmit() {
    var formData = readFormData();
    if (row >10 && selectedRow == null) {
        // console.log("before  "+row);
        // // row=row+1;
        // console.log(" after"+row); 
        insertRecord();

        //  block of code to be executed if condition1 is true
    } else if (selectedRow === null) {
        insertNewRecord();
        row++; //  block of code to be executed if the condition1 is false and condition2 is true
    } else {
        updateRecord(formData, count); //  block of code to be executed if the condition1 is false and condition2 is false
    }
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["address"] = document.getElementById("address").value;
    formData["city"] = document.getElementById("city").value;
    formData["pin"] = document.getElementById("pin").value;
    formData["phone"] = document.getElementById("phone").value;
    return formData;
}

function insertNewRecord() {
    var formData = readFormData();
    var name = formData.name;
    var address = formData.address;
    var city = formData.city;
    var pin = formData.pin;
    var phone = formData.phone;
    //alert(formData);

    console.log("insert" + row);

    document.getElementById("slno_" + row).innerHTML = row;
    document.getElementById("name_" + row).innerHTML = name;
    document.getElementById("address_" + row).innerHTML = address;
    document.getElementById("city_" + row).innerHTML = city;
    document.getElementById("pin_" + row).innerHTML = pin;
    document.getElementById("phone_" + row).innerHTML = phone;
    //console.log(name+ " "address +" "+ city + " " + pin +" "+phone)
    document.getElementById("img_" + row + "_0").src = "edit-icon.png";
    document.getElementById("img_" + row + "_1").src = "del_hover.png";

}

function resetForm() {
    console.log("reset" + row);

    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("pin").value = "";
    document.getElementById("phone").value = "";
    selectedRow = null;
    console.log("reset selectrow " + selectedRow);
}

function editRow(td) {
    console.log("edit");

    // for(var i=td;i<10;i++){

    // }
    selectedRow = td;
    count = selectedRow;
    console.log("select of edit of selecterow td " + selectedRow);
    console.log("select of edit of count td " + count);

    document.getElementById("name").value = document.getElementById("name_" + td).innerHTML;
    document.getElementById("address").value = document.getElementById("address_" + td).innerHTML;
    document.getElementById("city").value = document.getElementById("city_" + td).innerHTML;
    document.getElementById("pin").value = document.getElementById("pin_" + td).innerHTML;
    document.getElementById("phone").value = document.getElementById("phone_" + td).innerHTML;
    console.log("successfully called editrow");
    var btn = document.getElementById("btn1");
    btn.innerHTML = 'Update';

}

function updateRecord(formData, count) {
    console.log("update");
    var name = formData.name;
    console.log(name);
    var address = formData.address;
    var city = formData.city;
    var pin = formData.pin;
    var phone = formData.phone;
    console.log("update of count value td " + count);
    document.getElementById("name_" + count).innerHTML = name;
    document.getElementById("address_" + count).innerHTML = address;
    document.getElementById("city_" + count).innerHTML = city;
    document.getElementById("pin_" + count).innerHTML = pin;
    document.getElementById("phone_" + count).innerHTML = phone;
    resetForm();
    var btn = document.getElementById("btn1");
    btn.innerHTML = 'Add';
}



function deleteRow(td) {


    if (confirm("Are you sure to delete record?")) {
        td = parseInt(td);


        // document.getElementById("slno_" + td).innerHTML = "";
        // document.getElementById("name_" + td).innerHTML = "";
        // document.getElementById("address_" + td).innerHTML = "";
        // document.getElementById("city_" + td).innerHTML = "";
        // document.getElementById("pin_" + td).innerHTML = "";
        // document.getElementById("phone_" + td).innerHTML = "";

        var length = document.getElementById("list").rows.length;

        for (let i = td; i < length - 1; i++) {

            document.getElementById("slno_" + i).innerHTML = document.getElementById("slno_" + (i + 1)).innerHTML === "" ? "" : parseInt(document.getElementById("slno_" + (i + 1)).innerHTML) - 1;
            document.getElementById("name_" + i).innerHTML = document.getElementById("name_" + (i + 1)).innerHTML;
            document.getElementById("address_" + i).innerHTML = document.getElementById("address_" + (i + 1)).innerHTML;
            document.getElementById("city_" + i).innerHTML = document.getElementById("city_" + (i + 1)).innerHTML;
            document.getElementById("pin_" + i).innerHTML = document.getElementById("pin_" + (i + 1)).innerHTML;
            document.getElementById("phone_" + i).innerHTML = document.getElementById("phone_" + (i + 1)).innerHTML;
            console.log("  "+length);
            // if ( i<length+1) {
            //     continue;
            //     resetForm();
            //   }
        //        document.getElementById("slno_" + i).innerHTML = "";
        // document.getElementById("name_" + i).innerHTML = "";
        // document.getElementById("address_" + i).innerHTML = "";
        // document.getElementById("city_" + i).innerHTML = "";
        // document.getElementById("pin_" + i).innerHTML = "";
        // document.getElementById("phone_" + i).innerHTML = "";
            // document.getElementById("img_" + i+1 + "_0").src = "edit1.png";
            // document.getElementById("img_" + i+1 + "_1").src = "del.png";


        }


        console.log("row----- previous" + row);
        row = row - 1;
        console.log("row----- after" + row);
        document.getElementById("slno_" + row).innerHTML = "";
        document.getElementById("name_" + row).innerHTML = "";
        document.getElementById("address_" + row).innerHTML = "";
        document.getElementById("city_" + row).innerHTML = "";
        document.getElementById("pin_" + row).innerHTML = "";
        document.getElementById("phone_" + row).innerHTML = "";
            document.getElementById("img_" + row+ "_0").src = "edit1.png";
            document.getElementById("img_" + row+ "_1").src = "del.png";
            editRow1();

        //delete last row if rowcount > 10
    }

}
function editRow1(){
    console.log("editrow1...."+row);
    document.getElementById("slno_" + row).innerHTML = document.getElementById("slno_" + (row + 1)).innerHTML === "" ? "" : parseInt(document.getElementById("slno_" + (row + 1)).innerHTML) - 1;
    document.getElementById("name_" + row).innerHTML = document.getElementById("name_" + (row + 1)).innerHTML;
    document.getElementById("address_" + row).innerHTML = document.getElementById("address_" + (row + 1)).innerHTML;
    document.getElementById("city_" + row).innerHTML = document.getElementById("city_" + (row + 1)).innerHTML;
    document.getElementById("pin_" + row).innerHTML = document.getElementById("pin_" + (row + 1)).innerHTML;
    document.getElementById("phone_" + row).innerHTML = document.getElementById("phone_" + (row + 1)).innerHTML;
    document.getElementById("img_" + row+ "_0").src = "edit-icon.png";
    document.getElementById("img_" + row+ "_1").src = "del_hover.png";
    // document.getElementById("slno_" + row+1).innerHTML = "";
    //     document.getElementById("name_" + row+1).innerHTML = "";
    //     document.getElementById("address_" + row+1).innerHTML = "";
    //     document.getElementById("city_" + row+1).innerHTML = "";
    //     document.getElementById("pin_" + row+1).innerHTML = "";
    //     document.getElementById("phone_" + row+1).innerHTML = "";
            // document.getElementById("img_" + row+1+ "_0").src = "edit-icon.png";
            // document.getElementById("img_" + row+1+ "_1").src = "del_hover.png";
            console.log("clear rw");
            if(row+1 === 11){
                var deletee = document.getElementById("row_"+(row+1));
                console.log(deletee);
                     deletee.remove();
            }
            row++;
            // document.getElementById("slno_" + row+1).innerHTML = " ";
            // document.getElementById("name_" + row+1).innerHTML = " ";
            // document.getElementById("address_" + row+1).innerHTML = " ";
            // document.getElementById("city_" + row+1).innerHTML = " ";
            // document.getElementById("pin_" + row+1).innerHTML = " ";
            // document.getElementById("phone_" + row+1).innerHTML = " ";
            //     document.getElementById("img_" + row+1+ "_0").src = "edit1.png";
            //     document.getElementById("img_" + row+1+ "_1").src = "del.png";
}

function insertRecord() {


    var table = document.getElementById("list");
    var newRow = table.insertRow(row);
    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    var cell3 = newRow.insertCell(3);
    var cell4 = newRow.insertCell(4);
    var cell5 = newRow.insertCell(5);
    var cell6 = newRow.insertCell(6);
    var cell7 = newRow.insertCell(7);

    // var img='<img id="img_1_0" onclick="editRow("+row+")" src="edit1.png" width="40" height="25">';

    newRow.setAttribute("id","row_"+row)
    cell0.setAttribute("class", "td1", );
    cell0.innerHTML = '<img src="edit-icon.png" id="img_' + row + '_0" width="40px" height="25px" onClick="editRow(' + row + ')"></img>';
    cell1.setAttribute("class", "td1");
    cell1.innerHTML = '<img src="del_hover.png" id="img_' + row + '_1"  width="40px" height="25px" onClick="deleteRow(' + row + ')"></img>';
    // var img1 = document.createElement('img'); 
    // img1.src = "del.png"; 
    // cell1.document.getElementById("id","img_"+row+"_1").appendChild(img1);
    cell2.setAttribute("id", "slno_" + row);
    cell2.setAttribute("class", "td1");
    cell3.setAttribute("id", "name_" + row);
    cell3.setAttribute("class", "td1");
    cell4.setAttribute("id", "address_" + row);
    cell4.setAttribute("class", "td1");
    cell5.setAttribute("id", "city_" + row);
    cell5.setAttribute("class", "td1");
    cell6.setAttribute("id", "pin_" + row);
    cell6.setAttribute("class", "td1");
    cell7.setAttribute("id", "phone_" + row);
    cell7.setAttribute("class", "td1");

    //    cell0.innerHTML = document.getElementById("img_"+row+"_0").src="edit-icon.png";
    //    cell1.innerHTML = document.getElementById("img_"+row+"_1").src="del_hover.png";
    cell2.innerHTML = row;
    console.log(row);
    cell3.innerHTML = document.getElementById("name").value;
    cell4.innerHTML = document.getElementById("address").value;
    cell5.innerHTML = document.getElementById("city").value;
    cell6.innerHTML = document.getElementById("pin").value;
    cell7.innerHTML = document.getElementById("phone").value;

}