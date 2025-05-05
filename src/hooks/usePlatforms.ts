import useData from "./useData";

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

export const usePlatforms = () => {
    return useData<Platform>("/platforms/lists/parents");
};
export default usePlatforms;
