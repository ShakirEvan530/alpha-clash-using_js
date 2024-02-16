// function play()
//     {
//         // hide the home screen . To hide the screen add the hidden class to the hom section 
//         // Show the playground
//         const homeSection = document.getElementById('home-screen');
//         homeSection.classList.add('hidden')
//         // console.log(homeSection.classList)

//         // show the playground
//         const playGroundSection = document.getElementById('play-ground');
//         playGroundSection.classList.remove('hidden')
//         // console.log(playGroundSection.classList)
//     }

function continueGame(){
    // step-1 : generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your Random Alphabet', alphabet);

    // set a randomly genrated alphabet to the screen  (Show it)
  const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText =alphabet;
   
   
    // set background color 
    setBackgroundColorById(alphabet);
} 
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}