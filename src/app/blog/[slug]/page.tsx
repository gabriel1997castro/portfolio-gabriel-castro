import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import Link from "next/link"

// Sample blog posts data - will be replaced with Sanity data later
const posts = [
  {
    id: '1',
    title: 'React Performance Optimization Techniques',
    slug: 'react-performance-optimization',
    excerpt: 'Learn essential techniques for keeping your React applications fast and responsive, including memoization, code splitting, and bundle optimization.',
    publishedAt: '2024-12-15',
    tags: ['React', 'Performance', 'JavaScript'],
    readingTime: '8 min read',
    featured: true,
    content: `
      <p>Performance is crucial in React applications, especially as they grow in complexity. Users expect fast, responsive interfaces, and even small delays can impact user experience and business metrics.</p>
      
      <h2>Understanding React's Rendering Behavior</h2>
      <p>React's reconciliation algorithm is efficient, but understanding when and why components re-render is essential for optimization. Every state change can potentially trigger a cascade of re-renders throughout your component tree.</p>
      
      <h3>Common Performance Pitfalls</h3>
      <ul>
        <li>Unnecessary re-renders due to new object/array creation in JSX</li>
        <li>Expensive calculations on every render</li>
        <li>Inefficient list rendering without proper keys</li>
        <li>Large bundle sizes affecting initial load time</li>
      </ul>
      
      <h2>Optimization Techniques</h2>
      
      <h3>1. React.memo and useMemo</h3>
      <p>React.memo prevents unnecessary re-renders of functional components:</p>
      
      <pre><code>const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  return (
    <div>
      {data.map(item => (
        <ItemComponent key={item.id} item={item} onUpdate={onUpdate} />
      ))}
    </div>
  );
});

// Use useMemo for expensive calculations
const memoizedValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);</code></pre>
      
      <h3>2. useCallback for Event Handlers</h3>
      <p>Memoize event handlers to prevent child components from re-rendering:</p>
      
      <pre><code>const handleUpdate = useCallback((id, newValue) => {
  setItems(prev => prev.map(item => 
    item.id === id ? { ...item, value: newValue } : item
  ));
}, []);

const handleDelete = useCallback((id) => {
  setItems(prev => prev.filter(item => item.id !== id));
}, []);</code></pre>
      
      <h3>3. Code Splitting with React.lazy</h3>
      <p>Split your application into smaller chunks that load on demand:</p>
      
      <pre><code>const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LazyComponent />
    </Suspense>
  );
}</code></pre>
      
      <h2>Bundle Optimization</h2>
      <p>Modern bundlers like Webpack, Vite, and Parcel offer various optimization techniques:</p>
      
      <ul>
        <li><strong>Tree shaking:</strong> Eliminate dead code automatically</li>
        <li><strong>Code splitting:</strong> Split code into smaller, cacheable chunks</li>
        <li><strong>Compression:</strong> Use gzip or brotli compression</li>
        <li><strong>Asset optimization:</strong> Optimize images, fonts, and other static assets</li>
      </ul>
      
      <h2>Measuring Performance</h2>
      <p>Use React DevTools Profiler and browser tools to identify bottlenecks:</p>
      
      <pre><code>// Measure component render time
import { Profiler } from 'react';

function onRenderCallback(id, phase, actualDuration) {
  console.log('Component:', id, 'Phase:', phase, 'Duration:', actualDuration);
}

<Profiler id="App" onRender={onRenderCallback}>
  <App />
</Profiler></code></pre>
      
      <h2>Conclusion</h2>
      <p>React performance optimization is an ongoing process. Focus on measuring first, then optimizing the actual bottlenecks rather than premature optimization. The techniques covered here will help you build faster, more responsive React applications that provide excellent user experiences.</p>
    `,
  },
  {
    id: '2',
    title: 'Testing Strategies for Modern Frontend Applications',
    slug: 'testing-strategies-frontend',
    excerpt: 'A comprehensive guide to testing React applications with Jest, React Testing Library, and Cypress. Best practices and common pitfalls.',
    publishedAt: '2024-12-10',
    tags: ['Testing', 'React', 'Jest', 'Cypress'],
    readingTime: '12 min read',
    featured: true,
    content: `
      <p>Testing is an essential part of modern frontend development. A well-tested application gives you confidence to refactor, add features, and deploy to production. This guide covers testing strategies for React applications using modern tools and best practices.</p>
      
      <h2>The Testing Pyramid</h2>
      <p>The testing pyramid helps us understand the different types of tests and their appropriate balance:</p>
      
      <ul>
        <li><strong>Unit Tests (70%):</strong> Test individual components and functions in isolation</li>
        <li><strong>Integration Tests (20%):</strong> Test how components work together</li>
        <li><strong>E2E Tests (10%):</strong> Test complete user workflows</li>
      </ul>
      
      <h2>Unit Testing with Jest and React Testing Library</h2>
      
      <h3>Testing Component Behavior</h3>
      <p>Focus on testing what users see and do, not implementation details:</p>
      
      <pre><code>import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

test('increments count when button is clicked', () => {
  render(<Counter initialCount={0} />);
  
  const button = screen.getByRole('button', { name: /increment/i });
  const count = screen.getByText('Count: 0');
  
  fireEvent.click(button);
  
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});</code></pre>
      
      <h3>Testing Custom Hooks</h3>
      <p>Use @testing-library/react-hooks for testing custom hooks:</p>
      
      <pre><code>import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter(0));
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});</code></pre>
      
      <h2>Integration Testing</h2>
      <p>Test components working together, including data flow and side effects:</p>
      
      <pre><code>test('displays user data after successful API call', async () => {
  // Mock the API call
  const userData = { id: 1, name: 'John Doe', email: 'john@example.com' };
  jest.spyOn(api, 'getUser').mockResolvedValue(userData);
  
  render(<UserProfile userId={1} />);
  
  // Wait for async operations
  expect(await screen.findByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('john@example.com')).toBeInTheDocument();
});</code></pre>
      
      <h2>End-to-End Testing with Cypress</h2>
      
      <h3>Testing User Workflows</h3>
      <p>E2E tests validate complete user journeys:</p>
      
      <pre><code>describe('User Registration Flow', () => {
  it('allows a user to register and login', () => {
    cy.visit('/register');
    
    cy.get('[data-testid="email"]').type('test@example.com');
    cy.get('[data-testid="password"]').type('password123');
    cy.get('[data-testid="confirm-password"]').type('password123');
    
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', '/dashboard');
    cy.get('[data-testid="welcome-message"]').should('contain', 'Welcome');
  });
});</code></pre>
      
      <h2>Best Practices</h2>
      
      <h3>1. Write Tests First (TDD)</h3>
      <p>Test-driven development helps you write better, more focused code:</p>
      
      <ol>
        <li>Write a failing test</li>
        <li>Write the minimum code to make it pass</li>
        <li>Refactor while keeping tests green</li>
      </ol>
      
      <h3>2. Use Data Test IDs</h3>
      <p>Add data-testid attributes for reliable element selection:</p>
      
      <pre><code>// Component
<button data-testid="submit-button" onClick={handleSubmit}>
  Submit
</button>

// Test
cy.get('[data-testid="submit-button"]').click();</code></pre>
      
      <h3>3. Mock External Dependencies</h3>
      <p>Use MSW (Mock Service Worker) for API mocking:</p>
      
      <pre><code>import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: 'John' }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());</code></pre>
      
      <h2>Common Pitfalls</h2>
      
      <ul>
        <li><strong>Testing implementation details:</strong> Focus on behavior, not internals</li>
        <li><strong>Over-mocking:</strong> Mock only what you need to</li>
        <li><strong>Brittle selectors:</strong> Use semantic queries when possible</li>
        <li><strong>Not testing error states:</strong> Test both happy path and error scenarios</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>A solid testing strategy gives you confidence to ship quality code. Start with unit tests for core logic, add integration tests for component interactions, and use E2E tests for critical user flows. Remember: good tests are maintainable, readable, and focused on user behavior.</p>
    `,
  },
]

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Gabriel Castro`,
    description: post.excerpt,
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = posts
    .filter(p => p.slug !== post.slug)
    .filter(p => p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 2)

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Back Navigation */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time>{formatDate(post.publishedAt)}</time>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
            {post.featured && (
              <>
                <span>•</span>
                <Badge variant="outline" className="text-xs">
                  Featured
                </Badge>
              </>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-display">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </header>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3">
            <div 
              className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-h2:text-2xl prose-h3:text-xl prose-pre:bg-muted prose-pre:border prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Table of Contents</h3>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2 text-sm">
                    <Link href="#understanding" className="block text-muted-foreground hover:text-foreground transition-colors">
                      Understanding React&apos;s Rendering
                    </Link>
                    <Link href="#optimization" className="block text-muted-foreground hover:text-foreground transition-colors">
                      Optimization Techniques
                    </Link>
                    <Link href="#bundle" className="block text-muted-foreground hover:text-foreground transition-colors">
                      Bundle Optimization
                    </Link>
                    <Link href="#measuring" className="block text-muted-foreground hover:text-foreground transition-colors">
                      Measuring Performance
                    </Link>
                  </nav>
                </CardContent>
              </Card>

              {/* Author */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      GC
                    </div>
                    <div>
                      <h4 className="font-semibold">Gabriel Castro</h4>
                      <p className="text-sm text-muted-foreground">Senior Frontend Engineer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Passionate about React, TypeScript, and building performant web applications.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <Card>
                  <CardHeader>
                    <h3 className="font-semibold">Related Posts</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.id}>
                          <Link
                            href={`/blog/${relatedPost.slug}`}
                            className="block group"
                          >
                            <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2 mb-1">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {relatedPost.excerpt}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <time className="text-xs text-muted-foreground">
                                {formatDate(relatedPost.publishedAt)}
                              </time>
                              <span className="text-xs text-muted-foreground">•</span>
                              <span className="text-xs text-muted-foreground">
                                {relatedPost.readingTime}
                              </span>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </aside>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get notified when I publish new articles about React, TypeScript, and frontend development.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <Button className="flex-1" asChild>
                  <Link href="/contact">
                    Subscribe to Updates
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}