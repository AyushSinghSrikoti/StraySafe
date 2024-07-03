import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return user;
};

export default useCurrentUser;
