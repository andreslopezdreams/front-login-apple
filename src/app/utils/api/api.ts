import { enviroment } from '../contants/enviroment';
import { getLocalStorageVariable } from '../storage/localStorage';

export const apiQuery = async (
  request: string,
  method: string = 'GET',
  headers: any = {},
  body?: any,
  mode: RequestMode | undefined = undefined,
) => {
  headers = {
    'Content-Type': headers['Content-Type']
      ? headers['Content-Type']
      : 'application/json',
    ...headers,
  };
  if (body instanceof FormData) {
    delete headers['Content-Type'];
  }
  const response = await fetch(`${enviroment.APP_BASE_URL}${request}`, {
    method,
    headers,
    mode,
    body,
  });
  const data = await response.json().catch(() => null);
  return {
    status: response.status,
    ok: response.ok,
    data,
  };
};

export const apiQueryTk = async (
  request: string,
  method: string = 'GET',
  headers: any = {},
  body?: any,
  mode: RequestMode | undefined = undefined,
) => {
  const token = getLocalStorageVariable('session_tk')?.value;
  headers = {
    'x-api-key': `${enviroment.APP_BASE_API_KEY}`,
    Authorization: `Bearer ${token}`,
    ...headers,
  };
  return await apiQuery(request, method, headers, body, mode);
};

export const generateBodyFormData = (data: Record<string, any>) => {
  const body = new FormData();
  for (const key in data) {
    body.append(key, data[key]);
  }
  return body;
};

export const apiUploadTk = async (
  request: string,
  formData: FormData,
  method: 'POST' | 'PUT' | 'PATCH' = 'POST',
  mode?: RequestMode,
) => {
  const token = getLocalStorageVariable('session_tk')?.value;

  const response = await fetch(`${enviroment.APP_BASE_URL}${request}`, {
    method,
    mode,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await response.json().catch(() => null);

  return {
    ok: response.ok,
    status: response.status,
    data,
  };
};

export const apiQueryBRC = async (
  request: string,
  method: string = 'GET',
  headers: any = {},
  body?: any,
  mode: RequestMode | undefined = undefined,
) => {
  headers = {
    'Content-Type': headers['Content-Type']
      ? headers['Content-Type']
      : 'application/json',
    ...headers,
  };
  if (body instanceof FormData) {
    delete headers['Content-Type'];
  }
  const response = await fetch(`${enviroment.APP_BRC_URL}${request}`, {
    method,
    headers,
    mode,
    body,
  });
  const data = await response.json().catch(() => null);
  return {
    status: response.status,
    ok: response.ok,
    data,
  };
};

export const apiQueryTkBRC = async (
  request: string,
  method: string = 'GET',
  headers: any = {},
  body?: any,
  mode: RequestMode | undefined = undefined,
) => {
  const token = getLocalStorageVariable('session_tk')?.value;
  headers = {
    'x-api-key': `${enviroment.APP_BRC_API_KEY}`,
    Authorization: `Bearer ${token}`,
    ...headers,
  };
  return await apiQueryBRC(request, method, headers, body, mode);
};
