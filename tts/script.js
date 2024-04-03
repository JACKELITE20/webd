const textInput = document.getElementById('text-input');
const convertBtn = document.getElementById('convert-btn');
const stopBtn = document.getElementById('stop-btn');
let speechSynthesis = window.speechSynthesis;
let speechUtterance;

convertBtn.addEventListener('click', () => {
    let text = textInput.value.trim();
    if (text !== '') {
        speechUtterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speechUtterance);
        speechUtterance.onend = () => {
            convertBtn.disabled = false;
            stopBtn.disabled = true;
        };
        convertBtn.disabled = true;
        stopBtn.disabled = false;
    }
});

stopBtn.addEventListener('click', () => {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        convertBtn.disabled = false;
        stopBtn.disabled = true;
    }
});
