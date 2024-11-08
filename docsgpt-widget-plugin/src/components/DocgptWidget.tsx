import React from 'react';
import { DocsGPTWidget } from 'docsgpt';

export function DocgptWidget() {
  return (
    <DocsGPTWidget
      deafultOpen={true}
      size={{
        custom: {
          width: '100vw',
          height: '100vh',
          maxWidth: '80vw',
          maxHeight: '90vh',
        },
      }}
    />
  );
}
