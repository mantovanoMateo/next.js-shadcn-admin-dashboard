import { Activity } from 'lucide-react'

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {[
        { user: "Alice", action: "realizó una compra", amount: 120 },
        { user: "Bob", action: "se suscribió al plan premium", amount: 50 },
        { user: "Charlie", action: "dejó una reseña", amount: null },
        { user: "Diana", action: "devolvió un producto", amount: -80 },
      ].map((item, index) => (
        <div key={index} className="flex items-center">
          <Activity className="mr-2 h-4 w-4 text-muted-foreground" />
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {item.user} {item.action}
            </p>
            {item.amount !== null && (
              <p className="text-sm text-muted-foreground">
                ${Math.abs(item.amount).toFixed(2)}
              </p>
            )}
          </div>
          {item.amount !== null && (
            <div className={`ml-auto font-medium ${item.amount >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {item.amount >= 0 ? '+' : '-'}${Math.abs(item.amount).toFixed(2)}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

