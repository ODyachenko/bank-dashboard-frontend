import { FC } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/Forms/RegisterForm';

const Register: FC = () => {
  return (
    <section className="min-h-screen bg-primary-bg py-6">
      <div className="container">
        <h1 className="title text-center mb-3">Sign Up</h1>
        <RegisterForm />
        <Link className="block text-center text-primary-blue" to={'/login'}>
          Don't have an account?
        </Link>
      </div>
    </section>
  );
};

export default Register;
