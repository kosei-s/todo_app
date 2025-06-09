document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    
    function renderTodos() {
        todoList.innerHTML = '';
        
        if (todos.length === 0) {
            const emptyMessage = document.createElement('li');
            emptyMessage.className = 'empty-message';
            emptyMessage.textContent = 'タスクがありません。新しいタスクを追加してください。';
            todoList.appendChild(emptyMessage);
            return;
        }
        
        todos.forEach((todo, index) => {
            const todoItem = document.createElement('li');
            todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            
            todoItem.innerHTML = `
                <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
                <div class="todo-actions">
                    <button class="complete-btn" onclick="toggleComplete(${index})">
                        ${todo.completed ? '未完了' : '完了'}
                    </button>
                    <button class="delete-btn" onclick="deleteTodo(${index})">削除</button>
                </div>
            `;
            
            todoList.appendChild(todoItem);
        });
    }
    
    function addTodo() {
        const text = todoInput.value.trim();
        if (text === '') {
            alert('タスクを入力してください');
            return;
        }
        
        todos.push({
            text: text,
            completed: false
        });
        
        todoInput.value = '';
        saveTodos();
        renderTodos();
    }
    
    window.toggleComplete = function(index) {
        todos[index].completed = !todos[index].completed;
        saveTodos();
        renderTodos();
    };
    
    window.deleteTodo = function(index) {
        if (confirm('このタスクを削除しますか？')) {
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
        }
    };
    
    addBtn.addEventListener('click', addTodo);
    
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    renderTodos();
});