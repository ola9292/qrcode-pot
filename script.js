let qr = document.getElementById('qrcode');
let qrBtn = document.getElementById('qr-btn');
let size = document.getElementById('size');
let url = document.getElementById('url');
qrBtn.addEventListener('click',function(){
    qr.innerHTML = "";
    let finalUrl = url.value;
    let finalSize = size.value;

if(url.value == "" || size.value == ""){
    document.getElementById('alert').style.display = 'block'
    setTimeout(function(){
        document.getElementById('alert').style.display = 'none'
    },3000)
}else{
    
    //wait 100 ms to get img src
    setTimeout(function(){
        const saveUrl = qr.querySelector('img').src;
        createSaveBtn(saveUrl)
        document.getElementById('save').style.display = 'block'
    },100)
    var qrcode = new QRCode(qr, {
        text: finalUrl,
        width: finalSize,
        height: finalSize,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });


    
}
 
      
    url.value = "";
    // qrcode.clear();
})
function createSaveBtn(save){
    let a = document.createElement('a')
    a.download = 'qrcode';
    a.href = save
    a.innerHTML = 'Download QR';
    let saveBtn = document.getElementById('save')
    saveBtn.appendChild(a)
    console.log(a.href)
  
}