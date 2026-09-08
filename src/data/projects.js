import genpay from '../assets/images/work/opt/genpay.webp'
import genpaySm from '../assets/images/work/opt/genpay-sm.webp'
import talknaija from '../assets/images/work/opt/talknaija.webp'
import talknaijaSm from '../assets/images/work/opt/talknaija-sm.webp'
import quickship from '../assets/images/work/opt/quickship.webp'
import quickshipSm from '../assets/images/work/opt/quickship-sm.webp'
import ekounited from '../assets/images/work/opt/ekounited.webp'
import ekounitedSm from '../assets/images/work/opt/ekounited-sm.webp'
import affectionate from '../assets/images/work/opt/affectionate.webp'
import affectionateSm from '../assets/images/work/opt/affectionate-sm.webp'
import fembos from '../assets/images/work/opt/fembos.webp'
import fembosSm from '../assets/images/work/opt/fembos-sm.webp'

/**
 * Ordered by how strongly each project demonstrates the range of the work —
 * not chronologically. The first four carry full case-study layouts; the
 * last two sit in a compact secondary row.
 */
export const projects = [
  {
    id: 'genpay',
    name: 'GenPay',
    type: 'Ticketing & digital events platform',
    role: 'Full-stack development, with Tekuvo and Marvex',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Paystack'],
    description:
      'GenPay is a platform for discovering events and handling tickets end to end — browsing what is on, buying and reselling tickets, and managing an account around it. It is built to behave like a product, not a brochure.',
    contributions: [
      'Event discovery and browsing',
      'Ticket purchase and resale flows',
      'Accounts, authentication and payments',
    ],
    href: 'https://genpay.ng',
    image: genpay,
    imageSmall: genpaySm,
    alt: 'GenPay events and ticketing platform homepage',
    tier: 'featured',
  },
  {
    id: 'talknaija',
    name: 'TalkNaija Media',
    type: 'News & media publishing platform',
    role: 'Full-stack development',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    description:
      'A publishing platform for a Nigerian news outlet: a fast, category-driven reading experience on the front, and the editorial tooling to write, organise and publish behind it.',
    contributions: [
      'Section-based reading experience with search and a light / dark mode',
      'Content management for articles, categories and breaking news',
      'Layouts tuned for long-form reading across devices',
    ],
    href: 'https://talknaijamedia.com',
    image: talknaija,
    imageSmall: talknaijaSm,
    alt: 'TalkNaija Media news homepage with latest and top stories',
    tier: 'featured',
  },
  {
    id: 'quickship',
    name: 'QuickShip Africa',
    type: 'Logistics & delivery platform',
    role: 'Full-stack development',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    description:
      'QuickShip handles local and international shipping requests. Customers book a delivery, follow it from pickup to drop-off, and the team works from a shared view of every shipment.',
    contributions: [
      'Delivery booking workflow',
      'Shipment tracking for customers',
      'Account sign-up and login',
    ],
    href: 'https://quickship.africa',
    image: quickship,
    imageSmall: quickshipSm,
    alt: 'QuickShip Africa logistics platform homepage',
    tier: 'featured',
  },
  {
    id: 'ekounited',
    name: 'Eko United FC',
    type: 'Football club website',
    role: 'Full-stack development',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    description:
      'The official site for a Lagos football club — club news, fixtures and results, a squad section, and shop and ticketing entry points, held together under one identity.',
    contributions: [
      'News and press-release publishing',
      'Fixtures, results and squad sections',
      'Shop and ticketing entry points',
    ],
    href: 'https://ekounitedfc.com',
    image: ekounited,
    imageSmall: ekounitedSm,
    alt: 'Eko United FC official website with a press-release feature',
    tier: 'featured',
  },
  {
    id: 'affectionate',
    name: 'Affectionate Living Care',
    type: 'Home-care provider',
    role: 'Design & front-end development',
    stack: ['React', 'Tailwind CSS'],
    description:
      'A home-care provider in Bedfordshire. The site lays out their services, approach and governance clearly, with a calm interface aimed at families making difficult decisions.',
    contributions: [
      'Information architecture and content pages',
      'Responsive, accessible layouts',
    ],
    href: 'https://affectionatelivingcare.com',
    image: affectionate,
    imageSmall: affectionateSm,
    alt: 'Affectionate Living Care home-care website homepage',
    tier: 'secondary',
  },
  {
    id: 'fembos',
    name: 'Fembos Global Services',
    type: 'Corporate & industrial website',
    role: 'Redesign & front-end development',
    stack: ['React', 'Tailwind CSS'],
    description:
      'A corporate site for a Nigerian company in solid minerals, agricultural exports, oil & gas marketing and procurement. A redesign built to present the business with weight and clarity.',
    contributions: [
      'Full visual redesign',
      'Services, industries and approach sections',
    ],
    href: 'https://fembosglobalservices.com',
    image: fembos,
    imageSmall: fembosSm,
    alt: 'Fembos Global Services corporate website homepage',
    tier: 'secondary',
  },
]

export const featuredProjects = projects.filter((p) => p.tier === 'featured')
export const secondaryProjects = projects.filter((p) => p.tier === 'secondary')
