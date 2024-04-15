import React, { FC } from 'react';
import PageInner from '../PageInner/PageInner';

type PageWrapperProps = {
  children: React.ReactNode;
  title: string;
};

const PageWrapper: FC<PageWrapperProps> = ({ children, title }) => {
  return (
    <section className="w-full bg-primary-bg pb-6">
      <PageInner title={title} />
      <div className="container">{children}</div>
    </section>
  );
};

export default PageWrapper;
