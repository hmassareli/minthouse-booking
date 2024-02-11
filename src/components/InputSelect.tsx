import { FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const IconComponent = () => {
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      className="css-8mmkcg mr-4 cursor-pointer"
    >
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
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
        className="select-input w-full rounded-lg h-11"
        IconComponent={IconComponent}
        onChange={onChange}
      >
        {children}
      </Select>
    </FormControl>
  );
}
