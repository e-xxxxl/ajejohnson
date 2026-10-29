import ekounited from '../assets/images/work/opt/ekounited.webp'
import ekounitedSm from '../assets/images/work/opt/ekounited-sm.webp'
import linky from '../assets/images/work/opt/linky.webp'
import linkySm from '../assets/images/work/opt/linky-sm.webp'
import ajcourier from '../assets/images/work/opt/ajcourier.webp'
import ajcourierSm from '../assets/images/work/opt/ajcourier-sm.webp'
import talknaija from '../assets/images/work/opt/talknaija.webp'
import talknaijaSm from '../assets/images/work/opt/talknaija-sm.webp'
import genpay from '../assets/images/work/opt/genpay.webp'
import genpaySm from '../assets/images/work/opt/genpay-sm.webp'
import quickship from '../assets/images/work/opt/quickship.webp'
import quickshipSm from '../assets/images/work/opt/quickship-sm.webp'
import affectionate from '../assets/images/work/opt/affectionate.webp'
import affectionateSm from '../assets/images/work/opt/affectionate-sm.webp'
import fembos from '../assets/images/work/opt/fembos.webp'
import fembosSm from '../assets/images/work/opt/fembos-sm.webp'

/**
 * Ordered by how strongly each project demonstrates the range of the work,
 * not chronologically. The first five carry full case-study folders; the
 * rest sit in a compact secondary row. `portrait` marks a phone-first
 * product whose screenshot is a mobile capture.
 */
export const projects = [
  {
    id: 'ekounited',
    name: 'Eko United FC',
    type: 'Football club website',
    role: 'Full-stack development',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    description:
      'The official site for a Lagos football club, with club news, fixtures and results, a squad section, and shop and ticketing entry points, held together under one identity.',
    contributions: [
      'News and press-release publishing',
      'Fixtures, results and squad sections',
      'Shop and ticketing entry points',
    ],
    href: 'https://ekounitedfc.com',
    image: ekounited,
    imageSmall: ekounitedSm,
    alt: 'Eko United FC official website homepage',
    tier: 'featured',
  },
  {
    id: 'linky',
    name: 'Linky',
    type: 'Link safety checker',
    role: 'Full-stack development, built end to end',
    stack: ['Next.js', 'React'],
    description:
      'A mobile-first tool for checking a suspicious link before you open it. Paste a URL and Linky inspects things like domain age and look-alike tricks, then returns a plain verdict with a score and the reasons behind it.',
    contributions: [
      'Paste-and-scan flow with an instant verdict and score',
      'Scan history and a reviews page',
      'App-style mobile layout with a bottom tab bar',
    ],
    href: 'https://linky.tekuvo.com.ng',
    image: linky,
    imageSmall: linkySm,
    alt: 'Linky link scanner on a phone, showing the paste and scan field',
    tier: 'featured',
    portrait: true,
  },
  {
    id: 'ajcourier',
    name: 'AJ Courier & Logistics',
    type: 'Courier & logistics platform',
    role: 'Full-stack development',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Paystack', 'Google Maps'],
    description:
      'A delivery platform for a Lagos courier company. Customers book a rider, see the fare before they pay, and follow the parcel from pickup to drop-off. Interstate, international, air and sea shipping sit under the same account.',
    contributions: [
      'Booking flow with route, distance and fare calculation',
      'Online payments and live delivery status tracking',
      'Admin dashboard for bookings, status updates and pricing',
    ],
    href: 'https://ajcourierlogistics.com',
    image: ajcourier,
    imageSmall: ajcourierSm,
    alt: 'AJ Courier & Logistics homepage with the same-day delivery headline',
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
    id: 'genpay',
    name: 'GenPay',
    type: 'Ticketing & digital events platform',
    role: 'Full-stack development, with Tekuvo and Marvex',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Paystack'],
    description:
      'GenPay is a platform for discovering events and handling tickets end to end: browsing what is on, buying and reselling tickets, and managing an account around it. It is built to behave like a product, not a brochure.',
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
    tier: 'secondary',
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
