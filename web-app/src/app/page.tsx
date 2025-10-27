import Link from 'next/link';
import { ArrowRight, Code2, Rocket, Brain, GitBranch, Terminal, Star, Users, TrendingUp, Target, Play } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E7EB]">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#0A0A0A] to-[#10162A] animate-gradient" />
        
        {/* Floating code elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#00FFFF] rounded-full animate-pulse animate-float" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#6C63FF] rounded-full animate-pulse animate-float-delay-1" />
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse animate-float-delay-2" />
          <div className="absolute bottom-20 right-10 w-4 h-4 bg-[#00FFFF] opacity-30 rounded-full animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              {/* Tagline */}
              <p className="text-[#00FFFF] uppercase tracking-[0.2em] text-sm font-semibold">
                The future of coding assessments is here.
              </p>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Go Beyond LeetCode.
              <br />
                <span className="text-gradient-animated">
                  Build. Collaborate. Deploy. With AI.
                </span>
            </h1>

              {/* Subtext */}
              <p className="text-xl text-[#9CA3AF] max-w-xl leading-relaxed">
                We assess how you think, document, and solve — in a real project environment. AI is your teammate, not your shortcut.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/problems">
                  <Button 
                    className="bg-[#00FFFF] text-[#0A0A0A] hover:bg-[#00FFFF]/90 font-semibold px-8 py-6 text-lg glow-on-hover"
                    size="lg"
                  >
                    Start a Simulation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
                <Link href="#demo">
                  <Button 
                    variant="outline" 
                    className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 font-semibold px-8 py-6 text-lg glow-on-hover animate-pulse"
                    size="lg"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                </Button>
              </Link>
              </div>
            </div>

            {/* Right: Interactive Visual */}
            <div className="relative">
              {/* Mock Terminal/Code Editor Visual */}
              <div className="glass rounded-2xl p-6 border border-[#00FFFF]/20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="ml-4 text-sm text-[#9CA3AF]">AI-Enhanced Editor</span>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-[#6C63FF]">const</span>
                    <span className="text-[#00FFFF]">aiSnippet</span>
                    <span className="text-[#9CA3AF]">=</span>
                    <span className="text-[#00FFFF] animate-pulse">await</span>
                  </div>
                  <div className="ml-4 text-[#9CA3AF] flex items-center">
                    AI.suggestCodeBlock()
                    <span className="terminal-cursor" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 glass rounded-xl p-4 border border-[#6C63FF]/30 animate-float">
                <Brain className="w-8 h-8 text-[#6C63FF]" />
                <p className="text-xs mt-2 text-[#9CA3AF]">AI Context</p>
              </div>
              <div className="absolute -bottom-10 -left-10 glass rounded-xl p-4 border border-[#00FFFF]/30 animate-float-delay-1">
                <Rocket className="w-8 h-8 text-[#00FFFF]" />
                <p className="text-xs mt-2 text-[#9CA3AF]">Deploy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0A0A0A] to-[#10162A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
              Redefining how coding assessments work in the AI era.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: AI Collaboration Scoring */}
            <div className="glass rounded-2xl p-8 border border-[#00FFFF]/20 hover:border-[#00FFFF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00FFFF] to-[#6C63FF] rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-[#0A0A0A]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Collaboration Scoring</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                We measure how you work with AI, not against it. Our fine-tuned LLM gives snippets — you integrate, debug, and document.
              </p>
            </div>

            {/* Card 2: Real-World Simulations */}
            <div className="glass rounded-2xl p-8 border border-[#6C63FF]/20 hover:border-[#6C63FF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,99,255,0.3)] hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6C63FF] to-[#8A4FFF] rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-World Simulations</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                Build real projects, not toy problems. Deploy to a sandboxed production environment and get evaluated like a real engineer.
              </p>
            </div>

            {/* Card 3: Behavioral Intelligence */}
            <div className="glass rounded-2xl p-8 border border-[#3B82F6]/20 hover:border-[#3B82F6]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#00FFFF] rounded-xl flex items-center justify-center mb-6">
                <GitBranch className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Behavioral Intelligence</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                See your problem-solving path. Every commit, edit, and comment reflects your approach — and we measure that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 bg-[#10162A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
              Experience the future of developer assessments.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00FFFF] via-[#6C63FF] to-[#00FFFF] opacity-30" 
              style={{ height: 'calc(100% - 60px)', top: '30px' }} 
            >
              {' '}
            </div>

            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-right md:text-left order-2 md:order-1">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#00FFFF] rounded-full flex items-center justify-center text-[#0A0A0A] font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-2xl font-bold">Pick a Simulation</h3>
                  </div>
                  <p className="text-[#9CA3AF] text-lg max-w-md ml-auto md:ml-0">
                    Choose a challenge like &quot;Build a Chat App&quot; or &quot;Design an API.&quot; Each simulation tests real-world engineering skills.
                  </p>
                </div>
                <div className="w-16 h-16 bg-[#00FFFF]/20 border-2 border-[#00FFFF] rounded-full order-1 md:order-2 animate-pulse" />
                <div className="flex-1 order-3 hidden md:block" />
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 order-1 hidden md:block" />
                <div className="w-16 h-16 bg-[#6C63FF]/20 border-2 border-[#6C63FF] rounded-full order-2 animate-pulse" />
                <div className="flex-1 order-3 md:text-left">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#6C63FF] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <h3 className="text-2xl font-bold">Collaborate with AI</h3>
                  </div>
                  <p className="text-[#9CA3AF] text-lg max-w-md">
                    Our model gives controlled snippets. You build the full flow, integrating AI suggestions with your own code.
              </p>
            </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-right md:text-left order-2 md:order-1">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <h3 className="text-2xl font-bold">Push to Sandbox</h3>
                  </div>
                  <p className="text-[#9CA3AF] text-lg max-w-md ml-auto md:ml-0">
                    Run it in a sandboxed production pipeline. CI/CD, debugging, and review included. Experience real engineering workflows.
              </p>
            </div>
                <div className="w-16 h-16 bg-[#3B82F6]/20 border-2 border-[#3B82F6] rounded-full order-1 md:order-2 animate-pulse" />
                <div className="flex-1 order-3 hidden md:block" />
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 order-1 hidden md:block" />
                <div className="w-16 h-16 bg-[#00FFFF]/20 border-2 border-[#00FFFF] rounded-full order-2 animate-pulse" />
                <div className="flex-1 order-3 md:text-left">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00FFFF] to-[#6C63FF] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      4
                    </div>
                    <h3 className="text-2xl font-bold">Get Your Developer Score</h3>
                  </div>
                  <p className="text-[#9CA3AF] text-lg max-w-md">
                    See how you performed across dimensions — AI usage, structure, documentation, debugging. Get actionable insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Demo / Mock Environment Preview */}
      <section id="demo" className="relative py-24 bg-gradient-to-b from-[#10162A] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience Coding <span className="text-gradient">The Real Way</span>
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
              See what makes our platform unique.
            </p>
          </div>

          {/* Mock Editor Preview */}
          <div className="glass rounded-2xl overflow-hidden border border-[#00FFFF]/20">
            <div className="bg-[#1C1F2E] p-4 flex items-center gap-2 border-b border-[#00FFFF]/10">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-4 text-sm text-[#9CA3AF]">platform.dev | AI-Enhanced Editor</span>
            </div>

            <div className="grid md:grid-cols-3 gap-4 p-6">
              {/* AI Snippets Panel */}
              <div className="border border-[#6C63FF]/30 rounded-lg p-4 bg-[#1C1F2E]/50">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-[#6C63FF]" />
                  <h4 className="font-semibold">AI Snippets</h4>
                </div>
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-[#9CA3AF]">Generated suggestions:</div>
                  <div className="text-[#00FFFF]">• authHandler()</div>
                  <div className="text-[#00FFFF]">• dbConnection()</div>
                  <div className="text-[#00FFFF] animate-pulse">• apiMiddleware()</div>
                </div>
              </div>

              {/* Editor Zone */}
              <div className="border border-[#00FFFF]/30 rounded-lg p-4 bg-[#1C1F2E]/50">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-[#00FFFF]" />
                  <h4 className="font-semibold">Your Code</h4>
                </div>
                <div className="space-y-1 text-xs font-mono">
                  <div className="text-[#9CA3AF]">import &#123; AIHelper &#125; from &apos;@platform&apos;</div>
                  <div className="text-[#9CA3AF]">const handler = AIHelper.suggestAuth()</div>
                  <div className="text-[#00FFFF] animate-pulse">&#123;&#123; /* Your logic here */ &#125;&#125; ▋</div>
                </div>
              </div>

              {/* Console / Deploy */}
              <div className="border border-[#3B82F6]/30 rounded-lg p-4 bg-[#1C1F2E]/50">
                <div className="flex items-center gap-2 mb-4">
                  <Rocket className="w-5 h-5 text-[#3B82F6]" />
                  <h4 className="font-semibold">Sandbox Console</h4>
                </div>
                <div className="space-y-1 text-xs font-mono text-[#9CA3AF]">
                  <div className="text-green-400">✓ Build successful</div>
                  <div className="text-green-400">✓ Tests passed (12/12)</div>
                  <div className="text-[#00FFFF]">→ Deploy to sandbox...</div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#00FFFF]/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-[#6C63FF]" />
                  <span className="text-[#9CA3AF]">main</span>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#00FFFF]" />
                  <span className="text-[#9CA3AF]">3 commits</span>
                </div>
              </div>
              <Button className="bg-[#00FFFF] text-[#0A0A0A] hover:bg-[#00FFFF]/90">
                Deploy to Sandbox
              </Button>
            </div>
          </div>

          <p className="text-center text-[#9CA3AF] mt-8">
            Experience coding the way real engineers do.
          </p>
        </div>
      </section>

      {/* For Companies / Recruiters Section */}
      <section className="relative py-24 bg-[#10162A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Analytics Visual */}
            <div className="glass rounded-2xl p-8 border border-[#00FFFF]/20">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#9CA3AF] text-sm">AI Integration</span>
                    <span className="text-[#00FFFF] font-bold">94%</span>
                  </div>
                  <div className="w-full bg-[#1C1F2E] rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#00FFFF] to-[#6C63FF] h-2 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#9CA3AF] text-sm">Code Quality</span>
                    <span className="text-[#00FFFF] font-bold">87%</span>
                  </div>
                  <div className="w-full bg-[#1C1F2E] rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#6C63FF] to-[#8A4FFF] h-2 rounded-full" style={{ width: '87%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#9CA3AF] text-sm">Documentation</span>
                    <span className="text-[#00FFFF] font-bold">91%</span>
                  </div>
                  <div className="w-full bg-[#1C1F2E] rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#8A4FFF] to-[#3B82F6] h-2 rounded-full" style={{ width: '91%' }} />
                  </div>
                </div>
                <div className="pt-4 border-t border-[#00FFFF]/10">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-2xl font-bold">Overall Score</span>
                    <span className="text-[#00FFFF] text-2xl font-bold ml-auto">91</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gradient">Hire Engineers</span> Who Can Build
              </h2>
              <p className="text-xl text-[#9CA3AF] leading-relaxed">
                Our analytics dashboard evaluates creativity, collaboration, and clarity. See beyond just correct solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-[#00FFFF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Assess Real Skills</h4>
                    <p className="text-[#9CA3AF]">See how candidates approach problems, not just solve them.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-[#6C63FF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Analytics</h4>
                    <p className="text-[#9CA3AF]">AI usage patterns, code structure, debugging skills — all measured.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Scale Your Hiring</h4>
                    <p className="text-[#9CA3AF]">Automated assessments that save time while finding better talent.</p>
                  </div>
                </div>
              </div>
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-[#00FFFF] to-[#6C63FF] text-[#0A0A0A] hover:opacity-90 font-semibold px-8 py-6 text-lg glow-on-hover w-full sm:w-auto">
                  Request Early Access
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Community Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0A0A0A] to-[#10162A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join <span className="text-gradient">Thousands</span> of Developers
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
              Building the future of AI-powered assessments together.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="glass rounded-xl p-6 border border-[#00FFFF]/20 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00FFFF] mb-2">10K+</div>
              <div className="text-[#9CA3AF] text-sm">Active Developers</div>
            </div>
            <div className="glass rounded-xl p-6 border border-[#6C63FF]/20 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#6C63FF] mb-2">500+</div>
              <div className="text-[#9CA3AF] text-sm">Companies</div>
            </div>
            <div className="glass rounded-xl p-6 border border-[#8A4FFF]/20 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#8A4FFF] mb-2">50K+</div>
              <div className="text-[#9CA3AF] text-sm">Simulations Run</div>
            </div>
            <div className="glass rounded-xl p-6 border border-[#3B82F6]/20 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#3B82F6] mb-2">95%</div>
              <div className="text-[#9CA3AF] text-sm">Satisfaction Rate</div>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass px-4 py-2 rounded-full border border-[#00FFFF]/20 text-[#9CA3AF] text-sm">
              Leaderboards for Creativity
            </div>
            <div className="glass px-4 py-2 rounded-full border border-[#6C63FF]/20 text-[#9CA3AF] text-sm">
              Open-Source Projects
            </div>
            <div className="glass px-4 py-2 rounded-full border border-[#8A4FFF]/20 text-[#9CA3AF] text-sm">
              Mentorship Badges
            </div>
            <div className="glass px-4 py-2 rounded-full border border-[#3B82F6]/20 text-[#9CA3AF] text-sm">
              Community Showcase
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#10162A] via-[#0A0A0A] to-[#10162A] overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_70%)]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to Build Like a <span className="text-gradient-animated">Real Engineer?</span>
          </h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
              Step into the future of developer assessments — powered by AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/problems">
                <Button className="bg-[#00FFFF] text-[#0A0A0A] hover:bg-[#00FFFF]/90 font-semibold px-8 py-6 text-lg animate-glow-pulse">
                  Start a Simulation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
              <Link href="#demo">
                <Button variant="outline" className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 font-semibold px-8 py-6 text-lg">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Platform Demo
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#1C1F2E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-[#9CA3AF] text-sm">
                © 2025 OA Platform. Building the future of AI-powered assessments.
              </p>
            </div>
            <div className="flex gap-6">
              <Link href="/problems" className="text-[#9CA3AF] hover:text-[#00FFFF] transition-colors text-sm">
                Problems
              </Link>
              <Link href="/dashboard" className="text-[#9CA3AF] hover:text-[#00FFFF] transition-colors text-sm">
                Dashboard
              </Link>
              <Link href="/auth/signup" className="text-[#9CA3AF] hover:text-[#00FFFF] transition-colors text-sm">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
