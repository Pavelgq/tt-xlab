import cn from "classnames";

import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button type="button" className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
