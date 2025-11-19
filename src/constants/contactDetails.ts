import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  type Icon,
} from '@tabler/icons-react';

export const CONTACT_DETAILS: {
  icon: Icon;
  link: string;
  text: string;
}[] = [
  {
    icon: IconMail,
    link: 'mailto:rahulpoonia229@gmail.com',
    text: 'rahulpoonia229@gmail.com',
  },
  {
    icon: IconBrandGithub,
    link: 'https://github.com/rahulpoonia29',
    text: 'rahulpoonia29',
  },
  {
    icon: IconBrandLinkedin,
    link: 'https://www.linkedin.com/in/rahulpoonia',
    text: 'rahulpoonia',
  },
  {
    icon: IconBrandInstagram,
    link: 'https://www.instagram.com/rahulpoonia029',
    text: 'rahulpoonia029',
  },
];
