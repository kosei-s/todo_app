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

## Prerequisites

- **Node.js**: Version 16+ (required for running tests and development tools)
- **Browser**: Modern browser supporting ES6+ (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- **Git**: For version control and collaboration

## File Structure

```
todo_app/
├── index.html          # Main HTML file with Japanese UI
├── script.js           # Core application logic (vanilla JS)
├── style.css           # Responsive CSS styling
├── package.json        # NPM dependencies and scripts
├── jest.config.js      # Jest testing configuration
├── .babelrc           # Babel ES6 transpilation config
├── .gitignore         # Git ignore patterns
├── tests/             # Test directory
│   ├── setup.js       # Jest setup and mocks
│   └── todo.test.js   # Unit tests for TODO functionality
├── CLAUDE.md          # Claude development guidelines (this file)
└── README.md          # Project documentation for users
```

## Common Commands

Development and testing commands:

```bash
# Install dependencies
npm install

# Run tests
npm test                    # Run all tests once
npm run test:watch         # Run tests in watch mode
npm run test:coverage      # Run tests with coverage report

# Development
open index.html            # Open application in browser (no build needed)
```

## Browser Compatibility

- **Chrome**: 60+ (ES6 modules, localStorage)
- **Firefox**: 55+ (ES6 features)
- **Safari**: 12+ (Modern JS features)
- **Edge**: 79+ (Chromium-based)

**Note**: The application uses vanilla JavaScript with ES6 features and localStorage API.

## Development Workflow

1. **Setup**: Clone repository and run `npm install`
2. **Development**: Open `index.html` in browser for testing
3. **Testing**: Use `npm test` to run unit tests
4. **Code Changes**: Edit `script.js`, `style.css`, or `index.html` as needed
5. **Verification**: Run tests and manual browser testing

## Troubleshooting

### Common Issues

**Tests failing with localStorage errors:**
- Ensure Jest environment is set to 'jsdom' in `jest.config.js`
- Check that localStorage mocks are properly configured in `tests/setup.js`

**Application not working in browser:**
- Verify browser supports localStorage API
- Check browser console for JavaScript errors
- Ensure all files are in the same directory

**Node modules issues:**
- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again

### Performance Considerations

- localStorage has ~5-10MB limit per origin
- Large numbers of todos (1000+) may impact performance
- Consider implementing pagination for large datasets

## Security Considerations

- **XSS Prevention**: All user input is properly escaped
- **Data Validation**: Input validation prevents malicious data
- **localStorage**: Data persists locally only, no server transmission

## Code Style Guidelines

- Use vanilla JavaScript (ES6+)
- Maintain Japanese UI text consistently
- Follow existing naming conventions
- Add JSDoc comments for complex functions
- Ensure responsive design for mobile devices

## Testing Guidelines

- Test all CRUD operations (Create, Read, Update, Delete)
- Mock browser APIs (localStorage, alert, confirm)
- Verify edge cases (empty input, special characters)
- Maintain test coverage above 80%

## Interaction Guidelines

- 英語で回答する際、要約を日本語でも出力して
- Always verify changes don't break existing functionality
- Run tests before committing code changes
- Follow semantic commit message conventions