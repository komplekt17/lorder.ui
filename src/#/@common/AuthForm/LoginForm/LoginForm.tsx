import React, { useEffect } from 'react';

import { Field, InjectedFormProps } from 'redux-form';
import { email } from 'redux-form-validators';

import Button from '@material-ui/core/Button';
import PassIco from '@material-ui/icons/Lock';
import UserIco from '@material-ui/icons/PermIdentity';

import InputField from '@components/InputField';

import ReCaptchaField from '../ReCaptchaField';
import { useStyles } from './styles';

export interface ILoginFormProps {
  autoFocus?: boolean;
  buttonText?: string;
  isLogin: boolean;
}

const LoginForm: React.FC<ILoginFormProps & InjectedFormProps<{}, ILoginFormProps>> = ({
  autoFocus,
  handleSubmit,
  invalid,
  isLogin,
  pristine,
  submitting,
}) => {
  const classes = useStyles();
  useEffect(() => {
    setTimeout(async () => {
      if ('navigator' in window && 'credentials' in navigator) {
        // const credentials = await (navigator as any).credentials.get({ password: true } as any);
        // console.log('credentials', { credentials });
      }
    }, 0);
  }, []);

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Field name="reCaptcha" component={ReCaptchaField} isLogin={isLogin} isMagic={false} />
        <Field
          autoComplete="username"
          autoFocus={autoFocus}
          component={InputField}
          icon={<UserIco />}
          name="email"
          placeholder="Введите email..."
          type="email"
          validate={[email({ msg: 'Введите валидный email-адрес' })]}
        />
        <Field
          autoComplete="current-password"
          component={InputField}
          icon={<PassIco />}
          name="password"
          placeholder="Введите пароль..."
          type="password"
        />
        <Button
          color="secondary"
          disabled={submitting || (!pristine && invalid)}
          fullWidth
          type="submit"
          variant="outlined"
        >
          <span>{isLogin ? 'Войти' : 'Зарегистрироваться'}</span>
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
