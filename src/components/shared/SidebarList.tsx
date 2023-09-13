type SidebarListProps = {
  icon: React.ReactNode;
  title: string;
};

const SidebarList = ({ icon, title }: SidebarListProps) => {
  return (
    <li>
      <figure>{icon}</figure>
      <p>{title}</p>
    </li>
  );
};

export default SidebarList;
