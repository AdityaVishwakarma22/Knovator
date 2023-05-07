import cat1 from "../cat1.svg";
import cat2 from "../cat2.svg";
import cat3 from "../cat3.svg";
import cat4 from "../cat4.svg";
import j1 from "../j1.png";
import j2 from "../j2.png";
import j3 from "../j3.png";
import j4 from "../j4.png";
import j5 from "../j5.png";
import j6 from "../j6.png";
import j7 from "../j7.png";
import j8 from "../j8.png";
import aws from "../aws_logo.png";
import arjuna_logo from "../arjuna_logo.png";
import indiv_logo from "../indiv_logo.png";
import industry_logo from "../industry_logo.png";
import sekolah_logo from "../sekolah_logo.png";
import advertisement from "../orbit_app.png";
import logo from "../logo.png";
import active from "../active.png";
import inactive from "../inactive.png";
import arrowright from "../active arrow.png"
import arrowrightactive from "../inactive arrow.png"


// Navbar arrows
const arrow = [
  arrowright,
  arrowrightactive 
]

// Featured Job Offers
const category = {
  heading: "Search by Category",
  activeElement: null,
  arr: [
    {
      heading: "Business Development",
      opening: "2 Openings",
      img: cat1,
      id:'a'
    },
    {
      heading: "Designing",
      opening: "3 Openings",
      img: cat2,
      id:'b'
    },
    {
      heading: "Development",
      opening: "3 Openings",
      img: cat3,
      id:'c'
    },
    {
      heading: "Content writer",
      opening: "3 Openings",
      img: cat4,
      id:'d'
    },
    {
      heading: "Content writer",
      opening: "3 Openings",
      img: cat4,
      id:'e'
    },
    {
      heading: "Development",
      opening: "3 Openings",
      img: cat3,
      id:'f'
    },
    {
      heading: "Business Development",
      opening: "2 Openings",
      img: cat1,
      id:'g'
    },
    {
      heading: "Business Development",
      opening: "2 Openings",
      img: cat1,
      id:'h'
    },
  ],
};

const compnaies = {
  heading: "Search by Category",
  activeElement: null,
  arr: [
    {
      heading: "Pegipegi",
      reviews: "4.9 | 50+ reviews",
      img: j1,
    },
    {
      heading: "Kompas Group",
      reviews: "4.9 | 50+ reviews",
      img: j2,
    },
    {
      heading: "Pegipegi",
      reviews: "4.9 | 50+ reviews",
      img: j3,
    },
    {
      heading: "Kompas Group",
      reviews: "4.9 | 50+ reviews",
      img: j4,
    },
    {
      heading: "Pegipegi",
      reviews: "4.9 | 50+ reviews",
      img: j5,
    },
    {
      heading: "Kompas Group",
      reviews: "4.9 | 50+ reviews",
      img: j6,
    },
    {
      heading: "Pegipegi",
      reviews: "4.9 | 50+ reviews",
      img: j7,
    },
    {
      heading: "Kompas Group",
      reviews: "4.9 | 50+ reviews",
      img: j8,
    },
    {
      heading: "Pegipegi",
      reviews: "4.9 | 50+ reviews",
      img: j1,
    },
    {
      heading: "Kompas Group",
      reviews: "4.9 | 50+ reviews",
      img: j2,
    },
    {
      heading: "Pegipegi",
      reviews: "4.9 | 50+ reviews",
      img: j3,
    },
    {
      heading: "Kompas Group",
      reviews: "4.9 | 50+ reviews",
      img: j6,
    },

  ],
};

const job_category = {
  heading: "Featured Job Offers",
  arr: [
    {
      heading: "Tech Rookie Internship Program (TRIP) - iOS Eng...",
      name: "PT Midas Daya Teknologi",
      review: "⭐ 4.1 | 50+ reviews",
      img: j1,
      description:[
        'Tech Rookie Internship Program (TRIP) - Data Analyst Intern',
        'Internship',
        'Hybrid',
        'Tech Rookie Internship Program (TRIP) - Data Analyst Intern',
        'Internship',
        'Hybrid',
      ]
    },
    {
      heading: "Tech Rookie Internship Program (TRIP) - iOS Eng...",
      name: "PT Midas Daya Teknologi",
      review: "⭐ 4.1 | 50+ reviews",
      img: j2,
      description:[
        'Tech Rookie Internship Program (TRIP) - Data Analyst Intern',
        'Internship',
        'Hybrid'
      ]
    },
    {
      heading: "Tech Rookie Internship Program (TRIP) - iOS Eng...",
      name: "PT Midas Daya Teknologi",
      review: "⭐ 4.1 | 50+ reviews",
      img: j3,
      description:[
        'Tech Rookie Internship Program (TRIP) - Data Analyst Intern',
        'Internship',
        'Hybrid',
        'Tech Rookie Internship Program (TRIP) - Data Analyst Intern',
        'Internship',
        'Hybrid',
      ]
    },
    {
      heading: "Tech Rookie Internship Program (TRIP) - iOS Eng...",
      name: "PT Midas Daya Teknologi",
      review: "⭐ 4.1 | 50+ reviews",
      img: j4,
      description:[
        'Tech Rookie Internship Program (TRIP) - Data Analyst Intern',
        'Internship',
        'Hybrid'
      ]
    },
    {
      heading: "Tech Rookie Internship Program (TRIP) - iOS Eng...",
      name: "PT Midas Daya Teknologi",
      review: "⭐ 4.1 | 50+ reviews",
      img: j5,
      description:[
        'Tech Rookie Internship Program (TRIP) - Data Analyst Intern',
        'Internship',
        'Hybrid',
        'Tech Rookie Internship Program (TRIP) - Data Analyst Intern',
        'Internship',
        'Hybrid',
      ]
    },
    {
      heading: "Tech Rookie Internship Program (TRIP) - iOS Eng...",
      name: "PT Midas Daya Teknologi",
      review: "⭐ 4.1 | 50+ reviews",
      img: j6,
      description:[
        'Tech Rookie Internship Program (TRIP) - Data Analyst Intern',
        'Internship',
        'Hybrid'
      ]
    },
    {
      heading: "Tech Rookie Internship Program (TRIP) - iOS Eng...",
      name: "PT Midas Daya Teknologi",
      review: "⭐ 4.1 | 50+ reviews",
      img: j7,
      description:[
        'Tech Rookie Internship Program (TRIP) - Data Analyst Intern',
        'Internship',
        'Hybrid'
      ]
    },
    {
      heading: "Tech Rookie Internship Program (TRIP) - iOS Eng...",
      name: "PT Midas Daya Teknologi",
      review: "⭐ 4.1 | 50+ reviews",
      img: j8,
      description:[
        'Tech Rookie Internship Program (TRIP) - Data Analyst Intern',
        'Internship',
        'Hybrid',
        'Tech Rookie Internship Program (TRIP) - Data Analyst Intern',
        'Internship',
        'Hybrid',
      ]
    },
  ],
  technologies:'SQL • Tableau • Python • Attention To Detail • Critical Thinking'
};

const partners = {
  advertisement :advertisement,
  list:[
  aws,
  arjuna_logo,
  indiv_logo,
  industry_logo,
  sekolah_logo
]}

const footer = {
  asset : [
    logo,
    active,
    inactive
  ],
  company_footer:[
    ['Connect with us',
    'info@orbitjobs.id',
    '62 811-1921-8222'],
    [
      'Terms & Conditions',
      'Privacy Policy',
      'About Us',
      'FAQ',
    ],
    [
      'Blogs',
      'For Jobseekers',
      'For Employers'
    ]
  ]
}


export { job_category, category, compnaies, partners, footer, arrow };
