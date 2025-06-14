// Jest setup file for DOM testing
// This file is run before each test file

// Mock localStorage
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  },
  writable: true,
});

// Mock window.alert and window.confirm
Object.defineProperty(window, 'alert', {
  value: jest.fn(),
  writable: true,
});

Object.defineProperty(window, 'confirm', {
  value: jest.fn(() => true),
  writable: true,
});

// Reset mocks before each test
beforeEach(() => {
  window.localStorage.getItem.mockClear();
  window.localStorage.setItem.mockClear();
  window.localStorage.removeItem.mockClear();
  window.localStorage.clear.mockClear();
  window.alert.mockClear();
  window.confirm.mockClear();
});