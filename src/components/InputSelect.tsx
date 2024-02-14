"use client";
import { FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IconComponent } from "./IconComponent";

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
        sx={{
          "& svg": {
            top: "calc(50% - 7px)",
            right: "22px",
            cursor: "pointer",
            color: "#4e4e4e",
          },
        }}
        className="select-input w-full rounded-lg h-[46px] pl-1 !text-lg"
        IconComponent={IconComponent}
        onChange={onChange}
      >
        {children}
      </Select>
    </FormControl>
  );
}
