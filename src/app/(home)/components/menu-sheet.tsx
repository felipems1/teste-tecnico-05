import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  SheetTitle,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Contact, LogIn, MenuIcon, SquareGanttChart } from 'lucide-react'

export function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="border-none bg-transparent hover:bg-transparent"
        >
          <MenuIcon className="h-7 w-7 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>

        <div className="py-6">
          <Separator />
        </div>

        <div className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start space-x-3 rounded-full font-normal"
          >
            <SquareGanttChart size={24} />
            <span className="text-md block">Menu</span>
          </Button>

          <>
            <Button
              variant="ghost"
              className="w-full justify-start space-x-3 rounded-full font-normal"
            >
              <LogIn size={24} />
              <span className="text-md block">Entrar</span>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start space-x-3 rounded-full font-normal"
            >
              <Contact size={24} />
              <span className="text-md block">Contato</span>
            </Button>
          </>
        </div>
      </SheetContent>
    </Sheet>
  )
}
