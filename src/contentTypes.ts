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

//Link based document system types:
type DocumentSourceType = "google_drive" | "onedrive" | "dropbox" | "icloud" | "other_url";

type DocumentPlatform = {
  type: DocumentSourceType;
  name: string; 
  icon?: string; 
  requiresPublicAccess: boolean; 
};

// URL  for platform validation & Instructions for users on how to get shareable link
type PlatformURLPattern = {
  platform: DocumentSourceType;
  pattern: RegExp | string;
  exampleUrl: string;
  instructions: string; // Instructions here!
};

type SupportedPlatforms = {
  google_drive: {
    name: "Google Drive";
    urlPatterns: string[];
    sharingInstructions: string;
  };
  onedrive: {
    name: "OneDrive";
    urlPatterns: string[];
    sharingInstructions: string;
  };
  dropbox: {
    name: "Dropbox";
    urlPatterns: string[];
    sharingInstructions: string;
  };
  icloud: {
    name: "iCloud";
    urlPatterns: string[];
    sharingInstructions: string;
  };
  other_url: {
    name: "Other URL";
    urlPatterns: string[];
    sharingInstructions: string;
  };
};

type DocumentLinkValidation = {
  isValid: boolean;
  isAccessible: boolean;
  errorMessage?: string;
  checkedAt: string;
  statusCode?: number;
};

type DocumentLinkRequest = {
  name: string;
  url: string;
  sourceType: DocumentSourceType;
  documentType?: string;
  notes?: string;
};

type DocumentLinkUpdate = {
  name?: string;
  url?: string;
  sourceType?: DocumentSourceType;
  notes?: string;
};

type Document = {
  id: string;
  name: string;
  url: string;
  sourceType: DocumentSourceType;
  platformName?: string; 
  addedAt: string;
  lastVerified?: string; // Last time link was verified as working
  isAccessible?: boolean; 
  accessPermission?: "public" | "restricted" | "unknown";
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
  sourceType: DocumentSourceType;
  platformName?: string;
  addedAt: string;
  lastVerified?: string;
  isAccessible?: boolean;
  accessPermission?: "public" | "restricted" | "unknown";
  fileSize?: number;
  mimeType?: string;
  isRequired: boolean;
  status: DocumentStatus;
  addedBy: string;
};

type ExtendedApplicationDocument = {
  id: string;
  applicationId: string;
  applicationPhase: ApplicationPhase | string;
  documentType: string;
  fileName: string;
  fileUrl: string;
  sourceType: DocumentSourceType;
  platformName?: string;
  addedAt: string;
  lastVerified?: string;
  isAccessible?: boolean;
  accessPermission?: "public" | "restricted" | "unknown";
  fileSize?: number;
  mimeType?: string;
  isRequired?: boolean;
  status?: DocumentStatus | string;
  addedBy: string;
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

type ApplicationsProgresses = {
  esihaku?: {
    status: "not_started" | "in_progress" | "completed" | "pending_review";
    completedAt?: string;
  };
  nomination?: {
    status: "not_started" | "in_progress" | "completed" | "pending_review";
    completedAt?: string;
  };
  grants?: {
    erasmus?: {
      status: "not_started" | "in_progress" | "completed" | "pending_review";
      completedAt?: string;
    };
    kela?: {
      status: "not_started" | "in_progress" | "completed" | "pending_review";
      completedAt?: string;
    };
  };
  postExchange?: {
    status: "not_started" | "in_progress" | "completed" | "pending_review";
    completedAt?: string;
  };
}
type GrantsSummary = {
  grants: unknown[];
  erasmusGrants: unknown[];
  kelaSupport?: unknown;
  budgetEstimate?: unknown;
  totalEstimatedSupport: number;
}
type GrantApplicationData = {
  destination: string;
  program: string;
  estimatedAmount: number;
}

type BudgetEstimateData ={
  id?: string;
  userId?: string;
  destination: string;
  categories: Record<string, { estimatedCost: number; notes?: string }>;
  totalEstimate?: number;
  currency: string;
  createdAt?: string;
  updatedAt?: string;
}

type GrantType = "erasmus_plus" | "kela" | "other";
type GrantStatus = "not_started" | "in_progress" | "completed" | "approved" | "rejected";

type GrantApplication = {
  id: string;
  userId: string;
  grantType: GrantType;
  status: GrantStatus;
  destination: string;
  program: string; 
  estimatedAmount: number;
  approvedAmount?: number;
  applicationDate: string;
  decisionDate?: string;
  documents: string[]; // Document IDs
  createdAt: string;
  updatedAt: string;
}

// Budget Categories from 
type BudgetCategory = 
  | "matkakulut"    
  | "vakuutukset"         
  | "asuminen"            
  | "ruoka ja arki"        // Food and daily life
  | "opintovalineet"; 

type BudgetItem = {
  category: BudgetCategory;
  title: string;
  description: string;
  items: string[]; 
  icon: string; 
}

type BudgetEstimate = {
  id: string;
  userId: string;
  destination: string;
  grantAmount: number;
   categories: Record<string, {
    estimatedCost: number;
    notes?: string;
  }>;
  totalEstimate: number;
  balance?: number; // grantAmount - totalEstimate

  currency: string;
  createdAt: string;
  updatedAt: string;
}

// Erasmus+ types from  
type ErasmusPlusGrantType = 
  | "base_grant"                    
  | "travel_grant"                 
  | "green_travel_supplement" 
  | "inclusion_support";  
type ErasmusPlusGrant = {
  id: string;
  userId: string;
  grantType: ErasmusPlusGrantType;
  title: string;
  description: string;
  status: GrantStatus;
  estimatedAmount?: number;
  documents: string[];
  createdAt: string;
  updatedAt: string;
}

//  calculator
type GrantCalculator = {
  destination: string;
  program: string; 
  baseAmount: number;
  travelDistance?: number; 
  greenTravel?: boolean; 
  inclusionSupport?: boolean; 
  totalEstimated: number;
  currency: string;
}

type GrantSearchFilters = {
  destination?: string;
  program?: string;
  minAmount?: number;
  maxAmount?: number;
}

// Kela 
type KelaSupport = {
  id: string;
  userId: string;
  status: GrantStatus;
  monthlyAmount: number;
  duration: number;
  totalAmount: number;
  studyAbroadConfirmation: boolean; 
  applicationSubmitted: boolean;
  documents: string[];
  createdAt: string;
  updatedAt: string;
}

// Response types for API
type GrantApplicationResponse = {
  grants: GrantApplication[];
  erasmusGrants: ErasmusPlusGrant[];
  kelaSupport?: KelaSupport;
  budgetEstimate?: BudgetEstimate;
  totalEstimatedSupport: number;
}

type CreateGrantApplicationRequest = {
  grantType: GrantType | ErasmusPlusGrantType;
  destination: string;
  program: string;
  estimatedAmount: number;
}

type UpdateGrantApplicationRequest = {
  status?: GrantStatus;
  estimatedAmount?: number;
  approvedAmount?: number;
  documents?: string[];
}
type ApplicationStage = {
  id: string;
  phase: ApplicationPhase;
  title: string;
  description: string;
  status: ApplicationStatus;
  requiredDocuments: string[];
  optionalDocuments?: string[];
  externalLinks?: { title: string; url: string; description: string }[];
  deadline?: string;
  completedAt?: string;
}

export type {
  PartnerSchool,
  DestinationResponse,
  PartnerSchoolWithCoordinates,
  DestinationWithCoordinatesResponse,
  ProfileResponse,
  // Link-based system types
  Document,
  DocumentSourceType,
  DocumentPlatform,
  PlatformURLPattern,
  SupportedPlatforms,
  DocumentLinkValidation,
  DocumentLinkRequest,
  DocumentLinkUpdate,
  // Application types
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
  ContactResponse,
  // Application's progresses and grants' types
  BudgetEstimateData,
  GrantsSummary,
  GrantApplicationData,
  ApplicationsProgresses,
  // Grant and financial support types
  GrantType,
  GrantStatus,
  GrantApplication,
  BudgetCategory,
  BudgetItem,
  BudgetEstimate,
  ApplicationStage,
  ErasmusPlusGrantType,
  ErasmusPlusGrant,
  GrantCalculator,
  GrantSearchFilters,
  KelaSupport,
  GrantApplicationResponse,
  CreateGrantApplicationRequest,
  UpdateGrantApplicationRequest
};
