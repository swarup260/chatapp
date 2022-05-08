import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

export default function SubmitButton(props) {
  const { isLoading, title, muiProps } = props;
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      {...muiProps}
    >
      {!isLoading ? title : <CircularProgress color="secondary" />}
    </Button>
  );
}
