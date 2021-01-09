type Options = {
  method: string;
  body?: string;
  data?: Object;
};

const baseURL = "http://localhost:8000/api";

const request = async (endpoint: string, options: Options) => {
  const { method, body } = options;

  return await fetch(`${baseURL}${endpoint}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body,
  });
};

export default request;
