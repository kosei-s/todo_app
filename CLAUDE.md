# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Japanese-language TODO application built with vanilla HTML, CSS, and JavaScript. It's a client-side only application that uses localStorage for data persistence.

## Architecture

- **index.html**: Main HTML structure with Japanese UI text
- **script.js**: Core application logic using vanilla JavaScript with DOM manipulation
- **style.css**: Styling with responsive design and hover effects

## Key Features

- Add, complete, and delete TODO items
- Data persistence via localStorage
- Japanese user interface
- No external dependencies or build process required

## Running the Application

Open `index.html` directly in a web browser - no build step or server required.

## Development Notes

- All user-facing text is in Japanese
- Data structure: `{text: string, completed: boolean}`
- Global functions `toggleComplete()` and `deleteTodo()` are exposed on window for HTML onclick handlers
- localStorage key: 'todos'

## Testing

### Setup
The project now includes Jest testing framework for unit testing:

- **Testing Framework**: Jest with jsdom environment
- **Test Files**: Located in `tests/` directory
- **Configuration**: `jest.config.js` and `.babelrc` for ES6 support

### Running Tests
```bash
npm install        # Install dependencies
npm test          # Run all tests
npm run test:watch # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

### Test Structure
- `tests/setup.js`: Mock configurations for localStorage, alert, and confirm
- `tests/todo.test.js`: Unit tests for core TODO functionality

## Interaction Guidelines

- 英語で回答する際、要約を日本語でも出力して