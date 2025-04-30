import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order: d6sf46dsa4f6dsa4d6f</DialogTitle>
        <DialogDescription>Order details</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pending
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Client</TableCell>
              <TableCell className="flex justify-end">
                Marta Hil
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Phone number</TableCell>
              <TableCell className="flex justify-end">
                (55) 90000-0000
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                email@email.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Time ago</TableCell>
              <TableCell className="flex justify-end">
                3 min ago
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Extra Large Pepperoni Pizza</TableCell>
              <TableCell className="text-right">02</TableCell>
              <TableCell className="text-right">$20</TableCell>
              <TableCell className="text-right">$40</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Extra Large Mozzarella Pizza</TableCell>
              <TableCell className="text-right">02</TableCell>
              <TableCell className="text-right">$19</TableCell>
              <TableCell className="text-right">$38</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Order Total</TableCell>
              <TableCell className="text-right font-medium">$78</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}