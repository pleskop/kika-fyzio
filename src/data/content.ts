export type Place = { num: string; title: string; text: string; meta: string; isNew?: boolean; bw?: boolean };
export const places: Place[] = [
  { num: '01', title: 'Ordinace', bw: true, text: 'Vstupní vyšetření, rozbor pohybu a manuální terapie v klidu ordinace.', meta: '[Adresa ordinace] · [den v týdnu]' },
  { num: '02', title: 'U vás doma', bw: true, text: 'Přijedu s lehátkem i pomůckami. Vidím vás v prostředí, kde se hýbete každý den.', meta: 'Praha a okolí · [pokrytí doplníme]' },
  { num: '03', title: 'Cvičení v posilovně', isNew: true, text: 'Aktivní terapie pod dohledem: návrat do formy po zranění, postupné zatěžování, prevence pro sportovce i pro ty, kdo chtějí konečně začít.', meta: '[Název a adresa posilovny] · [dny v týdnu]' },
];

export type Area = { key: string; title: string; text: string; cx: number; cy: number };
export const areas: Area[] = [
  { key: 'urazy', title: 'Stavy po úrazech a operacích', text: 'Obnova pohyblivosti, síly a stability postižené oblasti formou funkčních pohybových cviků a postupného zatížení. Kolena, ramena, kyčle, záda.', cx: 118, cy: 337 },
  { key: 'gyn', title: 'Gynekologická fyzioterapie', text: 'Bolestivá menstruace, bolesti pánve, mobilizace kostrče. Cviky pro uvolnění a posílení pánevního dna, spojené s relaxačními technikami.', cx: 100, cy: 208 },
  { key: 'prevence', title: 'Preventivní cvičení', text: 'Flexibilita, pohyblivost a rovnováha těla, aby bolesti zad a zranění vůbec nepřišly.', cx: 100, cy: 112 },
  { key: 'tehotenstvi', title: 'Cvičení v těhotenství', text: 'Bezpečné posilování a uvolnění těla, udržení stability s ohledem na změny během těhotenství.', cx: 100, cy: 166 },
  { key: 'seniori', title: 'Prevence u starších lidí', text: 'Rovnováha, koordinace, síla a mobilita, aby se snížilo riziko pádů a udržela samostatnost.', cx: 82, cy: 456 },
];

export const steps = [
  { title: 'Zavoláte nebo napíšete', text: 'Krátce probereme, co vás trápí, a domluvíme první termín.' },
  { title: 'Vstupní vyšetření', text: 'Šedesát minut jen pro vás: rozbor pohybu, vyšetření a společný plán. Vysvětlím, co se děje a proč.' },
  { title: 'Terapie a cvičení', text: 'Manuální techniky, cvičení pod dohledem a pár cviků na doma. Viditelný pokrok je společná práce.' },
];
export const stepsNote = 'Obvykle první termín do týdne, akutní stavy dřív.';

export const bio = [
  'Od dětství jsem závodně lyžovala a sport mě přivedl k fyzioterapii: chtěla jsem pochopit, jak tělo funguje, jak mu pomoci od bolesti a jak předcházet zraněním. Vystudovala jsem Fakultu tělesné výchovy a sportu Univerzity Karlovy a dál se pravidelně vzdělávám.',
  'Pracuji s dospělými a staršími klienty po úrazech, operacích i s chronickými potížemi. Velkou část mých klientek tvoří ženy, od těhotenství až po funkční obtíže v pozdějším věku. Ráda vyvracím mýty, že „něco nejde“ nebo „už se to nedá“. Nejraději mám viditelný pokrok, na kterém pracujeme společně.',
];

export type Course = { label: string; full?: string; edu?: boolean };
export const courses: Course[] = [
  { label: 'Mgr., FTVS UK Praha', edu: true },
  { label: 'DNS podle Koláře A až C', full: 'Dynamická neuromuskulární stabilizace podle P. Koláře, části A, B, C' },
  { label: 'Metoda Mojžíšové A až D', full: 'Rehabilitační léčba funkční ženské sterility metodou L. Mojžíšové, části A až D' },
  { label: 'Fyzioterapie těhotných', full: 'Fyzioterapie těhotných, Mgr. Veronika Čiháková' },
  { label: 'Kolenní kloub, Rehalab', full: 'Diagnostika a terapie kolenního kloubu, Rehalab Academy' },
  { label: 'Skoliózy', full: 'Diagnostika a terapie skolióz, Rehaeduca část A; Skolióza, Fit and Tasty' },
  { label: 'Tejpování', full: 'Základní kurz tejpování, Fixtape' },
];

export type Price = { title: string; note?: string; duration: string; amount: string; featured?: boolean; idea?: boolean };
export const prices: Price[] = [
  { title: 'Vstupní vyšetření', note: 'diagnostika a plán terapie', duration: '60 minut', amount: '1 400 Kč' },
  { title: 'Terapie v ordinaci', duration: '50 minut', amount: '1 200 Kč' },
  { title: 'Cvičení v posilovně', duration: '60 minut', amount: '1 200 Kč' },
  { title: 'Domácí návštěva', note: 'včetně dopravy po Praze', duration: '60 minut', amount: '1 500 Kč' },
  { title: 'Balíček 5 lekcí', note: 'platnost 3 měsíce, výhodnější než jednotlivě', duration: '5 × 60 minut', amount: '5 500 Kč', featured: true },
  { title: 'Cvičení 1+1', note: 'první lekce v posilovně pro dva za cenu jedné', duration: '60 minut', amount: '[nápad]', idea: true },
];
export const pricingNote = 'Ukázkové ceny, doplníme skutečné. Platba hotově nebo převodem.';

export const testimonials = [
  { name: 'Marcela', context: '[potíže / kontext]', quote: '[Dvě věty od Marcelky. Text doplníme.]', placeholder: true },
  { name: 'Lucie', context: '[potíže / kontext]', quote: '[Dvě věty od Lucky. Text doplníme.]', placeholder: true },
];

export const faq = [
  { q: 'Proplácí terapii zdravotní pojišťovna?', a: 'Ne, pracuji bez smluv s pojišťovnami. Výhodou je celá hodina jen pro vás, bez žádanky od lékaře a bez čekacích lhůt. Doklad o platbě vystavím, některé benefitní programy zaměstnavatelů fyzioterapii proplácejí.' },
  { q: 'Jak rychle se dostanu na termín?', a: 'Obvykle do jednoho týdne. Akutní stavy se snažím vzít dřív, zavolejte a domluvíme se.' },
  { q: 'Co si mám připravit na první návštěvu?', a: 'Pohodlné sportovní oblečení a případné lékařské zprávy (operační protokol, rentgen, magnetická rezonance). U domácí návštěvy stačí kousek volného místa na zemi, vše ostatní přivezu.' },
  { q: 'Kolik sezení budu potřebovat?', a: 'Záleží na potížích. Po vstupním vyšetření vám řeknu upřímný odhad, typicky 5 až 10 sezení, u dlouhodobých potíží déle. Terapii nikdy neprotahuji zbytečně.' },
  { q: 'Jak probíhá domácí návštěva?', a: 'Přijedu s přenosným lehátkem a cvičebními pomůckami. Terapie probíhá stejně jako v ordinaci, jen bez cestování a čekání. Vhodné i pro maminky s malými dětmi.' },
];
