interface Post {
  title: string;
  body: string;
  userId: number;
}

interface PostResponse extends Post {
  id: number;
}

export type { Post, PostResponse };
