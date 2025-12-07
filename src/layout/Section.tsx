function Section({
  id,
  title,
  children,
}: {
  children: React.ReactNode;
  id: string;
  title: string;
}) {
  return (
    <section id={id} className='my-30 scroll-mt-[8rem]'>
      <h2 className='lg:text-4xl text-2xl pb-4 mb-12 border-b border-black/20 text-center font-bold'>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Section;
