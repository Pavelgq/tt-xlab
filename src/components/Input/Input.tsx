import cn from "classnames";
import styles from "./Input.module.scss";
import { InputProps } from "./Input.props";

export const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input type="text" className={cn(styles.input, className)} {...props} />
  );
};
