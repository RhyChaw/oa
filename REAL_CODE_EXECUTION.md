# Real Code Execution Setup

This document explains how to enable real code execution using Judge0 API instead of mock execution.

## Overview

The OA Platform supports real code execution through Judge0 API, which provides:
- **Real code compilation and execution** in multiple languages
- **Secure sandboxed environment** for safe code execution
- **Multiple language support** (JavaScript, Python, Java, C++, etc.)
- **Performance metrics** (runtime, memory usage)

## Setup Instructions

### 1. Get Judge0 API Key

1. Go to [RapidAPI Judge0](https://rapidapi.com/judge0-official/api/judge0-ce)
2. Subscribe to the free plan (1000 requests/day)
3. Copy your API key

### 2. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Enable real code execution
NEXT_PUBLIC_USE_REAL_EXECUTION=true

# Your RapidAPI key
NEXT_PUBLIC_RAPIDAPI_KEY=your_rapidapi_key_here
```

### 3. Restart Development Server

```bash
npm run dev
```

## Supported Languages

The following languages are supported for real code execution:

- **JavaScript** (Node.js)
- **TypeScript**
- **Python 3**
- **Java**
- **C++**
- **C**
- **C#**
- **Go**
- **Rust**
- **PHP**
- **Ruby**
- **Swift**
- **Kotlin**

## How It Works

1. **Code Submission**: User code is sent to Judge0 API
2. **Test Execution**: Each test case is executed in a sandboxed environment
3. **Result Processing**: Results are processed and returned to the frontend
4. **Fallback**: If real execution fails, falls back to mock execution

## API Limits

### Free Tier (RapidAPI)
- **1000 requests/day**
- **100 requests/minute**
- **Perfect for development and small-scale testing**

### Paid Tiers
- **Higher limits** available
- **Better reliability** and performance
- **Priority support**

## Security Features

- **Sandboxed execution** - Code runs in isolated containers
- **Resource limits** - CPU and memory constraints
- **Timeout protection** - Prevents infinite loops
- **No network access** - Code cannot access external resources

## Troubleshooting

### Common Issues

1. **API Key Invalid**
   - Verify your RapidAPI key is correct
   - Check if you've subscribed to the Judge0 API

2. **Rate Limit Exceeded**
   - Wait for the rate limit to reset
   - Consider upgrading to a paid plan

3. **Code Execution Timeout**
   - Check for infinite loops in your code
   - Optimize your algorithm

4. **Language Not Supported**
   - Verify the language is in the supported list
   - Check the language mapping in `judge0-api.ts`

### Debug Mode

Enable debug logging by adding to your `.env.local`:

```bash
NEXT_PUBLIC_DEBUG_EXECUTION=true
```

## Alternative APIs

If Judge0 doesn't meet your needs, you can integrate with:

1. **HackerEarth API** - Good for competitive programming
2. **CodeChef API** - For coding contests
3. **Sphere Engine** - Professional code execution
4. **Replit API** - Modern cloud IDE integration

## Development vs Production

- **Development**: Use mock execution (`NEXT_PUBLIC_USE_REAL_EXECUTION=false`)
- **Production**: Use real execution (`NEXT_PUBLIC_USE_REAL_EXECUTION=true`)

This allows you to develop without API costs while providing real functionality in production.
