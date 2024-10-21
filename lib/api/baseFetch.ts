const baseFetch = async (URL: string = '', options?: RequestInit) => {
  const response = await fetch(URL, { ...options });

  return await response.json();
};

export default baseFetch;
