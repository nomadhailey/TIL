// 1. html 생성

const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

  function render() {
    let html = '';

    todos.forEach(todo => {
        html +=
        `<li id="${todo.id}">
        <label><input type="checkbox" ${todo.completed ? 'checked' : ''}>${todo.content}</label>
        </li>`;
    });

    return html;
  }
  console.log(render());

// 2. 특정 프로퍼티 값 추출
const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

  function getValues(key) {
    // return todos.map(todo => todo['key']);
    // return todos.map(todo => todo.key);
    return todos.map(todo => todo[key]);
   }

console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues('completed')); // [false, true, false]


// 3. 프로퍼티 정렬
const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function sortBy(key) {
    return todos.slice().sort((a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0)));
  }
  
  console.log(sortBy('id'));
  /*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
console.log(sortBy('content'));
/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
console.log(sortBy('completed'));
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/

// 4. 새로운 요소 추가

let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function addTodo(newTodo) {
    // todos = [newTodo].concat(todos);
        todos = [...[newTodo], ...todos];
  }
  
  addTodo({ id: 4, content: 'Test', completed: false });
  
  console.log(todos);

  // 5. 특정 요소 삭제
// todos에서 삭제할 요소의 id를 인수로 전달하면 해당 요소를 삭제하는 함수를 작성하라.
  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function removeTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
  }
  
  removeTodo(2);
  
  console.log(todos);
  /*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */

// 6. 특정 요소의 프로퍼티 값 반전
let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  // 방법 1_스프레드 문법
  function toggleCompletedById(id) {
     todos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }
  toggleCompletedById(2);
  console.log(todos);

// 7. 모든 요소의 completed 프로퍼티 값을 true로 설정
// todos의 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라.

let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function toggleCompletedAll() {
    todos = todos.map(todo => ({ ...todo, completed: true }));
  }
  
  toggleCompletedAll();
  
  console.log(todos);

// 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기
// todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라.
// 단, for 문, Array#forEach는 사용하지 않도록 하자.
let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function countCompletedTodos() {
    return todos.filter(todo => todo.completed).length;
  }
  console.log(countCompletedTodos()); // 1




// 9. id 프로퍼티의 값 중에서 최대값 구하기
let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
 function getMaxId() {     
      return todos.length ? Math.max(...(todos.map((todo) => todo.id))) : 0;
  }
  
  console.log(getMaxId()); // 3