// Content for the suburb landing pages (/plumber-<suburb>).
// Reviews are copied word for word from NWP Plumbing's Google Business Profile.

export type SuburbReview = { name: string; text: string }

const R = {
  narelle: { name: 'Narelle', text: 'Highly recommended plumber, without a doubt. Nathan was able to assist in my hour of need. He is the most professional, polite & helpful plumber in Southwest Sydney!' },
  glenn: { name: 'Glenn T.', text: "This guy's a legend. Had a problem, he came out same day and sorted it. Competitive price, highly recommend and will use again." },
  helen: { name: 'Helen C.', text: 'I found Nathan from the 5-star Google reviews and he deserves the high rating. His quotation was very transparent and he came promptly to fix plumbing issues another plumber failed to fix recently. Very clear communication, friendly and professional. Highly recommend, happy to add another 5 stars.' },
  roisin: { name: 'Roisin H.', text: 'Amazing service and perfectly priced. Nathan arrived same day and on time. Have used him multiple times, highly recommend.' },
  janelle: { name: 'Janelle', text: 'Fantastic service! Arrived on time, was friendly and professional and completed the job to a high standard. Great communication, fair pricing, and everything was left clean and tidy. I highly recommend and would definitely use again! Great job Nathan!' },
  suz: { name: 'Suz T.', text: 'Great experience with NWP Plumbing. They were quick, professional and easy to deal with. The work was done to a high standard and everything was left clean and tidy. Would definitely recommend!' },
  costa: { name: 'Costa', text: "It's refreshing to find a company that genuinely takes pride in their workmanship and customer service. Their hard work, attention to detail and honest approach really stood out. I wouldn't hesitate to recommend NWP Plumbing to anyone looking for reliable, high-quality plumbing services. Thanks again team!" },
  dale: { name: 'Dale M.', text: 'Recently installed my full home filtration. Great communication and honest pricing and service. Highly recommended' },
  jisha: { name: 'Jisha J.', text: 'Great service from start to finish. Reliable, efficient, and excellent workmanship. Highly recommend!' },
}

export type Suburb = {
  slug: string
  name: string
  council: string
  nearby: string[]
  local: string[]
  reviews: SuburbReview[]
}

export const SUBURBS: Record<string, Suburb> = {
  liverpool: {
    slug: 'liverpool', name: 'Liverpool', council: 'Liverpool City Council',
    nearby: ['Casula','Moorebank','Prestons','Warwick Farm','Chipping Norton','Lurnea','Cecil Hills','Hoxton Park','Edmondson Park'],
    local: [
      'Liverpool is home base for NWP Plumbing, so we are often only minutes away.',
      'The area mixes established brick homes with newer estates across the south-west. Older homes tend to need blocked sewer and hot water work, while newer builds are more often taps, toilets, fit-offs and filtration.',
    ],
    reviews: [R.narelle, R.glenn, R.roisin],
  },
  bankstown: {
    slug: 'bankstown', name: 'Bankstown', council: 'City of Canterbury-Bankstown',
    nearby: ['Yagoona','Punchbowl','Condell Park','Bass Hill','Greenacre','Revesby','Chester Hill','Birrong'],
    local: [
      'Many homes around Bankstown date from the post-war years, and their original clay sewer lines are prone to cracking and tree root intrusion.',
      'If a drain keeps blocking, we can run a CCTV camera through it to show you exactly what is going on, and price the fix, including no-dig pipe relining where it suits.',
    ],
    reviews: [R.narelle, R.helen, R.janelle],
  },
  strathfield: {
    slug: 'strathfield', name: 'Strathfield', council: 'Strathfield Municipal Council',
    nearby: ['Homebush','North Strathfield','Strathfield South','Burwood','Belfield','Enfield','Homebush West'],
    local: [
      'Strathfield has some of Sydney’s grandest older homes alongside busy apartment blocks near the station.',
      'Older homes often have ageing pipes, hot water systems past their best and big trees close to the drains. In apartments it is more often leaks, toilets, taps and hot water units.',
    ],
    reviews: [R.helen, R.costa, R.roisin],
  },
  stanmore: {
    slug: 'stanmore', name: 'Stanmore', council: 'Inner West Council',
    nearby: ['Newtown','Enmore','Petersham','Lewisham','Camperdown','Annandale','Summer Hill'],
    local: [
      'Stanmore’s Victorian terraces are full of character, and full of old plumbing: clay sewer lines, galvanised pipes and tight access under floors and down side lanes.',
      'We are used to working carefully in older homes, and you get a fixed itemised quote before we touch anything.',
    ],
    reviews: [R.suz, R.helen, R.costa],
  },
  'frenchs-forest': {
    slug: 'frenchs-forest', name: 'Frenchs Forest', council: 'Northern Beaches Council',
    nearby: ['Belrose','Davidson','Forestville','Killarney Heights','Allambie Heights','Beacon Hill','Oxford Falls'],
    local: [
      'Frenchs Forest is leafy, and big trees mean roots finding their way into sewer and stormwater lines.',
      'We use CCTV drain cameras to find the problem, and can offer no-dig pipe relining so you do not have to dig up the garden.',
    ],
    reviews: [R.glenn, R.janelle, R.jisha],
  },
  manly: {
    slug: 'manly', name: 'Manly', council: 'Northern Beaches Council',
    nearby: ['Fairlight','Balgowlah','Queenscliff','Freshwater','Manly Vale','Seaforth','Clontarf'],
    local: [
      'Salt air is hard on plumbing. Outdoor taps, fittings and hot water systems near the beach wear out faster than they do inland.',
      'From older units to family homes, we fix it properly and give you a fixed itemised quote before we start.',
    ],
    reviews: [R.suz, R.roisin, R.costa],
  },
  parramatta: {
    slug: 'parramatta', name: 'Parramatta', council: 'City of Parramatta',
    nearby: ['Harris Park','Westmead','North Parramatta','Rosehill','Granville','Northmead','Rydalmere','Oatlands'],
    local: [
      'Parramatta has everything from heritage cottages to high-rise apartments, and we work on both.',
      'For houses that is often blocked drains, hot water and gas work. For units and strata buildings it is usually leaks, toilets, taps and hot water units.',
    ],
    reviews: [R.helen, R.glenn, R.janelle],
  },
  blacktown: {
    slug: 'blacktown', name: 'Blacktown', council: 'Blacktown City Council',
    nearby: ['Seven Hills','Prospect','Doonside','Marayong','Kings Langley','Lalor Park','Quakers Hill','Kings Park'],
    local: [
      'Blacktown covers a huge spread of homes, from established streets near the station to newer estates further north and west.',
      'Hot water replacements, blocked drains and toilet and tap work make up a lot of the jobs out this way.',
    ],
    reviews: [R.roisin, R.glenn, R.jisha],
  },
  penrith: {
    slug: 'penrith', name: 'Penrith', council: 'Penrith City Council',
    nearby: ['Kingswood','Jamisontown','Emu Plains','Glenmore Park','South Penrith','Cambridge Park','St Marys','Werrington'],
    local: [
      'Penrith gets some of the hottest summers in Sydney, which is tough on outdoor pipes, fittings and hot water systems.',
      'Whether it is a blocked drain, a hot water system on its way out or a new bathroom, you get a fixed itemised quote before we start.',
    ],
    reviews: [R.glenn, R.roisin, R.suz],
  },
  fairfield: {
    slug: 'fairfield', name: 'Fairfield', council: 'Fairfield City Council',
    nearby: ['Fairfield West','Fairfield Heights','Canley Vale','Cabramatta','Smithfield','Wetherill Park','Bossley Park','Prairiewood'],
    local: [
      'Fairfield is just up the road from our Liverpool base, so we are often close by.',
      'Many homes here are older brick houses with original sewer lines, so blocked drains and hot water replacements are common. We also do gas fitting, renovations and filtration.',
    ],
    reviews: [R.narelle, R.janelle, R.dale],
  },
  'castle-hill': {
    slug: 'castle-hill', name: 'Castle Hill', council: 'The Hills Shire Council',
    nearby: ['Baulkham Hills','Cherrybrook','West Pennant Hills','Kellyville','Norwest','Glenhaven','Bella Vista'],
    local: [
      'Castle Hill is full of larger family homes with multiple bathrooms, big hot water demand and established gardens.',
      'That means plenty of hot water upgrades, bathroom renovations, whole-home filtration and the occasional root-blocked drain.',
    ],
    reviews: [R.dale, R.costa, R.helen],
  },
  hornsby: {
    slug: 'hornsby', name: 'Hornsby', council: 'Hornsby Shire Council',
    nearby: ['Waitara','Wahroonga','Asquith','Normanhurst','Mount Colah','Hornsby Heights','Thornleigh'],
    local: [
      'Hornsby and the upper North Shore are leafy, and big trees mean roots in sewer and stormwater lines.',
      'We use CCTV drain cameras to find the cause and can offer no-dig pipe relining, plus hot water, gas and bathroom work.',
    ],
    reviews: [R.helen, R.suz, R.jisha],
  },
}

export const SUBURB_LINKS: Record<string, string> = Object.fromEntries(
  Object.values(SUBURBS).map(s => [s.name, `/plumber-${s.slug}`])
)
