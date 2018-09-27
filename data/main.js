//#region Variables
//#region reference Variables
var player;
var stone, stones;
//#endregion
//#region animation Variables
var playerRight, playerLeft, playerUp, playerDown;
var playerIdles=[];

var stoneDefault;
var axeDefault;
//#endregion
//#region keyCodes
var keyCodes={s:83, w:87, a:65, d:68, space:32, q:87};
//#endregion
//#region Images
var frame;
//#endregion
//#region Constants
const SCENE_W = 1600;
const SCENE_H = 1200;
//#endregion
//#endregion



function preload(){
    //#region Player Animations
    playerIdles.push(loadAnimation('../Assets/player/d.png'));
    playerIdles.push(loadAnimation('../Assets/player/u.png'));
    playerIdles.push(loadAnimation('../Assets/player/l.png'));
    playerIdles.push(loadAnimation('../Assets/player/r.png'));
    playerDown=loadAnimation('../Assets/player/dm1.png','../Assets/player/dm2.png','../Assets/player/dm3.png', '../Assets/player/dm4.png');
    playerUp=loadAnimation('../Assets/player/um1.png','../Assets/player/um2.png','../Assets/player/um3.png', '../Assets/player/um4.png');
    playerLeft=loadAnimation('../Assets/player/lm1.png','../Assets/player/lm2.png','../Assets/player/lm3.png', '../Assets/player/lm4.png');
    playerRight=loadAnimation('../Assets/player/rm1.png','../Assets/player/rm2.png','../Assets/player/rm3.png', '../Assets/player/rm4.png');
    //#endregion
    //#region Item Animations
    stoneDefault=loadAnimation('../Assets/items/stone.png');
    axeDefault=loadAnimation('../Assets/items/axe.png');
    //#endregion
    //#region Frame
    frame=loadImage('../Assets/frame/frame.png');
    //#endregion
}
function setup(){
    createCanvas(800, 600);
    //#region creating Player
    player = new Player();
    player.createPlayer();
    //#endregion
    stones = new Group();
    for(var i = 0; i<random(10,60);i++){
        stone = new Stone();
        stone.createStone();
        stones.add(stone.sprite);
    }
}
function draw(){
    camera.position.x = player.sprite.position.x;
    camera.position.y = player.sprite.position.y;
    ///////////////////////////////////////////drawing//////////////////////////////////////////////
    background(255);
    drawSprites();
    player.show();
    //////////////////////////////////////////drawing//////////////////////////////////////////////
    if(stones.collide(player.sprite, collect)){
        player.items.stones++;
    }

    camera.off();
    image(frame, -10, -10,width+20,height+20)
}
function collect(collactable){
    collactable.remove();
}