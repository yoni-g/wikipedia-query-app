import React, { useState, useEffect } from 'react';

interface ApiResponse {
  message?: string;
  status?: string;
  timestamp?: number;
}

const ApiTest = () => {

  const [helloData, setHelloData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHello = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/hello');
      const data = await response.json();
      setHelloData(data);
    } catch (err) {
      setError('Failed to fetch hello endpoint');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>API Test Component</h2>
      
      <div>
        <div>
          <button
            onClick={fetchHello}
            disabled={loading}
          >
            Test /api/hello
          </button>
          {helloData && (
            <div>
              Message: {helloData.message}
            </div>
          )}
        </div>

        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default ApiTest