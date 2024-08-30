import React, { useEffect } from 'react';

interface CommunicateProps {
  answer: string;
  setResponse: (response: string, audioUrls?: string[]) => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
}

const Communicate: React.FC<CommunicateProps> = ({ answer, setResponse, setIsSubmitting }) => {
  useEffect(() => {
    if (answer.trim() !== '') {
      setIsSubmitting(true);

      fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer })
      })
        .then(res => res.json())
        .then(data => {
          setResponse(data.message, data.audioUrls);
          setIsSubmitting(false);
        })
        .catch(() => {
          setResponse('An error occurred while submitting the form.', []);
          setIsSubmitting(false);
        });
    } else {
      setIsSubmitting(false);
    }
  }, [answer ]);

  return null;
};

export default Communicate;
