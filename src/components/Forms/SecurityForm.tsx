import { FC } from 'react';
import InputField from '../../UI/InputField/InputField';
import Btn from '../../UI/Btn/Btn';
import SwitchBtn from '../../UI/SwitchBtn/SwitchBtn';

const SecurityForm: FC = () => {
  return (
    <form>
      <fieldset className="mb-5">
        <h2 className="block text-base font-medium mb-4">
          Two-factor Authentication
        </h2>
        <SwitchBtn label="Enable or disable two factor authentication" />
      </fieldset>
      <fieldset className="mb-4">
        <h2 className="block text-base font-medium mb-4">Change Password</h2>
        <InputField
          type="password"
          label="Current Password"
          placeholder="password"
          className="mb-4"
        />
        <InputField
          type="password"
          label="New Password"
          placeholder="password"
        />
      </fieldset>
      <Btn className="ml-auto" value="Save" />
    </form>
  );
};

export default SecurityForm;
