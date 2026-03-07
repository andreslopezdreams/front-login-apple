'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <button type='button' onClick={router.back}>
      Back
    </button>
  );
};
