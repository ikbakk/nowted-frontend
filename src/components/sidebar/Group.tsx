import { Divider } from "@nextui-org/divider";

type GroupProps = {
  title: string;
  children: React.ReactNode;
};

const Group = ({ title, children }: GroupProps) => {
  return (
    <section>
      <h4 className="px-2 text-white/40">{title}</h4>
      <Divider className="my-2 ml-2 w-3/4" />
      {children}
    </section>
  );
};

export default Group;
