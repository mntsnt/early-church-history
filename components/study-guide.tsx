"use client"

import { useState } from "react"
import { ChevronRight, BookOpen, FileText, Brain, Key, GraduationCap, Youtube } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

interface QuizQuestion {
  question: string
  type: "mc" | "short"
  options?: string[]
  answer: string
  explanation: string
}

interface Module {
  id: number
  videoId: string
  title: string
  videoTitle: string
  duration: string
  objective: string
  notes: {
    sections: {
      title: string
      points: string[]
    }[]
  }
  quiz: QuizQuestion[]
  keyTerms: { term: string; definition: string }[]
}

const modules: Module[] = [
{
    id: 1,
    videoId: "qzStS_NSs-s",
    title: "The Ancient Greek World",
    videoTitle: "The Ancient Greek World",
    duration: "~25 min",
    objective: "This lecture establishes the foundational cultural, philosophical, and political context of ancient Greece that shaped early Christianity. Students will understand how Greek language, thought, and the concept of the polis influenced the spread and development of the early church.",
    notes: {
      sections: [
        {
          title: "The Significance of Greek Culture for Christianity",
          points: [
            "**Koine Greek** became the lingua franca of the Eastern Mediterranean after Alexander's conquests",
            "The New Testament was written entirely in Koine Greek, not Hebrew or Aramaic",
            "Greek philosophical concepts provided vocabulary for early Christian theology (logos, pneuma, ousia)",
            "**Hellenization**: the spread of Greek culture, language, and thought throughout conquered territories"
          ]
        },
        {
          title: "Alexander the Great (356-323 BC)",
          points: [
            "Conquered Persian Empire, Egypt, and territories extending to India by age 30",
            "Died in Babylon at 32, leaving no clear successor",
            "His empire fragmented into **Hellenistic kingdoms** ruled by his generals (Diadochi)",
            "**Ptolemaic Egypt** and **Seleucid Syria** most relevant for biblical history",
            "Jews came under Greek rule, creating tensions that led to the Maccabean Revolt (167-160 BC)"
          ]
        },
        {
          title: "The Greek Polis (City-State)",
          points: [
            "**Polis**: independent city-state with its own government, laws, and patron deity",
            "Citizens participated in public life through the **agora** (marketplace/public square)",
            "Religion was civic duty, not private belief - gods protected the city",
            "**Athens**: birthplace of democracy and philosophy",
            "**Sparta**: militaristic society with distinct social structure",
            "Early Christians met in homes, not public temples - seen as antisocial"
          ]
        },
        {
          title: "Greek Religion and Worldview",
          points: [
            "**Polytheism**: worship of multiple gods (Zeus, Athena, Apollo, etc.)",
            "Gods were anthropomorphic - human-like in appearance and behavior",
            "**Mystery religions**: Eleusinian Mysteries, Dionysian cults offered personal salvation",
            "Concept of **fate (moira)** governed even the gods",
            "Afterlife was shadowy (Hades) - not a place of reward or punishment initially",
            "Greek dualism: tension between **body (soma)** and **soul (psyche)**"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What was the common language that facilitated the spread of early Christianity throughout the Roman Empire?",
        type: "mc",
        options: ["A) Classical Latin", "B) Aramaic", "C) Koine Greek", "D) Hebrew"],
        answer: "C) Koine Greek",
        explanation: "Koine Greek became the lingua franca after Alexander's conquests and was the language of the New Testament."
      },
      {
        question: "Why was the Greek concept of the polis problematic for early Christians?",
        type: "short",
        answer: "The polis integrated religion with civic life - gods protected the city and worship was public duty. Christians who refused to participate in civic religion were seen as disloyal and antisocial, meeting privately in homes instead of public temples.",
        explanation: "This civic-religious integration explains much of the persecution early Christians faced."
      },
      {
        question: "Which Hellenistic kingdom ruled Palestine before the Maccabean Revolt?",
        type: "mc",
        options: ["A) Ptolemaic Egypt", "B) Seleucid Syria", "C) Antigonid Macedonia", "D) Pergamon"],
        answer: "B) Seleucid Syria",
        explanation: "The Seleucids, particularly Antiochus IV Epiphanes, attempted to Hellenize the Jews, leading to the revolt."
      },
      {
        question: "Define 'Hellenization' and explain its significance for early Christianity.",
        type: "short",
        answer: "Hellenization refers to the spread of Greek culture, language, philosophy, and customs throughout conquered territories. For Christianity, it meant: (1) a common language for evangelism and scripture, (2) philosophical vocabulary for theology, and (3) cultural assumptions about body/soul dualism that influenced Christian thought.",
        explanation: "Understanding Hellenization is essential for interpreting the New Testament in its cultural context."
      }
    ],
    keyTerms: [
      { term: "Koine Greek", definition: "The common dialect of Greek that became the lingua franca of the Eastern Mediterranean; the language of the New Testament" },
      { term: "Hellenization", definition: "The spread and adoption of Greek culture, language, and thought throughout conquered territories" },
      { term: "Polis", definition: "Greek city-state with its own government, laws, and patron deities; citizenship involved civic-religious duties" },
      { term: "Agora", definition: "The central public marketplace and gathering place in a Greek city where commerce, politics, and philosophy occurred" },
      { term: "Diadochi", definition: "The 'successors' - Alexander's generals who divided his empire after his death" },
      { term: "Mystery Religions", definition: "Secret cults offering initiates personal salvation and special knowledge about the afterlife" }
    ]
  },
{
    id: 2,
    videoId: "Sa_E9QBHe30",
    title: "The Ancient Roman World",
    videoTitle: "The Ancient Roman World",
    duration: "~30 min",
    objective: "This lecture examines the political structure, expansion, and cultural characteristics of Rome that created the environment in which Christianity emerged. Students will understand how Roman governance, roads, law, and the Pax Romana facilitated the spread of the gospel.",
    notes: {
      sections: [
        {
          title: "Rome's Political Evolution",
          points: [
            "**Roman Kingdom** (753-509 BC): legendary founding by Romulus; ruled by kings",
            "**Roman Republic** (509-27 BC): Senate and elected magistrates; expansion throughout Mediterranean",
            "**Roman Empire** (27 BC - 476 AD): Augustus established principate; emperors held supreme power",
            "The transition from Republic to Empire occurred during civil wars (Julius Caesar, Mark Antony, Octavian)",
            "**Augustus (Octavian)**: first emperor, established Pax Romana, reigned during Christ's birth (Luke 2:1)"
          ]
        },
        {
          title: "The Pax Romana (27 BC - 180 AD)",
          points: [
            "Period of relative peace and stability across the Roman world",
            "Facilitated trade, travel, and communication across vast distances",
            "**Roman roads**: over 250,000 miles of paved roads connecting the empire",
            "**Common currency**: denarii facilitated commerce",
            "**Roman law**: provided legal framework; Paul appealed to Caesar (Acts 25)",
            "This 'fullness of time' (Galatians 4:4) enabled rapid spread of Christianity"
          ]
        },
        {
          title: "Roman Provincial Administration",
          points: [
            "Empire divided into **senatorial provinces** (peaceful) and **imperial provinces** (frontier/military)",
            "**Governors** (proconsuls, prefects, procurators) administered provinces",
            "Pontius Pilate was **prefect** of Judea (later called procurator)",
            "Local client kings (like the Herods) ruled with Roman approval",
            "Jews had special status: exemption from emperor worship, allowed to practice their religion",
            "Roman citizenship conferred legal protections (Paul in Acts 22:25-29)"
          ]
        },
        {
          title: "Roman Society and Values",
          points: [
            "**Paterfamilias**: male head of household with absolute authority",
            "**Patronage system**: vertical relationships of obligation and protection",
            "**Social hierarchy**: senators, equestrians, citizens, freedmen, slaves",
            "**Pietas**: duty to gods, state, and family - fundamental Roman virtue",
            "Slaves comprised 25-40% of population in Italian peninsula",
            "Early church challenged social norms (Galatians 3:28)"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What was the Pax Romana and why was it significant for early Christianity?",
        type: "short",
        answer: "The Pax Romana (27 BC - 180 AD) was approximately 200 years of relative peace and stability in the Roman Empire. It enabled the spread of Christianity through: safe travel on Roman roads, common language and currency for communication and trade, and legal frameworks that (initially) allowed religious practice.",
        explanation: "Paul's missionary journeys depended on these conditions."
      },
      {
        question: "What special legal protections did Roman citizenship provide Paul?",
        type: "mc",
        options: ["A) Exemption from all taxes", "B) Protection from scourging without trial and right to appeal to Caesar", "C) Automatic freedom from imprisonment", "D) Right to practice any religion"],
        answer: "B) Protection from scourging without trial and right to appeal to Caesar",
        explanation: "As seen in Acts 22:25-29 and Acts 25:11, citizenship protected Paul from arbitrary punishment and allowed him to appeal to the emperor."
      },
      {
        question: "What was the role of a 'paterfamilias' in Roman society?",
        type: "mc",
        options: ["A) A priest in the state religion", "B) The male head of household with absolute authority over family members", "C) A provincial governor", "D) A military commander"],
        answer: "B) The male head of household with absolute authority over family members",
        explanation: "The paterfamilias had legal power over his wife, children, and slaves - including matters of life and death."
      },
      {
        question: "Explain the phrase 'fullness of time' (Galatians 4:4) in relation to Roman history.",
        type: "short",
        answer: "The phrase suggests God's providential timing: Christ came when conditions uniquely favored gospel spread - Greek as common language, Roman roads enabling travel, Pax Romana providing stability, legal structures allowing movement, and Jewish diaspora creating synagogue networks throughout the empire.",
        explanation: "Historical circumstances aligned to facilitate Christianity's rapid expansion."
      }
    ],
    keyTerms: [
      { term: "Pax Romana", definition: "The 'Roman Peace' - approximately 200 years of relative stability (27 BC - 180 AD) that facilitated trade, travel, and the spread of Christianity" },
      { term: "Principate", definition: "The early Roman imperial system where the emperor (princeps) maintained the facade of republican institutions while holding supreme power" },
      { term: "Procurator/Prefect", definition: "Roman officials who governed smaller provinces; Pontius Pilate held this position in Judea" },
      { term: "Paterfamilias", definition: "The male head of a Roman household who held legal authority over all family members and slaves" },
      { term: "Pietas", definition: "Roman virtue of dutiful respect toward gods, state, and family" },
      { term: "Client King", definition: "A local ruler who maintained power with Roman approval and support (e.g., Herod the Great)" }
    ]
  },
{
    id: 3,
    videoId: "Qw3CjmoB3oY",
    title: "Roman Pagan Life and Worship",
    videoTitle: "Roman Pagan Life and Worship",
    duration: "~25 min",
    objective: "This lecture explores the religious landscape of the Roman world that early Christians encountered and rejected. Students will understand Roman polytheism, the imperial cult, household religion, and why Christian refusal to participate led to accusations of atheism and persecution.",
    notes: {
      sections: [
        {
          title: "Roman Polytheism",
          points: [
            "Romans adopted and adapted Greek gods: Zeus became Jupiter, Athena became Minerva, etc.",
            "**Capitoline Triad**: Jupiter, Juno, Minerva - chief state gods",
            "Religion was **orthopraxis** (right practice) not **orthodoxy** (right belief)",
            "Gods were approached through proper ritual, not personal relationship",
            "**Pax deorum**: 'peace of the gods' - maintaining divine favor through correct worship",
            "Failure to worship properly could bring divine punishment on the whole community"
          ]
        },
        {
          title: "The Imperial Cult",
          points: [
            "Began with deification of Julius Caesar after death (44 BC)",
            "Augustus was 'divi filius' (son of the divine one) while alive",
            "Eastern provinces offered worship to living emperors more readily than Rome",
            "**Domitian** (81-96 AD) demanded to be called 'dominus et deus' (lord and god)",
            "Emperor worship was a test of political loyalty, not just religious devotion",
            "Christian refusal was seen as treason, not merely religious difference"
          ]
        },
        {
          title: "Household and Private Religion",
          points: [
            "**Lares**: household guardian spirits, worshipped at the family lararium (shrine)",
            "**Penates**: gods of the storeroom, protectors of family provisions",
            "**Genius**: divine spirit of the paterfamilias, honored on his birthday",
            "Daily offerings of food, wine, and incense at the household shrine",
            "Ancestors were venerated; their images kept in the home",
            "Religion permeated daily life - no separation of sacred and secular"
          ]
        },
        {
          title: "Why Christians Were Seen as Atheists",
          points: [
            "Christians rejected all gods except their own - unprecedented exclusivism",
            "Refused to offer even token sacrifice to emperor or state gods",
            "Did not have visible temples, statues, or public sacrifices",
            "Met privately in homes - suspicious 'secret' gatherings",
            "Rumors of cannibalism (Eucharist) and incest ('brothers' and 'sisters' sharing 'love feast')",
            "'Atheist' meant refusing to honor the gods who protected society"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What is the difference between 'orthopraxis' and 'orthodoxy' in understanding Roman religion?",
        type: "short",
        answer: "Orthopraxis emphasizes correct practice and ritual, while orthodoxy emphasizes correct belief. Roman religion focused on performing rituals properly to maintain the pax deorum (peace with the gods), not on holding specific theological beliefs. Christianity, by contrast, emphasized both correct belief and practice.",
        explanation: "This distinction helps explain Roman confusion about Christian exclusivism."
      },
      {
        question: "Why was the imperial cult particularly dangerous for Christians?",
        type: "mc",
        options: ["A) Emperors actively sought to destroy Christianity", "B) Refusing emperor worship was seen as political treason, not just religious dissent", "C) The cult required human sacrifice", "D) Christians were forced to join the Roman army"],
        answer: "B) Refusing emperor worship was seen as political treason, not just religious dissent",
        explanation: "Offering incense to the emperor's image was a loyalty test; refusal suggested political subversion."
      },
      {
        question: "What were the Lares and Penates in Roman household religion?",
        type: "mc",
        options: ["A) State priests and priestesses", "B) Types of sacrificial animals", "C) Household guardian spirits and gods of provisions", "D) Philosophical schools"],
        answer: "C) Household guardian spirits and gods of provisions",
        explanation: "These were worshipped daily at the household lararium with offerings of food and incense."
      },
      {
        question: "Why were early Christians accused of 'atheism' despite believing in God?",
        type: "short",
        answer: "Romans defined 'atheism' as refusing to honor the traditional gods who protected society. Christians rejected all pagan deities, had no visible temples or statues, met secretly in homes, and refused even token participation in civic religion. Their exclusive monotheism was socially unprecedented and threatening.",
        explanation: "This accusation appears in early sources like the Martyrdom of Polycarp."
      }
    ],
    keyTerms: [
      { term: "Pax Deorum", definition: "The 'peace of the gods' - the harmonious relationship between Romans and their deities, maintained through proper ritual observance" },
      { term: "Imperial Cult", definition: "The worship of Roman emperors (living or deceased) as divine or semi-divine figures; refusal was considered political treason" },
      { term: "Orthopraxis", definition: "Emphasis on correct ritual practice rather than correct belief; characteristic of Roman religion" },
      { term: "Lares", definition: "Roman household guardian spirits worshipped at the family shrine (lararium)" },
      { term: "Penates", definition: "Roman gods of the storeroom who protected household provisions" },
      { term: "Lararium", definition: "A small household shrine where Romans made daily offerings to household gods and ancestors" }
    ]
  },
{
    id: 4,
    videoId: "a5_V00sevog",
    title: "Plato, Aristotle, and Stoicism",
    videoTitle: "Plato, Aristotle, and Stoicism",
    duration: "~30 min",
    objective: "This lecture examines the major Greek philosophical traditions that shaped the intellectual environment of early Christianity. Students will understand how Platonic, Aristotelian, and Stoic concepts influenced Christian theology, apologetics, and ethics.",
    notes: {
      sections: [
        {
          title: "Plato (428-348 BC)",
          points: [
            "Student of Socrates, founded the **Academy** in Athens",
            "**Theory of Forms**: visible world is shadow of eternal, perfect Forms (Ideas)",
            "True reality is immaterial and eternal; physical world is inferior copy",
            "**The Form of the Good**: highest Form, source of all reality and knowledge",
            "**Allegory of the Cave** (Republic): humans see shadows, philosophers see reality",
            "**Soul is immortal**: pre-exists body, imprisoned in flesh, returns to realm of Forms",
            "**Influence on Christianity**: immaterial soul, heaven as 'true' reality, body/soul dualism"
          ]
        },
        {
          title: "Aristotle (384-322 BC)",
          points: [
            "Student of Plato, tutor of Alexander the Great, founded the **Lyceum**",
            "Rejected Plato's separate realm of Forms; universals exist in particulars",
            "**Four Causes**: material, formal, efficient, final - explain why things exist",
            "**Unmoved Mover**: eternal, unchanging first cause of all motion (Physics, Metaphysics)",
            "**Teleology**: everything has a purpose (telos) toward which it strives",
            "Emphasized **empirical observation** over pure reason",
            "**Virtue ethics**: excellence (arete) achieved through habituation and balance (golden mean)",
            "**Influence on Christianity**: medieval scholasticism, Thomas Aquinas, natural theology"
          ]
        },
        {
          title: "Stoicism",
          points: [
            "Founded by **Zeno of Citium** (c. 300 BC) in Athens at the Stoa Poikile (Painted Porch)",
            "**Logos**: divine rational principle pervading and ordering the universe",
            "All humans share in the Logos - basis for universal human dignity and natural law",
            "**Determinism**: everything happens according to fate/providence; accept what you cannot change",
            "**Apatheia**: freedom from destructive passions through rational self-control",
            "Focus on what is 'up to us' (our judgments/responses) vs what is not (external circumstances)",
            "Prominent Stoics: Seneca, Epictetus, Marcus Aurelius",
            "**Influence on Christianity**: Paul's language (conscience, natural law), virtue ethics, providence"
          ]
        },
        {
          title: "Philosophical Concepts in Early Christian Thought",
          points: [
            "**Logos** (John 1:1): adapted from both Stoic and Platonic usage",
            "**Natural law** (Romans 2:14-15): Stoic concept of universal moral knowledge",
            "**Immortality of the soul**: Platonic framework shapes Christian eschatology",
            "**Apologists** used philosophy to defend Christianity to educated pagans",
            "**Justin Martyr**: 'Whatever has been well said belongs to us Christians'",
            "Tension between Athens and Jerusalem - how much philosophy is appropriate?"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "How did Plato's Theory of Forms influence early Christian thought?",
        type: "short",
        answer: "Plato's distinction between the eternal, perfect realm of Forms and the inferior, changing physical world paralleled Christian distinctions between heaven and earth, the eternal and temporal. It reinforced belief in an immortal soul, body/soul dualism, and the idea that earthly existence is preparation for a higher reality.",
        explanation: "Church Fathers like Augustine were heavily influenced by Neoplatonism."
      },
      {
        question: "What is the Stoic concept of 'Logos' and how does it relate to John 1:1?",
        type: "mc",
        options: ["A) A type of logical argument", "B) The divine rational principle ordering the universe, which John identifies with Christ", "C) The spoken words of philosophers", "D) A Stoic meditation technique"],
        answer: "B) The divine rational principle ordering the universe, which John identifies with Christ",
        explanation: "John's Gospel opens by identifying Jesus as the Logos, a term with rich philosophical meaning for Greek-speaking audiences."
      },
      {
        question: "What is Aristotle's 'Unmoved Mover' and how did it influence later Christian theology?",
        type: "short",
        answer: "Aristotle's Unmoved Mover is an eternal, unchanging first cause that initiates all motion without itself being moved. Medieval theologians like Thomas Aquinas adapted this concept in arguments for God's existence (the Five Ways), seeing the Unmoved Mover as compatible with the Christian Creator.",
        explanation: "This shows how Greek philosophy provided conceptual tools for Christian theology."
      },
      {
        question: "Which Stoic concept appears in Paul's discussion of Gentiles and moral law in Romans 2:14-15?",
        type: "mc",
        options: ["A) Theory of Forms", "B) Allegory of the Cave", "C) Natural Law - moral knowledge accessible to all through reason", "D) The golden mean"],
        answer: "C) Natural Law - moral knowledge accessible to all through reason",
        explanation: "Stoics taught that all humans share in the Logos and can know basic moral truths through reason - Paul echoes this in describing Gentiles who 'do by nature what the law requires.'"
      }
    ],
    keyTerms: [
      { term: "Theory of Forms", definition: "Plato's teaching that visible objects are imperfect copies of eternal, perfect Forms (Ideas) existing in a higher realm" },
      { term: "Logos", definition: "Greek term meaning 'word,' 'reason,' or 'rational principle'; in Stoicism, the divine reason ordering the cosmos; in John's Gospel, identified with Christ" },
      { term: "Unmoved Mover", definition: "Aristotle's concept of an eternal, unchanging first cause that initiates all motion without itself being moved" },
      { term: "Apatheia", definition: "Stoic ideal of freedom from destructive passions through rational self-control; not emotionlessness but emotional equilibrium" },
      { term: "Teleology", definition: "The study of purpose; Aristotle's view that everything has a natural end (telos) toward which it strives" },
      { term: "Natural Law", definition: "Stoic concept that universal moral principles are accessible to all humans through reason, as all share in the Logos" }
    ]
  },
{
    id: 5,
    videoId: "hJR0A9phBc8",
    title: "Early Christian Persecution",
    videoTitle: "Early Christian Persecution",
    duration: "~35 min",
    objective: "This lecture examines the causes, patterns, and major episodes of persecution faced by Christians in the Roman Empire from Nero to Constantine. Students will understand why Christians were persecuted, how they responded, and how persecution shaped early church identity and theology.",
    notes: {
      sections: [
        {
          title: "Why Were Christians Persecuted?",
          points: [
            "**Not primarily about belief** - Rome was religiously tolerant of diverse cults",
            "**Refusal to participate** in civic/state religion seen as disloyalty and danger to society",
            "Christians were 'atheists' - denying the gods who protected Rome",
            "**Suspicion and rumor**: secret meetings, 'love feasts,' eating 'body and blood'",
            "Scapegoating during disasters (Nero blamed Christians for Rome fire, 64 AD)",
            "Economic threats: silversmiths in Ephesus (Acts 19), meat market disruption",
            "**Superstitio**: Romans viewed Christianity as degraded foreign superstition, not legitimate religion"
          ]
        },
        {
          title: "Patterns of Persecution",
          points: [
            "Persecution was **sporadic and localized** until mid-3rd century - not constant empire-wide",
            "Often initiated by **local populations** and governors, not emperors",
            "**Trajan's Rescript** (c. 112 AD) to Pliny: don't seek Christians out, but punish if accused and they refuse to recant",
            "Christians given chance to sacrifice and deny Christ; refusal meant death",
            "**Libelli**: certificates proving one had sacrificed - some Christians purchased these",
            "Martyrdom became highly honored - 'seed of the church' (Tertullian)"
          ]
        },
        {
          title: "Major Persecutions",
          points: [
            "**Nero (64 AD)**: first imperial persecution; blamed Christians for Great Fire of Rome; Peter and Paul traditionally martyred",
            "**Domitian (81-96 AD)**: demanded 'Lord and God' titles; possible context for Revelation",
            "**Decius (249-251 AD)**: first empire-wide persecution; required universal sacrifice; many apostasized",
            "**Valerian (253-260 AD)**: targeted clergy and upper-class Christians specifically",
            "**Diocletian's Great Persecution (303-311 AD)**: most severe; destroyed churches, burned scriptures, required sacrifice",
            "**Galerius' Edict of Toleration (311 AD)** and **Constantine's Edict of Milan (313 AD)** ended persecution"
          ]
        },
        {
          title: "The Church's Response and Legacy",
          points: [
            "**Martyrdom** venerated - martyrs seen as ultimate witnesses; relics honored",
            "**Confessors**: those who suffered but survived; held special authority",
            "**Lapsed (lapsi)**: those who denied Christ or sacrificed - major controversy over readmission",
            "**Traditores**: those who handed over scriptures - 'traitors'",
            "Persecution strengthened church identity and boundaries",
            "Debates over whether baptism by traditores was valid (Donatist controversy)"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "Why was Trajan's Rescript to Pliny significant for understanding Roman policy toward Christians?",
        type: "short",
        answer: "Trajan established that Christians should not be actively sought out, but if accused and brought before authorities, they must be punished if they refuse to sacrifice and recant. This created a 'don't ask, don't tell' policy that left Christians vulnerable to local accusations while not making them targets of systematic state persecution.",
        explanation: "This remained the basic imperial policy for over a century."
      },
      {
        question: "What was the Decian persecution and why was it significant?",
        type: "mc",
        options: ["A) A local persecution in Rome only", "B) The first empire-wide persecution requiring all citizens to sacrifice and obtain a certificate (libellus)", "C) A persecution targeting only bishops", "D) The final persecution before Constantine"],
        answer: "B) The first empire-wide persecution requiring all citizens to sacrifice and obtain a certificate (libellus)",
        explanation: "Decius (249-251) required universal sacrifice, exposing Christians who had previously avoided notice. Many lapsed, creating later controversies over their readmission."
      },
      {
        question: "Who were the 'lapsi' and why did they create controversy in the early church?",
        type: "short",
        answer: "The lapsi were Christians who 'lapsed' during persecution by denying Christ, offering sacrifice, or purchasing certificates of sacrifice. After persecution ended, debate arose over whether and how they could be readmitted to the church - could their previous faith be restored? Did their betrayal invalidate their standing?",
        explanation: "This controversy led to the Novatianist schism and later informed the Donatist controversy."
      },
      {
        question: "Which emperor's persecution is the context many scholars associate with the Book of Revelation?",
        type: "mc",
        options: ["A) Nero", "B) Trajan", "C) Domitian", "D) Diocletian"],
        answer: "C) Domitian",
        explanation: "Domitian (81-96 AD) demanded titles like 'Lord and God' and persecuted those who refused emperor worship - themes prominent in Revelation."
      }
    ],
    keyTerms: [
      { term: "Superstitio", definition: "Roman term for foreign or degraded religious practice lacking the legitimacy of proper religio; applied to Christianity" },
      { term: "Libellus", definition: "A certificate proving that someone had offered sacrifice as required during the Decian persecution" },
      { term: "Lapsi", definition: "Christians who 'lapsed' by denying Christ or sacrificing during persecution; their readmission was controversial" },
      { term: "Confessor", definition: "A Christian who suffered for the faith (imprisonment, torture) but survived; held special spiritual authority" },
      { term: "Traditores", definition: "'Those who handed over' - Christians who surrendered sacred scriptures during persecution; central to Donatist controversy" },
      { term: "Martyr", definition: "Greek for 'witness'; one who dies rather than deny Christ; martyrdom was considered the highest Christian testimony" }
    ]
  },
{
    id: 6,
    videoId: "az4sztb0Tlc",
    title: "Apostolic Fathers",
    videoTitle: "Apostolic Fathers",
    duration: "~30 min",
    objective: "This lecture introduces the earliest Christian writings outside the New Testament - works from leaders who knew the apostles or their immediate disciples. Students will understand the historical value, theological emphases, and ecclesial concerns of these foundational texts.",
    notes: {
      sections: [
        {
          title: "Who Were the Apostolic Fathers?",
          points: [
            "Church leaders from the late 1st - early 2nd century (c. 70-150 AD)",
            "Either knew the apostles personally or learned from their direct disciples",
            "Their writings are the **earliest Christian literature outside the New Testament**",
            "Not 'scripture' but highly valued for understanding early church beliefs and practices",
            "Key figures: Clement of Rome, Ignatius of Antioch, Polycarp of Smyrna",
            "Key texts: Didache, Shepherd of Hermas, Epistle of Barnabas, Epistle to Diognetus"
          ]
        },
        {
          title: "Clement of Rome (c. 96 AD)",
          points: [
            "**1 Clement**: letter from Roman church to Corinthian church addressing internal strife",
            "Younger men had deposed the elders/bishops - Clement calls for order and submission",
            "Emphasizes **apostolic succession**: authority passed from Christ → apostles → bishops",
            "First post-NT document to reference Paul's letters as authoritative",
            "Earliest evidence of Roman church involvement in affairs of other churches",
            "Clement traditionally listed as 3rd or 4th bishop of Rome"
          ]
        },
        {
          title: "Ignatius of Antioch (c. 107-110 AD)",
          points: [
            "Bishop of Antioch; wrote 7 letters while being transported to Rome for martyrdom",
            "**Passionate desire for martyrdom**: 'Let me be ground by the teeth of beasts'",
            "Strong emphasis on **monarchical episcopate**: one bishop over each church",
            "First to use the term **'Catholic Church'** (he katholike ekklesia) - universal church",
            "Vigorously opposed **Docetism**: heresy that Christ only 'seemed' to have a physical body",
            "Emphasized **Eucharist** as 'medicine of immortality' and real presence of Christ"
          ]
        },
        {
          title: "Polycarp of Smyrna (c. 69-155 AD)",
          points: [
            "Disciple of the Apostle John; bishop of Smyrna for decades",
            "**Epistle to the Philippians**: warns against heresy, emphasizes righteousness and endurance",
            "Intermediary between apostolic age and later church; linked to both John and Irenaeus",
            "**Martyrdom of Polycarp**: earliest detailed martyrdom account outside NT",
            "When told to curse Christ: 'Eighty-six years I have served Him... How can I blaspheme my King?'",
            "His martyrdom established pattern for honoring martyrs and their relics"
          ]
        },
        {
          title: "The Didache (Teaching of the Twelve Apostles)",
          points: [
            "Early church manual, possibly late 1st century (c. 70-100 AD)",
            "**Two Ways**: moral teaching contrasting 'Way of Life' and 'Way of Death'",
            "Instructions on **baptism**: prefer running water; trinitarian formula",
            "Instructions on **Eucharist** and prayers; fasting on Wednesdays and Fridays",
            "Guidelines for receiving traveling prophets and distinguishing true from false",
            "Shows early church still expecting imminent return of Christ"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What historical crisis prompted Clement of Rome to write 1 Clement, and what was his solution?",
        type: "short",
        answer: "Younger members of the Corinthian church had deposed the established elders/bishops. Clement called for order, humility, and restoration of the deposed leaders, arguing for apostolic succession - that authority flows from Christ through the apostles to appointed bishops who should not be removed without cause.",
        explanation: "This letter shows early concern for church order and Roman involvement in other churches."
      },
      {
        question: "What heresy did Ignatius of Antioch vigorously combat in his letters?",
        type: "mc",
        options: ["A) Arianism - denying Christ's divinity", "B) Docetism - denying Christ's real physical body", "C) Pelagianism - denying original sin", "D) Gnosticism - secret knowledge for salvation"],
        answer: "B) Docetism - denying Christ's real physical body",
        explanation: "Ignatius emphasized that Christ truly suffered in the flesh; if he only 'seemed' to, then salvation is an illusion."
      },
      {
        question: "What is the significance of Ignatius being the first to use the term 'Catholic Church'?",
        type: "short",
        answer: "Ignatius used 'katholike ekklesia' (universal/whole church) to distinguish the authentic, worldwide church from heretical splinter groups. It emphasized the unity of all true believers under proper episcopal authority, contrasting with local or sectarian movements.",
        explanation: "The term 'catholic' originally meant universal, not denominational."
      },
      {
        question: "What does the Didache reveal about early Christian practices?",
        type: "mc",
        options: ["A) Christians met only in secret underground catacombs", "B) Baptism was only for adults by full immersion", "C) Baptism used a trinitarian formula and preferred running water; Christians fasted Wednesdays and Fridays", "D) The Eucharist was celebrated annually at Passover only"],
        answer: "C) Baptism used a trinitarian formula and preferred running water; Christians fasted Wednesdays and Fridays",
        explanation: "The Didache provides a window into early liturgical practice, showing both continuity with and development beyond NT texts."
      }
    ],
    keyTerms: [
      { term: "Apostolic Fathers", definition: "Church leaders from c. 70-150 AD who knew the apostles or their immediate disciples; their writings are the earliest Christian literature outside the NT" },
      { term: "Apostolic Succession", definition: "The doctrine that church authority passes from Christ through the apostles to their appointed successors (bishops)" },
      { term: "Monarchical Episcopate", definition: "Church governance by a single bishop over each local congregation; strongly advocated by Ignatius" },
      { term: "Docetism", definition: "Heresy teaching that Christ only 'seemed' (Greek: dokein) to have a physical body; denied real incarnation and suffering" },
      { term: "Didache", definition: "Early church manual (c. 70-100 AD) with moral teaching, liturgical instructions, and guidelines for community life" },
      { term: "Catholic Church", definition: "Term first used by Ignatius meaning the universal, worldwide church in contrast to local or heretical groups" }
    ]
  },
{
    id: 7,
    videoId: "vXJIbvsb00s",
    title: "Christian Apologists and Early Heresies",
    videoTitle: "Christian Apologists and Early Heresies",
    duration: "~30 min",
    objective: "This module examines the second-century Christian intellectuals who defended the faith against pagan criticism and Jewish objections, articulating Christianity in philosophical terms that educated Romans could understand.",
    notes: {
      sections: [
        {
          title: "The Apologetic Context",
          points: [
            "**Apologists** were Christian writers who defended (Greek: apologia = defense) Christianity to outsiders",
            "They wrote roughly **130-180 AD**, bridging the Apostolic Fathers and later Church Fathers",
            "Primary audiences: **Roman emperors**, educated pagans, and Jewish critics",
            "They faced accusations of **atheism** (rejecting Roman gods), **cannibalism** (misunderstood Eucharist), and **incest** (calling each other 'brother/sister')",
            "The apologists sought to show Christianity as **philosophically respectable** and morally superior"
          ]
        },
        {
          title: "Justin Martyr (c. 100-165 AD)",
          points: [
            "**Justin Martyr** is the most important early apologist; converted after studying philosophy",
            "Wrote two **Apologies** addressed to Emperor Antoninus Pius defending Christians",
            "His **Dialogue with Trypho** is the earliest surviving Christian apologetic against Judaism",
            "Developed the **Logos theology**: Christ as the divine Logos (Word/Reason) who enlightens all humanity",
            "Argued that **Greek philosophers** (especially Plato) had partial truth because the Logos enlightened them",
            "Taught that Christians are the 'true philosophers' who possess the full Logos",
            "**Martyred in Rome** c. 165 AD, refusing to sacrifice to Roman gods"
          ]
        },
        {
          title: "Other Major Apologists",
          points: [
            "**Tatian** (c. 120-180): Justin's student; wrote 'Address to the Greeks'; later became heretical",
            "**Athenagoras** (c. 133-190): Wrote 'Plea for the Christians' to Marcus Aurelius; defended resurrection",
            "**Theophilus of Antioch** (d. 183-185): First to use term **'Trinity'** (Greek: trias); wrote 'To Autolycus'",
            "**Melito of Sardis** (d. c. 180): Wrote 'On the Passover'; one of the earliest Christian **homilies**",
            "**Aristides**: Wrote possibly the earliest surviving apology (c. 125 AD) to Emperor Hadrian"
          ]
        },
        {
          title: "Key Apologetic Arguments",
          points: [
            "**Argument from antiquity**: Moses predates Greek philosophers; Christianity fulfills ancient prophecy",
            "**Moral argument**: Christian ethics superior to pagan immorality; even slaves and women live virtuously",
            "**Argument from miracles**: Christians still perform healings and exorcisms in Jesus' name",
            "**Philosophical argument**: Christian monotheism more rational than polytheism",
            "**Fulfillment of prophecy**: Old Testament predictions precisely fulfilled in Christ",
            "**Witness of martyrdom**: Christians' willingness to die proves sincerity and truth of their beliefs"
          ]
        },
        {
          title: "The Logos Theology and Its Implications",
          points: [
            "Justin taught that the **Logos** (Christ) is the rational principle through whom God created all things",
            "All truth in pagan philosophy came from **seeds of the Logos** (logos spermatikos) scattered among humanity",
            "Socrates and Plato were 'Christians before Christ' insofar as they followed reason/Logos",
            "This approach allowed **positive engagement** with Greek philosophy while maintaining Christian uniqueness",
            "Critics later worried this made Christianity too dependent on Greek thought",
            "The Logos theology became foundational for later **Trinitarian developments**"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What was Justin Martyr's 'Logos theology' and why was it significant for early Christian apologetics?",
        type: "short",
        answer: "Justin taught that Christ is the divine Logos (Word/Reason) who enlightens all humanity. This allowed him to argue that Greek philosophers like Plato had partial truth through 'seeds of the Logos,' making Christianity the fulfillment rather than rejection of the best in pagan philosophy.",
        explanation: "The Logos theology provided a bridge between Christian faith and Greco-Roman intellectual culture."
      },
      {
        question: "Which apologist first used the term 'Trinity' (trias)?",
        type: "mc",
        options: ["A) Justin Martyr", "B) Tatian", "C) Theophilus of Antioch", "D) Athenagoras"],
        answer: "C) Theophilus of Antioch",
        explanation: "Theophilus used 'trias' in his work 'To Autolycus' around 180 AD, making it the first known use of the term for the Godhead."
      },
      {
        question: "What were the three main accusations pagans brought against Christians that the apologists had to address?",
        type: "short",
        answer: "Atheism (rejecting Roman gods), cannibalism (misunderstanding the Eucharist as eating flesh and blood), and incest (misinterpreting Christians calling each other 'brother' and 'sister').",
        explanation: "These accusations stemmed from misunderstanding Christian practices and the secretive nature of early worship."
      },
      {
        question: "Why did Justin Martyr consider Socrates and Plato to be 'Christians before Christ'?",
        type: "mc",
        options: ["A) They secretly read the Hebrew scriptures", "B) They were enlightened by the Logos/Reason that later became incarnate in Christ", "C) They were baptized by John the Baptist's predecessors", "D) They rejected all Greek religion"],
        answer: "B) They were enlightened by the Logos/Reason that later became incarnate in Christ",
        explanation: "Justin's Logos theology held that the same divine Reason incarnate in Christ had partially illumined earlier philosophers."
      }
    ],
    keyTerms: [
      { term: "Apologist", definition: "A Christian writer who defended the faith against external criticism through reasoned arguments addressed to educated outsiders" },
      { term: "Logos", definition: "Greek term meaning 'word' or 'reason'; used by Justin to identify Christ as the divine rational principle present from creation" },
      { term: "Logos Spermatikos", definition: "'Seeds of the Logos' - Justin's concept that divine reason was partially present in all human thinking, explaining truth in pagan philosophy" },
      { term: "Trias/Trinity", definition: "Term first used by Theophilus of Antioch to describe the threefold nature of God (Father, Son, Spirit)" },
      { term: "Apologia", definition: "Greek word meaning 'defense' or 'speech in defense'; root of the word 'apologetics'" }
    ]
  },
{
    id: 8,
    videoId: "GXc-vvCivp4",
    title: "Gnosticism and the Early Church",
    videoTitle: "Gnosticism and the Early Church",
    duration: "~35 min",
    objective: "This module explores the diverse Gnostic movements that challenged orthodox Christianity in the second and third centuries, examining their distinctive beliefs about matter, salvation, and secret knowledge.",
    notes: {
      sections: [
        {
          title: "Defining Gnosticism",
          points: [
            "**Gnosticism** comes from Greek gnosis meaning 'knowledge' - specifically, secret spiritual knowledge",
            "Not a single religion but a **diverse family** of religious movements with common themes",
            "Flourished primarily in the **second and third centuries AD**",
            "Major discovery: **Nag Hammadi library** (1945) in Egypt provided Gnostic texts in their own words",
            "Previously known mainly through **orthodox critics** like Irenaeus, Tertullian, and Hippolytus"
          ]
        },
        {
          title: "Core Gnostic Beliefs",
          points: [
            "**Radical dualism**: sharp distinction between spiritual (good) and material (evil) realms",
            "The **material world** was not created by the true God but by an ignorant or malevolent being",
            "**The Demiurge**: the creator god of Genesis, often identified with the Jewish God, seen as inferior or evil",
            "The true **Supreme God** is utterly transcendent, unknowable, and did not create matter",
            "**Humans contain a divine spark** trapped in evil matter, needing liberation",
            "**Salvation through knowledge**: awakening to one's true divine origin, not through faith or works"
          ]
        },
        {
          title: "Gnostic Cosmology and Myth",
          points: [
            "Complex mythological systems with hierarchies of divine beings called **Aeons**",
            "The **Pleroma** ('fullness'): the divine realm where Aeons dwell in perfect harmony",
            "A cosmic catastrophe occurred when **Sophia** (Wisdom) fell or erred, producing the material world",
            "The Demiurge, often named **Yaldabaoth**, ignorantly created the physical cosmos",
            "Christ or other divine messengers descend to bring **saving knowledge** to trapped divine sparks",
            "Death liberates the enlightened soul to ascend through **archons** (cosmic rulers) back to the Pleroma"
          ]
        },
        {
          title: "Major Gnostic Teachers and Schools",
          points: [
            "**Valentinus** (c. 100-160): Most influential Gnostic; taught in Rome; sophisticated philosophical system",
            "**Basilides** (c. 117-138): Taught in Alexandria; developed complex system with 365 heavens",
            "**Marcion** (c. 85-160): Not strictly Gnostic but related; rejected Old Testament God entirely",
            "**Sethians**: Group emphasizing Seth (Adam's son) as a divine revealer",
            "**Carpocrates**: Taught radical libertinism since material acts don't affect the spirit",
            "The **Gospel of Thomas**: Collection of 114 sayings attributed to Jesus with Gnostic elements"
          ]
        },
        {
          title: "Orthodox Response to Gnosticism",
          points: [
            "**Irenaeus of Lyon** wrote 'Against Heresies' (c. 180) - systematic refutation of Gnosticism",
            "Defended the **goodness of creation**: the God of Genesis is the true God; matter is not evil",
            "Emphasized **apostolic succession**: true teaching passed down through bishops from apostles",
            "Developed the **Rule of Faith**: summary of essential Christian beliefs against Gnostic innovations",
            "The battle against Gnosticism helped define the **New Testament canon** - excluding Gnostic gospels",
            "**Tertullian** coined 'Trinity' partly to clarify God's nature against Gnostic alternatives"
          ]
        },
        {
          title: "Gnosticism's Lasting Questions",
          points: [
            "Why does evil exist if God is good? (The **theodicy** problem Gnosticism tried to solve)",
            "What is the relationship between **Old and New Testaments**?",
            "How do we understand the **relationship of spirit and matter**?",
            "What role does **secret or esoteric knowledge** play in Christianity?",
            "Gnostic themes resurface in **Manichaeism**, medieval Cathars, and modern movements"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What is the Gnostic 'Demiurge' and how does it relate to the God of the Old Testament?",
        type: "short",
        answer: "The Demiurge is the ignorant or malevolent creator deity who made the material world. Gnostics often identified the Demiurge with the God of the Old Testament (Yahweh), viewing him as inferior to the true, transcendent Supreme God.",
        explanation: "This allowed Gnostics to explain evil and suffering in the material world while positing a higher, good deity."
      },
      {
        question: "What major archaeological discovery in 1945 transformed scholarly understanding of Gnosticism?",
        type: "mc",
        options: ["A) The Dead Sea Scrolls", "B) The Nag Hammadi Library", "C) The Cairo Geniza", "D) The Oxyrhynchus Papyri"],
        answer: "B) The Nag Hammadi Library",
        explanation: "The Nag Hammadi Library in Egypt contained over 50 Gnostic texts, allowing scholars to study Gnosticism from primary sources rather than only through orthodox opponents."
      },
      {
        question: "How did Irenaeus counter Gnostic claims about the inferiority of the material world?",
        type: "short",
        answer: "Irenaeus defended the goodness of creation, arguing that the God who created the material world in Genesis is the same true God revealed in Christ. Matter is not evil; God pronounced creation 'good.'",
        explanation: "This became the orthodox Christian position affirming creation's inherent goodness."
      },
      {
        question: "Which Gnostic concept refers to the divine realm of fullness where the Aeons dwell?",
        type: "mc",
        options: ["A) Gnosis", "B) Pleroma", "C) Archon", "D) Sophia"],
        answer: "B) Pleroma",
        explanation: "The Pleroma is the spiritual realm of divine fullness, contrasted with the deficient material world below."
      }
    ],
    keyTerms: [
      { term: "Gnosis", definition: "Greek for 'knowledge'; in Gnosticism, refers to secret spiritual knowledge necessary for salvation" },
      { term: "Demiurge", definition: "The creator god in Gnostic systems; often portrayed as ignorant or evil; identified with the Old Testament God" },
      { term: "Pleroma", definition: "'Fullness' - the divine spiritual realm where Aeons dwell in perfection" },
      { term: "Aeons", definition: "Divine beings or emanations from the Supreme God in Gnostic cosmology" },
      { term: "Sophia", definition: "'Wisdom' - a female Aeon whose fall or error results in the creation of the material world" },
      { term: "Archons", definition: "Cosmic rulers or powers that keep souls trapped in the material world" },
      { term: "Docetism", definition: "Belief that Christ only 'seemed' to have a physical body; common in Gnostic Christology" }
    ]
  },
{
    id: 9,
    videoId: "Aotkle8uCdI",
    title: "Monasticism in Early Church",
    videoTitle: "Monasticism in Early Church",
    duration: "~30 min",
    objective: "This module traces the origins of Christian monasticism from the Egyptian desert, examining why believers withdrew from society and how monastic life shaped Christian spirituality and institutions.",
    notes: {
      sections: [
        {
          title: "Origins and Context",
          points: [
            "**Monasticism** (from Greek monachos, 'solitary one') emerged in late third/early fourth century **Egypt**",
            "Arose partly as a response to Christianity becoming **legal and mainstream** under Constantine",
            "Earlier, **martyrdom** was the highest calling; monasticism became a new form of radical devotion",
            "Influences include: Jewish **asceticism**, Greek philosophical **self-discipline**, and Gospel teachings on renunciation",
            "The Egyptian desert provided **solitude** and escape from worldly distractions"
          ]
        },
        {
          title: "Antony of Egypt (c. 251-356)",
          points: [
            "**Antony** (also Anthony) is considered the 'Father of Monasticism'",
            "Around age 20, heard Gospel reading: 'Sell all you have and give to the poor' and obeyed literally",
            "Withdrew progressively deeper into the **Egyptian desert** for solitude and spiritual combat",
            "Engaged in intense **spiritual warfare** against demons who attacked with temptations and terrors",
            "Despite seeking solitude, attracted many followers; organized them into **loose communities**",
            "**Athanasius** wrote 'Life of Antony' (c. 356), which spread the monastic ideal throughout Christianity",
            "Lived to approximately **105 years old**, seen as proof of the holy life's benefits"
          ]
        },
        {
          title: "Pachomius and Cenobitic Monasticism",
          points: [
            "**Pachomius** (c. 292-348) founded the first organized **cenobitic** (communal) monasteries",
            "Created a **Rule** (set of regulations) governing daily life, prayer, work, and discipline",
            "Monks lived in **community** rather than alone; emphasized obedience to an abbot",
            "Monasteries became economically **self-sufficient** through agriculture and crafts",
            "By his death, Pachomius oversaw **9 monasteries** with thousands of monks",
            "His sister **Mary** founded the first convent, extending monasticism to women"
          ]
        },
        {
          title: "Types of Monastic Life",
          points: [
            "**Anchoritic/Eremitic**: Solitary hermit life (from Greek eremos, 'desert'); Antony's model",
            "**Cenobitic**: Communal life under a rule and abbot; Pachomius's model",
            "**Semi-eremitic**: Hermits living near each other, gathering periodically; **Lavra** system",
            "**Stylites**: Extreme ascetics who lived on pillars; most famous: **Simeon Stylites** (37 years)",
            "**Dendrites**: Lived in trees; **Grazers**: ate only grass; various extreme forms emerged"
          ]
        },
        {
          title: "Spread to the West",
          points: [
            "**Athanasius** brought knowledge of Egyptian monasticism to Rome during exile (340s)",
            "**Jerome** promoted monasticism through writings and his community in Bethlehem",
            "**Augustine** established a monastic community in North Africa with his Rule",
            "**John Cassian** (c. 360-435) wrote 'Conferences' and 'Institutes' transmitting desert wisdom to the West",
            "**Martin of Tours** (c. 316-397) founded the first monastery in Gaul (France)",
            "**Benedict of Nursia** (c. 480-547) wrote the Rule of St. Benedict, which became standard in Western monasticism"
          ]
        },
        {
          title: "Monastic Contributions",
          points: [
            "Preserved **classical and Christian texts** through copying manuscripts",
            "Developed **liturgical prayer** (Divine Office / Liturgy of the Hours)",
            "Pioneered **education and scholarship** when other institutions collapsed",
            "Provided **hospitality and charity** to travelers and the poor",
            "Became centers of **agricultural innovation** and land development",
            "Shaped Christian **spirituality**: prayer practices, spiritual direction, contemplation"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What event triggered Antony of Egypt to pursue the monastic life?",
        type: "mc",
        options: ["A) A vision of angels", "B) Hearing the Gospel command to sell all and give to the poor", "C) The death of his parents", "D) Persecution under Diocletian"],
        answer: "B) Hearing the Gospel command to sell all and give to the poor",
        explanation: "Antony heard Matthew 19:21 read in church and took it as a direct command to himself, beginning his journey into desert asceticism."
      },
      {
        question: "What is the difference between anchoritic and cenobitic monasticism?",
        type: "short",
        answer: "Anchoritic (eremitic) monasticism involves solitary hermit life in isolation, following Antony's model. Cenobitic monasticism involves communal life together under a rule and abbot, following Pachomius's model.",
        explanation: "These two forms represented different approaches to pursuing holiness through withdrawal from the world."
      },
      {
        question: "Who wrote the 'Life of Antony,' which spread the monastic ideal throughout Christianity?",
        type: "mc",
        options: ["A) Jerome", "B) Augustine", "C) Athanasius", "D) Pachomius"],
        answer: "C) Athanasius",
        explanation: "Athanasius wrote this influential biography around 356 AD, which became a bestseller and inspired countless Christians to pursue monasticism."
      },
      {
        question: "Why did monasticism emerge particularly after Constantine legalized Christianity?",
        type: "short",
        answer: "When Christianity became legal and mainstream, the opportunity for martyrdom largely disappeared. Monasticism offered an alternative form of radical self-sacrifice and total devotion to Christ that replaced martyrdom as the highest calling.",
        explanation: "The 'white martyrdom' of monasticism replaced the 'red martyrdom' of persecution."
      }
    ],
    keyTerms: [
      { term: "Monasticism", definition: "From Greek monachos ('solitary one'); Christian movement of withdrawal from society for prayer, asceticism, and devotion" },
      { term: "Anchoritic/Eremitic", definition: "Solitary hermit form of monasticism; from Greek eremos ('desert')" },
      { term: "Cenobitic", definition: "Communal form of monasticism where monks live together under a rule; from Greek koinos bios ('common life')" },
      { term: "Asceticism", definition: "Rigorous self-discipline and abstinence from physical pleasures for spiritual purposes" },
      { term: "Rule", definition: "Written guidelines governing daily life, prayer, work, and behavior in a monastic community" },
      { term: "Abbot", definition: "From Aramaic abba ('father'); the leader of a monastery" },
      { term: "Divine Office", definition: "The cycle of daily prayers at set hours developed in monasteries; also called Liturgy of the Hours" }
    ]
  },
{
    id: 10,
    videoId: "AQhTqHOKBs4",
    title: "Rome and the Third Century Crisis",
    videoTitle: "Rome and the Third Century Crisis",
    duration: "~25 min",
    objective: "This module examines the political, economic, and military chaos that nearly destroyed the Roman Empire in the third century and how this crisis shaped the context for both persecution and eventual Christian triumph.",
    notes: {
      sections: [
        {
          title: "Overview of the Crisis (235-284 AD)",
          points: [
            "The **Crisis of the Third Century** (235-284 AD) nearly caused the complete collapse of the Roman Empire",
            "Began with the assassination of **Severus Alexander** in 235 AD",
            "The period saw over **50 emperors** in 50 years, most dying violently",
            "Multiple simultaneous threats: **Germanic invasions**, **Persian wars**, **civil wars**, and **plague**",
            "The crisis ended when **Diocletian** established the Tetrarchy in 284 AD"
          ]
        },
        {
          title: "Political Instability",
          points: [
            "**Soldier emperors**: military commanders proclaimed by their troops, then assassinated",
            "No stable succession system; **armies competed** to install their generals as emperor",
            "The empire briefly **fragmented** into three parts: Gallic Empire, Roman center, and Palmyrene Empire",
            "Central authority weakened as **local strongmen** took control of regions",
            "**Aurelian** (270-275) reunified the empire but was assassinated shortly after"
          ]
        },
        {
          title: "Military Threats",
          points: [
            "**Germanic tribes** (Goths, Alemanni, Franks) repeatedly invaded across the Rhine and Danube",
            "The **Sassanid Persian Empire** attacked from the east; Emperor **Valerian captured** by Persians in 260 AD",
            "Roman armies stretched thin fighting on **multiple fronts** simultaneously",
            "Military needs drove **massive inflation** as emperors debased currency to pay troops",
            "Frontier defenses became increasingly porous; **cities built walls** for the first time in centuries"
          ]
        },
        {
          title: "Economic Collapse",
          points: [
            "**Currency debasement**: silver content of coins dropped from 90% to under 5%",
            "**Hyperinflation** destroyed the monetary economy; some regions reverted to barter",
            "**Trade networks** collapsed as roads became unsafe and political fragmentation disrupted commerce",
            "**Tax burden** increased dramatically to fund military; many fled to avoid taxes",
            "**Population decline** from plague, war, and emigration reduced labor and production"
          ]
        },
        {
          title: "The Plague of Cyprian (249-262 AD)",
          points: [
            "Named after **Bishop Cyprian of Carthage** who documented it",
            "Possibly **smallpox or measles**; killed up to 5,000 people per day in Rome at its peak",
            "Devastated the military, reducing army strength and defensive capability",
            "**Cyprian** noted how differently Christians and pagans responded to the plague",
            "Christians **cared for the sick** (including pagans), winning converts through compassion",
            "Plague contributed to both persecution (Christians blamed) and Christian growth"
          ]
        },
        {
          title: "Impact on Christianity",
          points: [
            "Crisis prompted emperors like **Decius** (250) and **Valerian** (257-260) to persecute Christians",
            "Persecution aimed to **restore traditional religion** and appease angry gods",
            "The crisis also created **opportunities for Christianity**: people sought new answers",
            "Christian **charity during plague** contrasted with pagan abandonment of the sick",
            "Church organization **strengthened** as Roman institutions weakened",
            "The stage was set for **Diocletian's** systematic persecution and then **Constantine's** conversion"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What extraordinary event happened to Emperor Valerian in 260 AD?",
        type: "mc",
        options: ["A) He converted to Christianity", "B) He was captured by the Sassanid Persians", "C) He successfully invaded Persia", "D) He was killed by Germanic tribes"],
        answer: "B) He was captured by the Sassanid Persians",
        explanation: "Valerian's capture was an unprecedented humiliation for Rome, with the emperor reportedly used as a footstool by the Persian king."
      },
      {
        question: "How did Christians respond to the Plague of Cyprian differently than pagans, and what effect did this have?",
        type: "short",
        answer: "Christians cared for the sick, including non-Christians, while pagans often fled or abandoned the ill. This compassionate response won converts and enhanced Christianity's reputation, even as Christians were sometimes blamed for causing the plague.",
        explanation: "Rodney Stark argues this differential response was a significant factor in Christian growth during this period."
      },
      {
        question: "Why did third-century emperors like Decius persecute Christians during the crisis?",
        type: "short",
        answer: "They believed the gods were angry because traditional religious practices had been neglected. By forcing everyone (including Christians) to sacrifice to the gods, they hoped to restore divine favor and end the military, economic, and plague disasters.",
        explanation: "Persecution was thus a conservative religious reform effort during a time of existential crisis."
      },
      {
        question: "Approximately how many emperors ruled during the 50-year Crisis of the Third Century?",
        type: "mc",
        options: ["A) About 10", "B) About 25", "C) About 50", "D) About 100"],
        answer: "C) About 50",
        explanation: "The extraordinary number of emperors (most murdered or killed in battle) illustrates the extreme political instability of this era."
      }
    ],
    keyTerms: [
      { term: "Crisis of the Third Century", definition: "Period of military, political, and economic chaos (235-284 AD) that nearly destroyed the Roman Empire" },
      { term: "Soldier Emperors", definition: "Military commanders proclaimed emperor by their armies during the third century, typically through violence" },
      { term: "Sassanid Empire", definition: "Persian empire that challenged Rome in the east; captured Emperor Valerian in 260 AD" },
      { term: "Currency Debasement", definition: "Reducing precious metal content in coins to mint more money; caused severe inflation" },
      { term: "Plague of Cyprian", definition: "Devastating epidemic (249-262 AD) that killed millions and weakened the empire further" },
      { term: "Tetrarchy", definition: "System of rule by four emperors established by Diocletian in 284 AD to end the crisis" }
    ]
  },
{
    id: 11,
    videoId: "8HSncAKHW3c",
    title: "Diocletian and the Tetrarchy",
    videoTitle: "Diocletian and the Tetrarchy",
    duration: "~30 min",
    objective: "This module examines the reign of Diocletian, his restructuring of the Roman Empire, and the Great Persecution (303-311 AD) - the most systematic and severe attempt to destroy Christianity.",
    notes: {
      sections: [
        {
          title: "Diocletian's Rise and Reforms",
          points: [
            "**Diocletian** (r. 284-305 AD) ended the Crisis of the Third Century and reformed the empire",
            "Rose from **humble origins** in Dalmatia (modern Croatia) through military ranks",
            "Established the **Tetrarchy** (rule of four): two senior 'Augusti' and two junior 'Caesars'",
            "Divided the empire into **East and West** for more effective administration and defense",
            "Implemented massive **bureaucratic expansion** and economic controls (price edicts)",
            "**Elevated the emperor** to semi-divine status with elaborate court ceremony (dominus et deus - 'lord and god')"
          ]
        },
        {
          title: "The Tetrarchy System",
          points: [
            "**East**: Diocletian (Augustus) with Galerius (Caesar) - capital at Nicomedia",
            "**West**: Maximian (Augustus) with Constantius (Caesar) - capitals at Milan and Trier",
            "Each Tetrarch defended a portion of the frontier and governed their region",
            "Designed for **orderly succession**: Caesars would become Augusti, then appoint new Caesars",
            "System worked initially but **collapsed** after Diocletian's retirement due to ambition and civil war"
          ]
        },
        {
          title: "Causes of the Great Persecution",
          points: [
            "For most of his reign, Diocletian **tolerated Christians**; his wife and daughter may have been sympathetic",
            "**Galerius**, his Caesar, was strongly anti-Christian and pushed for persecution",
            "An incident at a sacrifice where **Christians' cross signs** allegedly disrupted the omens",
            "Fire at the **imperial palace** (probably accidental) blamed on Christians",
            "Diocletian's ideology required **religious unity** to restore Roman greatness",
            "Oracle of Apollo at Didyma reportedly could not prophesy because of 'the righteous on earth' (Christians)"
          ]
        },
        {
          title: "The Four Edicts (303-304 AD)",
          points: [
            "**First Edict** (Feb 303): Destroy churches, burn scriptures, remove Christians from public office",
            "**Second Edict**: Arrest all clergy",
            "**Third Edict**: Release clergy who sacrifice; torture those who refuse",
            "**Fourth Edict** (304): Universal sacrifice required; death penalty for refusal",
            "Implementation varied by region: **severe in East** under Galerius, **milder in West** under Constantius",
            "The **traditores** ('those who handed over' scriptures) created lasting controversy"
          ]
        },
        {
          title: "The Persecution's Course",
          points: [
            "**Churches destroyed**, scriptures burned, sacred vessels confiscated",
            "**Clergy imprisoned** en masse; prisons overflowed",
            "**Torture and execution**: burning, beheading, wild beasts, mutilation",
            "Famous martyrs include **Agnes, Sebastian, Alban**, and many others",
            "Persecution most intense in **Egypt and North Africa** where Christianity was strongest",
            "**Diocletian abdicated** in 305 due to illness; persecution continued under Galerius"
          ]
        },
        {
          title: "End of the Persecution",
          points: [
            "Galerius issued the **Edict of Toleration** (April 311) on his deathbed, ending persecution in the East",
            "Galerius admitted persecution had **failed**: Christianity was not destroyed",
            "Asked Christians to **pray for him** and the empire - remarkable reversal",
            "**Constantine and Licinius** issued the Edict of Milan (313) granting full religious freedom",
            "The Great Persecution was the **last and most severe**, but Christianity emerged stronger",
            "Created a legacy of **martyrs and confessors** venerated for centuries"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What was the Tetrarchy and why did Diocletian establish it?",
        type: "short",
        answer: "The Tetrarchy was a system of rule by four emperors: two senior Augusti and two junior Caesars, dividing the empire between East and West. Diocletian established it to provide more effective defense of the frontiers and stable succession after the chaos of the third century.",
        explanation: "The system worked initially but collapsed into civil war after Diocletian's retirement."
      },
      {
        question: "What were 'traditores' and why did they cause controversy in the church?",
        type: "mc",
        options: ["A) Christians who pretended to sacrifice but didn't", "B) Clergy who handed over scriptures to be burned", "C) Pagans who converted to Christianity", "D) Monks who left their monasteries"],
        answer: "B) Clergy who handed over scriptures to be burned",
        explanation: "The traditores created lasting controversy about whether sacraments performed by such clergy were valid, contributing to the Donatist schism."
      },
      {
        question: "What remarkable action did Galerius take in his Edict of Toleration (311 AD)?",
        type: "short",
        answer: "The fierce persecutor Galerius admitted that persecution had failed to destroy Christianity, granted toleration, and actually asked Christians to pray for him and the empire.",
        explanation: "This dramatic reversal on his deathbed acknowledged Christianity's resilience and the futility of attempting to eradicate it."
      },
      {
        question: "Which region experienced the most severe persecution under the Great Persecution?",
        type: "mc",
        options: ["A) Gaul (France)", "B) Britain", "C) The Eastern Empire under Galerius", "D) Spain"],
        answer: "C) The Eastern Empire under Galerius",
        explanation: "The West under Constantius was relatively mild, while Galerius in the East pursued persecution with great severity."
      }
    ],
    keyTerms: [
      { term: "Tetrarchy", definition: "System of rule by four emperors (two Augusti, two Caesars) established by Diocletian to govern and defend the empire" },
      { term: "Great Persecution", definition: "The systematic persecution of Christians from 303-311 AD, the most severe in Roman history" },
      { term: "Traditores", definition: "'Those who handed over' - Christians who surrendered scriptures during persecution; their status caused lasting controversy" },
      { term: "Edict of Toleration (311)", definition: "Galerius's deathbed decree ending persecution and granting Christians the right to practice their religion" },
      { term: "Dominus et Deus", definition: "'Lord and God' - title Diocletian adopted, elevating the emperor to semi-divine status" },
      { term: "Confessor", definition: "A Christian who suffered for the faith during persecution but was not killed (distinguished from martyrs)" }
    ]
  },
{
    id: 12,
    videoId: "W0GCJfhjEYw",
    title: "Constantine the Great",
    videoTitle: "Constantine the Great",
    duration: "~35 min",
    objective: "This module examines Constantine's rise to power, his conversion to Christianity, the Edict of Milan, and the profound transformation of Christianity from persecuted sect to imperial religion.",
    notes: {
      sections: [
        {
          title: "Constantine's Rise to Power",
          points: [
            "**Constantine** (c. 272-337 AD) was son of Constantius Chlorus (Western Caesar under Diocletian)",
            "Raised partly at Diocletian's court in Nicomedia as a **political hostage**",
            "When Constantius died in **306 AD**, troops in Britain proclaimed Constantine Augustus",
            "This violated Diocletian's Tetrarchy succession system, triggering **civil wars**",
            "Gradually defeated rivals: **Maxentius** (312), **Licinius** (324) to become sole emperor"
          ]
        },
        {
          title: "The Battle of Milvian Bridge (312 AD)",
          points: [
            "Constantine marched on Rome to confront **Maxentius**, who controlled Italy",
            "Before the battle, Constantine reportedly saw a **vision**: cross in the sky with 'In this sign, conquer'",
            "Or perhaps a **dream** instructing him to mark soldiers' shields with the Chi-Rho (☧) symbol",
            "Accounts vary: **Lactantius** (contemporary) mentions dream; **Eusebius** mentions sky vision",
            "Constantine won decisively; **Maxentius drowned** in the Tiber River",
            "Constantine attributed victory to the **Christian God** and became patron of the church"
          ]
        },
        {
          title: "The Edict of Milan (313 AD)",
          points: [
            "Constantine and **Licinius** (Eastern emperor) met in Milan and agreed on religious policy",
            "Granted **complete religious freedom** to all, including Christians",
            "Ordered **return of confiscated property** to Christians and churches",
            "Not technically an 'edict' but a letter to provincial governors",
            "Went beyond **toleration** (Galerius's 311 edict) to full legal equality",
            "Marked the **end of persecution** and beginning of imperial favor for Christianity"
          ]
        },
        {
          title: "Constantine's Support for Christianity",
          points: [
            "**Built churches**: St. Peter's Basilica (Rome), Church of Holy Sepulchre (Jerusalem), churches in Constantinople",
            "Granted **legal privileges** to clergy: exemption from taxes and civic duties",
            "**Funded the church** from imperial treasury; endowed churches with land",
            "Made **Sunday** a day of rest (321 AD) - though also sacred to Sol Invictus",
            "Gave bishops **judicial authority** in civil cases (episcopalis audientia)",
            "**Presided over councils**: most notably the Council of Nicaea (325 AD)"
          ]
        },
        {
          title: "Questions About Constantine's Faith",
          points: [
            "Was Constantine's conversion **genuine** or politically motivated?",
            "He was not **baptized until his deathbed** (337) - but this was common practice then",
            "Continued to use **pagan imagery** (Sol Invictus) on coins for years after 312",
            "**Executed his son Crispus** and wife Fausta in 326 - hardly saintly behavior",
            "Yet he consistently **favored and funded** Christianity throughout his reign",
            "Most scholars see a **genuine but gradual** conversion with political benefits recognized"
          ]
        },
        {
          title: "The Founding of Constantinople",
          points: [
            "Constantine founded a new capital at **Byzantium**, renamed **Constantinople** (330 AD)",
            "Located strategically between **Europe and Asia**, controlling key trade routes",
            "Built as a **Christian city** without pagan temples (unlike Rome)",
            "Became the center of the **Eastern Roman (Byzantine) Empire** for over 1,000 years",
            "Moved the political center of gravity **eastward**, affecting church-state relations",
            "The 'New Rome' would rival and eventually surpass the old in importance"
          ]
        },
        {
          title: "Constantine's Legacy",
          points: [
            "Transformed Christianity from **persecuted minority to privileged religion**",
            "Set precedent for **imperial involvement** in church affairs (for good and ill)",
            "His sons continued **Christian favoritism**, leading to paganism's decline",
            "The Orthodox Church venerates him as **'Saint Constantine, Equal to the Apostles'**",
            "Critics see the **'Constantinian shift'** as corrupting the church with power and wealth",
            "His reign marks the most significant turning point in Christian history"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What did Constantine reportedly see or dream before the Battle of Milvian Bridge?",
        type: "mc",
        options: ["A) An angel holding a sword", "B) A cross in the sky with 'In this sign, conquer'", "C) The face of Christ on his shield", "D) The Virgin Mary predicting victory"],
        answer: "B) A cross in the sky with 'In this sign, conquer'",
        explanation: "Eusebius reports Constantine saw a cross of light above the sun with these words; Lactantius mentions a dream instructing him to use the Chi-Rho symbol."
      },
      {
        question: "How did the Edict of Milan (313) differ from Galerius's Edict of Toleration (311)?",
        type: "short",
        answer: "Galerius's edict merely stopped persecution and allowed Christians to exist. The Edict of Milan granted complete religious freedom, legal equality, and ordered the return of all confiscated Christian property and buildings.",
        explanation: "Milan moved beyond bare toleration to positive favor and restitution for past wrongs."
      },
      {
        question: "Why do some historians question the sincerity of Constantine's conversion?",
        type: "short",
        answer: "He delayed baptism until his deathbed, continued using pagan imagery (Sol Invictus) on coins, executed family members, and gained obvious political benefits from Christian support. However, he consistently supported Christianity throughout his reign.",
        explanation: "Most scholars now see a genuine but gradual conversion intertwined with political calculation."
      },
      {
        question: "Why was the founding of Constantinople significant for Christianity?",
        type: "mc",
        options: ["A) It was built as a Christian city without pagan temples", "B) It was where Constantine was baptized", "C) It housed the original manuscripts of the New Testament", "D) The Pope moved there permanently"],
        answer: "A) It was built as a Christian city without pagan temples",
        explanation: "Unlike Rome with its ancient pagan associations, Constantinople was founded as a Christian capital, symbolizing the new Christian empire."
      }
    ],
    keyTerms: [
      { term: "Battle of Milvian Bridge", definition: "Constantine's victory over Maxentius in 312 AD, after which he attributed success to the Christian God" },
      { term: "Chi-Rho (☧)", definition: "Monogram combining Greek letters Chi (X) and Rho (P), the first two letters of 'Christ'; Constantine's symbol" },
      { term: "Edict of Milan", definition: "313 AD agreement between Constantine and Licinius granting religious freedom and restoring Christian property" },
      { term: "Constantinople", definition: "New capital founded by Constantine in 330 AD on the site of Byzantium; center of Eastern Christianity" },
      { term: "Constantinian Shift", definition: "Term for the transformation of Christianity from persecuted sect to privileged imperial religion under Constantine" },
      { term: "Sol Invictus", definition: "'Unconquered Sun' - Roman sun god whose imagery Constantine continued to use alongside Christian symbols" },
      { term: "Episcopalis Audientia", definition: "Judicial authority granted to bishops to hear civil cases, giving church leaders legal power" }
    ]
  },
{
    id: 13,
    videoId: "GQowJ4sKsFw",
    title: "The Byzantine Christian Empire (Part 1)",
    videoTitle: "The Byzantine Christian Empire (Part 1)",
    duration: "~30 min",
    objective: "This module introduces the Eastern Roman (Byzantine) Empire, its distinctive Christian culture, and how the division between East and West shaped Christianity for a millennium.",
    notes: {
      sections: [
        {
          title: "What Was the Byzantine Empire?",
          points: [
            "**Byzantine Empire** is the modern name for the Eastern Roman Empire after the fall of the West",
            "Byzantines called themselves **'Romans'** (Rhomaioi) - the term 'Byzantine' is modern",
            "Lasted from Constantine's founding of Constantinople (330) until its fall to the Ottomans (**1453**)",
            "Combined **Roman administration**, **Greek culture**, and **Christian religion**",
            "Capital: **Constantinople** - the wealthiest and largest city in Christendom for centuries"
          ]
        },
        {
          title: "The Division of East and West",
          points: [
            "Emperor **Theodosius I** (d. 395) permanently divided the empire between his two sons",
            "**Western Empire** fell to Germanic invasions by 476 AD",
            "**Eastern Empire** survived, thrived, and continued Roman civilization for another 1,000 years",
            "East was **wealthier**: controlled major trade routes, Egypt's grain, and eastern commerce",
            "East had **stronger defenses**: Constantinople's walls resisted siege for centuries"
          ]
        },
        {
          title: "Justinian the Great (r. 527-565)",
          points: [
            "**Justinian** attempted to reconquer the West and reunite the Roman Empire",
            "Temporarily recovered **North Africa, Italy, and parts of Spain**",
            "Codified Roman law in the **Corpus Juris Civilis** (Body of Civil Law) - foundation of European law",
            "Built **Hagia Sophia** ('Holy Wisdom') in Constantinople - architectural marvel for a millennium",
            "His wife **Theodora** was highly influential; defended Chalcedonian orthodoxy during Nika riots",
            "Persecuted pagans and **closed the Platonic Academy** in Athens (529)"
          ]
        },
        {
          title: "Byzantine Christianity",
          points: [
            "**Caesaropapism**: the emperor had significant authority over church affairs",
            "The emperor summoned councils, enforced orthodoxy, and appointed patriarchs",
            "**Patriarch of Constantinople** became the leading bishop in the East",
            "Developed distinctive **liturgy**: Divine Liturgy of St. John Chrysostom",
            "**Icons** (sacred images) became central to worship and sparked major controversy",
            "**Monasticism** thrived, especially after Basil's Rule became standard"
          ]
        },
        {
          title: "East-West Tensions",
          points: [
            "**Language divide**: East spoke Greek, West spoke Latin; translations became problematic",
            "**Papal claims**: Rome claimed primacy; Constantinople saw itself as equal ('Pentarchy' of five patriarchs)",
            "**Theological differences**: Filioque controversy (does Spirit proceed from Father alone or Father 'and the Son'?)",
            "**Cultural differences**: liturgical practices, clerical celibacy, use of unleavened bread",
            "Tensions culminated in the **Great Schism of 1054** - formal break between East and West"
          ]
        },
        {
          title: "Byzantine Legacy",
          points: [
            "Preserved **classical learning** when the West fragmented",
            "Transmitted **Greek philosophy and literature** to both Islam and the West",
            "**Christianized the Slavs**: Cyril and Methodius created Slavonic alphabet and liturgy",
            "**Orthodox Christianity** spread to Russia, Ukraine, Bulgaria, Serbia, Romania, Greece",
            "Byzantine theological, liturgical, and artistic traditions continue in **Eastern Orthodoxy** today",
            "Fall of Constantinople (1453) prompted Greek scholars to flee West, contributing to the **Renaissance**"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "Why did the Eastern Roman Empire survive while the Western Empire fell?",
        type: "short",
        answer: "The East was wealthier (controlling major trade routes and Egypt's grain), had stronger defensive positions (Constantinople's walls were nearly impregnable), and faced less severe barbarian pressure than the West.",
        explanation: "These structural advantages allowed the East to continue Roman civilization for another millennium."
      },
      {
        question: "What is 'caesaropapism' and how did it characterize Byzantine Christianity?",
        type: "short",
        answer: "Caesaropapism refers to the emperor's significant authority over church affairs - summoning councils, enforcing orthodoxy, and even appointing patriarchs. The Byzantine emperor saw himself as God's representative responsible for both political and religious order.",
        explanation: "This church-state relationship differed significantly from the West, where popes increasingly claimed independence from secular rulers."
      },
      {
        question: "Which emperor built the Hagia Sophia and codified Roman law?",
        type: "mc",
        options: ["A) Constantine", "B) Theodosius I", "C) Justinian", "D) Heraclius"],
        answer: "C) Justinian",
        explanation: "Justinian's reign (527-565) represents the height of Byzantine power, with major legal, architectural, and military achievements."
      },
      {
        question: "What was the 'Filioque' controversy between East and West?",
        type: "mc",
        options: ["A) Whether to use leavened or unleavened bread in Eucharist", "B) Whether the Holy Spirit proceeds from the Father alone or from Father 'and the Son'", "C) Whether priests should be celibate", "D) Whether icons should be venerated"],
        answer: "B) Whether the Holy Spirit proceeds from the Father alone or from Father 'and the Son'",
        explanation: "The West added 'and the Son' (Filioque) to the Nicene Creed; the East rejected this addition as unauthorized and theologically problematic."
      }
    ],
    keyTerms: [
      { term: "Byzantine Empire", definition: "Modern name for the Eastern Roman Empire from Constantine (330) to Constantinople's fall (1453)" },
      { term: "Caesaropapism", definition: "System where the emperor exercises authority over church affairs, characteristic of Byzantine Christianity" },
      { term: "Hagia Sophia", definition: "'Holy Wisdom' - Justinian's great church in Constantinople, an architectural wonder for a millennium" },
      { term: "Pentarchy", definition: "Theory that five patriarchs (Rome, Constantinople, Alexandria, Antioch, Jerusalem) jointly led the church" },
      { term: "Filioque", definition: "'And the Son' - addition to the Nicene Creed in the West stating the Spirit proceeds from Father and Son; rejected by East" },
      { term: "Great Schism (1054)", definition: "Formal break between Eastern Orthodox and Roman Catholic churches, still not fully healed" }
    ]
  },
  {
    id: 14,
    videoId: "L6qMvsv0O8c",
    title: "The Byzantine Christian Empire (Part 2)",
    videoTitle: "The Byzantine Christian Empire (Part 2)",
    duration: "~30 min",
    objective: "This lecture continues the story of the Eastern Roman (Byzantine) Empire after Justinian, tracing its struggles with Islam, the iconoclastic controversy, and its enduring shaping of Eastern Orthodox Christianity.",
    notes: {
      sections: [
        {
          title: "After Justinian",
          points: [
            "Plague, war with Persia, and exhausted treasury weakened the empire",
            "Emperor **Heraclius (610-641)** defeated Persia but soon faced a new threat from Arab armies",
            "Loss of Syria, Egypt, and North Africa to **Islamic conquests** (632-720)",
            "Empire shrank to Anatolia and the Balkans, becoming distinctly Greek and Orthodox",
          ]
        },
        {
          title: "The Iconoclastic Controversy (726-843)",
          points: [
            "Emperor **Leo III** banned the veneration of icons in 726, believing them idolatrous",
            "**Iconoclasts** ('image-breakers') destroyed religious images across the empire",
            "**John of Damascus** defended icons: matter became holy through the incarnation",
            "**Second Council of Nicaea (787)** restored icon veneration, distinguishing it from worship",
            "Final 'Triumph of Orthodoxy' in 843 — still celebrated annually in the Orthodox Church",
          ]
        },
        {
          title: "Byzantine Christianity",
          points: [
            "Caesaropapism: emperor as protector and guide of the church",
            "Rich liturgical and mystical tradition (Hesychasm, Divine Liturgy)",
            "Missionary expansion to the Slavs through **Cyril and Methodius**",
            "Created the **Cyrillic alphabet** for Slavic peoples",
            "Set the stage for the Christianization of Russia under Vladimir (988)",
          ]
        },
        {
          title: "Long Decline and Legacy",
          points: [
            "Repeated wars with Muslim powers, Bulgars, and later the Crusaders",
            "Sack of Constantinople in **1204** by Fourth Crusade gravely weakened the empire",
            "Final fall to the Ottoman Turks in **1453**",
            "Byzantine theology, liturgy, and art remain foundational for Eastern Orthodoxy",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "What was the central issue in the iconoclastic controversy?",
        type: "short",
        answer: "Whether religious images (icons) of Christ, Mary, and the saints could be venerated, or whether their use violated the second commandment against idolatry.",
        explanation: "Icon defenders argued the incarnation made matter a fit medium for grace; iconoclasts feared a return to pagan image-worship."
      },
      {
        question: "Which council restored icon veneration?",
        type: "mc",
        options: ["A) Council of Chalcedon (451)", "B) Second Council of Nicaea (787)", "C) Council of Constance (1414)", "D) Lateran IV (1215)"],
        answer: "B) Second Council of Nicaea (787)",
        explanation: "Nicaea II distinguished veneration (dulia) from worship (latria), permitting honor to icons as windows to their prototypes."
      },
      {
        question: "Why was 1453 a turning point?",
        type: "short",
        answer: "The Ottoman conquest of Constantinople ended the Byzantine Empire, transferring leadership of Eastern Orthodoxy to other centers — most importantly Moscow, which began to see itself as a 'Third Rome.'",
        explanation: "It closed a thousand-year chapter of Christian empire in the East and reshaped the religious map of the Mediterranean."
      },
    ],
    keyTerms: [
      { term: "Iconoclasm", definition: "Movement to destroy religious images, official imperial policy 726-843" },
      { term: "John of Damascus", definition: "Eighth-century theologian whose treatises defended icons on incarnational grounds" },
      { term: "Second Council of Nicaea (787)", definition: "Seventh ecumenical council; affirmed icon veneration" },
      { term: "Cyril and Methodius", definition: "Ninth-century missionaries to the Slavs; created the Cyrillic alphabet" },
      { term: "Caesaropapism", definition: "System in which the emperor exercises authority over the church" },
      { term: "Hesychasm", definition: "Byzantine contemplative tradition focused on the Jesus Prayer and inner stillness" },
    ]
  },
{
    id: 15,
    videoId: "xMz5MiM4iww",
    title: "Creeds and Councils: What are they?",
    videoTitle: "Creeds and Councils: What are they?",
    duration: "~25 min",
    objective: "This module explains the development of Christian creeds and the function of ecumenical councils in defining orthodoxy and responding to theological controversies.",
    notes: {
      sections: [
        {
          title: "The Purpose of Creeds",
          points: [
            "**Creeds** (from Latin credo, 'I believe') are authoritative summaries of Christian faith",
            "Originally developed for **baptismal instruction** and confession",
            "Later used to **define orthodoxy** against heresy and unify the church",
            "Served as **tests of faith** for clergy, teachers, and converts",
            "Major creeds: **Apostles' Creed** (baptismal), **Nicene Creed** (conciliar), **Athanasian Creed** (didactic)"
          ]
        },
        {
          title: "The Apostles' Creed",
          points: [
            "Not written by the apostles but reflects **early Roman baptismal confession**",
            "Developed gradually from the **Old Roman Symbol** (c. 150 AD) to final form (c. 700 AD)",
            "Structure reflects **Trinitarian baptism**: Father, Son, Holy Spirit sections",
            "Emphasizes **historical facts** of Jesus' life against Gnostic and Docetic denials",
            "Affirms: virgin birth, crucifixion under Pontius Pilate, physical resurrection, future judgment",
            "Used primarily in the **Western church** for baptism and daily prayer"
          ]
        },
        {
          title: "What Are Ecumenical Councils?",
          points: [
            "**Ecumenical councils** are church-wide assemblies of bishops to address major issues",
            "From Greek oikoumene, meaning 'the whole inhabited world'",
            "**Called by emperors** (not popes) in the early church period",
            "Decisions considered **binding on all Christians** when confirmed by the church",
            "Both East and West recognize the first **seven ecumenical councils** (325-787 AD)",
            "Councils claimed guidance of the **Holy Spirit**: 'It seemed good to the Holy Spirit and to us' (Acts 15:28)"
          ]
        },
        {
          title: "The Seven Ecumenical Councils",
          points: [
            "**Nicaea I (325)**: Condemned Arianism; produced Nicene Creed core",
            "**Constantinople I (381)**: Expanded Nicene Creed; affirmed Holy Spirit's divinity",
            "**Ephesus (431)**: Affirmed Mary as Theotokos; condemned Nestorianism",
            "**Chalcedon (451)**: Defined Christ's two natures; condemned Monophysitism",
            "**Constantinople II (553)**: Condemned 'Three Chapters'; tried to reconcile Monophysites",
            "**Constantinople III (680-681)**: Condemned Monothelitism (one will in Christ)",
            "**Nicaea II (787)**: Affirmed veneration of icons; ended Iconoclasm"
          ]
        },
        {
          title: "How Councils Worked",
          points: [
            "**Bishops** attended as voting members; emperors presided or sent representatives",
            "Debates often **fierce and political** - not purely spiritual affairs",
            "Decisions made by **majority vote**; dissenters often exiled",
            "Produced **canons** (regulations) on church discipline alongside doctrinal definitions",
            "Definitions often used **technical philosophical language** (ousia, hypostasis, physis)",
            "**Reception** by the wider church confirmed a council's authority over time"
          ]
        },
        {
          title: "The Nicene Creed",
          points: [
            "Produced at **Nicaea (325)** and expanded at **Constantinople (381)**",
            "Often called the **'Niceno-Constantinopolitan Creed'**",
            "The most widely used creed across **Catholic, Orthodox, and Protestant** churches",
            "Key phrase against Arianism: Christ is '**homoousios**' (same substance) with the Father",
            "Affirms Christ is 'God from God, Light from Light, true God from true God, begotten not made'",
            "The Western addition of **Filioque** ('and the Son') was not in the original"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What is the difference between the Apostles' Creed and the Nicene Creed in terms of origin and purpose?",
        type: "short",
        answer: "The Apostles' Creed developed gradually from early Roman baptismal confessions for instructing and examining converts. The Nicene Creed was produced by ecumenical councils (Nicaea 325, Constantinople 381) specifically to combat Arianism and define orthodox Trinitarian doctrine.",
        explanation: "The Apostles' Creed is simpler and narrative; the Nicene Creed is more theologically precise and technical."
      },
      {
        question: "Who called the ecumenical councils in the early church?",
        type: "mc",
        options: ["A) The Pope", "B) The Patriarch of Constantinople", "C) The Roman Emperor", "D) A vote of bishops"],
        answer: "C) The Roman Emperor",
        explanation: "Emperors convened ecumenical councils, presided over them (or sent representatives), and enforced their decisions - reflecting caesaropapism."
      },
      {
        question: "What Greek term in the Nicene Creed describes Christ as 'of the same substance' with the Father?",
        type: "mc",
        options: ["A) Homoiousios", "B) Homoousios", "C) Hypostasis", "D) Ousia"],
        answer: "B) Homoousios",
        explanation: "Homoousios ('same substance') was the key anti-Arian term; the similar homoiousios ('similar substance') was the Semi-Arian alternative."
      },
      {
        question: "How many ecumenical councils are recognized by both Eastern Orthodox and Roman Catholic churches?",
        type: "mc",
        options: ["A) Four", "B) Seven", "C) Twelve", "D) Twenty-one"],
        answer: "B) Seven",
        explanation: "Both traditions accept the seven councils from Nicaea I (325) to Nicaea II (787); Catholics recognize additional councils, while Orthodox do not."
      }
    ],
    keyTerms: [
      { term: "Creed", definition: "From Latin credo ('I believe'); authoritative summary of Christian faith used for instruction, worship, and defining orthodoxy" },
      { term: "Ecumenical Council", definition: "Church-wide assembly of bishops to address major theological or disciplinary issues; decisions binding on all Christians" },
      { term: "Homoousios", definition: "'Same substance' - key Nicene term affirming Christ is fully divine, of identical essence with the Father" },
      { term: "Canon", definition: "A rule or regulation; councils produced canons on church discipline alongside doctrinal definitions" },
      { term: "Nicene Creed", definition: "Creed produced at Nicaea (325) and expanded at Constantinople (381); the most widely used Christian creed" },
      { term: "Reception", definition: "The process by which the wider church accepts and confirms a council's authority over time" }
    ]
  },
  {
    id: 16,
    videoId: "IlzM7LogGRU",
    title: "Early Church and Trinity: Father and Son",
    videoTitle: "Early Church and Trinity: Father and Son",
    duration: "~30 min",
    objective: "Before Nicaea, the church wrestled to articulate how the Father and the Son are related. This lecture surveys the early attempts (and dead ends) that set up the great Trinitarian debates of the fourth century.",
    notes: {
      sections: [
        {
          title: "The Problem",
          points: [
            "Christians worshipped Jesus as God but insisted that there is one God",
            "How can the Son be truly God and yet not a second God?",
            "Jewish monotheism made any compromise unthinkable",
            "Greek philosophical categories (substance, person) entered the discussion",
          ]
        },
        {
          title: "Early (Inadequate) Models",
          points: [
            "**Modalism / Sabellianism**: Father, Son, and Spirit are three modes of one God",
            "**Adoptionism**: Jesus was a man adopted as Son of God at his baptism",
            "**Subordinationism**: the Son is divine but lesser than the Father",
            "Each preserved monotheism but failed to capture the New Testament witness",
          ]
        },
        {
          title: "Key Voices Before Nicaea",
          points: [
            "**Tertullian** coined *trinitas*: 'three persons, one substance'",
            "**Origen** spoke of the eternal generation of the Son but slid toward subordinationism",
            "**Irenaeus** stressed the unity of the Father working through Son and Spirit",
            "Rule of Faith and baptismal formulas (Matthew 28:19) shaped worship and belief",
          ]
        },
        {
          title: "Setting the Stage for Nicaea",
          points: [
            "By 300, the church needed precise language for the Father-Son relationship",
            "Arius pushed subordinationism to a breaking point",
            "The stage was set for the controversy that would define orthodox Trinitarian faith",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "What does modalism teach?",
        type: "short",
        answer: "That God is one person who appears in three successive modes — Father, Son, Spirit — rather than three distinct persons. Also called Sabellianism.",
        explanation: "It safeguarded monotheism but denied real distinction between the persons."
      },
      {
        question: "Who coined the Latin term *trinitas*?",
        type: "mc",
        options: ["A) Origen", "B) Tertullian", "C) Athanasius", "D) Augustine"],
        answer: "B) Tertullian",
        explanation: "Tertullian's formula 'three persons, one substance' became foundational vocabulary for Western Trinitarian theology."
      },
      {
        question: "Why was subordinationism attractive — and dangerous?",
        type: "short",
        answer: "It seemed to preserve the oneness of God by ranking the Son beneath the Father. But it threatened to make Christ a creature, undermining salvation, which requires that the one who saves be truly God.",
        explanation: "The Nicene response insisted the Son is 'of one substance' (homoousios) with the Father."
      },
    ],
    keyTerms: [
      { term: "Modalism", definition: "View that Father, Son, and Spirit are three modes of one divine person" },
      { term: "Adoptionism", definition: "Heresy that Jesus was a mere man adopted as Son of God" },
      { term: "Subordinationism", definition: "View that the Son is divine but lesser than the Father" },
      { term: "Trinitas", definition: "Latin term coined by Tertullian for the triune God" },
      { term: "Eternal Generation", definition: "Doctrine that the Son is eternally begotten of the Father, not made" },
      { term: "Rule of Faith", definition: "Early summary of apostolic teaching used to test orthodoxy" },
    ]
  },
{
    id: 17,
    videoId: "Nduka-QqXbQ",
    title: "Arius and Nicea",
    videoTitle: "Arius and Nicea",
    duration: "~35 min",
    objective: "This module examines the Arian controversy that prompted the Council of Nicaea (325 AD), the council's deliberations, and the Nicene definition of Christ's full divinity.",
    notes: {
      sections: [
        {
          title: "Arius and His Teaching",
          points: [
            "**Arius** (c. 256-336) was a popular presbyter in Alexandria, Egypt",
            "Taught that the Son (Logos) was the **first and greatest creation** of God",
            "Famous slogan: **'There was when he was not'** - the Son had a beginning",
            "The Son is divine but **not fully God**; created 'out of nothing' before time",
            "Christ is unlike (**anomoios**) or similar to (**homoios**) the Father, but not identical",
            "Motivated by concern to preserve God's **uniqueness and transcendence**"
          ]
        },
        {
          title: "The Spread of the Controversy",
          points: [
            "Bishop **Alexander of Alexandria** condemned Arius and excommunicated him (c. 318)",
            "Arius appealed to other bishops, especially **Eusebius of Nicomedia** (influential at court)",
            "The controversy **spread rapidly** throughout the Eastern church",
            "**Popular songs** and debates brought theological dispute to the streets",
            "Emperor **Constantine**, newly converted, was alarmed at Christian disunity",
            "Constantine sent **Hosius of Cordoba** to mediate but failed; called a council"
          ]
        },
        {
          title: "The Council of Nicaea (325 AD)",
          points: [
            "First **ecumenical council**; called by Constantine at Nicaea (modern Iznik, Turkey)",
            "Approximately **300 bishops** attended, mostly from the East",
            "Constantine presided, opened the council, and pushed for unity",
            "Key figures: **Alexander of Alexandria**, **Athanasius** (his deacon), **Hosius of Cordoba**",
            "**Eusebius of Caesarea** proposed a creed; council modified it with stronger anti-Arian language",
            "Only **two bishops** refused to sign the final creed and were exiled with Arius"
          ]
        },
        {
          title: "The Nicene Definition",
          points: [
            "Christ is '**God from God, Light from Light, true God from true God**'",
            "Key term: **homoousios** ('of the same substance/essence') with the Father",
            "Christ is '**begotten, not made**' - eternal generation, not creation",
            "Explicit condemnation: those who say 'there was when he was not' are **anathematized**",
            "The creed affirmed what Scripture taught but used **non-biblical philosophical terms**",
            "This set a precedent for **theological development** beyond biblical language"
          ]
        },
        {
          title: "Other Decisions at Nicaea",
          points: [
            "Resolved the **Easter date** controversy (follow Roman/Alexandrian calculation, not Jewish calendar)",
            "**Twenty canons** on church discipline: ordination, penance, structure",
            "Recognized **three major sees**: Rome, Alexandria, Antioch (Canon 6)",
            "Addressed the **Meletian schism** in Egypt and **Novatianist** rigorism",
            "Established precedent for **council authority** in settling disputes"
          ]
        },
        {
          title: "Aftermath: The Controversy Continues",
          points: [
            "Nicaea did **not end the controversy** - Arianism revived within years",
            "Constantine later favored Arians; **Arius was recalled** from exile (died 336)",
            "**Athanasius** was exiled five times for defending Nicaea",
            "Various **compromise positions** emerged: homoiousios ('similar substance'), homoios ('similar')",
            "The controversy was not settled until **Constantinople I (381)** reaffirmed and expanded Nicaea",
            "The fight for Nicene orthodoxy lasted over **50 years** after the council"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What was Arius's main teaching about the Son of God?",
        type: "short",
        answer: "Arius taught that the Son (Logos) was the first and greatest creation of God - divine but not fully God. His slogan was 'there was when he was not,' meaning the Son had a beginning and was created out of nothing before time.",
        explanation: "Arius was motivated by concern to protect God's absolute uniqueness and transcendence."
      },
      {
        question: "What does the Greek term 'homoousios' mean, and why was it significant at Nicaea?",
        type: "short",
        answer: "Homoousios means 'of the same substance' or 'of the same essence.' It was the key term affirming that Christ is fully divine, sharing the identical divine nature with the Father - not merely similar or the first creature.",
        explanation: "This non-biblical term became the touchstone of Nicene orthodoxy against all forms of Arianism."
      },
      {
        question: "Who called the Council of Nicaea?",
        type: "mc",
        options: ["A) Pope Sylvester I", "B) Bishop Alexander of Alexandria", "C) Emperor Constantine", "D) Athanasius"],
        answer: "C) Emperor Constantine",
        explanation: "Constantine called and presided over the council, concerned that Christian division threatened imperial unity."
      },
      {
        question: "Did the Council of Nicaea successfully end the Arian controversy?",
        type: "mc",
        options: ["A) Yes, Arianism disappeared immediately", "B) No, Arianism revived and the controversy lasted another 50+ years", "C) Yes, but only in the West", "D) The council never addressed Arianism directly"],
        answer: "B) No, Arianism revived and the controversy lasted another 50+ years",
        explanation: "Arianism revived soon after Nicaea, with imperial support at times, and was only definitively settled at Constantinople I (381)."
      }
    ],
    keyTerms: [
      { term: "Arianism", definition: "Teaching that the Son is the first and greatest creature, divine but not fully God; 'there was when he was not'" },
      { term: "Homoousios", definition: "'Of the same substance' - Nicene term affirming Christ shares identical divine essence with the Father" },
      { term: "Homoiousios", definition: "'Of similar substance' - compromise position; Christ similar but not identical to the Father" },
      { term: "Council of Nicaea", definition: "First ecumenical council (325 AD) called by Constantine; condemned Arianism and produced the Nicene Creed" },
      { term: "Anathema", definition: "Formal curse or condemnation; Nicaea anathematized those holding Arian views" },
      { term: "Begotten Not Made", definition: "Nicene phrase distinguishing Christ's eternal generation from the Father from being a created being" }
    ]
  },
{
    id: 18,
    videoId: "CfP7DNG_ZbM",
    title: "After Nicea",
    videoTitle: "After Nicea",
    duration: "~30 min",
    objective: "This module examines the life and theology of Athanasius, the tireless champion of Nicene orthodoxy who was exiled five times for defending Christ's full divinity against Arianism.",
    notes: {
      sections: [
        {
          title: "Life and Background",
          points: [
            "**Athanasius** (c. 296-373 AD) was bishop of Alexandria for 45 years (328-373)",
            "Born in Alexandria; received excellent **classical and theological education**",
            "Attended the **Council of Nicaea (325)** as a young deacon with Bishop Alexander",
            "Succeeded Alexander as bishop in 328; immediately opposed by Arians",
            "**Exiled five times** by four different emperors for defending Nicaea",
            "Phrase '**Athanasius contra mundum**' ('Athanasius against the world') captures his tenacity"
          ]
        },
        {
          title: "His Defense of Nicaea",
          points: [
            "Argued that **only a fully divine Savior can save**: 'What is not assumed is not healed'",
            "If Christ is a creature, we are worshiping a creature - **idolatry**",
            "Salvation requires that God himself entered human nature to **transform and deify it**",
            "Christ must be homoousios (same substance) with both **Father and humanity** to bridge the gap",
            "Wrote extensively against Arianism: **'On the Incarnation'**, **'Orations Against the Arians'**",
            "Defended the Nicene term homoousios even when it was unpopular"
          ]
        },
        {
          title: "The Five Exiles",
          points: [
            "**First exile (335-337)**: To Trier in Gaul under Constantine",
            "**Second exile (339-346)**: To Rome under Constantius II; built Western support",
            "**Third exile (356-362)**: Fled to Egyptian desert monks for six years",
            "**Fourth exile (362-363)**: Brief, under Julian the Apostate's pagan restoration",
            "**Fifth exile (365-366)**: Brief, under Arian emperor Valens",
            "Spent about **17 years in exile** but never abandoned his position"
          ]
        },
        {
          title: "On the Incarnation",
          points: [
            "Written c. 318 as a young man, before the Arian controversy erupted",
            "Argues that the **Logos became human** to restore the divine image in humanity",
            "Death entered through sin; only the **immortal Logos** could defeat death",
            "Christ assumed human nature to **sanctify and transform it** from within",
            "The incarnation reveals God's **love and wisdom**: God saves by entering creation",
            "Influential text still read today; C.S. Lewis wrote an introduction to a modern edition"
          ]
        },
        {
          title: "Life of Antony",
          points: [
            "Athanasius wrote the **'Life of Antony'** (c. 356) during his third exile",
            "Biography of **Antony of Egypt**, the father of monasticism",
            "Became a **bestseller** that spread the monastic ideal throughout Christianity",
            "Influenced **Augustine's conversion** (he read it in Milan)",
            "Presented the monk as a model of **spiritual warfare** and devotion",
            "Helped establish monasticism as central to Christian spirituality"
          ]
        },
        {
          title: "Legacy and Significance",
          points: [
            "His **39th Festal Letter (367)** first listed the 27 books of the New Testament canon",
            "Worked to include **moderate Semi-Arians** who accepted Nicaea's substance if not its terms",
            "Defended the **full divinity of the Holy Spirit** (against 'Pneumatomachians')",
            "His theology directly shaped the **Cappadocian Fathers** and Constantinople I",
            "Venerated as **'Father of Orthodoxy'** in Eastern and Western churches",
            "His persistence ensured that **Nicene Christianity** became normative"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "Why did Athanasius argue that Christ must be fully divine for salvation to be possible?",
        type: "short",
        answer: "Athanasius argued that only a fully divine Savior can truly save. If Christ were merely a creature, he could not bridge the gap between God and humanity or transform human nature. What is not assumed (by God) is not healed.",
        explanation: "This soteriological argument ('saved by what God assumes') became central to orthodox Christology."
      },
      {
        question: "How many times was Athanasius exiled for defending Nicene orthodoxy?",
        type: "mc",
        options: ["A) Two times", "B) Three times", "C) Five times", "D) Seven times"],
        answer: "C) Five times",
        explanation: "Athanasius was exiled five times by four different emperors, spending about 17 years in exile, but never abandoned his defense of Christ's full divinity."
      },
      {
        question: "What influential work did Athanasius write that helped spread monasticism throughout Christianity?",
        type: "mc",
        options: ["A) On the Incarnation", "B) Life of Antony", "C) Orations Against the Arians", "D) The Nicene Creed"],
        answer: "B) Life of Antony",
        explanation: "The Life of Antony became a bestseller that inspired countless Christians to pursue the monastic life, including influencing Augustine's conversion."
      },
      {
        question: "What is significant about Athanasius's 39th Festal Letter (367 AD)?",
        type: "short",
        answer: "It contains the first known list of exactly the 27 books that make up the New Testament canon as we know it today - no more, no less.",
        explanation: "While the canon developed gradually, Athanasius's list represents a key moment in its crystallization."
      }
    ],
    keyTerms: [
      { term: "Athanasius contra mundum", definition: "'Athanasius against the world' - phrase capturing his stubborn defense of Nicaea when most opposed him" },
      { term: "On the Incarnation", definition: "Athanasius's early work explaining why the Logos became human to save humanity from death and corruption" },
      { term: "Life of Antony", definition: "Athanasius's biography of Antony of Egypt that spread the monastic ideal throughout Christianity" },
      { term: "Festal Letter", definition: "Annual letter from the bishop of Alexandria announcing the date of Easter; Athanasius's 39th letter listed the NT canon" },
      { term: "Deification/Theosis", definition: "Eastern doctrine that salvation involves humans becoming 'partakers of the divine nature'; central to Athanasius's soteriology" },
      { term: "Pneumatomachians", definition: "'Spirit-fighters' - those who denied the full divinity of the Holy Spirit; Athanasius opposed them" }
    ]
  },
{
    id: 19,
    videoId: "WrlR1aFODDI",
    title: "Council of Constantinople",
    videoTitle: "Council of Constantinople",
    duration: "~30 min",
    objective: "This module examines the three Cappadocian Fathers - Basil the Great, Gregory of Nazianzus, and Gregory of Nyssa - who refined Trinitarian theology and secured the victory of Nicene orthodoxy.",
    notes: {
      sections: [
        {
          title: "Who Were the Cappadocians?",
          points: [
            "Three theologians from **Cappadocia** (central modern Turkey) in the late fourth century",
            "**Basil the Great** (330-379): bishop of Caesarea, church administrator, monastic organizer",
            "**Gregory of Nazianzus** (329-390): brilliant orator, briefly patriarch of Constantinople",
            "**Gregory of Nyssa** (335-395): Basil's younger brother, mystical theologian and philosopher",
            "All three were friends; Basil and Gregory of Nazianzus met as students in Athens",
            "They developed the **Trinitarian vocabulary** that became standard orthodoxy"
          ]
        },
        {
          title: "The Trinitarian Problem They Solved",
          points: [
            "After Nicaea, confusion remained: **homoousios** could sound like **modalism** (one person, three masks)",
            "How to affirm **three distinct persons** without denying **one divine essence**?",
            "Earlier language used ousia (essence) and hypostasis (substance) as **synonyms**",
            "Cappadocians distinguished them: **one ousia, three hypostases**",
            "**Ousia** = what God **is** (shared divine nature/essence)",
            "**Hypostasis** = who God **is** (distinct persons: Father, Son, Spirit)"
          ]
        },
        {
          title: "Basil the Great",
          points: [
            "Bishop of Caesarea (370-379); brilliant administrator and defender of Nicaea",
            "Wrote **'On the Holy Spirit'** defending the Spirit's full divinity",
            "Created the **Rule of St. Basil** - still the basis of Eastern monasticism",
            "Established **hospitals, hostels, and poor relief** ('Basiliad') as Christian charity",
            "Resisted Arian emperor **Valens**; famous exchange: 'No one has ever spoken to me like this!'",
            "Basil: 'Perhaps you have never met a bishop before'"
          ]
        },
        {
          title: "Gregory of Nazianzus",
          points: [
            "Called 'The Theologian' for his **five Theological Orations** on the Trinity",
            "Reluctant bishop; preferred **contemplative life** but was pushed into leadership",
            "Briefly **patriarch of Constantinople (379-381)**; presided at Constantinople I initially",
            "Resigned due to church politics; returned to **writing and poetry**",
            "His orations provided the **theological foundation** for Constantinople I's Trinitarian definition",
            "Articulated the **progressive revelation** of the Trinity in salvation history"
          ]
        },
        {
          title: "Gregory of Nyssa",
          points: [
            "Basil's younger brother; more **philosophical and mystical** than the others",
            "Influenced by **Origen** and **Neoplatonism**; developed apophatic (negative) theology",
            "Wrote **'Life of Moses'** - allegorical interpretation as spiritual journey",
            "Championed **divine infinity**: God is unlimited and incomprehensible",
            "Contributed to the doctrine of **eternal progress** (epektasis) into God",
            "Defended Nicaea at **Constantinople I (381)**"
          ]
        },
        {
          title: "Their Lasting Contribution",
          points: [
            "Established the formula: **one essence (ousia), three persons (hypostases)**",
            "Distinguished persons by **relations of origin**: Father unbegotten, Son begotten, Spirit proceeding",
            "Affirmed the Holy Spirit as **fully divine and homoousios** with Father and Son",
            "Their theology was codified at **Constantinople I (381)** in the expanded Nicene Creed",
            "Provided vocabulary for all subsequent **Trinitarian theology** in East and West",
            "Their writings remain foundational for **Eastern Orthodox spirituality**"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "How did the Cappadocian Fathers distinguish 'ousia' from 'hypostasis' to clarify Trinitarian doctrine?",
        type: "short",
        answer: "They defined ousia (essence) as what God is - the shared divine nature - and hypostasis (person) as who God is - the three distinct persons (Father, Son, Spirit). Formula: one ousia, three hypostases.",
        explanation: "This distinction resolved the ambiguity in earlier terminology and became the standard orthodox formulation."
      },
      {
        question: "Which Cappadocian Father wrote the 'Rule' that became the basis of Eastern monasticism?",
        type: "mc",
        options: ["A) Gregory of Nazianzus", "B) Gregory of Nyssa", "C) Basil the Great", "D) Athanasius"],
        answer: "C) Basil the Great",
        explanation: "Basil's Rule organized monastic life around prayer, work, and community; it remains the foundation of Eastern Orthodox monasticism."
      },
      {
        question: "Why is Gregory of Nazianzus called 'The Theologian'?",
        type: "short",
        answer: "He earned this title for his Five Theological Orations, brilliant discourses on the Trinity that provided the theological foundation for the Council of Constantinople I (381). Only John the Evangelist and he bear this title in Eastern Christianity.",
        explanation: "His orations articulated Trinitarian doctrine with unsurpassed clarity and rhetorical power."
      },
      {
        question: "What did the Cappadocians teach about how the three persons of the Trinity are distinguished from each other?",
        type: "mc",
        options: ["A) By different levels of divinity", "B) By relations of origin: unbegotten, begotten, proceeding", "C) By different roles in creation only", "D) By different time periods in history"],
        answer: "B) By relations of origin: unbegotten, begotten, proceeding",
        explanation: "The Father is unbegotten, the Son is begotten from the Father, and the Spirit proceeds from the Father - these relations distinguish the persons while maintaining one essence."
      }
    ],
    keyTerms: [
      { term: "Cappadocian Fathers", definition: "Basil the Great, Gregory of Nazianzus, and Gregory of Nyssa - fourth-century theologians who refined Trinitarian orthodoxy" },
      { term: "Ousia", definition: "Greek for 'essence' or 'substance'; the shared divine nature of the Trinity (what God is)" },
      { term: "Hypostasis", definition: "Greek for 'person' or 'subsistence'; the three distinct persons of the Trinity (who God is)" },
      { term: "Rule of St. Basil", definition: "Basil's guidelines for monastic life; the foundation of Eastern Christian monasticism" },
      { term: "Apophatic Theology", definition: "Negative theology that describes God by what he is not, emphasizing divine mystery and incomprehensibility" },
      { term: "Theological Orations", definition: "Gregory of Nazianzus's five famous discourses on the Trinity, earning him the title 'The Theologian'" }
    ]
  },
  {
    id: 20,
    videoId: "8o4j5xrlJLM",
    title: "Disputes on Christ: Nestorius and Cyril",
    videoTitle: "Disputes on Christ: Nestorius and Cyril",
    duration: "~30 min",
    objective: "After Nicaea settled who Jesus is in relation to the Father, a new question arose: how do divinity and humanity coexist in the one Christ? This lecture traces the bitter dispute between Nestorius of Constantinople and Cyril of Alexandria.",
    notes: {
      sections: [
        {
          title: "The Question After Nicaea",
          points: [
            "If the Son is fully God and Jesus is fully man, how are the two natures related?",
            "**Antiochene school**: emphasized the distinction of the two natures",
            "**Alexandrian school**: emphasized the unity of the one Christ",
          ]
        },
        {
          title: "Nestorius",
          points: [
            "Antiochene monk, made Patriarch of Constantinople in 428",
            "Objected to calling Mary *Theotokos* ('God-bearer'); preferred *Christotokos* ('Christ-bearer')",
            "Critics charged him with teaching two persons in Christ rather than two natures in one person",
          ]
        },
        {
          title: "Cyril of Alexandria",
          points: [
            "Brilliant, combative defender of Alexandrian Christology",
            "Wrote his **Twelve Anathemas** against Nestorius",
            "Insisted on *Theotokos* to safeguard the unity of Christ's person",
            "Famous formula: 'one incarnate nature of the divine Word' (later misread by monophysites)",
          ]
        },
        {
          title: "Council of Ephesus (431)",
          points: [
            "Convened by Emperor Theodosius II to settle the dispute",
            "Cyril opened the council before Nestorius's allies arrived; condemned Nestorius",
            "Affirmed Mary as Theotokos and the single personhood of Christ",
            "Tensions remained — setting the stage for Chalcedon twenty years later",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "What was the *Theotokos* controversy really about?",
        type: "short",
        answer: "Whether Mary could be called 'God-bearer.' The title was less about Mary than about Christ: if she bore God, then the one she bore is a single person with two natures, not two persons.",
        explanation: "Nestorius's refusal seemed to imply two separate persons in Christ — divine and human — loosely joined."
      },
      {
        question: "Where was Nestorius condemned?",
        type: "mc",
        options: ["A) Nicaea (325)", "B) Constantinople (381)", "C) Ephesus (431)", "D) Chalcedon (451)"],
        answer: "C) Ephesus (431)",
        explanation: "Cyril's allies pushed through condemnation before the Antiochene bishops arrived."
      },
      {
        question: "What did Cyril want to safeguard?",
        type: "short",
        answer: "The unity of the one person of Christ. He feared that Nestorius's language divided Christ into two acting subjects, undermining the incarnation.",
        explanation: "This pastoral concern lay beneath his sometimes excessive rhetoric and political maneuvering."
      },
    ],
    keyTerms: [
      { term: "Theotokos", definition: "'God-bearer'; title for Mary affirming the single personhood of Christ" },
      { term: "Christotokos", definition: "'Christ-bearer'; Nestorius's preferred term, rejected at Ephesus" },
      { term: "Antiochene School", definition: "Christological tradition emphasizing the distinction of Christ's two natures" },
      { term: "Alexandrian School", definition: "Christological tradition emphasizing the unity of Christ's person" },
      { term: "Twelve Anathemas", definition: "Cyril's polemical statements against Nestorius" },
      { term: "Council of Ephesus (431)", definition: "Third ecumenical council; condemned Nestorius" },
    ]
  },
{
    id: 21,
    videoId: "tFfNFJOppsM",
    title: "Council of Chalcedon",
    videoTitle: "Council of Chalcedon",
    duration: "~35 min",
    objective: "This module examines the Christological controversies of the fifth century, culminating in the Councils of Ephesus (431) and Chalcedon (451), which defined how Christ's divine and human natures relate.",
    notes: {
      sections: [
        {
          title: "The Christological Question",
          points: [
            "After the Trinity was defined, the question became: **how are divinity and humanity united in Christ?**",
            "All agreed Christ is fully God and fully human - but **how do the two natures relate?**",
            "Two major schools of thought emerged: **Alexandrian** and **Antiochene**",
            "Alexandrian school emphasized **unity** of Christ; risk of **mixing** or **absorbing** humanity into divinity",
            "Antiochene school emphasized **distinction** of natures; risk of **dividing** Christ into two persons"
          ]
        },
        {
          title: "Nestorius and the Theotokos Controversy",
          points: [
            "**Nestorius** (c. 386-450) became patriarch of Constantinople in 428",
            "He objected to calling Mary **'Theotokos'** ('God-bearer' / Mother of God)",
            "Proposed **'Christotokos'** ('Christ-bearer') instead - Mary bore the human nature, not God",
            "**Cyril of Alexandria** attacked Nestorius for dividing Christ into two persons",
            "Nestorius likely meant to **distinguish** natures, not divide the person, but his language was dangerous",
            "The controversy became a power struggle between **Alexandria and Constantinople**"
          ]
        },
        {
          title: "The Council of Ephesus (431)",
          points: [
            "Called by Emperor **Theodosius II** to resolve the Nestorian controversy",
            "**Cyril** arrived first and convened the council before Nestorius's supporters arrived",
            "Council condemned **Nestorius** and affirmed Mary as **Theotokos**",
            "When John of Antioch arrived, he held a **rival council** that condemned Cyril",
            "Eventually a **compromise** was reached: Formula of Reunion (433)",
            "Nestorius was exiled; his followers formed the **Church of the East** (often called 'Nestorian')"
          ]
        },
        {
          title: "Eutyches and Monophysitism",
          points: [
            "**Eutyches** (c. 380-456), an aged monk in Constantinople, went to the opposite extreme from Nestorius",
            "Taught that Christ had only **one nature (monophysis)** after the incarnation",
            "The human nature was **absorbed** into the divine 'like a drop of wine in the ocean'",
            "Condemned by **Flavian of Constantinople** (448); appealed to Pope Leo and Emperor",
            "A council at Ephesus in 449 (**'Robber Council'**) supported Eutyches through intimidation",
            "Pope **Leo I** condemned the Robber Council and demanded a new council"
          ]
        },
        {
          title: "The Council of Chalcedon (451)",
          points: [
            "Convened by Emperor **Marcian** at Chalcedon (across from Constantinople)",
            "Over **500 bishops** attended - the largest ancient council",
            "Condemned both **Nestorius** (two persons) and **Eutyches** (one nature)",
            "Adopted **Pope Leo's Tome**: 'two natures, without confusion, change, division, or separation'",
            "The **Chalcedonian Definition**: Christ is one person (hypostasis) in two natures (physeis)",
            "Properties of each nature are preserved; they unite in one person and one subsistence"
          ]
        },
        {
          title: "Aftermath and Divisions",
          points: [
            "Chalcedon did **not end the controversy** - many in Egypt and Syria rejected it",
            "**Miaphysites** ('one nature' - different from Eutyches) broke away: Coptic, Ethiopian, Syriac, Armenian churches",
            "The **Church of the East** ('Nestorian') had already separated after Ephesus",
            "Multiple attempts to reconcile failed: **Henotikon** (482), **Constantinople II** (553)",
            "These divisions **still exist today** between Chalcedonian and non-Chalcedonian churches",
            "Modern ecumenical dialogue has found the divisions may be more **verbal than substantive**"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What does 'Theotokos' mean and why was it controversial?",
        type: "short",
        answer: "'Theotokos' means 'God-bearer' or 'Mother of God,' referring to Mary. Nestorius objected because he thought it implied Mary gave birth to the divine nature. Defenders argued that since Christ is one person who is God, Mary truly bore God (in his human nature).",
        explanation: "The term protected the unity of Christ's person - Mary didn't bear a human person who was later joined to God."
      },
      {
        question: "What is the Chalcedonian Definition's formula for understanding Christ's two natures?",
        type: "short",
        answer: "Christ is one person (hypostasis) in two natures (divine and human), united 'without confusion, without change, without division, without separation.' Each nature retains its properties while being united in one person.",
        explanation: "These four negative adverbs protect against both Nestorian division and Eutychian confusion."
      },
      {
        question: "Why was the 449 council at Ephesus called the 'Robber Council'?",
        type: "mc",
        options: ["A) It was held without imperial permission", "B) It supported Eutyches through intimidation and violence", "C) It stole church treasures", "D) It met secretly at night"],
        answer: "B) It supported Eutyches through intimidation and violence",
        explanation: "Pope Leo called it a 'latrocinium' (robbery/brigandage) because Eutyches was vindicated through thuggish behavior, and opponents like Flavian were physically attacked."
      },
      {
        question: "Which churches today trace their separation to rejection of the Council of Chalcedon?",
        type: "mc",
        options: ["A) Roman Catholic and Eastern Orthodox", "B) Lutheran and Reformed", "C) Coptic, Ethiopian, Syriac, and Armenian churches", "D) Pentecostal and Baptist churches"],
        answer: "C) Coptic, Ethiopian, Syriac, and Armenian churches",
        explanation: "These Oriental Orthodox churches rejected Chalcedon's 'two natures' language, preferring 'one incarnate nature of God the Word' (Miaphysitism)."
      }
    ],
    keyTerms: [
      { term: "Theotokos", definition: "'God-bearer' or 'Mother of God' - title for Mary affirming that Christ is one divine person from conception" },
      { term: "Nestorianism", definition: "Heresy of dividing Christ into two persons (or two subjects); attributed to Nestorius, though he may not have held it" },
      { term: "Monophysitism", definition: "'One nature' doctrine; Eutyches taught Christ's humanity was absorbed into divinity after incarnation" },
      { term: "Miaphysitism", definition: "'One nature' theology of Oriental Orthodox churches; differs from Eutychianism by affirming humanity is preserved" },
      { term: "Chalcedonian Definition", definition: "451 AD formula: Christ is one person in two natures, without confusion, change, division, or separation" },
      { term: "Hypostatic Union", definition: "The union of divine and human natures in the one person (hypostasis) of Christ" },
      { term: "Leo's Tome", definition: "Pope Leo I's letter explaining two-nature Christology; adopted at Chalcedon as expressing orthodox faith" }
    ]
  },
  {
    id: 22,
    videoId: "6FVTeFkEpmo",
    title: "Ambrose and Jerome",
    videoTitle: "Ambrose and Jerome",
    duration: "~30 min",
    objective: "Two giants of the late fourth century shaped Western Christianity in different ways: Ambrose as the bold bishop who confronted emperors, and Jerome as the scholar who gave the West its Bible.",
    notes: {
      sections: [
        {
          title: "Ambrose of Milan (c. 339-397)",
          points: [
            "Roman aristocrat and provincial governor acclaimed bishop while still a catechumen",
            "Defended Nicene orthodoxy against Arian imperial pressure",
            "Confronted Emperor **Theodosius** after the massacre at Thessalonica; required public penance",
            "Established the principle that the emperor is *within* the church, not above it",
            "Composed hymns and shaped Latin liturgy",
          ]
        },
        {
          title: "Jerome (c. 347-420)",
          points: [
            "Brilliant, cantankerous scholar trained in classical Latin",
            "Friend then secretary of Pope Damasus in Rome",
            "Moved to Bethlehem and lived as an ascetic for the rest of his life",
            "Tutored noble Roman women in Scripture and Hebrew",
          ]
        },
        {
          title: "The Vulgate",
          points: [
            "Pope Damasus commissioned Jerome to revise the Latin Bible",
            "Jerome translated the Old Testament directly from the **Hebrew** rather than the Greek Septuagint",
            "Result: the **Vulgate**, the standard Bible of the Latin West for over a thousand years",
            "Set new standards for biblical scholarship and textual criticism",
          ]
        },
        {
          title: "Two Models of Christian Leadership",
          points: [
            "Ambrose: pastor-statesman engaged with empire",
            "Jerome: monk-scholar withdrawn for study and devotion",
            "Together they shaped what 'Christian learning' would mean in the medieval West",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "How did Ambrose confront Theodosius?",
        type: "short",
        answer: "After Theodosius ordered the massacre of thousands at Thessalonica in 390, Ambrose excommunicated him and required public penance before he could receive communion again. Theodosius submitted.",
        explanation: "It set a precedent for the church's moral authority over Christian rulers in the West."
      },
      {
        question: "What is the Vulgate?",
        type: "mc",
        options: ["A) A Greek translation of the Old Testament", "B) Jerome's Latin Bible", "C) Augustine's commentary on Genesis", "D) A liturgical book of the Eastern Church"],
        answer: "B) Jerome's Latin Bible",
        explanation: "Translated largely from Hebrew and Greek originals, the Vulgate became the West's standard Bible until the Reformation."
      },
      {
        question: "Why was Jerome's use of Hebrew controversial?",
        type: "short",
        answer: "Many Christians, including Augustine, trusted the Greek Septuagint as the Bible of the apostles. Jerome's preference for Hebrew sources challenged that tradition and produced different readings in some passages.",
        explanation: "Time vindicated Jerome's scholarly judgment; his methods became foundational for biblical studies."
      },
    ],
    keyTerms: [
      { term: "Ambrose", definition: "Bishop of Milan; defended Nicene faith and confronted emperors" },
      { term: "Theodosius I", definition: "Emperor (379-395) made to do public penance by Ambrose" },
      { term: "Jerome", definition: "Scholar-monk who produced the Latin Vulgate Bible" },
      { term: "Vulgate", definition: "Jerome's Latin translation; standard Bible of the medieval West" },
      { term: "Septuagint (LXX)", definition: "Greek translation of the Hebrew OT; used by the early church" },
      { term: "Asceticism", definition: "Disciplined spiritual life of self-denial, embraced by Jerome and his circle" },
    ]
  },
{
    id: 23,
    videoId: "5XplwbTqzSc",
    title: "Saint Augustine: The Restless Heart & The Road to Grace",
    videoTitle: "Saint Augustine: The Restless Heart & The Road to Grace",
    duration: "~35 min",
    objective: "This module examines the life of Augustine of Hippo, the most influential theologian in Western Christianity, tracing his journey from Manichaean seeker to Christian bishop.",
    notes: {
      sections: [
        {
          title: "Early Life in North Africa",
          points: [
            "**Augustine** (354-430) was born in Thagaste, Numidia (modern Algeria)",
            "Father **Patricius** was a pagan (converted on his deathbed); mother **Monica** was a devout Christian",
            "Monica's persistent prayers and influence followed him throughout his wanderings",
            "Received excellent education in **Latin rhetoric** - intended for a career as an orator",
            "At age 17, took a **concubine** with whom he had a son, **Adeodatus** ('Gift from God')",
            "Later wrote about his restless youth: 'Our hearts are restless until they rest in You'"
          ]
        },
        {
          title: "The Manichaean Period",
          points: [
            "At age 19, converted to **Manichaeism** - a dualistic religion from Persia",
            "Manichaeism taught **radical dualism**: good spiritual realm vs. evil material realm",
            "It **explained evil** without blaming God - evil comes from the material principle",
            "Augustine was a Manichaean 'hearer' (not full member) for **nine years**",
            "Became disillusioned when Manichaean bishop **Faustus** could not answer his questions",
            "Left Carthage for Rome, then **Milan** - pursuing career advancement"
          ]
        },
        {
          title: "In Milan: Skepticism and Neoplatonism",
          points: [
            "Arrived in Milan (384) as a professor of rhetoric; skeptical of all truth claims",
            "Heard **Ambrose** preach; his allegorical interpretation answered Manichaean objections to the Old Testament",
            "Discovered **Neoplatonism** (Plotinus) - provided a spiritual worldview without Manichaean dualism",
            "Neoplatonism taught that evil is not a substance but **privation of good** (absence of being)",
            "This solved Augustine's intellectual problems but not his **moral struggle**",
            "Famously prayed: '**Grant me chastity and continence, but not yet**'"
          ]
        },
        {
          title: "The Conversion (386 AD)",
          points: [
            "Heard the story of **Antony of Egypt** from Ponticianus - stirred by radical Christian commitment",
            "In a garden in Milan, wept over his moral bondage to sin",
            "Heard a child's voice chanting '**Tolle, lege**' ('Take up and read')",
            "Opened Paul's letters randomly to Romans 13:13-14: 'Put on the Lord Jesus Christ...'",
            "**Instantly converted** - the struggle ended; peace flooded his heart",
            "Baptized by Ambrose at the **Easter Vigil of 387**; Monica's prayers answered"
          ]
        },
        {
          title: "Return to Africa and Episcopate",
          points: [
            "Monica died shortly after baptism at Ostia during a mystical experience they shared",
            "Augustine returned to North Africa; established a **monastic community** in Thagaste",
            "Visiting Hippo in 391, the congregation **seized him and demanded his ordination** as priest",
            "Became **bishop of Hippo** in 396; served until his death in 430",
            "His episcopate was consumed with **controversies**: Manichaeans, Donatists, Pelagians",
            "Died as **Vandals besieged Hippo** - the Roman world was collapsing around him"
          ]
        },
        {
          title: "The Confessions",
          points: [
            "Written c. 397-400; the first true **autobiography** in Western literature",
            "Not merely a memoir but a **prayer** - addressed to God throughout",
            "Traces his journey from sin through error to grace",
            "Famous opening: '**You have made us for yourself**, and our heart is restless until it rests in you'",
            "Explores **memory, time, creation** - profound philosophical reflections",
            "Became one of the most influential books in Western civilization"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "Why did Manichaeism initially appeal to Augustine?",
        type: "short",
        answer: "Manichaeism explained the problem of evil without blaming God by teaching that evil came from an independent material principle. It also offered intellectual sophistication and claimed to reconcile reason and faith, appealing to Augustine's rational mind.",
        explanation: "Augustine remained a Manichaean 'hearer' for nine years before becoming disillusioned."
      },
      {
        question: "What phrase did Augustine hear in the garden in Milan that prompted his conversion?",
        type: "mc",
        options: ["A) 'Come, follow me'", "B) 'Tolle, lege' (Take up and read)", "C) 'Repent and believe'", "D) 'Be baptized in the name of Jesus'"],
        answer: "B) 'Tolle, lege' (Take up and read)",
        explanation: "Augustine heard what sounded like a child's voice chanting this phrase, prompting him to open Scripture randomly and read Romans 13:13-14."
      },
      {
        question: "How did Neoplatonism help Augustine overcome Manichaean dualism?",
        type: "short",
        answer: "Neoplatonism taught that evil is not an independent substance but rather the privation or absence of good. This meant God could be wholly good and sovereign without an opposing evil principle, solving Augustine's intellectual problem with Manichaean dualism.",
        explanation: "This philosophical insight prepared Augustine intellectually for Christian faith."
      },
      {
        question: "What is significant about Augustine's 'Confessions'?",
        type: "mc",
        options: ["A) It is the first systematic theology", "B) It is the first true autobiography in Western literature", "C) It contains the first Latin Bible translation", "D) It records the first ecumenical council"],
        answer: "B) It is the first true autobiography in Western literature",
        explanation: "The Confessions pioneered the genre of spiritual autobiography, combining personal narrative, prayer, and philosophical reflection."
      }
    ],
    keyTerms: [
      { term: "Manichaeism", definition: "Dualistic religion from Persia teaching two principles (good and evil); Augustine followed it for nine years" },
      { term: "Neoplatonism", definition: "Philosophy based on Plato emphasizing spiritual reality; taught Augustine that evil is privation of good" },
      { term: "Tolle Lege", definition: "'Take up and read' - phrase Augustine heard in the garden that led to his conversion" },
      { term: "Confessions", definition: "Augustine's spiritual autobiography (c. 397-400); addressed to God as a prayer" },
      { term: "Monica", definition: "Augustine's mother whose persistent prayers and influence led to his conversion" },
      { term: "Privation of Good", definition: "Neoplatonic/Augustinian concept that evil is not a substance but absence or corruption of good" }
    ]
  },
{
    id: 24,
    videoId: "cI-DYrWLVsg",
    title: "Augustine (Part 2)",
    videoTitle: "Augustine (Part 2)",
    duration: "~35 min",
    objective: "This module examines Augustine's major theological controversies - against Manichaeism, Donatism, and Pelagianism - which shaped Western Christian doctrine on evil, the church, and grace.",
    notes: {
      sections: [
        {
          title: "Against the Manichaeans",
          points: [
            "Augustine attacked his former religion with **inside knowledge** of its weaknesses",
            "Refuted Manichaean **dualism**: evil is not a substance but privation of good",
            "God is the sole creator; matter is **good** though corruptible",
            "Free will, not an evil principle, explains human sin",
            "The Old Testament is not from an evil god; **allegorical interpretation** reveals its spiritual meaning",
            "His anti-Manichaean works established Western theology of **evil and creation**"
          ]
        },
        {
          title: "The Donatist Controversy",
          points: [
            "**Donatists** were North African rigorists who split from the Catholic church after the Great Persecution",
            "They rejected clergy who had been **traditores** (those who surrendered scriptures during persecution)",
            "Claimed the **true church must be pure** - sacraments of sinful priests are invalid",
            "Augustine argued the church is a **'mixed body'** of saints and sinners until the final judgment",
            "Sacraments work **ex opere operato** ('by the work performed') - valid regardless of the minister's holiness",
            "The bishop's intent and proper form, not his moral state, make sacraments effective"
          ]
        },
        {
          title: "Augustine on the Church",
          points: [
            "Against the Donatists, Augustine developed the doctrine of the **visible and invisible church**",
            "The visible church contains wheat and tares; only God knows the true elect",
            "**One church**: schism is a grave sin; sacraments outside the church are valid but ineffective",
            "Unity is essential; love covers many sins, but schism breaks love",
            "Augustine controversially supported **imperial coercion** against Donatists ('compel them to come in')",
            "This set a troubling precedent for **religious persecution** in later centuries"
          ]
        },
        {
          title: "The Pelagian Controversy",
          points: [
            "**Pelagius** (c. 354-418) was a British monk who taught in Rome",
            "Pelagius emphasized **human free will and moral responsibility**",
            "Taught that humans can **choose good without special grace**; Adam's sin did not corrupt human nature",
            "Infant baptism is not for original sin (which doesn't exist) but for entering the Kingdom",
            "Augustine saw this as denying the need for **Christ and grace**"
          ]
        },
        {
          title: "Augustine's Doctrine of Grace",
          points: [
            "Against Pelagius, Augustine argued that Adam's sin **corrupted all humanity** (original sin)",
            "Humans are born in bondage to sin; we **cannot choose good** without God's grace",
            "**Grace is prevenient** - it comes before and enables any good choice",
            "Salvation is entirely God's gift; we cannot earn or merit it",
            "**Predestination**: God chooses whom to save; this choice is mysterious and unconditional",
            "Pelagius was condemned at Carthage (418) and Ephesus (431)"
          ]
        },
        {
          title: "The Legacy of These Controversies",
          points: [
            "Augustine's anti-Manichaean writings shaped Western understanding of **evil and creation**",
            "His anti-Donatist writings established **sacramental theology** and church unity doctrines",
            "His anti-Pelagian writings became the foundation of Western **soteriology** (salvation doctrine)",
            "**Predestination and grace** debates continued through the Reformation and beyond",
            "Both **Catholic and Protestant** traditions claim Augustine's heritage",
            "The controversies forced precision on issues that remain debated today"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What did Augustine mean by saying evil is 'privation of good' against the Manichaeans?",
        type: "short",
        answer: "Evil is not an independent substance or principle but the absence, corruption, or distortion of good. Just as darkness is absence of light, evil is the corruption of what God created good. This preserves God's sole creatorship and the goodness of creation.",
        explanation: "This understanding avoided Manichaean dualism while still taking evil seriously."
      },
      {
        question: "What does 'ex opere operato' mean in Augustine's sacramental theology?",
        type: "mc",
        options: ["A) The sacrament depends on the recipient's faith", "B) The sacrament is effective by the work performed, regardless of the minister's holiness", "C) The sacrament must be performed by a bishop only", "D) The sacrament creates new grace from nothing"],
        answer: "B) The sacrament is effective by the work performed, regardless of the minister's holiness",
        explanation: "Against the Donatists, Augustine argued that Christ is the true minister of sacraments; a sinful priest does not invalidate them."
      },
      {
        question: "What was the core of Pelagius's teaching that Augustine opposed?",
        type: "short",
        answer: "Pelagius taught that humans have free will capable of choosing good without special divine grace. Adam's sin affected only Adam, not human nature universally, so humans can obey God's commands if they try hard enough.",
        explanation: "Augustine saw this as undermining the necessity of Christ's redemption and God's grace."
      },
      {
        question: "Which controversial position did Augustine take against the Donatists that set a troubling precedent?",
        type: "mc",
        options: ["A) He accepted their sacraments as fully valid", "B) He supported imperial coercion to compel their return to the church", "C) He declared their churches heretical", "D) He excommunicated all their bishops"],
        answer: "B) He supported imperial coercion to compel their return to the church",
        explanation: "Augustine's use of Luke 14:23 ('compel them to come in') to justify state force against schismatics set a precedent for religious persecution."
      }
    ],
    keyTerms: [
      { term: "Donatism", definition: "North African rigorist movement claiming the true church must be pure and sacraments of sinful priests are invalid" },
      { term: "Traditores", definition: "'Those who handed over' Scriptures during persecution; Donatists rejected clergy with this background" },
      { term: "Ex Opere Operato", definition: "'By the work performed' - sacraments are effective by their proper performance, not the minister's holiness" },
      { term: "Pelagianism", definition: "Heresy teaching humans can choose good without grace; Adam's sin did not corrupt human nature" },
      { term: "Original Sin", definition: "Augustine's doctrine that Adam's sin corrupted human nature, transmitted to all descendants" },
      { term: "Prevenient Grace", definition: "Grace that comes before and enables any human choice toward good; against Pelagian free will" },
      { term: "Predestination", definition: "God's unconditional choice of whom to save, prior to any human merit or decision" }
    ]
  },
{
    id: 25,
    videoId: "JXhqnVesCf4",
    title: "The Story of Pope Leo the Great",
    videoTitle: "The Story of Pope Leo the Great",
    duration: "~25 min",
    objective: "This module examines Pope Leo I (the Great), who strengthened papal authority, defended Rome against barbarian invasions, and authored the christological definition adopted at Chalcedon.",
    notes: {
      sections: [
        {
          title: "Leo's Significance",
          points: [
            "**Leo I** (c. 400-461) was Pope from 440-461 - one of only two popes called 'the Great'",
            "Reigned during the **collapse of the Western Roman Empire** amid barbarian invasions",
            "Strengthened **papal authority** both theologically and practically",
            "His **'Tome'** shaped christological orthodoxy at the Council of Chalcedon (451)",
            "Personally confronted **Attila the Hun** and **Genseric the Vandal** to protect Rome"
          ]
        },
        {
          title: "Leo's Theology of Papal Authority",
          points: [
            "Developed the doctrine of **Petrine primacy** more fully than any predecessor",
            "Argued that Peter continues to speak through the pope: '**Peter speaks through Leo**'",
            "The pope is Peter's **heir** and possesses his authority",
            "Rome holds primacy not just of honor but of **jurisdiction** over all churches",
            "Other bishops receive their authority through connection to Rome",
            "Leo's claims were accepted in the West but resisted in the East"
          ]
        },
        {
          title: "Leo's Tome and Chalcedon",
          points: [
            "Wrote the **'Tome of Leo'** (449) to explain how Christ is both divine and human",
            "Christ is **one person** in **two natures**, divine and human",
            "Each nature retains its own properties: 'Each nature performs what is proper to it'",
            "The divine nature works miracles; the human nature suffers and dies",
            "The **'Robber Council'** of Ephesus (449) rejected the Tome; Leo demanded a new council",
            "**Chalcedon (451)** adopted Leo's Tome: 'Peter has spoken through Leo!'"
          ]
        },
        {
          title: "Confronting the Barbarians",
          points: [
            "In **452 AD**, **Attila the Hun** invaded Italy, heading toward Rome",
            "Leo personally went to meet Attila at the **Mincio River**",
            "Attila **turned back** - reasons debated: Leo's persuasion? Plague? Superstitious fear?",
            "Legend says Saints Peter and Paul appeared, threatening Attila with death",
            "In **455 AD**, **Genseric and the Vandals** sacked Rome",
            "Leo met Genseric and negotiated - couldn't prevent the sack but minimized **slaughter and burning**"
          ]
        },
        {
          title: "Strengthening the Church",
          points: [
            "Used the vacuum of imperial power to **expand papal administration**",
            "Sent legates to represent Rome at councils and in disputes",
            "Combated **Manichaeism** which had infiltrated Rome",
            "Addressed **Pelagianism** in its Semi-Pelagian forms",
            "His **sermons and letters** (96 sermons, 143 letters survive) became influential texts",
            "Organized **charitable relief** for Rome's population amid invasions"
          ]
        },
        {
          title: "Leo's Legacy",
          points: [
            "Established the papacy as the **leading institution** in the collapsing West",
            "His theology of Petrine authority became the basis of **papal claims** for centuries",
            "The **Chalcedonian Definition** remains the christological standard for most Christians",
            "His willingness to confront barbarians showed the church as a source of **stability and protection**",
            "First pope to be buried in **St. Peter's Basilica**",
            "Declared a **Doctor of the Church** in 1754"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What key phrase did the Council of Chalcedon use to accept Leo's Tome?",
        type: "mc",
        options: ["A) 'The emperor has spoken'", "B) 'Peter has spoken through Leo'", "C) 'Thus says the Lord'", "D) 'The council has decided'"],
        answer: "B) 'Peter has spoken through Leo'",
        explanation: "This acclamation reflected Leo's claim that the pope speaks with Peter's authority and affirmed his christological teaching."
      },
      {
        question: "How did Leo explain the relationship between Christ's two natures in his Tome?",
        type: "short",
        answer: "Leo taught that Christ is one person in two natures, divine and human, with each nature retaining its own properties and operations. The divine nature works miracles while the human nature hungers, suffers, and dies, yet both belong to the one person, Christ.",
        explanation: "This formula balanced unity of person with distinction of natures, avoiding both Nestorian division and Eutychian confusion."
      },
      {
        question: "What happened when Leo met Attila the Hun in 452 AD?",
        type: "mc",
        options: ["A) Attila conquered Rome", "B) Attila converted to Christianity", "C) Attila turned back and withdrew from Italy", "D) Leo was taken prisoner"],
        answer: "C) Attila turned back and withdrew from Italy",
        explanation: "Though the exact reasons are debated (Leo's persuasion, plague in the army, superstitious fear), Attila's withdrawal enhanced Leo's prestige enormously."
      },
      {
        question: "What was Leo's theological argument for papal authority?",
        type: "short",
        answer: "Leo argued that Peter continues to speak and act through the pope, who is Peter's heir possessing his authority. The pope has primacy not just of honor but of jurisdiction over all churches, with other bishops receiving authority through connection to Rome.",
        explanation: "These claims became foundational for medieval papal theory, though the East never fully accepted them."
      }
    ],
    keyTerms: [
      { term: "Petrine Primacy", definition: "Doctrine that the Pope, as Peter's successor, holds supreme authority over the church" },
      { term: "Tome of Leo", definition: "Leo's letter explaining Christ as one person in two natures; adopted at Chalcedon (451)" },
      { term: "Chalcedonian Definition", definition: "451 AD formula: Christ is one person in two natures, without confusion, change, division, or separation" },
      { term: "Doctor of the Church", definition: "Title for teachers of outstanding merit; Leo was declared a Doctor in 1754" },
      { term: "Robber Council (Latrocinium)", definition: "Leo's name for the 449 Ephesus council that rejected his Tome through intimidation" },
      { term: "Papal Legate", definition: "Representative sent by the pope to speak with his authority at councils or in disputes" }
    ]
  },
  {
    id: 26,
    videoId: "G4P_ls7G5tc",
    title: "Medieval Overview",
    videoTitle: "Medieval Overview",
    duration: "~25 min",
    objective: "A bird's-eye view of the period from the fall of Rome (c. 476) to the eve of the Reformation (c. 1500). This lecture orients students to the periods, peoples, and themes of the medieval church.",
    notes: {
      sections: [
        {
          title: "Periodization",
          points: [
            "**Early Middle Ages (c. 500-1000)**: barbarian kingdoms, monastic preservation of learning",
            "**High Middle Ages (c. 1000-1300)**: papal monarchy, crusades, universities, scholasticism",
            "**Late Middle Ages (c. 1300-1500)**: plague, schism, dissent, calls for reform",
          ]
        },
        {
          title: "Peoples and Politics",
          points: [
            "Germanic kingdoms (Franks, Visigoths, Lombards, Anglo-Saxons) replaced Roman administration",
            "Byzantine East and Islamic Caliphates dominated the Mediterranean",
            "Carolingian Empire briefly united much of Western Europe under Charlemagne",
            "Emergence of feudal kingdoms (France, England, the Holy Roman Empire) by 1000",
          ]
        },
        {
          title: "The Church",
          points: [
            "Papacy slowly grew from one bishopric among many to the dominant Western institution",
            "Monasticism preserved learning and Christianized Europe",
            "Major reforms: Cluny, Gregorian, mendicant orders",
            "Increasing tension between papal and royal power throughout the period",
          ]
        },
        {
          title: "Themes to Watch",
          points: [
            "Christendom: society conceived as a single Christian commonwealth",
            "Recovery of classical learning and rise of universities",
            "Devotion to Mary and the saints; sacramental piety",
            "Reform movements: every century produces calls to renew the church",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "What are the three main divisions of the medieval period?",
        type: "short",
        answer: "Early Middle Ages (c. 500-1000), High Middle Ages (c. 1000-1300), and Late Middle Ages (c. 1300-1500).",
        explanation: "These are conventional groupings; dates vary by historian and region."
      },
      {
        question: "Which empire briefly unified much of Western Europe around 800?",
        type: "mc",
        options: ["A) Byzantine Empire", "B) Holy Roman Empire under Otto", "C) Carolingian Empire under Charlemagne", "D) Norman Empire"],
        answer: "C) Carolingian Empire under Charlemagne",
        explanation: "Charlemagne's coronation by Pope Leo III in 800 marked a high point of early medieval Christendom."
      },
      {
        question: "Name one recurring theme of medieval church history.",
        type: "short",
        answer: "Reform — every generation produced movements calling the church back to apostolic purity, whether monastic (Cluny), papal (Gregorian), mendicant (Franciscans, Dominicans), or dissident (Wycliffe, Hus).",
        explanation: "Reform is not a Reformation invention but a medieval constant."
      },
    ],
    keyTerms: [
      { term: "Christendom", definition: "Medieval ideal of society as a unified Christian commonwealth" },
      { term: "Early Middle Ages", definition: "c. 500-1000; era of barbarian kingdoms and monastic culture" },
      { term: "High Middle Ages", definition: "c. 1000-1300; papal monarchy, crusades, universities" },
      { term: "Late Middle Ages", definition: "c. 1300-1500; plague, schism, reform movements" },
      { term: "Feudalism", definition: "Hierarchical system of land, loyalty, and military service" },
    ]
  },
  {
    id: 27,
    videoId: "wXaN2vXEgwg",
    title: "The Merovingians",
    videoTitle: "The Merovingians",
    duration: "~25 min",
    objective: "Before Charlemagne, the Frankish kingdom was ruled by the long-haired Merovingian kings. This lecture traces their rise under Clovis, their conversion to Catholic Christianity, and the slow decline that opened the way for the Carolingians.",
    notes: {
      sections: [
        {
          title: "Clovis (c. 466-511)",
          points: [
            "King of the Salian Franks, founder of the Merovingian dynasty",
            "Married Clotilde, a Catholic Burgundian princess",
            "Converted to **Catholic** (not Arian) Christianity around 496/508",
            "His baptism gave the Franks a powerful alliance with the Gallo-Roman bishops",
          ]
        },
        {
          title: "Catholic vs. Arian Kingdoms",
          points: [
            "Most Germanic kings (Visigoths, Ostrogoths, Vandals) were Arian Christians",
            "Clovis's Catholic conversion aligned the Franks with the Roman population they ruled",
            "It set the long-term religious shape of Western Europe",
          ]
        },
        {
          title: "Merovingian Society",
          points: [
            "Kingdom typically divided among the king's sons — endless family wars",
            "Bishops often functioned as local civic leaders",
            "Monasteries spread through Frankish lands; Irish missionaries (Columbanus) influential",
          ]
        },
        {
          title: "Decline and Mayors of the Palace",
          points: [
            "Later Merovingian kings were weak — called **rois fainéants** ('do-nothing kings')",
            "Real power passed to the **mayors of the palace**, especially the Carolingian family",
            "**Charles Martel** stopped the Muslim advance at Tours (732)",
            "**Pippin III** deposed the last Merovingian in 751 with papal blessing, founding the Carolingian dynasty",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "Why was Clovis's conversion to Catholic Christianity historically important?",
        type: "short",
        answer: "It aligned the Franks with the Catholic Gallo-Roman population and the bishops of Gaul, instead of with the Arian Germanic kingdoms. This shaped the long-term Catholic identity of France and Western Europe.",
        explanation: "It also created an early model of Christian kingship that Charlemagne would later inherit."
      },
      {
        question: "Who were the 'mayors of the palace'?",
        type: "mc",
        options: ["A) The chief stewards who came to wield real royal power", "B) Roman governors of Gaul", "C) Papal legates", "D) Bishops of major sees"],
        answer: "A) The chief stewards who came to wield real royal power",
        explanation: "From the seventh century on, mayors of the palace effectively ruled while Merovingian kings were figureheads."
      },
      {
        question: "How did the Carolingians replace the Merovingians?",
        type: "short",
        answer: "Pippin III asked Pope Zacharias whether the one with real power or the one with the royal title should be king. The pope endorsed him, and Pippin deposed Childeric III in 751, founding the Carolingian dynasty.",
        explanation: "It tied royal legitimacy to papal sanction — a fateful precedent."
      },
    ],
    keyTerms: [
      { term: "Clovis", definition: "First Catholic king of the Franks; founded Merovingian dynasty" },
      { term: "Merovingians", definition: "Frankish royal dynasty c. 481-751" },
      { term: "Rois Fainéants", definition: "'Do-nothing kings'; later powerless Merovingian rulers" },
      { term: "Mayor of the Palace", definition: "Chief steward who wielded real Merovingian power" },
      { term: "Charles Martel", definition: "Mayor of the palace; defeated Muslims at Tours (732)" },
      { term: "Pippin III", definition: "First Carolingian king; deposed last Merovingian in 751" },
    ]
  },
{
    id: 28,
    videoId: "8yfhG547two",
    title: "Who was Charlemagne?",
    videoTitle: "Who was Charlemagne?",
    duration: "~35 min",
    objective: "This module examines Charlemagne's creation of a Christian empire, his coronation as Roman Emperor, and the cultural and religious revival known as the Carolingian Renaissance.",
    notes: {
      sections: [
        {
          title: "Rise of the Carolingians",
          points: [
            "**Carolingians** descended from Charles Martel, who defeated Muslims at Tours (732)",
            "Martel's son **Pippin III** became king with papal approval (751), replacing the Merovingians",
            "Pope **Stephen II** traveled to Francia to anoint Pippin and seek military aid against Lombards",
            "The **'Donation of Pippin'** gave the pope territorial lands - origin of the Papal States",
            "**Charlemagne** (Charles the Great, 742-814) succeeded Pippin in 768"
          ]
        },
        {
          title: "Charlemagne's Conquests",
          points: [
            "Expanded Frankish territory through nearly **constant warfare** for 30 years",
            "Conquered the **Lombards** in Italy (773-774), becoming 'King of the Lombards'",
            "Brutal **Saxon Wars** (772-804): forced conversion to Christianity; massacre at Verden (782)",
            "Expanded into Bavaria, defeated the **Avars**, and established the Spanish March",
            "Created an empire stretching from the Pyrenees to the Elbe, from the North Sea to Rome"
          ]
        },
        {
          title: "Imperial Coronation (800 AD)",
          points: [
            "On **Christmas Day 800**, Pope Leo III crowned Charlemagne **'Emperor of the Romans'**",
            "Leo needed Charlemagne's protection after being attacked by Roman enemies",
            "The coronation **revived the Western Roman Empire** - a momentous symbolic act",
            "Charlemagne reportedly said he would not have entered St. Peter's had he known Leo's intent",
            "The Byzantine Empire was **outraged** - they considered themselves the true Roman Empire",
            "Eventually Byzantines recognized Charlemagne as emperor (812), but not of 'Romans'"
          ]
        },
        {
          title: "Church Reform and Organization",
          points: [
            "Charlemagne saw himself as **responsible for the church's welfare** in his realm",
            "Issued capitularies (laws) on church matters: clergy discipline, liturgy, education",
            "Required **standardized liturgy** using the Roman rite throughout his empire",
            "Bishops became **imperial administrators** as well as spiritual leaders",
            "The emperor appointed bishops and abbots - **lay investiture** that later caused controversy",
            "Built the **palace chapel at Aachen** modeled on Byzantine churches"
          ]
        },
        {
          title: "The Carolingian Renaissance",
          points: [
            "Charlemagne promoted a **cultural revival** centered on education and literacy",
            "Recruited scholars from across Europe: **Alcuin of York** directed palace school",
            "Established **cathedral and monastery schools** throughout the empire",
            "Developed **Carolingian minuscule** - clearer script that became standard (basis of modern lowercase)",
            "Monks copied **classical and Christian texts**, preserving them for posterity",
            "Reformed Latin grammar and standardized biblical texts"
          ]
        },
        {
          title: "Legacy and Significance",
          points: [
            "Created the **political framework** of medieval Western Europe",
            "Established the **emperor-pope relationship** that shaped medieval politics",
            "His empire fragmented after his son Louis the Pious, but the **idea persisted**",
            "The **Holy Roman Empire** (962-1806) claimed to continue his legacy",
            "Both France and Germany claim him as founder of their nations",
            "The Carolingian Renaissance **preserved classical learning** through the Dark Ages"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What was the significance of Charlemagne's coronation on Christmas Day 800 AD?",
        type: "short",
        answer: "Pope Leo III crowned Charlemagne 'Emperor of the Romans,' symbolically reviving the Western Roman Empire. This established a powerful precedent for papal authority to grant imperial legitimacy and created the emperor-pope relationship that defined medieval politics.",
        explanation: "The Byzantines were outraged, considering themselves the true Roman Empire, and only reluctantly recognized Charlemagne."
      },
      {
        question: "What was the Carolingian Renaissance?",
        type: "mc",
        options: ["A) A military campaign", "B) A cultural revival promoting education, literacy, and preservation of classical texts", "C) A religious heresy", "D) An architectural style"],
        answer: "B) A cultural revival promoting education, literacy, and preservation of classical texts",
        explanation: "Charlemagne recruited scholars, established schools, standardized script and Latin, and had monks copy texts that might otherwise have been lost."
      },
      {
        question: "What writing system developed under Charlemagne became the basis for modern lowercase letters?",
        type: "mc",
        options: ["A) Gothic script", "B) Uncial script", "C) Carolingian minuscule", "D) Roman capitals"],
        answer: "C) Carolingian minuscule",
        explanation: "This clearer, more standardized script replaced various regional hands and became the foundation of the lowercase letters we use today."
      },
      {
        question: "How did Charlemagne view his relationship to the church in his empire?",
        type: "short",
        answer: "Charlemagne saw himself as responsible for the church's welfare, issuing laws on clergy discipline, liturgy, and education. He appointed bishops and abbots, standardized the Roman liturgy, and treated church administration as part of imperial governance.",
        explanation: "This close church-state integration, with lay rulers appointing clergy, later caused the Investiture Controversy."
      }
    ],
    keyTerms: [
      { term: "Carolingians", definition: "Frankish dynasty founded by Charles Martel; Charlemagne was its greatest ruler" },
      { term: "Donation of Pippin", definition: "Territorial grant creating the Papal States; origin of the pope's temporal power" },
      { term: "Carolingian Renaissance", definition: "Cultural revival under Charlemagne promoting education, literacy, and preservation of texts" },
      { term: "Carolingian Minuscule", definition: "Standardized script developed under Charlemagne; basis of modern lowercase letters" },
      { term: "Lay Investiture", definition: "Practice of secular rulers appointing bishops and abbots; later controversial" },
      { term: "Alcuin of York", definition: "English scholar who directed Charlemagne's palace school and educational reforms" }
    ]
  },
{
    id: 29,
    videoId: "5aGZRZgsq_4",
    title: "The Vikings",
    videoTitle: "The Vikings",
    duration: "~30 min",
    objective: "This module examines the Viking Age and the gradual conversion of Scandinavia to Christianity, transforming raiders into participants in medieval Christian civilization.",
    notes: {
      sections: [
        {
          title: "The Viking Raids Begin",
          points: [
            "**793 AD**: Vikings raided the monastery of **Lindisfarne** - 'the beginning of sorrows'",
            "For the next 250 years, Viking raiders **terrorized** coastal and river communities",
            "Attacked monasteries because they held **wealth** and were poorly defended",
            "Vikings came from **Denmark, Norway, and Sweden** - distinct but related peoples",
            "Initial raids were **pagan** - Vikings worshipped Odin, Thor, and other Norse gods"
          ]
        },
        {
          title: "Impact on the Church",
          points: [
            "Monasteries were **destroyed** or abandoned across Ireland, Britain, and Francia",
            "Many precious manuscripts, relics, and treasures were **lost or looted**",
            "**Clergy fled** inland with relics; some monasteries never recovered",
            "The Carolingian Empire was weakened and eventually fragmented partly due to Viking pressure",
            "Yet paradoxically, Vikings also **spread Christianity** as they settled and converted"
          ]
        },
        {
          title: "From Raiders to Settlers",
          points: [
            "Vikings began settling permanently: **Danelaw** in England, **Normandy** in France, **Dublin** in Ireland",
            "As settlers, Vikings intermarried with locals and gradually **adopted Christianity**",
            "**Rollo** was baptized when he received Normandy from the French king (911)",
            "Within a few generations, Normans became **fervent Christians** and church reformers",
            "Settlement exposed Vikings to Christian culture, trade, and political advantages of conversion"
          ]
        },
        {
          title: "Conversion of Denmark",
          points: [
            "**Harald Bluetooth** (c. 958-986) officially converted Denmark to Christianity",
            "His famous **Jelling Stone** declares: 'Harald made the Danes Christians'",
            "Conversion was partly **political** - to forestall German intervention",
            "Christianity was imposed **top-down** by royal authority",
            "German missionaries had prepared the ground; now the king enforced conversion"
          ]
        },
        {
          title: "Conversion of Norway and Sweden",
          points: [
            "**Olaf Tryggvason** (995-1000) forcibly converted Norway - often brutally",
            "**Olaf II (St. Olaf)** (1015-1028) continued the process; martyred and became Norway's patron saint",
            "Sweden was slower; **Old Uppsala** remained a pagan center until the late 11th century",
            "Swedish kings gradually adopted Christianity; the **temple at Uppsala** was destroyed c. 1087",
            "Iceland converted peacefully by **democratic decision at the Althing** (1000 AD)"
          ]
        },
        {
          title: "Significance of Viking Conversion",
          points: [
            "Brought Scandinavia into **medieval Christian civilization**",
            "Ended the era of **pagan raids** on Christian communities",
            "Created new Christian kingdoms that participated in **Crusades** and church affairs",
            "Norse became **patrons of monasteries** and builders of churches",
            "The conversion demonstrated Christianity's ability to **transform warrior cultures**"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What event in 793 AD marked the beginning of the Viking Age for Christian Europe?",
        type: "mc",
        options: ["A) Charlemagne's coronation", "B) The raid on Lindisfarne monastery", "C) The fall of Rome", "D) Harald Bluetooth's conversion"],
        answer: "B) The raid on Lindisfarne monastery",
        explanation: "The raid on this holy island off northeastern England was described as 'the beginning of sorrows' and inaugurated centuries of Viking attacks."
      },
      {
        question: "Who officially converted Denmark to Christianity and left a famous monument declaring this?",
        type: "short",
        answer: "Harald Bluetooth (c. 958-986) converted Denmark and erected the Jelling Stone declaring 'Harald made the Danes Christians.' His conversion was partly political, to forestall German intervention and gain legitimacy.",
        explanation: "The Bluetooth technology is named after this king, whose runic initials form its logo."
      },
      {
        question: "How did Iceland convert to Christianity?",
        type: "mc",
        options: ["A) By force under a Christian king", "B) Through peaceful democratic decision at the Althing", "C) After a miracle convinced the people", "D) It never fully converted"],
        answer: "B) Through peaceful democratic decision at the Althing",
        explanation: "In 1000 AD, the Icelandic parliament (Althing) decided to adopt Christianity to preserve social unity, though pagans could worship privately."
      },
      {
        question: "How did the Vikings' transition from raiders to settlers affect their relationship with Christianity?",
        type: "short",
        answer: "As permanent settlers, Vikings intermarried with local Christians, were exposed to Christian culture and trade, and saw political advantages in conversion. Within generations, former Viking territories like Normandy became centers of Christian devotion and church reform.",
        explanation: "Settlement created conditions for gradual cultural assimilation and conversion."
      }
    ],
    keyTerms: [
      { term: "Lindisfarne", definition: "Monastery raided in 793 AD, marking the beginning of the Viking Age for Christian Europe" },
      { term: "Danelaw", definition: "Region of England under Danish Viking control and law" },
      { term: "Harald Bluetooth", definition: "Danish king who officially converted Denmark to Christianity (c. 958-986)" },
      { term: "Jelling Stone", definition: "Monument erected by Harald Bluetooth declaring Denmark's conversion to Christianity" },
      { term: "St. Olaf", definition: "Norwegian king martyred in 1030; became Norway's patron saint" },
      { term: "Althing", definition: "Icelandic parliament that voted to adopt Christianity in 1000 AD" }
    ]
  },
  {
    id: 30,
    videoId: "sXMONr3QmkU",
    title: "Alfred the Great & the Anglo Saxons",
    videoTitle: "Alfred the Great & the Anglo Saxons",
    duration: "~25 min",
    objective: "Alfred of Wessex (849-899) saved Anglo-Saxon England from the Vikings, promoted learning and law, and helped forge an English Christian identity. This lecture surveys the Anglo-Saxon church and Alfred's role in shaping it.",
    notes: {
      sections: [
        {
          title: "Anglo-Saxon Christianity Before Alfred",
          points: [
            "Roman mission to Kent under **Augustine of Canterbury** (597) from Pope Gregory the Great",
            "Celtic mission from Iona/Lindisfarne under **Aidan** and others",
            "**Synod of Whitby (664)**: chose Roman over Celtic practice on Easter dating and tonsure",
            "Flourishing scholarship: **Bede**, **Alcuin**, illuminated manuscripts (Lindisfarne Gospels)",
          ]
        },
        {
          title: "The Viking Crisis",
          points: [
            "Raids began in 793 with the sack of Lindisfarne",
            "By 870 most Anglo-Saxon kingdoms had fallen to the Great Heathen Army",
            "Only Wessex, under young Alfred, held out",
          ]
        },
        {
          title: "Alfred's Achievements",
          points: [
            "Defeated the Danes at the **Battle of Edington (878)**",
            "Treaty established the **Danelaw**; baptized the Danish king Guthrum",
            "Built burhs (fortified towns), a navy, and a reformed army",
            "Issued a law code rooted in biblical and earlier Anglo-Saxon law",
          ]
        },
        {
          title: "Alfred the Scholar-King",
          points: [
            "Lamented the collapse of Latin learning after the Viking wars",
            "Sponsored translations of key works (Gregory's Pastoral Care, Boethius, Augustine) into Old English",
            "Believed Christian rulers must be educated for wise government",
            "His grandson Athelstan became the first king of a unified England",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "What was decided at the Synod of Whitby?",
        type: "short",
        answer: "The Northumbrian church chose to follow Roman practice (over Celtic) regarding the dating of Easter and monastic tonsure. The decision aligned the English church more firmly with Rome.",
        explanation: "It marked a turning point toward a unified English church under papal authority."
      },
      {
        question: "Who defeated the Vikings at Edington in 878?",
        type: "mc",
        options: ["A) Charles Martel", "B) Alfred the Great", "C) Charlemagne", "D) Athelstan"],
        answer: "B) Alfred the Great",
        explanation: "The victory saved Wessex and laid the foundation for the eventual unification of England."
      },
      {
        question: "Why did Alfred translate books into Old English?",
        type: "short",
        answer: "He believed that wise Christian government required educated leaders, but after the Viking devastation few clergy could read Latin. Translating essential works into English would restore Christian learning across his kingdom.",
        explanation: "It marks one of the earliest royal programs to put Christian classics into a vernacular language."
      },
    ],
    keyTerms: [
      { term: "Augustine of Canterbury", definition: "Roman missionary sent by Gregory the Great in 597" },
      { term: "Bede", definition: "Eighth-century Anglo-Saxon monk; wrote 'Ecclesiastical History of the English People'" },
      { term: "Synod of Whitby (664)", definition: "Council that aligned English church with Roman practice" },
      { term: "Danelaw", definition: "Region of England under Danish (Viking) law after Alfred's treaty" },
      { term: "Burh", definition: "Fortified town in Alfred's defensive system" },
      { term: "Alfred the Great", definition: "King of Wessex (871-899) who saved Anglo-Saxon England and revived learning" },
    ]
  },
  {
    id: 31,
    videoId: "A9kLhivu5Ug",
    title: "Al Andalus Spain",
    videoTitle: "Al Andalus Spain",
    duration: "~30 min",
    objective: "From 711 to 1492 much of the Iberian peninsula was under Muslim rule, creating Al-Andalus — a sophisticated society in which Muslims, Jews, and Christians lived together. This lecture surveys its rise, flourishing, and the slow Christian Reconquista.",
    notes: {
      sections: [
        {
          title: "The Muslim Conquest (711)",
          points: [
            "Arab and Berber forces crossed from North Africa, defeated the Visigothic king Roderic",
            "Within a few years controlled most of Iberia; checked at Tours (732) by Charles Martel",
            "Christian remnant survived in the Asturian mountains, north of the conquest",
          ]
        },
        {
          title: "Umayyad Al-Andalus",
          points: [
            "**Abd al-Rahman I** founded the independent Emirate of Cordoba in 756",
            "**Cordoba** became one of the great cities of Europe — libraries, mosques, irrigation",
            "Tenth-century Caliphate of Cordoba: peak of culture, philosophy, and science",
          ]
        },
        {
          title: "Convivencia: Living Together",
          points: [
            "Christians and Jews protected as *dhimmi* — subordinate but tolerated",
            "Significant translation activity: Greek philosophy preserved and transmitted via Arabic",
            "**Averroes (Ibn Rushd)** and **Maimonides** worked in this milieu",
            "**Mozarabic Christians** kept their faith under Muslim rule, developing distinctive liturgy",
          ]
        },
        {
          title: "The Reconquista",
          points: [
            "Christian kingdoms (Asturias, Leon, Castile, Aragon) slowly pushed south",
            "**Toledo recaptured in 1085**; became a major translation center",
            "**Las Navas de Tolosa (1212)** decisively broke Muslim power",
            "Reconquista completed with the fall of **Granada in 1492** under Ferdinand and Isabella",
          ]
        },
        {
          title: "Religious Legacy",
          points: [
            "Arabic translations of Aristotle reached Latin Europe through Spain",
            "Sparked the scholastic recovery of Greek philosophy in the 12th and 13th centuries",
            "Reconquista shaped Spanish Catholic identity — and the Inquisition that followed",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "What is convivencia, and how complicated is the term?",
        type: "short",
        answer: "Convivencia means 'living together' and refers to the coexistence of Muslims, Jews, and Christians in medieval Iberia. It produced rich cultural exchange but was never equal — non-Muslims lived as second-class dhimmi and periods of persecution recurred.",
        explanation: "Recent scholarship has questioned romanticized versions while still recognizing genuine cultural symbiosis."
      },
      {
        question: "Which event completed the Reconquista?",
        type: "mc",
        options: ["A) Battle of Tours (732)", "B) Fall of Toledo (1085)", "C) Las Navas de Tolosa (1212)", "D) Fall of Granada (1492)"],
        answer: "D) Fall of Granada (1492)",
        explanation: "The conquest of the last Muslim emirate by Ferdinand and Isabella ended nearly 800 years of Muslim rule in Iberia."
      },
      {
        question: "How did Al-Andalus influence Christian theology in the West?",
        type: "short",
        answer: "Through Spain, Latin Christians recovered Greek philosophy — especially Aristotle — via Arabic translations and commentaries (Averroes). This recovery transformed scholastic theology in the 12th-13th centuries.",
        explanation: "Without Al-Andalus, the work of Aquinas would be unimaginable."
      },
    ],
    keyTerms: [
      { term: "Al-Andalus", definition: "Muslim-ruled regions of the Iberian peninsula, 711-1492" },
      { term: "Convivencia", definition: "Coexistence of Christians, Muslims, and Jews in medieval Spain" },
      { term: "Reconquista", definition: "Centuries-long Christian reconquest of Iberia" },
      { term: "Dhimmi", definition: "Protected but subordinate non-Muslim subjects under Islamic rule" },
      { term: "Mozarabs", definition: "Iberian Christians living under Muslim rule" },
      { term: "Averroes", definition: "Andalusian Muslim philosopher (1126-1198); transmitted Aristotle to the West" },
    ]
  },
  {
    id: 32,
    videoId: "Z_ypna0s2II",
    title: "Knights and Chivalry",
    videoTitle: "Knights and Chivalry",
    duration: "~25 min",
    objective: "The mounted warrior was central to medieval society. This lecture traces how the church tried to Christianize knighthood through codes of chivalry, the Peace and Truce of God, and crusading ideology.",
    notes: {
      sections: [
        {
          title: "The Rise of the Knight",
          points: [
            "Stirrup, heavy cavalry, and feudal land grants created a warrior elite",
            "By 1000, knights dominated warfare and politics in much of Europe",
            "Their violence was a constant problem for villagers and clergy alike",
          ]
        },
        {
          title: "The Church's Response",
          points: [
            "**Peace of God (989)**: forbade attacks on clergy, women, peasants, churches",
            "**Truce of God (early 11th c.)**: forbade fighting on Sundays, holy days, and during Lent",
            "Bishops attempted to redirect knightly violence rather than abolish it",
          ]
        },
        {
          title: "Christianizing Knighthood",
          points: [
            "Ceremonies of dubbing acquired liturgical elements (blessing of the sword)",
            "Knight ideally swore to protect the church, the weak, and the helpless",
            "Crusading offered redirection of knightly aggression toward 'just' targets",
          ]
        },
        {
          title: "Chivalry as a Code",
          points: [
            "Combined Christian virtues, courtly manners, and warrior honor",
            "Celebrated in Arthurian romances, troubadour poetry, and tales of the Holy Grail",
            "Gap between the ideal and the actual behavior of knights was always large",
            "Critics (St. Bernard, later Erasmus) lambasted knightly cruelty and pretense",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "What was the Peace of God?",
        type: "short",
        answer: "A church-led movement beginning in 989 that placed certain groups — clergy, women, peasants, pilgrims — under ecclesiastical protection and forbade armed attacks on them, with excommunication as the penalty.",
        explanation: "It was one of the earliest attempts to limit violence by religious sanction."
      },
      {
        question: "How did crusading relate to chivalry?",
        type: "mc",
        options: ["A) The two were unrelated", "B) Crusading offered a religiously sanctioned outlet for knightly violence", "C) Knights were forbidden to crusade", "D) Crusades replaced chivalry entirely"],
        answer: "B) Crusading offered a religiously sanctioned outlet for knightly violence",
        explanation: "Urban II's Crusade preaching explicitly framed Crusading as a holy alternative to fighting other Christians."
      },
      {
        question: "Why is chivalry best described as an ideal rather than a description?",
        type: "short",
        answer: "Real medieval warfare was often brutal, with massacres, ransoming for profit, and pillage of civilians. Chivalric literature held up an ideal of mercy, courtesy, and Christian virtue that few knights consistently met.",
        explanation: "Like any code, chivalry shaped behavior partially, not perfectly."
      },
    ],
    keyTerms: [
      { term: "Peace of God", definition: "Movement protecting non-combatants from knightly violence" },
      { term: "Truce of God", definition: "Limits on when knights could fight (Sundays, holy days, Lent)" },
      { term: "Chivalry", definition: "Code combining Christian virtues, honor, and courtly conduct" },
      { term: "Dubbing", definition: "Ceremony making a man a knight, often with liturgical elements" },
      { term: "Feudalism", definition: "System tying military service to land tenure" },
      { term: "Just War", definition: "Theological framework limiting when Christians may fight" },
    ]
  },
{
    id: 33,
    videoId: "7bGxMcSHOmI",
    title: "The First Crusades (Part I)",
    videoTitle: "The First Crusades (Part I)",
    duration: "~35 min",
    objective: "This module examines the origins and the First Crusade (1095-1099), including Pope Urban II's call, the motives of crusaders, and the capture of Jerusalem.",
    notes: {
      sections: [
        {
          title: "Background and Causes",
          points: [
            "**Seljuk Turks** defeated the Byzantines at Manzikert (1071), taking most of Asia Minor",
            "Emperor **Alexius I Comnenus** appealed to the West for military aid (1095)",
            "**Islamic expansion** had taken the Holy Land, North Africa, and Spain from Christian control",
            "**Pilgrimage to Jerusalem** had become more dangerous under Seljuk rule",
            "The reform papacy sought to **direct Christian violence** toward a holy purpose"
          ]
        },
        {
          title: "Urban II's Call at Clermont (1095)",
          points: [
            "Pope **Urban II** called for a military expedition at the Council of Clermont (November 1095)",
            "He described atrocities against Christians and pilgrims in the East",
            "Called warriors to stop fighting each other and **fight for Christ**",
            "Promised **remission of sins** (indulgence) for those who took the cross",
            "The crowd responded: '**Deus vult!**' ('God wills it!')",
            "Far more responded than anyone expected - from nobles to peasants"
          ]
        },
        {
          title: "Motives of the Crusaders",
          points: [
            "**Religious devotion**: genuine desire to liberate the Holy Land and aid fellow Christians",
            "**Remission of sins**: crusade as armed pilgrimage earning spiritual rewards",
            "**Adventure and glory**: martial culture saw crusading as honorable warfare",
            "**Land and wealth**: younger sons without inheritance sought opportunity",
            "**Social pressure**: families and communities encouraged participation",
            "Most crusaders **never expected to stay** - they planned to return home after pilgrimage"
          ]
        },
        {
          title: "The People's Crusade (1096)",
          points: [
            "**Peter the Hermit** led a disorganized popular crusade before the official one",
            "Peasants and poor people set out without adequate supplies or discipline",
            "Along the way, they **massacred Jews** in the Rhineland - first large-scale pogrom",
            "Reached Constantinople; Alexius quickly ferried them across to Asia Minor",
            "Most were **slaughtered by the Turks** near Nicaea; a disaster"
          ]
        },
        {
          title: "The Princes' Crusade",
          points: [
            "The main crusade was led by nobles: **Godfrey of Bouillon, Raymond of Toulouse, Bohemond of Taranto**",
            "Approximately **60,000-100,000** people set out (soldiers, non-combatants, pilgrims)",
            "Traveled overland through Byzantine territory; tense relations with Alexius",
            "Captured **Nicaea** (1097) and won the Battle of **Dorylaeum**",
            "Suffered terribly at the siege of **Antioch** (1097-1098) - starvation and disease",
            "Captured Antioch after an insider betrayed the city; survived a counter-siege"
          ]
        },
        {
          title: "The Capture of Jerusalem (1099)",
          points: [
            "Crusaders reached Jerusalem in June 1099 - reduced to perhaps **15,000** fighting men",
            "After a five-week siege, they breached the walls on **July 15, 1099**",
            "A terrible **massacre** followed - Muslims and Jews were slaughtered",
            "Contemporary accounts describe blood running in the streets",
            "Crusaders wept with joy at reaching the Holy Sepulchre",
            "**Godfrey of Bouillon** became 'Defender of the Holy Sepulchre' (refused title of king)"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What phrase did the crowd shout in response to Urban II's call at Clermont?",
        type: "mc",
        options: ["A) 'Deus vult!' (God wills it!)", "B) 'Christus vincit!' (Christ conquers!)", "C) 'In hoc signo vinces!' (In this sign conquer!)", "D) 'Veni, vidi, vici!' (I came, I saw, I conquered!)"],
        answer: "A) 'Deus vult!' (God wills it!)",
        explanation: "This spontaneous cry became the crusade's rallying call and was often sewn onto crusaders' garments."
      },
      {
        question: "What was the 'People's Crusade' and what happened to it?",
        type: "short",
        answer: "The People's Crusade was a disorganized popular movement led by Peter the Hermit before the official crusade. It consisted mostly of peasants without adequate supplies or discipline. They massacred Jews in the Rhineland and were mostly slaughtered by the Turks in Asia Minor.",
        explanation: "This premature expedition was a disaster, though Peter the Hermit survived and joined the main crusade."
      },
      {
        question: "What spiritual incentive did Urban II offer to crusaders?",
        type: "mc",
        options: ["A) Land in the Holy Land", "B) Remission of sins (indulgence)", "C) Guaranteed salvation", "D) Exemption from all future sins"],
        answer: "B) Remission of sins (indulgence)",
        explanation: "Urban promised that the crusade would count as full penance for confessed sins - a powerful incentive in an age deeply concerned about the afterlife."
      },
      {
        question: "What happened when the crusaders captured Jerusalem in 1099?",
        type: "short",
        answer: "After a five-week siege, crusaders breached the walls on July 15, 1099, and conducted a terrible massacre of the Muslim and Jewish inhabitants. They then wept with joy at reaching the Church of the Holy Sepulchre.",
        explanation: "The massacre shocked even medieval contemporaries and left a lasting stain on crusade history."
      }
    ],
    keyTerms: [
      { term: "Crusade", definition: "Holy war authorized by the pope to recover the Holy Land or defend Christendom; participants received indulgences" },
      { term: "Deus Vult", definition: "'God wills it!' - the rallying cry of the First Crusade after Urban II's speech at Clermont" },
      { term: "Indulgence", definition: "Remission of temporal punishment for sins; crusaders received plenary (full) indulgences" },
      { term: "Council of Clermont", definition: "1095 church council where Pope Urban II called for the First Crusade" },
      { term: "People's Crusade", definition: "Disorganized popular crusade led by Peter the Hermit; mostly destroyed by Turks in 1096" },
      { term: "Godfrey of Bouillon", definition: "Leader of the First Crusade; became 'Defender of the Holy Sepulchre' in Jerusalem" }
    ]
  },
{
    id: 34,
    videoId: "ju0HLYU9Z7A",
    title: "Crusades (Part II)",
    videoTitle: "Crusades (Part II)",
    duration: "~30 min",
    objective: "This module examines the Crusader States, the Muslim response, and the Second and Third Crusades, including the rise of Saladin and the loss of Jerusalem.",
    notes: {
      sections: [
        {
          title: "The Crusader States",
          points: [
            "Four **Crusader States** established: Kingdom of Jerusalem, County of Tripoli, Principality of Antioch, County of Edessa",
            "Organized on **feudal lines** with Frankish nobles ruling Muslim-majority populations",
            "Always **short of manpower** - dependent on reinforcements from Europe",
            "**Military orders** (Templars, Hospitallers) provided permanent defense forces",
            "Italian city-states (Venice, Genoa, Pisa) controlled trade and provided naval support"
          ]
        },
        {
          title: "The Military Orders",
          points: [
            "**Knights Templar** (founded c. 1119): warrior-monks protecting pilgrims; based at Temple Mount",
            "**Knights Hospitaller** (founded c. 1099): began as hospital; became military order",
            "Combined **monastic vows** (poverty, chastity, obedience) with **military service**",
            "Answered only to the pope - independent of local bishops and kings",
            "Became wealthy, powerful, and controversial; Templars eventually suppressed (1312)"
          ]
        },
        {
          title: "The Fall of Edessa (1144)",
          points: [
            "**Zengi**, Muslim ruler of Mosul, captured Edessa in 1144",
            "First major Crusader State to fall - shocked Christendom",
            "Triggered the **Second Crusade** (1147-1149)",
            "Zengi's son **Nur ad-Din** continued the jihad, unifying Muslim resistance"
          ]
        },
        {
          title: "The Second Crusade (1147-1149)",
          points: [
            "**Bernard of Clairvaux** preached the crusade with great effect",
            "Led by two kings: **Louis VII of France** and **Conrad III of Germany**",
            "Both armies were **devastated** crossing Asia Minor",
            "Survivors unwisely attacked **Damascus** - a former ally - and failed",
            "Complete disaster that **accomplished nothing** and weakened crusading enthusiasm"
          ]
        },
        {
          title: "The Rise of Saladin",
          points: [
            "**Saladin** (Salah ad-Din) rose to power in Egypt, then united Egypt and Syria",
            "A **Kurd**, he founded the Ayyubid dynasty",
            "Skilled general and **diplomat**, respected even by enemies for his chivalry",
            "Declared **jihad** to recover Jerusalem from the Franks",
            "At the Battle of **Hattin** (1187), he destroyed the Crusader army, capturing the True Cross",
            "Jerusalem fell to Saladin in October 1187 - without the massacre the Crusaders had committed"
          ]
        },
        {
          title: "The Third Crusade (1189-1192)",
          points: [
            "Response to Jerusalem's fall; led by three kings: **Richard I** (England), **Philip II** (France), **Frederick Barbarossa** (Germany)",
            "Frederick **drowned** crossing a river in Asia Minor; his army dispersed",
            "Richard and Philip captured **Acre** after long siege; Philip returned home",
            "Richard won battles but could not take Jerusalem - insufficient forces",
            "Negotiated **treaty with Saladin**: Christians kept the coast; access to Jerusalem for pilgrims",
            "Richard never saw Jerusalem; returned to England; Saladin died soon after (1193)"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What were the military orders and what made them unique?",
        type: "short",
        answer: "Military orders like the Templars and Hospitallers were organizations of warrior-monks who combined monastic vows (poverty, chastity, obedience) with military service defending the Holy Land. They answered only to the pope and provided permanent defense forces the Crusader States desperately needed.",
        explanation: "This fusion of monastic and military life was a distinctive medieval innovation."
      },
      {
        question: "What event triggered the Second Crusade?",
        type: "mc",
        options: ["A) The fall of Jerusalem", "B) The fall of Edessa to Zengi (1144)", "C) Saladin's rise to power", "D) The sack of Constantinople"],
        answer: "B) The fall of Edessa to Zengi (1144)",
        explanation: "Edessa was the first Crusader State to fall, shocking Christendom and prompting Bernard of Clairvaux to preach a new crusade."
      },
      {
        question: "How did Saladin's treatment of Jerusalem's inhabitants differ from the Crusaders' in 1099?",
        type: "short",
        answer: "Unlike the Crusaders who massacred Jerusalem's Muslim and Jewish inhabitants in 1099, Saladin conquered Jerusalem in 1187 without a massacre. He allowed inhabitants to ransom themselves and treated prisoners with relative mercy, earning respect even from his enemies.",
        explanation: "Saladin's chivalry became legendary in both Islamic and European tradition."
      },
      {
        question: "Why did the Third Crusade fail to recapture Jerusalem despite Richard I's military victories?",
        type: "mc",
        options: ["A) Richard was killed in battle", "B) He lacked sufficient forces to take and hold the city", "C) Saladin offered him a bribe", "D) The pope ordered him to return"],
        answer: "B) He lacked sufficient forces to take and hold the city",
        explanation: "Richard won battles and reached sight of Jerusalem, but recognized he could not capture it with his reduced forces and hold it after returning to Europe."
      }
    ],
    keyTerms: [
      { term: "Crusader States", definition: "Four territories established by crusaders: Jerusalem, Tripoli, Antioch, and Edessa" },
      { term: "Knights Templar", definition: "Military order founded c. 1119 to protect pilgrims; based at Temple Mount; suppressed 1312" },
      { term: "Knights Hospitaller", definition: "Military order originating from a hospital in Jerusalem; survives today as Knights of Malta" },
      { term: "Saladin", definition: "Muslim leader who united Egypt and Syria, defeated Crusaders at Hattin (1187), and recaptured Jerusalem" },
      { term: "Battle of Hattin", definition: "1187 battle where Saladin destroyed the Crusader army, leading to Jerusalem's fall" },
      { term: "Second Crusade", definition: "1147-1149 crusade led by Louis VII and Conrad III; complete failure" }
    ]
  },
  {
    id: 35,
    videoId: "jI-zrOj-g-o",
    title: "Life, Death, and Marriage in the Middle Ages",
    videoTitle: "Life, Death, and Marriage in the Middle Ages",
    duration: "~25 min",
    objective: "What did ordinary medieval Christianity look like? This lecture surveys the church's role in birth, marriage, daily life, and death — the rhythms that shaped most people's experience of the faith.",
    notes: {
      sections: [
        {
          title: "Birth and Baptism",
          points: [
            "High infant mortality made baptism urgent — often within days of birth",
            "Midwives could perform emergency baptism if death was imminent",
            "Godparents created spiritual kinship networks across families",
          ]
        },
        {
          title: "Marriage",
          points: [
            "Originally a family contract; the church gradually defined it as a sacrament",
            "**Fourth Lateran Council (1215)** required banns and church witnesses",
            "Consent of the couple deemed essential — even against family wishes",
            "Indissoluble in principle; annulment possible on narrow grounds",
          ]
        },
        {
          title: "Daily Religion",
          points: [
            "Liturgical year structured daily life: feasts, fasts, saints' days",
            "Parish church was the social as well as religious center",
            "Pilgrimage to local and distant shrines a common practice",
            "Confraternities (lay associations) supported devotions and works of mercy",
          ]
        },
        {
          title: "Death and the Afterlife",
          points: [
            "Sacrament of **extreme unction** (last rites) prepared the dying",
            "Belief in **purgatory** formalized in the 12th-13th centuries",
            "Masses for the dead, indulgences, and chantry chapels became prominent",
            "**Memento mori** ('remember death') art — skulls, dance of death — pervaded late medieval piety",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "Why was infant baptism performed so quickly?",
        type: "short",
        answer: "High infant mortality and the belief that unbaptized infants could not enter heaven made parents anxious to baptize children immediately. Midwives were authorized to baptize in emergencies.",
        explanation: "It shows how doctrine shaped intimate pastoral practice."
      },
      {
        question: "What did Lateran IV require for marriage?",
        type: "mc",
        options: ["A) Royal approval", "B) Banns and church witnesses", "C) Two years of engagement", "D) A monastic vow"],
        answer: "B) Banns and church witnesses",
        explanation: "Public banns helped detect impediments like prior marriages or close kinship; church witnesses formalized consent."
      },
      {
        question: "Why did purgatory loom large in late medieval piety?",
        type: "short",
        answer: "If most souls needed purification before heaven, then masses, prayers, almsgiving, and indulgences for the dead became urgent acts of love. A whole economy of devotion grew around shortening time in purgatory.",
        explanation: "This system became a major target of Reformation critique."
      },
    ],
    keyTerms: [
      { term: "Banns", definition: "Public announcement of an intended marriage" },
      { term: "Extreme Unction", definition: "Anointing of the dying; one of the seven sacraments" },
      { term: "Purgatory", definition: "Intermediate state of purification before heaven" },
      { term: "Confraternity", definition: "Lay association for devotion and mutual aid" },
      { term: "Chantry", definition: "Endowed chapel for masses offered for the dead" },
      { term: "Memento Mori", definition: "Artistic reminder of mortality common in late medieval piety" },
    ]
  },
  {
    id: 36,
    videoId: "Yh_CZSLMxGo",
    title: "Medieval Society",
    videoTitle: "Medieval Society",
    duration: "~25 min",
    objective: "Medieval Christians inherited a sense that society was divided into three orders — those who pray, those who fight, and those who work. This lecture surveys how the church understood social order and how that order evolved.",
    notes: {
      sections: [
        {
          title: "The Three Orders",
          points: [
            "**Oratores** (those who pray): clergy and monastics",
            "**Bellatores** (those who fight): nobles and knights",
            "**Laboratores** (those who work): peasants and (later) townspeople",
            "Each order was understood to serve the others within God's plan",
          ]
        },
        {
          title: "Peasants and the Manor",
          points: [
            "Most medieval Christians were peasants tied to manorial agriculture",
            "Serfs owed labor and rents to their lord; free peasants paid only rent",
            "Parish life rhythms — Sunday Mass, feast days, baptisms, funerals — provided cohesion",
          ]
        },
        {
          title: "Towns and a New Order",
          points: [
            "Eleventh-century revival of trade led to rapid urban growth",
            "Townspeople did not fit neatly into the three orders",
            "**Guilds** organized crafts; merchants accumulated wealth and influence",
            "Universities, mendicant friars, and lay devotional movements thrived in towns",
          ]
        },
        {
          title: "Tensions and Reform",
          points: [
            "Wealth of the church became a target of criticism (Cathars, Waldensians)",
            "Mendicant orders (Franciscans, Dominicans) sought to embody apostolic poverty",
            "Peasant revolts (14th c.) protested taxation and serfdom in religious language",
            "Late medieval society retained the language of three orders but no longer fit it",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "Name the three orders of medieval Christian society.",
        type: "short",
        answer: "Those who pray (oratores — clergy/monastics), those who fight (bellatores — nobles), and those who work (laboratores — peasants).",
        explanation: "It was a theological vision more than an empirical description."
      },
      {
        question: "Why did towns disrupt the three-order scheme?",
        type: "mc",
        options: ["A) Townspeople ignored Christianity", "B) Merchants and artisans did not fit the categories of prayer, war, or agriculture", "C) Towns were illegal", "D) Towns were only Jewish or Muslim"],
        answer: "B) Merchants and artisans did not fit the categories of prayer, war, or agriculture",
        explanation: "Urban wealth, guild structures, and lay piety created new social realities the old model could not contain."
      },
      {
        question: "How did mendicants respond to wealth in the church?",
        type: "short",
        answer: "Francis and Dominic founded orders that renounced property and lived from alms, hoping to recover the apostolic life and answer popular movements that accused the church of betraying Christ's poverty.",
        explanation: "Mendicants placed themselves where ordinary people lived: in growing cities."
      },
    ],
    keyTerms: [
      { term: "Oratores", definition: "Those who pray; clergy and monastics" },
      { term: "Bellatores", definition: "Those who fight; nobles and knights" },
      { term: "Laboratores", definition: "Those who work; peasants and townspeople" },
      { term: "Manorialism", definition: "Economic system of medieval rural estates" },
      { term: "Serfdom", definition: "Status of peasants bound to a particular lord's land" },
      { term: "Guild", definition: "Sworn association of craftsmen or merchants regulating their trade" },
    ]
  },
  {
    id: 37,
    videoId: "uvXPeZ1rTt0",
    title: "Magna Carta",
    videoTitle: "Magna Carta",
    duration: "~25 min",
    objective: "In 1215 English barons forced King John to seal a charter limiting royal power. Often hailed as a foundation of constitutional government, Magna Carta also illustrates the political role of medieval bishops and the church.",
    notes: {
      sections: [
        {
          title: "Background",
          points: [
            "King John (r. 1199-1216): military failures, heavy taxation, conflict with papacy and barons",
            "Quarrel with Pope **Innocent III** over the see of Canterbury",
            "Innocent placed England under interdict (1208) and excommunicated John (1209)",
            "John submitted, surrendering England as a papal fief in 1213",
          ]
        },
        {
          title: "The Crisis of 1215",
          points: [
            "Barons rebelled over abuses of feudal rights, arbitrary taxation, and military demands",
            "Met John at Runnymede in June 1215",
            "Archbishop **Stephen Langton** played a central mediating role",
          ]
        },
        {
          title: "What Magna Carta Said",
          points: [
            "Confirmed traditional liberties of the church",
            "Limited the king's ability to levy certain taxes without consent",
            "Promised due process: no free man imprisoned 'except by the lawful judgment of his peers'",
            "Established a council of barons to monitor compliance",
          ]
        },
        {
          title: "Aftermath and Legacy",
          points: [
            "John repudiated it almost immediately; Innocent III annulled it",
            "Reissued by John's successors and woven into English law",
            "Later generations invoked it as a charter of liberty, even far beyond its original meaning",
            "Shows how church courts, bishops, and barons together restrained monarchical power",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "Why was Stephen Langton important?",
        type: "short",
        answer: "As Archbishop of Canterbury, Langton mediated between John and the rebellious barons, helped articulate the barons' demands, and shaped Magna Carta's final form. His involvement shows that bishops, not only barons, framed limits on royal power.",
        explanation: "Langton himself had been the original cause of John's quarrel with Innocent III."
      },
      {
        question: "What did Magna Carta promise about due process?",
        type: "mc",
        options: ["A) Trial by combat for all", "B) No free man imprisoned except by lawful judgment of his peers", "C) Immediate royal pardon for any accusation", "D) Confession by torture"],
        answer: "B) No free man imprisoned except by lawful judgment of his peers",
        explanation: "This clause became the seed of later constitutional protections in English-speaking law."
      },
      {
        question: "Why did Pope Innocent III annul Magna Carta?",
        type: "short",
        answer: "John had become a papal vassal in 1213, so Innocent regarded the charter as extorted from his liege man and an offense against papal authority. The annulment failed politically, and Magna Carta endured.",
        explanation: "It illustrates how tangled papal, royal, and baronial power had become."
      },
    ],
    keyTerms: [
      { term: "King John", definition: "English king (1199-1216) forced to seal Magna Carta" },
      { term: "Innocent III", definition: "Powerful pope (1198-1216) who made England a papal fief" },
      { term: "Stephen Langton", definition: "Archbishop of Canterbury; mediator at Runnymede" },
      { term: "Runnymede", definition: "Meadow where Magna Carta was sealed in June 1215" },
      { term: "Interdict", definition: "Papal sanction suspending most sacraments in a region" },
      { term: "Magna Carta", definition: "'Great Charter' (1215) limiting royal power and securing liberties" },
    ]
  },
  {
    id: 38,
    videoId: "rh6kDNVPk54",
    title: "Black Death",
    videoTitle: "Black Death",
    duration: "~25 min",
    objective: "The plague that struck Europe between 1347 and 1351 killed perhaps a third of the population. This lecture explores the religious responses to the catastrophe and its long-term effects on the medieval church.",
    notes: {
      sections: [
        {
          title: "The Plague Arrives",
          points: [
            "Likely **Yersinia pestis** carried by fleas on rats along trade routes",
            "Entered Europe through Sicilian ports in 1347",
            "Killed an estimated **30-50% of the European population** within four years",
            "Recurred in waves for the next several centuries",
          ]
        },
        {
          title: "Religious Responses",
          points: [
            "Mass processions, penitential rites, and pilgrimages",
            "**Flagellant** movements: groups whipped themselves publicly seeking divine mercy",
            "Scapegoating of Jews, who were massacred in many cities",
            "Many clergy died — sometimes ministering to the sick, sometimes fleeing",
          ]
        },
        {
          title: "Effects on the Church",
          points: [
            "Replacement clergy were often poorly trained, weakening pastoral care",
            "Decline in clerical prestige; rise of anti-clerical sentiment",
            "Wealth shifted as labor became scarce; serfdom weakened",
            "Heightened focus on death, judgment, and the afterlife in art and devotion",
          ]
        },
        {
          title: "Theological Aftershocks",
          points: [
            "Why did God allow this? Renewed wrestling with theodicy",
            "Surge of interest in mysticism (Eckhart, Tauler, Julian of Norwich)",
            "Devotional intensity coexisted with cynicism about the institutional church",
            "Contributed to the religious unrest that fed Wycliffe, Hus, and eventually the Reformation",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "What disease most likely caused the Black Death?",
        type: "short",
        answer: "Bubonic plague caused by Yersinia pestis, transmitted by fleas carried on rats. Some scholars argue for additional pneumonic forms that spread person-to-person.",
        explanation: "The pace and lethality of the outbreak baffled medieval observers."
      },
      {
        question: "Who were the flagellants?",
        type: "mc",
        options: ["A) Wandering scholars", "B) Groups who publicly whipped themselves seeking divine mercy", "C) A monastic order founded by Francis", "D) Heretical mystics in Spain"],
        answer: "B) Groups who publicly whipped themselves seeking divine mercy",
        explanation: "The movement was eventually condemned by Pope Clement VI as excessive and disruptive."
      },
      {
        question: "How did the Black Death affect the late medieval church?",
        type: "short",
        answer: "It killed many clergy and weakened pastoral care, fueled anti-clericalism, intensified focus on death and salvation, and contributed to the religious instability that fed late medieval reform movements.",
        explanation: "The plague did not cause the Reformation — but it deepened the cracks."
      },
    ],
    keyTerms: [
      { term: "Black Death", definition: "Plague pandemic in Europe, 1347-1351" },
      { term: "Yersinia pestis", definition: "Bacterium that causes bubonic plague" },
      { term: "Flagellants", definition: "Penitential movement using public self-scourging during the plague" },
      { term: "Theodicy", definition: "Theological attempt to reconcile God's goodness with the existence of evil" },
      { term: "Anti-clericalism", definition: "Hostility toward the clergy and church institutions" },
      { term: "Memento Mori", definition: "Reminder of mortality; prominent in late medieval art" },
    ]
  },
{
    id: 39,
    videoId: "Q_s9Rcsg5UI",
    title: "Great Schism (1054)",
    videoTitle: "Great Schism (1054)",
    duration: "~30 min",
    objective: "This module examines the Great Schism between Eastern Orthodox and Roman Catholic Christianity, tracing its theological, cultural, and political causes.",
    notes: {
      sections: [
        {
          title: "A Long Process, Not a Single Event",
          points: [
            "The **1054 schism** was not a sudden break but the culmination of centuries of **growing estrangement**",
            "East and West had been drifting apart since the **division of the Roman Empire** (395 AD)",
            "**Language barrier**: West spoke Latin; East spoke Greek; translations were imperfect",
            "**Political division**: Western empire fell; East continued as Byzantine Empire",
            "Different **cultural contexts** produced different theological emphases and practices"
          ]
        },
        {
          title: "Theological Differences",
          points: [
            "**Filioque controversy**: West added 'and the Son' to Nicene Creed (Spirit proceeds from Father 'and the Son')",
            "East objected: the addition was **unauthorized** (no ecumenical council approved it)",
            "East also objected **theologically**: it distorts Trinitarian relations",
            "**Papal primacy**: Rome claimed supreme jurisdiction; Constantinople saw Rome as first among equals",
            "Different understandings of **original sin, purgatory, and other doctrines** developed"
          ]
        },
        {
          title: "Liturgical and Disciplinary Differences",
          points: [
            "**Leavened vs. unleavened bread** in the Eucharist (East used leavened; West unleavened)",
            "**Clerical celibacy**: West required for all clergy; East allowed married priests (not bishops)",
            "**Fasting practices** differed between East and West",
            "**Confirmation**: performed by priests in the East; reserved to bishops in the West",
            "These differences accumulated and hardened over centuries"
          ]
        },
        {
          title: "The Events of 1054",
          points: [
            "**Pope Leo IX** sent Cardinal **Humbert** to Constantinople to negotiate",
            "Patriarch **Michael Cerularius** refused to yield on Eastern practices",
            "Humbert placed a bull of **excommunication** on the altar of Hagia Sophia (July 16, 1054)",
            "Cerularius then **excommunicated** the papal legates",
            "Note: Leo IX had died before the excommunication - its validity was questionable",
            "The excommunications were of **individuals**, not entire churches, technically"
          ]
        },
        {
          title: "Deepening of the Schism",
          points: [
            "The **Crusades** deepened hostility, especially the **Fourth Crusade (1204)**",
            "Crusaders **sacked Constantinople**, installed a Latin emperor and patriarch",
            "Byzantines never forgave this betrayal - it poisoned relations permanently",
            "Attempts at reunion (**Council of Florence, 1439**) failed to stick",
            "The **fall of Constantinople (1453)** ended Byzantine civilization but not the Orthodox Church"
          ]
        },
        {
          title: "Modern Developments",
          points: [
            "The mutual excommunications were **lifted in 1964** by Pope Paul VI and Patriarch Athenagoras",
            "Significant **ecumenical dialogue** has occurred since then",
            "However, the churches remain **separate** - full communion not restored",
            "Differences over papal authority remain the **chief obstacle**",
            "The schism divided Christianity's two oldest branches and endures nearly 1,000 years later"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What is the 'Filioque' controversy that divided East and West?",
        type: "short",
        answer: "The West added 'and the Son' (Filioque) to the Nicene Creed, saying the Holy Spirit proceeds from the Father 'and the Son.' The East objected that this was unauthorized (no council approved it) and theologically problematic (distorting the Father's unique role in the Trinity).",
        explanation: "This seemingly technical dispute reflected deeper differences in authority and theology."
      },
      {
        question: "What happened during the Fourth Crusade that permanently poisoned East-West relations?",
        type: "mc",
        options: ["A) Muslims conquered Constantinople", "B) Crusaders sacked Constantinople and installed a Latin emperor", "C) The pope excommunicated all Eastern Christians", "D) Byzantine armies attacked Rome"],
        answer: "B) Crusaders sacked Constantinople and installed a Latin emperor",
        explanation: "In 1204, Western Crusaders diverted to Constantinople, looted the Christian city, and established Latin rule - a betrayal the East never forgave."
      },
      {
        question: "Were the 1054 excommunications between entire churches?",
        type: "mc",
        options: ["A) Yes, both churches officially excommunicated each other", "B) No, only individuals were excommunicated, not entire churches", "C) Only the East excommunicated the West", "D) There were no excommunications in 1054"],
        answer: "B) No, only individuals were excommunicated, not entire churches",
        explanation: "Technically, Cardinal Humbert excommunicated Patriarch Cerularius, who responded by excommunicating Humbert and his fellow legates - not entire communions."
      },
      {
        question: "What remains the chief obstacle to reunification between Eastern Orthodox and Roman Catholic churches today?",
        type: "short",
        answer: "Differences over papal authority remain the chief obstacle. The Catholic Church claims the pope has supreme jurisdiction over all Christians, while the Orthodox see him as first among equals without universal jurisdiction.",
        explanation: "Though the 1054 excommunications were lifted in 1964, this fundamental ecclesiological difference persists."
      }
    ],
    keyTerms: [
      { term: "Filioque", definition: "'And the Son' - Western addition to the Creed stating the Spirit proceeds from Father and Son; rejected by East" },
      { term: "Great Schism (1054)", definition: "Formal break between Eastern Orthodox and Roman Catholic churches; excommunications between Humbert and Cerularius" },
      { term: "Michael Cerularius", definition: "Patriarch of Constantinople who clashed with papal legates in 1054" },
      { term: "Cardinal Humbert", definition: "Papal legate who placed excommunication on the altar of Hagia Sophia in 1054" },
      { term: "Fourth Crusade", definition: "1204 crusade that sacked Constantinople instead of fighting Muslims; deepened the schism" },
      { term: "Pentarchy", definition: "Eastern concept of church governance by five patriarchs (Rome, Constantinople, Alexandria, Antioch, Jerusalem)" }
    ]
  },
  {
    id: 40,
    videoId: "uU7GSf35oSY",
    title: "Avignon Papacy: When the Popes Moved to France",
    videoTitle: "Avignon Papacy: When the Popes Moved to France",
    duration: "~30 min",
    objective: "From 1309 to 1377 the popes lived not in Rome but in Avignon under heavy French influence. The 'Babylonian Captivity of the Church' shook papal credibility and set up the Western Schism.",
    notes: {
      sections: [
        {
          title: "Why Avignon?",
          points: [
            "Conflict between Pope **Boniface VIII** and King **Philip IV of France** ended in Boniface's humiliation at Anagni (1303)",
            "Boniface's successor died quickly; **Clement V** (a Frenchman) was elected in 1305",
            "Italy was politically unstable; Clement moved the papal court to Avignon in 1309",
          ]
        },
        {
          title: "Life in Avignon",
          points: [
            "Seven successive popes — all French — ruled from Avignon",
            "Built a vast new papal palace; expanded administration and finances",
            "Heavy reliance on **annates**, **expectatives**, and other fiscal devices",
            "Reputation for luxury, nepotism, and French political bias",
          ]
        },
        {
          title: "Critics",
          points: [
            "**Petrarch** denounced Avignon as a 'Babylon of the West'",
            "**Catherine of Siena** urged the popes to return to Rome",
            "**Marsilius of Padua** and **William of Ockham** developed theories limiting papal power",
          ]
        },
        {
          title: "Return and Schism",
          points: [
            "**Gregory XI** returned the papacy to Rome in 1377",
            "On his death (1378), a contested conclave produced rival popes in Rome and Avignon",
            "The **Western Schism** had begun — the direct fruit of the Avignon experiment",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "Why is the Avignon period called the 'Babylonian Captivity of the Church'?",
        type: "short",
        answer: "Critics, especially Petrarch, drew an analogy to the seventy-year exile of Israel in Babylon. They charged that the papacy had been taken from its rightful home in Rome and held under French influence for roughly seventy years (1309-1377).",
        explanation: "The label stuck even though the analogy was inexact."
      },
      {
        question: "Who finally returned the papacy to Rome?",
        type: "mc",
        options: ["A) Innocent III", "B) Boniface VIII", "C) Gregory XI", "D) Clement V"],
        answer: "C) Gregory XI",
        explanation: "Influenced by Catherine of Siena and political shifts in Italy, Gregory XI re-entered Rome in 1377."
      },
      {
        question: "How did Avignon contribute to the Western Schism?",
        type: "short",
        answer: "Avignon entrenched a large French cardinalate and bureaucracy. When Gregory XI died in Rome, a tumultuous Roman conclave produced Urban VI; dissatisfied French cardinals then elected a rival, Clement VII, who returned to Avignon — opening the schism.",
        explanation: "It set up a thirty-nine-year crisis of two and eventually three competing popes."
      },
    ],
    keyTerms: [
      { term: "Avignon Papacy", definition: "Period (1309-1377) when popes resided in Avignon" },
      { term: "Boniface VIII", definition: "Pope humiliated at Anagni (1303); his death precipitated the move" },
      { term: "Clement V", definition: "First Avignon pope; moved the court in 1309" },
      { term: "Annates", definition: "First year's income from a benefice paid to the pope" },
      { term: "Petrarch", definition: "Italian humanist who attacked Avignon as 'Babylon'" },
      { term: "Catherine of Siena", definition: "Mystic and reformer who urged the papacy back to Rome" },
      { term: "Gregory XI", definition: "Pope who returned to Rome in 1377" },
    ]
  },
  {
    id: 41,
    videoId: "ckHJOeR0BBQ",
    title: "100 Years War",
    videoTitle: "100 Years War",
    duration: "~25 min",
    objective: "The Hundred Years' War (1337-1453) between England and France reshaped European politics, weakened papal credibility, and produced one of the most famous Christian figures of the late Middle Ages — Joan of Arc.",
    notes: {
      sections: [
        {
          title: "Causes",
          points: [
            "English kings held large French territories as vassals of the French crown",
            "Edward III claimed the French throne through his mother in 1337",
            "Economic conflict over Flanders and the wool trade",
            "Long political and dynastic rivalry between the Plantagenets and Valois",
          ]
        },
        {
          title: "Three Phases",
          points: [
            "**Edwardian War (1337-1360)**: English victories at Crécy and Poitiers; longbow dominance",
            "**Caroline War (1369-1389)**: French recovery under Charles V and Bertrand du Guesclin",
            "**Lancastrian War (1415-1453)**: Henry V's victory at Agincourt; eventual French triumph",
          ]
        },
        {
          title: "Joan of Arc",
          points: [
            "Peasant girl from Domrémy; claimed visions of Saints Michael, Catherine, and Margaret",
            "Persuaded the Dauphin to let her lead troops; lifted the siege of Orléans (1429)",
            "Charles VII crowned at Reims with Joan present",
            "Captured by Burgundians, sold to the English, tried by a French ecclesiastical court",
            "Burned as a heretic in 1431 at age 19; rehabilitated in 1456; canonized in 1920",
          ]
        },
        {
          title: "Religious Effects",
          points: [
            "War unfolded during the Avignon Papacy and Western Schism — papal mediation impossible",
            "Each side claimed divine favor and used the church for propaganda",
            "Joan's trial illustrates how church courts could serve political ends",
            "National Christian identities (English vs. French) deepened",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "How did the Hundred Years War interact with the Western Schism?",
        type: "short",
        answer: "The war and the schism overlapped, with England and France often supporting rival popes. The papacy could not impartially mediate, since each pope depended on royal allegiance, weakening the papal claim to spiritual authority over Christendom.",
        explanation: "Politics fractured what was supposed to be a unified Christendom."
      },
      {
        question: "Where was Joan of Arc condemned and executed?",
        type: "mc",
        options: ["A) Paris", "B) Rouen", "C) Orléans", "D) Reims"],
        answer: "B) Rouen",
        explanation: "She was tried by an English-aligned ecclesiastical court in Rouen and burned there in 1431."
      },
      {
        question: "Why did the war strengthen national identities?",
        type: "short",
        answer: "Prolonged conflict, royal taxation, and propaganda fostered distinct senses of being 'English' or 'French.' Religious devotion increasingly took on national color, foreshadowing the national churches of the Reformation era.",
        explanation: "Christendom remained the ideal; the nation-state was the rising reality."
      },
    ],
    keyTerms: [
      { term: "Hundred Years' War", definition: "Series of conflicts between England and France, 1337-1453" },
      { term: "Edward III", definition: "English king who claimed the French throne in 1337" },
      { term: "Agincourt (1415)", definition: "Decisive English victory under Henry V" },
      { term: "Joan of Arc", definition: "Peasant visionary (1412-1431); helped turn the war for France" },
      { term: "Dauphin", definition: "Title of the heir to the French throne (later Charles VII)" },
      { term: "Rehabilitation", definition: "Posthumous overturning of Joan's heresy conviction in 1456" },
    ]
  },
{
    id: 42,
    videoId: "ZDvmqpjkkxo",
    title: "One Throne, Three Popes: The Great Western Schism",
    videoTitle: "One Throne, Three Popes: The Great Western Schism",
    duration: "~30 min",
    objective: "This module examines the Great Western Schism (1378-1417) when rival popes divided Western Christianity and the conciliar movement attempted to heal the breach.",
    notes: {
      sections: [
        {
          title: "Background: The Avignon Papacy",
          points: [
            "After conflict with Philip IV, Pope **Clement V** moved the papal court to **Avignon** (1309)",
            "Avignon was technically not French territory but was dominated by French influence",
            "**Seven popes** reigned at Avignon (1309-1377) - all French",
            "Critics called it the **'Babylonian Captivity'** of the church",
            "Papal administration became more bureaucratic and fiscally aggressive",
            "**Gregory XI** finally returned to Rome in 1377"
          ]
        },
        {
          title: "The Schism Begins (1378)",
          points: [
            "Gregory XI died shortly after returning to Rome (1378)",
            "Roman mob demanded an Italian pope; cardinals elected **Urban VI**",
            "Urban proved erratic, harsh, and possibly mentally unstable",
            "French cardinals claimed the election was coerced; elected **Clement VII**",
            "Clement returned to Avignon; Urban remained in Rome",
            "Now two popes, each claiming legitimacy, each excommunicating the other"
          ]
        },
        {
          title: "Europe Divided",
          points: [
            "Nations aligned along political lines:",
            "**Roman obedience**: England, Holy Roman Empire, most of Italy, Scandinavia",
            "**Avignon obedience**: France, Scotland, Castile, Aragon, Naples",
            "Each side elected successors when popes died - the schism perpetuated itself",
            "Saints were divided: **Catherine of Siena** supported Rome; **Vincent Ferrer** supported Avignon",
            "Ordinary Christians faced confusion: which pope guaranteed valid sacraments?"
          ]
        },
        {
          title: "The Council of Pisa (1409)",
          points: [
            "Cardinals from both sides met at **Pisa** to end the schism",
            "Deposed both popes and elected **Alexander V** (soon succeeded by John XXIII)",
            "Neither existing pope accepted deposition - now **three popes**",
            "The attempted solution made things worse",
            "Demonstrated the need for a stronger approach"
          ]
        },
        {
          title: "The Council of Constance (1414-1418)",
          points: [
            "Called by Emperor **Sigismund** to end the schism",
            "Largest church council ever - thousands of participants",
            "Deposed or received resignations from all three claimants",
            "Elected **Martin V** (1417) as sole pope - schism ended",
            "Also condemned **John Wycliffe** (posthumously) and burned **Jan Hus** for heresy",
            "Issued **Frequens**: councils should meet regularly to govern the church"
          ]
        },
        {
          title: "Conciliarism and Its Defeat",
          points: [
            "**Conciliarism**: theory that a general council is superior to the pope",
            "Seemed vindicated by Constance's success in ending the schism",
            "The decree **Haec Sancta** (1415) claimed council authority over popes",
            "Later popes rejected conciliarism and reasserted papal supremacy",
            "**Council of Basel** (1431-1449) challenged Pope Eugene IV but eventually collapsed",
            "Papal monarchy was restored, but prestige was permanently damaged"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What caused the Great Schism to begin in 1378?",
        type: "short",
        answer: "After Gregory XI died in Rome, a Roman mob pressured cardinals to elect an Italian pope (Urban VI). When Urban proved erratic and harsh, French cardinals claimed the election was coerced, declared it invalid, and elected Clement VII, who returned to Avignon. Each pope excommunicated the other.",
        explanation: "The schism resulted from a combination of Roman pressure, Urban's difficult personality, and French cardinals' desire to return to Avignon."
      },
      {
        question: "What happened at the Council of Pisa (1409)?",
        type: "mc",
        options: ["A) The schism was successfully ended", "B) A third pope was elected, making three claimants", "C) The council was canceled", "D) All three popes reconciled"],
        answer: "B) A third pope was elected, making three claimants",
        explanation: "Pisa deposed both existing popes and elected a third, but neither existing pope accepted deposition - so now there were three rival popes."
      },
      {
        question: "How did the Council of Constance (1414-1418) end the schism?",
        type: "short",
        answer: "The council obtained resignations from or deposed all three papal claimants and then elected Martin V as the single, universally recognized pope in 1417. The council's success demonstrated that conciliar action could solve problems the papacy alone could not.",
        explanation: "Constance was the largest and one of the most successful medieval councils."
      },
      {
        question: "What is 'conciliarism'?",
        type: "mc",
        options: ["A) The theory that the pope is supreme over councils", "B) The theory that a general council is superior to the pope", "C) The theory that councils should never meet", "D) The theory that only cardinals can govern the church"],
        answer: "B) The theory that a general council is superior to the pope",
        explanation: "Conciliarism held that the church's highest authority was a general council, which could judge and even depose popes - as demonstrated at Constance."
      }
    ],
    keyTerms: [
      { term: "Avignon Papacy", definition: "Period 1309-1377 when popes resided at Avignon under French influence; called 'Babylonian Captivity'" },
      { term: "Great Western Schism", definition: "1378-1417 division when rival popes at Rome and Avignon (later three) claimed legitimacy" },
      { term: "Council of Constance", definition: "1414-1418 council that ended the schism by deposing rival popes and electing Martin V" },
      { term: "Conciliarism", definition: "Theory that a general council is superior to the pope and can judge him" },
      { term: "Haec Sancta", definition: "1415 decree of Constance asserting council authority over popes; later rejected by popes" },
      { term: "Frequens", definition: "Constance decree requiring regular councils; largely ignored by later popes" }
    ]
  },
  {
    id: 43,
    videoId: "R7AhBEq4Gqs",
    title: "Boethius and Christian Philosophy",
    videoTitle: "Boethius and Christian Philosophy",
    duration: "~25 min",
    objective: "Boethius (c. 480-524) stood at the hinge between the ancient world and the medieval. Through his translations and his Consolation of Philosophy, he handed Greek learning to Latin Christendom.",
    notes: {
      sections: [
        {
          title: "Boethius the Man",
          points: [
            "Roman aristocrat; consul under the Ostrogothic king Theodoric",
            "Falsely accused of treason and imprisoned",
            "Wrote his masterpiece in prison while awaiting execution",
            "Executed c. 524; venerated in some traditions as a martyr",
          ]
        },
        {
          title: "The Consolation of Philosophy",
          points: [
            "Dialogue between Boethius and Lady Philosophy",
            "Wrestles with fortune, providence, free will, and the highest good",
            "Notably does not quote Scripture — but is deeply compatible with Christian thought",
            "Most read 'philosophy book' of the entire medieval period after the Bible",
          ]
        },
        {
          title: "Boethius the Translator",
          points: [
            "Project: translate all of Plato and Aristotle into Latin",
            "Completed Aristotle's logical works (the *Organon*) before his death",
            "These translations were almost the only Aristotle the Latin West had until 1100",
            "Defined the technical vocabulary of medieval philosophy and theology",
          ]
        },
        {
          title: "Theological Tractates",
          points: [
            "Short treatises on the Trinity and on Christ's natures",
            "Used Aristotelian categories to articulate orthodox doctrine",
            "Pioneered the marriage of philosophy and theology that scholasticism would perfect",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "Why was Boethius so influential in the medieval West?",
        type: "short",
        answer: "Through his translations and commentaries on Aristotle's logic, he provided the West with most of its philosophical vocabulary and tools from c. 524 until the recovery of fuller Aristotle in the 12th century.",
        explanation: "He was the bridge from antiquity to scholasticism."
      },
      {
        question: "What is the literary form of The Consolation of Philosophy?",
        type: "mc",
        options: ["A) Sermon", "B) Dialogue between Boethius and Lady Philosophy", "C) Verse epic", "D) Catechism"],
        answer: "B) Dialogue between Boethius and Lady Philosophy",
        explanation: "It alternates prose and verse (a Menippean satire) as Lady Philosophy comforts the condemned man."
      },
      {
        question: "How can the Consolation be Christian without quoting Scripture?",
        type: "short",
        answer: "It uses philosophical reasoning available to any human mind, but its conclusions on providence, the highest good, and the soul's destiny align with Christian convictions. The lack of Scripture made it readable and usable for many audiences.",
        explanation: "Boethius shows how natural reason can support, not replace, revelation."
      },
    ],
    keyTerms: [
      { term: "Boethius", definition: "Late Roman philosopher (c. 480-524); bridge to medieval thought" },
      { term: "Consolation of Philosophy", definition: "Boethius's dialogue on fortune, providence, and the good" },
      { term: "Organon", definition: "Aristotle's logical works; translated by Boethius" },
      { term: "Theodoric", definition: "Ostrogothic king under whom Boethius served and died" },
      { term: "Theological Tractates", definition: "Boethius's short orthodox treatises on Trinity and Christology" },
      { term: "Lady Philosophy", definition: "Allegorical figure who consoles Boethius in his cell" },
    ]
  },
  {
    id: 44,
    videoId: "JeA7QPm8f8g",
    title: "Aristotle and Scholasticism",
    videoTitle: "Aristotle and Scholasticism",
    duration: "~30 min",
    objective: "Between 1100 and 1300 the recovery of Aristotle's full corpus transformed Western theology. This lecture explains scholasticism, its method, its institutions, and the controversies sparked by Aristotle's return.",
    notes: {
      sections: [
        {
          title: "The Recovery of Aristotle",
          points: [
            "Only Aristotle's logic was known in the early Middle Ages (via Boethius)",
            "Twelfth century: translations of Aristotle's physics, metaphysics, ethics from Arabic and Greek",
            "Centers like **Toledo** in Spain played a crucial role",
            "Muslim commentators (especially **Averroes**) accompanied the text",
          ]
        },
        {
          title: "What Is Scholasticism?",
          points: [
            "Method of theology developed in medieval universities",
            "Used dialectic: posing a question, listing objections, giving an answer, replying to objections",
            "Aimed to reconcile authoritative texts (Scripture, Fathers, philosophers)",
            "Best-known form: the **summa**, an organized synthesis of theology",
          ]
        },
        {
          title: "Universities",
          points: [
            "**Paris, Oxford, Bologna** emerged in the late 12th-13th centuries",
            "Faculty of theology shaped doctrine; faculty of arts taught Aristotle",
            "Mendicant friars (Dominicans, Franciscans) dominated theology faculties",
          ]
        },
        {
          title: "Controversies",
          points: [
            "Some Aristotelian doctrines (eternity of the world, mortality of the soul) conflicted with faith",
            "**Condemnations of 1277** in Paris targeted radical Aristotelian propositions",
            "**Aquinas** showed how Aristotle could be baptized into Christian theology",
            "**Bonaventure** preferred a more Augustinian, less Aristotelian path",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "What is the typical scholastic method?",
        type: "short",
        answer: "Pose a question, list arguments on each side, state the author's answer (sed contra and respondeo), and reply to each opposing argument in turn. Aquinas's Summa Theologiae is the classic example.",
        explanation: "It trained generations in disciplined argument that we still call 'academic.'"
      },
      {
        question: "Who was Averroes?",
        type: "mc",
        options: ["A) A Dominican friar", "B) A Muslim philosopher whose Aristotle commentaries shaped scholasticism", "C) The first pope of Avignon", "D) A Byzantine emperor"],
        answer: "B) A Muslim philosopher whose Aristotle commentaries shaped scholasticism",
        explanation: "Latin scholastics often referred to him simply as 'the Commentator.'"
      },
      {
        question: "Why were some Aristotelian ideas condemned in 1277?",
        type: "short",
        answer: "Radical Aristotelians taught propositions like the eternity of the world or the mortality of the individual soul, which conflict with Christian doctrine. Bishop Stephen Tempier of Paris condemned 219 such propositions to set boundaries on the use of Aristotle.",
        explanation: "The condemnations show that scholasticism was not uncritical of its sources."
      },
    ],
    keyTerms: [
      { term: "Scholasticism", definition: "Medieval university theology using dialectic and Aristotelian categories" },
      { term: "Summa", definition: "Comprehensive systematic theological work (e.g., Summa Theologiae)" },
      { term: "Aristotle", definition: "Greek philosopher whose recovered works reshaped medieval theology" },
      { term: "Averroes", definition: "Muslim Aristotle commentator influential on Latin scholastics" },
      { term: "Sic et Non", definition: "Abelard's collection of contradictory authorities; scholastic method in seed" },
      { term: "Condemnations of 1277", definition: "Paris condemnation of 219 radical Aristotelian propositions" },
    ]
  },
  {
    id: 45,
    videoId: "hnL9x7DmLVo",
    title: "Anselm on God: the Ontological Argument",
    videoTitle: "Anselm on God: the Ontological Argument",
    duration: "~25 min",
    objective: "Anselm of Canterbury (1033-1109) is the first great theologian of the second Christian millennium. This lecture surveys his life, his famous ontological argument, and his model of 'faith seeking understanding.'",
    notes: {
      sections: [
        {
          title: "Anselm's Life",
          points: [
            "Born in Aosta (modern Italy); entered the abbey of **Bec** in Normandy",
            "Became abbot of Bec, then **Archbishop of Canterbury (1093-1109)**",
            "Twice exiled in disputes with English kings over investiture",
          ]
        },
        {
          title: "Fides Quaerens Intellectum",
          points: [
            "'**Faith seeking understanding**' — his theological motto",
            "Believing is not a substitute for thinking; it makes deep thinking possible",
            "Rational arguments serve, not replace, faith and prayer",
          ]
        },
        {
          title: "The Ontological Argument",
          points: [
            "Set out in the **Proslogion**",
            "God = 'that than which nothing greater can be thought'",
            "If God exists only in the mind, a greater being (one existing in reality) can be conceived — contradiction",
            "Therefore God must exist in reality as well as in the mind",
            "First major argument for God's existence based purely on the concept of God",
          ]
        },
        {
          title: "Cur Deus Homo",
          points: [
            "'Why the God-Man?' — Anselm's classic on the atonement",
            "Human sin offends infinite divine honor; only an infinite person can make satisfaction",
            "Only the God-Man can offer that satisfaction; hence the necessity of the Incarnation",
            "Foundational for the **satisfaction theory** of atonement",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "State Anselm's ontological argument briefly.",
        type: "short",
        answer: "God is 'that than which nothing greater can be thought.' If God existed only in the mind, a greater being could be conceived — one existing in reality as well. Therefore God must exist in reality.",
        explanation: "The argument tries to reason from the very concept of God to God's existence."
      },
      {
        question: "What does *fides quaerens intellectum* mean?",
        type: "mc",
        options: ["A) Faith replacing understanding", "B) Faith seeking understanding", "C) Understanding without faith", "D) Faith opposed to reason"],
        answer: "B) Faith seeking understanding",
        explanation: "Anselm believes in order to understand; understanding deepens belief."
      },
      {
        question: "Summarize the argument of Cur Deus Homo.",
        type: "short",
        answer: "Human sin dishonors the infinite God and demands satisfaction. Humans owe the satisfaction but cannot pay it; only God can pay it but does not owe it. Therefore the satisfaction must be made by one who is both God and man — hence the necessity of the Incarnation.",
        explanation: "It became the dominant Western view of why Christ had to die."
      },
    ],
    keyTerms: [
      { term: "Anselm of Canterbury", definition: "Theologian (1033-1109); abbot of Bec, archbishop of Canterbury" },
      { term: "Fides Quaerens Intellectum", definition: "'Faith seeking understanding'; Anselm's theological program" },
      { term: "Ontological Argument", definition: "Argument from the concept of God to God's existence" },
      { term: "Proslogion", definition: "Anselm's work containing the ontological argument" },
      { term: "Cur Deus Homo", definition: "'Why the God-Man?'; Anselm's treatise on the atonement" },
      { term: "Satisfaction Theory", definition: "View that Christ's death satisfies the demands of divine honor/justice" },
    ]
  },
{
    id: 46,
    videoId: "MF_fOYbLVY4",
    title: "Abelard on the Trinity",
    videoTitle: "Abelard on the Trinity",
    duration: "~25 min",
    objective: "This module examines Peter Abelard, the brilliant and controversial philosopher-theologian whose dialectical method and tragic love affair shaped medieval intellectual history.",
    notes: {
      sections: [
        {
          title: "Life and Career",
          points: [
            "**Peter Abelard** (1079-1142) was born in Brittany to a minor noble family",
            "Chose the life of a **scholar** over knighthood; studied under leading masters",
            "Known for **defeating his teachers in debate** - arrogant but brilliant",
            "Established his own school in Paris; attracted huge numbers of students",
            "His teaching career was interrupted by scandal, condemnation, and monastic retreats"
          ]
        },
        {
          title: "Heloise and the Scandal",
          points: [
            "**Heloise** was the brilliant niece of Canon Fulbert of Notre Dame",
            "Abelard became her tutor; they fell in love and had a secret affair",
            "Heloise became pregnant; they secretly married despite her objections",
            "Fulbert's men **castrated Abelard** in revenge",
            "Both entered religious life: Abelard as a monk, Heloise as a nun",
            "Their later **letters** are classics of medieval literature"
          ]
        },
        {
          title: "Theological Method: Sic et Non",
          points: [
            "Wrote **'Sic et Non'** ('Yes and No') - 158 theological questions with contradictory authorities",
            "Showed that church fathers and Scripture sometimes **seem to contradict**",
            "Did not resolve the contradictions - forced students to **think through** them",
            "Method: gather authorities, note disagreements, seek **rational reconciliation**",
            "This **dialectical method** became foundational for scholastic theology",
            "Critics saw it as undermining authority; Abelard saw it as sharpening understanding"
          ]
        },
        {
          title: "Philosophical Contributions",
          points: [
            "Major figure in the **problem of universals**: are general concepts real or just names?",
            "Developed **conceptualism**: universals exist as concepts in the mind, abstracted from particulars",
            "This mediating position between realism and nominalism was influential",
            "Applied **logic rigorously** to theological questions",
            "His approach paved the way for the **scholastic method** of the universities"
          ]
        },
        {
          title: "Conflict with Bernard",
          points: [
            "**Bernard of Clairvaux** opposed Abelard's rationalistic approach to theology",
            "Bernard believed faith should precede understanding; Abelard seemed to reverse this",
            "At the **Council of Sens (1140)**, Bernard orchestrated Abelard's condemnation",
            "Abelard appealed to Rome but was condemned by Pope Innocent II",
            "**Peter the Venerable** of Cluny sheltered Abelard; reconciled him with Bernard",
            "Abelard died at a Cluniac priory in 1142"
          ]
        },
        {
          title: "Legacy",
          points: [
            "His **dialectical method** shaped scholastic theology",
            "His students included **Peter Lombard** (author of the Sentences) and several popes",
            "The Abelard-Heloise story became a **romantic legend**",
            "They are buried together in **Pere Lachaise Cemetery** in Paris",
            "Represents the tension between **faith and reason** that defined medieval thought"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What was the purpose of Abelard's 'Sic et Non' (Yes and No)?",
        type: "short",
        answer: "Sic et Non presented 158 theological questions with seemingly contradictory quotations from Scripture and church fathers. It forced students to think through the contradictions and seek rational reconciliation, establishing the dialectical method that became foundational for scholastic theology.",
        explanation: "Abelard did not resolve the contradictions but taught students to wrestle with them intellectually."
      },
      {
        question: "What position did Abelard take on the problem of universals?",
        type: "mc",
        options: ["A) Realism - universals exist independently", "B) Nominalism - universals are just names", "C) Conceptualism - universals exist as concepts in the mind", "D) He rejected all positions"],
        answer: "C) Conceptualism - universals exist as concepts in the mind",
        explanation: "Abelard's conceptualism mediated between extreme realism and nominalism, arguing that universal concepts are real in the mind though abstracted from particular things."
      },
      {
        question: "Who orchestrated Abelard's condemnation at the Council of Sens?",
        type: "mc",
        options: ["A) Pope Innocent II", "B) Bernard of Clairvaux", "C) Peter the Venerable", "D) Heloise"],
        answer: "B) Bernard of Clairvaux",
        explanation: "Bernard opposed Abelard's rationalistic approach and orchestrated his condemnation at Sens in 1140, though Peter the Venerable later sheltered Abelard and reconciled him with Bernard."
      },
      {
        question: "What tragic event interrupted Abelard's teaching career?",
        type: "short",
        answer: "After his secret affair and marriage to Heloise, her uncle Fulbert had Abelard castrated in revenge. Both then entered religious life - Abelard as a monk and Heloise as a nun, though they continued to correspond.",
        explanation: "This scandal became one of the most famous love stories of the Middle Ages."
      }
    ],
    keyTerms: [
      { term: "Sic et Non", definition: "'Yes and No' - Abelard's work presenting contradictory authorities on theological questions to stimulate rational inquiry" },
      { term: "Dialectical Method", definition: "Approach using logical analysis of contradictory authorities to reach understanding; foundational to scholasticism" },
      { term: "Problem of Universals", definition: "Medieval debate over whether general concepts (like 'humanity') exist independently or only as names/concepts" },
      { term: "Conceptualism", definition: "Abelard's position that universals exist as concepts in the mind, abstracted from particulars" },
      { term: "Council of Sens", definition: "1140 council where Bernard orchestrated Abelard's condemnation for theological errors" },
      { term: "Heloise", definition: "Abelard's student, lover, and wife; later abbess; their letters are literary classics" }
    ]
  },
  {
    id: 47,
    videoId: "bMTryPruYh4",
    title: "Abelard on the Cross",
    videoTitle: "Abelard on the Cross",
    duration: "~25 min",
    objective: "Peter Abelard's reflections on the cross challenged Anselm's satisfaction theory and pioneered what is often called the 'moral influence' or 'exemplarist' view of the atonement.",
    notes: {
      sections: [
        {
          title: "The Context",
          points: [
            "Abelard (1079-1142): brilliant, controversial Parisian master",
            "Anselm's satisfaction theory was becoming dominant",
            "Abelard explored alternative ways to understand why Christ died",
          ]
        },
        {
          title: "Abelard's View",
          points: [
            "Christ's death is the supreme demonstration of God's love",
            "By beholding such love, sinners are inspired to love God in return",
            "Transformation flows from this awakened love, not from a transaction of satisfaction",
            "Often labeled the **moral influence** or **exemplarist** theory",
          ]
        },
        {
          title: "Strengths and Criticisms",
          points: [
            "Captures genuine biblical themes: 'God shows his love for us…' (Romans 5:8)",
            "Avoids any picture of God needing to be appeased by Christ",
            "Critics (Bernard of Clairvaux) said it ignored sin, judgment, and propitiation",
            "Many later theologians combine moral influence with satisfaction motifs",
          ]
        },
        {
          title: "Legacy",
          points: [
            "Condemned at the **Council of Sens (1141)** through Bernard's prosecution",
            "Abelard reconciled to the church before his death",
            "His atonement theology re-emerged powerfully in modern liberal Protestantism",
            "Still discussed in contemporary atonement theology",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "In Abelard's view, how does the cross save?",
        type: "short",
        answer: "By revealing God's love so fully that it awakens responsive love in the sinner, transforming the heart. Salvation flows from this awakened love rather than from a satisfaction paid to divine justice.",
        explanation: "Critics worried that this leaves sin and judgment without serious treatment."
      },
      {
        question: "What is this view often called?",
        type: "mc",
        options: ["A) Penal substitution", "B) Moral influence (exemplarist) theory", "C) Christus Victor", "D) Ransom theory"],
        answer: "B) Moral influence (exemplarist) theory",
        explanation: "It emphasizes Christ as moral example whose self-giving love changes us."
      },
      {
        question: "How might Anselm and Abelard be combined?",
        type: "short",
        answer: "Many theologians argue that Christ's death both satisfies divine justice (Anselm) and reveals divine love that transforms the sinner (Abelard). The two are not necessarily exclusive.",
        explanation: "Most robust accounts of the atonement weave several biblical strands together."
      },
    ],
    keyTerms: [
      { term: "Peter Abelard", definition: "Parisian theologian (1079-1142); controversial logician" },
      { term: "Moral Influence Theory", definition: "View that the cross saves by inspiring responsive love" },
      { term: "Exemplarism", definition: "Synonym for moral influence; Christ as supreme example" },
      { term: "Council of Sens (1141)", definition: "Council that condemned Abelard's teachings" },
      { term: "Bernard of Clairvaux", definition: "Abelard's most powerful theological opponent" },
      { term: "Atonement", definition: "Doctrine of how Christ's work reconciles God and humanity" },
    ]
  },
{
    id: 48,
    videoId: "0zCUMgCTAF0",
    title: "Bernard of Clairvaux",
    videoTitle: "Bernard of Clairvaux",
    duration: "~25 min",
    objective: "This module examines Bernard of Clairvaux, the most influential monk of the 12th century, whose spirituality, preaching, and political involvement shaped medieval Christendom.",
    notes: {
      sections: [
        {
          title: "Life and Background",
          points: [
            "**Bernard** (1090-1153) was born into a noble Burgundian family",
            "In 1112, joined the struggling **Cistercian** monastery of Cîteaux with 30 relatives and friends",
            "In 1115, sent to found a new monastery at **Clairvaux** ('Clear Valley') as its abbot",
            "Remained abbot of Clairvaux for 38 years until his death",
            "Under Bernard, Clairvaux founded **68 daughter houses**; Cistercians grew enormously",
            "His influence extended far beyond the cloister into politics and theology"
          ]
        },
        {
          title: "The Cistercian Reform",
          points: [
            "Cistercians were founded in 1098 to return to **strict Benedictine observance**",
            "Reaction against Cluniac prosperity - sought **simplicity and poverty**",
            "Built in remote valleys; did their own manual labor (also used lay brothers - **conversi**)",
            "Churches were plain - no elaborate decoration, colored glass, or towers",
            "**'Carta Caritatis'** (Charter of Charity) governed relations between houses",
            "Bernard became the most famous Cistercian, making the order prestigious"
          ]
        },
        {
          title: "Bernard's Spirituality",
          points: [
            "Emphasized **love of God** as the heart of Christian life",
            "His **sermons on the Song of Songs** (86 sermons) are classics of mystical literature",
            "Described the soul's journey to God through stages of love",
            "Famous saying: 'The measure of love is to love without measure'",
            "Combined **intellectual depth** with **affective warmth**",
            "His hymns include 'Jesus, the Very Thought of Thee' and 'O Sacred Head, Now Wounded'"
          ]
        },
        {
          title: "Political and Ecclesiastical Influence",
          points: [
            "Called the '**uncrowned pope**' for his influence on church affairs",
            "**Preached the Second Crusade** (1147) at the request of Pope Eugene III (a former monk of Clairvaux)",
            "Devastated when the crusade failed - saw it as divine judgment",
            "Intervened in **papal schism** (1130) to support Innocent II over Anacletus II",
            "Secured the condemnation of **Peter Abelard** at the Council of Sens (1140)",
            "Advised popes, kings, and bishops; his letters reveal his vast influence"
          ]
        },
        {
          title: "Writings and Theology",
          points: [
            "Wrote extensively: sermons, letters, theological treatises",
            "**'On Loving God'** - treatise on the degrees of love for God",
            "**'On Consideration'** - advice to Pope Eugene III on the papal office",
            "Criticized Abelard's **rationalistic approach** to theology",
            "Defended **monastic theology** based on Scripture, prayer, and contemplation",
            "His theology was experiential and devotional rather than speculative"
          ]
        },
        {
          title: "Legacy",
          points: [
            "**Canonized** in 1174; declared a **Doctor of the Church** (Doctor Mellifluus - 'Honey-sweet Doctor')",
            "His influence on medieval piety and monasticism was **immense**",
            "Both **Catholics and Protestants** have appreciated his Christ-centered spirituality",
            "His hymns remain popular across Christian traditions",
            "Exemplified the **monastic ideal** at its highest - prayer, work, influence for Christ"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "How did Cistercian monasticism differ from Cluniac monasticism?",
        type: "short",
        answer: "Cistercians emphasized strict observance of the Benedictine Rule, simplicity, poverty, and manual labor. They reacted against Cluniac prosperity and elaborate liturgy, building plain churches in remote valleys without decoration. Bernard embodied this austere spirituality.",
        explanation: "The Cistercians represented a reform of a reform - seeking to restore what they saw as Cluny's loss of primitive simplicity."
      },
      {
        question: "Why was Bernard called the 'uncrowned pope'?",
        type: "mc",
        options: ["A) He was nearly elected pope", "B) He had enormous influence over church affairs despite being a monk", "C) He rejected the papacy", "D) He wore papal vestments"],
        answer: "B) He had enormous influence over church affairs despite being a monk",
        explanation: "Though never holding high office, Bernard's preaching, letters, and interventions shaped papal elections, crusades, theological controversies, and ecclesiastical politics."
      },
      {
        question: "What work of Bernard's became a classic of mystical literature?",
        type: "mc",
        options: ["A) Summa Theologiae", "B) 86 Sermons on the Song of Songs", "C) The City of God", "D) Confessions"],
        answer: "B) 86 Sermons on the Song of Songs",
        explanation: "These sermons, delivered to his monks over many years, explore the soul's love relationship with God through allegorical interpretation of this biblical book."
      },
      {
        question: "What was Bernard's reaction when the Second Crusade he preached failed?",
        type: "short",
        answer: "Bernard was devastated and saw the crusade's failure as divine judgment on the sinfulness of the crusaders. He defended his preaching by arguing that God's ways were mysterious and the failure was due to human sin, not false prophecy.",
        explanation: "The Second Crusade's disaster was a personal crisis for Bernard, though it did not destroy his reputation."
      }
    ],
    keyTerms: [
      { term: "Cistercians", definition: "Monastic order founded 1098 emphasizing strict Benedictine Rule, simplicity, and manual labor; Bernard's order" },
      { term: "Clairvaux", definition: "'Clear Valley' - monastery founded by Bernard in 1115; he remained abbot for 38 years" },
      { term: "Doctor Mellifluus", definition: "'Honey-sweet Doctor' - Bernard's title as Doctor of the Church for his eloquent writing" },
      { term: "Conversi", definition: "Lay brothers who did much manual labor in Cistercian monasteries; not full choir monks" },
      { term: "Carta Caritatis", definition: "'Charter of Charity' - document governing relations between Cistercian monasteries" },
      { term: "On Loving God", definition: "Bernard's treatise on the degrees of love, describing the soul's progress toward perfect love of God" }
    ]
  },
  {
    id: 49,
    videoId: "-Arj7yiDjLg",
    title: "Duns Scotus",
    videoTitle: "Duns Scotus",
    duration: "~25 min",
    objective: "John Duns Scotus (c. 1266-1308) — the 'Subtle Doctor' — was a Franciscan theologian whose precise distinctions shaped late medieval and modern thought, including the doctrine of Mary's Immaculate Conception.",
    notes: {
      sections: [
        {
          title: "Scotus's Life",
          points: [
            "Born in Scotland; entered the Franciscan order",
            "Taught at Oxford, Paris, and Cologne",
            "Died young in Cologne in 1308",
            "Beatified in 1993 by John Paul II",
          ]
        },
        {
          title: "Univocity of Being",
          points: [
            "Against Aquinas, who held that 'being' is predicated of God and creatures **analogically**",
            "Scotus argued for a **univocal** concept of being: same meaning, different degree, for God and creatures",
            "Allows for clearer rational discourse about God",
            "Profoundly influenced later philosophy and theology",
          ]
        },
        {
          title: "Will, Love, and the Primacy of the Will",
          points: [
            "Emphasized the **will** over the intellect in both God and humans",
            "Love is the highest act; God acts freely, not by necessity",
            "Contributed to a stronger doctrine of divine and human freedom",
          ]
        },
        {
          title: "Immaculate Conception",
          points: [
            "Argued that Mary was preserved from original sin from the first moment of her conception",
            "Doctrine of **prevenient redemption**: Christ saves Mary by preventing rather than removing sin",
            "Long debated; finally defined as Catholic dogma by **Pius IX in 1854**",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "What is the doctrine of the univocity of being?",
        type: "short",
        answer: "The view that 'being' has the same fundamental meaning when said of God and of creatures — though God is infinite being and creatures are finite. It contrasts with Aquinas's analogical view, in which 'being' applies to God and creatures only analogously.",
        explanation: "Univocity gave Scotus a clearer logic for talk about God but later thinkers debated its theological cost."
      },
      {
        question: "Which doctrine did Scotus famously defend?",
        type: "mc",
        options: ["A) Predestination of all believers", "B) The Immaculate Conception of Mary", "C) Papal infallibility", "D) Universal salvation"],
        answer: "B) The Immaculate Conception of Mary",
        explanation: "His concept of prevenient redemption answered the standard objection that Mary, like all humans, needed Christ's saving work."
      },
      {
        question: "Why is Scotus called the 'Subtle Doctor'?",
        type: "short",
        answer: "Because of his extremely fine distinctions and the precision of his arguments. His writing is famously dense and technical, even among scholastics.",
        explanation: "His influence on later thought was profound, especially through what is sometimes called 'Scotism.'"
      },
    ],
    keyTerms: [
      { term: "Duns Scotus", definition: "Franciscan theologian (c. 1266-1308); 'Subtle Doctor'" },
      { term: "Univocity of Being", definition: "View that 'being' has the same basic meaning for God and creatures" },
      { term: "Primacy of the Will", definition: "Scotist emphasis on will over intellect" },
      { term: "Immaculate Conception", definition: "Doctrine that Mary was preserved from original sin from conception" },
      { term: "Prevenient Redemption", definition: "Scotus's idea that Christ saves Mary by preventing sin" },
      { term: "Subtle Doctor", definition: "Honorific title given to Scotus for his precise distinctions" },
    ]
  },
{
    id: 50,
    videoId: "xri0AMiAKIo",
    title: "Thomas Aquinas (part 1)",
    videoTitle: "Thomas Aquinas (part 1)",
    duration: "~35 min",
    objective: "This module examines the life of Thomas Aquinas and his project of synthesizing Christian faith with Aristotelian philosophy.",
    notes: {
      sections: [
        {
          title: "Life and Background",
          points: [
            "**Thomas Aquinas** (1225-1274) was born to a noble family at Roccasecca, Italy",
            "Family intended him for a prestigious career as abbot of Monte Cassino",
            "At the University of Naples, Thomas encountered **Aristotle** and the **Dominicans**",
            "Determined to join the Dominicans despite family opposition",
            "Family **kidnapped him** and held him for a year; he refused to change his mind",
            "Finally released; studied under **Albertus Magnus** at Paris and Cologne"
          ]
        },
        {
          title: "The Aristotelian Challenge",
          points: [
            "**Aristotle's complete works** became available in the 13th century through Arabic translations",
            "Aristotle offered a comprehensive **philosophical system** based on reason alone",
            "His ideas sometimes **contradicted Christian teaching** (eternal world, no personal immortality)",
            "Some wanted to **ban Aristotle**; others embraced him uncritically",
            "Thomas sought a **middle way**: use Aristotle but correct him where necessary"
          ]
        },
        {
          title: "Faith and Reason",
          points: [
            "Thomas distinguished **natural knowledge** (reason) from **revealed knowledge** (faith)",
            "Philosophy can demonstrate some truths: God's existence, basic morality",
            "Other truths require **revelation**: Trinity, Incarnation, salvation",
            "Faith and reason cannot ultimately contradict - both come from God",
            "When they seem to conflict, either reason has erred or we've misunderstood revelation",
            "**'Grace does not destroy nature but perfects it'**"
          ]
        },
        {
          title: "The Five Ways",
          points: [
            "Thomas offered **five arguments** for God's existence based on reason alone:",
            "**Motion**: everything moved is moved by another; there must be an Unmoved Mover",
            "**Causation**: every effect has a cause; there must be an Uncaused First Cause",
            "**Contingency**: contingent beings require a Necessary Being",
            "**Gradation**: degrees of perfection imply a maximum - the most perfect being",
            "**Teleology**: the order of nature implies an intelligent Designer",
            "These are not proofs for skeptics but demonstrations for believers of reason's compatibility with faith"
          ]
        },
        {
          title: "Theological Method",
          points: [
            "Thomas's method was thoroughly **scholastic**: question, objections, sed contra, response, replies",
            "Every article followed the same structure - highly systematic",
            "Drew on **Scripture, church fathers, philosophers** - especially Augustine and Aristotle",
            "Sought **synthesis**: integrating all knowledge into a coherent whole",
            "His goal was not originality but **ordered presentation** of received truth"
          ]
        },
        {
          title: "Major Works",
          points: [
            "**Summa Theologiae**: massive synthesis of Christian theology (unfinished)",
            "**Summa contra Gentiles**: apologetic work for use in missions to Muslims",
            "**Commentaries** on Aristotle, Scripture, and Peter Lombard's Sentences",
            "**Disputed Questions**: records of academic debates",
            "Wrote hymns for the Feast of Corpus Christi, including 'Pange Lingua'"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What was Thomas's approach to the challenge posed by Aristotle's philosophy?",
        type: "short",
        answer: "Thomas sought a middle way between banning Aristotle and accepting him uncritically. He used Aristotle's philosophy where it was compatible with Christianity but corrected it where necessary, showing that faith and reason could be synthesized without contradiction.",
        explanation: "This synthesis of Aristotle and Christianity became central to Catholic theology."
      },
      {
        question: "What is Thomas's famous principle about the relationship of grace and nature?",
        type: "mc",
        options: ["A) 'Grace destroys nature and replaces it'", "B) 'Grace does not destroy nature but perfects it'", "C) 'Nature and grace are separate realms'", "D) 'Nature has no need of grace'"],
        answer: "B) 'Grace does not destroy nature but perfects it'",
        explanation: "This principle means that divine grace builds on and elevates human nature rather than destroying or replacing it."
      },
      {
        question: "What are the Five Ways?",
        type: "short",
        answer: "The Five Ways are Thomas's five arguments for God's existence based on reason: from motion (Unmoved Mover), causation (First Cause), contingency (Necessary Being), gradation (Most Perfect Being), and teleology (Intelligent Designer).",
        explanation: "These arguments show that belief in God is rational, not contrary to reason."
      },
      {
        question: "What is the Summa Theologiae?",
        type: "mc",
        options: ["A) A devotional prayer book", "B) A massive systematic synthesis of Christian theology", "C) A commentary on Aristotle", "D) A collection of hymns"],
        answer: "B) A massive systematic synthesis of Christian theology",
        explanation: "The Summa Theologiae is Thomas's greatest work - a comprehensive presentation of Christian doctrine using scholastic method. He left it unfinished at his death."
      }
    ],
    keyTerms: [
      { term: "Summa Theologiae", definition: "Thomas's masterwork; systematic synthesis of Christian theology using scholastic method; left unfinished" },
      { term: "Five Ways", definition: "Thomas's five rational arguments for God's existence (motion, causation, contingency, gradation, teleology)" },
      { term: "Grace Perfects Nature", definition: "Thomas's principle that divine grace builds on and elevates human nature rather than destroying it" },
      { term: "Natural Theology", definition: "Knowledge of God attainable by reason alone, without revelation (e.g., God's existence)" },
      { term: "Albertus Magnus", definition: "Thomas's teacher; Dominican scholar who pioneered integration of Aristotle with Christian thought" },
      { term: "Scholastic Method", definition: "Academic method using question, objections, contrary authority, response, and replies to objections" }
    ]
  },
{
    id: 51,
    videoId: "fPpugLKHQ6s",
    title: "St. Thomas Aquinas (part 2)",
    videoTitle: "St. Thomas Aquinas (part 2)",
    duration: "~30 min",
    objective: "This module examines Thomas Aquinas's teachings on key theological topics and his lasting influence on Christian thought.",
    notes: {
      sections: [
        {
          title: "Doctrine of God",
          points: [
            "God is **Pure Act** (actus purus) - no unrealized potential; fully actualized being",
            "God's essence is his existence - in God alone, **essence and existence are identical**",
            "God is **simple** - not composed of parts; all attributes are identical in God",
            "We know God through **analogy**: our terms apply to God in a related but higher sense",
            "We can say what God is **not** (via negativa) more easily than what God is"
          ]
        },
        {
          title: "Christology and Salvation",
          points: [
            "Christ has **two complete natures** (divine and human) in one person - affirming Chalcedon",
            "The human nature lacks nothing - Christ had human will, intellect, emotions",
            "Salvation is **satisfaction**: Christ's death satisfies the debt of sin we owe to God",
            "Christ's merit is **infinite** because his person is divine",
            "Grace transforms the soul, enabling us to **merit eternal life** through good works"
          ]
        },
        {
          title: "Sacraments and Eucharist",
          points: [
            "Sacraments are **visible signs** that cause the grace they signify",
            "They work **ex opere operato** - by the rite performed, not the minister's holiness",
            "Developed the doctrine of **transubstantiation** using Aristotelian categories",
            "In the Eucharist, bread's **substance** becomes Christ's body; **accidents** (appearances) remain",
            "Wrote hymns for Corpus Christi feast: 'Pange Lingua', 'Tantum Ergo'"
          ]
        },
        {
          title: "Ethics and Natural Law",
          points: [
            "**Natural law**: moral principles knowable by reason, reflecting eternal law in God's mind",
            "Humans naturally know basic goods: life, knowledge, society, procreation",
            "The **cardinal virtues** (prudence, justice, fortitude, temperance) are natural",
            "**Theological virtues** (faith, hope, love) are infused by grace",
            "Eternal happiness (beatitude) is the **vision of God** - our ultimate end"
          ]
        },
        {
          title: "The Mystical Experience and Death",
          points: [
            "On December 6, 1273, Thomas had a **mystical experience** during Mass",
            "He stopped writing, saying: 'All I have written seems like **straw** compared to what has been revealed to me'",
            "The Summa Theologiae was left **unfinished**",
            "Thomas died on March 7, 1274, on his way to the Council of Lyon",
            "His last words reflected his life's work: 'I receive you, price of my soul's redemption'"
          ]
        },
        {
          title: "Legacy and Influence",
          points: [
            "Initially controversial - some teachings **condemned** at Paris and Oxford (1277)",
            "**Canonized in 1323**; declared Doctor of the Church",
            "Pope Leo XIII made Thomism the **official philosophy** of Catholic education (1879)",
            "The **Second Vatican Council** commended Thomas as model for theological study",
            "Protestants have also engaged Thomas - both critically and appreciatively",
            "Remains the **most influential medieval theologian** in Catholic tradition"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What does Thomas mean by saying God is 'Pure Act'?",
        type: "short",
        answer: "God has no unrealized potential - he is fully actualized being. In God, there is no gap between what he could be and what he is. This means God is unchanging, complete, and the source of all actuality in creatures.",
        explanation: "This Aristotelian concept expresses God's absolute perfection and fullness of being."
      },
      {
        question: "What is 'transubstantiation' in Thomas's eucharistic theology?",
        type: "mc",
        options: ["A) The bread becomes a symbol of Christ's body", "B) Christ's body joins with the bread", "C) The substance of bread becomes Christ's body while accidents remain", "D) The bread and wine are destroyed"],
        answer: "C) The substance of bread becomes Christ's body while accidents remain",
        explanation: "Using Aristotelian categories, Thomas explained that the underlying substance changes completely while the visible properties (accidents) of bread and wine remain."
      },
      {
        question: "What happened on December 6, 1273 that caused Thomas to stop writing?",
        type: "short",
        answer: "Thomas had a mystical experience during Mass after which he said 'All I have written seems like straw compared to what has been revealed to me.' He never wrote again, leaving the Summa Theologiae unfinished.",
        explanation: "This event suggests that mystical encounter with God transcends even the greatest theological achievement."
      },
      {
        question: "What is natural law according to Thomas?",
        type: "mc",
        options: ["A) Scientific laws of physics", "B) Moral principles knowable by reason, reflecting eternal law", "C) Rules made by governments", "D) Instinctive animal behavior"],
        answer: "B) Moral principles knowable by reason, reflecting eternal law",
        explanation: "Natural law is the rational creature's participation in God's eternal law - moral truths accessible to all humans through reason."
      }
    ],
    keyTerms: [
      { term: "Pure Act (Actus Purus)", definition: "God has no unrealized potential; fully actualized being; source of all actuality" },
      { term: "Transubstantiation", definition: "Doctrine that bread's substance becomes Christ's body while accidents (appearances) remain unchanged" },
      { term: "Natural Law", definition: "Moral principles knowable by reason, reflecting God's eternal law; basis of Thomas's ethics" },
      { term: "Beatific Vision", definition: "Direct vision of God's essence; the ultimate happiness for which humans are created" },
      { term: "Analogy", definition: "Way of speaking about God using terms that apply in a related but higher sense than to creatures" },
      { term: "Ex Opere Operato", definition: "'By the work performed' - sacraments confer grace by the rite itself, not the minister's holiness" }
    ]
  },
  {
    id: 52,
    videoId: "B6y-3tiwO5Y",
    title: "William of Ockham",
    videoTitle: "William of Ockham",
    duration: "~30 min",
    objective: "William of Ockham (c. 1287-1347) is the most famous late-medieval nominalist. His razor, his theology of divine freedom, and his political writings against papal absolutism reshape the philosophical landscape of the late Middle Ages.",
    notes: {
      sections: [
        {
          title: "Ockham's Life",
          points: [
            "English Franciscan; studied at Oxford",
            "Summoned to Avignon to answer charges of heresy",
            "Fled to the protection of Emperor Louis IV in Munich (1328)",
            "Spent his last years writing against papal claims",
          ]
        },
        {
          title: "Nominalism and the Razor",
          points: [
            "**Nominalism**: universal concepts are mental names, not real things in the world",
            "Reality consists of individual things, known by direct experience",
            "**Ockham's Razor**: do not multiply entities beyond necessity",
            "Simpler explanations are preferable when they fit the evidence",
          ]
        },
        {
          title: "Theology of Divine Freedom",
          points: [
            "**Potentia absoluta** vs. **potentia ordinata** — what God could do vs. what God has chosen to do",
            "God's commands make actions right or wrong; morality grounded in divine will",
            "Critics charged him with weakening the rational order of creation",
            "Influenced Luther's teacher Gabriel Biel, and so indirectly Luther himself",
          ]
        },
        {
          title: "Political Writings",
          points: [
            "Defended **Franciscan poverty** against papal opposition",
            "Argued the pope could err and could be resisted",
            "Helped articulate limits on papal power and the rights of secular rulers",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "State Ockham's Razor.",
        type: "short",
        answer: "Entities should not be multiplied beyond necessity — the simplest explanation that fits the evidence is to be preferred.",
        explanation: "It became a standard principle of philosophical and scientific economy."
      },
      {
        question: "What does nominalism deny?",
        type: "mc",
        options: ["A) That individual things exist", "B) That universal concepts correspond to real shared natures outside the mind", "C) That God exists", "D) That language is meaningful"],
        answer: "B) That universal concepts correspond to real shared natures outside the mind",
        explanation: "For Ockham, 'humanity' is a name we apply to a collection of similar individuals — not a real thing in itself."
      },
      {
        question: "How did Ockham's theology influence later Reformers?",
        type: "short",
        answer: "His stress on divine freedom and on Scripture as the test of all teaching shaped late medieval theology — including that of Luther's teacher Gabriel Biel. Luther absorbed and reacted against this tradition, especially its account of God's covenant with sinners.",
        explanation: "Ockham did not anticipate the Reformation but helped form the ground on which it grew."
      },
    ],
    keyTerms: [
      { term: "William of Ockham", definition: "English Franciscan philosopher (c. 1287-1347)" },
      { term: "Nominalism", definition: "View that universals are names; only individuals exist" },
      { term: "Ockham's Razor", definition: "Principle: do not multiply entities beyond necessity" },
      { term: "Potentia Absoluta", definition: "God's absolute power, what he could do" },
      { term: "Potentia Ordinata", definition: "God's ordained power, what he has chosen to do" },
      { term: "Divine Command", definition: "Ethical view grounding moral truth in God's will" },
    ]
  },
{
    id: 53,
    videoId: "DtSgqKp5lfE",
    title: "John Wycliffe",
    videoTitle: "John Wycliffe",
    duration: "~25 min",
    objective: "This module examines John Wycliffe, the English reformer whose radical critique of papal authority and church wealth foreshadowed the Protestant Reformation.",
    notes: {
      sections: [
        {
          title: "Life and Background",
          points: [
            "**John Wycliffe** (c. 1330-1384) was born in Yorkshire, England",
            "Studied and taught at **Oxford University** - one of England's leading theologians",
            "Became known for his **radical critiques** of papal authority and ecclesiastical wealth",
            "Served as a **diplomat** for King Edward III and later Richard II",
            "His criticisms were tolerated partly because they served the English crown's interests against Rome"
          ]
        },
        {
          title: "Critique of Papal Authority",
          points: [
            "Wycliffe argued that the pope had **no scriptural basis** for supreme authority",
            "The **Bible** should be the ultimate authority, not tradition or papal pronouncements",
            "Popes could be **judged by Scripture**; an ungodly pope loses his authority",
            "The church did not need **wealth** or **temporal power** to fulfill its mission",
            "These ideas were revolutionary and threatened both ecclesiastical and secular powers"
          ]
        },
        {
          title: "The Bible in English",
          points: [
            "Wycliffe championed the translation of the **Bible into English**",
            "Previously, Bibles were only in **Latin**, accessible only to clergy and scholars",
            "An **English Bible** would make Scripture available to **ordinary people**",
            "This threatened clerical monopoly on biblical interpretation",
            "The Wycliffite Bible was completed (likely by followers) - first complete English translation",
            "The church condemned English Bibles as heretical"
          ]
        },
        {
          title: "Eucharistic Theology",
          points: [
            "Wycliffe rejected the doctrine of **transubstantiation**",
            "He taught **remanence**: the bread remains bread even after consecration; Christ is present spiritually",
            "This was seen as radical - transubstantiation was defined doctrine since the Fourth Lateran Council",
            "Wycliffe's view challenged the priest's power to perform 'magic' at the altar",
            "This became one of the primary charges against him"
          ]
        },
        {
          title: "The Lollards",
          points: [
            "Wycliffe's followers were called **Lollards** (possibly from 'lollen' = to mumble)",
            "They preached in **English** rather than Latin",
            "Called for **voluntary poverty** and rejected clergy who held wealth and property",
            "Organized lay communities; some priests left official church to join them",
            "The movement spread rapidly among **common people** - craftsmen, merchants, peasants"
          ]
        },
        {
          title: "Persecution and Legacy",
          points: [
            "Wycliffe died in 1384; the church could not touch him",
            "The **Council of Constance** (1415) posthumously condemned him and ordered his **bones exhumed and burned**",
            "His ashes were **scattered in the River Swift** - symbolic rejection",
            "Lollardry was **persecuted** under Henry IV and subsequent monarchs",
            "Yet Lollard ideas **survived underground**, influencing later reformers like Jan Hus",
            "His vision of an **English Bible** was eventually realized under Henry VIII"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What was Wycliffe's fundamental challenge to papal authority?",
        type: "short",
        answer: "Wycliffe argued that the pope had no scriptural basis for supreme authority. The Bible, not papal pronouncements or tradition, should be the ultimate authority for Christians. Popes could be judged by Scripture, and an ungodly pope lost his authority.",
        explanation: "This challenged the entire foundation of late medieval papal claims."
      },
      {
        question: "Why was Wycliffe's championing of an English Bible revolutionary?",
        type: "mc",
        options: ["A) It was linguistically impossible", "B) It would make Scripture available to ordinary people, threatening clerical monopoly on interpretation", "C) The pope had forbidden all translations", "D) English was not yet a developed language"],
        answer: "B) It would make Scripture available to ordinary people, threatening clerical monopoly on interpretation",
        explanation: "An English Bible would democratize biblical knowledge, undermining the clergy's exclusive control."
      },
      {
        question: "What was Wycliffe's position on transubstantiation?",
        type: "mc",
        options: ["A) He fully supported it", "B) He believed the bread becomes Christ's body literally", "C) He taught remanence: bread remains bread; Christ is spiritually present", "D) He rejected all real presence"],
        answer: "C) He taught remanence: bread remains bread; Christ is spiritually present",
        explanation: "Wycliffe's remanence theory challenged the priest's supposed power to transform bread into flesh."
      },
      {
        question: "What happened to Wycliffe after his death?",
        type: "short",
        answer: "The Council of Constance posthumously condemned him in 1415. His bones were exhumed and burned, then scattered in the River Swift. Yet his ideas influenced Jan Hus and eventually contributed to the Protestant Reformation.",
        explanation: "Even in death, the church punished Wycliffe, but his legacy endured."
      }
    ],
    keyTerms: [
      { term: "Lollards", definition: "Wycliffe's followers who preached in English and called for voluntary poverty and biblical reform" },
      { term: "Remanence", definition: "Wycliffe's eucharistic theory: bread remains bread after consecration; Christ is spiritually present" },
      { term: "Wycliffite Bible", definition: "First complete English translation of the Bible, completed by Wycliffe's followers" },
      { term: "Sola Scriptura", definition: "Principle that Scripture alone is the ultimate authority; central to Wycliffe's thought and later Protestantism" },
      { term: "Clerical Wealth", definition: "Wycliffe's target: he argued the church did not need temporal property to fulfill its mission" },
      { term: "English Reformation", definition: "Later 16th-century religious change in England; Wycliffe's ideas about English Bibles influenced it" }
    ]
  },
{
    id: 54,
    videoId: "FUnyz9qFqPg",
    title: "Jan Hus: The Radical Reformer Who Faced the Fire",
    videoTitle: "Jan Hus: The Radical Reformer Who Faced the Fire",
    duration: "~30 min",
    objective: "This module examines Jan Hus, the Bohemian reformer inspired by Wycliffe, whose martyrdom sparked the Hussite movement and anticipated Protestant concerns.",
    notes: {
      sections: [
        {
          title: "Life and Influences",
          points: [
            "**Jan Hus** (c. 1372-1415) was born in Bohemia (modern Czech Republic)",
            "Studied at the **University of Prague**; became a prominent theologian and preacher",
            "Influenced by **John Wycliffe's** writings and ideas about scriptural authority",
            "Became popular preacher at the **Bethlehem Chapel** in Prague - preached in Czech, not Latin",
            "Served as **Rector of Prague University**; gained political influence with King Wenceslaus IV"
          ]
        },
        {
          title: "Religious Reforms",
          points: [
            "Called for the **laity to receive communion in both kinds** (bread and wine)",
            "Currently, laypeople received only bread; priests received both",
            "This inequality symbolized clerical privilege; Hus saw it as unscriptural",
            "Attacked **clerical corruption** and called for voluntary poverty",
            "Challenged the **sale of indulgences** - papal fundraising through forgiveness",
            "Defended **national language** in worship - preaching and worship in Czech"
          ]
        },
        {
          title: "Theological Positions",
          points: [
            "Like Wycliffe, Hus emphasized **Scripture as supreme authority**",
            "The **Pope could err**; ultimate authority lay in the Bible",
            "Church authority must be **exercised according to Christ's example** of humility and service",
            "Reject **papal claims** to temporal power",
            "The **true church** consists of the predestined elect, known only to God"
          ]
        },
        {
          title: "Political Entanglement",
          points: [
            "Czech nationalism and religious reform became intertwined",
            "Hus became a **symbol of Czech identity** against German dominance",
            "German clergy opposed him; Czech clergy supported him",
            "The **Pope and the Archbishop of Prague** condemned Hus",
            "King Wenceslaus was protective but politically weakened",
            "Powerful German princes and church leaders feared Hus's influence"
          ]
        },
        {
          title: "The Council of Constance and Trial",
          points: [
            "Hus was summoned to the **Council of Constance** (1414-1415) to defend his views",
            "Given a **safe conduct** by the Holy Roman Emperor Sigismund",
            "Despite the safe conduct, he was **arrested** and tried for heresy",
            "The council found him **guilty** of spreading Wycliffe's heresies",
            "Offered a chance to recant; Hus **refused to deny his convictions**",
            "Condemned to **death by burning** on July 6, 1415"
          ]
        },
        {
          title: "Legacy: The Hussite Movement",
          points: [
            "Hus's martyrdom sparked the **Hussite Wars** (1419-1434) - religious and political conflict",
            "Bohemian forces fought Catholic crusades sent by the pope",
            "Hussites were divided: **Utraquists** (moderate, accepting communion in both kinds) and **Taborites** (radical)",
            "The **Hussite churches** survived and influenced the later Reformation",
            "Hus's ideas spread through **Central Europe** and influenced Martin Luther",
            "He is revered in Czech national identity as a martyr for freedom and reform"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What did Hus mean by calling for 'communion in both kinds'?",
        type: "short",
        answer: "Hus demanded that laypeople receive both bread and wine in communion, as clergy did. At the time, laypeople received only bread while priests received both. Hus saw this inequality as unscriptural and as a symbol of unjust clerical privilege.",
        explanation: "This became a defining demand of the Hussite movement and represented the democratization of worship."
      },
      {
        question: "What languages did Hus champion in worship?",
        type: "mc",
        options: ["A) Only Latin", "B) Latin and Greek", "C) Czech and other national languages", "D) He had no preference"],
        answer: "C) Czech and other national languages",
        explanation: "Hus preached in Czech and advocated for worship in the people's native language, not just Latin."
      },
      {
        question: "What was violated when Hus was arrested at Constance?",
        type: "mc",
        options: ["A) His property rights", "B) The safe conduct given by Emperor Sigismund", "C) University regulations", "D) Nothing - his arrest was proper"],
        answer: "B) The safe conduct given by Emperor Sigismund",
        explanation: "Despite receiving a safe conduct from the emperor, Hus was arrested anyway - a serious breach of faith."
      },
      {
        question: "What divided the Hussite movement after Hus's death?",
        type: "short",
        answer: "The Hussite movement split into Utraquists (moderates who accepted communion in both kinds and sought accommodation with Rome) and Taborites (radicals who wanted more thorough reform and rejected Catholic claims). This division reflected different visions of how far reform should go.",
        explanation: "This pattern of radical vs. moderate reformers would repeat during the Protestant Reformation."
      }
    ],
    keyTerms: [
      { term: "Communion in Both Kinds", definition: "Hus's demand that laypeople receive both bread and wine in the Eucharist, not just bread" },
      { term: "Utraquists", definition: "Moderate Hussite faction accepting communion in both kinds; sought compromise with Rome" },
      { term: "Taborites", definition: "Radical Hussite faction demanding thorough reformation; rejected Catholic hierarchy" },
      { term: "Hussite Wars", definition: "1419-1434 religious wars in Bohemia between Hussite forces and papal crusaders" },
      { term: "Safe Conduct", definition: "Emperor Sigismund's promise of protection for Hus; violated when Hus was arrested at Constance" },
      { term: "National Language Worship", definition: "Hus's insistence on preaching and worship in Czech, not just Latin" }
    ]
  },
  {
    id: 55,
    videoId: "BDxtVGVeQQ8",
    title: "Did Jan Hus Predict Martin Luther's Reformation?",
    videoTitle: "Did Jan Hus Predict Martin Luther's Reformation?",
    duration: "~20 min",
    objective: "Tradition claims Jan Hus prophesied at his execution that a 'swan' would come who could not be silenced — and that Luther fulfilled the prophecy. This lecture examines the history, the legend, and the real lines of continuity between Hus and Luther.",
    notes: {
      sections: [
        {
          title: "The Legendary Prophecy",
          points: [
            "At his burning in 1415, Hus is said to have declared: 'Today you are roasting a goose (hus), but in a hundred years a swan will rise who will not be silenced'",
            "The earliest sources for the saying are decades later, mostly Lutheran",
            "Luther himself loved the story and embraced the image of the swan",
            "Modern historians treat the literal prophecy as legendary",
          ]
        },
        {
          title: "Real Continuities",
          points: [
            "Hus and Luther both emphasized Scripture as the supreme authority",
            "Both attacked clerical corruption, indulgences, and papal overreach",
            "Both insisted on preaching to the people in their own language",
            "Both communicated in both Latin and a vernacular (Czech / German)",
          ]
        },
        {
          title: "Real Differences",
          points: [
            "Hus held most Catholic sacramental theology unchanged",
            "Luther's doctrine of justification by faith alone is sharper than anything in Hus",
            "Luther's break with Rome and theology of the church went further",
          ]
        },
        {
          title: "How Luther Read Hus",
          points: [
            "At the Leipzig Debate (1519), Luther was forced to admit he agreed with several of Hus's positions",
            "He came to call himself a 'Hussite without knowing it'",
            "Posthumous Lutheran publication of Hus's works strengthened the link",
            "Reformation memory framed Hus as Luther's forerunner — partly history, partly hagiography",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "Did Jan Hus literally predict Martin Luther?",
        type: "short",
        answer: "Probably not. The famous goose-and-swan saying surfaces clearly only in Lutheran sources decades later. The real connection is theological and ecclesial, not a precise prophecy.",
        explanation: "Legend often grows around founders and forerunners alike."
      },
      {
        question: "Where did Luther publicly acknowledge agreement with Hus?",
        type: "mc",
        options: ["A) Diet of Worms", "B) Leipzig Debate (1519)", "C) Marburg Colloquy", "D) Augsburg Confession"],
        answer: "B) Leipzig Debate (1519)",
        explanation: "Pressed by Johann Eck, Luther conceded that several of Hus's condemned positions were in fact biblical."
      },
      {
        question: "Name one theological emphasis Hus and Luther shared.",
        type: "short",
        answer: "The supremacy of Scripture over church tradition; or vigorous opposition to indulgences and clerical corruption; or insistence on preaching in the people's language.",
        explanation: "Continuity is real even if the famous prophecy is legendary."
      },
    ],
    keyTerms: [
      { term: "Jan Hus", definition: "Czech reformer (c. 1372-1415); burned at Constance" },
      { term: "Goose and Swan", definition: "Legendary prophecy linking Hus to Luther" },
      { term: "Leipzig Debate (1519)", definition: "Disputation where Luther acknowledged Hussite agreement" },
      { term: "Sola Scriptura", definition: "Reformation principle of Scripture's supreme authority" },
      { term: "Vernacular Preaching", definition: "Preaching and worship in the people's language" },
      { term: "Hussites", definition: "Followers of Hus in Bohemia after his death" },
    ]
  },
{
    id: 56,
    videoId: "qScDrsV1Wtw",
    title: "Humanism",
    videoTitle: "Humanism",
    duration: "~25 min",
    objective: "This module examines Desiderius Erasmus, the great Christian humanist scholar whose biblical studies and criticism of church corruption influenced the Reformation.",
    notes: {
      sections: [
        {
          title: "Life and Education",
          points: [
            "**Desiderius Erasmus** (1466-1536) was born in Rotterdam, Netherlands",
            "Educated by the **Brethren of the Common Life**, a reform-minded religious community",
            "Became a **priest and monk**, though he preferred scholarly life to monastic routine",
            "Studied **classics** (Greek and Latin) - unusual for clergy of his time",
            "Traveled throughout **Europe**: France, Italy, England, Germany, Switzerland",
            "Became the foremost **Christian humanist** scholar of his age"
          ]
        },
        {
          title: "Textual Scholarship and Biblical Studies",
          points: [
            "Erasmus pioneered **critical biblical scholarship**",
            "Studied the **Greek New Testament** and compared it with the **Latin Vulgate**",
            "Found that the Vulgate contained **errors and additions** not in original Greek",
            "Published the **Novum Instrumentum** (1516): Greek New Testament with Latin translation",
            "This established the **textual basis** for biblical criticism",
            "Martin Luther used Erasmus's Greek NT for his German translation"
          ]
        },
        {
          title: "Critique of Church Corruption",
          points: [
            "Through satire and writing, Erasmus attacked **clerical ignorance and hypocrisy**",
            "His 'Praise of Folly' (Moriae Encomium) mocked **monastic excess and superstition**",
            "Criticized the **cult of saints** and **relic worship** as distortions of true piety",
            "Attacked the sale of **indulgences** as fraudulent",
            "Yet he was **witty and urbane** rather than strident - humor was his weapon",
            "He remained a **Catholic** and wanted reform within the church, not schism"
          ]
        },
        {
          title: "Vision of Christian Humanism",
          points: [
            "Erasmus called for **'philosophy of Christ'** - returning to Christ's simple teachings",
            "Christianity should be **ethical and spiritual**, not mechanical and superstitious",
            "Education in **Greek and Latin classics** alongside Scripture was essential",
            "The **laity** should read Scripture directly, not rely solely on clergy",
            "Church should be **reformed** through scholarship and moral persuasion",
            "He valued **reason alongside faith** - not opposed to each other"
          ]
        },
        {
          title: "The Printing Press and Influence",
          points: [
            "Erasmus's works were among the first widely **printed books**",
            "His **Greek New Testament** and other editions spread rapidly",
            "His writings reached an **unprecedented audience** - thousands of copies circulated",
            "He corresponded with rulers, bishops, and scholars across Europe",
            "His ideas about biblical criticism and church reform were **widely discussed**",
            "Yet he remained personally **independent**, taking few official positions"
          ]
        },
        {
          title: "Limitations and Silence on the Reformation",
          points: [
            "Erasmus wanted **gradual, internal reform**, not the rupture that came",
            "When **Martin Luther** emerged, Erasmus was initially cautious",
            "He published **'On Free Will'** (1524) opposing Luther's **total depravity doctrine**",
            "Luther attacked Erasmus in response - a painful conflict",
            "Erasmus lived into the Reformation but never fully embraced Protestant churches",
            "Remained a **Catholic** intellectual uncomfortable with both extremes",
            "His moderate humanist vision was overshadowed by the Reformation's intensity"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What was Erasmus's major contribution to biblical scholarship?",
        type: "short",
        answer: "Erasmus published the first printed edition of the Greek New Testament (Novum Instrumentum, 1516) with his own Latin translation. By comparing Greek texts with the Latin Vulgate, he discovered errors and additions in the Vulgate, establishing textual criticism as an essential tool for understanding Scripture.",
        explanation: "This work became foundational for all subsequent biblical scholarship and translation work."
      },
      {
        question: "What was Erasmus's 'Praise of Folly' satirizing?",
        type: "mc",
        options: ["A) Secular learning", "B) Political rulers", "C) Clerical ignorance, hypocrisy, and superstition", "D) Greek philosophy"],
        answer: "C) Clerical ignorance, hypocrisy, and superstition",
        explanation: "Through witty satire, Erasmus mocked monastic excess, relic worship, and the corruption he saw in the church."
      },
      {
        question: "What did Erasmus mean by the 'philosophy of Christ'?",
        type: "short",
        answer: "Erasmus called for returning to Christ's simple, ethical, and spiritual teachings rather than the mechanical, superstitious practices he saw in contemporary Christianity. Christianity should emphasize moral behavior and direct engagement with Scripture, not dependence on clergy and rituals.",
        explanation: "This vision anticipated Protestant concerns but with a humanist rather than theological focus."
      },
      {
        question: "Why did Erasmus and Luther come into conflict?",
        type: "mc",
        options: ["A) Erasmus opposed all church reform", "B) Luther rejected biblical scholarship", "C) Erasmus published 'On Free Will' opposing Luther's doctrine of total depravity", "D) They disagreed on Greek language"],
        answer: "C) Erasmus published 'On Free Will' opposing Luther's doctrine of total depravity",
        explanation: "Their dispute over human freedom and divine grace revealed fundamental theological differences despite shared initial concerns about church corruption."
      }
    ],
    keyTerms: [
      { term: "Christian Humanism", definition: "Movement combining Renaissance learning (classics) with Christian faith; Erasmus was its greatest figure" },
      { term: "Novum Instrumentum", definition: "Erasmus's 1516 edition of Greek New Testament with Latin translation; pioneered biblical textual criticism" },
      { term: "Textual Criticism", definition: "Method of comparing ancient manuscripts to establish accurate biblical text; Erasmus pioneered this approach" },
      { term: "Philosophy of Christ", definition: "Erasmus's vision of Christianity as ethical and spiritual, returning to Christ's simple teachings" },
      { term: "Praise of Folly", definition: "Erasmus's satirical work mocking clerical corruption, superstition, and hypocrisy" },
      { term: "Free Will", definition: "Theological doctrine Erasmus defended against Luther's claim that human will is bound by sin" }
    ]
  },
  {
    id: 57,
    videoId: "SCO0g8hoHuI",
    title: "The Creed Nobody Wrote (And Why It's Still Used Today)",
    videoTitle: "The Creed Nobody Wrote (And Why It's Still Used Today)",
    duration: "~25 min",
    objective: "The Athanasian Creed bears Athanasius's name but was not written by him. This lecture explores its origin, its uncompromising statements of Trinitarian and Christological orthodoxy, and why it has remained in Christian use for over a thousand years.",
    notes: {
      sections: [
        {
          title: "What Is the Athanasian Creed?",
          points: [
            "Also called the **Quicunque Vult** from its opening Latin words",
            "Roughly 40 verses summarizing Trinity and Christology with great precision",
            "Strong warnings: anyone who does not believe its content cannot be saved",
            "Distinct from the Apostles' Creed and the Nicene Creed",
          ]
        },
        {
          title: "Who Wrote It?",
          points: [
            "Almost certainly **not Athanasius** — he died in 373",
            "Originally written in **Latin**, not Greek",
            "Most likely composed in southern Gaul, c. 500",
            "Sometimes attributed to figures like Caesarius of Arles or Vincent of Lerins",
          ]
        },
        {
          title: "Content",
          points: [
            "Trinity: 'we worship one God in Trinity and the Trinity in Unity'",
            "Each Person is God, yet there are not three Gods",
            "Christ is fully God and fully man, one person in two natures",
            "Anchors orthodoxy against Arianism, modalism, Nestorianism, and monophysitism",
          ]
        },
        {
          title: "Liturgical Use and Legacy",
          points: [
            "Long used at Sunday Prime in the Western church",
            "Retained by many Protestant traditions (Lutheran, Anglican, Reformed) at the Reformation",
            "Featured in confessional documents like the Book of Concord",
            "Modern liturgies often use it only on Trinity Sunday, if at all",
            "Its anathemas are uncomfortable today but reflect the high stakes of Trinitarian truth",
          ]
        },
      ]
    },
    quiz: [
      {
        question: "Why is the Athanasian Creed called 'the creed nobody wrote'?",
        type: "short",
        answer: "Because the Athanasius traditionally credited with it almost certainly did not write it, and no single author can be securely identified. It seems to be a Latin compilation from c. 500 in Gaul.",
        explanation: "The attribution to Athanasius reflects the creed's robust anti-Arian theology."
      },
      {
        question: "Which is NOT a topic of the Athanasian Creed?",
        type: "mc",
        options: ["A) The Trinity", "B) The two natures of Christ", "C) The threefold office of Christ", "D) Final judgment"],
        answer: "C) The threefold office of Christ",
        explanation: "The 'threefold office' (prophet, priest, king) is a later Reformation-era category."
      },
      {
        question: "Why has this creed remained in Christian use?",
        type: "short",
        answer: "It states orthodox Trinitarian and Christological faith with unusual precision, summarizing the conclusions of Nicaea, Constantinople, Ephesus, and Chalcedon in a compact and memorable form. Many traditions value it as a doctrinal benchmark.",
        explanation: "It is dense, but exact — useful when precision matters."
      },
    ],
    keyTerms: [
      { term: "Athanasian Creed", definition: "Latin creed (c. 500) summarizing Trinity and Christology" },
      { term: "Quicunque Vult", definition: "'Whoever wishes [to be saved]'; opening of the Athanasian Creed" },
      { term: "Anathema", definition: "Formal condemnation of those rejecting a defined truth" },
      { term: "Trinity", definition: "One God in three coequal Persons: Father, Son, Spirit" },
      { term: "Two Natures", definition: "Christ as fully God and fully man in one person" },
      { term: "Book of Concord", definition: "Lutheran confessional collection that includes this creed" },
    ]
  }
]

function SpoilerAnswer({ answer, explanation }: { answer: string; explanation: string }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="mt-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setRevealed(!revealed)}
        className="text-xs"
      >
        {revealed ? "Hide Answer" : "Reveal Answer"}
      </Button>
      {revealed && (
        <div className="mt-2 p-3 bg-muted rounded-md border-l-4 border-primary">
          <p className="font-medium text-foreground">{answer}</p>
          <p className="text-sm text-muted-foreground mt-1 italic">{explanation}</p>
        </div>
      )}
    </div>
  )
}

function ModuleCard({ module }: { module: Module }) {
  return (
    <Card className="mb-8" id={`module-${module.id}`}>
      <CardHeader className="bg-muted/50">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="mb-2">Module {module.id}</Badge>
          <Badge variant="outline">{module.duration}</Badge>
        </div>
        <CardTitle className="text-xl flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          {module.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2">{module.objective}</p>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 aspect-video w-full overflow-hidden rounded-lg border bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${module.videoId}`}
            title={module.videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Tabs defaultValue="notes" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="notes" className="text-xs sm:text-sm">
              <FileText className="h-4 w-4 mr-1 hidden sm:inline" />
              Notes
            </TabsTrigger>
            <TabsTrigger value="quiz" className="text-xs sm:text-sm">
              <Brain className="h-4 w-4 mr-1 hidden sm:inline" />
              Quiz
            </TabsTrigger>
            <TabsTrigger value="terms" className="text-xs sm:text-sm">
              <Key className="h-4 w-4 mr-1 hidden sm:inline" />
              Terms
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notes" className="mt-4">
            <Accordion type="multiple" className="w-full">
              {module.notes.sections.map((section, idx) => (
                <AccordionItem key={idx} value={`section-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pl-4">
                      {section.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-sm text-muted-foreground list-disc"
                            dangerouslySetInnerHTML={{
                              __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                            }}
                        />
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="quiz" className="mt-4">
            <div className="space-y-6">
              {module.quiz.map((q, idx) => (
                <div key={idx} className="p-4 border rounded-lg">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="shrink-0">Q{idx + 1}</Badge>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{q.question}</p>
                      {q.options && (
                        <ul className="mt-2 space-y-1">
                          {q.options.map((opt, oIdx) => (
                            <li key={oIdx} className="text-sm text-muted-foreground pl-2">{opt}</li>
                          ))}
                        </ul>
                      )}
                      <SpoilerAnswer answer={q.answer} explanation={q.explanation} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="terms" className="mt-4">
            <div className="grid gap-3">
              {module.keyTerms.map((term, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 p-3 bg-muted/50 rounded-lg">
                  <span className="font-semibold text-primary shrink-0">{term.term}</span>
                  <span className="text-sm text-muted-foreground">{term.definition}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export function StudyGuide() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Early Church History</h1>
                <p className="text-sm text-muted-foreground">Comprehensive Study Guide - Ryan Reeves Lecture Series</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="mb-8 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-semibold text-lg mb-2">Playlist Overview</h2>
            <p className="text-sm text-muted-foreground mb-4">
              This study guide is aligned 1-to-1 with Ryan Reeves&apos; &quot;Early and Medieval Church History&quot; YouTube playlist.
              Each module corresponds to one video, in playlist order.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>{modules.length} Videos</Badge>
              <Badge variant="secondary">{modules.length} Modules</Badge>
              <Badge variant="outline">Early &amp; Medieval Church</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Youtube className="h-5 w-5 text-primary" />
              Jump to Module
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {modules.map((m) => (
                <a
                  key={m.id}
                  href={`#module-${m.id}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-primary shrink-0" />
                  <span className="truncate">{m.id}. {m.title}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Study Modules
          </h2>
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </section>
      </main>

      <footer className="border-t bg-card py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Study guide based on Ryan Reeves&apos; Early and Medieval Church History lecture series</p>
          <p className="mt-1">Gordon-Conwell Theological Seminary</p>
        </div>
      </footer>
    </div>
  )
}
