import { ServerCodeBlock } from '@/components/ui/server-code-block'

export default function CodeBlockTestPage() {
  const jsCode = `
function greet(name) {
  console.log(\`Hello, \${name}!\`)
  return \`Welcome to the portfolio, \${name}\`
}

const message = greet('World')
console.log(message)
  `.trim()

  const tsCode = `
interface User {
  id: number
  name: string
  email: string
}

function createUser(userData: Partial<User>): User {
  return {
    id: Math.random(),
    name: 'Unknown',
    email: 'unknown@example.com',
    ...userData
  }
}

const user = createUser({ name: 'Gabriel' })
  `.trim()

  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold">Code Block Test</h1>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">JavaScript Example</h2>
        <ServerCodeBlock
          code={jsCode}
          language="javascript"
          title="greet.js"
          showLineNumbers={true}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">TypeScript Example</h2>
        <ServerCodeBlock
          code={tsCode}
          language="typescript"
          title="user.ts"
          showLineNumbers={true}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Simple Example (No Line Numbers)</h2>
        <ServerCodeBlock
          code="npm install shiki hast-util-to-jsx-runtime"
          language="bash"
          title="Install Dependencies"
        />
      </section>
    </div>
  )
}
