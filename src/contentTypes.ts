type PartnerSchool = {
    country: string;
    title: string;
    link: string;
}

type PartnerSchoolWithCoordinates = PartnerSchool & {
    latitude: number;
    longitude: number;
}

type DestinationResponse = {
    destinations: {
        [program: string]: PartnerSchool[];
    }
}

type DestinationWithCoordinatesResponse = {
    destinations: {
        [program: string]: PartnerSchoolWithCoordinates[];
    }
}

export type {
    PartnerSchool,
    DestinationResponse,
    PartnerSchoolWithCoordinates,
};