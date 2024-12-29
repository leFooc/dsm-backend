import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonsService {
    public hello() {
        return "Hello world";
    };
};
