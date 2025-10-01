type PartnerSchool = {
    country: string;
    title: string;
    link: string;
}

type PartnerSchoolWithCoordinates = PartnerSchool & {
    coordinates: {
        lat: number;
        lng: number;
    }
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
type ProfileResponse = {
    id: string;
    userName: string;
    email: string;
    registeredAt: string;
    favorites: string[];
    documents: string[];
};

export type {
    PartnerSchool,
    DestinationResponse,
    PartnerSchoolWithCoordinates,
    DestinationWithCoordinatesResponse,
    ProfileResponse
};