function Stone(){
    this.sprite = createSprite(random(-width, SCENE_W), random(-height, SCENE_H),30,30);

    this.createStone=function(){
        this.sprite.addAnimation("default", stoneDefault);
        this.sprite.setCollider("rectangle",0,0,30,20);
    }
}