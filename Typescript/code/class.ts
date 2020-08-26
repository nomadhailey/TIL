interface User {
  name: string;
}
interface Product {
  id: string;
  price: number;
}
class Cart {
  // protected user : User;
  // private store : object;
  // constructor(user:User) {
  //     this.user = user;
  //     this.store = {};
  // }
  //위의 코드를 아래와 같이 더 간단하게 잘성할 수 있음. 즉 constructor에서 매개변수와 함께 접근 제한자를 쓰게 되면 new 키워드로 호출할 시, 전달받은 인자값이 Cart의 속성에 할당(protected user : User;)까지 됨
  constructor(protected user: User, private store: object = {}) {}
  public put(id: string, product: Product) {
    this.store[id] = product;
  }
  get(id: string) {
    return this.store[id];
  }
}

const cartJohn = new Cart({ name: "john" });
const cartJay = new Cart({ name: "jay" });

console.log(cartJohn);
console.log(cartJay);
