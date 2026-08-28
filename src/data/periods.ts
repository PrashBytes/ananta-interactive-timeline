import type { Period } from './types';

export const PERIODS: Period[] = [
  {
    id: 'period-1',
    number: 1,
    code: 'INDUS',
    title: 'INDUS VALLEY CIVILIZATION',
    subtitle: 'THE BEGINNING OF EXPRESSION',
    date: 'Approximately 2500 BCE',
    themeColor: '#d4a574',
    bgClass: 'period-bg-indus',
    heroArtifactId: 'dancing-girl',
    artifactIds: ['dancing-girl', 'indus-seal-pashupati', 'terracotta-figurine'],
    bodyText:
      'Along the banks of the Indus River, one of the world\'s earliest urban civilizations emerged. Cities like Mohenjo-daro and Harappa reveal a culture of extraordinary sophistication — planned streets, advanced drainage, and a material culture shaped by careful craft. Art here is not decoration alone; it is evidence of a society that could translate ritual, body, and animal world into bronze, fired clay, and engraved steatite.',
    secondaryText:
      'Lost-wax bronze casting had already been mastered. Seals bearing animal motifs and an undeciphered script were traded across long distances. Figurines speak of adornment, dance, and a rich inner life. The age of Indian artistic expression had begun.',
  },
  {
    id: 'period-2',
    number: 2,
    code: 'AJANTA',
    title: 'BUDDHIST & CLASSICAL INDIA',
    subtitle: 'STORIES CARVED INTO STONE',
    date: 'Approximately 200 BCE – 600 CE',
    themeColor: '#8b5a2b',
    bgClass: 'period-bg-ajanta',
    heroArtifactId: 'ajanta-padmapani',
    artifactIds: ['ajanta-padmapani', 'sanchi-stupa-toran', 'gandhara-buddha'],
    bodyText:
      'As empires rose and fell across the Gangetic plain, Indian art found monumental voice in stone. The Mauryan, Shunga, Satavahana, and Gupta periods saw the carving of Buddhist stupas, the excavation of cliff monasteries at Ajanta, and the codification of sculptural language that would carry the Buddha\'s story across Asia.',
    secondaryText:
      'Ajanta\'s painted caves are a time-capsule of narrative. Layer upon layer of pigment tell Jataka tales, royal processions, and the quiet introspection of bodhisattvas — all by the light of oil lamps deep inside volcanic rock.',
  },
  {
    id: 'period-3',
    number: 3,
    code: 'MEDIEVAL',
    title: 'TEMPLE & MEDIEVAL ART',
    subtitle: 'DIVINITY IN FORM',
    date: 'Approximately 600 – 1200 CE',
    themeColor: '#a87545',
    bgClass: 'period-bg-medieval',
    heroArtifactId: 'chola-nataraja',
    artifactIds: ['chola-nataraja', 'khajuraho-sculpture', 'hoysala-temple-carving'],
    bodyText:
      'Southern and central India flowered into an age of temples. Under the Pallavas, Cholas, Chalukyas, Pratiharas, and Hoysalas, stone became the body of gods — carved with breath-holding precision. Bronze, too, reached an apex in the Tamil country, where Chola craftsmen produced processional images that are arguably among the most accomplished metal sculptures in world history.',
    secondaryText:
      'Shiva as Nataraja, the Lord of Dance, crystallises a philosophical vision into bronze: creation, preservation, and destruction enacted within a ring of cosmic fire. Every gesture carries doctrine.',
  },
  {
    id: 'period-4',
    number: 4,
    code: 'MUGHAL',
    title: 'MUGHAL & COURTLY ART',
    subtitle: 'DETAIL, POWER & STORY',
    date: 'Approximately 1500 – 1800 CE',
    themeColor: '#b08d57',
    bgClass: 'period-bg-mughal',
    heroArtifactId: 'mughal-miniature-hunting',
    artifactIds: ['mughal-miniature-hunting', 'shah-jahan-padshahnama', 'pahari-krishna'],
    bodyText:
      'The Mughal courts of Akbar, Jahangir, and Shah Jahan fostered one of the great miniature painting traditions of the world. Persian techniques met Indian sensibility; Hindu painters worked alongside Muslim patrons. Chronicles, romances, poetic anthologies, and intimate portrait studies were painted in opaque watercolour and gold on wasli paper with brushes of single squirrel hair.',
    secondaryText:
      'Detail was a language of power. A single folio could bear hundreds of individually rendered faces, a landscape alive with birds, a garment stitched with invisible stitches of paint. Every leaf was a world.',
  },
  {
    id: 'period-5',
    number: 5,
    code: 'REGIONAL',
    title: 'REGIONAL PAINTING TRADITIONS',
    subtitle: 'A THOUSAND REGIONAL VOICES',
    date: 'Diverse: 1300 CE – Present',
    themeColor: '#c17f59',
    bgClass: 'period-bg-regional',
    heroArtifactId: 'madhubani-fish',
    artifactIds: [
      'madhubani-fish',
      'warli-marriage',
      'kalamkari-tree',
      'pattachitra-jagannath',
      'rajasthani-ragamala',
      'pahari-krishna',
      'tanjore-lakshmi',
    ],
    bodyText:
      'Beyond courts and capitals, every region of India developed its own painterly language. Bihar gave us Madhubani, painted on mud walls by women in household ritual. Maharashtra gave us Warli, a stick-figure universe of harvest and celebration. Andhra Pradesh has Kalamkari, Odisha has Pattachitra — cloth-based scrolls that double as liturgical objects. Rajasthan and the Pahari hills refined miniature painting beyond Mughal template.',
    secondaryText:
      'These traditions were never still. They absorbed new patrons, new pigments, new stories, and continue — in the hands of contemporary inheritors — to produce extraordinary work today.',
  },
  {
    id: 'period-6',
    number: 6,
    code: 'COLONIAL',
    title: 'COLONIAL & TRANSITIONAL INDIA',
    subtitle: 'TRADITION MEETS CHANGE',
    date: 'Approximately 1800 – 1947',
    themeColor: '#8c7b65',
    bgClass: 'period-bg-colonial',
    heroArtifactId: 'raja-ravi-varma-shakuntala',
    artifactIds: [
      'raja-ravi-varma-shakuntala',
      'company-painting-durga',
      'bengal-school-abanindranath',
    ],
    bodyText:
      'Colonial rule reshaped Indian art materially and conceptually. Company paintings — produced by Indian artists for British patrons — used European watercolour to record "native" costumes, festivals, and professions. Raja Ravi Varma combined academic oil technique with Indian mythological subjects, reaching a mass public through oleograph reproductions. The Bengal School, led by Abanindranath Tagore, sought to recover a "national" style by looking back to Ajanta and Mughal miniature.',
    secondaryText:
      'This was the age of the first art schools, of printing presses, of exhibitions, and of the beginning of a public for "art" as such in the modern sense. Old categories folded; new ones emerged.',
  },
  {
    id: 'period-7',
    number: 7,
    code: 'MODERN',
    title: 'MODERN & CONTEMPORARY INDIA',
    subtitle: 'THE STORY CONTINUES',
    date: '1947 – Present',
    themeColor: '#a69076',
    bgClass: 'period-bg-modern',
    heroArtifactId: 'amrita-sher-gil-self',
    artifactIds: ['amrita-sher-gil-self', 'mf-husain-mother', 'tyeb-mehta-kali'],
    bodyText:
      'Independence in 1947 unleashed furious creative energy. The Progressive Artists\' Group in Bombay — Husain, Gaitonde, Souza, Tyeb Mehta, Akbar Padamsee, K. H. Ara — rejected both colonial academism and nostalgic revival, drawing instead on European modernism, Indian visual memory, and the raw material of a young nation in motion.',
    secondaryText:
      'Contemporary Indian art today is global, polyphonic, and unclassifiable. It works in every medium. It asks urgent questions — of identity, caste, ecology, gender, nation. Its story is still being written.',
  },
];

export const PERIOD_MAP = new Map(PERIODS.map((p) => [p.id, p]));
export const FILTER_LABELS: Record<string, string> = {
  ALL: 'All',
  ANCIENT: 'Ancient',
  MEDIEVAL: 'Medieval',
  MUGHAL: 'Mughal',
  REGIONAL: 'Regional',
  MODERN: 'Modern',
};
