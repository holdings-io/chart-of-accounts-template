# Chart of Accounts Template

[![npm version](https://img.shields.io/npm/v/@holdings-io/chart-of-accounts-template.svg)](https://www.npmjs.com/package/@holdings-io/chart-of-accounts-template)
[![license](https://img.shields.io/npm/l/@holdings-io/chart-of-accounts-template.svg)](https://github.com/holdings-io/chart-of-accounts-template/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

A comprehensive, open-source chart of accounts template library with structured data (JSON + CSV + TypeScript types) for **small businesses**, **nonprofits**, and **churches**.

Built by [Holdings](https://getholdings.com) — Banking with built-in accounting for nonprofits and small businesses.

## Features

- 3 organization types — Small Business, Nonprofit, and Church
- Structured data — JSON templates with typed accounts
- CSV exports — Ready to import into any accounting system
- TypeScript-first — Full type definitions included
- Practical defaults — Real-world account structures, not textbook theory
- Zero dependencies — Lightweight and fast

## Installation

```bash
npm install @holdings-io/chart-of-accounts-template
```

```bash
yarn add @holdings-io/chart-of-accounts-template
```

```bash
pnpm add @holdings-io/chart-of-accounts-template
```
## Quick Start

### TypeScript

```typescript
import {
  smallBusiness,
  nonprofit,
  church,
  getTemplate,
  getAvailableTypes,
} from "@holdings-io/chart-of-accounts-template";
import type { Account, ChartOfAccounts } from "@holdings-io/chart-of-accounts-template";

// Get a template by organization type
const template = getTemplate("nonprofit");
console.log(template?.name); // "Nonprofit Organization"
console.log(template?.accounts.length); // 77

// Access templates directly
const expenses = smallBusiness.accounts.filter(
  (a) => a.type === "Expense" && !a.isHeader
);

// List available types
console.log(getAvailableTypes()); // ["small-business", "nonprofit", "church"]
```

### JavaScript

```javascript
const { smallBusiness, getTemplate } = require("@holdings-io/chart-of-accounts-template");

const template = getTemplate("church");
console.log(template.name); // "Church"
console.log(template.accounts.length); // 86

// Filter by account type
const revenue = template.accounts.filter((a) => a.type === "Revenue" && !a.isHeader);
```

### Use JSON Directly

You can also import the raw JSON files without the TypeScript wrapper:

```javascript
const smallBusiness = require("@holdings-io/chart-of-accounts-template/templates/small-business.json");
```
## Templates

### Small Business (61 accounts)

A general-purpose chart of accounts suitable for most service and product-based businesses.

| Category | Accounts |
| --- | --- |
| Assets | Cash, AR, Inventory, Prepaid, Fixed Assets |
| Liabilities | AP, Credit Cards, Payroll, Loans, Unearned Revenue |
| Equity | Owner Equity, Draws, Retained Earnings |
| Revenue | Sales, Service, Interest Income |
| Expenses | COGS, Payroll, Rent, Marketing, Professional Fees, and more |

### Nonprofit (77 accounts)

Designed for 501(c)(3) organizations with fund accounting support.

| Category | Accounts |
| --- | --- |
| Assets | Cash, Restricted Cash, Grants Receivable, Pledges, Investments |
| Liabilities | AP, Payroll, Deferred Revenue, Refundable Advances |
| Net Assets | Unrestricted, Board-Designated, Temporarily and Permanently Restricted |
| Revenue | Contributions, Grants, Events, Program Fees, Investment Income |
| Expenses | Program (A/B/C), Management and General, Fundraising |

### Church (86 accounts)

Tailored for churches and religious organizations with ministry-specific categories.

| Category | Accounts |
| --- | --- |
| Assets | General Fund, Building Fund, Missions Fund, Benevolence Fund, Fixed Assets |
| Liabilities | AP, Payroll, Housing Allowance, Mortgage, Designated Funds |
| Net Assets | Unrestricted, Temporarily and Permanently Restricted |
| Revenue | Tithes, Offerings, Online Giving, Building/Missions/Benevolence Funds |
| Expenses | Pastoral, Facilities, Ministry Programs, Missions, Benevolence, Admin |
## Account Structure

Each account in a template has the following fields:

```typescript
interface Account {
  code: string;        // Unique account code (e.g., "1000", "4010")
  name: string;        // Human-readable account name
  type: AccountType;   // "Asset" | "Liability" | "Equity" | "Revenue" | "Expense"
  subtype: string;     // More specific categorization
  description: string; // Brief description of the account purpose
  isHeader: boolean;   // true = category header, not used for direct posting
}
```

## CSV Files

Pre-built CSV files are included in the `csv/` directory for direct import into spreadsheets and accounting systems:

- `csv/small-business.csv`
- `csv/nonprofit.csv`
- `csv/church.csv`

## Use Cases

- **Accounting software** — Seed new organizations with a standard chart of accounts
- **Onboarding flows** — Let users pick a template and customize from there
- **Data migration** — Map accounts from one system to a standard structure
- **Education** — Teach bookkeeping with real-world account structures
- **Fintech platforms** — Provide pre-built accounting structures for your customers

## Holdings

This library is built and maintained by [Holdings](https://getholdings.com) — a banking platform with built-in accounting designed for nonprofits and small businesses.

If you need a complete financial platform with banking, accounting, and bookkeeping in one place, check out [getholdings.com](https://getholdings.com).

## Contributing

Contributions are welcome! Here is how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/add-template`)
3. **Add or improve** templates, types, or documentation
4. **Submit** a pull request

### Ideas for Contributions

- New organization-type templates (e.g., HOA, SaaS, restaurant)
- Localized account names for different countries
- Account mapping utilities between templates
- Validation functions for account structures

## License

MIT — see [LICENSE](LICENSE) for details.

---

Built with love by [Holdings](https://getholdings.com)
