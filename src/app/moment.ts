import { ChangeNumberComponent } from '../../../page-web/src/app/components/change-number/change-number.component';
export interface Moment {
    id?: number;
    title: string;
    description: string;
    image: string;
    created_at?: string;
    updated_at?: string;
    comments?: [{ text: string; username: string }];

}