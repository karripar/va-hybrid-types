type PartnerSchool = {
    country: string;
    name: string;
    link: string;
}

type DestinationResponse = {
    destinations: {
        [program: string]: PartnerSchool[];
    }
}

export type {
    PartnerSchool,
    DestinationResponse
};