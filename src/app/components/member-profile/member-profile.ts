import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-member-profile',
  imports: [CommonModule, RouterLink],
  templateUrl: './member-profile.html',
  styleUrl: './member-profile.css'
})
export class MemberProfile {

  member: any;

  constructor(private route: ActivatedRoute) {

    const id = this.route.snapshot.paramMap.get('id');

     const members: any = {

      'hamza-nawaz': {
        name: 'Muhammad Hamza Nawaz',
        designation: 'Associate',
        location: 'Lahore',

        email: 'hamzanawaz@legalinkattorneys.com',
        phone: '042 36280666',

        image: '/Assets/images/Hamzabhaipic.png',

        practiceAreas: [
          'Tax Advisory',
          'Tax Litigation',
          'Regulatory Compliance',
          'Corporate Advisory',
          'Legal Research'
        ],

        bio: [
          'Muhammad Hamza Nawaz is an Advocate and graduate of the University of the Punjab.',
          'His work includes tax advisory, compliance, audits and litigation before relevant authorities. He has served as Associate and Team Lead at United Law Associates and NWMS and has gained exposure to High Court litigation, particularly involving the Lahore Development Authority (LDA) and matters relating to the Federal Investigation Agency (FIA).',
          'Currently a Legal Associate at Legalink Attorneys, he represents the Parks and Horticulture Authority (PHA) and assists Senior Attorneys in advising and representing the Punjab Revenue Authority (PRA). His ability to analyze intricate legal frameworks and create practical legal solutions has earned him recognition among clients and colleagues.'
        ],

        education: [
          'LL.B., University of the Punjab'
        ],

        memberships: [
          'Punjab Bar Council',
          'HRCP'
        ]
      },

      'hamza-butt': {
        name: 'Hamza Butt',
        designation: 'Associate',
        location: 'Lahore',

        email: 'hamzabutt@legalinkattorneys.com',
        phone: '042 36280666',

        image: '/Assets/images/Hamzapic.png',
        practiceAreas: [
          'Labour Law',
          'Taxation',
          'Civil Litigation',
          'Regulatory Compliance',
          'Service Matters'
        ],

        bio: [
          'Hamza Butt is an Advocate and a graduate in Shariah and Law from the International Islamic University, Islamabad.',
          'He practices civil and labour litigation, taxation matters and regulatory compliance and regularly appears before Subordinate Courts, Labour Courts, the Labour Appellate Tribunal and various statutory authorities.',
          'He assists public sector bodies and private clients in matters relating to service regularization, disciplinary proceedings and tax disputes. His work includes drafting pleadings, legal opinions, compliance memoranda and providing litigation and research support to senior counsel.',
          'He previously interned at Bajwa Law Associates and Josh and Mak International, where he developed strong litigation support and legal research skills. With a sound understanding of statutory interpretation and procedural law, he contributes effectively to the firm’s litigation and advisory practice.'
        ],

        education: [
          'LL.B. (Shariah & Law), International Islamic University Islamabad'
        ],

        memberships: [
          'Punjab Bar Council',
          'HRCP'
        ]
      },
      'shuja-kamboh': {
  name: 'Shuja Ali Kamboh',
  designation: 'Associate',
  location: 'Lahore',

  email: 'info@legalinkattorneys.com',
  phone: '042 36280666',

  image: '/Assets/images/Shuja.png',

  practiceAreas: [
    'Civil Litigation',
    'Criminal Law',
    'Family Law',
    'Constitutional Law',
    'Commercial Law',
    'Legal Research',
    'Legal Drafting'
  ],

  bio: [
    'Shuja Ali Kamboh is an Advocate and holds an LL.B. (Hons.) from the University of London.',

    'With over 1.5 years of experience, he primarily assists the firm’s litigation practice in managing court proceedings and procedural matters at various stages of litigation.',

    'His practice focuses on civil, criminal, family, constitutional and commercial law, legal research, drafting and advisory work.',

    'He regularly advises and represents clients before courts and tribunals, providing practical and effective legal solutions to complex legal disputes.',

    'His experience in litigation management, legal drafting and client representation enables him to contribute effectively to the firm’s dispute resolution and advisory practice.'
  ],

  education: [
    'LL.B. (Hons.), University of London'
  ],

  memberships: [
    'Punjab Bar Council'
  ]
},

      'hammad-akbar': {
        name: 'Muhammad Hammad Akbar',
        designation: 'Paralegal',
        location: 'Lahore',

        email: 'info@legalinkattorneys.com',
        phone: '042 36280666',

        image: '/Assets/images/Hammadpic.png',

        practiceAreas: [
          'Civil Litigation',
          'Labour Law',
          'Regulatory Matters',
          'Legal Research'
        ],

        bio: [
          'Muhammad Hammad Akbar serves as a Paralegal with substantive exposure to civil, labour and regulatory matters.',
          'He works closely on litigation and advisory assignments involving service-related disputes, compliance matters and procedural documentation, providing consistent research and drafting support to the legal team.',
          'Prior to joining the firm, he gained experience at AGHS Legal Aid where he assisted in family, civil and criminal law matters with a primary focus on legal research and case preparation.',
          'He demonstrates strong capability in legal research, procedural analysis and efficient case management and contributes significantly to case strategy and client support.'
        ],

        education: [
          'LL.B. Universisty of London'        ],

        memberships: [
          'HRCP'
        ]
      },

      'wardah-shahid': {
        name: 'Wardah Shahid',
        designation: 'Paralegal',
        location: 'Lahore',

        email: 'info@legalinkattorneys.com',
        phone: '042 36280666',

        image: '/Assets/images/Wardahpic.png',
        practiceAreas: [
          'Corporate Law',
          'Commercial Law',
          'Legal Research',
          'Contract Drafting'
        ],

        bio: [
          'Wardah Shahid is a dynamic Paralegal with growing expertise in civil, commercial and corporate law.',
          'Currently pursuing an external LL.B (Hons.), she is building a strong foundation in legal research and advisory work.',
          'Prior to joining the firm, Wardah interned at Awais Law International where she contributed to civil law and arbitration research.',
          'In her current role, she provides support in legal research, drafting contracts and advisory matters across transactional, litigation and policy-related assignments. She also serves as the CIArb Student Ambassador for Blackstone School of Law.'
        ],

        education: [
          'LL.B. Universisty of London (Undergraduate)'
        ],

        memberships: [
          'HRCP'
                ],
                
      },
      'shabbar-kazmi': {
  name: 'Syed Shabbar Ali Kazmi',
  designation: 'Paralegal',
  location: 'Lahore',

  email: 'info@legalinkattorneys.com',
  phone: '042 36280666',

  image: '/Assets/images/Shabbar.png',

  practiceAreas: [
    'Civil Litigation',
    'Commercial Law',
    'Taxation',
    'Corporate Law',
    'Regulatory Compliance',
    'Legal Research'
  ],

  bio: [
    'Syed Shabbar Ali Kazmi is a Paralegal at Legalink Attorneys and is currently pursuing an LL.B. (Hons.) from the University of London.',

    'He assists the firm’s litigation and advisory teams on a range of civil, commercial, taxation, corporate and regulatory matters, with particular focus on legal research, case law analysis, statutory interpretation and legal documentation.',

    'In his role, Shabbar supports the preparation of legal notices, pleadings, legal opinions, compliance memoranda, contracts and other legal documentation. He also assists in legal due diligence, case management and litigation preparation.',

    'He works closely with the firm’s lawyers in conducting legal research, reviewing legal and commercial documentation and maintaining case records to support effective representation and advisory services.',

    'Prior to joining Legalink Attorneys, Shabbar gained professional experience in business development and client services, strengthening his communication, organizational and client management skills.',

    'With a strong work ethic and detail-oriented approach, he contributes effectively to the firm’s litigation and advisory practice across a broad range of legal and regulatory matters.'
  ],

  education: [
    'LL.B. (Hons.), University of London (Undergraduate)'
  ],

  memberships: [
    'HRCP'
  ]
}

    };
    this.member = members[id ?? ''];
  }
}