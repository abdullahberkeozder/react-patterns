# Repository Structure

This project follows a monorepo-oriented layout to keep learning examples and shared code in one place.

## Top-Level Layout

```text
react-patterns/
├── apps/                 # React apps used for pattern demonstrations
│   ├── fundamentals/     # Core React concepts and examples
│   ├── state-management/ # Context, reducers, and advanced state examples
│   └── patterns/         # Component pattern implementations
├── packages/             # Shared reusable libraries
│   ├── hooks/            # Custom hooks
│   ├── ui/               # Shared UI components
│   └── utils/            # Shared helpers and utilities
├── exercises/            # Optional learner exercises and solutions
│   ├── prompts/          # Exercise instructions
│   └── solutions/        # Reference implementations
├── docs/                 # Additional guides and reference docs
├── README.md             # Project overview
├── STRUCTURE.md          # This document
└── CONTRIBUTING.md       # Contribution guidelines
```

## Organization Principles

- Keep learning examples in `apps/` and reusable code in `packages/`.
- Prefer small, focused examples that each demonstrate one concept.
- Co-locate tests with the files they validate when test infrastructure is added.
- Keep docs updated whenever structure or contributor workflow changes.
