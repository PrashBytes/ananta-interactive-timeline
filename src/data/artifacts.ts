import type { Artifact } from './types';

export const ARTIFACTS: Artifact[] = [
  // ===== 01 INDUS VALLEY =====
  {
    id: 'dancing-girl',
    name: 'Dancing Girl of Mohenjo-daro',
    periodId: 'period-1',
    periodLabel: 'Indus Valley Civilization',
    periodShort: 'Ancient',
    category: 'ANCIENT',
    region: 'Mohenjo-daro, Sindh (present-day Pakistan)',
    material: 'Bronze',
    technique: 'Cire perdue (lost-wax) bronze casting, 10.8 cm high',
    year: 'c. 2500 BCE',
    imagePrompt:
      'ancient indus valley bronze dancing girl statue elegant slim figure bangles necklace confident pose warm dramatic museum lighting dark black background cinematic close-up 4k',
    about:
      'One of the most famous objects from the Indus Valley, the Dancing Girl is a small bronze statuette discovered in 1926 by Ernest Mackay during excavations at Mohenjo-daro. She stands in tribhanga (three-bend) pose, head tilted, right hand on hip, left hand hanging heavily ornamented with bangles. She wears a necklace with a central pendant and her hair is styled in a compact bun.',
    historicalContext:
      'The statuette is evidence of highly advanced metallurgy in the Bronze Age Indus cities. Lost-wax casting of this quality requires control of alloy, temperature, and ceramic mould-making that speaks of a specialised craft tradition. Her confident, almost audacious bearing has captivated viewers for nearly a century — Jawaharlal Nehru famously wrote of her as though she were a girl you might meet in a modern Indian street.',
    artisticSignificance:
      'The piece is remarkable for its naturalism, balance, and the way it translates bodily gesture into metal. The tribhanga posture — attested here remarkably early — will become one of the structural grammar of Indian sculpture for the next four millennia. She is early proof that Indian art is profoundly interested in the body as a carrier of feeling.',
  },
  {
    id: 'indus-seal-pashupati',
    name: 'Pashupati Seal (Mohenjo-daro)',
    periodId: 'period-1',
    periodLabel: 'Indus Valley Civilization',
    periodShort: 'Ancient',
    category: 'ANCIENT',
    region: 'Mohenjo-daro, Sindh',
    material: 'Steatite (engraved, fired)',
    technique: 'Engraved steatite seal with intaglio carving, approx. 3.6 cm',
    year: 'c. 2350 – 2000 BCE',
    imagePrompt:
      'ancient indus valley pashupati seal carved steatite yogi figure seated surrounded animals rhinoceros tiger buffalo deer museum macro warm lighting dark background cinematic 4k',
    about:
      'The Pashupati seal (National Museum, New Delhi) depicts a seated, horned, three-faced figure in yogic posture, surrounded by four wild animals — rhinoceros, buffalo, tiger, and elephant — with two deer beneath the stool. The upper edge carries seven script symbols.',
    historicalContext:
      'Marshall, one of the earliest excavators, identified the figure as a prototype of Shiva as Pashupati (Lord of Beasts) — an identification still debated. Regardless of specific identification, the seal demonstrates that yogic postures, horned deities, and a master-of-animals iconography were already present in the Indian subcontinent by the mid-third millennium BCE.',
    artisticSignificance:
      'Carved in miniature with extraordinary control, the seal shows composition in the round: the figure is central, the animals form a balancing frame, and the script sits as a deliberate decorative band. Thousands of seals have been found across Indus sites, and their standard of engraving suggests a class of expert lapidaries.',
  },
  {
    id: 'terracotta-figurine',
    name: 'Mother Goddess Terracotta Figurine',
    periodId: 'period-1',
    periodLabel: 'Indus Valley Civilization',
    periodShort: 'Ancient',
    category: 'ANCIENT',
    region: 'Harappa, Punjab (present-day Pakistan)',
    material: 'Terracotta, pigment traces',
    technique: 'Hand-modelled and appliqué terracotta, fired',
    year: 'c. 2700 – 2000 BCE',
    imagePrompt:
      'indus valley terracotta mother goddess figurine wide hips headdress fan shaped ceremonial ancient clay artifact warm museum light dark background cinematic 4k',
    about:
      'Terracotta figurines interpreted as "mother goddesses" are among the most numerous small finds at Harappan sites. They typically have stylised faces, wide hips, elaborate fan-shaped headdresses, pendant breasts, and sometimes traces of red pigment.',
    historicalContext:
      'Their abundance and contexts of deposition suggest they played a role in household or popular ritual, though their exact function remains open. Parallels with contemporary Near Eastern figurines have been noted, but the Harappan type is distinctive in morphology.',
    artisticSignificance:
      'The figurines rely not on naturalism but on a powerful vocabulary of sign: the headdress, the girdle, the eyes. They remind us that Indian art from its beginnings operated through symbol as much as through mimesis.',
  },

  // ===== 02 BUDDHIST & CLASSICAL =====
  {
    id: 'ajanta-padmapani',
    name: 'Padmapani Bodhisattva (Ajanta, Cave 1)',
    periodId: 'period-2',
    periodLabel: 'Buddhist & Classical India',
    periodShort: 'Ancient',
    category: 'ANCIENT',
    region: 'Ajanta, Maharashtra',
    material: 'Tempera (natural pigments) on plaster',
    technique: 'Secco fresco technique on earthen lime-plaster, mural',
    year: 'c. 460 – 480 CE (Vakataka period)',
    imagePrompt:
      'ajanta cave painting padmapani bodhisattva holding lotus calm serene face warm ochre tones dark cave background exquisite detail mural cinematic lighting 4k',
    about:
      'Padmapani — the Bodhisattva who holds a blue lotus — is the central figure on the left wall of the antechamber of Cave 1 at Ajanta. Painted in the final campaign of the site sponsored by the Vakataka king Harishena, he stands in gentle tribhanga, eyes half-closed, offering the lotus of awakening.',
    historicalContext:
      'Ajanta was abandoned shortly after 480 CE, its caves reclaimed by forest until rediscovery by a British hunting party in 1819. The Padmapani became, through 20th-century reproductions, an icon of Indian "classical" art and was mobilised by the Bengal School and nationalist thinkers as evidence of a golden age.',
    artisticSignificance:
      'The painting demonstrates the mature Ajanta convention: modelling through graded flesh tones, a strong linear armature, and a sense of interior psychology achieved through slight inclinations of the head and eye. The crown, jewelry, and garment are rendered with extraordinary economy.',
  },
  {
    id: 'sanchi-stupa-toran',
    name: 'Sanchi Stupa — Eastern Torana (Gateway)',
    periodId: 'period-2',
    periodLabel: 'Buddhist & Classical India',
    periodShort: 'Ancient',
    category: 'ANCIENT',
    region: 'Sanchi, Madhya Pradesh',
    material: 'Sandstone',
    technique: 'Relief carving on dressed sandstone pillars and architraves',
    year: 'c. 1st century BCE – early 1st century CE (Satavahana / Shunga)',
    imagePrompt:
      'sanchi stupa eastern torana gateway intricate stone carvings buddhist reliefs jataka tales sandstone warm sunset light ancient indian monument cinematic 4k',
    about:
      'The four toranas (gateways) of the Great Stupa at Sanchi are the single most important surviving body of early Indian narrative relief. The Eastern gateway depicts the Great Departure of the Buddha, the visit of Indra and Brahma, and the dream of Queen Maya, among other scenes.',
    historicalContext:
      'The stupa was founded by Ashoka in the 3rd century BCE, but the four gateways were added in the late centuries BCE / early CE by Satavahana-period donors — merchants, guilds, monks, and queens, as inscriptions record.',
    artisticSignificance:
      'Aniconic convention is fully in evidence: the Buddha is represented not as a human figure but through a footprint, an empty throne, a parasol, a wheel of law. The reliefs show a sophisticated grammar of composition, with multiple registers, diagonal movement, and crowd scenes that reward slow looking.',
  },
  {
    id: 'gandhara-buddha',
    name: 'Gandharan Standing Buddha (Schist)',
    periodId: 'period-2',
    periodLabel: 'Buddhist & Classical India',
    periodShort: 'Ancient',
    category: 'ANCIENT',
    region: 'Gandhara (present-day northwest Pakistan / eastern Afghanistan)',
    material: 'Blue-gray mica schist',
    technique: 'High relief carving in schist, with traces of gilding',
    year: 'c. 2nd – 3rd century CE (Kushan period)',
    imagePrompt:
      'gandhara standing buddha statue schist stone wavy drapery robes serene mediterranean facial features ancient kushan art museum dark background cinematic 4k',
    about:
      'This is an example of the Gandharan Buddha type that flourished under the Kushan empire. The figure stands with feet slightly apart, right hand raised in abhaya mudra, dressed in heavy monastic robes rendered with deep, regular folds reminiscent of Hellenistic and Roman sculptural traditions.',
    historicalContext:
      'Gandhara sat at the eastern end of long-distance transregional networks that brought Mediterranean, Iranian, and Central Asian visual cultures into contact with Indian Buddhist iconography. The result was one of the first anthropomorphic Buddha images — developed roughly contemporaneously with, but stylistically distinct from, the Mathura school.',
    artisticSignificance:
      'Gandhara contributed to Indian art a vocabulary of drapery and a mode of representing the hair as tight wavy curls that spread across Buddhist Asia. It remains a classic example of the hybridity that has always characterised Indian art.',
  },

  // ===== 03 MEDIEVAL TEMPLE =====
  {
    id: 'chola-nataraja',
    name: 'Chola Bronze – Shiva Nataraja',
    periodId: 'period-3',
    periodLabel: 'Temple & Medieval Art',
    periodShort: 'Medieval',
    category: 'MEDIEVAL',
    region: 'Tamil Nadu (Chola kingdom)',
    material: 'Copper-alloy bronze (panchaloha tradition)',
    technique: 'Lost-wax (cire perdue) hollow-cast processional bronze',
    year: 'c. 10th – 11th century CE',
    imagePrompt:
      'chola bronze shiva nataraja lord of dance cosmic fire ring four arms elegant proportions ancient tamil bronze sculpture dramatic warm museum lighting dark background 4k',
    about:
      'Shiva Nataraja dances within a prabhamandala (ring of flame). His four arms carry the damaru (drum of creation), the agni (fire of destruction), the abhaya mudra (fearlessness), and the gajahasta (elephant trunk gesture) pointing to his lifted foot. Under his right foot he crushes the demon of ignorance, Apasmara.',
    historicalContext:
      'The Nataraja iconography crystallised in the Tamil country under the Cholas, who were great patrons of both temple building and bronzeworking. The iconicity of the Chola Nataraja in modern times was cemented by Ananda Coomaraswamy\'s writings and by its adoption as a symbol of Indian cultural identity worldwide.',
    artisticSignificance:
      'The bronze translates doctrine into form. Every angle, gesture, and ornament carries a precise Shaiva Siddhanta philosophical meaning — yet the sculpture also works purely as rhythm: the circle of the fire, the arc of the arms, the balanced lift of the leg produce an image of perfect, and perfectly stilled, motion.',
  },
  {
    id: 'khajuraho-sculpture',
    name: 'Khajuraho — Sandstone Mithuna Relief',
    periodId: 'period-3',
    periodLabel: 'Temple & Medieval Art',
    periodShort: 'Medieval',
    category: 'MEDIEVAL',
    region: 'Khajuraho, Madhya Pradesh (Chandella dynasty)',
    material: 'Fine-grained sandstone',
    technique: 'Deep relief carving, polished finish',
    year: 'c. 950 – 1050 CE',
    imagePrompt:
      'khajuraho temple sandstone sculpture mithuna couple intimate embrace delicate carving ancient erotic art indian heritage warm side light dark background 4k',
    about:
      'The Chandella temples at Khajuraho are famous for their profuse external sculptural programmes, which include deities, attendants, sages, celestial musicians, and the celebrated mithuna (loving couple) and maithuna (erotic) reliefs.',
    historicalContext:
      'Once part of a large complex of some 85 temples, the surviving 25 Khajuraho temples span Hindu and Jain traditions. Colonial-era viewers tended to read the erotic reliefs either as scandalous or as "temple pornography"; modern scholarship situates them within tantric, ritual, and royal ceremonial contexts.',
    artisticSignificance:
      'What distinguishes Khajuraho sculpture is its extraordinary sense of bodily fullness, the way figures press forward out of the stone as though generated from within. The treatment of skin, hair, ornament, and gaze reveals a culture of seeing the body as itself a religiously significant medium.',
  },
  {
    id: 'hoysala-temple-carving',
    name: 'Hoysala Temple — Belur Chennakeshava Carving',
    periodId: 'period-3',
    periodLabel: 'Temple & Medieval Art',
    periodShort: 'Medieval',
    category: 'MEDIEVAL',
    region: 'Belur, Karnataka (Hoysala dynasty)',
    material: 'Chloritic schist (soft greenish soapstone)',
    technique: 'Extremely fine high relief carving, drill work, lathe-turned pillars',
    year: 'c. 1117 – 13th century CE',
    imagePrompt:
      'hoysala temple intricate carvings belur chennakeshava temple soapstone relief madanika bracket figure beautiful detail indian karnataka art warm light 4k',
    about:
      'The Chennakeshava temple at Belur, consecrated 1117 CE, is the signature work of the Hoysala dynasty. Its external walls and interior are carved to an almost lace-like density, featuring madanika (celestial maiden) bracket figures, narrative friezes of the Ramayana and Mahabharata, and miniature decorative motifs.',
    historicalContext:
      'Hoysala patronage produced a distinctive architectural idiom — the star-shaped jagati platform, the Bhumija and Nagara variants, the use of soft chloritic schist that permitted carving of almost microscopic detail.',
    artisticSignificance:
      'Hoysala sculpture invites a tactile relation to stone. The deep undercutting, the play of light through perforated layers, and the repetition of small motifs create a visual richness that is unique to the school. The madanika figures are considered among the most accomplished female figures in Indian art.',
  },

  // ===== 04 MUGHAL =====
  {
    id: 'mughal-miniature-hunting',
    name: 'Mughal Miniature — Emperor Akbar Hunting',
    periodId: 'period-4',
    periodLabel: 'Mughal & Courtly Art',
    periodShort: 'Mughal',
    category: 'MUGHAL',
    region: 'Sub-Imperial Mughal atelier, probably Agra / Fatehpur Sikri',
    material: 'Opaque watercolour and gold on wasli paper',
    technique: 'Mughal miniature painting with Persian-influenced brushwork',
    year: 'c. 1580 – 1590 CE (Akbar period)',
    imagePrompt:
      'mughal miniature painting emperor akbar hunting scene horses elephants falcons rich gold border persian mughal court art dark background exquisite detail cinematic 4k',
    about:
      'A folio from a dispersed hunting manuscript, this painting depicts Akbar on horseback in a galloping hunt, surrounded by retainers, beaters, and elephants. The composition combines Persian spatial convention with the close observation of animal and human physiognomy characteristically Mughal.',
    historicalContext:
      'Akbar\'s atelier, the Tasvir Khana, employed dozens of painters — many of them Hindu — and produced illustrated manuscripts at an extraordinary rate: the Hamzanama alone ran to 1400 large paintings. Mughal patronage thus fused Persian literary and painterly tradition with Indian talent and material.',
    artisticSignificance:
      'The hunting scene demonstrates Mughal pictorial priorities: action, psychological portraiture, individualised animal study, and the use of atmospheric recession handled through graded colour and softened line. Gold and lapis lazuli pigments signal the imperial status of the manuscript.',
  },
  {
    id: 'shah-jahan-padshahnama',
    name: 'Padshahnama Folio — Coronation of Shah Jahan',
    periodId: 'period-4',
    periodLabel: 'Mughal & Courtly Art',
    periodShort: 'Mughal',
    category: 'MUGHAL',
    region: 'Imperial Mughal workshop, Shahjahanabad / Agra',
    material: 'Opaque watercolour, gold, and ink on paper',
    technique: 'Court manuscript illustration with lavish gold illumination',
    year: 'c. 1630 – 1650 CE',
    imagePrompt:
      'padshahnama manuscript painting coronation of shah jahan mughal court peacock throne courtiers gold leaf illumination persian calligraphy dark background cinematic 4k',
    about:
      'The Padshahnama (Book of Emperors) is the official illustrated chronicle of Shah Jahan\'s reign. This folio shows the emperor enthroned within the Diwan-i-Khas, receiving courtiers, with the imperial Mughal standards and a richly patterned pavilion setting.',
    historicalContext:
      'Two major illustrated Padshahnama manuscripts were produced under Shah Jahan. One is dispersed; the other is in the Royal Collection, Windsor. Together they are the most complete visual record of the Mughal court at the apogee of its wealth and architectural ambition — roughly contemporary with the building of the Taj Mahal.',
    artisticSignificance:
      'Shah Jahan period painting is characterised by a stricter sense of order, architectural recession, and a more restrained palette than the Akbar-period style. Individual portraits are extraordinarily precise, and the depiction of textiles and jewels is rendered with jeweller-like care.',
  },
  {
    id: 'pahari-krishna',
    name: 'Pahari Miniature — Krishna Lifting Govardhan Hill',
    periodId: 'period-4',
    periodLabel: 'Mughal & Courtly Art',
    periodShort: 'Mughal',
    category: 'MUGHAL',
    region: 'Guler / Kangra (Pahari hills, present-day Himachal Pradesh)',
    material: 'Opaque watercolour on paper',
    technique: 'Kangra school Pahari miniature painting',
    year: 'c. 1775 – 1790 CE',
    imagePrompt:
      'pahari kangra miniature painting krishna lifting govardhan hill cows gopis green landscape soft lyrical indian himalayan art dark background cinematic 4k',
    about:
      'The subject: Krishna holds aloft the mountain Govardhana with one finger to shelter the cowherds of Vraja from the wrath of Indra\'s rains. Painted in the Guler-Kangra manner, this is one of the staples of Pahari Vaishnava painting commissioned by Rajput courts.',
    historicalContext:
      'From the mid-18th century, painters of Mughal background moved to the hill courts of the Punjab Himalayas. Combined with a strong Vaishnava bhava literary culture and a new engagement with landscape, they produced what is known as the Pahari school — Guler, Kangra, Chamba, Basohli being the most prominent sub-styles.',
    artisticSignificance:
      'Pahari painting achieves, within a very small scale, an extraordinary atmosphere: the hills and rivers of the painting are the Himalayan landscape the painters knew, and the mood of the bhakti (devotional) poetry is translated into the soft, almost trembling treatment of faces, hands, and greens.',
  },

  // ===== 05 REGIONAL TRADITIONS =====
  {
    id: 'madhubani-fish',
    name: 'Madhubani / Mithila Painting — Fish and Lotus',
    periodId: 'period-5',
    periodLabel: 'Regional Painting Traditions',
    periodShort: 'Regional',
    category: 'REGIONAL',
    region: 'Mithila (Bihar / Nepal border region)',
    material: 'Natural and synthetic pigments on handmade paper (traditionally on wall / cowdung plaster)',
    technique: 'Line work in black, filled with flat colour; done by women painters; kohbar / bharni style',
    year: 'Living tradition; attested from at least 14th c. CE; 20th c. paper-based revival',
    imagePrompt:
      'madhubani mithila painting fish lotus intricate black line work vibrant colours folk art bihar indian traditional art dark background cinematic 4k',
    about:
      'Madhubani painting (also called Mithila painting) is a women\'s painting tradition from the Bihar-Nepal borderlands, historically practiced as household and wedding (kohbar) art on mud and plaster walls. The fish is a standard symbol of prosperity, fertility, and auspiciousness; the lotus stands for creation and beauty.',
    historicalContext:
      'After the Bihar earthquake of 1934, British colonial officials documented the murals, bringing Madhubani to wider notice. From the 1960s onward, encouraged by state patronage and the All India Handicrafts Board, the tradition moved to paper, enabling its circulation as a national and international "craft-art" form.',
    artisticSignificance:
      'Madhubani uses a distinctive visual grammar: a strong black grid of contour lines, double-lined borders, stylised eyes, geometricised nature, and very little shading or perspective. Regional sub-styles (Bharni, Katchni, Tantrik, Godna, Kohbar) are named for their technique and content.',
  },
  {
    id: 'warli-marriage',
    name: 'Warli Painting — Marriage Ceremony (Lagna Chauk)',
    periodId: 'period-5',
    periodLabel: 'Regional Painting Traditions',
    periodShort: 'Regional',
    category: 'REGIONAL',
    region: 'Thane / Palghar district, Maharashtra',
    material: 'White rice paste (traditionally) on terracotta-red cowdung-plastered wall',
    technique: 'Stick-figure drawing with chequered chauk patterns, women\'s ritual painting',
    year: 'Ancient living tradition; 20th century transition to paper and canvas',
    imagePrompt:
      'warli painting stick figures marriage ceremony lagna chauk red white tarpa dance circle traditional maharashtra tribal folk art dark background cinematic 4k',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Warli_painting.jpg',
    about:
      'Warli painting is a ritual art of the Warli adivasi community of north Maharashtra. The central lagna chauk (wedding square) is painted by the suvasini (married woman painter) and is surrounded by scenes of domestic life, harvest, hunting, and the tarpa dance circle.',
    historicalContext:
      'Warli was one of the first Adivasi art forms to be ethnographically documented — most influentially by Balasaheb Sadashiv Pendse in the 1930s. After the 1970s, artists such as Jivya Soma Mashe brought Warli to a national gallery audience, transforming it from ephemeral wall ritual to durable fine art.',
    artisticSignificance:
      'Strict two-dimensionality, consistent vocabulary of form (triangular torso, circular head, linear limb), and a visual economy that translates complex ritual events into readable pattern. The style has become globally iconic of "Indian tribal art".',
  },
  {
    id: 'kalamkari-tree',
    name: 'Kalamkari — Tree of Life Panel',
    periodId: 'period-5',
    periodLabel: 'Regional Painting Traditions',
    periodShort: 'Regional',
    category: 'REGIONAL',
    region: 'Machilipatnam / Srikalahasti, Andhra Pradesh',
    material: 'Cotton fabric; natural mordant-dyed (indigo, madder, myrobalan)',
    technique: 'Freehand kalam (pen) drawing + resist and mordant dyeing; block-printed variant',
    year: 'Living tradition; Dutch and British East India trade records from 17th century onward',
    imagePrompt:
      'kalamkari tree of life hand painted cotton fabric indigo madder red natural dyes persian andhra pradesh textile art pattern detail dark background 4k',
    about:
      'Kalamkari is a hand-painted and block-printed textile tradition of Andhra Pradesh. The Srikalahasti style is hand-drawn with a kalam (bamboo pen), while the Machilipatnam style uses more block-print. The "Tree of Life" motif, peacock, floral scrolling, and Hindu mythological panels are standard.',
    historicalContext:
      'Kalamkari textiles were a major export of the Coromandel coast, traded extensively by the Dutch, English, and Portuguese companies into Europe and Southeast Asia. The technique of mordant painting on cloth has a much longer history attested in the Ajanta caves, where dyed cotton hangings are shown in murals.',
    artisticSignificance:
      'Kalamkari bridges painting and textile. The long discipline of dye chemistry and repeated washes produces a depth of colour and a softness of edge that distinguishes kalamkari from printed cottons. The Tree of Life panel, in particular, demonstrates a mastery of overall pattern while preserving individual botanical intelligibility.',
  },
  {
    id: 'pattachitra-jagannath',
    name: 'Pattachitra — Jagannath, Balabhadra, Subhadra',
    periodId: 'period-5',
    periodLabel: 'Regional Painting Traditions',
    periodShort: 'Regional',
    category: 'REGIONAL',
    region: 'Puri / Raghurajpur, Odisha',
    material: 'Natural pigments on cotton or tassar silk cloth, sized with tamarind and chalk',
    technique: 'Odisha Pattachitra tradition: prepared cloth, fine line, opaque colour',
    year: 'Living tradition; textual references to Patachitra from 12th c. CE onward',
    imagePrompt:
      'odisha pattachitra painting jagannath balabhadra subhadra puri jagannath ratha yatra traditional indian cloth painting vibrant colours dark background cinematic 4k',
    about:
      'Patta (cloth) chitra (picture) of Odisha is closely tied to the Jagannath cult of Puri. This triad shows the central deities of the temple: Jagannath (Krishna, dark and wide-eyed), his brother Balabhadra (white), and sister Subhadra (yellow).',
    historicalContext:
      'Pattachitras were originally produced as souvenirs for pilgrims visiting the Jagannath temple. Painter families (Chitrakaras) of Raghurajpur and nearby villages continue a hereditary tradition of both painting and palm-leaf etching (talapatra).',
    artisticSignificance:
      'The style is immediately recognisable: oval eyes, strong black outline, flat but saturated colour, ornate decorative borders, and a convention of filling every inch of cloth. The cloth preparation itself — with layers of chalk and gum — gives the final painting a hard, leathery surface that has allowed some works to survive for centuries.',
  },
  {
    id: 'rajasthani-ragamala',
    name: 'Rajasthani Miniature — Ragini Malashri (Ragamala Series)',
    periodId: 'period-5',
    periodLabel: 'Regional Painting Traditions',
    periodShort: 'Regional',
    category: 'REGIONAL',
    region: 'Mewar / Marwar, Rajasthan',
    material: 'Opaque watercolour on paper, possibly with gold',
    technique: 'Rajput miniature painting',
    year: 'c. 1650 – 1720 CE',
    imagePrompt:
      'rajasthani miniature painting ragamala series ragini malashri heroine mango tree monsoon scene mewar marwar indian art dark background cinematic 4k',
    about:
      'Ragamala ("garland of ragas") sets depict musical modes (ragas and raginis) as personified moods or landscape scenes — the visual corollary of Indian classical music. Malashri, a raga of passion and beauty, is typically shown with a heroine under a mango tree, sometimes with attendants.',
    historicalContext:
      'Rajput painting emerged in the 16th–17th centuries across the kingdoms of Rajasthan (Mewar, Marwar, Bundi, Kotah, Kishangarh) and the Malwa and Bundelkhand regions. It absorbed Mughal influences but retained strong roots in indigenous manuscript and wall painting traditions.',
    artisticSignificance:
      'The Rajasthani miniature is distinguished by its flatness, brilliant unmodulated pigment, and highly charged decorative colour — often dominated by a single hue such as yellow-orange or deep indigo. Space is layered rather than recessed: every element participates in an overall design.',
  },
  {
    id: 'tanjore-lakshmi',
    name: 'Tanjore Painting — Goddess Lakshmi',
    periodId: 'period-5',
    periodLabel: 'Regional Painting Traditions',
    periodShort: 'Regional',
    category: 'REGIONAL',
    region: 'Thanjavur, Tamil Nadu',
    material: 'Paste board, gesso, gold leaf, semi-precious stones, watercolour',
    technique: 'Relief gesso work, 24k gold foil (varak), stone inlay, glass detailing',
    year: 'Living tradition; classical form 18th – 19th century under Maratha patronage at Tanjore',
    imagePrompt:
      'tanjore painting goddess lakshmi rich gold leaf gesso work semi precious stones inlay ornate frame tamil nadu traditional art dark background cinematic 4k',
    about:
      'A Tanjore painting of Goddess Lakshmi seated, flanked by elephants that lustrate her (gaja-lakshmi), with a traditional arched frame (prabhavali), richly decorated sari, and extensive gold-foil ornamentation inset with rubies, emeralds, and pearls (real or glass).',
    historicalContext:
      'The Tanjore painting school flourished under the Nayaka and later the Maratha rulers of Thanjavur in Tamil Nadu. Painter families (most famously the Madras-based J. S. K. family in the 19th century) supplied works to temples, courts, and increasingly, domestic shrines. The style has undergone a massive revival in South India from the late 20th century.',
    artisticSignificance:
      'Tanjore painting is one of the few Indian traditions where relief, jewel, and gold work are integral to the image rather than an afterthought. The characteristic thickness of the Tanjore panel comes from its paste-board base and repeated sizing, and the light-catching surface of the gold leaf was designed for oil-lamp interiors.',
  },

  // ===== 06 COLONIAL =====
  {
    id: 'raja-ravi-varma-shakuntala',
    name: 'Raja Ravi Varma — Shakuntala Looking for Dushyanta',
    periodId: 'period-6',
    periodLabel: 'Colonial & Transitional India',
    periodShort: 'Modern',
    category: 'MODERN',
    region: 'Kerala / Baroda / Bombay',
    material: 'Oil on canvas',
    technique: 'European academic realist style, oil painting',
    year: 'c. 1870s – 1880s',
    imagePrompt:
      'raja ravi varma painting shakuntala romantic heroine forest soft light drapery academic realism 19th century indian modern art dark background cinematic 4k',
    about:
      'Shakuntala is one of Raja Ravi Varma\'s best-known subjects — the heroine of Kalidasa\'s Abhijnanasakuntalam shown pining in the forest for her husband Dushyanta. Ravi Varma painted multiple versions.',
    historicalContext:
      'Raja Ravi Varma of Kilimanoor (Kerala, 1848–1906) was the most celebrated Indian painter of his age. Trained in the Trivandrum palace atelier and later in British academic technique, he won prizes at Vienna and Chicago. His press at Lonavla mass-produced oleographs of mythological subjects, making them the default popular Hindu "calendar art" visual language for the twentieth century.',
    artisticSignificance:
      'Ravi Varma\'s project was ambitious: to render the Indian past in a fully European academic-realist idiom of draped flesh, chiaroscuro, and landscape. He was both praised as a "Raja of painters" and criticised by later nationalists and modernists (notably the Bengal School) for what they saw as a Westernisation of Indian sensibility.',
  },
  {
    id: 'company-painting-durga',
    name: 'Company Painting — Durga Puja Festival, Calcutta',
    periodId: 'period-6',
    periodLabel: 'Colonial & Transitional India',
    periodShort: 'Modern',
    category: 'MODERN',
    region: 'Kalighat / Calcutta, Bengal',
    material: 'Translucent watercolour on paper',
    technique: 'Indo-British Company School painting on European paper',
    year: 'c. 1820 – 1860 CE',
    imagePrompt:
      'company painting durga puja festival calcutta watercolour 19th century british colonial india bengal tradition dark background cinematic 4k',
    about:
      'A typical Company School drawing: a scene from Durga Puja in a Bengal courtyard, rendered in the thin, precise, slightly anaemic watercolour that British administrators and East India Company officials commissioned. The Durga image with lion, Mahishasura, and attendant children is the central icon.',
    historicalContext:
      'Company painting was a broad genre of Indian-made pictures for Europeans, produced across India from the mid-18th century to the late 19th. The Patna, Lucknow, Calcutta, and Madras schools each produced distinct varieties. The Calcutta company painters often doubled as Kalighat pata artists or vice versa.',
    artisticSignificance:
      'Company painting sits at the intersection of two systems of representation. It takes from British topographical and natural-history illustration the medium of European paper and watercolour, and from Indian painting the conventions of figure grouping, flat local colour, and outline. The result is an invaluable visual archive of Indian social life before photography.',
  },
  {
    id: 'bengal-school-abanindranath',
    name: 'Abanindranath Tagore — Bharat Mata (Mother India)',
    periodId: 'period-6',
    periodLabel: 'Colonial & Transitional India',
    periodShort: 'Modern',
    category: 'MODERN',
    region: 'Calcutta (Kolkata), Bengal',
    material: 'Wash and tempera on paper',
    technique: 'Bengal School wash-influenced painting; Ajanta and Japanese Nihonga inspired',
    year: 'c. 1905 CE',
    imagePrompt:
      'abanindranath tagore bharat mata mother india painting bengal school nationalist art soft watercolour wash 1905 swadeshi india dark background cinematic 4k',
    about:
      'Abanindranath Tagore\'s Bharat Mata depicts Mother India as a four-armed female ascetic-scholar figure, saffron-robed, holding a mala, a book, sheaves of paddy, and a white cloth. The painting was produced in the context of the 1905 Swadeshi movement against the Partition of Bengal.',
    historicalContext:
      'Abanindranath (1871–1951), nephew of Rabindranath Tagore, founded the Bengal School of Indian painting as an explicit reaction both to Ravi Varma\'s academicism and to the colonial art school system. Under the influence of E. B. Havell and the Japanese painter Okakura Kakuzo, he developed a nationalist "Indian style" drawn from Ajanta, Mughal, Pahari, and Japanese Nihonga precedents.',
    artisticSignificance:
      'Bharat Mata instantly became one of the most iconic images of Indian nationalism. More broadly, the Bengal School created the very category of "modern Indian art" that would be institutionalised through the Kala Bhavana in Santiniketan and the Government School of Art in Calcutta.',
  },

  // ===== 07 MODERN =====
  {
    id: 'amrita-sher-gil-self',
    name: 'Amrita Sher-Gil — Self-Portrait',
    periodId: 'period-7',
    periodLabel: 'Modern & Contemporary India',
    periodShort: 'Modern',
    category: 'MODERN',
    region: 'Paris / Simla / Lahore',
    material: 'Oil on canvas',
    technique: 'Post-Impressionist and early modern European-inspired oil painting',
    year: 'c. 1931 – 1937 CE',
    imagePrompt:
      'amrita sher gil self portrait oil on canvas intense gaze dark hair modern indian art 1930s paris influenced dark background cinematic 4k',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/b/bf/Amrita_Sher-Gil_Self-portrait.jpg',
    about:
      'Amrita Sher-Gil (1913–1941) produced dozens of self-portraits between her late teens and her death at twenty-eight. This example — intense gaze, direct address, heavy impasto, a palette of red and brown — is characteristic of her work of the early 1930s after her training at the École des Beaux-Arts in Paris.',
    historicalContext:
      'Born in Budapest to an Indian Sikh aristocrat father and a Hungarian-Jewish mother, Sher-Gil studied painting in Paris, where she was exhibited at the Salon before returning to India in 1934. Her "Indian period" paintings of village women and rural life are considered foundational to Indian modernism.',
    artisticSignificance:
      'Sher-Gil is often called the "Frida Kahlo of India," though her own pictorial lineage traces to Gauguin, Cézanne, and early Matisse. More than any painter of her generation she demonstrated that an Indian modernism could be fully cosmopolitan without either Ravi-Varma-style illusionism or Bengal-School-style nationalism.',
  },
  {
    id: 'mf-husain-mother',
    name: 'M. F. Husain — Mother Teresa / Mother Figure',
    periodId: 'period-7',
    periodLabel: 'Modern & Contemporary India',
    periodShort: 'Modern',
    category: 'MODERN',
    region: 'Bombay (Mumbai)',
    material: 'Acrylic and oil on canvas',
    technique: 'Progressive Artists Group idiom; bold line, flat colour, calligraphic brushwork',
    year: 'c. 1970s – 1990s',
    imagePrompt:
      'mf husain mother teresa painting bold black outline white blue acrylic indian contemporary progressive artist group 1970s dark background cinematic 4k',
    about:
      'Maqbool Fida Husain (1915–2011) produced a long-running series of works on the theme of the "mother" — often conflating motifs of Mother Teresa, the Madonna, the Hindu goddess, and the Indian village woman. This treatment uses the artist\'s signature calligraphic black line, flat white robe, and a wash of blue.',
    historicalContext:
      'Husain was the most famous, and later the most controversial, member of the Bombay Progressive Artists\' Group founded in 1947. A billboard painter from Indore who moved to Bombay in the 1930s, he brought a popular visual sensibility into the gallery. His depictions of Hindu goddesses in the 1990s drew political attack and eventually forced his exile.',
    artisticSignificance:
      'Husain\'s contribution to Indian modernism is twofold: he created a truly individual painterly handwriting, and he treated the "national-popular" — epics, cinema, myth, village life, politics — as legitimate subject matter for high art. The horse, the mother, and the weeping woman became his signature motifs.',
  },
  {
    id: 'tyeb-mehta-kali',
    name: 'Tyeb Mehta — Kali',
    periodId: 'period-7',
    periodLabel: 'Modern & Contemporary India',
    periodShort: 'Modern',
    category: 'MODERN',
    region: 'Bombay (Mumbai)',
    material: 'Oil on canvas',
    technique: 'Angular planar figuration, broken picture plane, Progressive-era formalism',
    year: 'c. 1990s',
    imagePrompt:
      'tyeb mehta kali painting angular figure geometric broken planes oil on canvas progressive indian contemporary dark blue red dark background cinematic 4k',
    about:
      'Tyeb Mehta (1925–2009), a close contemporary of Husain in the Bombay Progressives, returned repeatedly to the figure of Kali as a vehicle for exploring violence, femininity, and the Partition-era experience of rupture. The figure is typically reduced to a geometricised body, a long neck, a protruding tongue, against a field of deep blue, black, or red.',
    historicalContext:
      'Born into a Gujarati Muslim Bohra family, Mehta worked for decades in comparatively modest recognition before major auction prices from the mid-2000s repositioned him among the most important of the Progressives. His formal language — the diagonal slash, the fragmented plane, the locked pose — was shaped by witnessing Partition violence as a young man in Bombay.',
    artisticSignificance:
      'Where Husain works through line and narrative, Mehta works through structure. His best paintings feel almost architectonic — planes lock, colour blocks, and the figure produces meaning not through action but through arrested, sculptural stasis. His Kali paintings are among the strongest meditations on the goddess in 20th century art.',
  },
];

export const ARTIFACT_MAP = new Map(ARTIFACTS.map((a) => [a.id, a]));
