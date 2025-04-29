function SubsectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="lg:text-2xl text-xl font-semibold underline underline-offset-4 mb-5">
      {children}
    </h3>
  )
}

export default SubsectionTitle
