import { useSelector } from "react-redux";
import { userData } from "../../store/app";

export default function Message({ message, id }) {
  const {id:currentUserID} = useSelector(userData);

  return (
    <div
      className={
        currentUserID == id
          ? "chat__message"
          : "chat__message chat__message-own"
      }
    >
      <div className="date"></div>
      <div>{message}</div>
    </div>
  );
}
