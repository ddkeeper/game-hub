import genres from "@/data/genres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export const useGenres = () => ({
    data: genres,
    isLoading: false,
    error: null,
});
export default useGenres;
