import { PageInfo } from "@/typings";

export const fetchPageInfo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    if (!res.ok) {
        throw new Error(`Server responded with status: ${res.status}`);
    }

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}