//mobile menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-nav");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("res");
    navMenu.classList.toggle("res");
    navLink.forEach(n => n.classList.toggle("res"));
}
//close menu
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
  hamburger.classList.remove("res");
  navMenu.classList.remove("res");
  navLink.forEach(n => n.classList.remove("res"));
}

//Text typing
var typing=new Typed(".job-text", {
  strings: [ "WEB DEVELOPER.","FLUTTER DEVELOPER."],
  typeSpeed: 200,
  backSpeed: 60,
  loop: true,
});

//project type text animation
function projectTypeAnime(id){
  var projectType = document.querySelector(`${id}`);
projectType.innerHTML = projectType.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: `${id} .letter`,
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: `${id}`,
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
}
projectTypeAnime('#projectType');

  //project name text1 animation
  function projectNameAnime(id){
    var projectName = document.querySelector(`${id}`);
projectName.innerHTML = projectName.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: `${id} .letter`,
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  })
  .add({
    targets: `${id}`,
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  }
  projectNameAnime('#projectName');

  //project name text2 animation
 function projectName2(id){
  var projectName2 = document.querySelector(id);
  projectName2.innerHTML = projectName2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
    .add({
      targets: `${id} .letter`,
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: `${id} .letter`,
      translateX: [0,0],
      opacity: [1,1],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    });
 }
 projectName2('#projectClass');

//PROJECT DETAILS CHANGE
var projectNum = 1;
 function projectDetailsChange(){
  var image = document.getElementById('projectImg');
  var projectType = document.getElementById('projectType');
  var projectName = document.getElementById('projectName');
  var projectClass = document.getElementById('projectClass');
  var projectDesc = document.getElementById('projectDesc');
  if(projectNum == 1){
    $("#projectImg").fadeOut('slow');
    projectType.innerHTML = 'ANDROID APP'
    projectTypeAnime('#projectType');
    projectName.innerHTML = 'COWIN ALERT'
    projectNameAnime('#projectName');
    projectClass.innerHTML = 'SLOT INFORM APP'
    projectName2('#projectClass');
    projectDesc.innerHTML = 'Cowin Alert gives the number of available vaccine slots in your area.';

    setTimeout(function(){
      image.src = 'assets/mob_project2.png'
     $("#projectImg").fadeIn('slow')
    },1500)
    document.getElementById('exploreBtn').setAttribute('onclick','exploreBtn(2)');
    projectNum++;
  } else{
    $("#projectImg").fadeOut('slow');
    projectType.innerHTML = 'ANDROID APP'
    projectTypeAnime('#projectType');
    projectName.innerHTML = 'WALPER'
    projectNameAnime('#projectName');
    projectClass.innerHTML = 'WALLPAPER APP'
    projectName2('#projectClass');
    projectDesc.innerHTML = 'WalPer produces a never-ending stream of stunning wallpapers - for any device.';

    setTimeout(function(){
      image.src = 'assets/mob_project1.png'
     $("#projectImg").fadeIn('slow')
    },1500)
    document.getElementById('exploreBtn').setAttribute('onclick','exploreBtn(1)');
    projectNum--;
  }
}

//Project more info btn pressed
function exploreBtn(projectNum){
  switch(projectNum){
    case 1 : window.location = "https://play.google.com/store/apps/details?id=com.jerilalbi.wallper_pro";
    break;
    case 2: window.location = "https://github.com/Jeril-albi/vaccine-notifier";
    break;
  }
}

//Web Projects

projectTypeAnime('#webProjectType');
projectNameAnime('#webProjectName');
projectName2('#webProjectClass');

//PROJECT DETAILS CHANGE
var webProjectNum = 1;
 function webProjectDetailsChange(){
  var image = document.getElementById('webProjectImg');
  var projectType = document.getElementById('webProjectType');
  var projectName = document.getElementById('webProjectName');
  var projectClass = document.getElementById('webProjectClass');
  var projectDesc = document.getElementById('webProjectDesc');
  if(webProjectNum == 1){
    $("#webProjectImg").fadeOut('slow');
    projectType.innerHTML = 'WEBSITE'
    projectTypeAnime('#webProjectType');
    projectName.innerHTML = 'JA.'
    projectNameAnime('#webProjectName');
    projectClass.innerHTML = 'PORTFOLIO WEBSITE'
    projectName2('#webProjectClass');
    projectDesc.innerHTML = 'Personal portfolio website of my own to show case my skills and projects.';

    setTimeout(function(){
      image.src = 'assets/web_project2.png'
     $("#webProjectImg").fadeIn('slow')
    },1500)
    document.getElementById('webExploreBtn').setAttribute('onclick','webExploreBtn(2)');
    webProjectNum++;
  } else{
    $("#webProjectImg").fadeOut('slow');
    projectType.innerHTML = 'WEBSITE'
    projectTypeAnime('#webProjectType');
    projectName.innerHTML = 'VOYAGE'
    projectNameAnime('#webProjectName');
    projectClass.innerHTML = 'TRAVEL WEBSITE'
    projectName2('#webProjectClass');
    projectDesc.innerHTML = 'Voyage helps in gathering travel information, and opinions of travel-related content.';

    setTimeout(function(){
      image.src = 'assets/web_project1.png'
     $("#webProjectImg").fadeIn('slow')
    },1500)
    document.getElementById('webExploreBtn').setAttribute('onclick','webExploreBtn(1)');
    webProjectNum--;
  }
}

//Web Explore button
function webExploreBtn(num){
  switch(num){
    case 1: window.location = 'https://github.com/Jeril-albi/Travel-website';
    break;
    case 2: window.location = "https://jerilalbi.in";
    break;
  }
}

//SKILLS
var skills = [
  {
    skill: "FLUTTER",
    percentage: "80",
  },
  {
    skill: "JAVASCRIPT",
    percentage: "65",
  },
  {
    skill: "HTML",
    percentage: "92",
  },
  {
    skill: "CSS",
    percentage: "87",
  },
];

var skillContent = "";

skills.map(function(value){
  skillContent += `
  <div class="skill-row">
          <div class="skill-sect-row">
            <div class="skill-bar" style="width: ${value.percentage}%;">
              ${value.skill}
            </div>
            <div class="skill-hr-line" style="width: ${102 - value.percentage}%;"></div>
          </div>
          <div class="skill-percet-row">
            ${value.percentage}%
          </div>
  </div>
  `
});
document.getElementById('skillContent').innerHTML = skillContent;

//CONTACT ME
var modal = document.getElementById("myModal");
var contactBtn = document.getElementById("contactBtn");
var getStartBtn = document.getElementById("getStartBtn");
var submit_btn = document.getElementById("submit_btn");
var span = document.getElementsByClassName("close")[0];

contactBtn.onclick = function() {
  modal.style.display = "block";
}

getStartBtn.onclick = function(){
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function msgSubmit(){
  var name = document.getElementById('contactName');
  var email = document.getElementById('contactEmail');
  var msg = document.getElementById('contactMsg');
  if(name.value == '' || name.value==null){
    document.getElementById("nameError").setAttribute("style","display:block")
    name.setAttribute("style","width:80%;margin-top: 0;")
    
  }
  function validate(){
    
  }
  console.log(name);
  console.log(email);
  console.log(msg);
}

//FOOTER
var year = new Date().getFullYear() 
document.getElementById('copyright').innerHTML = `&copy; Jeril Albi ${year}`
