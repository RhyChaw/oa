'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Target, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import AuthModal from '@/components/AuthModal';

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { setAuthModalOpen } = useAppStore();

  useEffect(() => {
    setAuthModalOpen(isAuthModalOpen);
  }, [isAuthModalOpen, setAuthModalOpen]);

  const features = [
    {
      icon: Brain,
      title: 'Adaptive AI Guidance',
      description: 'Get hints tailored to your skill level - from gentle nudges to strategic insights.',
      color: 'text-electric-400',
    },
    {
      icon: Code,
      title: 'Code Editor & Feedback',
      description: 'Professional Monaco editor with instant feedback and syntax highlighting.',
      color: 'text-emerald-400',
    },
    {
      icon: Target,
      title: 'Structured Learning',
      description: 'Master problem-solving patterns, not just memorizing solutions.',
      color: 'text-amber-400',
    },
  ];

  const handleGetStarted = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-electric-500 to-electric-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">CodeMaster AI</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-navy-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#features" className="text-navy-300 hover:text-white transition-colors">
              Features
            </a>
            <button
              onClick={handleGetStarted}
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        {/* Floating Code Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-navy-600 font-mono text-sm opacity-30"
        >
          <pre>{`function solve() {\n  // AI hint incoming...\n}`}</pre>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 text-navy-600 font-mono text-sm opacity-30"
        >
          <pre>{`const ai = {\n  level: 'adaptive',\n  guidance: true\n}`}</pre>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Solve coding challenges.
              <br />
              <span className="bg-gradient-to-r from-electric-400 to-electric-600 bg-clip-text text-transparent">
                Get hints — not answers.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-navy-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              An intelligent platform that teaches you to think like an engineer. 
              Choose your level of AI assistance and master problem-solving.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleGetStarted}
              className="btn btn-primary text-lg px-8 py-4 group"
            >
              Start Solving
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn btn-ghost text-lg px-8 py-4">
              Watch Demo
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-navy-400"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Responsible AI</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Instant Feedback</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Adaptive Learning</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-navy-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Learn with structure — not shortcuts
            </h2>
            <p className="text-xl text-navy-300 max-w-3xl mx-auto">
              Our AI doesn't give you the answers. It guides you to discover them yourself.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card card-hover text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-navy-700 flex items-center justify-center group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-navy-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to master coding?
            </h2>
            <p className="text-xl text-navy-300 mb-8">
              Join thousands of developers learning with AI-guided problem solving.
            </p>
            <button
              onClick={handleGetStarted}
              className="btn btn-primary text-lg px-8 py-4"
            >
              Start Your First Challenge
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-navy-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-electric-500 to-electric-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CodeMaster AI</span>
            </div>
            <div className="flex space-x-8 text-navy-400">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Docs</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-navy-700 text-center text-navy-500">
            <p>&copy; 2024 CodeMaster AI. Built for developers, by developers.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}
