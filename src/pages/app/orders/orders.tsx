import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Orders() {
  return (
    <>
      <Helmet title='Orders' />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filters:</span>
          <Input placeholder="Client name" className="h-8 w-[320px]" />
        </form>

        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Id</TableHead>
                <TableHead className="w-[180px]">Time Ago</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Client</TableHead>
                <TableHead className="w-[140px]">Order Total</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <Button variant='outline' size='xs'>
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Order details</span>
                      </Button>
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
              })
              }
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}