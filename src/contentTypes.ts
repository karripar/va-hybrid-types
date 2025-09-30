type PartnerSchool = {
    country: string;
    title: string;
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