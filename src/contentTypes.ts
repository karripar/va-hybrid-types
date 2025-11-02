type PartnerSchool = {
  country: string;
  title: string;
  link: string;
};

type PartnerSchoolWithCoordinates = PartnerSchool & {
  coordinates: {
    lat: number;
    lng: number;
  };
};

type DestinationResponse = {
  destinations: {
    [program: string]: PartnerSchool[];
  };
};

type DestinationWithCoordinatesResponse = {
  destinations: {
    [program: string]: PartnerSchoolWithCoordinates[];
  };
};

type Document = {
  id: string;
  name: string;
  url: string;
  uploadedAt: string;
};

type ApplicationStatus =
  | "not_started"
  | "in_progress"
  | "completed" 
  | "pending_review"
  | "approved"
  | "rejected";

type ExtendedApplicationStatus = ApplicationStatus | "draft" | "submitted";

type ApplicationPhase =
  | "esihaku"
  | "nomination"
  | "apurahat"
  | "vaihdon_jalkeen";

type DocumentStatus =
  | "uploaded"
  | "processing"
  | "approved"
  | "rejected"
  | "needs_revision";

type ApplicationPhaseData = {
  status: ApplicationStatus;
  completedAt?: string;
  deadline?: string;
  documents: ApplicationDocument[];
  notes?: string;
  submittedAt?: string;
  reviewedAt?: string;
  reviewNotes?: string;
};

type ExtendedApplicationPhaseData = {
  phase: string;
  data?: unknown;
  documents: ExtendedApplicationDocument[];
  submittedAt?: string | null;
  status: ExtendedApplicationStatus;
  completedAt?: string;
  deadline?: string;
  notes?: string;
  reviewedAt?: string;
  reviewNotes?: string;
  reviewedBy?: string;
};


type ApplicationsResponse = {
  userId: string;
  esihaku?: ApplicationPhaseData;
  nomination?: ApplicationPhaseData;
  grants?: {
    erasmus?: ApplicationPhaseData;
    kela?: ApplicationPhaseData;
  };
  postExchange?: ApplicationPhaseData;
  createdAt: string;
  updatedAt: string;
};


type ExtendedApplicationsResponse = {
  userId: string;
  esihaku?: ExtendedApplicationPhaseData;
  nomination?: ExtendedApplicationPhaseData;
  apurahat?: ExtendedApplicationPhaseData;
  vaihdon_jalkeen?: ExtendedApplicationPhaseData;
  applications: ExtendedApplicationPhaseData[];
  currentPhase: string | null;
  createdAt?: string;
  updatedAt?: string;
};


type LegacyApplicationsResponse = ExtendedApplicationPhaseData[];


type ApplicationDocument = {
  id: string;
  applicationId: string;
  applicationPhase: ApplicationPhase;
  documentType: string;
  fileName: string;
  fileUrl: string;
  uploadedAt: string;
  fileSize: number;
  mimeType: string;
  isRequired: boolean;
  status: DocumentStatus;
  uploadedBy: string;
};

type ExtendedApplicationDocument = {
  id: string;
  applicationId: string;
  applicationPhase: ApplicationPhase | string;
  documentType: string;
  fileName: string;
  fileUrl: string;
  uploadedAt: string;
  fileSize: number;
  mimeType: string;
  isRequired?: boolean;
  status?: DocumentStatus | string;
  uploadedBy: string;
};

type ApplicationTask = {
  id: string;
  phaseId: string;
  title: string;
  description: string;
  isRequired: boolean;
  isCompleted: boolean;
  completedAt?: string;
  dueDate?: string;
  documentTypes?: string[];
  externalLinks?: ExternalLink[];
};

type ExternalLink = {
  title: string;
  url: string;
  description: string;
  category?: "application" | "information" | "support";
};

type ProfileResponse = {
  id: string;
  userName: string;
  email: string;
  registeredAt: string;
  user_level_id?: number;
  favorites: string[];
  documents: Document[];
  exchangeBadge?: boolean;
  avatarUrl?: string;
  linkedinUrl?: string;
  applications?: ApplicationsResponse;
  applicationProgress?: {
    overallProgress: number;
    currentPhase: ApplicationPhase;
    nextDeadline?: string;
    completedPhases: ApplicationPhase[];
  };
};

type ContactMessageInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactResponse = {
  _id: string,
  responderName: string,
  responderEmail: string,
  message: string,
  createdAt: string,
  sentAt: string
};

type ContactMessageResponse = {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "replied" | "closed";
  createdAt: string;
  updatedAt: string;
  responses?: ContactResponse[];
};

export type {
  PartnerSchool,
  DestinationResponse,
  PartnerSchoolWithCoordinates,
  DestinationWithCoordinatesResponse,
  ProfileResponse,
  Document,
  ApplicationsResponse,
  ApplicationDocument,
  ApplicationPhaseData,
  ApplicationStatus,
  ApplicationPhase,
  DocumentStatus,
  ApplicationTask,
  ExternalLink,
  ExtendedApplicationStatus,
  ExtendedApplicationPhaseData,
  ExtendedApplicationsResponse,
  ExtendedApplicationDocument,
  LegacyApplicationsResponse,
  // Contact message types
  ContactMessageInput,
  ContactMessageResponse,
  ContactResponse
};
