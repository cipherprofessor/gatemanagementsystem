export type UserRole = 'admin' | 'security' | 'visitor';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Gatepass {
  id: string;
  userId: string;
  purpose: string;
  status: 'pending' | 'approved' | 'rejected';
  validFrom: Date;
  validUntil: Date;
  qrCode: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface VisitorLog {
  id: string;
  gatepassId: string;
  entryTime?: Date;
  exitTime?: Date;
  securityNotes?: string;
}