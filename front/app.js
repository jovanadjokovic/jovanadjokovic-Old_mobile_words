//let canvas = document.getElementById('mobileCanvas')
//let ctx = c.getContext('2d')
//ctx.moveTo(window.getInnerWidth/2,500)

let stage = new createjs.Stage('mobileCanvas')
window.stage = stage
createjs.Touch.enable(stage)

let mobile = new Image();
mobile.src = "images/Nokia_3310.png"
mobile.onload = handleImageLoad


function handleImageLoad(event) {
    var image = event.target;
    var bitmap = new createjs.Bitmap(image);
    bitmap.scaleX=0.33
    bitmap.scaleY=0.33
    stage.addChild(bitmap);
    stage.update();
}


//  let bitmap = new createjs.Bitmap(mobile);
// stage.addChild(bitmap);
// stage.update();


// var queue = new createjs.LoadQueue();
// queue.on("complete", function(event) {
//     var image = queue.getResult("image");
//     var bmp = new createjs.Bitmap(image);
//     // Do stuff with bitmap
// });
// queue.loadFile({src:"./images/Nokia_3310.png", id:"nokia"});

// let mobile = new createjs.Bitmap('./images/Nokia_3310.png')
// mobile.x = 500
// mobile.y=500
// mobile.image.onload = function() {
//     stage.update();
// }

//stage.addChild(mobile)