var StName = document.getElementById("name");
var roll = document.getElementById("roll");
var dept = document.getElementById("dept");
var gpa = document.getElementById("gpa");
var btn = document.getElementById("Btn");

btn.addEventListener('click', function(pera){
    pera.preventDefault();
    // console.log(StName.value);

    if(StName.value == ''){
        alert("vai name faka");
    }
    else if(roll.value == ''){
        alert("vai roll faka");
    }
    else if(dept.value == ''){
        alert("vai dept faka");
    }
    else if(gpa.value == ''){
        alert("vai gpa faka");
    }
    else{
        // alert("Login Success");
        var tbody = document.getElementById("tbody");
        var tr = document.createElement('tr');
        // console.log(tr);

        // for name 
        var td = document.createElement('td');
        td.innerHTML = StName.value;
        tr.appendChild(td);
        // tbody.appendChild(tr);
        // name ends here 

        // for id 
        var td1 = document.createElement('td');
        td1.innerHTML = roll.value;
        tr.appendChild(td1);
        // tbody.appendChild(tr);
        // id ends here 

        // for dept 
        var td2 = document.createElement('td');
        td2.innerHTML = dept.value;
        tr.appendChild(td2);
        // tbody.appendChild(tr);
        // name ends here 

        // for name 
        var td3 = document.createElement('td');
        td3.innerHTML = gpa.value;
        tr.appendChild(td3);
        // tbody.appendChild(tr);
        // name ends here 

        tbody.appendChild(tr);
    }
});