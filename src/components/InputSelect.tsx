"use client";
import { FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const IconComponent = () => {
  return (
    <svg
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root cursor-pointer -rotate-90 w-8 h-8 "
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="ArrowLeftIcon"
    >
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
    </svg>
  );
};

export default function InputSelect({
  value,
  onChange,
  children,
}: Readonly<{
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  children: React.ReactNode;
}>) {
  return (
    <FormControl fullWidth>
      <Select
        variant="outlined"
        value={value}
        className="select-input w-full rounded-lg h-[46px] pl-1 pr-4 !text-lg"
        IconComponent={IconComponent}
        onChange={onChange}
      >
        {children}
      </Select>
    </FormControl>
  );
}
