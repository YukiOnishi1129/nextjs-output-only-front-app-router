import { FC, ComponentProps } from "react";
import { InputForm } from "@/components/atoms";
import styles from "./style.module.css";

type InputFormSectionProps = ComponentProps<"input"> & {
  errorMessage?: string;
};

export const InputFormSection: FC<InputFormSectionProps> = (props) => (
  <>
    <InputForm placeholder={"Title"} {...props} />
    {props?.errorMessage && (
      <p className={styles.error}>{props.errorMessage}</p>
    )}
  </>
);
