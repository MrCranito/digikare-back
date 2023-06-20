export declare class CreateEventDto {
    id: string;
    user: {
        id: string;
    };
    consents: [{
        id: string;
        enabled: boolean;
    }];
}
