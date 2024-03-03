'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { UserPersistor, UserStore } from '@/lib/store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {


  return (
    <Provider store={UserStore}>
      <PersistGate loading={null} persistor={UserPersistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
