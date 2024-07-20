export interface generalInitialState {
  navIsOpen: boolean;
}

// ADMIN
export interface AdminPayloadProps {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface AdminProps {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface adminResponseProps {
  success: boolean;
  data: {
    message: string;
    token: string;
    admin: AdminProps;
  };
}

export interface authSliceInitialState {
  isAuthenticated: boolean;
  isLoading: boolean;
  admin: AdminProps | null;
}

export interface ResetPasswordPayload {
  password: string;
  encryption: {
    iv: string;
    content: string;
    timestamp: string;
  };
}
