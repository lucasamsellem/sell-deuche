function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className='mb-12'>
      <h3 className='lg:text-2xl text-xl font-semibold underline underline-offset-4 mb-5'>
        {title}
      </h3>
      <div>{children}</div>
    </section>
  );
}

export default Subsection;
