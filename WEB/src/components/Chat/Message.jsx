export default function Message({ message, userID }) {
  const currentUserID = 1;

  return (
    <div
      className={
        currentUserID == userID
          ? "chat__message"
          : "chat__message chat__message-own"
      }
    >
      <div className="date"></div>
      <div>{message}</div>
    </div>
  );
}
