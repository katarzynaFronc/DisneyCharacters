import { createStyles } from "@mui/styles";

export const textFieldStyles = createStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "var(--color-primary-light)",
        color: "var(--color-primary-light)",
      },
      "&:hover fieldset": {
        borderColor: "var(--color-primary-light)",
        color: "var(--color-primary-light)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--color-primary-light)",
        color: "var(--color-primary-light)",
      },
    },
    "& label": {
      color: "var(--color-primary-light)",
    },
    "& label.Mui-focused": {
      color: "var(--color-primary-light)",
    },
  },
});
