'use client';

import InputSlid from '@/components/common/InputSlid';
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState<string>('');
  return (
    <div>
      <main>
        {value}
        <InputSlid
          type="text"
          label="Name"
          placeholder="플레이스홀더임"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </main>
    </div>
  );
}
