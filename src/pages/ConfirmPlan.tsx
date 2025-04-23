import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import {
  InitPaymentProps,
  useGetSubscriptionPlans,
  useInitPayment,
} from "../api/plan";
import { useState } from "react";
import { useSelectedPlan } from "../hooks/useSelectedPlan";
import { Link, Navigate } from "react-router-dom";

const ConfirmPlan = () => {
  const [defaultPlan] = useSelectedPlan();

  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState<number | undefined>(defaultPlan?.id);

  const { data: plans, isLoading } = useGetSubscriptionPlans();
  const { mutateAsync: initPayment, isPending: isInitialisingPayment } =
    useInitPayment();

  const handleCheckout = async () => {
    const selectedPlan = plans?.find((plan) => plan.id === value);

    if (selectedPlan) {
      initPayment(selectedPlan.id).then((result) => {
        window.location.href = result.url;
        console.log(result);
      });
    }
  };

  const handleChange = (e: SelectChangeEvent<number>) => {
    setValue(e.target.value as number);
  };
  if (isLoading) return <CircularProgress />;

  return (
    <div className="max-w-4xl m-auto mt-5 flex flex-col">
      <div className="flex-1">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Choosed Plan</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="cHOOSED pLAN"
            onChange={handleChange}
          >
            {plans?.map((plan) => (
              <MenuItem value={plan.id}>
                {plan.name} - {plan.price} EUR
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <button
        aria-label={`Subscribe to plan`}
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition mb-5 mt-10"
        onClick={handleCheckout}
      >
        {isInitialisingPayment ? (
          <CircularProgress />
        ) : (
          <Link to="#">Proceed to checkout</Link>
        )}
      </button>
    </div>
  );
};

export default ConfirmPlan;
