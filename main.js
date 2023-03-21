var reconocimiento = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6rtSuqyzV/model.json", listo);
Webcam.set({
    width: 360,
    height: 300,
    image_format:"png",
    png_quality:90
})
Webcam.attach("#camara")

function tomarFoto(){
     Webcam.snap(function(data_uri){
        document.getElementById("captura").innerHTML = '<img src="'+data_uri+'" id="foto">'
     })
}

function listo(){
    console.log("vamooooooossss si cargo!")
}

function reconocerObjeto(){
    foto = document.getElementById("foto")
    reconocimiento.classify(foto, mostrarResultado)
}

function mostrarResultado(error, resultados){
    if(!error){
        objetoDetectado = resultados[0].label;
        probabilidad = Math.round(resultados[0].confidence * 100);
        console.log(resultados);
        document.getElementById("objeto").innerHTML = "öb;ę+ô: " + objetoDetectado;
        document.getElementById("probabilidad").innerHTML = "prœbæb¡līđäđ: " + probabilidad + "%";
    }
}