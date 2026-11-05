// Content for the service landing pages (/blocked-drains, /hot-water, etc.)
// Reviews are copied word for word from NWP Plumbing's Google Business Profile.

export type Review = { name: string; text: string }

const R: Record<string, Review> = {
  roisin: { name: 'Roisin H.', text: 'Amazing service and perfectly priced. Nathan arrived same day and on time. Have used him multiple times, highly recommend.' },
  glenn: { name: 'Glenn T.', text: "This guy's a legend. Had a problem, he came out same day and sorted it. Competitive price, highly recommend and will use again." },
  narelle: { name: 'Narelle', text: 'Highly recommended plumber, without a doubt. Nathan was able to assist in my hour of need. He is the most professional, polite & helpful plumber in Southwest Sydney!' },
  helen: { name: 'Helen C.', text: 'I found Nathan from the 5-star Google reviews and he deserves the high rating. His quotation was very transparent and he came promptly to fix plumbing issues another plumber failed to fix recently. Very clear communication, friendly and professional. Highly recommend, happy to add another 5 stars.' },
  dale: { name: 'Dale M.', text: 'Recently installed my full home filtration. Great communication and honest pricing and service. Highly recommended' },
  oscar: { name: 'Oscar J.', text: "I couldn't be happier with the plumbing service I received last week. The workmanship was outstanding, and it was clear that NWP takes great pride in the quality of their work. They were in and out within the hour of installing our dishwasher and new kitchen and laundry taps." },
  teddy: { name: 'Teddy', text: 'NWP Plumbing was absolutely amazing. Nathan our plumbing was so nice, respectful and knew what he was talking about when looking at our noisy pipes. He ended up servicing all of our taps and gave us so much more pressure in our shower. Would 100% recommend.' },
  suz: { name: 'Suz T.', text: 'Great experience with NWP Plumbing. They were quick, professional and easy to deal with. The work was done to a high standard and everything was left clean and tidy. Would definitely recommend!' },
  costa: { name: 'Costa', text: "It's refreshing to find a company that genuinely takes pride in their workmanship and customer service. Their hard work, attention to detail and honest approach really stood out. I wouldn't hesitate to recommend NWP Plumbing to anyone looking for reliable, high-quality plumbing services. Thanks again team!" },
  janelle: { name: 'Janelle', text: 'Fantastic service! Arrived on time, was friendly and professional and completed the job to a high standard. Great communication, fair pricing, and everything was left clean and tidy. I highly recommend and would definitely use again! Great job Nathan!' },
  jisha: { name: 'Jisha J.', text: 'Great service from start to finish. Reliable, efficient, and excellent workmanship. Highly recommend!' },
}

export type Service = {
  slug: string
  title: string          // <title>
  description: string    // meta description
  badge: string
  h1: string
  h1Accent: string
  intro: string
  quoteIssue?: string    // pre-selects this option in the quote form
  showZeroCallout: boolean
  whatWeDoHeading: string
  whatWeDo: string[]
  body: string
  photo?: { src: string; alt: string }
  reviews: Review[]
}

export const SERVICES: Record<string, Service> = {
  'emergency-plumber': {
    slug: 'emergency-plumber',
    title: 'Emergency Plumber Sydney, 24/7 | NWP Plumbing',
    description: '24/7 emergency plumber across Sydney. Burst pipes, major leaks, blocked toilets, no hot water. Fixed quote before we start. Call 0477 160 911.',
    badge: 'On call 24/7',
    h1: 'Plumbing emergency?',
    h1Accent: 'Call now, day or night.',
    intro: 'Burst pipe, flooding, blocked toilet or no hot water. Our team is on call 24/7 across Sydney, and you get a fixed price before any work starts, even after hours.',
    showZeroCallout: false,
    whatWeDoHeading: 'Emergencies we handle',
    whatWeDo: ['Burst and leaking pipes', 'Overflowing or blocked toilets', 'Blocked sewer and drains', 'No hot water', 'Gas leaks and gas appliance faults', 'Water shut-off and make-safe'],
    body: 'Call us and explain what is happening. We will talk you through making it safe, then quote a fixed price once we have seen the job. Nothing is done without your approval.',
    reviews: [R.narelle, R.glenn, R.roisin],
  },
  'blocked-drains': {
    slug: 'blocked-drains',
    title: 'Blocked Drain Plumber Sydney | Fixed Price | NWP Plumbing',
    description: 'Blocked drain, toilet, sink or sewer? Licensed plumber across Sydney. Fixed itemised quote before we start, same-day service. Call 0477 160 911.',
    badge: 'Same-day service',
    h1: 'Blocked drain?',
    h1Accent: 'Fixed price before we start.',
    intro: 'Blocked toilet, sink, shower or sewer line. We find the cause, quote a fixed price in writing, and clear it, usually the same day.',
    quoteIssue: 'Blocked drain',
    showZeroCallout: true,
    whatWeDoHeading: 'Blockages we clear',
    whatWeDo: ['Blocked toilets', 'Blocked kitchen and bathroom sinks', 'Blocked showers and floor wastes', 'Blocked sewer lines', 'Stormwater and gutter drains', 'Recurring blockages and root intrusion'],
    body: 'A drain that keeps blocking usually has a cause underneath it, such as tree roots, a broken pipe or a sag in the line. We tell you what we find and give you the options with prices, so you can decide.',
    photo: { src: '/images/work/NWP-drain-cleaning.jpg', alt: 'NWP Plumbing clearing a blocked drain' },
    reviews: [R.glenn, R.helen, R.janelle],
  },
  'hot-water': {
    slug: 'hot-water',
    title: 'Hot Water Repairs & Replacement Sydney | NWP Plumbing',
    description: 'No hot water? Repairs and replacement of electric, gas, solar and heat-pump systems across Sydney. Fixed price, same-day service. Call 0477 160 911.',
    badge: 'Same-day service',
    h1: 'No hot water?',
    h1Accent: 'Repaired or replaced, same day.',
    intro: 'Electric, gas, solar and heat-pump systems. We tell you honestly whether it is worth repairing, and give you a fixed price for either option.',
    quoteIssue: 'No hot water',
    showZeroCallout: true,
    whatWeDoHeading: 'Hot water work',
    whatWeDo: ['Hot water repairs', 'Hot water system replacement', 'Electric, gas, solar and heat-pump systems', 'Leaking tanks and valves', 'Tempering valves', 'Upgrades to a bigger or more efficient system'],
    body: 'If your system is old or leaking from the tank, replacement is usually the better value. If it is a valve, element or thermostat, a repair may be all you need. Either way, you see the full price in writing before we start.',
    photo: { src: '/images/work/NWP-before-after-hotwater.jpg', alt: 'Hot water system before and after replacement by NWP Plumbing' },
    reviews: [R.roisin, R.helen, R.costa],
  },
  'burst-pipes-leaks': {
    slug: 'burst-pipes-leaks',
    title: 'Burst Pipe & Leak Repairs Sydney | NWP Plumbing',
    description: 'Burst pipe or water leak? Licensed plumber on call 24/7 across Sydney. Fixed itemised quote before we start. Call 0477 160 911.',
    badge: 'On call 24/7',
    h1: 'Burst pipe or leak?',
    h1Accent: 'Fixed fast, priced upfront.',
    intro: 'Water where it should not be costs more every hour. Call now and we will get it stopped, find the cause and fix it, with a fixed price before we start.',
    quoteIssue: 'Burst pipe or leak',
    showZeroCallout: false,
    whatWeDoHeading: 'Leaks we fix',
    whatWeDo: ['Burst water pipes', 'Hidden leaks in walls and floors', 'Leaking taps and toilets', 'Leaking hot water systems', 'Water meter and mains leaks', 'High water bills with no obvious cause'],
    body: 'If water is coming through, turn off the main at your water meter if you can, then call us. We will talk you through what to do next.',
    reviews: [R.narelle, R.glenn, R.helen],
  },
  'gas-fitting': {
    slug: 'gas-fitting',
    title: 'Licensed Gas Fitter Sydney | NWP Plumbing',
    description: 'Licensed gas fitting across Sydney. Cooktops, heaters, BBQ points, gas hot water and leak repairs. Fixed price before we start. Call 0477 160 911.',
    badge: 'Licensed gas fitting',
    h1: 'Licensed gas fitter.',
    h1Accent: 'Fixed price before we start.',
    intro: 'Cooktops, heaters, BBQ points, gas hot water and gas leaks. Done by a licensed gas fitter, with a fixed itemised quote first.',
    quoteIssue: 'Gas fitting',
    showZeroCallout: true,
    whatWeDoHeading: 'Gas work',
    whatWeDo: ['Gas cooktop and oven installation', 'Gas heater installation and bayonet points', 'BBQ gas points', 'Gas hot water installation', 'Gas leak detection and repair', 'New gas lines'],
    body: 'If you can smell gas, turn off the gas at the meter, open doors and windows, do not use switches or flames, and call us straight away.',
    reviews: [R.helen, R.costa, R.jisha],
  },
  'toilet-replacement': {
    slug: 'toilet-replacement',
    title: 'Toilet Replacement & Repairs Sydney | NWP Plumbing',
    description: 'Toilet replacement, running or leaking toilets, cisterns and taps across Sydney. Fixed itemised quote, same-day service. Call 0477 160 911.',
    badge: 'Same-day service',
    h1: 'New toilet?',
    h1Accent: 'Fixed price, done right.',
    intro: 'Toilet replacement, running or leaking cisterns, and tap repairs. You get a fixed price in writing before we start.',
    quoteIssue: 'Tap or toilet',
    showZeroCallout: true,
    whatWeDoHeading: 'Toilet and tap work',
    whatWeDo: ['Toilet replacement', 'Running and leaking cisterns', 'Cistern and flush button repairs', 'Leaking and dripping taps', 'New kitchen and laundry taps', 'Low water pressure'],
    body: 'Not sure which toilet to choose? Tell us what you have now and we can recommend options that fit your space and budget, and include them in the quote.',
    reviews: [R.oscar, R.teddy, R.suz],
  },
  'bathroom-renovations': {
    slug: 'bathroom-renovations',
    title: 'Bathroom Renovations & Vanity Replacement Sydney | NWP Plumbing',
    description: 'Bathroom renovations and vanity replacement across Sydney. Fixed itemised quote before we start. Call 0477 160 911.',
    badge: 'Fixed itemised quotes',
    h1: 'Bathroom renovations.',
    h1Accent: 'Fixed itemised quote.',
    intro: 'From a new vanity to a full bathroom renovation. Every line item priced in writing before we start.',
    quoteIssue: 'Reno or fit-off',
    showZeroCallout: true,
    whatWeDoHeading: 'Renovation work',
    whatWeDo: ['Bathroom renovations', 'Vanity replacement', 'Showers and tapware', 'Toilets and basins'],
    body: 'Planning a renovation? Call us early and we will price it before you commit, so there are no surprises halfway through.',
    photo: { src: '/images/work/NWP-shower-mixer-conversion.jpg', alt: 'Shower mixer conversion by NWP Plumbing' },
    reviews: [R.suz, R.costa, R.janelle],
  },
  'water-filtration': {
    slug: 'water-filtration',
    title: 'Whole Home Water Filtration Sydney | NWP Plumbing',
    description: 'Whole-home water filtration installed by a licensed plumber across Sydney. Fixed itemised quote, lifetime workmanship guarantee. Call 0477 160 911.',
    badge: 'Licensed installation',
    h1: 'Whole-home water filtration.',
    h1Accent: 'Clean water from every tap.',
    intro: 'One system at the mains filters the water to every tap, shower and appliance in your home. Installed by a licensed plumber, with a fixed price first.',
    quoteIssue: 'Water filtration',
    showZeroCallout: true,
    whatWeDoHeading: 'What is included',
    whatWeDo: ['Whole-home mains entry filtration', 'Multi-stage sediment and carbon filter', 'Chlorine and chloramine removal', 'Professional licensed installation', 'Pressure testing and system check', 'Filter cartridge replacement'],
    body: 'Sydney mains water is treated with chlorine and chloramines. A whole-home system reduces these at the point the water enters your home, so every tap benefits.',
    photo: { src: '/images/work/NWP-home-filtration.jpg', alt: 'Whole home water filtration system installed by NWP Plumbing' },
    reviews: [R.dale, R.helen, R.costa],
  },
}

export const AREA_SUBURBS = [
  'Parramatta','Liverpool','Blacktown','Penrith','Fairfield','Cabramatta','Bankstown',
  'Castle Hill','Rouse Hill','Mount Druitt','Hornsby','Ryde','Chatswood','Strathfield',
  'Burwood','Hurstville','Sydney CBD','Sutherland','Manly','Bondi',
]
