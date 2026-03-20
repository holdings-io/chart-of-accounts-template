export type AccountType = "Asset" | "Liability" | "Equity" | "Revenue" | "Expense";

export interface Account {
  code: string;
  name: string;
  type: AccountType;
  subtype: string;
  description: string;
  isHeader: boolean;
}

export type OrganizationType = "small-business" | "nonprofit" | "church";

export interface ChartOfAccounts {
  id: string;
  name: string;
  organizationType: OrganizationType;
  description: string;
  version: string;
  accounts: Account[];
}
