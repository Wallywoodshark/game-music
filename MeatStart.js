let topImages = document.querySelector(".types");
let bottomimage = document.querySelector(".secondPlace")
let buttonNext2 = document.querySelector("button");
let topText = document.querySelector(".Topshit");
let Mage = document.querySelector(".Names1");
let Soldier = document.querySelector(".Names2");
let Acher = document.querySelector(".Names3");
let Healer = document.querySelector(".Names4");
let Fighter = document.querySelector(".Names5");
let Castle = document.querySelector("#secondPlaceCastle");
let Cave  = document.querySelector("#secondPlaceCave");
let Trap1 = document.querySelector("#Trapfall");
let Trap2 = document.querySelector("#Trapdown");
let Traps= document.querySelector(".Traps");
let passages = document.querySelector(".thirdplace1");
let pass1 = document.querySelector("#passway1");
let pass2 = document.querySelector("#passway2");
let text31 =document.querySelector("#thirdplace1text");
let deathtest=document.querySelector(".Death");
let death=document.querySelector("#last1");
let fight=document.querySelector(".thirdplace2");
let fightStage1=document.querySelector('#D1');
let fightStage2=document.querySelector('#D2');
let fightStage3=document.querySelector('#D3');
let fightStageEnd=document.querySelector('#D4');
let fighting=document.querySelector('.thirdplace2')
let winend=document.querySelector('.winning')
let winning=document.querySelector('#win')


Soldier.onclick=function(){
    topImages.style.display="none";
    topText.style.display="none";
    bottomimage.style.display="block";
}
Acher.onclick=function(){
    topImages.style.display="none";
    topText.style.display="none";
    bottomimage.style.display="block";
}
Healer.onclick=function(){
    topImages.style.display="none";
    topText.style.display="none";
    bottomimage.style.display="block";
}
Mage.onclick=function(){
    topImages.style.display="none";
    topText.style.display="none";
    bottomimage.style.display="block";
}
Fighter.onclick=function(){
    topImages.style.display="none";
    topText.style.display="none";
    bottomimage.style.display="block";
}
Castle.onclick=function(){
    passages.style.display="flex";
    bottomimage.style.display="none";
    pass1.style.display="flex";
    text31.style.display='flex'
}
//left side
        pass1.onclick=function(){
            passages.style.display="none";
            Traps.style.display="flex";
            Trap2.style.display="none";
            text31.style.display="none";
        }

        Trap1.onclick=function(){
            Traps.style.display='none';
            deathtest.style.display="flex";
        }
         death.onclick=function(){
            topImages.style.display='flex';
            topText.style.display='flex';
            deathtest.style.display='none';
        }
//right side in castle
pass2.onclick=function(){
    fightStage2.style.display='none'
    fightStage3.style.display='none'
    fightStageEnd.style.display='none'
    fighting.style.display='flex'
    passages.style.display='none'
}
fightStage1.onclick=function(){
 fightStage1.style.display='none'
 fightStage2.style.display='flex'
}
fightStage2.onclick=function(){
    fightStage2.style.display='none'
    fightStage3.style.display='flex'
}
fightStage3.onclick=function(){
    fightStage3.style.display='none'
    fightStageEnd.style.display='flex'
}
fightStageEnd.onclick=function(){
    fighting.style.display='none'
    winend.style.display='flex'
    winning.style.display='flex'
}

