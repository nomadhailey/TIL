// State
let todos = [];

const $input = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $checkAll = document.getElementById('ck-complete-all');
const $clearAll = document.querySelector('.btn');
const $completed = document.querySelector('.completed-todos');
const $active = document.querySelector('.active-todos');

// 완료 카운트
const countCompleted = () => {
    $completed.textContent = todos.filter(todo => todo.completed).length;
};
// 미완료 카운트
const countActive = () => {
    $active.textContent = todos.filter(todo => !todo.completed).length;
};

//  초기값 표시
const render = () => {
    let html = '';
    todos.forEach(todo => {
    html += `<li id="${todo.id}" class="todo-item">
    <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
    <label for="ck-${todo.id}">${todo.content}</label>
    <i class="remove-todo far fa-times-circle"></i></li>`;
    });
    $todos.innerHTML = html;
    countCompleted();
    countActive();
};

// 추가
const generateId = () => {
    return (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);
};
const addTodo = content => {
    todos = [{ id: generateId(), content, completed: false }, ...todos];
    render();
};
$input.onkeyup = e => {
    if (e.keyCode !== 13 || $input.value.trim() === '') return;
    addTodo($input.value);
    $input.value = '';
};
// 삭제
const removeTodo = id => {
    todos = todos.filter(todo => todo.id !== +id);
    render();
};
$todos.onclick = e => {
    if (!e.target.matches('.todos > li > i')) return;
    removeTodo(e.target.parentNode.id);
};
// 체크
const toggleTodo = id => {
    todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
    render();
};
$todos.onchange = e => {
    toggleTodo(e.target.parentNode.id);
};
// 전부 체크
const checkAll = () => {
    todos = todos.map(todo => ($checkAll.checked ? { ...todo, completed : true } : { ...todo, completed : false }));
    render();
};
$checkAll.onchange = () => checkAll();

// 전부 삭제
const clearAll = () => {
    todos = todos.filter(todo => !todo.completed);
    render();
};
$clearAll.onclick = () => {
    clearAll();
};

// 로딩
window.onload = () => {
    todos = [
        { id: 1, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: true },
        { id: 3, content: 'Javascript', completed: false }
    ];
    todos = todos.sort((todo1, todo2) => todo2.id - todo1.id);
    render();
};
