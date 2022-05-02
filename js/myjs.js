var coll = document.getElementsByClassName("toInteract");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  document.getElementById("defaultOpen").click();

window.onload = function(){
    var username = localStorage.getItem("username");
    var password = localStorage.getItem("password");
    if(username != "ali"  && password != "12345678"){
      window.location = 'index.html';
    }
    document.getElementById("name").innerHTML = localStorage.getItem("name");
    document.getElementById("address").innerHTML = localStorage.getItem("address");
    document.getElementById("phone").innerHTML = localStorage.getItem("phone");
    document.getElementById("city").innerHTML = localStorage.getItem("city");
    document.getElementById("email").innerHTML = localStorage.getItem("email");
    document.getElementById("objective").innerHTML = localStorage.getItem("objective");
    document.getElementById("skill").innerHTML = localStorage.getItem("skill");
    document.getElementById("education").innerHTML = localStorage.getItem("education");
                                      
    document.getElementById("name1").innerHTML = localStorage.getItem("name");
    document.getElementById("address1").innerHTML = localStorage.getItem("address");
    document.getElementById("phone1").innerHTML = localStorage.getItem("phone");
    document.getElementById("city1").innerHTML = localStorage.getItem("city");
    document.getElementById("email1").innerHTML = localStorage.getItem("email");
    document.getElementById("objective1").innerHTML = localStorage.getItem("objective");
    document.getElementById("skill1").innerHTML = localStorage.getItem("skill");
    document.getElementById("education1").innerHTML = localStorage.getItem("education");   

    document.getElementById("name2").innerHTML = localStorage.getItem("name");
    document.getElementById("address2").innerHTML = localStorage.getItem("address");
    document.getElementById("phone2").innerHTML = localStorage.getItem("phone");
    document.getElementById("city2").innerHTML = localStorage.getItem("city");
    document.getElementById("email2").innerHTML = localStorage.getItem("email");
    document.getElementById("objective2").innerHTML = localStorage.getItem("objective");
    document.getElementById("skill2").innerHTML = localStorage.getItem("skill");
    document.getElementById("education2").innerHTML = localStorage.getItem("education");

    document.getElementById("name3").innerHTML = localStorage.getItem("name");
    document.getElementById("address3").innerHTML = localStorage.getItem("address");
    document.getElementById("phone3").innerHTML = localStorage.getItem("phone");
    document.getElementById("city3").innerHTML = localStorage.getItem("city");
    document.getElementById("email3").innerHTML = localStorage.getItem("email");
    document.getElementById("objective3").innerHTML = localStorage.getItem("objective");
    document.getElementById("skill3").innerHTML = localStorage.getItem("skill");
    document.getElementById("education3").innerHTML = localStorage.getItem("education");
}


const form = document.querySelector("#logout");

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
    localStorage.setItem("username", "");
    localStorage.setItem("password","");
	
    localStorage.setItem("name","");
    localStorage.setItem("address","");
    localStorage.setItem("phone","");
    localStorage.setItem("city","");
    localStorage.setItem("email","");
    localStorage.setItem("objective","");
    localStorage.setItem("skill","");
    localStorage.setItem("education","");

    window.location = 'index.html';

});

const pdfprint = document.querySelector("#download");

pdfprint.addEventListener("submit", async function (event) {
  event.preventDefault();
    window.print();               
});  

