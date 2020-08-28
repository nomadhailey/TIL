interface Person {
  name: string;
  say(message: string): void;
}
interface Programmer {
  writeCode(requirement: string): string;
}

class KoreanProgrammer implements Person, Programmer {
  //KoreanProgrammer는 name이 있고 say할 수 있는 Person&& writeCode할 수 있는 Programmer
  constructor(public name: string) {}
  say(message: string): void {
    console.log(message);
  }
  writeCode(requirement: string): string {
    console.log(requirement);
    return requirement + "...";
  }
  loveKimchi() {
    // interface로부터 받은 것 외의 메소드도 이와 같이 정의할 수 있음
    console.log("love kimchi");
  }
}
const hailey = new KoreanProgrammer("hailey");

// abstract class
// Korean이라는 추상 클래스는 주민 번호를 가져야 하고 loveKimchi 해야 하는데 어떻게 loveKimchi하는지를 이 클래스에서 정의하지 않고 하위 클래스인 KoreanProgrammer2에서 정의함. KoreanProgrammer2에는 abstract키워드가 붙은 jumin과 loveKimchi가 필수고 정의되어 있어야 함
abstract class Korean implements Person {
  public abstract jumin: number;

  constructor(public name: string) {}
  say(msg: string) {
    console.log(msg);
  }
  abstract loveKimchi(): void;
}

class KoreanProgrammer2 extends Korean implements Programmer {
  //KoreanProgrammer는 name이 있고 say할 수 있는 Person&& writeCode할 수 있는 Programmer
  constructor(public name: string, public jumin: number) {
    super(name); // 상위 클래스를 상속 받으면 하위 클래스의 constructor 내부에 상위 클래스의 생성자를 super 키워드로 호출해줘야 함
  }
  say(message: string): void {
    console.log(message);
  }
  writeCode(requirement: string): string {
    console.log(requirement);
    return requirement + "...";
  }
  loveKimchi() {
    // interface로부터 받은 것 외의 메소드도 이와 같이 정의할 수 있음
    console.log("love kimchi");
  }
}

const stella = new KoreanProgrammer2("stella", 1234);
const thor = new Korean("thor", 1234); // abstract클래스는 인스턴스를 생성할 수 없음
