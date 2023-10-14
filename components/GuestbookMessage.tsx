import { Guestbook } from "@prisma/client";

interface GuestbookMessageProps {
  message: Guestbook;
}
const GuestbookMessage = ({ message }: GuestbookMessageProps) => {
  return (
    <div className="flex items-center text-sm gap-2 max-w-md">
      <p className="text-white/60">{message.name}:</p>
      <p>{message.message}</p>
    </div>
  );
};

export default GuestbookMessage;
