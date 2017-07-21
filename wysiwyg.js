
var x = [{
	  title: "Samurai0",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
}, {
	  title: "G",
	  name: "washington",
	  bio: "Serving under fasdfasfdMin afadsfasdfadsf afmohdfhgdfhgdto Yosnest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://www.biography.com/.image/t_share/MTIwNjA4NjM0MDA1MzkwODYw/george-washington-9524786-1-402.jpg" },
	  {
	  title: "Samurai2",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
	},
	{
	  title: "Samurai3",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minam fasfasdfoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
}, {
	  title: "G",
	  name: "washington",
	  bio: "Serving undefasdfasfsaradsfadsfadsfds  Minamohdfhgdfhgdto Yosnest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://www.biography.com/.image/t_share/MTIwNjA4NjM0MDA1MzkwODYw/george-washington-9524786-1-402.jpg" },
	  {
	  title: "Samurai2",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
	}
];

var outputE1 = document.getElementById("outputE1");
for (var counter = 0; counter < x.length; counter++) {
  // Give each person element a unique identifier
  outputE1.innerHTML += `<div class="person_container" id="person--${counter}"></div>`;
  document.getElementById(`person--${counter}`).innerHTML += `<header>${x[counter].title} and ${x[counter].name}</header>`;
  document.getElementById(`person--${counter}`).innerHTML += `<section>${x[counter].bio}</section>`;
  document.getElementById(`person--${counter}`).innerHTML += `<footer><img src="${x[counter].image}" width="200px" height="200px"></footer>`;
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person_container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  	containerEl[i].addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
    this.classList.toggle('border');
	document.getElementById("text").focus();
	check();
  });
};    


function check() {
if (document.getElementById("text").value !== "") {
	for(var i=0;i<containerEl.length;i++) {
		if (document.getElementById(`person--${i}`).classList.contains("border") === true) {
			document.getElementById(`person--${i}`).firstChild.nextSibling.innerHTML = document.getElementById("text").value;
				
		}
	}
}
}

document.getElementById("text").onkeydown = enter;

function enter(e){
//var code = (e.keyCode ? e.keyCode : e.which);
//e.preventDefault();
if(e.keyCode == 13) { //Enter keycode
 document.getElementById("text").value = "";
}
}

	
	

