import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { TableRow, TableCell } from "@/components/ui/table"
import { Search, ArrowRight, X } from "lucide-react"
import { OrderDetails } from "./order-details"

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant='outline' size='xs'>
              <Search className="h-3 w-3" />
              <span className="sr-only">Order details</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">h4f6d4g55df485f</TableCell>
      <TableCell className="text-muted-foreground">15 minutes ago</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
          <span className="font-medium text-muted-foreground">In Progress</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Marta Hil</TableCell>
      <TableCell className="font-medium">
        $ 149.90
      </TableCell>
      <TableCell>
        <Button variant='outline' size='xs'>
          <ArrowRight className="mr-2 h-3 w-3" />
          Approve
        </Button>
      </TableCell>
      <TableCell>
        <Button variant='ghost' size='xs'>
          <X className="mr-2 h-3 w-3" />
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  )
}