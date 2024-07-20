interface PasswordResetToken {
  iv: string | null;
  content: string | null;
}

export interface OrganizationProps {
  _id: string;
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
}

export type OrganizationType = OrganizationProps[];
