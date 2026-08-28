import type { RegionalTradition, Source } from './types';

export const REGIONAL_TRADITIONS: RegionalTradition[] = [
  {
    id: 'madhubani',
    name: 'Madhubani / Mithila',
    origin: 'Bihar – Nepal border',
    period: 'Attested since c. 14th c. CE',
    palette: ['#1a1a1a', '#c17f59', '#d4a574', '#b08d57', '#8b5a2b'],
    imagePrompt:
      'madhubani mithila painting peacock fish intricate line work vibrant color traditional bihar folk art museum detail dark background 4k',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Jadupatua_paintings_and_Madhubani_paintings.JPG',
    about:
      'Women\'s household and kohbar (wedding-chamber) mural tradition of Mithila. Transferred to paper from the 1960s onward. Styles: Bharni, Katchni, Tantrik, Godna, Kohbar.',
    themes: ['Krishna', 'Rama', 'Ganesha', 'Durga', 'Fish', 'Peacock', 'Lotus'],
  },
  {
    id: 'warli',
    name: 'Warli',
    origin: 'North Maharashtra (Thane – Palghar)',
    period: 'Ancient living tradition',
    palette: ['#a24b1e', '#f5ecd7'],
    imagePrompt:
      'warli painting tarpa dance circle stick figures red white square chauk maharashtra adivasi tribal art detail 4k dark background',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Warli_painting.jpg',
    about:
      'Adivasi ritual tradition of the Warli community — the lagna chauk (marriage square) and harvest scenes rendered in white rice paste on red cowdung walls.',
    themes: ['Tarpa Dance', 'Harvest', 'Hunting', 'Marriage', 'Fertility'],
  },
  {
    id: 'kalamkari',
    name: 'Kalamkari',
    origin: 'Andhra Pradesh — Machilipatnam & Srikalahasti',
    period: 'At least since 16th c. CE; traded by Europeans',
    palette: ['#4b2e83', '#8b0000', '#d4a574', '#2d5016'],
    imagePrompt:
      'kalamkari textile hand drawn painted cotton persian scroll pattern tree of life paisley andhra pradesh dark background detail 4k',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Kalamkari_painting.jpg',
    about:
      'Hand-painted and block-printed mordant-dyed cotton. A major export of the Coromandel coast; the freehand Srikalahasti style alternates with block-dominated Machilipatnam.',
    themes: ['Tree of Life', 'Ramayana', 'Mahabharata', 'Floral Scroll', 'Peacock'],
  },
  {
    id: 'pattachitra',
    name: 'Pattachitra',
    origin: 'Odisha — Puri, Raghurajpur',
    period: 'Attested since 12th c. CE',
    palette: ['#c1272d', '#2d5016', '#f3b70a', '#1a1a1a'],
    imagePrompt:
      'odisha pattachitra cloth painting jagannath triad ratha yatra decorative border odishan traditional rich colour detail dark background 4k',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Pattachitra_artist_at_work_in_Odisha%2C_India.jpg',
    about:
      'Pilgrim-souvenir cloth painting of the Jagannath cult. Chitrakara families also practice talapatra (palm-leaf) etching. Dense, saturated, bordered compositions.',
    themes: ['Jagannath', 'Krishna Lila', 'Dashavatar', 'Ten Incarnations', 'Puri Temple'],
  },
  {
    id: 'rajasthani',
    name: 'Rajasthani / Rajput Miniature',
    origin: 'Rajasthan — Mewar, Marwar, Bundi, Kishangarh',
    period: 'c. 1580 – 1850 CE',
    palette: ['#c1272d', '#2e4057', '#f3b70a', '#556b2f'],
    imagePrompt:
      'rajasthani miniature ragamala painting monsoon scene heroine pavam ragini mewar bold colour flat pigment indian art detail dark background 4k',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Maharana_Raj_Singh_II_%281751-61%29_of_Mewar_with_his_nobles_celebrating_Holi.jpg',
    about:
      'Rajput court painting that absorbed Mughal technique into a flatter, more brilliant, more mythologically centred idiom. Kishangarh\'s Bani-Thani face is world-famous.',
    themes: ['Ragamala', 'Krishna Lila', 'Baramasa', 'Court Portraits', 'Hunting'],
  },
  {
    id: 'pahari',
    name: 'Pahari Miniature',
    origin: 'Himachal Pradesh — Basohli, Guler, Kangra, Chamba',
    period: 'c. 1690 – 1850 CE',
    palette: ['#4c7b7b', '#f2d5a7', '#8b0000', '#556b2f'],
    imagePrompt:
      'pahari kangra miniature painting radha krishna in grove himalayan hills landscape soft lyrical line watercolour detail dark background 4k',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Krishna_demanding_moon_from_mother_Yashoda.jpg',
    about:
      'Hill-Rajput Vaishnava bhakti painting of extraordinary softness and lyricism, shaped by Mughal-trained painters migrating north and by the Himalayan landscape itself.',
    themes: ['Radha Krishna', 'Barahmasa', 'Bhagavata Purana', 'Kangra Landscape'],
  },
  {
    id: 'tanjore',
    name: 'Tanjore Painting',
    origin: 'Thanjavur, Tamil Nadu',
    period: '17th c. Nayaka / Maratha period onward',
    palette: ['#b08d57', '#c1272d', '#f5ecd7', '#2d5016', 'gold'],
    imagePrompt:
      'tanjore painting krishna with gopis gold leaf varak gesso work jewelled stone inlay tamil nadu traditional temple art dark background detail 4k',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Gajalakshmi_in_Tanjore_Painting.png',
    about:
      'Reliefed, gold-foiled, gem-set panel paintings for domestic shrines and temples. A Thanjavur specialty now massively practiced across South India.',
    themes: ['Lakshmi', 'Saraswati', 'Krishna', 'Murugan', 'Shiva Parvati'],
  },
];

export const SOURCES: Source[] = [
  { label: 'National Museum, New Delhi — Indus Valley, Buddhist, and Medieval Galleries', url: 'https://www.nationalmuseumindia.gov.in/' },
  { label: 'Archaeological Survey of India — Sanchi, Ajanta, and Khajuraho site pages', url: 'https://asi.nic.in/' },
  { label: 'Salar Jung Museum, Hyderabad — South Indian Bronzes collection', url: 'https://www.salarjungmuseum.in/' },
  { label: 'Government Museum, Chennai — Chola Bronzes gallery', url: 'https://www.chennaimuseum.gov.in/' },
  { label: 'Victoria and Albert Museum, London — Indian Miniatures and Kalamkari collections', url: 'https://www.vam.ac.uk/' },
  { label: 'British Museum, London — Gandhara and Mohenjo-daro collections', url: 'https://www.britishmuseum.org/' },
  { label: 'National Gallery of Modern Art, New Delhi — Modern Indian Painting', url: 'https://ngmaindia.gov.in/' },
  { label: 'Craven, Roy C. — Indian Art: A Concise History. Thames & Hudson, 1997.' },
  { label: 'Harle, J. C. — The Art and Architecture of the Indian Subcontinent. Penguin/Yale, 1994.' },
  { label: 'Beach, Milo Cleveland — Mughal and Rajput Painting. Cambridge University Press, 1992.' },
  { label: 'Kramrisch, Stella — The Art of India: Traditions of Indian Sculpture, Painting and Architecture. Phaidon, 1965.' },
  { label: 'Mitter, Partha — Indian Art. Oxford University Press, 2001.' },
];
