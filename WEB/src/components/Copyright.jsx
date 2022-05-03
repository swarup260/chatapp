import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Copyright(props) {
  return (
    <Container maxWidth="sm">
      <Typography
        className="left-0 right-0 bottom-0 absolute bg-slate-200"
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        <p className="m-5 font-medium uppercase leading-4">
          {`CHAT APP ${new Date().getFullYear()}`}
          {"."}
        </p>
      </Typography>
    </Container>
  );
}
