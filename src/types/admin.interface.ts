export interface OrganizationProps {
  organisationName: string;
  phoneNumber: number;
  email: string;
  regNumber?: string | null;
  organisationId?: string | null;
  status: "requested" | "pending" | "verified";
  tempPassword?: string | null;
  module: "hotel" | "restaurant" | "spa" | "crm";
  password?: string | null;
  passwordResetToken?: {
    iv: string | null;
    content: string | null;
  };
  isActive: boolean;
  isPaid: boolean;
  isPublish: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
