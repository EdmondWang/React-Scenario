export interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}

export interface PostState {
  post: Post;
  error: string | null;
}