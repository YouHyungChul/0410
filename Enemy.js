class Enemy extends GameObject{
        constructor(container, src,width,height,velX,velY,x,y){
            //this.k=100;  안됨.. 왜냐면 부모의 초기화보다 앞설수있는 코드는 허용하지 x
            //넘겨받은 변수들을 부모에게 전달!!
            super(container, src,width,height,velX,velY,x,y);
        }

        tick(){
            this.x +=this.velX;
            this.y +=this.velY;
        }
        render(){
            this.img.style.left=this.x+"px";
            this.img.style.top=this.y+"px";

        }
}