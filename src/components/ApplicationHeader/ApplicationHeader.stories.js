import React from 'react';
import { storiesOf } from '@storybook/react';
import ApplicationHeader from './ApplicationHeader';
import Link from '../Link/Link';

storiesOf('ApplicationHeader', module).add('standard', () => (
  <div style={{ backgroundColor: 'gray', width: '100%', height: '100%', padding: '8px 8px 0 8px' }}>
    <ApplicationHeader appName="Conciliación">
      <div>
        <strong>Administrador</strong>
      </div>
      <Link href="#">Volver a IncreaseCard</Link>
    </ApplicationHeader>
  </div>
));
