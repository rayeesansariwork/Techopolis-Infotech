export type ClientCategory =
  | 'gov'
  | 'banking'
  | 'enterprise'
  | 'education'
  | 'healthcare';

export type Client = {
  name: string;
  initials: string;
  category: ClientCategory;
};

export const CATEGORIES: { id: ClientCategory; label: string }[] = [
  { id: 'gov', label: 'Government &amp; PSU' },
  { id: 'banking', label: 'Banking' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'education', label: 'Education' },
  { id: 'healthcare', label: 'Healthcare' },
];

export const CLIENTS: Client[] = [
  // Government & PSU
  { name: 'ECR', initials: 'ECR', category: 'gov' },
  { name: 'BCCL', initials: 'BCCL', category: 'gov' },
  { name: 'HURL', initials: 'HURL', category: 'gov' },

  // Banking
  { name: 'HDFC Bank', initials: 'HDFC', category: 'banking' },
  { name: 'Kotak Bank', initials: 'KOTAK', category: 'banking' },
  { name: 'SBI Ranchi', initials: 'SBI', category: 'banking' },

  // Enterprise
  { name: 'HP', initials: 'HP', category: 'enterprise' },
  { name: 'Sanjay Udyog Pvt Ltd', initials: 'SU', category: 'enterprise' },
  { name: 'Mining Associate Pvt Ltd', initials: 'MA', category: 'enterprise' },

  // Education
  { name: 'Carmel School', initials: 'CS', category: 'education' },
  { name: 'De Nobili School', initials: 'DN', category: 'education' },

  // Healthcare
  { name: 'Patliputra Hospital', initials: 'PH', category: 'healthcare' },
  { name: 'Asian Jalan', initials: 'AJ', category: 'healthcare' },
  { name: 'SJAS', initials: 'SJAS', category: 'healthcare' },
];
