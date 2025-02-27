import { ArrowRight, Copy } from 'lucide-react'

import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'
import { Input } from '@/components/input'

export default function Home() {
  return (
    <main>
      <Button type="submit">
        Send
        <ArrowRight />
      </Button>
      <IconButton>
        <Copy />
      </IconButton>
      <div>
        <Input type="email" placeholder="Enter your e-mail" error />
      </div>
    </main>
  )
}
