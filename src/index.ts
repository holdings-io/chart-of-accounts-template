export type { Account, AccountType, OrganizationType, ChartOfAccounts } from "./types";

import smallBusinessData from "../templates/small-business.json";
import nonprofitData from "../templates/nonprofit.json";
import churchData from "../templates/church.json";
import type { ChartOfAccounts, OrganizationType } from "./types";

/** Chart of accounts template for general small businesses. */
export const smallBusiness: ChartOfAccounts = smallBusinessData as ChartOfAccounts;

/** Chart of accounts template for 501(c)(3) nonprofit organizations. */
export const nonprofit: ChartOfAccounts = nonprofitData as ChartOfAccounts;

/** Chart of accounts template for churches and religious organizations. */
export const church: ChartOfAccounts = churchData as ChartOfAccounts;

/** All available templates indexed by organization type. */
export const templates: Record<OrganizationType, ChartOfAccounts> = {
  "small-business": smallBusiness,
  nonprofit,
  church,
};

/**
 * Get a chart of accounts template by organization type.
 *
 * @param type - The organization type
 * @returns The chart of accounts template, or undefined if not found
 */
export function getTemplate(type: OrganizationType): ChartOfAccounts | undefined {
  return templates[type];
}

/**
 * Get all available template types.
 *
 * @returns Array of organization type identifiers
 */
export function getAvailableTypes(): OrganizationType[] {
  return Object.keys(templates) as OrganizationType[];
}
