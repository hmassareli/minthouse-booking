export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "bg-white rounded-lg h-full w-auto xl:h-[750px] max-w-[1680px] flex " +
        className
      }
    >
      {children}
    </div>
  );
}
