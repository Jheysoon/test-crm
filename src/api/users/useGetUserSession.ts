import { useQuery } from "@tanstack/react-query";

import { supabase } from "@/api/client";
import { UserTags } from "@/api/users/tags";

const useGetUserSession = () => {
  return useQuery({
    queryKey: [UserTags.UserSession],
    queryFn: async () => {
      const { data } = await supabase.auth.getSession();

      return data?.session || null;
    },
  });
};

export default useGetUserSession;
