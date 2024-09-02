import { useForm } from 'react-hook-form';
import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AutenticatorContext } from '../../contexts/autenticator';


export function LoginPage() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { login } = useContext(AutenticatorContext);
    function onSubmit(data) {
        console.log(data);
        login(data);
        navigate('/home');
    }
    return (
        <form className='container--login' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>Login Page</h1>
                <div>
                    <label>Email:</label>
                    <input
                        type='email'
                        {...register('email', { required: true })}
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type='password'
                        {...register('password', { required: true })}
                    />
                </div>
                <Button type='submit'>Entrar</Button>
            </div>
        </form>
    );
}