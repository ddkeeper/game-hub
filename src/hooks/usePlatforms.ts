import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export const usePlatforms = () => {
    return useData<Platform>("/platforms/lists/parents");
};
export default usePlatforms;
