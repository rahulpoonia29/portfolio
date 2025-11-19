export interface Project {
  id: string;
  name: string;
  blurb: string;
  stack: string[];
  tags?: string[];
  links?: { live?: string; code?: string; demo?: string };
}
