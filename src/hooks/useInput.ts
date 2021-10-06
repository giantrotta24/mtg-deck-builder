import React, { useState } from 'react';

type InitialValue = '';

export const useInput = (initialValue: InitialValue) => {
  const [value, setValue] = useState<InitialValue>(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value as InitialValue);
      },
    },
  };
};
