import { Tooltip } from "@nextui-org/tooltip";

type GroupItemProps = {
  title: string;
  icon: React.ReactNode;
};

const GroupItem = ({ title, icon }: GroupItemProps) => {
  return (
    <Tooltip placement="right" content={title} radius="none" delay={500}>
      <li className="flex w-full grow-0 items-center gap-2 px-2 py-2 hover:bg-primary">
        <figure>{icon}</figure>
        <h4 className="w-full truncate">{title}</h4>
      </li>
    </Tooltip>
  );
};

export default GroupItem;
