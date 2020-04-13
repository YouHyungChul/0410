/*벽돌을 정의한다 */
class Block extends GameObject{
    constructor(container, src,width,height,velX,velY,x,y){
        super(container, src,width,height,velX,velY,x,y)
    }
    //움직임 없으므로 메서드는 재정의할 필요 없다!!
}