function slide1() {
    document.getElementById('slide1').src = "./src/img/1.jpg";
    setTimeout("slide2()", 5000)
}

function slide2() {
    document.getElementById('slide2').src = "./src/img/2.jpg";
    setTimeout("slide3()", 5000)
}

function slide3() {
    document.getElementById('slide3').src = "./src/img/3.jpg";
    setTimeout("slide1()", 5000)
}

array1 = new Array("./src/img/1.jpg", "./src/img/2.jpg", "./src/img/-3.jpg")

function comeco() {
    document.getElementById('imgId').src = array1[0]
    document.form.texto.value = "0"
}

function mais() {
    document.form.texto.value = Math.floor(1 + 1 - 2 + (document.form.texto.value) * 1 + 1)
    if (document.form.texto.value > 2) { document.form.texto.value = 0 }
}

function menos() {
    document.form.texto.value = Math.floor(1 + 1 - 2 + (document.form.texto.value) * 1 - 1)
    if (document.form.texto.value < 0) { document.form.texto.value = 2 }
}

function regular() {
    document.getElementById('imgId').src = array1[document.form.texto.value];
    setTimeout("regular()", 1)
}