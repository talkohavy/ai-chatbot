import { type Response } from 'express';

export const isMock = false;
export const hardcodedResponse = `# AI Assistant Response

Thank you for your question! Here's a comprehensive overview of the topic you asked about.

## Summary

This is a simulated response to help you test your frontend interface. Since you're out of tokens, I'm providing this mock data that includes various formatting elements to demonstrate the capabilities of your UI.

## Key Features Comparison Table

| Feature | Description | Status | Priority | Estimated Time |
|---------|-------------|--------|----------|---------------|
| User Authentication | Secure login and registration system | ✅ Completed | High | 2 weeks |
| Dashboard Analytics | Real-time data visualization and metrics | 🔄 In Progress | High | 3 weeks |
| API Integration | RESTful API endpoints and documentation | ✅ Completed | Critical | 4 weeks |
| Database Optimization | Query performance and indexing improvements | 📋 Planned | Medium | 2 weeks |
| Mobile Responsiveness | Adaptive design for all screen sizes | ✅ Completed | High | 3 weeks |
| User Notifications | Push notifications and email alerts | 🔄 In Progress | Medium | 2 weeks |
| Search Functionality | Full-text search with filters | 📋 Planned | Medium | 2 weeks |
| File Upload System | Support for multiple file formats | ✅ Completed | Medium | 1 week |
| Role-Based Access | Granular permissions management | 🔄 In Progress | High | 3 weeks |
| Reporting Module | Custom reports and data exports | 📋 Planned | Low | 4 weeks |
| Third-Party Integrations | Connect with external services | 📋 Planned | Medium | 5 weeks |
| Caching Strategy | Redis implementation for performance | ✅ Completed | High | 2 weeks |
| Automated Testing | Unit and integration test coverage | 🔄 In Progress | Critical | Ongoing |
| Documentation | User guides and API documentation | 📋 Planned | Medium | 3 weeks |
| Security Auditing | Vulnerability scanning and fixes | ✅ Completed | Critical | 2 weeks |

## Detailed Analysis

### Section 1: Architecture Overview

The system is built on a modern microservices architecture that ensures scalability and maintainability. Each service is independently deployable and can be scaled horizontally based on demand. This approach provides several advantages:

1. **Improved fault isolation** - If one service fails, others continue to operate
2. **Technology flexibility** - Different services can use different tech stacks
3. **Independent scaling** - Scale only the services that need it
4. **Faster development cycles** - Teams can work on different services simultaneously

### Section 2: Technology Stack

Our technology stack has been carefully chosen to provide the best balance of performance, developer experience, and community support:

- **Frontend**: React, TypeScript, Vite, TailwindCSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL with Redis caching
- **Infrastructure**: Docker, Kubernetes, AWS
- **CI/CD**: GitHub Actions, ArgoCD

### Section 3: Best Practices

Here are some important best practices we follow in our development process:

1. **Code Reviews**: All code must be reviewed by at least two team members before merging
2. **Automated Testing**: Minimum 80% code coverage required for all new features
3. **Documentation**: Every API endpoint must have OpenAPI/Swagger documentation
4. **Security**: Regular security audits and dependency updates
5. **Performance**: Load testing before each major release

### Section 4: Performance Metrics

| Metric | Current Value | Target | Status |
|--------|--------------|--------|--------|
| API Response Time (p95) | 145ms | <150ms | ✅ |
| Database Query Time (avg) | 23ms | <50ms | ✅ |
| Frontend Load Time | 1.2s | <2s | ✅ |
| Error Rate | 0.03% | <0.1% | ✅ |
| Uptime | 99.95% | >99.9% | ✅ |
| Concurrent Users | 50,000 | 100,000 | 🔄 |

### Section 5: Future Roadmap

Looking ahead, we have several exciting features planned for the next quarters:

- **Q1 2026**: Enhanced mobile experience with native apps
- **Q2 2026**: AI-powered recommendations and insights
- **Q3 2026**: Advanced analytics dashboard with custom widgets
- **Q4 2026**: Multi-language support and internationalization

### Section 6: Code Example

Here's a simple example of how to use our API:

\`\`\`typescript
const response = await fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
  },
  body: JSON.stringify({
    query: 'example query',
    filters: ['filter1', 'filter2']
  })
});

const data = await response.json();
console.log(data);
\`\`\`

### Conclusion

This simulated response demonstrates various formatting capabilities including tables, lists, code blocks, and extensive text content. Your frontend should be able to handle all these elements smoothly with proper scrolling behavior.

Feel free to ask more questions to test different aspects of the interface!`;

export async function sendMockResponse(res: Response) {
  // Send start events
  res.write(`data: ${JSON.stringify({ type: 'start' })}\n\n`);
  res.write(`data: ${JSON.stringify({ type: 'start-step' })}\n\n`);
  res.write(`data: ${JSON.stringify({ type: 'text-start', id: '0' })}\n\n`);

  // Simulate streaming by sending chunks with slight delays
  const chunkSize = 50;
  for (let i = 0; i < hardcodedResponse.length; i += chunkSize) {
    const chunk = hardcodedResponse.slice(i, i + chunkSize);
    res.write(`data: ${JSON.stringify({ type: 'text-delta', id: '0', delta: chunk })}\n\n`);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  // Send end events
  res.write(`data: ${JSON.stringify({ type: 'text-end', id: '0' })}\n\n`);
  res.write(`data: ${JSON.stringify({ type: 'finish-step' })}\n\n`);
  res.write(`data: ${JSON.stringify({ type: 'finish', finishReason: 'stop' })}\n\n`);
  res.write('data: [DONE]\n\n');

  res.end();
}
