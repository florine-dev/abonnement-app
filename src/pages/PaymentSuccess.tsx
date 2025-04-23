import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useGetPaymentStatus } from "../api/payment";
import { useEffect } from "react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();

  // const { data: status, isLoading } = useGetPaymentStatus(
  //   searchParams.get("session_id")!
  // );

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
    // if (!isLoading && status?.paid) {
    // }
  }, []);

  return navigate;
};

export default PaymentSuccess;
