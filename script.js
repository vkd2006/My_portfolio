const words = ["Web Developer", "Developer", "Java Developer", "Python Developer", "Content Writer"];
let wordIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect(){
    if (charIndex < words[wordIndex].length){
        typingElement.textContent += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(typeEffect, 120);
    }else{
        setTimeout(eraseEffect, 1500);
    }

}

function eraseEffect() {
    if (charIndex > 0){
        typingElement.textContent = 
          words[ordIndex].substring(0 ,charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 80);
    }else{
        wordIndex = (wordIndex + 1) % words.length
    }
}