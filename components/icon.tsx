import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: IconName;
}

const Icon = ({ name, ...props }: IconProps) => {
  return <DynamicIcon name={name} {...props} />;
};

export default Icon;
