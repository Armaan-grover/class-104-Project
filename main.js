Webcam.attach("webcam")
Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90
});

function takeImg() {
    Webcam.snap(function (dataUrl) {
        document.getElementById("capturedPhoto").innerHTML = '<img id="capturedImage" src="' + dataUrl + '"/>'
    })
}

console.log(ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fsawcncnZ/.json", modelLoaded)
function modelLoaded() {
    console.log("hello I love Maths")
}