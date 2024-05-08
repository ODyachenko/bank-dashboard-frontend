import { FC } from 'react';
import LoginForm from '../components/Forms/LoginForm';

const Login: FC = () => {
  return (
    <section className="min-h-screen bg-primary-bg py-6">
      <div className="container">
        <h1 className="title text-center mb-3">Sign In</h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
