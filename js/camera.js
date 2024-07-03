const bottonCamara = document.querySelector("[data-video-boton]");
const video = document.querySelector("[data-video]");
const campoCamara = document.querySelector("[data-camera]");

const tomarFoto = document.querySelector("[data-tomar-foto]");
const mensaje = document.querySelector("[data-mensaje]");
const canvas = document.querySelector("[data-video-canvas]");
let imgUrl ="";
const bottonEnviar = document.querySelector("[data-enviar]");

bottonCamara.addEventListener("click", async () => {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    bottonCamara.style.display = "none";
    campoCamara.style.display = "block";
    video.srcObject = iniciarVideo;
});



tomarFoto.addEventListener("click",()=>{
    canvas.getContext("2d").drawImage(video,0,0,canvas.width,canvas.height)
    imgUrl = canvas.toDataURL("image/jpeg");
    campoCamara.style.display="none";
    mensaje.style.display="block";
});



bottonEnviar.addEventListener("click",()=>{
    const recibirDatos = localStorage.getItem("registro");
    const convertirDatos =JSON.parse(recibirDatos);
    convertirDatos.img_url= imgUrl;
    localStorage.setItem("registro" ,JSON.stringify(convertirDatos));
    window.location.href="./abrir-cuenta-form-3.html"
});