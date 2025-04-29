function ScrollableListWrapper({ children }: { children: React.ReactNode }) {
  return <ul className="flex gap-x-10 overflow-x-scroll">{children}</ul>
}

export default ScrollableListWrapper
