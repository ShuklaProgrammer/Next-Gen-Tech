interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-neutral-900 p-6 space-y-4 border border-white/10 rounded-lg">
      <h1 className="text-white font-semibold text-lg">{title}</h1>
      <p className="text-white/50">{description}</p>
    </div>
  );
}
