document.getElementById("enter").onclick = function() {myFunction()};

function myFunction(){
    let userName = prompt("What's your name?","");

    if (userName === "admin" || userName === "Admin"){
        let password = prompt("Enter password", "");
        if (password === "TheMaster") {
            alert("Welcome!");
        } else if (password === "" || password === null){
            alert("Canceled");
        } else {
            alert("I don't know you"); 
        }
    } else if (userName === "" || userName === null){
        alert("Canceled");
    } else {
        alert("I don't know you");
    }

})