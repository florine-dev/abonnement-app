import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../api/useUser";
import { UpdateUserProps, useUpdateUser } from "../api/useUpdateUser";
import { toast } from "react-toastify";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  password?: string;
  address?: string; // Add address field
}

function Setting() {
  const { data: user, isLoading } = useUser();
  const { register, handleSubmit, reset } = useForm<UpdateUserProps>();
  const updateMutation = useUpdateUser();

  console.log(user);

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: "",
        address: user.address || "", // Reset the address field as well
      });
    }
  }, [user, reset]);

  const onSubmit = (data: UpdateUserProps) => {
    updateMutation
      .mutateAsync({ userProps: data, id: user?.id || -1 })
      .then(() => {
        toast.success("Mise a jour avec success");
      });
  };

  if (isLoading) return <p>Chargement...</p>;
  if (!user) return <p>Utilisateur introuvable</p>;

  return (
    <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Mise à jour du profil utilisateur
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nom complet
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Adresse e-mail
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Numéro de téléphone
          </label>
          <input
            type="text"
            {...register("phone")}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Adresse
          </label>
          <input
            type="text"
            {...register("address")}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nouveau mot de passe (facultatif)
          </label>
          <input
            type="password"
            {...register("password")}
            placeholder="********"
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-200"
          >
            Sauvegarder les modifications
          </button>
        </div>
      </form>
    </div>
  );
}

export default Setting;
