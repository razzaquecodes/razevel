import { Order } from '../types/order';

export const MOCK_ACTIVE_ORDER: Order = {
  id: 'RZV-8942',
  status: 'active',
  createdAt: '2026-06-28T10:00:00Z',
  deliveryDate: '2026-07-28',
  paymentStatus: 'Paid',
  shippingMethod: 'Express Production',
  totalAmount: 185000,
  shippingAddress: {
    name: 'Razzaque A.',
    street: '123 Palm Jumeirah Villas',
    city: 'Dubai',
    country: 'United Arab Emirates'
  },
  measurementsUsed: 'Wedding Fit Profile',
  items: [
    {
      id: 'prod_1',
      name: 'Zardozi Midnight Sherwani',
      price: 185000,
      quantity: 1,
      image: '/images/hero.png'
    }
  ],
  artisan: {
    name: 'Master Tailor Abdul',
    experience: '32 Years',
    specialization: 'Royal Zardozi & Structural Architecture',
    completedGarments: 1405,
    status: 'Currently drafting your pattern',
  },
  journey: [
    {
      id: 'stage_1',
      title: 'Commission Received',
      subtitle: 'Your bespoke order has been placed in our atelier.',
      status: 'completed',
      date: 'June 28, 2026',
      story: 'The moment you commission a RAZEVÉL garment, the wheels of a multi-generational craft begin turning. Your measurements and style preferences have been formally logged into our atelier archives.',
    },
    {
      id: 'stage_2',
      title: 'Consultation & Review',
      subtitle: 'Master tailors reviewing your body profile.',
      status: 'completed',
      date: 'June 29, 2026',
      img: '/illustrations/consultation.png',
      artisanNotes: 'The client requires a slightly sharper shoulder line to accommodate the heavy Zardozi work without compromising mobility.',
      story: 'Before scissors touch fabric, our lead artisans study your measurements to foresee any structural challenges and ensure the drape will be flawless.'
    },
    {
      id: 'stage_3',
      title: 'Fabric Reserved',
      subtitle: 'Premium Banarasi silk allocated for your commission.',
      status: 'completed',
      date: 'July 01, 2026',
      img: '/images/fabric.png',
      story: 'We have sourced a 120-gram pure silk woven on handlooms in Varanasi. This fabric breathes perfectly while holding the heavy metallic threads of Zardozi.'
    },
    {
      id: 'stage_4',
      title: 'Pattern Drafting',
      subtitle: 'Drafting your unique paper blueprint.',
      status: 'active',
      date: 'In Progress',
      img: '/illustrations/pattern.png',
      artisanNotes: 'Drafting the asymmetrical hemline requested during consultation. Adjusting the armhole depth by 0.5 inches for the perfect Sherwani fit.',
      story: 'Your measurements are translated into a bespoke paper pattern. This blueprint is unique to you and will be securely archived for your future commissions.'
    },
    {
      id: 'stage_5',
      title: 'Fabric Cutting',
      subtitle: 'Hand-cutting the silk on the bias.',
      status: 'pending',
      date: 'Upcoming',
      img: '/illustrations/fitting.png'
    },
    {
      id: 'stage_6',
      title: 'Basting & Initial Stitching',
      subtitle: 'Temporary stitches for the first silhouette check.',
      status: 'pending',
      date: 'Upcoming',
      img: '/illustrations/sewing.png'
    },
    {
      id: 'stage_7',
      title: 'Hand Embroidery',
      subtitle: 'Zardozi and Aari work applied to the panels.',
      status: 'pending',
      date: 'Upcoming',
      img: '/images/craftsmanship.png'
    },
    {
      id: 'stage_8',
      title: 'Final Construction',
      subtitle: 'Bringing the embroidered panels together.',
      status: 'pending',
      date: 'Upcoming',
    },
    {
      id: 'stage_9',
      title: 'Quality Inspection',
      subtitle: 'Rigorous 40-point structural and aesthetic check.',
      status: 'pending',
      date: 'Upcoming',
      img: '/images/atelier.png'
    },
    {
      id: 'stage_10',
      title: 'Luxury Pressing',
      subtitle: 'Steamed and pressed to perfection.',
      status: 'pending',
      date: 'Upcoming',
    },
    {
      id: 'stage_11',
      title: 'Luxury Packaging',
      subtitle: 'Placed in our obsidian box and wax sealed.',
      status: 'pending',
      date: 'Upcoming',
      img: '/images/bespoke.png',
      story: 'Your garment is carefully folded in unbleached cotton muslin, placed in our signature obsidian box, scented lightly with Oud, and sealed with black wax.'
    },
    {
      id: 'stage_12',
      title: 'Courier Assigned',
      subtitle: 'Handed to our white-glove delivery partner.',
      status: 'pending',
      date: 'Upcoming',
    },
    {
      id: 'stage_13',
      title: 'Out For Delivery',
      subtitle: 'Arriving today.',
      status: 'pending',
      date: 'Upcoming',
    },
    {
      id: 'stage_14',
      title: 'Delivered',
      subtitle: 'Crafted for Forever.',
      status: 'pending',
      date: 'Upcoming',
    },
  ]
};

export const MOCK_COMPLETED_ORDER: Order = {
  ...MOCK_ACTIVE_ORDER,
  id: 'RZV-1102',
  status: 'completed',
  createdAt: '2025-11-10T10:00:00Z',
  deliveryDate: '2025-12-15',
  items: [
    {
      id: 'prod_2',
      name: 'Ivory Aari Achkan',
      price: 120000,
      quantity: 1,
      image: '/images/journal.png'
    }
  ],
  journey: MOCK_ACTIVE_ORDER.journey.map(stage => ({ ...stage, status: 'completed', date: 'December 2025' }))
};
