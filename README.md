# OA Platform - Online Assessment Platform

A modern, AI-powered coding practice platform built with Next.js, TypeScript, and React. This platform provides an interactive environment for practicing algorithmic problems with intelligent AI assistance that guides without giving away complete solutions.

## 🚀 Features

### Core Functionality
- **Problem Browser**: Browse and filter coding problems by difficulty, tags, and search
- **In-Browser Editor**: Monaco editor with syntax highlighting, auto-completion, and multi-language support
- **Safe Test Runner**: Sandboxed code execution with real-time feedback
- **AI Helper**: Intelligent assistance with three levels of guidance (Hint, Guided, Walkthrough)
- **Progress Tracking**: Dashboard with statistics, achievements, and submission history
- **Responsive Design**: Mobile-first design that works on all devices

### AI Helper Features
- **Three Assistance Levels**:
  - **Hint**: Conceptual hints, algorithm outlines, key edge cases
  - **Guided**: Detailed walkthrough, structured pseudocode, short snippets
  - **Walkthrough**: Detailed plan, decomposition, targeted snippets
- **Content Filtering**: Prevents full solution disclosure with client and server-side enforcement
- **Compliance Monitoring**: Real-time detection of policy violations
- **Escalation System**: Credit-based system for higher assistance levels

### Technical Features
- **TypeScript**: Strict type checking for better code quality
- **Next.js App Router**: Modern routing with server components
- **React Query**: Efficient data fetching and caching
- **Zustand**: Lightweight state management
- **Tailwind CSS**: Utility-first styling with custom design system
- **Monaco Editor**: VS Code-like editing experience
- **Radix UI**: Accessible component primitives

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Editor**: Monaco Editor
- **UI Components**: Radix UI, Lucide React
- **Icons**: Lucide React
- **Font**: Inter

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── problems/      # Problem-related endpoints
│   │   ├── ai/           # AI helper endpoints
│   │   └── run/          # Test runner endpoint
│   ├── problems/          # Problem pages
│   ├── dashboard/         # User dashboard
│   ├── settings/          # User settings
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   ├── editor/           # Editor-related components
│   └── ai/               # AI helper components
├── lib/                  # Utility libraries
│   ├── api.ts           # API client
│   ├── store.ts         # Zustand store
│   ├── utils.ts         # Utility functions
│   └── query-client.ts  # React Query configuration
├── types/               # TypeScript type definitions
└── styles/             # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd oa-platform
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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎯 Usage

### For Students/Learners

1. **Browse Problems**: Visit `/problems` to see available coding challenges
2. **Filter & Search**: Use filters to find problems by difficulty, tags, or search terms
3. **Solve Problems**: Click on a problem to open the editor and start coding
4. **Use AI Helper**: Click the AI Helper button for intelligent assistance
5. **Track Progress**: Visit `/dashboard` to see your progress and achievements

### For Developers

1. **Problem Management**: Add new problems by extending the mock data in API routes
2. **AI Integration**: Implement real AI service integration in `/api/ai/ask`
3. **Test Runner**: Enhance the sandboxed execution in `/api/run`
4. **Customization**: Modify components and styles to match your brand

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# AI Service (when implementing real AI)
AI_SERVICE_URL=your-ai-service-url
AI_SERVICE_KEY=your-ai-service-key

# Database (when implementing real database)
DATABASE_URL=your-database-url
```

### Customization

- **Themes**: Modify CSS variables in `src/app/globals.css`
- **Components**: Customize UI components in `src/components/ui/`
- **API**: Extend API routes in `src/app/api/`
- **Types**: Add new types in `src/types/index.ts`

## 🧪 Testing

The platform includes comprehensive testing setup:

- **Unit Tests**: Component testing with React Testing Library
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Full user flow testing with Playwright

Run tests:
```bash
npm run test          # Unit tests
npm run test:e2e      # E2E tests
npm run test:coverage # Coverage report
```

## 🔒 Security Features

- **Code Sanitization**: Input sanitization for AI interactions
- **Sandboxed Execution**: Safe code execution environment
- **Content Filtering**: Prevents full solution disclosure
- **Rate Limiting**: API rate limiting (to be implemented)
- **Input Validation**: Comprehensive input validation

## 📱 Responsive Design

The platform is fully responsive with:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface
- Collapsible editor on mobile
- Full-screen AI helper on mobile

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support
- **ARIA Labels**: Proper ARIA attributes
- **Screen Reader Support**: Compatible with screen readers
- **Color Contrast**: WCAG AA compliant
- **Focus Management**: Proper focus handling

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Code editor
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - UI primitives
- [Lucide](https://lucide.dev/) - Icons

## 📞 Support

For support, email support@oa-platform.com or create an issue in the repository.

---

Built with ❤️ for the coding community