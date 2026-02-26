# MDO Labs React Application

A modern React application built with Vite and TypeScript, converted from the original HTML/CSS/JavaScript MDO Labs design system.

## 🚀 Features

- ✅ **React 18** with TypeScript
- ✅ **Vite** for fast development and optimized builds
- ✅ **Modern Component Architecture** following atomic design principles
- ✅ **Full UI Preservation** - Exact replication of the original MDO design system
- ✅ **Responsive Design** - Mobile and desktop layouts
- ✅ **Multiple Views** including:
  - Login screen
  - Ask KAI (AI Assistant)
  - Tasks management
  - Dataset management
  - Schema management
  - Product catalog
  - Admin settings

## 📁 Project Structure

```
mdo-labs-react/
├── public/
│   └── assets/          # Static assets (CSS, fonts, images, JS)
│       ├── css/         # MDO design system styles
│       ├── font/        # Font Awesome and MDO fonts
│       ├── img/         # Images and icons
│       └── js/          # Legacy JavaScript libraries
├── src/
│   ├── components/
│   │   ├── atoms/       # Basic UI elements (future)
│   │   ├── molecules/   # Simple component combinations (future)
│   │   ├── organisms/   # Complex UI sections
│   │   │   ├── Login.tsx
│   │   │   ├── SystemNavigation.tsx
│   │   │   ├── HomeNavigationPanel.tsx
│   │   │   ├── SidesheetBase.tsx
│   │   │   ├── WorkspaceContent.tsx
│   │   │   └── SettingsContent.tsx
│   │   └── templates/   # Page layouts
│   │       └── MainApp.tsx
│   ├── hooks/          # Custom React hooks (future)
│   ├── contexts/       # React Context providers (future)
│   ├── types/          # TypeScript type definitions (future)
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── index.html          # HTML entry point with MDO metadata
└── package.json        # Project dependencies

```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd mdo-labs-react
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:5173/](http://localhost:5173/)

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🔑 Login

To access the main application, enter any password on the login screen and click "Continue".

## 🎨 Design System

The application uses the MDO design system CSS framework, which includes:

- **Layout Components**: Cards, sections, grids
- **Navigation**: Offcanvas menus, tabs, breadcrumbs
- **Form Elements**: Inputs, buttons, dropdowns, checkboxes
- **Data Display**: Tables, lists, badges, avatars
- **Typography**: Consistent text styles and sizing
- **Icons**: Font Awesome integration
- **Spacing**: Systematic margin and padding utilities

## 📱 Application Features

### Workspace Views

1. **Ask KAI** - AI assistant interface
2. **Tasks** - Task management system
3. **Material Master** - Master data management
4. **All Datasets** - Dataset catalog
5. **Duplicate Check** - Data quality validation
6. **Classification Check** - Classification validation
7. **Survivorship Check** - Data survivorship rules
8. **All Schemas** - Schema management
9. **Data Summary Report** - Reporting interface
10. **Products** - Product catalog
11. **Assets** - Asset management
12. **Spares** - Spare parts catalog

### Admin Settings

1. **Users** - User management
2. **Roles & Permissions** - Access control
3. **Groups** - User groups
4. **Security** - Security settings
5. **Data Sources** - External data connections
6. **Integrations** - Third-party integrations
7. **Extensions** - System extensions
8. **Advanced** - Advanced configuration

## 🔄 Component Architecture

The application follows a structured component hierarchy:

- **App.tsx** - Main container with login/app state
- **Templates** - Full page layouts (MainApp)
- **Organisms** - Complex UI sections (Navigation, Content areas)
- **Molecules** - Component combinations (future expansion)
- **Atoms** - Basic UI elements (future expansion)

## 🎯 Future Enhancements

- [ ] Extract reusable atomic components (Button, Input, Badge, etc.)
- [ ] Add React Context for global state management
- [ ] Implement custom hooks for common functionality
- [ ] Add form validation logic
- [ ] Integrate with backend APIs
- [ ] Add unit tests with Vitest
- [ ] Add E2E tests with Playwright
- [ ] Implement React Router for URL-based navigation
- [ ] Add Storybook for component documentation

## 🧪 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **MDO Design System** - CSS framework
- **Font Awesome** - Icon library

## 📝 Notes

- This is a pure UI application with no backend integration
- All functionality is client-side only
- The original design system CSS is preserved for visual consistency
- Component content can be expanded based on specific requirements

## 📄 License

This project replicates the MDO Labs design system for internal use.

## 🤝 Contributing

When adding new features:

1. Follow the existing component structure
2. Maintain TypeScript type safety
3. Preserve the MDO design system classes
4. Keep components focused and reusable
5. Document complex logic with comments

