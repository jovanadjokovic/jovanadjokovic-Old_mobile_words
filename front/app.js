
let stage = new createjs.Stage('mobileCanvas')
window.stage = stage
createjs.Touch.enable(stage)
let numbers=[]

let word = ''
let addGraphics = () => {

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


let audio = new Audio('./sounds/click.mp3');


let addNumber = (x, y, number) => {
    
    let button = new Image();
    button.src = "images/"+number+".png"
    //button.src = "images/icon.png"
    button.onload = (event) => {
        var image = event.target;
        var bitmap = new createjs.Bitmap(image)
        bitmap.x=x
        bitmap.y=y
        bitmap.scaleX=0.38
        bitmap.scaleY=0.38
        bitmap.name = number 
        numbers.push(bitmap)
        stage.addChild(bitmap)
        stage.update()
        bitmap.addEventListener("click", () => {
            let click=audio.cloneNode();
            click.play();
            createjs.Tween.get(bitmap).to({scaleX: 0.37, scaleY: 0.37}, 100).call(() => {
                stage.update()
                createjs.Tween.get(bitmap).to({scaleX: 0.4, scaleY:0.4}, 200).call(() => {
                    stage.update()
                    createjs.Tween.get(bitmap).to({scaleX: 0.38, scaleY: 0.38}, 50).call(() => {
                        stage.update()
                    })
                })
            })
            
            word+=bitmap.name
            showWord(word)
            
        })
    }
}



let y=455
let x=28

addNumber(x, y, 1)
addNumber(x+79, y+10, 2)
addNumber(x+170, y, 3)
addNumber(x, y+45, 4)
addNumber(x+78, y+62, 5)
addNumber(x+170, y+50, 6)
addNumber(x, y+95, 7)
addNumber(x+88, y+107, 8)
addNumber(x+165, y+103, 9)



let eraseButton= new Image();
eraseButton.src = "images/erase.png"
eraseButton.onload = handleEraseLoad


function handleEraseLoad(event) {
    var image = event.target;
    var bitmap = new createjs.Bitmap(image);
    bitmap.x=29 
    bitmap.y=370 
    bitmap.scaleX=0.4
    bitmap.scaleY=0.4
    stage.addChild(bitmap);
    stage.update();
    bitmap.addEventListener("click", () => {
        let click=audio.cloneNode();
        click.play();
        createjs.Tween.get(bitmap).to({scaleX: 0.37, scaleY: 0.37}, 100).call(() => {
            stage.update()
            createjs.Tween.get(bitmap).to({scaleX: 0.4, scaleY:0.4}, 200).call(() => {
                stage.update()
                createjs.Tween.get(bitmap).to({scaleX: 0.38, scaleY: 0.38}, 50).call(() => {
                    stage.update()
                })
            })
        })
        word=word.substring(0,word.length-1)
        showWord(word)
        
    })
}

let blueButton= new Image();
blueButton.src = "images/enter.png"
blueButton.onload = handleBlueLoad


async function handleBlueLoad(event) {
    var image = event.target;
    var bitmap = new createjs.Bitmap(image);
    bitmap.x=79  
    bitmap.y=355 
    bitmap.scaleX=0.4
    bitmap.scaleY=0.4
    stage.addChild(bitmap);
    stage.update();
    bitmap.addEventListener("click", async () => {
        let click=audio.cloneNode();
        click.play();
        createjs.Tween.get(bitmap).to({scaleX: 0.37, scaleY: 0.37}, 100).call(() => {
            stage.update()
            createjs.Tween.get(bitmap).to({scaleX: 0.4, scaleY:0.4}, 200).call(() => {
                stage.update()
                createjs.Tween.get(bitmap).to({scaleX: 0.38, scaleY: 0.38}, 50).call(() => {
                    stage.update()
                })
            })
        })
        console.log(word)
        try {
            let res = await generateWords(word)
            console.log(res)
            // res.then((data)=> {
            //     console.log(data)
            // }).catch(e=> {
            //     console.log(e)
            // })
            // console.log(res)

        } catch(e) {
            console.log('Error: '+e)
        } 
        word=''
        showWord(word)

        // fetch('http://localhost:3000/generate-words', {
        //     method: 'POST',
        //     body: JSON.stringify(word),
        // }).then(response => {
        //     console.log(response)
        //     return response.json()}
        // )
        // .then(data => {
        //   console.log('Success:', data);
        // })
        // .catch(()=> {
        //     console.log('Failed to fetch') 
        // })
        
        // .then (response => {
        //     console.log(response)
        //     word = ''
        // })
        //console.log()
        //word = ''
        
})

}
}

generateWords = async (word) => {


    let url = 'https://djokovic-old-mobile-words.herokuapp.com/generate-words'

    let data = {numbers: "word"}

    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
        })
        return response
    } catch (e) {
        console.log(e)
    }
//     fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//   console.log('Success:', data)
//     })
//     .catch((error) => {
//     console.error('Error:', error)
//     })

    // try {
    //     let combinations = await axios.post(url, data)
    //     console.log('combinations je ')
    //     console.log(combinations)
    //     return combinations
    // } catch(e) {
    //     return "Can't generate words"
    // }
    

}

showWord = (word) => {
    let paragraph = document.getElementById("numbers");
    paragraph.innerHTML=word
}



dismissAll = function () {


    for (let i; i < this.children.length; i++) {
        createjs.Tween.removeTweens(this.children[i]);
      }
    this.removeAllChildren();
    this.removeAllEventListeners();

}


addGraphics()
//dismissAll()