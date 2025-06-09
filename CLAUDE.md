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