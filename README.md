# CodeMaster AI - AI-Assisted OA Platform

A comprehensive platform for solving coding challenges with intelligent AI guidance. Built with Next.js, TypeScript, and modern web technologies.

## 🚀 Features

### Landing Page (`/`)
- **Hero Section**: Compelling introduction with animated code elements
- **Feature Showcase**: Highlights adaptive AI guidance, code editor, and structured learning
- **Authentication Modal**: Unified sign-in/sign-up with guest mode for development
- **Responsive Design**: Beautiful UI that works on all devices

### Dashboard (`/dashboard`)
- **User Profile**: Progress tracking and statistics
- **Problem List**: Filterable and searchable problem collection
- **Progress Visualization**: Difficulty-based progress bars and hint usage stats
- **Status Indicators**: Visual problem status (solved, in-progress, AI-helped, not-started)

### Problem Workspace (`/problems/[slug]`)
- **Monaco Editor**: Professional code editor with syntax highlighting
- **AI Chat Panel**: Contextual assistance with difficulty-based hints
- **Test Execution**: Run code and see real-time test results
- **Problem Description**: Detailed problem statements and test cases
- **Auto-save**: Draft code is automatically saved

## 🛠 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: Zustand with persistence
- **Editor**: Monaco Editor (VS Code editor)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (UI), JetBrains Mono (Code)

## 🎨 Design System

### Color Palette
- **Navy**: Deep navy backgrounds (#0f172a, #1e293b, #334155)
- **Electric Blue**: Primary accent (#3b82f6)
- **Difficulty Colors**: 
  - Easy: Emerald (#10b981)
  - Medium: Amber (#f59e0b)
  - Hard: Rose (#f43f5e)

### Typography
- **UI Font**: Inter (clean, modern)
- **Code Font**: JetBrains Mono (developer-friendly)

### Components
- **Buttons**: Rounded pills with gradient hover effects
- **Cards**: Subtle shadows with hover animations
- **Status Indicators**: Color-coded dots and badges
- **Animations**: Smooth transitions and micro-interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd oa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard page
│   ├── problems/[slug]/   # Dynamic problem workspace
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   └── AuthModal.tsx     # Authentication modal
├── lib/                  # Utilities and configurations
│   └── store.ts          # Zustand store with persistence
```

## 🔧 Key Features Implementation

### State Management
The app uses Zustand for global state management with localStorage persistence:

```typescript
interface AppState {
  user: User | null;
  progress: Progress;
  aiSession: AISession;
  editorState: EditorState;
  // ... other state
}
```

### Authentication Flow
- **Development Mode**: Mock authentication with guest mode
- **Modal-based**: Unified sign-in/sign-up experience
- **State Persistence**: User session persists across browser refreshes

### AI Assistant System
- **Difficulty Levels**: Easy, Medium, Hard with different hint strategies
- **Quota System**: Limited hints per difficulty level
- **Chat Interface**: Real-time conversation with AI
- **Context Awareness**: AI responses based on current problem and difficulty

### Code Editor Integration
- **Monaco Editor**: Full-featured code editor
- **Language Support**: JavaScript (extensible to other languages)
- **Auto-save**: Draft code automatically saved to state
- **Syntax Highlighting**: Professional code highlighting

## 🎯 User Journey

1. **Landing**: User visits homepage, learns about the platform
2. **Authentication**: User signs in or continues as guest
3. **Dashboard**: User sees problem list, progress, and statistics
4. **Problem Selection**: User clicks on a problem to start solving
5. **Workspace**: User codes with AI assistance and runs tests
6. **Progress Tracking**: User's progress is saved and tracked

## 🔮 Future Enhancements

- **Real Authentication**: Integration with auth providers (Auth0, Clerk)
- **More Languages**: Support for Python, Java, C++, etc.
- **Advanced AI**: Integration with OpenAI or similar AI services
- **User Management**: User profiles, achievements, leaderboards
- **Problem Management**: Admin panel for adding/editing problems
- **Collaboration**: Real-time collaboration features
- **Mobile App**: React Native mobile application

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Style
- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Code formatting (if configured)
- **Tailwind**: Utility-first CSS approach

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@codemasterai.com or create an issue in the repository.

---

**Built with ❤️ for developers who want to learn coding with AI assistance.**