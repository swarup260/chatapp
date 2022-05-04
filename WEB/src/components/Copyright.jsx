import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography:{
    fontSize: 15,
    fontWeightRegular: "bold"
  }
});

export default function Copyright(props) {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="sm">
      <Typography
        className="left-0 right-0 bottom-0 absolute bg-slate-200 p-1"
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
          {`CHAT APP ${new Date().getFullYear()}`}
          {"."}
      </Typography>
    </Container>
    </ThemeProvider>
  );
}
