export interface Experience {
  id: string
  type: 'education' | 'work'
  title: string
  organization: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string
  achievements: string[]
  skills: string[]
  logo?: string
}

const experienceData: Experience[] = [
  {
    id: 'sims-hospital',
    type: 'work',
    title: 'Jr. Assistant of Pharmacy',
    organization: 'SIMS Hospital',
    location: 'Surat, Gujarat, India',
    startDate: '2024-06',
    endDate: '2024-07',
    description:
      'Gained practical, hands-on experience in pharmaceutical supply chain logistics, rotating through hospital, industry (distribution), and drug store settings.',
    achievements: [
      'Supported core operational tasks including report analysis and specialized packaging unit procedures',
      'Contributed directly to product management initiatives aimed at streamlining workflows',
      'Increased overall departmental and operational efficiency through systematic processes',
      'Ensured smooth product flow across pharmaceutical supply chain',
    ],
    skills: [
      'Pharmaceutical Supply Chain',
      'Inventory Management',
      'Report Analysis',
      'Packaging Operations',
      'Product Management',
      'Hospital Pharmacy',
    ],
  },
  {
    id: 'pharmawind',
    type: 'work',
    title: 'Pharmaceutical Operations Intern',
    organization: 'Pharmawind Healthcare Pvt. Ltd.',
    location: 'Surat, Gujarat, India',
    startDate: '2024-06',
    endDate: '2024-07',
    description:
      'Gained hands-on experience in supply chain operations working across hospital, industry, and drug store settings.',
    achievements: [
      'Worked across hospital, industry, and drug store settings involving report analysis',
      'Performed packaging unit tasks ensuring quality pharmaceutical operations',
      'Contributed to product management initiatives for streamlined workflows',
      'Enhanced operational efficiency through systematic process improvements',
    ],
    skills: [
      'Supply Chain Operations',
      'Pharmaceutical Distribution',
      'Report Analysis',
      'Packaging Unit Operations',
      'Product Management',
      'Workflow Optimization',
    ],
  },
  {
    id: 'asutosh-hospital',
    type: 'work',
    title: 'Hospital Pharmacy Intern',
    organization: 'Asutosh Hospital',
    location: 'Surat, Gujarat, India',
    startDate: '2023-08',
    endDate: '2023-09',
    description:
      'Managed computerized data entry, billing, and inventory systems for smooth processing of pharmaceutical orders and operation workflows.',
    achievements: [
      'Managed computerized data entry systems for pharmaceutical records',
      'Handled billing operations ensuring accurate pharmaceutical transactions',
      'Maintained inventory systems for medication tracking and availability',
      'Ensured proper records and cooperation with team to enhance medication fulfillment',
      'Streamlined pharmaceutical order processing workflows',
    ],
    skills: [
      'Data Entry',
      'Pharmaceutical Billing',
      'Inventory Management',
      'Hospital Pharmacy Operations',
      'Record Keeping',
      'Pharmaceutical Software',
    ],
  },
  {
    id: 'bhagwan-mahavir',
    type: 'education',
    title: 'Bachelor of Pharmacy (B.Pharm)',
    organization: 'Bhagwan Mahavir College of Pharmacy, Bhagwan Mahavir University',
    location: 'Surat, Gujarat, India',
    startDate: '2020-11',
    endDate: '2024-05',
    description:
      'Comprehensive pharmaceutical education with focus on drug formulation, analysis, and clinical pharmacy practice.',
    achievements: [
      'Completed research thesis: Formulation and Evaluation of Herbal Churna for Diabetic Treatment',
      'Served as Class Representative, coordinating academic activities and student-faculty communication',
      'Volunteered at Pharmaphilic - National Level Techfest held by Bhagwan Mahavir University',
      'Relevant Coursework: Pharmaceutical Analysis, Pharmaceutical Microbiology, Pharmaceutics, Pharmacology, Pharmacognosy, Cosmetic Science',
    ],
    skills: [
      'Pharmaceutical Analysis',
      'Pharmaceutical Microbiology',
      'Pharmaceutics',
      'Pharmacology',
      'Pharmacognosy',
      'Cosmetic Science',
      'Drug Formulation',
      'Laboratory Techniques',
    ],
  },
  {
    id: 'aspire-hsc',
    type: 'education',
    title: 'Higher Secondary School Certificate (HSC)',
    organization: 'Aspire Public School',
    location: 'Surat, Gujarat, India',
    startDate: '2018-06',
    endDate: '2020-03',
    description:
      'Focused on Science stream with Chemistry, Biology, and Physics for pharmacy preparation.',
    achievements: [
      'Completed HSC with Science stream (Chemistry, Biology, Physics)',
      'Built strong foundation for pharmaceutical sciences',
      'Prepared for pharmacy entrance examinations',
    ],
    skills: ['Chemistry', 'Biology', 'Physics', 'Scientific Reasoning'],
  },
  {
    id: 'aspire-ssc',
    type: 'education',
    title: 'Secondary School Certificate (SSC)',
    organization: 'Aspire Public School',
    location: 'Surat, Gujarat, India',
    startDate: '2017-06',
    endDate: '2018-03',
    description: 'Completed secondary education with strong academic foundation.',
    achievements: [
      'Completed SSC with strong academic performance',
      'Developed foundational knowledge in sciences and mathematics',
    ],
    skills: ['Academic Foundation', 'Science', 'Mathematics'],
  },
]

export default experienceData
