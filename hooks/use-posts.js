import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(res => res.json());

export const usePosts = (id) => {
    const { data, error, isLoading } = useSWR(`/api/posts`, fetcher)

    return {
        data: data,
        isLoading,
        isError: error
    };
}