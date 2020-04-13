/*주인공을 정의한다 */
class Hero extends GameObject{
    constructor(container, src,width,height,velX,velY,x,y){
        super(container, src,width,height,velX,velY,x,y);
    }
    tick(){
        this.x += this.velX //음수로 주면 좌, 양수로 주면 우로 간다.
    }
    render(){
        this.img.style.left = this.x + "px";
    }
}