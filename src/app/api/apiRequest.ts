type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchOptions<T> {
    method: HttpMethod;
    body?: T;
    headers?: Record<string, string>;
    token?: string;
}

const apiRequest = async <T, R>(
    url: string,
    { method, body, headers = {}, token }: FetchOptions<T>
): Promise<R> => {
    const defaultHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
        ...headers,
    };

    if (token) {
        defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
        method,
        headers: defaultHeaders,
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'API request failed');
    }

    return (await response.json()) as Promise<R>;
};

export default apiRequest;
