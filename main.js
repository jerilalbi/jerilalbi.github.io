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

//PROJECT DETAILS CHANGE
var appIndex = 0;
var webIndex = 0;
async function projectDetailsChange(isAppProject){
  var response = await fetch("assets/data/projects.json");
  var data = await response.json();
  var appProjects = data.mobile;
  var webProjects = data.web;
  if(isAppProject){
    if(appProjects.length == appIndex){
      appIndex = 0;
    }
      var image = document.getElementById('projectImg');
      var projectType = document.getElementById('projectType');
      var projectName = document.getElementById('projectName');
      var projectClass = document.getElementById('projectClass');
      var projectDesc = document.getElementById('projectDesc');
      var exploreProject = document.getElementById('exploreBtn');
       exploreProject.href = appProjects[appIndex].more_info;

      $("#projectImg").fadeOut('slow');
          projectType.innerHTML = 'ANDROID APP'
          projectTypeAnime('#projectType');
          projectName.innerHTML = appProjects[appIndex].app_name
          projectNameAnime('#projectName');
          projectClass.innerHTML = appProjects[appIndex].app_info
          projectName2('#projectClass');
          projectDesc.innerHTML = appProjects[appIndex].app_desc
      
          setTimeout(function(){
            image.src = appProjects[appIndex].img
            appIndex++;
           $("#projectImg").fadeIn('slow')
          },1500)
  }else{
    if(webProjects.length == webIndex){
      webIndex = 0;
    }
    var image = document.getElementById('webProjectImg');
    var projectType = document.getElementById('webProjectType');
    var projectName = document.getElementById('webProjectName');
    var projectClass = document.getElementById('webProjectClass');
    var projectDesc = document.getElementById('webProjectDesc');
    var exploreProject = document.getElementById('webExploreBtn');
       exploreProject.href = webProjects[webIndex].more_info;

    $("#webProjectImg").fadeOut('slow');
    projectType.innerHTML = 'WEBSITE'
    projectTypeAnime('#webProjectType');
    projectName.innerHTML = webProjects[webIndex].website_name
    projectNameAnime('#webProjectName');
    projectClass.innerHTML = webProjects[webIndex].website_info
    projectName2('#webProjectClass');
    projectDesc.innerHTML = webProjects[webIndex].website_desc;

    setTimeout(function(){
      image.src = webProjects[webIndex].img
      webIndex++
     $("#webProjectImg").fadeIn('slow')
    },1500)
  }
}

projectDetailsChange(true);
projectDetailsChange(false);

//SKILLS
async function skillUpdate(){
var response = await fetch("assets/data/skill.json");
var data = await response.json();
var skills = data.skills;
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
}

skillUpdate();

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
