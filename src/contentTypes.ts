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

type Document = {
  id: string;
  name: string;
  url: string;
  uploadedAt: string;
};
type ApplicationsResponse = {
    [key: string]: any;  
}
type ApplicationDocument = {
    id: string;
    name: string;
    url: string;
    uploadedAt: string;
};

type ProfileResponse = {
    id: string;
    userName: string;
    email: string;
    registeredAt: string;
    favorites: string[];
    documents: Document[]; 
    exchangeBadge?: boolean;
    avatarUrl?: string;
    applications?: string[];
};


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
    ContactMessage,
    ProfileResponse,
    Document,
    ApplicationsResponse,
    ApplicationDocument
};