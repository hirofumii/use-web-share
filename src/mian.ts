import { useState, useEffect } from 'react';
import { shareContent } from './util/share-content';

type Options = {
  onSuccess?: () => void;
  onError?: () => void;
};

function useWebShare({ onSuccess, onError }: Options) {
  const [loading, setLoading] = useState(true);
  const [isSupported, setSupport] = useState(false);

  useEffect(() => {
    if ('share' in navigator) {
      setSupport(true);
    } else {
      setSupport(false);
    }
    setLoading(false);
  }, [onSuccess, onError]);

  return {
    loading,
    isSupported,
    share: shareContent(onSuccess, onError),
  };
}

export default useWebShare;
