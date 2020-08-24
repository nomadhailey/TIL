// State
let todos = [];

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $ckCompleteAll = document.querySelector('#ck-complete-all');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $nav = document.querySelector('.nav');


// 네비게이션
$nav.onclick = ({ target }) => {
    if (!target.matches('.nav > li')) return;
    $nav.querySelector('.active').classList.remove('active');
    target.classList.add('active');
    render();
};

// $active.onclick = () => {
//     todos = todos.filter(todo => !todo.completed);
//     render();
// };
// $completed.onclick = () => {
//     todos = todos.filter(todo => todo.completed);
//     render();
// };

// 완료 카운트
const completedTodos = () => {
    $completedTodos.textContent = todos.filter(todo => todo.completed).length;
};
// 미완료 카운트
const activeTodos = () => {
    $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
};
// todos 가져오기
const getTodo = () => {
    todos = [
        { id: 1, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: true },
        { id: 3, content: 'Javascript', completed: false }
    ];
    todos = todos.sort((todo1, todo2) => todo2.id - todo1.id);
    render();
};
// ********** 질문 : getTodo() 호출 연산자 쓰면 안되는 이유?
window.onload = getTodo;

const render = () => {
    let html = '';
    let list = todos;
    const $active = document.querySelector('.active');
    list = list.filter(todo => ($active.id === 'all' ? todo : ($active.id === 'active' ? !todo.completed : todo.completed)));
    list.forEach(({ id, content, completed }) => {
        html += `<li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox"${completed ? 'checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i></li>`;
    });
    $todos.innerHTML = html;
    completedTodos();
    activeTodos();
};

// 추가
const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const addTodo = content => {
    todos = [{ id : generateId(), content, completed: false }, ...todos];
};

$inputTodo.onkeyup = e => {
    if (e.keyCode !== 13 || $inputTodo.value.trim() === '') return;
    addTodo($inputTodo.value);
    render();
    $inputTodo.value = '';
};

// 삭제
const removeTodo = id => {
    todos = todos.filter(todo => todo.id !== +id);
};

$todos.onclick = ({ target }) => {
    if (!target.matches('.remove-todo')) return;
    removeTodo(target.parentNode.id);
    render();
};

// 토글
const toggleTodo = id => {
    todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
};
$todos.onchange = e => {
    toggleTodo(e.target.parentNode.id);
    render();
};
// 모두 완료 체크
const ckCompleteAll = completed => {
    todos = todos.map(todo => ({ ...todo, completed }));
};

$ckCompleteAll.onchange = () => {
    ckCompleteAll($ckCompleteAll.checked);
    render();
};
// 모두 삭제
const clearCompleted = () => {
    todos = todos.filter(todo => !todo.completed);
};
$clearCompleted.onclick = () => {
    clearCompleted();
    render();
};
