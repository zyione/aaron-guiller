export type ProjectCategory = 'Residential' | 'Commercial' | 'Urban' | 'Interior';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'The Glass Pavilion',
    category: 'Residential',
    location: 'Kyoto, Japan',
    image: '/images/projects/exterior-night.png',
  },
  {
    id: '2',
    title: 'Aura Corporate HQ',
    category: 'Commercial',
    location: 'Seoul, South Korea',
    image: '/images/projects/exterior.png',
  },
  {
    id: '3',
    title: 'Lumina Wellness Center',
    category: 'Interior',
    location: 'Bali, Indonesia',
    image: '/images/projects/interior-reception.png',
  },
  {
    id: '4',
    title: 'The Solstice Residence',
    category: 'Interior',
    location: 'Los Angeles, CA',
    image: '/images/projects/interior-sitting.png',
  },
  {
    id: '5',
    title: 'Athenaeum Library',
    category: 'Interior',
    location: 'London, UK',
    image: '/images/projects/interior-library.png',
  },
  {
    id: '6',
    title: 'Vertex Eco Trail',
    category: 'Urban',
    location: 'Vancouver, Canada',
    image: '/images/projects/urban-eco-trail.png',
  },
  {
    id: '7',
    title: 'Meridian Masterplan',
    category: 'Urban',
    location: 'Singapore',
    image: '/images/projects/urban-aerial.png',
  },
];
