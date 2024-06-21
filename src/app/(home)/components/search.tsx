import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'

export function Search() {
  return (
    <>
      <SearchIcon className="text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search menu items"
        className="border-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
      />
    </>
  )
}
