const ufo = document.querySelector('.ufo');
const laser =  document.querySelector('.ufo__laser');
const person = document.querySelector('img');

function clearStage() {
  const clearTL = new TimelineMax();
  
  clearTL
		.set(person, { y: '50', autoAlpha: 0 })
		.set(ufo, { x: '-=800', onComplete: showContainer });
  
	function showContainer() {
		ufo.style.display = 'flex';
	}

	return clearTL;
}

function ufoMagic() {
  const ufoTL = new TimelineMax();

 	ufoTL
  	.to(ufo, 2.5, { x: '+=800', ease: Back.easeInOut.config(1.2) })
		.to(laser, 3, { autoAlpha: 1, ease: Expo.easeInOut  })
		.to(person, 2, { autoAlpha: 1, y: '-=175%' })
		.to(person, 1, { autoAlpha: 0, ease: Power4.easeInOut } )
		.to(laser, 1, { autoAlpha: 0 })
		.to(ufo, 2, { x: '-=800', ease: Back.easeInOut.config(1.3) });
 
  return ufoTL;
}


function run() {  
  const masterTL = new TimelineMax();
  
  masterTL
    .add(clearStage(), 'scene-clear-state')
		.add(ufoMagic(), 'scene-ufo')
};

run();