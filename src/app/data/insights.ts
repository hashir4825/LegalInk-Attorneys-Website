export interface Insight {

  slug: string;

  title: string;

  type: string;

  date: string;

  summary: string;

  author: string;

  content: string[];

}
export const INSIGHTS: Insight[] = [

  {
    slug: 'recent-developments-tax-litigation',

    title: 'Recent Developments in Tax Litigation',

    type: 'Legal Update',

    date: '21 June 2026',

    author: 'Legalink Attorneys',

    summary:
      'An overview of recent judicial developments affecting tax litigation and regulatory enforcement in Pakistan.',

    content: [
      'This article will be added later.'
    ]
  },

  {
    slug: 'corporate-governance-pakistan',

    title: 'Corporate Governance in Pakistan',

    type: 'Article',

    date: '10 June 2026',

    author: 'Legalink Attorneys',

    summary:
      'Understanding the evolving corporate governance framework and compliance obligations.',

    content: [
      'This article will be added later.'
    ]
  },

  {
    slug: 'employment-law-update',

    title: 'Employment Law Update',

    type: 'Client Alert',

    date: '28 May 2026',

    author: 'Legalink Attorneys',

    summary:
      'Recent developments in employment law and practical guidance for employers.',

    content: [
      'This article will be added later.'
    ]
  }

];