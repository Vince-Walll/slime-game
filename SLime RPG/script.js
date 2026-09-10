const screen1 = document.getElementById("screen1");
const confirm = document.getElementById("confirm");
const main = document.getElementById("main");
const userName = document.getElementById("userName");

var playerName = "";

const world = document.getElementById("world");
const ambient = document.getElementById("ambient");
const screenEffect = document.getElementById("screenEffect");
const statsBox = document.getElementById("statsBox");

const charBox = document.getElementById("charBox");
const rangeAtk = document.getElementById("rangeAtk");
const character = document.getElementById("character");
const icon = document.getElementById("icon");
const charIcon = document.getElementById("charIcon");
const shadow = document.getElementById("shadow");
const hp = document.getElementById("hp");
const hpNum = document.getElementById("hpNum");
const mana = document.getElementById("mana");
const manaNum = document.getElementById("manaNum");
const bulletAdjuster = document.getElementById("bulletAdjuster");
const bullet = document.getElementById("bullet");
const magicCircle = document.getElementById("magicCircle");
const swordBox = document.getElementById("swordBox");
const sword = document.getElementById("sword");
const strBox = document.getElementById("strBox");
const domain = document.getElementById("domain");
const waterBox = document.getElementById("waterBox");
const waterAttack = document.getElementById("waterAttack");
const vitDamage = document.getElementById("vitDamage");

const xp = document.getElementById("xp");
const level = document.getElementById("level");
const gold = document.getElementById("gold");
const points = document.getElementById("points");
const strPoints = document.getElementById("strPoints");
const agiPoints = document.getElementById("agiPoints");
const intPoints = document.getElementById("intPoints");
const vitPoints = document.getElementById("vitPoints");

//player stats
var damage = 5;
var defense = 1;
var totalHealth = 100;
var health = 100;
var onePercentHealth;
var totalMp = 50;
var mp = 50;
var onePercentMp;

var reqXp = 10;
var xpGain = 0;
var onePercentXp;
var xpGap = 0;
var playerLevel = 0;
var playerGold = 0;
var playerPoints = 0;
var playerStr = 0;
var playerAgi = 0;
var playerInt = 0;
var playerVit = 0;

var buff = 0;
var vitStockDmg = 0;
var vitDmgCounter = 0;

var healthRegeneration = 0.5;
var manaRegeneration = 2;

//enemy const
const slimeBox1 = document.getElementById("slimeBox1");
const slimeShadow1 = document.getElementById("slimeShadow1");
const slimeHpBar1 = document.getElementById("slimeHpBar1");
const slimeHp1 = document.getElementById("slimeHp1");
const line1 = document.getElementById("line1");
const slimeAtk1 = document.getElementById("slimeAtk1");

const kingBox = document.getElementById("kingBox");
const kingAtkBox = document.getElementById("kingAtkBox");
const kingMagicCircle = document.getElementById("kingMagicCircle");
const kingMagicCircle2 = document.getElementById("kingMagicCircle2");
const kingAtk = document.getElementById("kingAtk");
const kingHp = document.getElementById("kingHp");
//enemy stats
var enemyOnePercentHp;
var enemyTotalHp = 100;
var enemyHp1 = 100;
var enemyHp2 = 50000;
//window position tracker
var worldLeft = parseInt(window.getComputedStyle(world).getPropertyValue("left"));
var charBoxLeft = parseInt(window.getComputedStyle(charBox).getPropertyValue("left"));
var bulletLeft;
var slimeBox1Left = parseInt(window.getComputedStyle(slimeBox1).getPropertyValue("left"));
var slimeAtk1Left;
//var kingBoxLeft = parseInt(window.getComputedStyle(kingBox).getPropertyValue("left"));
var kingAtkTop;
var kingAtkLeft;

var movement = 4;
var domainActivate = false;
var agiUltActive = false;
var skill1Element = 0;
var skill2Active = false;
var skill2AgiActive = false;
var skill2StrCd = 0;
var skill2AgiCd = 0;
var agiUltCd = 0;
var intUltCd = 0;
var vitUltCd = 0;
var attackAnimation = false;
var playerNotReady = true;
var introduce = false;
var highGround = false;
var inTraining = false;
var facing = true;
var chase1 = false;
//if enemy is revive
var enemy1 = true;
var enemy2 = true;

//active buttons
const uiButtons = document.getElementById("uiButtons");
const left = document.getElementById("left");
const right = document.getElementById("right");
const stop = document.getElementById("stop");
const skillMovement1 = document.getElementById("skillMovement1");
const skillMovement2 = document.getElementById("skillMovement2");
const attackBtn = document.getElementById("attackBtn");
const train = document.getElementById("train");
const talk1 = document.getElementById("talk1");
const skill1Btn = document.getElementById("skill1Btn");
const skill2Btn = document.getElementById("skill2Btn");
const skill3Btn = document.getElementById("skill3Btn");
const ok = document.getElementById("ok");
const addStr = document.getElementById("addStr");
const addAgi = document.getElementById("addAgi");
const addInt = document.getElementById("addInt");
const addVit = document.getElementById("addVit");
const subStr = document.getElementById("subStr");
const subAgi = document.getElementById("subAgi");
const subInt = document.getElementById("subInt");
const subVit = document.getElementById("subVit");

//ui buttons
confirm.addEventListener("click", goToMain);
icon.addEventListener("click", openStatsBox);
right.addEventListener("click", goRight);
left.addEventListener("click", goLeft);
stop.addEventListener("click", stopMoving);
attackBtn.addEventListener("click", attacking);
ok.addEventListener("click", closeStatsBox);
addStr.addEventListener("click", plusStr);
addAgi.addEventListener("click", plusAgi);
addInt.addEventListener("click", plusInt);
addVit.addEventListener("click", plusVit);
subStr.addEventListener("click", minusStr);
subAgi.addEventListener("click", minusAgi);
subInt.addEventListener("click", minusInt);
subVit.addEventListener("click", minusVit);
skillMovement1.addEventListener("click", flyLeft);
skillMovement2.addEventListener("click", flyRight);


skill1Btn.onclick = element1;
skill2Btn.onclick = useSecondSkill;
skill3Btn.onclick = useUltimate;

train.onclick = goTrain;
talk1.onclick = goChat1;

function goToMain(){
	playerName = userName.value? userName.value: "PLAYER";
	screen1.innerHTML = "";
	screen1.style.display = "none";
	main.style.display = "flex";
	uiButtons.style.display = "flex";
	talk1.style.transform = "scale(0)";
	npc1ChatBox.innerText = `Awesome ${playerName}, Before facing danger`;
	setTimeout(function(){
		npc1ChatBox.innerText = "hone your skills at the training grounds";
	}, 3000);
	setTimeout(function(){
		inTraining = false;
		introduce = true;
		npc1ChatBox.innerText = "to your right.";
		talk1.style.transform = "scale(1)";
		talk1.innerText = "Train";
		talk1.onclick = goTrain;
	}, 5000);
}
function goRight(){
	if(!inTraining){
		movement = 1;
		facing = true;
	}
}
function goLeft(){
	if(!inTraining){
		movement = 2;
		facing = false;
	}
}
function attacking(){
	if(!highGround && introduce){
		movement = 3;
	}
}
function stopMoving(){
		movement = 4;
}

function goingRight(){
	charBoxLeft += 50;
	charBox.style.left = charBoxLeft + "px";
	charBox.style.transform = "translateX(0%)";
	character.style.textAlign = "right";
	character.style.left = "0px";
	rangeAtk.style.left = "0px";
	rangeAtk.style.transform = "rotateY(0deg)";
	character.style.animation = "jump 0.75s linear infinite";
	attackAnimation = false;
}
function goingLeft(){
	charBoxLeft -= 50;
	charBox.style.left = charBoxLeft + "px";
	charBox.style.transform = "translateX(-80%)";
	character.style.textAlign = "left";
	character.style.left = "200px";
	rangeAtk.style.left = "-50px";
	rangeAtk.style.transform = "rotateY(180deg)";
	character.style.animation = "jump 0.75s linear infinite";
	attackAnimation = false;
}
function flyRight(){
	if(worldLeft + 3000 > 790 && charBoxLeft > 300){
		worldLeft -= 50;
 	 world.style.left = worldLeft + "px";
	  charBoxLeft += 50;
		charBox.style.left = charBoxLeft + "px";
		shadow.style.left = charBoxLeft + "px";
	}else{
		if(charBoxLeft + 50 < 2950){
			charBoxLeft += 50;
			charBox.style.left = charBoxLeft + "px";
			shadow.style.left = charBoxLeft + "px";
		}
	}
	if(facing){
		waterBox.style.left = (charBoxLeft + 30) + "px";
	}else{
		waterBox.style.left = (charBoxLeft - 230) + "px";
	}
}
function flyLeft(){
	if(worldLeft < 0 &&  charBoxLeft < 2650){
		worldLeft += 50;
 	 world.style.left = worldLeft + "px";
	  charBoxLeft -= 50;
		charBox.style.left = charBoxLeft + "px";
		shadow.style.left = charBoxLeft + "px";
	}else{
		if(charBoxLeft > 0){
			charBoxLeft -= 50;
			charBox.style.left = charBoxLeft + "px";
			shadow.style.left = charBoxLeft + "px";
		}
	}
	if(facing){
		waterBox.style.left = (charBoxLeft + 30) + "px";
	}else{
		waterBox.style.left = (charBoxLeft - 230) + "px";
	}
}

function element1(){
	if(inTraining){
		npc1ChatBox.innerText = "Red indicates Life Steal by 20% damage + STR";
	}
	if(playerLevel > 0 && !highGround){
		bullet.style.background = "red";
		skill1Btn.style.background = "red";
		skill1Btn.innerText = "STR";
		skill1Element = 1;
		skill1Btn.onclick = element2;
		skill2Btn.style.opacity = "1";
		skill2Btn.style.background = "red";
		skill2Btn.style.borderTop = "solid 1px #000";
		skill1Btn.style.color = "#fff";
		skill1Btn.style.border = "solid 1px #fff";
		skill2Btn.style.fontSize = "25px";
		skill2Btn.style.color = "#fff";
		skill2Btn.innerText = skill2StrCd > 0? skill2StrCd: "/";
		if(playerLevel >= 10){
			skill3Btn.innerText = "";
			skill3Btn.style.background = "red";
			skill3Btn.style.fontSize = "25px";
			skill3Btn.style.color = "#fff";
		}
	}
}
function element2(){
	if(inTraining){
		npc1ChatBox.innerText = "Green indicates 1.5x damage multiplier";
	}
	if(!highGround){
		bullet.style.background = "green";
		skill1Btn.style.background = "green";
		skill1Btn.innerText = "AGI";
		skill1Element = 2;
		skill1Btn.onclick = element3;
		skill2Btn.style.background = "green";
		skill2Btn.style.border = "solid 1px #000";
		if(skill2AgiCd > 0){
			skill2Btn.innerText = skill2AgiCd;
		}else if(skill2AgiActive){
			skill2Btn.innerText = "⩌ ⩌";
			skill2Btn.style.opacity = "0.5";
		}else{
			skill2Btn.innerText = "⩌ ⩌";
			skill2Btn.style.opacity = "1";
		}
		if(playerLevel >= 10){
			if(agiUltCd > 0){
				skill3Btn.innetText = agiUltCd;
			}else{
				skill3Btn.innerText = "";
			}
			skill3Btn.style.background = "green";
		}
	}
}

function element3(){
	if(inTraining){
		npc1ChatBox.innerText = "Blue indicates 2% mana steal + INT";
	}
	if(!highGround){
		bullet.style.background = "#03A9F4";
		skill1Btn.style.background = "#03A9F4";
		skill1Btn.innerText = "INT";
		skill1Element = 3;
		skill1Btn.onclick = element4;
		skill2Btn.style.background = "radial-gradient(transparent, skyblue, blue)";
		skill2Btn.style.border = "none";
		skill2Btn.style.borderTop = "solid 1px #fff";
		skill2Btn.innerText = ""
		skill2Btn.style.opacity = "1";
		if(playerLevel >= 10){
			if(intUltCd > 0){
				skill3Btn.innetText = intUltCd;
			}else{
				skill3Btn.innerText = "";
			}
			skill3Btn.style.background = "blue";
		}
	}
}
function element4(){
	if(inTraining){
		npc1ChatBox.innerText = "Brown converts defense to 2x damage + VIT";
	}
	if(!highGround){
		bullet.style.background = "brown";
		skill1Btn.style.background = "brown";
		skill1Btn.innerText = "VIT";
		skill1Element = 4;
		skill1Btn.onclick = element1;
		skill2Btn.style.background = "brown";
		skill2Btn.style.border = "solid 1px #000";
		skill2Btn.innerText = "◉";
		skill2Btn.style.opacity = "0.3";
		if(playerLevel >= 10){
			skill3Btn.style.fontSize = "15px";
			skill3Btn.style.background = "brown";
			if(vitUltCd > 0){
				skill3Btn.innerText = vitUltCd;
				if(vitUltCd === 0){
					skill3Btn.innerText = vitStockDmg;
				}
			}else{
				skill3Btn.innerText = vitStockDmg;
			}
		}
	}
}
function elementalHit(){
	switch(skill1Element){
		case 1:
			if(health < totalHealth){
				health += (damage / 5) + playerStr;
				hpUpdate();
			}
			buff = 0;
			break;
		case 2: 
		  buff = damage;
			break;
		case 3:
			if(mp < totalMp){
				mp += (totalMp / 50) + (playerInt / 5);
				manaUpdate();
			}
			buff = 0;
			break;
		case 4:
			buff = ((defense * 2) + (playerVit / 10));
			break;
	}
}

//domain function support
function domainExpansion(){
	if(!domainActivate){
		movement = 4;
		domainActivate = true;
		uiButtons.style.display = "none";
		charBox.style.zIndex = "5";
		slimeBox1.style.zIndex = "4";
		kingBox.style.zIndex = "4";
	}else{
		domainActivate = false;
		uiButtons.style.display = "flex";
		charBox.style.zIndex = "4";
		slimeBox1.style.zIndex = "3";
		kingBox.style.zIndex = "3";
	}
}
//ultimate part
function useUltimate(){
	if(playerLevel >= 10){
	switch(skill1Element){
		case 1:
			if(mp >= (totalMp / 2) && !highGround && !inTraining && !domainActivate){
				mp -= (totalMp / 2);
				manaUpdate();
				domainExpansion();
				swordBox.style.display = "flex";
				swordBox.style.animation = "swingRight 0.2s linear 0";
				swordBox.style.left = (charBoxLeft + 20) + "px";
				domain.style.left = (charBoxLeft + 25) + "px";
				setTimeout(function(){
					if(facing){
						swordBox.style.transform = "scale(10) rotateX(0deg) rotateY(0deg) rotate(0deg)";
					}else{
						swordBox.style.transform = "scale(10) rotateX(0deg) rotateY(180deg) rotate(0deg)";
					}
					swordBox.style.top = "250px";
					world.style.left = "-1100px";
			  	world.style.transform = "scale(0.2)";
			  	domain.style.background = "#000";
		  		domain.style.transform = "scale(150)";
				}, 500);
				setTimeout(function(){
					swordBox.style.transition = "0.5s";
				  if(facing){
						swordBox.style.transform = "scale(10) rotateX(0deg) rotateY(0deg) rotate(92deg)";
						swordBox.style.left = (charBoxLeft - 180) + "px";
					}else{
						swordBox.style.transform = "scale(10) rotateX(0deg) rotateY(180deg) rotate(92deg)";
						swordBox.style.left = (charBoxLeft + 230) + "px";
					}
					swordBox.style.top = "20px";
				}, 3000);
				setTimeout(function(){
					domainExpansion();
					screenEffect.style.display = "flex";
					domain.style.background = "transparent";
					domain.style.transform = "scale(0)";
					swordBox.style.transition = "2s";
					swordBox.style.display = "none";
					swordBox.style.transform = "scale(1) rotateX(0deg) rotateY(0deg) rotate(0deg)";
					sword.style.background = "red";
					world.style.left = worldLeft + "px";
					world.style.transform = "scale(1)";
					domainHit();
				}, 3500);
				setTimeout(function(){
					screenEffect.style.display = "none";
				}, 4500);
			}
			break;
		case 2:
			if(mp >= 50 && !agiUltActive && agiUltCd === 0){
				mp -= 50;
				manaUpdate();
				agiUltActive = true;
				skill3Btn.style.opacity = "0.5";
				setTimeout(function(){
					agiUltCd = 30;
					agiUltActive = false;
					skill3Btn.style.opacity = "1";
				}, playerAgi > 100? playerAgi * 100: 10000);
			}
			break;
		case 3:
			if(!domainActivate && intUltCd === 0){
				domain.style.background = "skyblue";
		  	domain.style.transform = "scale(100)";
		  	domain.style.opacity = "0.5";
				domainActivate = true;
				charBox.style.zIndex = "5";
				slimeBox1.style.zIndex = "4";
				kingBox.style.zIndex = "4";
				skill3Btn.style.opacity = "0.5";
				setTimeout(function(){
					domain.style.background = "transparent";
					domain.style.transform = "scale(0)";
					domain.style.opacity = "1";
					domainActivate = false;
					charBox.style.zIndex = "4";
					slimeBox1.style.zIndex = "3";
					kingBox.style.zIndex = "3";
					intUltCd = 30;
					skill3Btn.style.opacity = "1";
				}, playerInt > 100? playerInt * 100: 10000 );
			}
			break;
		case 4:
			if(!domainActivate && vitUltCd === 0){
				domain.style.left = (charBoxLeft + 10) + "px";
				vitDamage.style.left = (charBoxLeft - 30) + "px";
				skill3Btn.innerText = "0";
				setTimeout(function(){
					domain.style.background = "#000";
					domain.style.transform = "scale(30)";
					vitDamage.style.display = "flex";
					domainExpansion();
				}, 500);
				setTimeout(function(){
					domainExpansion();
					vitUltCd = 11;
				 domain.style.background = "#000";
				 domain.style.transform = "scale(0)";
				 damage += vitStockDmg;
				}, 3500);
				setTimeout(function(){
					damage -= vitStockDmg;
					vitDamage.style.display = "none";
				}, 13500);
				setTimeout(function(){
					vitStockDmg = 0;
					vitDmgCounter = 0;
				}, 14000);
			}
			break;
	}
	}
}

//second skill section
function useSecondSkill(){
		switch(skill1Element){
			case 1:
				if(mp >= 20 && !inTraining && !highGround && skill2StrCd === 0 && !domainActivate){
					mp -= 20;
					manaUpdate();
					movement = 4;
					inTraining = true;
					highGround = true;
					skill2Active = true;
					charBox.style.top = "105px";
					swordBox.style.display = "flex";
					strBox.style.display = "flex";
					swordBox.style.left = (charBoxLeft + 20) + "px";
					if(facing){
						strBox.style.left = (charBoxLeft + 50) + "px";
						strBox.style.transform = "rotateY(0deg)";
						swordBox.style.animation = "swingRight 0.2s linear infinite";
					}else{
					  strBox.style.left = (charBoxLeft - 700) + "px";
						strBox.style.transform = "rotateY(180deg)";
						swordBox.style.animation = "swingLeft 0.2s linear infinite";
					}
					setTimeout(function(){
						inTraining = false;
			  		highGround = false;
			  		skill2Active = false;
			  		skill2StrCd = 20;
			  		charBox.style.top = "130px";
						swordBox.style.display = "none";
						strBox.style.display = "none";
					}, playerInt >  30? (playerInt / 10) * 1000: 3000);
				}else if(highGround && !skill2Active){
				  	inTraining = false;
			  		highGround = false;
			  		skill2Active = false;
			  		skill2StrCd = 20;
			  		charBox.style.top = "130px";
						swordBox.style.display = "none";
						strBox.style.display = "none";
				}
				break;
			case 2:
				if(mp >= 20 && skill2AgiCd === 0 && !skill2AgiActive && !domainActivate){
					mp -= 20;
					manaUpdate();
					skill2AgiActive = true;
					character.style.opacity = "0.5";
					skill2Btn.style.opacity = "0.5";
					setTimeout(function(){
						character.style.opacity = "1";
						skill2AgiActive = false;
						skill2AgiCd = 10;
						skill2Btn.style.opacity = "1";
					}, playerInt >  50? playerAgi * 100: 5000);
				}
				break;
			case 3:
		  	if(!inTraining && !highGround && mp > ((manaRegeneration / 10) + 5) && health > 0){
					charBox.style.top = "75px";
					skill2Btn.style.animation = "skillRotation 1s linear infinite";
					movement = 4;
					waterBox.style.display = "flex";
					showSkillMovement();
					skill2Active = true;
					if(facing){
						waterBox.style.left = (charBoxLeft + 30) + "px";
						waterBox.style.transform = "rotateY(0deg) rotate(10deg)" ;
						character.style.transform = "rotate(10deg)";
					}else{
						waterBox.style.left = (charBoxLeft - 230) + "px";
	    			waterBox.style.transform = "rotateY(180deg) rotate(10deg)";
	    			character.style.transform = "rotate(-10deg)";
					}
				}else if(highGround){
					charBox.style.top = "130px";
					skill2Btn.style.animation = "skillRotation 1s linear 0";
					character.style.transform = "rotate(0deg)";
					waterBox.style.display = "none";
					movement = 4;
	  			showSkillMovement();
	  			skill2Active = false;
				}
				break;
		 case 4:
				break;
		}
}

//skill movement support
function showSkillMovement(){
	if(!inTraining && !highGround){
		skillMovement1.style.display = "block";
		skillMovement2.style.display = "block";
		left.style.display = "none";
		right.style.display = "none";
		stop.style.display = "none";
		inTraining = true;
		highGround = true;
	}else{
		skillMovement1.style.display = "none";
		skillMovement2.style.display = "none";
		left.style.display = "block";
		right.style.display = "block";
		stop.style.display = "block";
		inTraining = false;
		highGround = false;
	}
}
function goTrain(){
	if(introduce && facing && !highGround){
		inTraining = true;
		talk1.style.display = "none";
		charBoxLeft = 1500;
		worldLeft = -1200;
		world.style.left = worldLeft + "px";
		charBox.style.left = charBoxLeft + "px";
		shadow.style.left = charBoxLeft + "px";
		charBox.style.top = "110px";
		shadow.style.top = "143px";
		movement = 3;
		train.innerText = "Exit";
		train.onclick = exitTrain;
	}
}
function exitTrain(){
	inTraining = false;
	charBox.style.top = "130px";
	shadow.style.top = "163px";
	movement = 4;
	train.innerText = "Train";
	train.onclick = goTrain;
}
function openStatsBox(){
	statsBox.style.display = "flex";
	main.style.filter = "blur(1.3px)";
	uiButtons.style.filter = "blur(1.3px)";
	movement = 4;
}
function closeStatsBox(){
	if(inTraining && playerLevel < 2){
		npc1ChatBox.innerText = "Tap skill 1 to learn attribute mastery";
		skill1Btn.innerText = "skill 1";
		skill2Btn.innerText = "";
	}
	statsBox.style.display = "none";
	main.style.filter = "blur(0)";
	uiButtons.style.filter = "blur(0)";
	movement = 4;
}
function plusStr(){
	if(playerPoints > 0){
		playerStr++;
		playerPoints--;
		pointsUpdate();
		health += 2;
		totalHealth += 2;
		hpUpdate();
		damage += 0.2;
	}
}
function plusAgi(){
	if(playerPoints > 0){
		playerAgi++;
		playerPoints--;
		pointsUpdate();
		damage += 1;
	}
}

function plusInt(){
	if(playerPoints > 0){
		playerInt++;
		playerPoints--;
		pointsUpdate();
		manaRegeneration += 0.2;
		mp += 4;
		totalMp += 4;
		manaUpdate();
	}
}
function plusVit(){
	if(playerPoints > 0){
		playerVit++;
		playerPoints--;
		pointsUpdate();
		health += 4;
		totalHealth += 4;
		defense += 0.2;
		healthRegeneration += 0.2;
		hpUpdate();
	}
}
function minusStr(){
	if(playerStr > 0){
		playerStr--;
    playerPoints++;
		pointsUpdate();
		health -= 2;
		totalHealth -= 2;
		hpUpdate();
		damage -= 0.2;
	}
}
function minusAgi(){
	if(playerAgi > 0){
		playerAgi--;
		playerPoints++;
		pointsUpdate();
		damage -= 1;
	}
}
function minusInt(){
	if(playerInt > 0){
		playerInt--;
		playerPoints++;
		pointsUpdate();
		manaRegeneration -= 0.2;
		mp -= 4;
		totalMp -= 4;
		manaUpdate();
	}
}
function minusVit(){
	if(playerVit > 0){
		playerVit--;
		playerPoints++;
		pointsUpdate();
		health -= 4;
		totalHealth -= 4;
		defense -= 0.2;
		healthRegeneration -= 0.2;
		hpUpdate();
	}
}

//player movement interval
var move = setInterval(function(){
			switch(movement){
			case 1:
				if(worldLeft + 3000 > 790 && charBoxLeft > 300){
		 	 	worldLeft -= 50;
		 	 	world.style.left = worldLeft + "px";
					goingRight();
				}else{
					if(charBoxLeft + 50 < 2950){
						goingRight();
					}else{
						movement = 4;
					}
				}
				break;
		 case 2:
		 	 if(worldLeft < 0 &&  charBoxLeft < 2650){
		 	 	worldLeft += 50;
		 	 	world.style.left = worldLeft + "px";
					goingLeft();
				}else{
					if(charBoxLeft > 0){
						goingLeft();
					}else{
						movement = 4;
					}
				}
				break;
		case 3:
				charBox.style.left = charBoxLeft;
				character.style.animation = "jump 0.75s linear 0";
				attackAnimation = true;
				break;
		case 4:
				charBox.style.left = charBoxLeft;
				character.style.animation = "jump 0.75s linear 0";
				attackAnimation = false;
				break;
		}
shadow.style.left = charBoxLeft;
	}, 750);
//passive regen && skill cooldown 
var passiveRegeneration = setInterval(function(){
	if(health < totalHealth){
		health += healthRegeneration;
		hpUpdate();
	}
	if(mp < totalMp){
		mp += manaRegeneration;
		manaUpdate();
	}
	if(vitUltCd > 0){
		vitUltCd--;
		if(vitUltCd === 0 && skill1Element === 4){
	  	skill3Btn.innerText = vitStockDmg;
	  }else if(skill1Element === 4){
	  	skill3Btn.innerText = vitUltCd;
	  }
	}
	if(intUltCd > 0){
		intUltCd--;
		if(intUltCd === 0 && skill1Element === 3){
	  	skill3Btn.innerText = "";
	  }else if(skill1Element === 3){
	  	skill3Btn.innerText = intUltCd;
	  }
	}

    if(agiUltCd > 0){
	  agiUltCd--;
	  if(agiUltCd === 0 && skill1Element === 2){
	  	skill3Btn.innerText = "";
	  }else if(skill1Element === 2){
	  	skill3Btn.innerText = agiUltCd;
	  }
	}
	if(skill2StrCd > 0){
		skill2StrCd--;
		if(skill2StrCd === 0 && skill1Element === 1){
			skill2Btn.innerText = "/";
		}else if(skill1Element === 1){
			skill2Btn.innerText = skill2StrCd;
		}
	}
	if(skill2AgiCd > 0){
		skill2AgiCd--;
		if(skill2AgiCd === 0 && skill1Element === 2){
			skill2Btn.innerText = "⩌ ⩌";
		}else if(skill1Element === 2){
			skill2Btn.innerText = skill2AgiCd;
		}
	}else{
		skill2Cd = 0;
		if(skill1Element === 2){
			skill2Btn.innerText = "⩌ ⩌";
		}
	}
}, 1000);

//enemy chasing function
var enemyChase = setInterval(function(){
	if(slimeBox1Left > 2000 && slimeBox1Left - 195 > charBoxLeft + 50 && chase1){
		slimeBox1Left -= 30;
		slimeBox1.style.left = slimeBox1Left + "px";
    slimeShadow1.style.left = slimeBox1Left + "px";
    slimeHpBar1.style.left = slimeBox1Left + "px";
    slime1.style.textAlign = "left";
		slime1.style.animation = "jump 0.75s linear infinite";
		slime1.innerText = "◕⁠o⁠◕⁠";
	}else if(slimeBox1Left + 195 < charBoxLeft && chase1){
		slimeBox1Left += 30;
		slimeBox1.style.left = slimeBox1Left + "px";
    slimeShadow1.style.left = slimeBox1Left + "px";
    slimeHpBar1.style.left = slimeBox1Left + "px";
    slime1.style.textAlign = "right";
		slime1.style.animation = "jump 0.75s linear infinite";
		slime1.innerText = "◕⁠o⁠◕⁠";
	}else{
		slime1.style.animation = "jump 0.75s linear 0";
		slime1.innerText = "◕⁠‿⁠◕⁠";
	}
}, 750);

//attack animation and skills activation damage dealth
	var animate = setInterval(function(){
		  //Damage dealth
			if(attackAnimation){
				if(!agiUltActive){
					magicCircle.style.animation = "recharge 1s linear infinite";
					bullet.style.animation = "launchAtk 1s linear infinite";
					enemyHit();
				}else{
					magicCircle.style.animation = "recharge 0.1s linear infinite";
					bullet.style.animation = "launchAtk 0.1s linear infinite";
					agiUltHit();
				}
				character.style.animation = "jump 0.75s linear 0";
				//attack adjuster
				if((charBoxLeft + 250 > slimeBox1Left && charBoxLeft < slimeBox1Left && facing) || (charBoxLeft - 200 < slimeBox1Left + 50 && charBoxLeft > slimeBox1Left && !facing) && enemy1){
					bulletAdjuster.style.width = facing? (slimeBox1Left + 10) - (charBoxLeft + 50) + "px" : charBoxLeft - (slimeBox1Left + 20) + "px";
				}else if(facing && charBoxLeft > 2700 && enemy2){
					bulletAdjuster.style.width = (2910 - (charBoxLeft + 50)) + "px";
				}else{
					bulletAdjuster.style.width = "195px";
				}
			}else{
				magicCircle.style.animation = "recharge 1s linear 0";
				bullet.style.animation = "launchAtk 1s linear 0";
				bullet.style.left = "0px";
				bulletAdjuster.style.width = "195px";
			}
			//skills damage dealth section
			if(skill2Active){
				switch(skill1Element){
					case 1:
						if(health > 0 && skill2Active){
							strHit();
						}else{
							skill2Active = false;
							useSecondSkill();
						}
						break;
				 case 2: 
				  	console.log("no damage");
				 	break;
				 case 3:
				 	if(mp > ((manaRegeneration / 10) + 2) && health > 0){
				 		if(!domainActivate){
				 			mp -= (manaRegeneration / 10) + 2;
				 			manaUpdate();
				 		}else{
				 			mp -= 0;
				 			manaUpdate();
				 		}
				 		intHit();
				 	}else{
				 		useSecondSkill();
				 	}
				 	break;
				 case 4:
				 	console.log("skill 4 not available");
				 	break;
				}
			}
			//vit ult
			if(skill1Element === 4 && domainActivate){
				var counter = vitStockDmg / 30;
				vitDmgCounter += counter;
				vitDamage.innerText = "+" + vitDmgCounter.toFixed();
			}

            //enemy attack animation starter
			//Damage recieved from slime
			if(slimeBox1Left - 195 < charBoxLeft + 50 && slimeBox1Left > charBoxLeft && !domainActivate){
			  slimeBox1.style.transform = "translateX(-86.66%)";
			  slime1.style.left = "195px";
				slime1.style.textAlign = "left";
				line1.style.transform = "rotateY(180deg)";
				line1.style.width = (slimeBox1Left - (charBoxLeft + 25)) + "px";
				line1.style.left = (195 - (slimeBox1Left - (charBoxLeft + 25))) + "px";
				slimeAtk1.style.animation = "launchAtk 1s linear infinite";
				hitByEnemy1();
				chase1 = false;
			}else if(slimeBox1Left + 225 > charBoxLeft && slimeBox1Left < charBoxLeft && !domainActivate){
				slimeBox1.style.transform = "translateX(0%)";
				slime1.style.left = "0px";
				slime1.style.textAlign = "right";
				line1.style.transform = "rotateY(0deg)";
				line1.style.width = ((charBoxLeft + 25) - (slimeBox1Left + 15)) + "px" ;
				line1.style.left = "30px";
				slimeAtk1.style.animation = "launchAtk 1s linear infinite";
				hitByEnemy1();
				chase1 = false;
			}else if(charBoxLeft + 50 > 2000){
				chase1 = true;
				slimeAtk1.style.animation = "launchAtk 1s linear 0";
		  }else if(charBoxLeft + 50 <= 2000){
		  	slimeAtk1.style.animation = "launchAtk 1s linear 0";
		  }
		  //Damage recieved from king slime
		  if(charBoxLeft + 60 > 2650 && !domainActivate){
		  	kingMagicCircle.style.animation = "kingCharge 2s linear infinite";
		  	kingMagicCircle2.style.animation = "kingCharge2 2s linear infinite";
		 	 kingAtk.style.animation = "drop 2s linear infinite";
				kingAtkBox.style.left = charBoxLeft + "px";
		    hitByEnemy2();
		  }else{
		    kingMagicCircle.style.animation = "kingCharge 2s linear 0";
		  	kingMagicCircle2.style.animation = "kingCharge2 2s linear 0";
		    kingAtk.style.animation = "drop 2s linear 0";
		  }
		}, 100);//end of attack animation
		
		//Building and NPC noticer
		var interaction = setInterval(function(){
		  //training ground
			if(charBoxLeft >= 1500 && charBoxLeft < 1750 && facing && !highGround){
				train.style.display = "block";
			}else if(inTraining && introduce && !highGround){
				train.style.display = "block";
			}else{
				train.style.display = "none";
			}
			//npc 1
		 	if(inTraining && playerLevel < 1 && introduce){
				npc1ChatBox.innerText = playerName + ", You Gain EXP per hit.";
		 	}else if(charBoxLeft < 1350){
				npc1.innerText = "^⁠‿⁠^⁠✿⁠";
				npc1.style.textAlign = "left";
				talk1.style.display = "none";
			 }else if(charBoxLeft + 50 > 1500){
				npc1.innerText = "✿⁠^⁠‿⁠^⁠";
				npc1.style.textAlign = "right";
				talk1.style.display = "none";
			}else if(charBoxLeft + 25 > 1350 || charBoxLeft + 25 > 1450){
				npc1.innerText = "^⁠‿⁠^⁠";
				npc1.style.textAlign = "center";
				talk1.style.display = "block";
			}
			//wont allow the player to enter battle if he's not ready
		  if(charBoxLeft + 50 > 1950 && playerNotReady){
		    goLeft();
		  	ambient.style.background = "red";
		  	if(introduce){
		   	 npc1ChatBox.innerText = playerName + ", Reach LVL 3, then I allow you to explore";
		    }
		  }else if(charBoxLeft < 1050 && playerNotReady){
		    goRight();
		  	ambient.style.background = "red";
		  	if(introduce){
		  		npc1ChatBox.innerText = playerName + ", Reach LVL 3, then I allow you to explore";
		  	}
		  }else if(health > 0){
		  	ambient.style.background = "transparent";
		  }
		  //player ready
		  if(playerLevel > 2){
		  	playerNotReady = false;
		  }
		}, 100);

        //hitting enemy using normal attack
	function enemyHit(){
	  //hitting dummy target
		bulletLeft = parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));
		if(inTraining && bulletLeft === 175){
			xpGain += playerLevel > 2?(playerLevel / 2): 5;
			xpUpdate();
			elementalHit();
		}
		//hitting slime1
		if((charBoxLeft + 250 > slimeBox1Left && charBoxLeft + 30 < slimeBox1Left && bulletLeft === 175 && facing && enemy1) || (charBoxLeft - 200 < slimeBox1Left + 30 && charBoxLeft > slimeBox1Left + 30 && bulletLeft === 175 && !facing && enemy1)){
			elementalHit();
			enemyHp1 -= (damage + buff);
			enemy1Status();
		}
		//hitting kings slime
		if(charBoxLeft + 250 > 2900 && charBoxLeft + 50 < 2900 && bulletLeft === 175 && facing && enemy2){
			elementalHit();
			enemyHp2 -= (damage + buff);
			enemy2Status();
		}
	}//end of enemyHit function
	
	//hitting enemy using magic
	function strHit(){
		//hitting Slime
		if((facing && charBoxLeft + 700 > slimeBox1Left && charBoxLeft < slimeBox1Left && enemy1) || (!facing && charBoxLeft - 650 < slimeBox1Left + 30 && charBoxLeft > slimeBox1Left + 30 && enemy1)){
			enemyHp1 -= ((damage / 5) + (playerStr / 5));
			enemy1Status();
			health += (damage / 10);
			hpUpdate();
		}
		//hitting king
		if(facing && charBoxLeft + 700 > 2900 && charBoxLeft < 2900 && enemy2){
			enemyHp2 -= ((damage / 5) + (playerStr / 5));
			enemy2Status();
			health += (damage / 10);
			hpUpdate();
		}
	}
	function intHit(){
	  //hitting slime
		if((facing && charBoxLeft + 280 > slimeBox1Left && charBoxLeft + 150 < slimeBox1Left && enemy1) || (!facing && charBoxLeft -230 < slimeBox1Left + 30 && charBoxLeft -100 > slimeBox1Left + 30 && enemy1)){
			enemyHp1 -= !domainActivate? (playerInt / 5) + (damage / 5): (playerInt / 2.5) + (damage / 2.5);
			enemy1Status();
		}
		//hitting king slime
		if(facing && charBoxLeft + 280 > 2900 && charBoxLeft < 2900 && enemy2){
			enemyHp2 -= !domainActivate? (playerInt / 5) + (damage / 5): (playerInt / 2.5) + (damage / 2.5);
			enemy2Status();
		}
	}

    //hitting enemy using domain
	function domainHit(){
	//hitting slime
		if((facing && charBoxLeft + 900 > slimeBox1Left && charBoxLeft < slimeBox1Left && enemy1) || (!facing && charBoxLeft - 850 < slimeBox1Left + 30 && charBoxLeft > slimeBox1Left + 30 && enemy1)){
			enemyHp1 -= (damage * 10) + playerStr;
			enemy1Status();
			health = totalHealth;
			hpUpdate();
		}
		if((facing && charBoxLeft + 900 > 2900 && charBoxLeft < 2900 && enemy2)){
			enemyHp2 -= (damage * 10) + playerStr;
			enemy2Status();
			health = totalHealth;
			hpUpdate();
		}
	}
	function agiUltHit(){
		//slime 
		if((facing && charBoxLeft + 250 > slimeBox1Left && charBoxLeft < slimeBox1Left && enemy1) || (!facing && charBoxLeft - 200 <  slimeBox1Left + 30 && charBoxLeft > slimeBox1Left + 30 && enemy1)){
			elementalHit();
			enemyHp1 -= (damage + buff);
			enemy1Status();
		}
		//king
		if(facing && charBoxLeft + 250 > 2900 && charBoxLeft + 50 < 2900  && enemy2){
			elementalHit();
			enemyHp2 -= (damage + buff);
			enemy2Status();
		}
	}
	//enemy status
	function enemy1Status(){
		enemyTotalHp = 100;
	  enemyOnePercentHp = enemyTotalHp  / 100;
		slimeHp1.style.width = (enemyHp1 / enemyOnePercentHp) + "%";
		if(enemyHp1 <= 0){
		    slimeHp1.style.width = "0%";
				xpGain += (playerLevel + 20);
			  xpUpdate();
			  playerGold += 5;
			  goldUpdate();
			  slimeBox1.style.opacity = "0";
			  slimeHpBar1.style.opacity = "0";
			  slimeShadow1.style.opacity = "0";
			  enemy1 = false;
			  bulletAdjuster.style.width = "195px";
			  setTimeout(function(){
			  	enemyHp1 = 100;
		  	  slimeHp1.style.width = "100%";
			    slimeBox1Left = 2250;
			  	slimeBox1.style.left = slimeBox1Left + "px";
			 	 slimeHpBar1.style.left = slimeBox1Left + "px";
				  slimeShadow1.style.left = slimeBox1Left + "px";
			  }, 1000);
			  setTimeout(function(){
			  	enemy1 = true;
				  slimeBox1.style.opacity = "1";
			    slimeHpBar1.style.opacity = "1";
		  	  slimeShadow1.style.opacity = "1";
			  }, 10000);
			 } 
		 }


         function enemy2Status(){
		enemyTotalHp = 50000;
		enemyOnePercentHp = enemyTotalHp  / 100;
		kingHp.style.width = (enemyHp2 / enemyOnePercentHp) + "%";
  	if(enemyHp2 <= 0){
				kingHp.style.width = "0%";
				xpGain += (playerLevel + 100);
			  xpUpdate();
			  kingBox.style.opacity = "0";
			  kingHpBar.style.opacity = "0";
			  kingShadow.style.opacity = "0";
			  kingAtkBox.style.opacity = "0";
			  enemy2 = false;
			  bulletAdjuster.style.width = "195px";
			  setTimeout(function(){
			  	enemyHp2 = 50000;
		  	  kingHp.style.width = "100%";
			  	enemy2 = true;
				  kingBox.style.opacity = "1";
			    kingHpBar.style.opacity = "1";
		  	  kingShadow.style.opacity = "1";
		  	  kingAtkBox.style.opacity = "1";
			  }, 30000);
			}
  }
	//damage received 
	//from slime
	function hitByEnemy1(){
		slimeAtk1Left = parseInt(window.getComputedStyle(slimeAtk1).getPropertyValue("left"));
		if(slimeAtk1Left === 175 && enemy1 && !highGround){
			slime1.innerText = "◠⁠‿⁠◕⁠";
			var dam1 = 10 - defense;
			if(!skill2AgiActive){
				if(dam1 > 0){
					health -= dam1;
					hpUpdate();
				}else{
					health -= 2;
				}
			}else{
				health -= 0;
			}
			if(skill1Element === 4){
				enemyHp1 -= 10;
				enemy1Status();
			}
			if(playerLevel >= 10 && skill1Element === 4 && vitUltCd === 0){
					vitStockDmg += 10;
					skill3Btn.innerText = vitStockDmg;
				}
		}
	}
	//damage received from king
	function hitByEnemy2(){
		kingAtkTop = parseInt(window.getComputedStyle(kingAtk).getPropertyValue("top"));
	  kingAtkLeft = parseInt(window.getComputedStyle(kingAtkBox).getPropertyValue("left"));
		if((kingAtkTop === 0 && kingAtkLeft + 20 < charBoxLeft + 50 && kingAtkLeft + 20 > charBoxLeft && enemy2) || (kingAtkTop === 0 && kingAtkLeft + 30 > charBoxLeft && kingAtkLeft + 30 < charBoxLeft + 50 && enemy2)){
			 var dam2 = 30 - defense;
				if(!skill2AgiActive){
					if(dam2 > 0){
						health -= dam2;
					}else{
						health -= 10;
					}
			  }else{
			  	health -= 0;
			  }
			  if(skill1Element === 4){
					enemyHp2  -= 50;
					enemy2Status();
				}
				if(playerLevel >= 10 && skill1Element === 4 && vitUltCd === 0){
					vitStockDmg += 50;
					skill3Btn.innerText = vitStockDmg;
				}
			}
		}

        //updator
function hpUpdate(){
	if(health > totalHealth){
	 	health = totalHealth;
	}
	onePercentHealth = totalHealth / 100;
	hp.style.width = (health / onePercentHealth) + "%";
	hpNum.innerText = health.toFixed() + "/" + totalHealth.toFixed();
	if(health <= 0){
		health = 0;
		vitStockDmg = 0;
		skill3Btn.innerText = vitStockDmg;
		ambient.style.background = "red";
		movement = 4;
		charBoxLeft = 1300;
		worldLeft = -1000;
		charBox.style.left = charBoxLeft + "px";
		shadow.style.left = charBoxLeft + "px";
		world.style.left = worldLeft + "px";
		character.innerText = "=⁠_⁠=";
		charIcon.innerText = "=⁠_⁠=";
	}else if(health / onePercentHealth < 30){
		character.innerText = ">⁠▂⁠<⁠";
		charIcon.innerText = ">⁠▂⁠<⁠";
	}else if(health / onePercentHealth < 50){
		character.innerText = ">⁠ . <⁠";
		charIcon.innerText = ">⁠ . <⁠";
	}else if(health / onePercentHealth > 50){
		character.innerText = "⩌'⤙'⩌ ";
		charIcon.innerText = "⩌'⤙'⩌";
	}
}
function manaUpdate(){
	if(mp > totalMp){
		mp = totalMp;
	}
	onePercentMp = totalMp / 100;
	mana.style.width = (mp / onePercentMp) + "%";
	manaNum.innerText = mp.toFixed() + "/" + totalMp;
	if(mp <= 0){
		mp = 0;
	}
}
function goldUpdate(){
	gold.innerText = "$" + playerGold;
}
function pointsUpdate(){
	points.innerText = "Points: " + playerPoints;
	strPoints.innerText = playerStr;
	agiPoints.innerText = playerAgi;
	intPoints.innerText = playerInt;
	vitPoints.innerText = playerVit;
}
//xp rotation
function xpUpdate(){
	onePercentXp = reqXp / 100;
	xp.style.width = (xpGain / onePercentXp) + "%";
	//level up
	if(xpGain >= reqXp){
		xpGap = xpGain - reqXp;
		xpGain = 0;
		playerLevel++;
		playerPoints += 5;
		plusStr();
		plusAgi();
		plusInt();
		plusVit();
		reqXp += 5;
		onePercentXp = reqXp / 100;
	  xp.style.width = (xpGain / onePercentXp) + "%";
	  level.innerText = playerLevel;
	  openStatsBox();
	  pointsUpdate();
	  //extra xp consumtion
		if(xpGap > 0){
			xpGain += xpGap;
			xpGap = 0;
			xpUpdate();
		}
	}
}
//dialog
function goChat1(){
	inTraining = true;
	movement = 4;
	npc1ChatBox.innerText = "Welcome!";
	talk1.style.transform = "scale(0)";
	setTimeout(function(){
		npc1ChatBox.innerText = "I'm eager to meet you";
	}, 2000);
	setTimeout(function(){
		npc1ChatBox.innerText = "May I know your name?";
		talk1.style.transform = "scale(1)";
	}, 3500);
	talk1.onclick = goToScreen1;
}
function goToScreen1(){
	screen1.style.display = "flex";
	main.style.display = "none";
	uiButtons.style.display = "none";
}










//Meta Part Still learning computer
// --- PC KEYBOARD CONTROLS ---
document.addEventListener("keydown", function(e){
  let key = e.key.toLowerCase();
  
  // don't trigger when typing name
  if(e.target.tagName === "INPUT") return;

  switch(key){
    case "d":
    case "arrowright":
      movement = 1; // go right
      goRight();
      break;
    case "a":
    case "arrowleft":
      movement = 2; // go left
      goLeft();
      break;
    case "w":
    case "arrowup":
    case " ":
      if(movement !== 3){ // jump
        movement = 3;
        setTimeout(()=> movement = 4, 750);
      }
      break;
    case "s":
    case "arrowdown":
      movement = 4; // stop / idle
      break;
    case "j": // normal attack
      attackAnimation = true;
      setTimeout(()=> attackAnimation = false, 500);
      break;
    case "k": // skill 2
      if(typeof useSecondSkill === "function") useSecondSkill();
      break;
    case "l": // skill 3 / ult
      if(typeof useThirdSkill === "function") useThirdSkill();
      break;
    case "i": // open stats
      if(typeof openStatsBox === "function") openStatsBox();
      break;
  }
});

document.addEventListener("keyup", function(e){
  let key = e.key.toLowerCase();
  if(key === "d" || key === "a" || key === "arrowright" || key === "arrowleft"){
    movement = 4; // stop when release A/D
  }
});