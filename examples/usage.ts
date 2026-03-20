/**
 * Example: Using the chart of accounts template library.
 *
 * Run with: npx ts-node examples/usage.ts
 */

import {
  smallBusiness,
  nonprofit,
  church,
  getTemplate,
  getAllTemplates,
  getAvailableTypes,
} from "@holdings-io/chart-of-accounts-template";
import type { Account, ChartOfAccounts } from "@holdings-io/chart-of-accounts-template";

// --- List available template types ---
console.log("Available templates:", getAvailableTypes());
// => ["small-business", "nonprofit", "church"]

// --- Load a template by type ---
const template: ChartOfAccounts | undefined = getTemplate("nonprofit");
if (template) {
  console.log(template.name, "-", template.accounts.length, "accounts");
  console.log(template.description);
}

// --- Access templates directly ---
console.log("Small Business:", smallBusiness.accounts.length, "accounts");
console.log("Nonprofit:", nonprofit.accounts.length, "accounts");
console.log("Church:", church.accounts.length, "accounts");

// --- Filter accounts by type ---
const expenses: Account[] = smallBusiness.accounts.filter(
  (a) => a.type === "Expense" && !a.isHeader
);
console.log("
Small Business Expense Accounts:", expenses.length);
expenses.forEach((a) => console.log("  " + a.code + " - " + a.name));

// --- Get only header accounts ---
const headers: Account[] = nonprofit.accounts.filter((a) => a.isHeader);
console.log("
Nonprofit Category Headers:", headers.length);
headers.forEach((h) => console.log("  " + h.code + " - " + h.name + " [" + h.type + "]"));

// --- Find a specific account by code ---
const account: Account | undefined = church.accounts.find((a) => a.code === "4010");
if (account) {
  console.log("
Found:", account.code, "-", account.name);
  console.log("  Type:", account.type, "/", account.subtype);
  console.log("  Description:", account.description);
}
