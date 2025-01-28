# OnlySurge

A modern, feature-rich dashboard for content creators built with Next.js, TypeScript, and TailwindCSS.

## Features

- 🎨 Modern UI with dark theme and glass morphism design
- 📊 Real-time analytics and performance tracking
- 📅 Content scheduling and management
- 📱 Fully responsive design
- 🚀 Optimized performance
- 🔒 Secure authentication
- 📨 Notification system
- 📈 Earnings tracking and analytics
- 🎯 Goal setting and progress monitoring
- 🔄 Automated workflows

## Tech Stack

- **Framework:** Next.js 13+ with App Router
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **UI Components:** Shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide Icons
- **Authentication:** NextAuth.js
- **State Management:** React Context + Hooks
- **Development:** Vite

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/onlysurge.git
cd onlysurge
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Database
DATABASE_URL=your-database-url

# API Keys (if needed)
API_KEY=your-api-key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js 13 app directory
├── components/          # Reusable components
│   ├── ui/             # UI components
│   └── dashboard/      # Dashboard-specific components
├── contexts/           # React contexts
├── hooks/              # Custom hooks
├── lib/                # Utility functions
├── styles/             # Global styles
└── types/              # TypeScript types
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/) 