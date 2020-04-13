 /*총알을 정의한다
 한번 작성한 클래스 코드와 동일한 코드를 계쏙 반복해서 파일마다
 작성하면 코드의 중복이 발생한다..
 코드의 중복은 추후 유지보수성에 문제가 생긴다!!
 개발보다도 유지보수비용이 더 든다..
 해결책) 코드의 재사용 기술을 적용해보자!!!
            자바나 C#등 객체지향 언어에서는 코드의 재사용을 '상속'이란
            기술로 지원하며, 상속을 사용할때는 extends 명시하면 된다*/
/*앞으로 게임에 등장하게 될 모든~~~ 종류의 오브젝트를 표현하는
객체를 정의한다!!
왜?? 코드의 중복을 방지하기 위해 = 유지보수성을 높이기 위해서
    = 돈!!! IT분야는 시간이 돈이다!!
    = 이미 반쯤 만들어진 소프트웨어를 많이 활용 = 즉 틀이 이미 구축된 것을 가리켜 프레임웍!!
    ex) 스프링 프레임웍 나중에 배울것*/

    class GameObject{
        /*생성자란 객체 즉 인스턴스가 태어날때 초기화를 
        담당하는 메서드를 의미한다.
        주의할점) 상속관계에서는 자식의 초기화보다 가장 최우선시 되어야
        할 초기화가 바로 부모에 대한 초기화이다. 따라서 자식의 자식의 생성자에서
        부모의 초기화보다 앞서는 코드를 작성할 수 없다.*/ 
        // container, src,width,height,velX,velY,x,y
        constructor(container, src,width,height,velX,velY,x,y){

            console.log("GameObject가 태어납니다");
            this.container = container;
            this.src = src;
            this.img = document.createElement("img");
            this.width = width;
            this.height = height;
            this.velX = velX;
            this.velY = velY;
            this.x =x;
            this.y=y;
    
            //스타일 적용
            this.img.src = this.src;
            this.img.style.width = this.width+"px";
            this.img.style.height = this.height+"px";
    
            this.img.style.position = "absolute";
            this.img.style.left=this.x+"px";
            this.img.style.top=this.y+"px";
    
            //부모요소에 부착
            container.appendChild(this.img);
        }

        //최상위 부모클래스에서는 장차 자식들 각자가 어떠한 행동을 할지
        //예측할 수 없으므로, tick(), render() 메서드의 내용을 확정지을 수 없다!!
        //자바나 C# 등 객체지향에서는 내용을 완성짓지 못한
        //메서드를 미완성 메서드라 하여 추상메서드라 한다!!
        //자바스크립트에서는 추상메서뜨까지는 지ㅜ언하지 않는다..
        //따라서 우리는 그냥 비워놓자!!
        
        //물리적 변화 메서드    
        tick(){
        }
        //그래픽 처리
        render(){
        } 
    }

 