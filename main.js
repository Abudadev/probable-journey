var camera = document.getElementById("camera");
console.log("Version number",ml5.version)
var prediction1 = "";
var prediction2 = "";

Webcam.set({
    width: 300,
    height:250,
    image_format:"jpeg",
    image_Quality:100
});

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img src='+data_uri+' id="picture"/>'
    });
};


function speak1(){
    var synth = window.speechSynthesis;
    var speakdata1 = "The first prediction is"+prediction1+" ";
    var speakdata2 = "The second prediction is"+prediction2+" ";
    var utterthis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(utterthis);
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oBstVlDcH/model.json",con)

function con(){
    console.info("Your model is working!!!")
}

function check(){
    img = document.getElementById("picture");
    classifier.classify(img, gotresults);
}

function gotresults(error,results){
 if(error){
  console.error(error);
 }

 else{
    console.log(results);
    prediction1 = results[0].label;
    prediction2 = results[1].label;
    speak1();

    if(results[0].label == "TU"){
     document.getElementById("hg1").innerHTML = "&#128077;";
    }

    if(results[0].label == "TD"){
        document.getElementById("hg1").innerHTML = "&#128078;";
    }
    
    if(results[0].label == "RF"){
        document.getElementById("hg1").innerHTML = "&#9994;";
    }

    if(results[0].label == "VS"){
        document.getElementById("hg1").innerHTML = "&#9996;";
    }


    if(results[1].label == "TU"){
        document.getElementById("hg2").innerHTML = "&#128077;";
    }
   
       if(results[1].label == "TD"){
           document.getElementById("hg2").innerHTML = "&#128078;";
    }
       
       if(results[1].label == "RF"){
           document.getElementById("hg2").innerHTML = "&#9994;";
    }
   
       if(results[1].label == "VS"){
           document.getElementById("hg2").innerHTML = "&#9996;";
    }
 }
}