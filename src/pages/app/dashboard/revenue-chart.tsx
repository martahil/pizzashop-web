import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip } from 'recharts'
import colors from 'tailwindcss/colors'

const data =[
  { date: 'Dec 10', revenue: 1200 },
  { date: 'Dec 11', revenue: 800 },
  { date: 'Dec 12', revenue: 900 },
  { date: 'Dec 13', revenue: 400 },
  { date: 'Dec 14', revenue: 2300 },
  { date: 'Dec 15', revenue: 800 },
  { date: 'Dec 16', revenue: 640 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Revenue over the selected range</CardTitle>
          <CardDescription>Daily revenue over the selected range</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width='100%' height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey='date' tickLine={false} axisLine={false} dy={16} />

            <YAxis 
              stroke="#888" 
              axisLine={false} 
              tickLine={false} 
              // width={80}
              tickFormatter={(value: number) => 
                value.toLocaleString('en-US', { 
                  style: 'currency', 
                  currency: 'USD' 
                })
              } 
            />
            <Line type='linear' strokeWidth={2} dataKey='revenue' stroke={colors.violet['500']} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}