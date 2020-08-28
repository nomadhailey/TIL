## 08. Ch 01. TypeScript 시작하기 - 07. 함수형 타입

* **함수 시그니처**

  * 선언부에는 함수 몸체가 없이 매개변수 타입과 반환되는 값의 타입만 정의
  
* **함수 오버로드(Overloads) 시그니처**

  * 이름은 같지만 매개변수 타입과 반환 타입이 다른 여러 함수를 가질 수 있는 것.(함수 시그니처를 동일한 이름으로 여러개 정의하는 것)
  * 아래 코드에서 add 함수는 2개의 선언부와 1개의 구현부를 가지고 있음. 주의할 점은 함수 선언부와 구현부의 매개변수 개수가 같아야 함.
  
```typescript
  function add(a: string, b: string): string; // 함수 선언(->함수 시그니처)
  function add(a: number, b: number): number; // 함수 선언(->함수 시그니처)
  
  function add(a: any, b: any): any { // 함수 구현
    return a + b;
  }
  
  add('hello ', 'world~');
  add(1, 2);
  add('hello ', 2); // Error - No overload matches this call.
  ```



## 09. Ch 01. TypeScript 시작하기 - 08. enum 타입

* 열거형 : 상수들의 집합을 정의할 때 사용할 수 있음 (예를 들어 회원의 등급)

## 10. Ch 02. TypeScript - 01. 클래스 - 1

* 접근 제한자 : 클래스의 속성과 메소드는 접근 제한자를 가질 수 있음
  * private, public, protected

## 11. Ch 02. TypeScript - 01. 클래스 - 2

* **abstract class**

  * 추상 클래스는 인스턴스를 생성할 수 없음. 추상 클래스를 상속 받은 하위 클래스에서 추상 클래스를 구현하고, 그 하위 클래스를 통해서 인스턴스를 생성할 수 있음.

  * Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members. The `abstract` keyword is used to define abstract classes as well as abstract methods within an abstract class.

  * **Methods within an abstract class that are marked as abstract do not contain an implementation and must be implemented in derived classes.** Abstract methods share a similar syntax to interface methods. **Both define the signature of a method without including a method body.** However, abstract methods must include the `abstract` keyword and may optionally include access modifiers.
  
  ```typescript
  abstract class Department {
    constructor(public name: string) {}
  
    printName(): void {
      console.log("Department name: " + this.name);
    }
  
    abstract printMeeting(): void; // must be implemented in derived classes
  }
  
  class AccountingDepartment extends Department {
    constructor() {
      super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
  
    printMeeting(): void {
      console.log("The Accounting Department meets each Monday at 10am.");
    }
  
    generateReports(): void {
      console.log("Generating accounting reports...");
    }
  }
  
  let department: Department; // ok to create a reference to an abstract type
  department = new Department(); // error: cannot create an instance of an abstract class
  department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
  department.printName();
  department.printMeeting();
  department.generateReports();
  // Property 'generateReports' does not exist on type 'Department'.
```
  
  https://www.typescriptlang.org/docs/handbook/classes.html#abstract-classes