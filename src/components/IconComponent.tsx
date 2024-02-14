export const IconComponent = ({
  className,
  onClick,
}: {
  className: string;
  onClick?: () => void;
}) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      className={
        "MuiSvgIcon-root MuiSvgIcon-fontSizeInherit text-[#4e4e4e] cursor-pointer w-4 h-4 " +
        className
      }
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M11.59 3L7 7.58L2.41 3L1 4.41L7 10.41L13 4.41L11.59 3Z"
        fill="currentColor"
      />
    </svg>
  );
};
