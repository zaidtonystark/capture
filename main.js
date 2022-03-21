var SpeechRecognition = window.webkitSpeechRecongntion;
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking selfie in 5 sec ";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}
function start(){
    document.getElementById("voiceText").innerHTML="";
    recognintion.start();
}


recognintion.onResult=function(event){
console.log(event);
var Content= event.results[0][0].transcript;
document.getElementById("voiceText").innerHTML=Content;
console.log(Content);
if (Content == "take my selfie")
{
    console.log("taking-selfie");
    speak();
}
}

Webcam.set({
    width:360,height:250,image_format:'png',png_quality:90

});
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}