import { NextRequest, NextResponse } from 'next/server';
import type { AIRequest, AIResponse } from '../../../../types';

// Mock AI responses based on assistance level
const mockAIResponses = {
  hint: [
    "Think about using a hash map to store values and their indices for O(1) lookup.",
    "Consider the two-pointer technique for this problem.",
    "What data structure would help you keep track of unique elements?",
    "Try to think about the problem step by step. What's the first thing you need to do?",
    "Consider using a sliding window approach for this problem.",
  ],
  guided: [
    "Here's a structured approach:\n1. First, understand what you're looking for\n2. Consider using a hash map to store seen values\n3. For each element, check if the complement exists\n4. Return the indices when found\n\nTry implementing this step by step.",
    "Let me walk you through this:\n\n1. Initialize a hash map to store value -> index\n2. Iterate through the array\n3. For each number, calculate what you need to find\n4. Check if that value exists in your map\n5. If yes, return the indices; if no, store current value and continue",
    "This problem can be solved with a two-pointer technique:\n\n1. Sort the array first\n2. Use left and right pointers\n3. Compare the sum with target\n4. Move pointers based on comparison\n\nWould you like me to elaborate on any of these steps?",
  ],
  walkthrough: [
    "Let me break this down into manageable steps:\n\n**Step 1: Understand the problem**\nYou need to find two numbers that add up to a target. The key insight is that for each number, you know exactly what the other number should be (target - current).\n\n**Step 2: Choose your data structure**\nA hash map is perfect here because you need O(1) lookup time.\n\n**Step 3: Algorithm outline**\n```\nfor each number in array:\n    complement = target - number\n    if complement in hash_map:\n        return [hash_map[complement], current_index]\n    hash_map[number] = current_index\n```\n\n**Step 4: Edge cases to consider**\n- What if the same number appears twice?\n- What if no solution exists?\n\nTry implementing this approach!",
    "Here's a detailed walkthrough:\n\n**Problem Analysis:**\nYou're looking for two indices where the sum equals target. The naive approach would be O(n²), but we can do better.\n\n**Key Insight:**\nFor any number `nums[i]`, the number we're looking for is `target - nums[i]`. If we've seen this complement before, we have our answer.\n\n**Algorithm:**\n1. Create an empty hash map\n2. For each element with index i:\n   - Calculate complement = target - nums[i]\n   - If complement exists in map, return [map[complement], i]\n   - Otherwise, store nums[i] -> i in map\n\n**Time Complexity:** O(n)\n**Space Complexity:** O(n)\n\nThis is much more efficient than the brute force approach!",
  ],
};

export async function POST(request: NextRequest) {
  try {
    const { problemId, question, assistanceLevel, context }: AIRequest = await request.json();

    if (!problemId || !question || !assistanceLevel) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    // Get a random response based on assistance level
    const responses = mockAIResponses[assistanceLevel];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    // Simulate confidence based on assistance level
    const confidenceMap = {
      hint: 85 + Math.floor(Math.random() * 10),
      guided: 75 + Math.floor(Math.random() * 15),
      walkthrough: 65 + Math.floor(Math.random() * 20),
    };

    // Check for code violations (mock)
    const hasCodeViolation = question.toLowerCase().includes('full solution') || 
                            question.toLowerCase().includes('complete code') ||
                            question.toLowerCase().includes('give me the answer');

    let response = randomResponse;
    let complianceBadge: 'compliant' | 'partial' | 'violation' = 'compliant';

    if (hasCodeViolation) {
      response = "I can't provide the full solution, but I can help you understand the approach. What specific part of the problem are you struggling with?";
      complianceBadge = 'violation';
    } else if (response.includes('```') && response.split('```').length > 2) {
      complianceBadge = 'partial';
    }

    const aiResponse: AIResponse = {
      response,
      assistanceLevel,
      confidenceEstimate: confidenceMap[assistanceLevel],
      complianceBadge,
      requiresEscalation: assistanceLevel === 'hint' && question.toLowerCase().includes('walkthrough'),
    };

    return NextResponse.json({ success: true, data: aiResponse });
  } catch (error) {
    console.error('AI API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
