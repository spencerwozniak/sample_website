import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useRouteRefresh = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};

export default useRouteRefresh;
