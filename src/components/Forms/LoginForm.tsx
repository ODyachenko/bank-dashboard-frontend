import { FC } from 'react';
import Btn from '../../UI/Btn/Btn';
import InputField from '../../UI/InputField/InputField';

const LoginForm: FC = () => {
  return (
    <form className="max-w-[400px] flex flex-col gap-4 bg-white rounded-xl mx-auto p-6 mb-2">
      <InputField type="email" label="Email" placeholder="email" />
      <InputField type="password" label="Password" placeholder="password" />
      <Btn value="Sign In" />
    </form>
  );
};

export default LoginForm;
