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
const templates: Record<OrganizationType, ChartOfAccounts> = {
  "small-business": smallBusiness,
  nonprofit,
  church,
};

/**
 * Get a chart of accounts template by organization type.
 *
 * @param type - The organization type: "small-business", "nonprofit", or "church"
 * @returns The matching ChartOfAccounts template
 * @throws Error if the organization type is not found
 */
export function getTemplate(type: OrganizationType): ChartOfAccounts {
  const template = templates[type];
  if (!template) {
    throw new Error(`Unknown organization type: ${type}`);
  }
  return template;
}

/**
 * Get all available chart of accounts templates.
 *
 * @returns An array of all ChartOfAccounts templates
 */
export function getAllTemplates(): ChartOfAccounts[] {
  return Object.values(templates);
}

/**
 * Get all available template types.
 *
 * @returns Array of organization type identifiers
 */
export function getAvailableTypes(): OrganizationType[] {
  return Object.keys(templates) as OrganizationType[];
}
