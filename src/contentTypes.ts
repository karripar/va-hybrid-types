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


type ContactMessage = {
    name: string;
    email: string;
    subject: string;
    message: string; 
}

export type {
    PartnerSchool,
    DestinationResponse,
    PartnerSchoolWithCoordinates,
    DestinationWithCoordinatesResponse,
    ContactMessage
};