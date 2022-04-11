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

//project-explore
function exploreBtn(projectNum){
  switch(projectNum){
    case 1 : window.location = "https://play.google.com/store/apps/details?id=com.jerilalbi.wallper_pro";
    break;
    case 2: window.location = "https://github.com/Jeril-albi/vaccine-notifier";
    break;
  }
}

//project type text animation
function projectTypeAnime(){
  var projectType = document.querySelector('.project-type');
projectType.innerHTML = projectType.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.project-type .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.project-type',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
}
projectTypeAnime();

  //project name text1 animation
  function projectNameAnime(){
    var projectName = document.querySelector('.project-title');
projectName.innerHTML = projectName.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.project-title .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  })
  .add({
    targets: '.project-title',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  }
  projectNameAnime();

  //project name text2 animation
 function projectName2(){
  var projectName2 = document.querySelector('.rproject-title');
  projectName2.innerHTML = projectName2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
    .add({
      targets: '.rproject-title .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: '.rproject-title .letter',
      translateX: [0,0],
      opacity: [1,1],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    });
 }
 projectName2();

  //IMAGE ANIMATION
  
  

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
    projectTypeAnime();
    projectName.innerHTML = 'COWIN ALERT'
    projectNameAnime();
    projectClass.innerHTML = 'SLOT INFORM APP'
    projectName2();
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
    projectTypeAnime();
    projectName.innerHTML = 'WALPER'
    projectNameAnime();
    projectClass.innerHTML = 'WALLPAPER APP'
    projectName2();
    projectDesc.innerHTML = 'WalPer produces a never-ending stream of stunning wallpapers - for any device.';

    setTimeout(function(){
      image.src = 'assets/mob_project1.png'
     $("#projectImg").fadeIn('slow')
    },1500)
    document.getElementById('exploreBtn').setAttribute('onclick','exploreBtn(1)');
    projectNum--;
  }
}