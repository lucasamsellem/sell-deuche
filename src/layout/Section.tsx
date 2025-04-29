function Section({
  children,
  sectionId,
  sectionTitle,
}: {
  children: React.ReactNode
  sectionId: string
  sectionTitle: string
}) {
  return (
    <section id={sectionId} className="my-30 scroll-mt-[8rem]">
      <h2 className="lg:text-4xl text-2xl pb-4 mb-12 border-b border-black/20 text-center font-bold">
        {sectionTitle}
      </h2>
      {children}
    </section>
  )
}

export default Section
