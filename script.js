const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const output = document.getElementById("output");

let recognition;

if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
} else {
    alert("Speech Recognition not supported. Use Google Chrome.");
}

startBtn.onclick = () => {
    recognition.start();
};

stopBtn.onclick = () => {
    recognition.stop();
};

recognition.onresult = (event) => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
    }
    output.value = transcript;
};