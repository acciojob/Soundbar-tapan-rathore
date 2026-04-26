//your JS code here. If required.

const sounds = {
	applause: new Audio("sounds/applause.mp3"),
	boo: new Audio("sounds/boo.mp3"),
	gasp: new Audio("sounds/gasp.mp3"),
	tada: new Audio("sounds/tada.mp3"),
	victory: new Audio("sounds/victory.mp3"),
	wrong: new Audio("sounds/wrong.mp3")
};

document.querySelectorAll(".btn").forEach(btn=>{
	btn.addEventListener("click", ()=>{
		const key = btn.innerText;
		if(key=="stop"){
			Object.values(sounds).forEach(sound =>{
				sound.pause();
				sound.currentTime=0;
			});
		}else{
			sounds[key].currenTime=0;
			sounds[key].play();
		}
	})
})



