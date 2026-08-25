export const site = {
  name: 'kika fyzio',
  owner: 'Mgr. Kristína Plesková',
  role: 'fyzioterapeutka',
  phone: '+420777101185',
  phoneDisplay: '+420 777 101 185',
  whatsapp: 'https://wa.me/420777101185',
  email: 'fyzioterapie.pleskova@gmail.com',
  city: 'Praha a okolí',
  ico: '[doplníme]',
  addresses: {
    office: { name: 'Ordinace', street: '[Ulice a číslo]', city: '[PSČ Praha]', hours: '[den v týdnu]' },
    gym: { name: 'Posilovna', street: '[Název a ulice]', city: '[PSČ Praha]', hours: '[dny v týdnu]' },
  },
  // Google Maps query for the office; a full address works best, e.g. 'Vinohradská 12, Praha'
  mapQuery: 'Praha',
  // Toggle sections until real content exists
  showPricing: true,
  showTestimonials: true,
  // Client confirms availability wording, or set to null to hide the chip
  availabilityChip: 'Volné termíny tento týden' as string | null,
  title: 'Kika Fyzio | Fyzioterapie v Praze, v ordinaci, u vás doma i v posilovně',
  description:
    'Mgr. Kristína Plesková, fyzioterapeutka. Individuální terapie po úrazech a operacích, prevence, gynekologická fyzioterapie a cvičení v těhotenství. Praha a okolí.',
};
