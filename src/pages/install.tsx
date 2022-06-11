import React, { ReactElement } from 'react';
import PageLayout from '../components/PageLayout';
import InstallZarf from '../components/Sections/InstallZarf/InstallZarf';

function QuickStart(): ReactElement {
  return (
    <PageLayout>
      <InstallZarf />
    </PageLayout>
  );
}

export default QuickStart;
