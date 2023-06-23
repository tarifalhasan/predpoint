import { NavLinksType, SolutionsDataType } from '@/type/type';

export const NavLinks: NavLinksType[] = [
  {
    lebel: 'Home',
    href: '/',
  },
  {
    lebel: 'Solutions',
    href: '#solutions',
  },
  {
    lebel: 'Blog',
    href: '#blog',
  },
  {
    lebel: 'Contact Us',
    href: '#contact_us',
  },
];

export const SolutionsData: SolutionsDataType[] = [
  {
    name: 'Explainable Anomaly detection',
    featuresList: [
      'Any Input - unstructured tabular/text/image/voice data',
      'Detects anomalies not outliers',
      'Robust to changes in anomalous behaviour',
      'Get explanations for all detected anomalies ',
    ],
    background: 'bg-yellow',
  },
  {
    name: 'Generative AI',
    featuresList: [
      'Create Engineering drawings and Designs',
      'Simulate testing using AI generated scenarios',
      'Create synthetic data and avoid privacy related legal concerns',
      'Auto-generate reports  ',
    ],
    background: 'bg-sky',
  },
  {
    name: 'Forecast AI',
    featuresList: [
      'Data Driven probabilistic prediction',
      'Event genealogy and causal relationships',
      'Triggering probabilities and event evolution',
      'Learn more than what occurs next',
    ],
    background: 'bg-sky',
  },
  {
    name: 'Other products',
    featuresList: [
      'Safe ID : Fingerprint, facial and voice based security system',
      'Meeting Expert : Transcribe meetings with speaker details',
      'Robust to changes in anomalous behaviour',
      'Graph IQ : discover intelligent insights in any network',
    ],
    background: 'bg-yellow',
  },
];
