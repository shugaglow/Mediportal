// FeaturesCard.jsx
export default function FeaturesCard({ title, description, image }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
      <img src={image} alt={title} className="w-full rounded-md mb-4 object-contain" />
     <div className="text-left">
         <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
         <p className="text-gray-600">{description}</p>
     </div>
    </div>
  );
}
