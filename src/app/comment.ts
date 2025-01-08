import { Comment } from 'App/Models/Comment';
export interface Comment {
    id?: string;
    text: string;
    username: string;
    momentId: number;
    created_at?: string;
    updated_at?: string;


 } 