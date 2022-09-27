import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

import { EMPTY, Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

export function applyServerErrors<T>(
  form: FormGroup
): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>) =>
    source.pipe(
      catchError((response: HttpErrorResponse) => {
        setServerSideErrors(form, response);

        /* Se tem erro no formulario, entao nao dispara o erro
        para poder exibir outras mensagens na snackbar */
        if (getAnyFormControlWithError(form)) {
          return EMPTY;
        }

        return throwError(() => response);
      })
    );
}

function setServerSideErrors(form: FormGroup, response: HttpErrorResponse) {
  const { error } = response;
  const formErrors = [];

  for (const key of Object.keys(error)) {
    let formControl = form.get(key);

    if (!formControl) {
      return;
    }

    const server = error[key] as string[];

    formControl.enabled
      ? formControl.setErrors({ server })
      : formErrors.push(server);
  }

  if (formErrors.length > 0) {
    form.setErrors({ server: formErrors });
  }
}

function getAnyFormControlWithError(form: FormGroup): boolean {
  let retorno = false;

  Object.keys(form.controls).forEach((key) => {
    if (form.get(key)?.hasError('server')) {
      retorno = true;
      return;
    }
  });

  return retorno;
}
