import {
  IconMail,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  type Icon,
} from '@tabler/icons-react';

export const CONTACT_DETAILS: {
  icon: Icon;
  link: string;
  text: string;
  cta?: string;
}[] = [
  {
    icon: IconMail,
    link: 'mailto:rahulpoonia229@gmail.com',
    text: 'rahulpoonia229@gmail.com',
    cta: 'Email me',
  },
  {
    icon: IconBrandGithub,
    link: 'https://github.com/rahulpoonia29',
    text: 'rahulpoonia29',
    cta: 'View code',
  },
  {
    icon: IconBrandLinkedin,
    link: 'https://www.linkedin.com/in/rahulpoonia',
    text: 'rahulpoonia',
    cta: 'Connect',
  },
  {
    icon: IconBrandInstagram,
    link: 'https://www.instagram.com/rahulpoonia029',
    text: 'rahulpoonia029',
    cta: 'View photos',
  },
];
