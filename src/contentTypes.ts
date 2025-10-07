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
    documents: Document[]; 
    exchangeBadge?: boolean;
    avatarUrl?: string;
    linkedinUrl?: string;
}
type Document = {
  id: string;
  name: string;
  url: string;
  uploadedAt: string;
}

export type {
    PartnerSchool,
    DestinationResponse,
    PartnerSchoolWithCoordinates,
    DestinationWithCoordinatesResponse,
    ProfileResponse,
    Document
};