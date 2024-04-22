import React, { FC } from 'react';
import Layout from '../components/Layout/Layout';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import Tabs from '../UI/Tabs/Tabs';
import { TabsType } from '../../@types';
import ProfileForm from '../components/Forms/ProfileForm';
import PreferencesForm from '../components/Forms/PreferencesForm';
import SecurityForm from '../components/Forms/SecurityForm';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setActiveTab } from '../redux/slices/settingsSlice';

const settingsTabsList: TabsType = ['Edit Profile', 'Preferences', 'Security'];

const renderStatement: React.ReactElement[] = [
  <ProfileForm />,
  <PreferencesForm />,
  <SecurityForm />,
];

const Settings: FC = () => {
  const { activeTab } = useAppSelector((state) => state.settings);
  const disaptch = useAppDispatch();

  const onChangeHandler = (index: number) => {
    disaptch(setActiveTab(index));
  };

  return (
    <Layout>
      <PageWrapper title="Settings">
        <div className={'bg-white rounded-2xl p-4 lg:py-6 lg:px-6'}>
          <Tabs
            activeTab={activeTab}
            onChangeHandler={onChangeHandler}
            tabsNameArray={settingsTabsList}
            className="mb-6 lg:mb-10"
          />
          {renderStatement[activeTab]}
        </div>
      </PageWrapper>
    </Layout>
  );
};

export default Settings;
