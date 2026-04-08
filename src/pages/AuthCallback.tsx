import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error(error);
        navigate("/auth");
        return;
      }

      if (data.session) {
        navigate("/");
      } else {
        navigate("/auth");
      }
    };

    getSession();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      Logging you in...
    </div>
  );
};

export default AuthCallback;