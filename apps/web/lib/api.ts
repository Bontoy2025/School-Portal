export function apiGet<T>(url: string, token?: string): Promise<T> {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000'}${url}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    cache: 'no-store'
  }).then(async (res) => {
    const payload = await res.json();
    if (!res.ok) throw new Error(payload.error ?? 'Request failed');
    return payload.data as T;
  });
}

export function apiPost<T>(url: string, body: unknown, token?: string): Promise<T> {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000'}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(body)
  }).then(async (res) => {
    const payload = await res.json();
    if (!res.ok) throw new Error(payload.error ?? 'Request failed');
    return payload.data as T;
  });
}
