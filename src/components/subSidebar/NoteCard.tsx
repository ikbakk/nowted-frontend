import { Card, CardHeader, CardFooter } from "@nextui-org/card";

type NoteCardProps = {
  title: string;
  date: string;
  content: string;
};

const NoteCard = ({ title, date, content }: NoteCardProps) => {
  const newDate = new Date(date).toLocaleDateString();
  return (
    <Card className="select-none rounded-none hover:cursor-pointer hover:bg-primary">
      <CardHeader>
        <p className="truncate">{title}</p>
      </CardHeader>
      <CardFooter className="flex flex-col items-start">
        <p className="text-sm">{newDate}</p>
        <p className="w-full truncate ">{content}</p>
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
