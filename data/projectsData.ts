export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  imgSrc: string
  href?: string
  github?: string
  demo?: string
  techStack: string[]
  category: string[]
  featured: boolean
  startDate: string
  endDate?: string
  status: 'completed' | 'in-progress' | 'archived'
}

const projectsData: Project[] = [
  {
    id: 'herbal-churna-diabetic',
    title: 'Formulation and Evaluation of Herbal Churna for Diabetic Treatment',
    description:
      'Research project focusing on the formulation and comprehensive evaluation of an anti-diabetic herbal churna using traditional and modern pharmaceutical analysis techniques.',
    longDescription:
      'Conducted extensive research on herbal formulation for diabetes management. Analyzed 10-20 scholarly articles to guide the selection and combination of key ingredients. Performed rigorous laboratory testing including determination of alcohol content, tannins, acetic acid, and protein levels. Ensured adherence to defined scientific methodologies and proper documentation throughout the research process. This thesis project demonstrated the integration of traditional herbal medicine with modern pharmaceutical analysis.',
    imgSrc: '/static/images/logo.png',
    techStack: [
      'Drug Formulation',
      'Pharmaceutical Analysis',
      'Laboratory Testing',
      'Research Methodology',
      'Herbal Medicine',
      'Quality Control',
    ],
    category: ['Research', 'Formulation'],
    featured: true,
    startDate: '2023-08',
    endDate: '2024-05',
    status: 'completed',
  },
]

export default projectsData
