export interface GetNewsInterface {
    [key: string]: Info;
}

interface Info{
    description:string,
    title:string,
    user:string
}
