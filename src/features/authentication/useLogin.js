import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi, getCurrentUser } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: async () => {
      // Wait for Supabase to refresh its session and return current user
      const user = await getCurrentUser();

      if (user) {
        queryClient.setQueryData(["user"], user);
        navigate("/dashboard", { replace: true });
      } else {
        toast.error("Could not fetch user session. Please try again.");
      }
    },

    onError: () => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
