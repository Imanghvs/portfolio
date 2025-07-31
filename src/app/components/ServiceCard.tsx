interface Props {
  title: string
  description: string
}

const ServiceCard = ({ title, description }: Props) => {
  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export default ServiceCard
