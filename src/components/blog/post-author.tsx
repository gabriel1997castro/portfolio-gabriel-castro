import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SiteSettings } from '@/lib/sanity/types'
import { urlFor } from '@/lib/sanity/client'

interface PostAuthorProps {
  siteSettings: SiteSettings | null
}

export function PostAuthor({ siteSettings }: PostAuthorProps) {
  // Fallback data if site settings are not available
  const fallbackData = {
    name: 'Gabriel Castro',
    title: 'Frontend Engineer',
    bio: 'Passionate about React, TypeScript, and building performant web applications.',
    avatar: '/images/gabriel-castro.jpg'
  }

  const authorData = siteSettings ? {
    name: siteSettings.name,
    title: siteSettings.title,
    bio: siteSettings.bio,
    avatar: siteSettings.avatar ? urlFor(siteSettings.avatar).width(96).height(96).url() : fallbackData.avatar
  } : fallbackData

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          <Image
            src={authorData.avatar}
            alt={authorData.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">{authorData.name}</h4>
            <p className="text-sm text-muted-foreground">
              {authorData.title}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          {authorData.bio}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          asChild
        >
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </CardContent>
    </Card>
  )
}