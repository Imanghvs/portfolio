import { CodeIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface Props {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: Props) => {
  return (
    <Card>
      <CardContent className="p-6 space-y-4 text-center">
        <CodeIcon className="mx-auto h-8 w-8 text-primary" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
