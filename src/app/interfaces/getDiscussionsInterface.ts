export interface GetDiscussionsInterface {
    [key: string]: Info;
    
}

interface Info{
    content: string;
  title: string;
  user: string;
}