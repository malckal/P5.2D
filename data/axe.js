function Axe(){
    this.sprite = createSprite(0,0,30,30);

    this.createAxe=function(){
        this.sprite.addAnimation("default", axeDefault);
        this.sprite.setCollider("rectangle",0,0,30,20);
    }
    this.setPosition=function(player){
        this.sprite.position.x = player.sprite.position.x;
        this.sprite.position.y = player.sprite.position.y-20;

    }
}