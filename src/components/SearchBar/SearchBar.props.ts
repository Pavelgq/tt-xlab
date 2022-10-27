import { ChangeEvent } from "react";


export interface SearchBarProps {
  className?: string;
  searchValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch :() => void;
}