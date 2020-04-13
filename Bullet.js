// is a 관계 Bullet is GameObject
// extends 란 상속을 의미하며, 이 extends를 선언한 시점부터는
// 부모객체의 모든 재산을 내가 접근할 수 있다!!
class Bullet extends GameObject{
    constructor(container, src,width,height,velX,velY,x,y){
        //객체지향 언어에서는 부모를 parent라 하지 않는다!! 왜??
        //사람이 아니니까~  대신 super를 사용한다!!
        //아래의 코드에서 console.log는 자식의 코드이므로 부모의
        //생성보다 앞설수 없기때문에, 이전 라인에 부모의 초기화를
        //먼저 작성했어야 한다.. 
        super(container, src,width,height,velX,velY,x,y);
        console.log("BUllet이 지금 태어납니다.");
    }
    //GameObject에는 완성되지 못한 추상메서드 2개가 있다.
    //이 메서드들이 미완성인 이유는 귀찮아서가 아니라,
    // 자식 각자의 동작방식을 예측할 수 없으므로, 자식에게 그 내용을
    // 완성 지을 수 있는 기회를 주기 위해서이다!!

    //아래의 tick()과 render()를 총알의 특징에 맞게 완성짓자!!
    tick(){
        //y축으로 -방향의 등속도 운동하는 물리량 표현
        this.y += this.velY; //this.velY는 음수로 넘겨야 한다.
        for(var i=0; i<enemyArray.length;i++){
            var result = collisionCheck(this.img,enemyArray[i].img );// 나=총
            if(result){ //적군과 마주친거다!!
                // 나죽고 너 죽고!! ( 죽음 = 화면에서 제거 + 배열에서도 제거)
                // 화면먼저 지워야 한다.. 배열을 먼저 지우면 화면을 지우려고
                // 이미 사라진 배열의 요소를 접근할 수 없기 때문에

                //화면에서 제거 (부모요소에서 제거)
                this.container.removeChild(this.img);
                enemyArray[i].container.removeChild(enemyArray[i].img);

                //배열명단에서도 제거!!
                var index=bulletArray.indexOf(this); // 내가 몇번째 들어있어
                bulletArray.splice(index,1);

                enemyArray.splice(i,1);  //적군명단에서 제거
            }
        }

    }
    render(){
        this.img.style.top=this.y+"px";
    }
}