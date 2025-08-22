import { CodeBlock } from '@/components/ui/code-block'

export default function TestCodePage() {
  const javascriptCode = `const memoizedValue = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);

const memoizedCallback = useCallback((id) => {
  return optimizedFunction(id);
}, [dependency]);

// React.memo for component optimization
const MemoizedComponent = React.memo(({ data }) => {
  return <div>{data.name}</div>;
});`

  const typescriptCode = `interface User {
  id: string;
  name: string;
  email: string;
}

const fetchUser = async (id: string): Promise<User> => {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}`

  const cssCode = `.code-block {
  background: #1e1e1e;
  border-radius: 8px;
  padding: 1rem;
  font-family: 'JetBrains Mono', monospace;
  overflow-x: auto;
}

.syntax-highlight {
  color: #d4d4d4;
}`

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Code Block Test</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">JavaScript Example</h2>
          <CodeBlock
            code={javascriptCode}
            language="javascript"
            title="React Performance Hooks"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">TypeScript Example</h2>
          <CodeBlock
            code={typescriptCode}
            language="typescript"
            showLineNumbers={true}
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">CSS Example</h2>
          <CodeBlock
            code={cssCode}
            language="css"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Inline Code</h2>
          <p>
            This paragraph contains <code>inline code</code> that should be styled differently 
            from the code blocks above. You can use <code>React.memo</code>, <code>useMemo</code>, 
            and <code>useCallback</code> for performance optimization.
          </p>
        </div>
      </div>
    </div>
  )
}