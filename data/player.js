function Player(){
    this.sprite = createSprite(0,0,27,64);
    this.speed=2;
    this.face;
    this.items = {stones:0, wood:0, axe:0, weapon:null};

    this.createPlayer=function(){
        this.sprite.addAnimation("idleDown", playerIdles[0]);
        this.sprite.addAnimation("idleUp", playerIdles[1]);
        this.sprite.addAnimation("idleLeft", playerIdles[2]);
        this.sprite.addAnimation("idleRight", playerIdles[3]);
        this.sprite.addAnimation("moveDown", playerDown);
        this.sprite.addAnimation("moveUp", playerUp);
        this.sprite.addAnimation("moveLeft", playerLeft);
        this.sprite.addAnimation("moveRight", playerRight);
        this.sprite.changeAnimation("idleDown");
        this.sprite.setCollider("rectangle",0,0,54,100);
    }
    this.action = function(){
        if(keyIsPressed){
            if(keyIsDown(keyCodes.s)){
                this.sprite.changeAnimation("moveDown");
                this.sprite.setSpeed(this.speed,90);
            }
            else if(keyIsDown(keyCodes.w)){
                this.sprite.changeAnimation("moveUp");
                this.sprite.setSpeed(this.speed,270);
            }
            else if(keyIsDown(keyCodes.a)){
                this.sprite.changeAnimation("moveLeft");
                this.sprite.setSpeed(this.speed,180);
            }
            else if(keyIsDown(keyCodes.d)){
                this.sprite.changeAnimation("moveRight");
                this.sprite.setSpeed(this.speed,360);
            }        
        }
        else{
            this.face = this.sprite.getDirection();
            this.sprite.setSpeed(0,this.face);
            if( this.face == 90){
                this.sprite.changeAnimation("idleDown");
            }
            else if(this.face < -90){
                this.sprite.changeAnimation("idleUp");
            }
            else if(this.face == 180){
                this.sprite.changeAnimation("idleLeft");
            }
            else{
                this.sprite.changeAnimation("idleRight");
            }
        }
        if(keyIsDown(keyCodes.space)){
            this.craft();
        }
        console.log(this.sprite.getDirection());
    }
    this.show=function(){
        if(this.items.axe!= 0){
            this.items.weapon.setPosition(this);
        }
        this.action();
        this.sprite.display();
    }

    this.craft = function(){
        if(this.items.stones >= 2 && this.items.wood >=1){
            this.items.stones = this.items.stones-2;
            this.items.wood = this.items.wood-1;
            this.items.axe++;
            this.items.weapon = new Axe();
            this.items.weapon.createAxe();
        }
    }
}