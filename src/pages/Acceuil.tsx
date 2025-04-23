import { useGetSubscriptionPlans } from "../api/plan";
import herderAbonnement from "../assets/images/herderAbonnement.png";
import SubscriptionPlan from "../components/SubcriptionPlan";

function Acceuil() {
  const { data: plans, isLoading } = useGetSubscriptionPlans();

  if (isLoading) return <span>Loading...</span>;
  return (
    <div>
      {/* Hero section avec image de fond et overlay */}
      <div className="relative h-64">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: `url(${herderAbonnement})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0  bg-opacity-10" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-black">Abonnement</h1>
        </div>
      </div>

      {/* Section Plans */}
      <div className="flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Choisissez votre plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {plans?.map((plan) => (
            <SubscriptionPlan
              title={plan.name}
              amount={plan.price}
              features={plan.features}
              id={plan.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Acceuil;
