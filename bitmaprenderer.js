/* global XMLHttpRequest */

let xhr = new XMLHttpRequest();

xhr.open('GET','./logo.png');
xhr.responseType = 'arraybuffer';

xhr.onload = xhr.onerror = async function(e){
    let blob = new Blob([xhr.response],{type: 'image/jpeg'});
    console.log(blob);
    let url = URL.createObjectURL(blob);
    console.log(url);
    let imgNode = document.createElement('img');
    document.body.append(imgNode);
    imgNode.src = url;
    
    
    await (async()=> {
        console.log('aa');
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('bitmaprenderer');
        let image = await createImageBitmap(blob)
        context.transferFromImageBitmap(image);
        document.body.append(canvas);
    })()
}
xhr.send();
