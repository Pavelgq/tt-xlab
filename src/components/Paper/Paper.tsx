import cn from "classnames";

import styles from "./Paper.module.scss";
import { PaperProps } from "./Paper.props";

export const Paper = ({ className, children, ...props }: PaperProps) => {
  return (
    <div className={cn(styles.paper, className)} {...props}>
      {children}
    </div>
  );
};
