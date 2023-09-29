/*
  1. 타입 안정성 향상
      - 파라미터 타입을 구체적으로 정의하면, 함수에 원하는 데이터를 올바르게 전달할 수 있다.
  2. 가독성 향상
      - 인터페이스를 활용하여 타입을 명시함으로써 반복적인 타입 지정 코드를 줄일 수 있다.
*/

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[];

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// CRUD methods
function fetchTodos(): Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

// 함수의 반환값이 없는 경우 void 타입을 명시해준다.
function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted(): Todo[] {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  addTodo({ id: 4, title: '타입 정의', done: false });
  addTodo({ id: 5, title: '복습', done: false });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
