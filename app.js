
let states =[
   {
      state: "ALABAMA",
      url: "http://www.asbpa.alabama.gov/",
      board: "Alabama State Board of Public Accountancy",
      {
         requirement: "Alabama License Renewal Deadline:",
         date: ' 9/31 ',
         fontAwesome: "fa-calendar",
         provision: " annually",
      }
   }
];



var keys = Object.values( states[0] );

function requirements() {


   for(var i = 0 ; i <= states.length ; i++) {

         console.log(states);

let name = keys[0];
document.getElementById('state').innerHTML = name;

let nameRequirement = keys[1];
document.getElementById('requirement').innerHTML = nameRequirement;

let nameDate = keys[2];
document.getElementById('date').innerHTML = nameDate;


let nameFa = keys[3];
let fa = document.getElementById('fa');
fa.className += " " + nameFa + " ";

let nameProvision = keys[4];
document.getElementById('provision').innerHTML = nameProvision;


let nameBoard = keys[6];
document.getElementById('board').innerHTML = nameBoard;

   var element = document.getElementById("board");

   var parent = element.parentNode;
   var link = document.createElement('a');
   link.href = 'http://www.asbpa.alabama.gov/';
   link.appendChild(element.cloneNode(true));
   parent.replaceChild(link, element);


   }

}

requirements();
