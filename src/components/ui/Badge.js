function Badge({ children }) {
  return (
    <div className='focus:ring-ring inline-flex items-center rounded-full border border-transparent bg-zinc-200/50 px-2.5 py-0.5 text-xs font-semibold text-emerald-500 capitalize shadow-md transition-colors hover:bg-zinc-100/50 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:bg-zinc-700/50 dark:hover:bg-zinc-700'>
      {children}
    </div>
  );
}

export default Badge;
