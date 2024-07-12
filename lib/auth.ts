
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data from an API
    const fetchUser = async () => {
      // Replace this with your actual authentication logic
      const userData = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'John Doe' }), 1000)
      );
      setUser(userData);
      setLoading(false);
    };

    fetchUser();
  }, []);

  return { user, loading };
};
