import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, slug } = body

    // Verify the webhook secret
    const webhookSecret = process.env.SANITY_WEBHOOK_SECRET
    const authorization = request.headers.get('authorization')
    
    if (webhookSecret && authorization !== `Bearer ${webhookSecret}`) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    // Revalidate based on content type
    switch (type) {
      case 'siteSettings':
        revalidatePath('/')
        revalidatePath('/contact')
        break
      
      case 'project':
        revalidatePath('/')
        revalidatePath('/projects')
        if (slug) {
          revalidatePath(`/projects/${slug}`)
        }
        break
      
      case 'post':
        revalidatePath('/')
        revalidatePath('/blog')
        if (slug) {
          revalidatePath(`/blog/${slug}`)
        }
        break
      
      case 'job':
        revalidatePath('/experience')
        break
      
      default:
        // Revalidate all pages if type is unknown
        revalidatePath('/')
        revalidatePath('/projects')
        revalidatePath('/blog')
        revalidatePath('/experience')
        break
    }

    return NextResponse.json({ 
      message: 'Revalidation successful',
      type,
      slug: slug || null,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { message: 'Error revalidating', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}