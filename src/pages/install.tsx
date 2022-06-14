import React, { ReactElement } from 'react';
import PageLayout from '../components/PageLayout';
import InstallZarf from '../components/Sections/InstallZarf/InstallZarf';
import TryItNow from '../components/Sections/InstallZarf/TryItNow';

function QuickStart(): ReactElement {
  return (
    <PageLayout>
      <InstallZarf />
      <TryItNow />
    </PageLayout>
  );
}

export default QuickStart;
