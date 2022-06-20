import { Button, styled } from "@mui/material";

export const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 20,
  padding: "10px 45px",
  borderRadius: "25px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#40a9ff",
  borderColor: "#40a9ff",
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
