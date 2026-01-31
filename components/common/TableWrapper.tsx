interface TableWrapperProps {
  children: React.ReactNode
}

export default function TableWrapper({ children }: TableWrapperProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">{children}</table>
    </div>
  )
}
