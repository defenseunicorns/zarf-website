import { FormQuery } from './types';
import { stringify } from 'query-string';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdFX8mXtP7IRuy78xR6nKdGMctP6TaGF6iUjLa66JYQgoH4zA/formResponse?';

export function clearQuery(): FormQuery {
  return {
    name: '',
    email: '',
    organization: '',
  };
}

export function createQueryString(query: FormQuery): string {
  return stringify({
    // G-form name field id
    'entry.1820878755': query.name,
    // G-form email field id
    'entry.1794613224': query.email,
    // G-form organization field id
    'entry.1448025861': query.organization,
  });
}

export async function postEnterpriseSupportForm(
  formQuery: FormQuery,
  successHandler?: () => void,
  errorHandler?: () => void,
): Promise<void> {
  try {
    await fetch(FORM_URL + createQueryString(formQuery), {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    successHandler && successHandler();
  } catch {
    errorHandler && errorHandler();
  }
}
