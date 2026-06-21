export interface PracticeSubCategory {

  slug: string;

  title: string;

  shortDescription: string;

  overview: string[];

  services: string[];

  representativeMatters: string[];

  lawyers: string[];

}

export interface PracticeCategory {

  slug: string;

  title: string;

  children: PracticeSubCategory[];

}

export const PRACTICE_AREAS: PracticeCategory[] = [

  /* =====================================================
      TRANSACTIONAL
  ===================================================== */

 /* =====================================================
    TRANSACTIONAL
===================================================== */

{

  slug: 'transactional',

  title: 'Transactional',

  children: [

    {
      slug: 'antitrust',
      title: 'Antitrust',

      shortDescription:
        'Legalink Attorneys advises businesses on competition law, market practices, mergers, restrictive trade arrangements and regulatory compliance to minimize commercial and legal risk.',

      overview: [
        'Our Competition and Antitrust practice assists domestic and international businesses in navigating Pakistan’s evolving competition law framework. We advise on restrictive trade practices, abuse of dominant position, merger control and regulatory investigations before the Competition Commission of Pakistan.',

        'Our lawyers work closely with businesses to ensure commercial transactions remain compliant while achieving strategic objectives. We provide practical, commercially focused advice designed to reduce regulatory exposure and support sustainable growth.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Justice (R) Shahid Jamil Khan',
        'Muhammad Areeb Khan'
      ]
    },

    {
      slug: 'banking-finance',
      title: 'Banking & Finance',

      shortDescription:
        'Advising financial institutions, lenders, borrowers and corporate clients on financing transactions, banking regulations and secured lending.',

      overview: [
        'Legalink Attorneys advises banks, financial institutions and corporate borrowers on a broad range of banking and finance matters including lending, project finance, security documentation and regulatory compliance.',

        'Our team combines transactional expertise with dispute resolution experience, enabling clients to structure transactions efficiently while effectively managing legal and commercial risks.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Muhammad Areeb Khan',
        'Justice (R) Shahid Jamil Khan'
      ]
    },

    {
      slug: 'corporate-commercial',
      title: 'Corporate & Commercial',

      shortDescription:
        'Comprehensive corporate legal services including business structuring, commercial contracts, governance, compliance and strategic advisory.',

      overview: [
        'Our Corporate & Commercial practice supports businesses throughout every stage of their lifecycle, from incorporation and corporate governance to commercial transactions and strategic restructuring.',

        'We regularly advise private companies, public entities and investors on contractual arrangements, regulatory obligations and day-to-day corporate matters while providing commercially practical legal solutions.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Muhammad Areeb Khan',
        'Justice (R) Shahid Jamil Khan',
        'Hamza Butt'
      ]
    },

    {
      slug: 'energy',
      title: 'Energy',

      shortDescription:
        'Legal advice on energy projects, regulatory approvals, contractual arrangements and sector-specific compliance matters.',

      overview: [
        'Legalink Attorneys advises clients involved in conventional and renewable energy projects on commercial agreements, procurement, licensing and regulatory matters.',

        'We assist investors, developers and public sector entities in navigating Pakistan’s evolving energy sector while ensuring regulatory compliance and commercial certainty.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Muhammad Areeb Khan',
        'Justice (R) Shahid Jamil Khan'
      ]
    },

    {
      slug: 'insurance',
      title: 'Insurance',

      shortDescription:
        'Advising insurers, businesses and policyholders on insurance law, coverage disputes, regulatory compliance and commercial risk management.',

      overview: [
        'Our Insurance practice advises clients on insurance policies, commercial risk allocation, claims management and regulatory compliance affecting the insurance industry.',

        'Where disputes arise, our litigation experience enables us to represent insurers and policyholders effectively before courts, tribunals and regulatory authorities.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Justice (R) Shahid Jamil Khan',
        'Hamza Butt'
      ]
    },

    {
      slug: 'intellectual-property',
      title: 'Intellectual Property',

      shortDescription:
        'Protecting trademarks, copyrights, patents, trade secrets and other valuable intellectual property assets.',

      overview: [
        'Legalink Attorneys assists businesses, innovators and entrepreneurs in protecting, managing and enforcing intellectual property rights across a wide range of industries.',

        'We advise on trademark registration, copyright protection, licensing, commercialization and enforcement while helping clients safeguard valuable commercial assets.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Hamza Butt',
        'Muhammad Areeb Khan'
      ]
    },

    {
      slug: 'mergers-acquisitions',
      title: 'Mergers & Acquisitions',

      shortDescription:
        'Advising buyers, sellers and investors on acquisitions, mergers, due diligence and transaction structuring.',

      overview: [
        'Our Mergers & Acquisitions team advises clients throughout the entire transaction lifecycle including due diligence, negotiation, structuring, regulatory approvals and transaction completion.',

        'We focus on protecting our clients’ commercial interests while delivering practical legal solutions that facilitate successful transactions.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Muhammad Areeb Khan',
        'Justice (R) Shahid Jamil Khan'
      ]
    },

    {
      slug: 'projects-infrastructure',
      title: 'Projects & Infrastructure',

      shortDescription:
        'Legal support for infrastructure developments, construction projects, public-private partnerships and government procurement.',

      overview: [
        'Legalink Attorneys advises developers, contractors, investors and government entities involved in major infrastructure and development projects.',

        'Our multidisciplinary team provides strategic legal advice covering project structuring, procurement, financing, regulatory approvals and contractual risk management.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Muhammad Areeb Khan',
        'Justice (R) Shahid Jamil Khan'
      ]
    },

    {
      slug: 'real-estate',
      title: 'Real Estate',

      shortDescription:
        'Advising developers, investors and businesses on real estate transactions, development projects, leasing and property regulation.',

      overview: [
        'Our Real Estate practice advises clients on acquisitions, disposals, leasing arrangements, development projects and complex property transactions.',

        'We regularly assist developers, financial institutions and private investors in managing legal risks associated with commercial and residential real estate.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Muhammad Areeb Khan',
        'Hamza Butt'
      ]
    },

    {
      slug: 'sports',
      title: 'Sports',

      shortDescription:
        'Legal advice for athletes, clubs, governing bodies and commercial stakeholders operating within the sports industry.',

      overview: [
        'Legalink Attorneys provides strategic legal advice relating to sports governance, sponsorship agreements, commercial contracts, disciplinary proceedings and dispute resolution.',

        'Our lawyers assist sporting organizations and professional athletes in protecting their commercial interests while ensuring regulatory compliance.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Barrister Muhammad Ahsan Akram'
      ]
    },

    {
      slug: 'technology-telecom',
      title: 'Technology & Telecom',

      shortDescription:
        'Advising technology companies, startups and telecommunications businesses on commercial, regulatory and data protection matters.',

      overview: [
        'We advise technology businesses, software companies, fintech enterprises and telecommunications operators on commercial transactions, compliance and regulatory requirements.',

        'Our team assists clients with technology agreements, digital business operations, licensing arrangements and emerging legal issues affecting innovative industries.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Muhammad Areeb Khan',
        'Hamza Butt'
      ]
    },

    {
      slug: 'venture-capital-private-equity',
      title: 'Venture Capital & Private Equity',

      shortDescription:
        'Supporting investors, startups and private equity funds through investment transactions, corporate structuring and exit strategies.',

      overview: [
        'Legalink Attorneys advises venture capital investors, private equity funds, founders and high-growth businesses on investment transactions and corporate structuring.',

        'Our lawyers assist clients throughout fundraising, shareholder arrangements, regulatory compliance and successful investment exits.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Muhammad Areeb Khan',
        'Justice (R) Shahid Jamil Khan'
      ]
    }

  ]

},

  /* =====================================================
      LITIGATION
  ===================================================== */

/* =====================================================
    LITIGATION
===================================================== */

{

  slug: 'litigation',

  title: 'Litigation',

  children: [

    {
      slug: 'arbitration-adr',
      title: 'Arbitration & ADR',

      shortDescription:
        'Representing businesses, institutions and individuals in domestic and international arbitration, mediation and alternative dispute resolution proceedings.',

      overview: [
        'Legalink Attorneys advises and represents clients in arbitration and alternative dispute resolution proceedings arising from commercial, construction, corporate and contractual disputes. We work to resolve disputes efficiently while protecting our clients’ commercial interests.',

        'Our lawyers regularly assist clients in drafting arbitration agreements, conducting arbitration proceedings and enforcing arbitral awards before competent courts.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Justice (R) Shahid Jamil Khan',
        'Muhammad Areeb Khan'
      ]
    },

    {
      slug: 'construction-disputes',
      title: 'Construction & Infrastructure Disputes',

      shortDescription:
        'Advising contractors, developers, consultants and project owners in construction-related disputes and infrastructure litigation.',

      overview: [
        'Our Construction & Infrastructure Disputes practice represents clients involved in complex construction projects, public procurement and infrastructure developments throughout Pakistan.',

        'We advise on contractual claims, delay disputes, performance issues, regulatory compliance and dispute resolution through litigation and arbitration.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Justice (R) Shahid Jamil Khan',
        'Muhammad Areeb Khan'
      ]
    },

    {
      slug: 'commercial-disputes',
      title: 'Commercial Disputes',

      shortDescription:
        'Representing businesses in commercial, contractual, shareholder, banking and corporate disputes before courts and tribunals.',

      overview: [
        'Legalink Attorneys represents corporations, financial institutions and private businesses in high-value commercial disputes involving contracts, corporate governance, shareholder rights and business transactions.',

        'Our commercially focused approach combines strategic litigation with practical legal advice aimed at protecting business continuity and minimizing commercial risk.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Justice (R) Shahid Jamil Khan',
        'Muhammad Areeb Khan',
        'Hamza Butt'
      ]
    },

    {
      slug: 'constitutional-litigation',
      title: 'Constitutional & Appellate Litigation',

      shortDescription:
        'Advising and representing clients before the High Courts and Supreme Court in constitutional, administrative and appellate proceedings.',

      overview: [
        'Our Constitutional Litigation practice represents individuals, businesses and public institutions before constitutional courts in matters involving fundamental rights, judicial review, statutory interpretation and administrative law.',

        'We regularly appear before the Lahore High Court and other superior courts in constitutional petitions, appeals and judicial review proceedings involving complex legal and regulatory issues.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Justice (R) Shahid Jamil Khan',
        'Barrister Muhammad Ahsan Akram',
        'Muhammad Areeb Khan'
      ]
    },

    {
      slug: 'criminal-white-collar',
      title: 'Criminal & White Collar Crime',

      shortDescription:
        'Defending individuals, executives and corporations in criminal investigations, regulatory proceedings and white-collar crime matters.',

      overview: [
        'Legalink Attorneys provides strategic legal representation in criminal prosecutions, white-collar investigations, regulatory offences and financial crime proceedings.',

        'Our lawyers regularly advise clients facing investigations involving fraud, corruption, money laundering, corporate misconduct and regulatory enforcement.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Barrister Muhammad Ahsan Akram',
        'Justice (R) Shahid Jamil Khan'
      ]
    },

    {
      slug: 'employment-litigation',
      title: 'Employment',

      shortDescription:
        'Representing employers and employees in labour disputes, employment litigation and workplace regulatory matters.',

      overview: [
        'Our Employment Litigation practice advises businesses, executives and employees on workplace disputes, disciplinary proceedings and employment-related litigation.',

        'We regularly appear before labour courts, service tribunals and appellate forums in disputes involving termination, service benefits and regulatory compliance.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Barrister Muhammad Ahsan Akram',
        'Hamza Butt'
      ]
    },

    {
      slug: 'family-child-custody',
      title: 'Family & Child Custody',

      shortDescription:
        'Advising families on matrimonial disputes, guardianship, succession and child custody proceedings.',

      overview: [
        'Legalink Attorneys provides sensitive yet effective legal representation in family disputes involving marriage, divorce, maintenance, guardianship and succession matters.',

        'Our lawyers prioritize practical and client-focused solutions while protecting the legal rights and long-term interests of families and children.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Barrister Muhammad Ahsan Akram'
      ]
    },

    {
      slug: 'tax',
      title: 'Tax',

      shortDescription:
        'Representing taxpayers before tax authorities, appellate forums and superior courts in direct and indirect taxation matters.',

      overview: [
        'Legalink Attorneys has developed a strong practice in tax litigation involving income tax, sales tax, customs and federal excise matters. Our lawyers regularly advise businesses and individuals on complex taxation issues and represent clients before tax authorities and appellate tribunals.',

        'The firm also appears before the Lahore High Court in tax references and constitutional petitions involving significant questions of tax law, regulatory interpretation and fiscal policy.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Muhammad Areeb Khan',
        'Hamza Butt'
      ]
    },

    {
      slug: 'trial-practice',
      title: 'Trial Practice',

      shortDescription:
        'Comprehensive trial representation in civil, commercial and criminal matters before courts throughout Pakistan.',

      overview: [
        'Our Trial Practice team represents clients at every stage of litigation, from the institution of proceedings through trial and appeal. We combine meticulous preparation with effective courtroom advocacy.',

        'The firm regularly appears before civil courts, commercial courts, special tribunals and appellate courts in a broad range of contentious matters.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Justice (R) Shahid Jamil Khan',
        'Barrister Muhammad Ahsan Akram',
        'Muhammad Areeb Khan'
      ]
    },

    {
      slug: 'ip-litigation',
      title: 'Intellectual Property',

      shortDescription:
        'Protecting and enforcing intellectual property rights through litigation, injunctions and regulatory proceedings.',

      overview: [
        'Legalink Attorneys represents clients in trademark, copyright, patent and passing-off disputes before courts and intellectual property authorities.',

        'We assist businesses in enforcing intellectual property rights, defending infringement claims and developing litigation strategies that safeguard valuable commercial assets.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Hamza Butt',
        'Muhammad Areeb Khan'
      ]
    }

  ]

},

  /* =====================================================
      REGULATORY
  ===================================================== */
/* =====================================================
    REGULATORY
===================================================== */

{

  slug: 'regulatory',

  title: 'Regulatory',

  children: [

    {
      slug: 'employment',
      title: 'Employment',

      shortDescription:
        'Advising employers, executives and institutions on employment law, workplace compliance, labour regulations and human resource matters.',

      overview: [
        'Legalink Attorneys advises public and private sector employers on all aspects of employment law, including recruitment, workplace policies, disciplinary proceedings, termination, employee benefits and labour law compliance.',

        'Our lawyers provide practical legal solutions designed to minimize workplace disputes while ensuring compliance with Pakistan’s evolving employment and labour regulatory framework.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Barrister Muhammad Ahsan Akram',
        'Hamza Butt'
      ]
    },

    {
      slug: 'procurement',
      title: 'Procurement',

      shortDescription:
        'Providing legal advice on public procurement, tendering procedures, government contracts and regulatory compliance.',

      overview: [
        'Our Procurement practice advises government authorities, public sector organizations, contractors and private businesses on procurement laws, tender documentation and contractual negotiations.',

        'We assist clients throughout the procurement lifecycle while ensuring transparency, regulatory compliance and effective management of legal risks.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Justice (R) Shahid Jamil Khan',
        'Muhammad Areeb Khan'
      ]
    },

    {
      slug: 'non-profit',
      title: 'Philanthropy & Not-for-Profit',

      shortDescription:
        'Advising charitable organizations, trusts, foundations and non-profit entities on governance, registration and regulatory compliance.',

      overview: [
        'Legalink Attorneys assists charitable organizations, educational institutions, trusts and non-governmental organizations in establishing effective governance structures and maintaining regulatory compliance.',

        'We provide strategic legal advice on registration, tax exemptions, governance obligations, funding arrangements and operational compliance.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Muhammad Areeb Khan',
        'Hamza Butt'
      ]
    },

    {
      slug: 'legislative-drafting',
      title: 'Legislative Drafting',

      shortDescription:
        'Preparing legislation, statutory instruments, regulatory frameworks, policies and legal reforms for public and private institutions.',

      overview: [
        'Our Legislative Drafting practice advises government departments, regulators and institutions on drafting legislation, statutory rules, policies and legal frameworks.',

        'Drawing upon extensive litigation and regulatory experience, our lawyers prepare clear, practical and legally sound legislative instruments that support effective governance.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Justice (R) Shahid Jamil Khan',
        'Muhammad Areeb Khan'
      ]
    },

    {
      slug: 'immigration',
      title: 'Immigration',

      shortDescription:
        'Advising individuals, businesses and multinational organizations on immigration, visas, work permits and residency matters.',

      overview: [
        'Legalink Attorneys assists clients with immigration matters involving employment visas, business immigration, residency, citizenship and cross-border mobility.',

        'Our lawyers provide practical advice designed to ensure regulatory compliance while facilitating international business operations and personal mobility.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Barrister Muhammad Ahsan Akram',
        'Muhammad Areeb Khan'
      ]
    },

    {
      slug: 'public-international-law',
      title: 'Public International Law',

      shortDescription:
        'Advising governments, institutions and private entities on international legal obligations, treaties and cross-border regulatory matters.',

      overview: [
        'Legalink Attorneys advises clients on matters involving international legal principles, treaty obligations, sovereign issues and cross-border legal disputes.',

        'Our multidisciplinary team provides strategic legal advice where domestic law intersects with international obligations and regulatory frameworks.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Justice (R) Shahid Jamil Khan',
        'Barrister Muhammad Ahsan Akram'
      ]
    },

    {
      slug: 'sanctions-compliance',
      title: 'Sanctions & Regulatory Compliance',

      shortDescription:
        'Helping businesses establish compliance programs and navigate sanctions, regulatory investigations and corporate governance requirements.',

      overview: [
        'Our Regulatory Compliance practice advises businesses on sanctions regimes, anti-money laundering obligations, corporate governance, regulatory investigations and internal compliance frameworks.',

        'We assist organizations in identifying legal risks, strengthening governance structures and implementing practical compliance strategies that support long-term commercial objectives.'
      ],

      services: [],

      representativeMatters: [],

      lawyers: [
        'Justice (R) Shahid Jamil Khan',
        'Muhammad Areeb Khan',
        'Hamza Butt'
      ]
    }

  ]

},

];