interface PasswordResetToken {
  iv: string | null;
  content: string | null;
}

export interface OrganizationProps {
  _id: string;
  __v?: string;
  organisationName: string;
  phoneNumber: string;
  email: string;
  regNumber?: string | null;
  organisationId?: string | null;
  status: "requested" | "pending" | "verified";
  tempPassword?: string | null;
  module: "hotel" | "restaurant" | "spa" | "crm";
  password?: string | null;
  passwordResetToken?: PasswordResetToken;
  isActive: boolean;
  isPaid: boolean;
  isPublish: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
  paymentDate: Date | string | null;
  publishedDate: Date | string | null;
}

export interface RequestsInitialStateProps {
  isLoading: boolean;
  organizations: Array<OrganizationProps>;
  filter: { field: string; value: string };
  fetchingPassword: boolean;
  sendingAccountEmail: boolean;
}

export interface AllOrgsResponseProps {
  success: boolean;
  data: {
    message: string;
    count: number;
    accounts: OrganizationProps[];
  };
}

export interface GeneratePasswordResponse {
  success: boolean;
  data: {
    message: string;
    tempPass: string;
  };
}

export interface SendAccountEmailResponse extends GeneratePasswordResponse {
  account: OrganizationProps;
}

export interface AccountEmailProps {
  email: string;
  tempPass: string;
  organisationName: string;
}

export interface ClientInitialStateProps {
  isLoading: boolean;
  organizations: Array<OrganizationProps>;
  filter: { field: string; value: string | boolean };
  // fetchingPassword: boolean;
  // sendingAccountEmail: boolean;
}

export interface AdminProfileProps {
  _id: string;
  profileUrl: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string | null;
  gender: string | null;
  dateOfBirth: string | Date | null;
  address: string | null;
  bankName: string | null;
  accountNumber: string | null;
  accountName: string | null;
  accountType: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AdminProfileInitialStateProps {
  isLoading: boolean;
  adminProfile: AdminProfileProps | null;
  editBasicInfo: boolean;
  editBankDetails: boolean;
  editPassword: boolean;
}

export interface AdminProfileFetchResponse {
  success: boolean;
  data: {
    message: string;
    adminProfile: AdminProfileProps;
  };
}

export interface AdminProfileUpdateResponse {
  success: boolean;
  data: {
    message: string;
    updatedProfile: AdminProfileProps;
  };
}
