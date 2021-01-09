type Options = {
  method: string;
  body?: string;
  data?: Object;
};

const request = async (url: string, options: Options) => {
  const { method, body } = options;

  return await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body,
  });
};

export default request;
