function ArrowBackIcon({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="28"
      fill="none"
      viewBox="0 0 32 28"
      className={className}
      onClick={onClick}
    >
      <path
        fill="#D7E164"
        d="M30 12.002H6.28l7.26-8.72a2.002 2.002 0 10-3.08-2.56l-10 12a2.382 2.382 0 00-.18.3c0 .1 0 .16-.14.26a2 2 0 00-.14.72 2 2 0 00.14.72c0 .1 0 .16.14.26.053.105.113.205.18.3l10 12a2 2 0 001.54.72 2 2 0 001.54-3.28l-7.26-8.72H30a2 2 0 000-4z"
      ></path>
    </svg>
  );
}

export default ArrowBackIcon;
