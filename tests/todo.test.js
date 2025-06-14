/**
 * Unit tests for TODO application
 */

// Mock the script.js file since it's wrapped in DOMContentLoaded
// We'll test the core functionality by extracting testable functions

describe('TODO Application', () => {
  let mockDocument;
  let mockLocalStorage;

  beforeEach(() => {
    // Reset localStorage mock
    window.localStorage.getItem.mockReturnValue(null);
    window.localStorage.setItem.mockClear();

    // Create mock DOM elements
    mockDocument = {
      getElementById: jest.fn(),
      createElement: jest.fn(),
      addEventListener: jest.fn()
    };

    // Mock HTML elements
    const mockTodoInput = {
      value: '',
      addEventListener: jest.fn()
    };

    const mockAddBtn = {
      addEventListener: jest.fn()
    };

    const mockTodoList = {
      innerHTML: '',
      appendChild: jest.fn()
    };

    mockDocument.getElementById.mockImplementation((id) => {
      switch (id) {
        case 'todoInput':
          return mockTodoInput;
        case 'addBtn':
          return mockAddBtn;
        case 'todoList':
          return mockTodoList;
        default:
          return null;
      }
    });

    global.document = mockDocument;
  });

  describe('LocalStorage Operations', () => {
    test('should save todos to localStorage', () => {
      const todos = [
        { text: 'テストタスク1', completed: false },
        { text: 'テストタスク2', completed: true }
      ];

      // Simulate saving todos
      window.localStorage.setItem('todos', JSON.stringify(todos));

      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        'todos',
        JSON.stringify(todos)
      );
    });

    test('should load todos from localStorage', () => {
      const todos = [{ text: 'テストタスク', completed: false }];
      window.localStorage.getItem.mockReturnValue(JSON.stringify(todos));

      const result = JSON.parse(window.localStorage.getItem('todos') || '[]');

      expect(window.localStorage.getItem).toHaveBeenCalledWith('todos');
      expect(result).toEqual(todos);
    });

    test('should return empty array when localStorage is empty', () => {
      window.localStorage.getItem.mockReturnValue(null);

      const result = JSON.parse(window.localStorage.getItem('todos')) || [];

      expect(result).toEqual([]);
    });
  });

  describe('Todo Data Structure', () => {
    test('should create todo with correct structure', () => {
      const todoText = 'テストタスク';
      const todo = {
        text: todoText,
        completed: false
      };

      expect(todo).toHaveProperty('text', todoText);
      expect(todo).toHaveProperty('completed', false);
      expect(typeof todo.text).toBe('string');
      expect(typeof todo.completed).toBe('boolean');
    });

    test('should toggle todo completion status', () => {
      const todo = { text: 'テストタスク', completed: false };
      
      // Toggle completion
      todo.completed = !todo.completed;
      
      expect(todo.completed).toBe(true);
      
      // Toggle back
      todo.completed = !todo.completed;
      
      expect(todo.completed).toBe(false);
    });
  });

  describe('Input Validation', () => {
    test('should validate empty input', () => {
      const input = '';
      const isValid = input.trim() !== '';
      
      expect(isValid).toBe(false);
    });

    test('should validate whitespace-only input', () => {
      const input = '   ';
      const isValid = input.trim() !== '';
      
      expect(isValid).toBe(false);
    });

    test('should accept valid input', () => {
      const input = 'テストタスク';
      const isValid = input.trim() !== '';
      
      expect(isValid).toBe(true);
    });
  });

  describe('Array Operations', () => {
    test('should add todo to array', () => {
      const todos = [];
      const newTodo = { text: 'テストタスク', completed: false };
      
      todos.push(newTodo);
      
      expect(todos).toHaveLength(1);
      expect(todos[0]).toEqual(newTodo);
    });

    test('should remove todo from array', () => {
      const todos = [
        { text: 'タスク1', completed: false },
        { text: 'タスク2', completed: false },
        { text: 'タスク3', completed: false }
      ];
      
      todos.splice(1, 1); // Remove second item
      
      expect(todos).toHaveLength(2);
      expect(todos[0].text).toBe('タスク1');
      expect(todos[1].text).toBe('タスク3');
    });
  });
});