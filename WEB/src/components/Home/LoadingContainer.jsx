import Container from "@mui/material/Container";
import { CircularProgress } from "@mui/material";
export default function LoadingContainer() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <Container maxWidth="m">
      <CircularProgress sx={style} />
    </Container>
  );
}
