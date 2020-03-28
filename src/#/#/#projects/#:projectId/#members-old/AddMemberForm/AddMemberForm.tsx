import React from 'react';

import Button from '@material-ui/core/Button';

import { UserIco } from '@components/@icons/User';
import { TextField } from '@components/TextField';

import { Field, InjectedFormProps } from 'redux-form';
import { email, required } from 'redux-form-validators';

export interface IAddMemberFormProps {
  buttonText?: string;
}

export class AddMemberFormJsx extends React.Component<
  IAddMemberFormProps & InjectedFormProps<{}, IAddMemberFormProps>,
  object
> {
  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          component={TextField}
          type="email"
          icon={<UserIco />}
          validate={[required({ msg: 'Обязательное поле' }), email({ msg: 'Неверный e-mail' })]}
        />
        <Button
          type="submit"
          disabled={pristine || submitting || invalid}
          color="primary"
          variant="contained"
          fullWidth
        >
          <span>Пригласить</span>
        </Button>
      </form>
    );
  }
}
