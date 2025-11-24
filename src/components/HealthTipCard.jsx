export default function HealthTipCard({ title, description, icon }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start">
      <div>{icon}</div>

      <div>
        <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}
