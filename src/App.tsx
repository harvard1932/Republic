import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/redirect');
  }, [navigate]);

  return (
    <div className="w-full h-full">
    </div>
  );
}

export default App;
