export interface Todo {
  id: string;
  order?: number;
  content?: string;
  description?: string;
  projectId?: string;
  isCompleted?: boolean;
  labels?: string[];
  priority?: number;
  commentCount?: number;
  createdAt?: string;
  url?: string;
  creatorId?: string;
}
