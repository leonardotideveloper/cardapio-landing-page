export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="grid grid-cols-2 gap-0.5">
        <div className="w-3 h-3 bg-primary rounded-sm" />
        <div className="w-3 h-3 bg-primary rounded-sm" />
        <div className="w-3 h-3 bg-primary rounded-sm" />
        <div className="w-3 h-3 bg-primary/30 rounded-sm" />
      </div>
      <span className="text-xl font-bold text-foreground">
        Cardápio <span className="text-primary">Pro</span>
      </span>
    </div>
  )
}
