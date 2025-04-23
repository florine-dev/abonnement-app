import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";

type SignupFormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
};

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const { signup, isSigningUp } = useAuth();

  const navigate = useNavigate();

  const onSubmit = (data: SignupFormInputs) => {
    console.log("Signup data:", data);
    signup({
      address: data.address,
      name: data.name,
      phone: data.phone,
      password: data.password,
      email: data.email,
    })
      .then(() => {
        toast.success("account created");
        navigate("/confirm-plan");
      })
      .catch(() => {
        toast.error("something went wrong");
      });
  };

  useEffect(() => {
    // navigate("/acceuil");
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Abonnement
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Create an account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="w-full p-2 border rounded"
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>

              <div>
                <label>Your Phone</label>
                <input
                  {...register("phone", {
                    required: "Numéro requis",
                  })}
                  type="text"
                  className="w-full p-2 border rounded"
                />
                {errors.phone && <p>{errors.phone.message}</p>}
              </div>

              <div>
                <label>Your Address</label>
                <input
                  {...register("address", {
                    required: "Adresse requise",
                    minLength: {
                      value: 5,
                      message: "Adresse trop courte",
                    },
                  })}
                  type="text"
                  className="w-full p-2 border rounded"
                />
                {errors.address && <p>{errors.address.message}</p>}
              </div>

              <div>
                <label>Your Email</label>
                <input
                  {...register("email", {
                    required: "Email requis",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Email invalide",
                    },
                  })}
                  type="email"
                  className="w-full p-2 border rounded"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div>
                <label>Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Mot de passe requis",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 caractères",
                    },
                  })}
                  className="w-full p-2 border rounded"
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>

              <div>
                <label>Confirm password</label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirmation requise",
                    validate: (value) =>
                      value === watch("password") ||
                      "Les mots de passe ne correspondent pas",
                  })}
                  className="w-full p-2 border rounded"
                />
                {errors.confirmPassword && (
                  <p>{errors.confirmPassword.message}</p>
                )}
              </div>

              <div className="flex items-start mt-4">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    required
                    className="w-4 h-4 border rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-500">
                    I accept the{" "}
                    <a href="#" className="text-blue-600 underline">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                {isSigningUp ? "loading" : "Create an account"}
              </button>

              <p className="text-sm text-gray-500 mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Signup;
