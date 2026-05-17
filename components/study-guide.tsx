"use client"

import { useState } from "react"
import { ChevronRight, BookOpen, FileText, Brain, Key, GraduationCap } from "lucide-react"
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
    title: "The Apostolic Fathers",
    videoTitle: "The Apostolic Fathers",
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
    title: "Early Christian Apologists",
    videoTitle: "Early Christian Apologists",
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
    title: "Gnosticism",
    videoTitle: "Gnosticism",
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
    title: "Introduction to Monasticism",
    videoTitle: "Introduction to Monasticism",
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
    title: "Roman Crisis of the Third Century",
    videoTitle: "Roman Crisis of the Third Century",
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
    title: "Diocletian and the Great Persecution",
    videoTitle: "Diocletian",
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
    title: "Constantine",
    videoTitle: "Constantine",
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
    title: "The Byzantine Empire",
    videoTitle: "The Byzantine Empire",
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
    title: "Creeds and Councils",
    videoTitle: "Creeds and Councils",
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
    id: 15,
    title: "Nicaea: The Arian Controversy",
    videoTitle: "Nicaea: The Arian Controversy",
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
    id: 16,
    title: "Athanasius",
    videoTitle: "Athanasius",
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
    id: 17,
    title: "The Cappadocian Fathers",
    videoTitle: "The Cappadocian Fathers",
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
    id: 18,
    title: "Ephesus and Chalcedon",
    videoTitle: "Ephesus and Chalcedon",
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
    id: 19,
    title: "Ambrose of Milan",
    videoTitle: "Ambrose",
    duration: "~25 min",
    objective: "This module examines Ambrose of Milan, the influential bishop who shaped Western Christianity through his preaching, hymns, defense of orthodoxy, and bold confrontations with emperors.",
    notes: {
      sections: [
        {
          title: "Background and Election",
          points: [
            "**Ambrose** (c. 340-397) was born into a Roman senatorial family in Trier",
            "Father was **Praetorian Prefect of Gaul** - one of the highest imperial offices",
            "Trained in **law and rhetoric**; became governor of Aemilia-Liguria based in Milan",
            "In 374, went to the cathedral to **keep peace** during a contentious episcopal election",
            "A voice (possibly a child's) cried 'Ambrose for bishop!' - the crowd took it up",
            "Though only a **catechumen** (unbaptized), he was baptized, ordained, and consecrated within a week"
          ]
        },
        {
          title: "Milan: The Imperial Capital",
          points: [
            "Milan was the **Western imperial capital** in the late fourth century, not Rome",
            "Ambrose thus had direct **access to emperors** and the imperial court",
            "This made the bishop of Milan extraordinarily influential in politics and church affairs",
            "Ambrose used this position to defend **Nicene orthodoxy** against Arianism",
            "His episcopate coincided with emperors **Valentinian I, Gratian, Valentinian II, and Theodosius I**"
          ]
        },
        {
          title: "Defense Against Arianism",
          points: [
            "**Empress Justina** (Valentinian II's mother) demanded churches for Arian worship",
            "Ambrose refused: '**The emperor is within the church, not above it**'",
            "Occupied the basilica with his congregation; troops surrounded but did not attack",
            "Wrote **hymns** to be sung during the siege - introducing congregational hymn-singing to the West",
            "Successfully resisted; **Nicene orthodoxy** prevailed in the Western church",
            "His hymns became foundational for Western **liturgical music**"
          ]
        },
        {
          title: "Confrontations with Emperors",
          points: [
            "Ambrose embodied the principle that **moral law binds even emperors**",
            "Refused Emperor **Theodosius I** communion after the Massacre of Thessalonica (390)",
            "Theodosius had ordered the massacre of 7,000 citizens in retaliation for a riot",
            "Ambrose required the emperor to do **public penance** before being restored",
            "Theodosius complied - a dramatic assertion of **church authority over state**",
            "Established precedent: the church has **moral authority** even over the highest powers"
          ]
        },
        {
          title: "Influence on Augustine",
          points: [
            "**Augustine** came to Milan as a rhetoric professor in 384, still not a Christian",
            "Augustine initially came to observe Ambrose's famous **oratorical skill**",
            "Ambrose's **allegorical interpretation** of the Old Testament resolved Augustine's intellectual objections",
            "Augustine was baptized by Ambrose at the **Easter Vigil of 387**",
            "Augustine later credited Ambrose as key to his conversion",
            "This connection links Ambrose to the most influential theologian in Western history"
          ]
        },
        {
          title: "Legacy and Contributions",
          points: [
            "One of the original four **Doctors of the Western Church** (with Augustine, Jerome, Gregory)",
            "Pioneer of Western **hymnody** - 'Ambrosian hymns' shaped church music for centuries",
            "Developed Western **Mariology** and defense of Mary's perpetual virginity",
            "Advocated strongly for **clerical celibacy**",
            "His **moral theology** influenced medieval ethics",
            "The **Ambrosian Rite** (liturgy of Milan) still exists as a distinct Western liturgical tradition"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "How did Ambrose become bishop of Milan despite not yet being baptized?",
        type: "short",
        answer: "While serving as governor, Ambrose went to the cathedral to keep peace during a contentious election. A voice cried 'Ambrose for bishop!' and the crowd took it up. Though only a catechumen, he was baptized, ordained, and consecrated within a week.",
        explanation: "This dramatic election reflected both Ambrose's administrative reputation and the congregation's desire for a unifying figure."
      },
      {
        question: "What principle did Ambrose assert when he refused to give churches to the Arian Empress Justina?",
        type: "mc",
        options: ["A) 'The church belongs to the highest bidder'", "B) 'The emperor is within the church, not above it'", "C) 'All churches belong to the state'", "D) 'Bishops outrank emperors in all matters'"],
        answer: "B) 'The emperor is within the church, not above it'",
        explanation: "Ambrose established that even emperors are subject to the church's spiritual authority and cannot command the church against its faith."
      },
      {
        question: "What did Ambrose require of Emperor Theodosius after the Massacre of Thessalonica?",
        type: "short",
        answer: "Ambrose refused Theodosius communion and required him to do public penance before being restored to fellowship. The emperor complied, dramatically demonstrating that moral law binds even emperors.",
        explanation: "This set a powerful precedent for church authority over the moral conduct of secular rulers."
      },
      {
        question: "How did Ambrose influence Augustine's conversion to Christianity?",
        type: "mc",
        options: ["A) He debated Augustine publicly and won", "B) His allegorical interpretation of Scripture resolved Augustine's intellectual objections", "C) He performed a miracle that Augustine witnessed", "D) He threatened Augustine with excommunication"],
        answer: "B) His allegorical interpretation of Scripture resolved Augustine's intellectual objections",
        explanation: "Augustine's Manichaean objections to the Old Testament were answered by Ambrose's spiritual/allegorical reading, opening him to embrace Christianity."
      }
    ],
    keyTerms: [
      { term: "Ambrosian Hymns", definition: "Hymns composed by Ambrose for congregational singing; foundational for Western church music" },
      { term: "Massacre of Thessalonica", definition: "390 AD killing of 7,000 citizens ordered by Theodosius; led to Ambrose requiring the emperor's public penance" },
      { term: "Doctors of the Church", definition: "Title for teachers of outstanding merit; Ambrose is one of the four original Western Doctors" },
      { term: "Ambrosian Rite", definition: "The distinctive liturgy of Milan, still practiced today as an alternative to the Roman Rite" },
      { term: "Catechumen", definition: "A person receiving instruction before baptism; Ambrose was elected bishop while still a catechumen" },
      { term: "Allegorical Interpretation", definition: "Reading Scripture for spiritual meanings beyond the literal; Ambrose's method influenced Augustine" }
    ]
  },
  {
    id: 20,
    title: "Jerome",
    videoTitle: "Jerome",
    duration: "~30 min",
    objective: "This module examines Jerome, the irascible scholar whose Latin Vulgate translation became the Bible of Western Christianity for over a millennium and whose biblical scholarship set standards for centuries.",
    notes: {
      sections: [
        {
          title: "Life and Education",
          points: [
            "**Jerome** (c. 347-420) was born in Stridon (modern Croatia/Slovenia border)",
            "Received excellent **classical education** in Rome; studied grammar and rhetoric",
            "Baptized in Rome as a young man; became committed to **ascetic life**",
            "Had a famous **dream** where Christ accused him: 'You are a Ciceronian, not a Christian'",
            "This dream turned him from classical literature to **Scripture study**",
            "Traveled extensively: Gaul, Antioch, the Syrian desert, Constantinople, Rome, Bethlehem"
          ]
        },
        {
          title: "Scholar of Scripture",
          points: [
            "Learned **Hebrew** from Jewish teachers - extremely rare for a Christian scholar",
            "Also mastered **Greek** along with his native Latin - a trilingual scholar",
            "Studied under **Gregory of Nazianzus** in Constantinople",
            "Served as secretary to **Pope Damasus I** in Rome (382-385)",
            "Damasus commissioned him to revise the **Latin Bible** translations",
            "After Damasus's death, controversies drove him to settle in **Bethlehem** (386)"
          ]
        },
        {
          title: "The Vulgate Translation",
          points: [
            "Jerome produced the **Vulgate** - Latin translation that became the Western church's Bible",
            "Revised the Gospels based on better **Greek manuscripts**",
            "For the Old Testament, controversially translated from the **Hebrew** rather than the Greek Septuagint",
            "Defended the 'Hebraica veritas' ('**Hebrew truth**') as the authentic Old Testament text",
            "Identified the **deuterocanonical books** (Apocrypha) as secondary, though he translated them",
            "The Vulgate remained the standard Western Bible until the **Reformation** (and beyond in Catholicism)"
          ]
        },
        {
          title: "Biblical Commentaries",
          points: [
            "Wrote commentaries on most books of the Bible - an enormous scholarly output",
            "Combined **literal/historical** and **allegorical/spiritual** interpretation",
            "Drew on **Origen's** scholarship while critiquing his controversial theology",
            "His commentaries remained standard reference works throughout the **Middle Ages**",
            "Also translated **Origen's homilies** and **Eusebius's Chronicle** into Latin"
          ]
        },
        {
          title: "The Bethlehem Community",
          points: [
            "Settled in **Bethlehem in 386** with wealthy Roman widow **Paula** and her daughter Eustochium",
            "Paula funded **monasteries** (one for men, three for women) and a hospice for pilgrims",
            "Jerome led the men's monastery and devoted himself to **scholarship**",
            "Established a **scriptorium** for copying and translating texts",
            "The community became a center for **biblical study and pilgrimage**",
            "Jerome remained there until his death in **420 AD**"
          ]
        },
        {
          title: "Controversies and Character",
          points: [
            "Jerome was **brilliant but irascible** - famous for savage attacks on opponents",
            "Quarreled with former friend **Rufinus** over Origen's orthodoxy",
            "Attacked **Jovinian** who questioned the superiority of virginity over marriage",
            "Controversially defended **asceticism and virginity** as the highest Christian calling",
            "His letters and polemics provide vivid pictures of **fourth-century church life**",
            "One of the four original **Doctors of the Western Church**"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "Why was Jerome's decision to translate the Old Testament from Hebrew controversial?",
        type: "short",
        answer: "The church had traditionally used the Greek Septuagint (LXX) as its Old Testament text. By translating from the Hebrew, Jerome departed from apostolic practice and the text quoted in the New Testament, though he argued the Hebrew was the authentic original.",
        explanation: "Augustine and others objected, but Jerome's 'Hebrew truth' approach eventually won acceptance in the West."
      },
      {
        question: "What is the 'Vulgate' and why is it significant?",
        type: "mc",
        options: ["A) A Greek philosophical treatise", "B) Jerome's Latin translation that became the Western church's standard Bible", "C) An early church council document", "D) A Gnostic gospel discovered in Egypt"],
        answer: "B) Jerome's Latin translation that became the Western church's standard Bible",
        explanation: "The Vulgate ('common' translation) was the standard Western Bible for over 1,000 years and remains the official Latin Bible of the Catholic Church."
      },
      {
        question: "What did Jerome's famous dream accuse him of being?",
        type: "mc",
        options: ["A) A heretic", "B) A Ciceronian, not a Christian", "C) An Arian sympathizer", "D) A false prophet"],
        answer: "B) A Ciceronian, not a Christian",
        explanation: "The dream warned Jerome that his devotion to classical literature (Cicero) was displacing Scripture, prompting his turn to biblical scholarship."
      },
      {
        question: "What was Jerome's position on the deuterocanonical books (Apocrypha)?",
        type: "short",
        answer: "Jerome considered them secondary to the Hebrew canon and not fully authoritative Scripture. He translated them but distinguished them from the books found in the Hebrew Bible, calling them useful for edification but not for doctrine.",
        explanation: "This distinction later influenced Protestant rejection of these books as canonical."
      }
    ],
    keyTerms: [
      { term: "Vulgate", definition: "Jerome's Latin translation of the Bible; the standard Western text for over 1,000 years" },
      { term: "Hebraica Veritas", definition: "'Hebrew truth' - Jerome's principle that the Hebrew text is the authentic Old Testament" },
      { term: "Septuagint (LXX)", definition: "Greek translation of the Old Testament; Jerome controversially bypassed it for the Hebrew" },
      { term: "Deuterocanonical Books", definition: "Books in the Septuagint but not Hebrew canon (Tobit, Judith, Maccabees, etc.); Jerome considered them secondary" },
      { term: "Scriptorium", definition: "A room for copying manuscripts; Jerome established one in Bethlehem" },
      { term: "Doctors of the Church", definition: "Teachers of outstanding merit; Jerome is one of the four original Western Doctors" }
    ]
  },
  {
    id: 21,
    title: "Augustine: Life and Conversion",
    videoTitle: "Augustine",
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
    id: 22,
    title: "Augustine's Controversies",
    videoTitle: "Augustine's Controversies",
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
    id: 23,
    title: "Augustine's City of God",
    videoTitle: "Augustine's City of God",
    duration: "~30 min",
    objective: "This module examines Augustine's magnum opus, 'The City of God,' written in response to Rome's fall and developing a Christian philosophy of history and the relationship between church and state.",
    notes: {
      sections: [
        {
          title: "The Occasion: Rome's Fall (410 AD)",
          points: [
            "In **410 AD**, the Visigoth king **Alaric** sacked Rome for the first time in 800 years",
            "Pagans blamed Christianity: abandoning the old gods brought Rome's fall",
            "Refugees flooded North Africa, including to Hippo, bringing this accusation",
            "Augustine began **'The City of God'** (413-426) as a response - his longest and most ambitious work",
            "The work grew from defense against pagans to a complete **Christian philosophy of history**"
          ]
        },
        {
          title: "Structure of the Work",
          points: [
            "**22 books** written over 13 years - massive in scope",
            "Books 1-10: **Refutation of paganism** - Rome's gods never protected her",
            "Books 11-22: **Exposition of the two cities** - City of God vs. City of Man",
            "Augustine reframes the question: Rome's fate is not the real issue",
            "The real story of history is the conflict between **two spiritual communities**"
          ]
        },
        {
          title: "The Two Cities",
          points: [
            "**City of God** (civitas Dei): community of those who love God supremely",
            "**City of Man** (civitas terrena): community of those who love self supremely",
            "Two loves: '**Self-love to the contempt of God**' vs. '**Love of God to the contempt of self**'",
            "The cities are **intermingled** in this world; only God knows who belongs to which",
            "All earthly states are 'cities of man' - including Christian Rome",
            "The City of God **transcends** all earthly political arrangements"
          ]
        },
        {
          title: "Augustine's View of History",
          points: [
            "History is **linear**, moving toward God's purposes (against cyclical pagan views)",
            "Divided into **six ages** corresponding to the six days of creation, plus eternal rest",
            "We live in the **sixth age** - from Christ's first coming to his return",
            "History is **providential** - God governs all events for his purposes",
            "Earthly empires rise and fall by God's permission; none is ultimate",
            "The meaning of history is found in **salvation history**, not political history"
          ]
        },
        {
          title: "Church and State",
          points: [
            "The church is **not identical** with the City of God (the church contains both cities)",
            "The state is part of God's providence but not sacred or ultimate",
            "Christians can serve in government and military but with **limited expectations**",
            "The state can provide **peace and order** - 'peace of Babylon' is still peace",
            "But the state cannot save souls or build the heavenly city",
            "Augustine **desacralizes** political power while allowing cooperation"
          ]
        },
        {
          title: "Lasting Influence",
          points: [
            "Shaped **medieval political theory** - the two swords, church and state",
            "Influenced views on **just war** - criteria for legitimate warfare",
            "Provided framework for understanding the **fall of civilizations**",
            "Both **Catholics and Protestants** have claimed Augustine's political legacy",
            "The **Reformers** emphasized the distinction between the two kingdoms",
            "Remains foundational for **Christian political thought** today"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What prompted Augustine to write 'The City of God'?",
        type: "mc",
        options: ["A) The Council of Nicaea", "B) The Visigothic sack of Rome in 410 AD", "C) The Pelagian controversy", "D) Constantine's conversion"],
        answer: "B) The Visigothic sack of Rome in 410 AD",
        explanation: "Pagans blamed Christianity for Rome's unprecedented fall, and Augustine wrote to refute this accusation and offer a Christian interpretation of history."
      },
      {
        question: "What distinguishes the City of God from the City of Man according to Augustine?",
        type: "short",
        answer: "The two cities are distinguished by their loves: the City of God is the community of those who love God supremely, even to the contempt of self. The City of Man is the community of those who love self supremely, even to the contempt of God.",
        explanation: "This is fundamentally a spiritual/moral distinction, not a political one."
      },
      {
        question: "Is the visible church identical with the City of God for Augustine?",
        type: "mc",
        options: ["A) Yes, completely identical", "B) No, the church contains members of both cities", "C) Only the Roman church is the City of God", "D) The City of God is identical with the Roman Empire"],
        answer: "B) No, the church contains members of both cities",
        explanation: "Augustine taught that the visible church is a 'mixed body' containing both wheat and tares; only God knows the true citizens of the heavenly city."
      },
      {
        question: "How does Augustine's view of history differ from pagan cyclical views?",
        type: "short",
        answer: "Augustine taught that history is linear and purposeful, moving toward God's purposes and Christ's return. Pagan views saw history as cyclical repetition without ultimate meaning. For Augustine, history has a beginning (creation), a center (Christ), and an end (final judgment).",
        explanation: "This linear, providential view became foundational to Western historical consciousness."
      }
    ],
    keyTerms: [
      { term: "City of God (Civitas Dei)", definition: "The spiritual community of those who love God supremely; pilgrims in this world awaiting the heavenly city" },
      { term: "City of Man (Civitas Terrena)", definition: "The earthly city; community of those who love self supremely; all purely political arrangements" },
      { term: "Two Loves", definition: "Augustine's distinction: love of God to contempt of self vs. love of self to contempt of God" },
      { term: "Linear History", definition: "Augustine's view that history moves purposefully toward God's goals, against cyclical pagan views" },
      { term: "Six Ages", definition: "Augustine's division of history into six ages from creation to Christ's return, followed by eternal rest" },
      { term: "Peace of Babylon", definition: "The imperfect but valuable peace earthly states can provide; Christians may benefit from it without idolizing it" }
    ]
  },
  {
    id: 24,
    title: "Leo the Great",
    videoTitle: "Leo the Great",
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
    id: 25,
    title: "Gregory the Great",
    videoTitle: "Gregory the Great",
    duration: "~30 min",
    objective: "This module examines Pope Gregory I (the Great), the last of the original four Latin Doctors, who shaped medieval Christianity through his pastoral theology, missions, liturgy, and practical administration.",
    notes: {
      sections: [
        {
          title: "From Roman Aristocrat to Monk to Pope",
          points: [
            "**Gregory I** (c. 540-604) was born into a wealthy Roman senatorial family",
            "Served as **Prefect of Rome** (573) - the highest civil office in the city",
            "After his father's death, converted his family estate into a **monastery** and became a monk",
            "Reluctantly served as papal **ambassador (apocrisiarius)** to Constantinople (579-585)",
            "Elected **Pope in 590** during plague, famine, and Lombard invasions - he resisted but accepted",
            "One of only two popes called 'the Great' (with Leo I)"
          ]
        },
        {
          title: "Pastor and Administrator",
          points: [
            "Wrote **'Pastoral Care'** (Regula Pastoralis) - the handbook for bishops throughout the Middle Ages",
            "Described the bishop as a '**physician of souls**' who must adapt to each person's condition",
            "Emphasized that clergy must **teach by example** as well as words",
            "Administered **papal estates** (Patrimony of Peter) efficiently to feed Rome's poor",
            "Negotiated with the **Lombards** when the imperial government failed to defend Italy",
            "Effective administrator who used limited resources to maximum effect"
          ]
        },
        {
          title: "Mission to the Anglo-Saxons",
          points: [
            "Sent the monk **Augustine (of Canterbury)** with 40 monks to convert England (596)",
            "Famous story: saw English slaves in Rome, said they were '**not Angles but angels**'",
            "Augustine became first **Archbishop of Canterbury** (597)",
            "Gregory advised **gradual conversion** - adapt pagan customs to Christian purposes",
            "Recommended converting temples to churches rather than destroying them",
            "The English mission was extraordinarily successful and shaped English Christianity"
          ]
        },
        {
          title: "Liturgy and Music",
          points: [
            "Reformed the **Roman liturgy**; standardized prayers and practices",
            "Associated with **Gregorian Chant** - though the connection is debated by scholars",
            "The chant tradition named after him became the foundation of Western sacred music",
            "Promoted the **liturgical calendar** and observance of saints' days",
            "His liturgical reforms spread throughout Western Europe over subsequent centuries"
          ]
        },
        {
          title: "Theology and Writings",
          points: [
            "Wrote **'Moralia in Job'** - massive allegorical commentary used throughout the Middle Ages",
            "His **'Dialogues'** contain lives of Italian saints, including Benedict of Nursia",
            "Promoted veneration of **relics and saints** as intercessors",
            "Developed the doctrine of **purgatory** more than any predecessor",
            "His theology was **practical and pastoral** rather than speculative",
            "Transmitted Augustinian theology in accessible, moralistic form"
          ]
        },
        {
          title: "Legacy: 'The Last of the Romans'",
          points: [
            "Called himself '**Servant of the Servants of God**' (servus servorum Dei) - still a papal title",
            "Sometimes called the '**last of the Romans, first of the medievals**'",
            "Stood at the transition between **ancient and medieval** worlds",
            "The original four **Doctors of the Western Church**: Ambrose, Jerome, Augustine, Gregory",
            "His practical, pastoral approach shaped the medieval church more than theoretical theologians",
            "The papacy he strengthened would dominate medieval Europe"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What was Gregory's most influential book for training bishops in the Middle Ages?",
        type: "mc",
        options: ["A) The City of God", "B) Pastoral Care (Regula Pastoralis)", "C) Confessions", "D) On the Incarnation"],
        answer: "B) Pastoral Care (Regula Pastoralis)",
        explanation: "Gregory's Pastoral Care became the standard handbook for bishops throughout the medieval period, emphasizing practical wisdom and adaptation to each person's needs."
      },
      {
        question: "What mission did Gregory send that shaped English Christianity?",
        type: "short",
        answer: "Gregory sent Augustine (of Canterbury) and 40 monks to convert the Anglo-Saxons of England in 596 AD. Augustine became the first Archbishop of Canterbury in 597, and the mission successfully Christianized England.",
        explanation: "Gregory's practical advice for gradual conversion and adaptation of pagan customs was key to the mission's success."
      },
      {
        question: "What papal title did Gregory create that is still used today?",
        type: "mc",
        options: ["A) Vicar of Christ", "B) Supreme Pontiff", "C) Servant of the Servants of God", "D) Bishop of Rome"],
        answer: "C) Servant of the Servants of God",
        explanation: "Gregory's humble self-designation 'servus servorum Dei' reflected his monastic spirituality and remains an official papal title."
      },
      {
        question: "Why is Gregory sometimes called 'the last of the Romans, first of the medievals'?",
        type: "short",
        answer: "Gregory lived at the transition between the ancient Roman world and the medieval period. He came from the Roman senatorial class and held Roman offices, but his papacy faced the new realities of barbarian kingdoms, and his practical, pastoral approach shaped medieval Christianity more than ancient theology.",
        explanation: "He bridged two worlds, preserving classical heritage while adapting to new circumstances."
      }
    ],
    keyTerms: [
      { term: "Pastoral Care", definition: "Gregory's handbook for bishops on the cure of souls; standard medieval text for clergy" },
      { term: "Servus Servorum Dei", definition: "'Servant of the Servants of God' - Gregory's humble papal title, still used" },
      { term: "Augustine of Canterbury", definition: "Monk sent by Gregory to convert England; first Archbishop of Canterbury (597)" },
      { term: "Gregorian Chant", definition: "Medieval plainsong tradition associated with Gregory, foundational for Western sacred music" },
      { term: "Dialogues", definition: "Gregory's work containing lives of Italian saints, including the only early source for Benedict of Nursia" },
      { term: "Doctors of the Church (Western)", definition: "The four original Latin Doctors: Ambrose, Jerome, Augustine, and Gregory the Great" }
    ]
  },
  {
    id: 26,
    title: "Boniface and the Christianization of Germany",
    videoTitle: "Boniface",
    duration: "~25 min",
    objective: "This module examines Boniface, the 'Apostle to the Germans,' whose missionary work and organizational reforms established Christianity in central Europe and linked the Germanic churches to Rome.",
    notes: {
      sections: [
        {
          title: "Background and Call",
          points: [
            "**Boniface** (c. 675-754) was born Wynfrith in Wessex, England",
            "Educated in Benedictine monasteries; became a respected **monk and scholar**",
            "At about age 40, left a promising career to become a **missionary** to the pagan Germans",
            "First mission (716) to Frisia failed due to warfare; returned to England",
            "Second mission (718) succeeded with **papal authorization** from Gregory II"
          ]
        },
        {
          title: "Mission to Germany",
          points: [
            "Worked in **Hesse, Thuringia, and Bavaria** - areas with nominal or no Christianity",
            "Famous incident: felled the sacred **Oak of Thor** at Geismar to demonstrate Christ's power over pagan gods",
            "When Thor did not strike him dead, many pagans converted",
            "Used the wood to build a **chapel dedicated to St. Peter**",
            "Combined **preaching, baptizing, and organizing** churches and monasteries"
          ]
        },
        {
          title: "Church Organization",
          points: [
            "Created **diocesan structure** for the German church - bishoprics with defined territories",
            "Founded or reformed major monasteries: **Fulda** became the most important",
            "Established **schools** attached to monasteries and cathedrals",
            "Reformed existing Frankish church, which had become **secularized and corrupt**",
            "Held reforming **councils** (742-747) to impose discipline on clergy",
            "Insisted on **clerical celibacy, orthodox doctrine, and moral standards**"
          ]
        },
        {
          title: "Alliance with Rome",
          points: [
            "Boniface worked closely with **three successive popes**: Gregory II, Gregory III, Zacharias",
            "Took an **oath of loyalty to Rome** - strengthening papal authority north of the Alps",
            "Received the **pallium** (symbol of metropolitan authority) from the pope",
            "His missions were **officially sanctioned** by Rome, not independent ventures",
            "This papal connection became the model for **medieval church-state relations**"
          ]
        },
        {
          title: "Alliance with the Franks",
          points: [
            "Gained support from Frankish rulers **Charles Martel** and **Pippin III**",
            "The alliance benefited both: Boniface got **military protection**, Franks got **legitimacy**",
            "Boniface may have **anointed Pippin III** as king (751), establishing a precedent",
            "This alliance foreshadowed the **Carolingian-papal partnership** under Charlemagne",
            "The German church became linked to both **Rome and the Frankish state**"
          ]
        },
        {
          title: "Martyrdom and Legacy",
          points: [
            "At nearly 80, Boniface returned to **Frisia** for one last mission",
            "In **754 AD**, he and 52 companions were **martyred** by pagan raiders at Dokkum",
            "Reportedly held up his Gospel book to block a sword blow",
            "Buried at **Fulda**, which became a major pilgrimage site",
            "Called the '**Apostle to the Germans**' - his work Christianized central Europe",
            "His model of **papal-authorized, organized mission** became standard"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What famous act demonstrated Boniface's confidence in Christ's power over pagan gods?",
        type: "mc",
        options: ["A) Healing a paralyzed man", "B) Felling the sacred Oak of Thor at Geismar", "C) Walking on water", "D) Surviving execution by fire"],
        answer: "B) Felling the sacred Oak of Thor at Geismar",
        explanation: "When Thor did not strike Boniface dead for cutting down his sacred tree, many pagans converted, and Boniface used the wood to build a chapel."
      },
      {
        question: "How did Boniface's mission differ from earlier independent missionary efforts?",
        type: "short",
        answer: "Boniface worked with official papal authorization, took an oath of loyalty to Rome, and received the pallium as metropolitan authority. His missions were sanctioned and organized by Rome, not independent ventures, establishing a model of papal-directed mission.",
        explanation: "This papal connection strengthened Rome's authority north of the Alps and became the standard model."
      },
      {
        question: "What important monastery did Boniface found that became a major center of learning?",
        type: "mc",
        options: ["A) Cluny", "B) Monte Cassino", "C) Fulda", "D) Canterbury"],
        answer: "C) Fulda",
        explanation: "Fulda became one of the most important monasteries in medieval Germany, a center of learning and pilgrimage to Boniface's tomb."
      },
      {
        question: "How did Boniface's alliance with the Frankish rulers benefit both parties?",
        type: "short",
        answer: "Boniface received military protection and political support for his missions, while the Frankish rulers gained religious legitimacy and an organized church that helped unify their realm. This partnership foreshadowed the Carolingian-papal alliance.",
        explanation: "The mutual benefits made this a model for medieval church-state relations."
      }
    ],
    keyTerms: [
      { term: "Apostle to the Germans", definition: "Title for Boniface recognizing his role in Christianizing central Europe" },
      { term: "Oak of Thor", definition: "Sacred pagan tree Boniface felled to demonstrate Christ's power; used the wood for a chapel" },
      { term: "Pallium", definition: "Woolen vestment symbolizing metropolitan authority; granted by the pope to archbishops" },
      { term: "Fulda", definition: "Monastery founded by Boniface that became a major center of learning and pilgrimage" },
      { term: "Diocesan Structure", definition: "Organization of the church into territorial districts (dioceses) under bishops" }
    ]
  },
  {
    id: 27,
    title: "Charlemagne and the Carolingian Renaissance",
    videoTitle: "Charlemagne",
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
    id: 28,
    title: "The Vikings and Christianity",
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
    id: 29,
    title: "The Cluny Reform",
    videoTitle: "Cluny Reform",
    duration: "~25 min",
    objective: "This module examines the monastic reform movement centered at Cluny, which revitalized Western monasticism and influenced the broader reform of the medieval church.",
    notes: {
      sections: [
        {
          title: "The Crisis in Monasticism",
          points: [
            "By the 9th-10th centuries, Western monasticism was in **serious decline**",
            "Viking, Magyar, and Saracen raids had **destroyed many monasteries**",
            "Lay lords controlled monasteries, appointing abbots and seizing revenues - **lay abbacy**",
            "Monks often **ignored the Rule** - living comfortably, abandoning prayer schedules",
            "Simony (buying church offices) and clerical marriage/concubinage were widespread",
            "Reformers sought to restore **strict observance** of the Benedictine Rule"
          ]
        },
        {
          title: "The Foundation of Cluny (910)",
          points: [
            "**Duke William of Aquitaine** founded Cluny in Burgundy (910 AD)",
            "Unique charter: Cluny was placed under **direct papal protection**, free from local lords and bishops",
            "No lay lord or bishop could interfere with the monastery's **internal affairs**",
            "William renounced all control - 'neither I nor my heirs shall have any authority over it'",
            "This independence became the **key to Cluny's success** and reform efforts"
          ]
        },
        {
          title: "Cluniac Monasticism",
          points: [
            "Cluny emphasized the **Opus Dei** (Work of God) - elaborate liturgical prayer",
            "Services became longer and more **magnificent** than in standard Benedictine houses",
            "Less emphasis on manual labor; more on **prayer, scholarship, and charity**",
            "Beautiful churches, vestments, and art reflected the **glory of worship**",
            "Strict discipline maintained but adapted to emphasize prayer over labor"
          ]
        },
        {
          title: "The Cluniac System",
          points: [
            "Daughter houses were **dependent on Cluny**, not independent abbeys",
            "All Cluniac houses owed obedience to the **Abbot of Cluny**",
            "By c. 1100, over **1,000 monasteries** were under Cluniac direction",
            "This created an **international network** of reformed monasteries",
            "Successive great abbots led Cluny: **Odo, Majolus, Odilo, Hugh**",
            "Their long tenures (Odilo: 54 years; Hugh: 60 years) provided stability"
          ]
        },
        {
          title: "Influence on Church Reform",
          points: [
            "Cluniacs became **advisors to popes and kings**",
            "Several popes were former Cluniac monks, including **Gregory VII** (disputed)",
            "Cluny promoted **Peace of God** and **Truce of God** movements limiting warfare",
            "Influenced the broader **Gregorian Reform** of the 11th-century church",
            "Opposed simony, lay investiture, and clerical marriage",
            "Demonstrated that **reform was possible** through disciplined communities"
          ]
        },
        {
          title: "The Great Abbey Church",
          points: [
            "Cluny III, built under Abbot Hugh, was the **largest church in Christendom** until St. Peter's",
            "Represented the wealth and prestige Cluny had achieved",
            "Demonstrated **Romanesque architecture** at its grandest",
            "Critics complained Cluny had become too **wealthy and worldly**",
            "New reform movements (Cistercians) arose partly in reaction to Cluniac prosperity",
            "Most of Cluny III was **destroyed after the French Revolution**"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What made Cluny's founding charter unique and crucial to its reform success?",
        type: "short",
        answer: "Cluny was placed under direct papal protection, free from control by local lords and bishops. Duke William renounced all authority over it. This independence allowed Cluny to maintain strict discipline and resist secular interference that had corrupted other monasteries.",
        explanation: "Freedom from lay control was the key to Cluny's ability to reform and maintain standards."
      },
      {
        question: "How did the Cluniac system differ from traditional independent Benedictine abbeys?",
        type: "mc",
        options: ["A) Cluniacs rejected the Benedictine Rule entirely", "B) Daughter houses remained dependent on and obedient to the Abbot of Cluny", "C) Each Cluniac house elected its own independent abbot", "D) Cluniacs did not practice liturgical prayer"],
        answer: "B) Daughter houses remained dependent on and obedient to the Abbot of Cluny",
        explanation: "This created an international network of over 1,000 monasteries all under Cluny's direction, unlike the autonomous independence of traditional Benedictine houses."
      },
      {
        question: "What was the 'Opus Dei' emphasized at Cluny?",
        type: "mc",
        options: ["A) Manual agricultural labor", "B) Elaborate liturgical prayer and worship", "C) Academic scholarship only", "D) Military service for the church"],
        answer: "B) Elaborate liturgical prayer and worship",
        explanation: "Cluniac monasticism emphasized magnificent, extended liturgical services as the primary 'Work of God,' with less emphasis on manual labor than traditional Benedictine practice."
      },
      {
        question: "How did Cluny influence the broader reform of the medieval church?",
        type: "short",
        answer: "Cluniac monks became advisors to popes and kings; several popes had Cluniac backgrounds. Cluny promoted the Peace of God and Truce of God movements, influenced the Gregorian Reform, and opposed simony, lay investiture, and clerical marriage.",
        explanation: "Cluny demonstrated that disciplined reform was achievable and provided personnel for wider church reform."
      }
    ],
    keyTerms: [
      { term: "Cluny", definition: "Reform monastery founded in 910 AD; center of monastic and church reform for two centuries" },
      { term: "Lay Abbacy", definition: "Practice of lay lords appointing abbots and controlling monasteries; a chief abuse Cluny opposed" },
      { term: "Opus Dei", definition: "'Work of God' - the liturgical prayer that was Cluny's primary focus" },
      { term: "Peace of God", definition: "Movement protecting non-combatants (clergy, peasants) from warfare; promoted by Cluny" },
      { term: "Truce of God", definition: "Movement prohibiting warfare on certain days (Sundays, holy days); promoted by Cluny" },
      { term: "Romanesque", definition: "Architectural style of the 10th-12th centuries characterized by round arches and massive walls; Cluny III exemplified it" }
    ]
  },
  {
    id: 30,
    title: "The East-West Schism of 1054",
    videoTitle: "The East-West Schism",
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
    id: 31,
    title: "The Investiture Controversy",
    videoTitle: "The Investiture Controversy",
    duration: "~30 min",
    objective: "This module examines the dramatic conflict between Pope Gregory VII and Emperor Henry IV over who controlled appointments to church offices - a struggle that reshaped medieval church-state relations.",
    notes: {
      sections: [
        {
          title: "The Issue: Lay Investiture",
          points: [
            "**Lay investiture**: secular rulers appointing bishops and abbots, investing them with symbols of office",
            "Kings granted bishops **ring and staff** (spiritual symbols) along with lands",
            "This gave rulers control over the church in their territories",
            "Bishops were both **spiritual leaders and feudal vassals** holding lands from the king",
            "The practice was entangled with **simony** - offices often sold to the highest bidder"
          ]
        },
        {
          title: "The Gregorian Reform",
          points: [
            "Reform movement aimed at freeing the church from secular control",
            "Key goals: end simony, enforce clerical celibacy, eliminate lay investiture",
            "**Pope Leo IX** (1049-1054) began aggressive reforms",
            "Cardinal **Humbert** wrote 'Against Simoniacs' attacking lay control",
            "**Pope Gregory VII** (1073-1085) brought the reform to its climax"
          ]
        },
        {
          title: "Gregory VII (Hildebrand)",
          points: [
            "**Gregory VII** (Hildebrand) was the most powerful reforming pope",
            "His **Dictatus Papae** (1075) asserted unprecedented papal claims",
            "Claimed the pope alone could depose emperors and bishops",
            "Claimed the pope could release subjects from allegiance to wicked rulers",
            "Banned lay investiture entirely in 1075",
            "Gregory saw himself as fighting for the **'freedom of the church'**"
          ]
        },
        {
          title: "The Conflict with Henry IV",
          points: [
            "**Emperor Henry IV** of Germany relied heavily on bishops as administrators",
            "Henry continued appointing bishops despite Gregory's ban",
            "Gregory threatened to **excommunicate** Henry (1076)",
            "Henry called a synod that declared Gregory deposed: 'Descend, descend!'",
            "Gregory excommunicated Henry; released his subjects from obedience",
            "German nobles used this opportunity to **rebel against Henry**"
          ]
        },
        {
          title: "Canossa (1077)",
          points: [
            "Facing rebellion, Henry needed the excommunication lifted",
            "He crossed the Alps in winter to meet Gregory at **Canossa** castle in Italy",
            "Henry stood **barefoot in the snow** for three days as a penitent",
            "Gregory had to absolve him - a priest cannot refuse a penitent",
            "**Symbolic victory for the papacy** - an emperor humbled before a pope",
            "But Henry recovered politically; the struggle continued for decades"
          ]
        },
        {
          title: "Resolution: The Concordat of Worms (1122)",
          points: [
            "Neither Gregory nor Henry achieved clear victory; both died in exile",
            "Final compromise reached at the **Concordat of Worms (1122)**",
            "Bishops would be **elected by the church** (clergy), not appointed by rulers",
            "The emperor could be present and invest the bishop with **secular** (not spiritual) authority",
            "In practice, rulers retained significant influence",
            "The controversy established the **distinction between spiritual and temporal power**"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What was 'lay investiture' and why did reformers oppose it?",
        type: "short",
        answer: "Lay investiture was the practice of secular rulers (kings, emperors) appointing bishops and abbots and investing them with the symbols of spiritual office. Reformers opposed it because it gave secular powers control over the church and was entangled with simony (selling offices).",
        explanation: "The struggle to end lay investiture was central to freeing the church from secular domination."
      },
      {
        question: "What was the significance of Henry IV's penance at Canossa in 1077?",
        type: "mc",
        options: ["A) It ended the Investiture Controversy permanently", "B) It was a symbolic victory showing papal power to humble an emperor", "C) Henry conquered the papacy", "D) Gregory surrendered to Henry"],
        answer: "B) It was a symbolic victory showing papal power to humble an emperor",
        explanation: "Though Henry politically recovered, the image of an emperor standing barefoot in snow seeking papal forgiveness demonstrated papal spiritual authority over secular rulers."
      },
      {
        question: "What did Gregory VII's Dictatus Papae claim about papal authority?",
        type: "short",
        answer: "The Dictatus Papae (1075) claimed the pope alone could depose emperors and bishops, could release subjects from allegiance to wicked rulers, and that the Roman Church had never erred and never would. It asserted supreme papal authority over all earthly powers.",
        explanation: "These unprecedented claims formed the ideological basis for Gregory's confrontation with Henry IV."
      },
      {
        question: "How did the Concordat of Worms (1122) resolve the Investiture Controversy?",
        type: "mc",
        options: ["A) The emperor gained complete control of church appointments", "B) The pope gained complete control with no royal involvement", "C) Bishops would be elected by the church, but emperors could invest them with secular authority", "D) Lay investiture was declared legitimate"],
        answer: "C) Bishops would be elected by the church, but emperors could invest them with secular authority",
        explanation: "This compromise distinguished between spiritual authority (church's domain) and temporal authority (ruler's domain) while allowing rulers continued influence."
      }
    ],
    keyTerms: [
      { term: "Lay Investiture", definition: "Practice of secular rulers appointing bishops and investing them with spiritual symbols of office" },
      { term: "Dictatus Papae", definition: "Gregory VII's 1075 document asserting supreme papal authority over all earthly powers" },
      { term: "Canossa", definition: "Castle where Henry IV did penance before Gregory VII in 1077; symbol of papal power over emperors" },
      { term: "Concordat of Worms", definition: "1122 compromise ending the Investiture Controversy; distinguished spiritual and temporal investiture" },
      { term: "Simony", definition: "Buying or selling church offices; closely associated with lay investiture" },
      { term: "Gregorian Reform", definition: "11th-century movement to free the church from secular control and eliminate abuses" }
    ]
  },
  {
    id: 32,
    title: "The Crusades - Part 1",
    videoTitle: "The Crusades - Part 1",
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
    id: 33,
    title: "The Crusades - Part 2",
    videoTitle: "The Crusades - Part 2",
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
    id: 34,
    title: "The Crusades - Part 3",
    videoTitle: "The Crusades - Part 3",
    duration: "~30 min",
    objective: "This module examines the later crusades, including the disastrous Fourth Crusade, the Children's Crusade, and the final fall of the Crusader States.",
    notes: {
      sections: [
        {
          title: "The Fourth Crusade (1202-1204)",
          points: [
            "Organized by Pope **Innocent III** to attack Egypt, the center of Muslim power",
            "Crusaders contracted with **Venice** for transport but couldn't pay the full amount",
            "Venetians diverted the crusade to **Zara** (a Christian city) to pay the debt",
            "Then diverted to **Constantinople** to install a Byzantine claimant",
            "When payment wasn't forthcoming, crusaders **sacked Constantinople** (1204)",
            "Looting, murder, and destruction of the greatest Christian city - by Christians"
          ]
        },
        {
          title: "Consequences of the Fourth Crusade",
          points: [
            "A **Latin Empire** established in Constantinople (1204-1261)",
            "Byzantine Empire fragmented; never fully recovered",
            "**Poisoned relations** between Eastern and Western Christianity permanently",
            "Made future reunion attempts futile - Orthodox never forgot the betrayal",
            "Demonstrated how crusading zeal could be **misdirected**",
            "Innocent III was **horrified** but couldn't undo it"
          ]
        },
        {
          title: "The Children's Crusade (1212)",
          points: [
            "Two movements, one in France, one in Germany, led by young people or shepherds",
            "Believed that **innocent faith** would succeed where arms had failed",
            "French group possibly sold into slavery; German group dispersed in Italy",
            "May be **largely legendary** - sources are unclear and contradictory",
            "Reflects the **popular religious enthusiasm** that crusading generated",
            "Shows how crusade idealism could lead to disaster"
          ]
        },
        {
          title: "The Fifth Crusade and Frederick II",
          points: [
            "**Fifth Crusade** (1217-1221) attacked Egypt; took Damietta but then lost it",
            "**Emperor Frederick II** (1228-1229) achieved Jerusalem through **diplomacy, not warfare**",
            "Negotiated a 10-year treaty giving Christians Jerusalem, Bethlehem, Nazareth",
            "Was **excommunicated** at the time - crowned himself in Jerusalem",
            "Muslims retained the Dome of the Rock and Al-Aqsa Mosque",
            "Many crusaders were outraged that he negotiated rather than fought"
          ]
        },
        {
          title: "Louis IX's Crusades",
          points: [
            "**Louis IX of France** (St. Louis) led two crusades",
            "**Seventh Crusade** (1248-1254): attacked Egypt, captured at Damietta, ransomed",
            "**Eighth Crusade** (1270): attacked Tunis; Louis died of disease there",
            "Louis was genuinely devout and later **canonized** as a saint",
            "His crusades failed militarily but demonstrated continuing idealism",
            "Last major crusading effort by a Western monarch"
          ]
        },
        {
          title: "The Fall of the Crusader States",
          points: [
            "**Mamluks** (slave soldiers) took power in Egypt and proved formidable foes",
            "Sultan **Baybars** systematically conquered Crusader fortresses (1260s-1270s)",
            "**Acre**, the last major Crusader stronghold, fell in **1291**",
            "The remaining coastal cities were evacuated or fell quickly",
            "After nearly 200 years, the Crusader presence in the Holy Land **ended**",
            "Crusading continued elsewhere (Spain, Baltic, against heretics) but not to the Holy Land"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "Why did the Fourth Crusade attack Constantinople instead of the Holy Land?",
        type: "short",
        answer: "Crusaders couldn't pay Venice for transport, so they diverted first to Zara (to pay the debt) and then to Constantinople (to install a Byzantine claimant who promised payment). When payment failed, they sacked the city for plunder.",
        explanation: "This disastrous diversion was driven by debt, Venetian commercial interests, and Byzantine politics rather than religious aims."
      },
      {
        question: "How did Frederick II acquire Jerusalem in 1229?",
        type: "mc",
        options: ["A) By military conquest", "B) By diplomacy and negotiation with the sultan", "C) By purchasing it from the Templars", "D) By a papal decree"],
        answer: "B) By diplomacy and negotiation with the sultan",
        explanation: "Frederick negotiated a treaty that gave Christians Jerusalem without fighting - remarkable but controversial since he was excommunicated at the time."
      },
      {
        question: "What happened at Acre in 1291?",
        type: "mc",
        options: ["A) A major Crusader victory", "B) The fall of the last major Crusader stronghold to the Mamluks", "C) The founding of a new Crusader State", "D) A peace treaty was signed"],
        answer: "B) The fall of the last major Crusader stronghold to the Mamluks",
        explanation: "Acre's fall in 1291 effectively ended the Crusader presence in the Holy Land after nearly 200 years."
      },
      {
        question: "Why was the Fourth Crusade's sack of Constantinople so damaging to Christian unity?",
        type: "short",
        answer: "Western Crusaders destroyed the greatest Christian city, established a Latin Empire, and looted Byzantine treasures. The Orthodox East never forgave this betrayal by fellow Christians, poisoning relations and making future reunion attempts futile.",
        explanation: "This event deepened the East-West Schism more than theological disagreements ever had."
      }
    ],
    keyTerms: [
      { term: "Fourth Crusade", definition: "1202-1204 crusade that sacked Constantinople instead of fighting Muslims; established Latin Empire" },
      { term: "Latin Empire", definition: "Crusader state in Constantinople 1204-1261; ended when Byzantines recaptured the city" },
      { term: "Children's Crusade", definition: "1212 movements of young people/shepherds believing innocent faith would succeed; largely ended in disaster" },
      { term: "Mamluks", definition: "Slave soldiers who took power in Egypt; eventually conquered all Crusader States" },
      { term: "St. Louis (Louis IX)", definition: "French king who led two crusades (1248, 1270); died on crusade; canonized as a saint" },
      { term: "Fall of Acre (1291)", definition: "Mamluk capture of the last major Crusader stronghold; ended Crusader presence in Holy Land" }
    ]
  },
  {
    id: 35,
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
    id: 36,
    title: "Peter Abelard",
    videoTitle: "Peter Abelard",
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
    id: 37,
    title: "The Rise of the Universities",
    videoTitle: "The Rise of the Universities",
    duration: "~25 min",
    objective: "This module examines the emergence of medieval universities, their organization, curriculum, and role in shaping Western intellectual life.",
    notes: {
      sections: [
        {
          title: "Origins of the University",
          points: [
            "**Universities** emerged in the 12th century from cathedral schools and informal gatherings",
            "The word 'university' (universitas) originally meant a **guild or corporation** of masters or students",
            "Three earliest: **Bologna** (law, c. 1088), **Paris** (theology, c. 1150), **Oxford** (c. 1167)",
            "Arose from the **intellectual revival** of the 12th century",
            "Recovery of **Aristotle's works** (via Arabic translations) created demand for advanced learning"
          ]
        },
        {
          title: "University Organization",
          points: [
            "Two models: **student-controlled** (Bologna) vs. **master-controlled** (Paris)",
            "At Bologna, students hired and fired professors and set curriculum",
            "At Paris, masters controlled admission, curriculum, and degrees",
            "**Faculties** organized by subject: Arts, Theology, Law, Medicine",
            "Faculty of **Arts** was foundational - students began there before specializing",
            "Universities received **papal and royal charters** granting privileges and independence"
          ]
        },
        {
          title: "The Curriculum",
          points: [
            "**Arts faculty**: the seven liberal arts - trivium (grammar, rhetoric, logic) and quadrivium (arithmetic, geometry, music, astronomy)",
            "**Logic** (dialectic) became central - tool for all other studies",
            "**Theology** was the 'Queen of the Sciences' - highest faculty at Paris",
            "**Law** was central at Bologna - both canon (church) and civil (Roman) law",
            "**Medicine** was prominent at Salerno and Montpellier",
            "Study took years: Arts (6 years), Theology (additional 8+ years)"
          ]
        },
        {
          title: "The Scholastic Method",
          points: [
            "**Scholasticism**: method of learning through dialectical reasoning",
            "Based on the **quaestio** (question): state the question, give arguments pro and con, resolve",
            "**Lectio** (lecture): master reads and comments on authoritative texts",
            "**Disputatio** (disputation): formal debate to test and develop arguments",
            "Goal: **synthesize** faith and reason, Scripture and philosophy",
            "Key texts: Bible, Peter Lombard's **Sentences**, Aristotle's works"
          ]
        },
        {
          title: "Student Life",
          points: [
            "Students often young (14+) and far from home",
            "Lived in **'nations'** - groups organized by geographic origin",
            "Later, **colleges** provided housing, meals, and supervision (e.g., Sorbonne at Paris)",
            "Life was often rowdy - conflicts with townspeople ('town and gown')",
            "Students had **clerical status** - answerable to church courts, not civil",
            "Latin was the universal language of instruction"
          ]
        },
        {
          title: "Impact and Legacy",
          points: [
            "Universities produced trained **lawyers, clergy, and administrators**",
            "Created an **international intellectual community** linked by Latin",
            "The degree system (BA, MA, doctorate) **originated here**",
            "Established **academic freedom** as an ideal (sometimes violated)",
            "Universities shaped **law, theology, medicine, and philosophy** for centuries",
            "The modern university descends directly from these medieval institutions"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What did the word 'university' (universitas) originally mean?",
        type: "mc",
        options: ["A) A place of universal knowledge", "B) A guild or corporation of masters or students", "C) A royal institution", "D) A monastery school"],
        answer: "B) A guild or corporation of masters or students",
        explanation: "Like other medieval guilds, universities were corporations that protected the interests and standards of their members."
      },
      {
        question: "How did the Bologna and Paris models of university organization differ?",
        type: "short",
        answer: "Bologna was student-controlled: students hired professors, set curriculum, and ran the institution. Paris was master-controlled: faculty determined admission, curriculum, and degrees. Most northern universities followed Paris; Italian universities followed Bologna.",
        explanation: "These two models represented different balances of power between teachers and learners."
      },
      {
        question: "What was the 'quaestio' in scholastic method?",
        type: "mc",
        options: ["A) A type of examination", "B) A formal question with arguments pro and con, then resolution", "C) A prayer before lectures", "D) A student residence"],
        answer: "B) A formal question with arguments pro and con, then resolution",
        explanation: "The quaestio was the basic unit of scholastic inquiry - posing a question, presenting opposing arguments, and reaching a reasoned conclusion."
      },
      {
        question: "Why was theology called the 'Queen of the Sciences'?",
        type: "short",
        answer: "Theology was considered the highest faculty because it dealt with the highest subject - God and salvation. Students had to complete years of Arts study before entering Theology, which then required 8+ additional years, reflecting its supreme status.",
        explanation: "All other disciplines were ultimately in service to the knowledge of God."
      }
    ],
    keyTerms: [
      { term: "University (Universitas)", definition: "Medieval corporation or guild of masters and/or students; origin of modern universities" },
      { term: "Scholasticism", definition: "Method of learning through dialectical reasoning, synthesizing authorities through logical analysis" },
      { term: "Quaestio", definition: "Formal question structure: state question, give pro/con arguments, resolve; basic unit of scholastic method" },
      { term: "Disputatio", definition: "Formal academic debate used to test and develop arguments" },
      { term: "Seven Liberal Arts", definition: "Foundation curriculum: trivium (grammar, rhetoric, logic) and quadrivium (arithmetic, geometry, music, astronomy)" },
      { term: "Peter Lombard's Sentences", definition: "Standard theological textbook organizing doctrine by topics; all theology students had to comment on it" }
    ]
  },
  {
    id: 38,
    title: "Francis of Assisi",
    videoTitle: "Francis of Assisi",
    duration: "~30 min",
    objective: "This module examines Francis of Assisi, whose radical embrace of poverty and joyful spirituality sparked one of the most influential religious movements in Christian history.",
    notes: {
      sections: [
        {
          title: "Early Life and Conversion",
          points: [
            "**Francis** (c. 1181-1226) was born Giovanni di Pietro di Bernardone in Assisi, Italy",
            "Father was a wealthy **cloth merchant**; Francis enjoyed a privileged, carefree youth",
            "Dreamed of **knightly glory** but was captured in battle and imprisoned for a year",
            "After illness and a pilgrimage to Rome, began questioning his life's direction",
            "At the church of **San Damiano**, heard Christ say: 'Francis, rebuild my church'",
            "Initially took this literally; later understood it spiritually"
          ]
        },
        {
          title: "The Break with His Father",
          points: [
            "Francis began giving away his father's goods to the poor and church",
            "His father **Pietro** was furious and dragged him before the bishop",
            "Francis **stripped off his clothes**, returned them to his father, and declared God his only Father",
            "The bishop covered him with his cloak; Francis became a beggar",
            "This dramatic renunciation symbolized his **complete break** with wealth and family"
          ]
        },
        {
          title: "Lady Poverty",
          points: [
            "Francis embraced **radical poverty** - owning nothing, begging for food",
            "Called poverty his '**Lady**' - he was wedded to her",
            "Poverty was not grim asceticism but **joyful freedom** from possessions",
            "Francis worked with his hands; when work wasn't available, he begged",
            "He distinguished between **poverty** (voluntary) and **destitution** (involuntary)",
            "His poverty was a witness against the wealth of the institutional church"
          ]
        },
        {
          title: "The Franciscan Order",
          points: [
            "Followers gathered; Francis wrote a simple **Rule** based on Gospel poverty",
            "In 1209, Pope **Innocent III** gave verbal approval to the movement",
            "The order grew rapidly - thousands joined within Francis's lifetime",
            "**Clare of Assisi** founded the women's branch (Poor Clares) with Francis's guidance",
            "A **Third Order** allowed laypeople to follow Franciscan ideals while remaining in the world",
            "Formal Rule approved by Pope Honorius III in 1223"
          ]
        },
        {
          title: "Spirituality and Preaching",
          points: [
            "Francis emphasized **joy** - friars should be 'jongleurs' (jesters) of God",
            "Preached to all - including **animals** (sermon to the birds; wolf of Gubbio)",
            "Love of **nature** as God's creation - composed the 'Canticle of the Sun'",
            "Attempted to convert the **Sultan of Egypt** during the Fifth Crusade (1219) - remarkably, they parted respectfully",
            "His preaching was simple, emotional, and accessible to ordinary people"
          ]
        },
        {
          title: "The Stigmata and Death",
          points: [
            "In 1224, while praying on Mount La Verna, Francis received the **stigmata** - wounds of Christ in his hands, feet, and side",
            "First recorded case of stigmata in Christian history",
            "His health declined; he was nearly blind and in constant pain",
            "Died on October 3, 1226, lying naked on the ground to die in poverty",
            "**Canonized in 1228** - just two years after death",
            "Buried in the **Basilica of San Francesco** in Assisi (against his wishes for a simple grave)"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "What dramatic action did Francis take when his father demanded he return what he had given away?",
        type: "mc",
        options: ["A) He fled the city", "B) He stripped naked, returned his clothes, and declared God his only Father", "C) He paid his father back with church funds", "D) He asked the bishop to mediate a compromise"],
        answer: "B) He stripped naked, returned his clothes, and declared God his only Father",
        explanation: "This public renunciation symbolized Francis's complete break with wealth, family, and his former life."
      },
      {
        question: "What did Francis call poverty and why?",
        type: "short",
        answer: "Francis called poverty his 'Lady' - he was wedded to her as a knight to his beloved. Poverty was not grim asceticism but joyful freedom from possessions that allowed total dependence on God and solidarity with the poor.",
        explanation: "This romantic language expressed Francis's passionate commitment to the poverty he saw in Christ's life."
      },
      {
        question: "What were the stigmata that Francis received?",
        type: "mc",
        options: ["A) A papal blessing", "B) The wounds of Christ in his hands, feet, and side", "C) A mystical vision", "D) The gift of tongues"],
        answer: "B) The wounds of Christ in his hands, feet, and side",
        explanation: "Francis is the first recorded person to receive the stigmata (1224), physical wounds corresponding to Christ's crucifixion wounds."
      },
      {
        question: "What was remarkable about Francis's meeting with the Sultan of Egypt?",
        type: "short",
        answer: "During the Fifth Crusade (1219), Francis crossed enemy lines to meet Sultan al-Kamil, hoping to convert him or achieve martyrdom. Though the sultan did not convert, they parted with mutual respect - remarkable given the wartime context.",
        explanation: "This encounter showed Francis's commitment to peaceful witness and his willingness to engage even enemies."
      }
    ],
    keyTerms: [
      { term: "Lady Poverty", definition: "Francis's personification of poverty as his bride; expressed his passionate commitment to owning nothing" },
      { term: "Stigmata", definition: "Wounds corresponding to Christ's crucifixion; Francis was the first recorded stigmatic (1224)" },
      { term: "Poor Clares", definition: "Women's Franciscan order founded by Clare of Assisi with Francis's guidance" },
      { term: "Third Order", definition: "Franciscan order for laypeople to follow Franciscan ideals while remaining in the world" },
      { term: "Canticle of the Sun", definition: "Francis's famous prayer praising God through creation ('Brother Sun, Sister Moon')" },
      { term: "San Damiano", definition: "Ruined church where Francis heard Christ say 'Rebuild my church'; he restored it literally" }
    ]
  },
  {
    id: 39,
    title: "Dominic and the Dominicans",
    videoTitle: "Dominic and the Dominicans",
    duration: "~25 min",
    objective: "This module examines Dominic de Guzman and the Order of Preachers, founded to combat heresy through preaching, education, and holy living.",
    notes: {
      sections: [
        {
          title: "Background: The Cathar Heresy",
          points: [
            "**Cathars** (Albigensians) were a dualist heresy flourishing in southern France",
            "Taught that matter was evil, created by an evil god; only spirit was good",
            "Rejected the Church, sacraments, marriage, and all material things",
            "**Perfect** (perfecti) lived extreme asceticism; ordinary believers (credentes) lived normally",
            "Their austere leaders contrasted sharply with wealthy, worldly Catholic clergy",
            "The Church's initial response (Cistercian preachers) failed"
          ]
        },
        {
          title: "Dominic's Life and Calling",
          points: [
            "**Dominic de Guzman** (c. 1170-1221) was born in Castile, Spain",
            "Became an **Augustinian canon** at Osma cathedral; known for learning and piety",
            "While traveling through southern France (1203), encountered the Cathar heresy",
            "Saw that Cistercian preachers failed because they traveled in **worldly style**",
            "Convinced the bishop to try a different approach: **poverty and preaching**"
          ]
        },
        {
          title: "The New Approach",
          points: [
            "Dominic adopted **apostolic poverty** - traveling barefoot, begging for food",
            "This matched the Cathar Perfect and **removed the excuse** of Catholic worldliness",
            "Combined poverty with **learned preaching** - meeting heretics intellectually",
            "Founded a community of **women converts** at Prouille (1206)",
            "Spent years preaching in the Languedoc with limited but real success"
          ]
        },
        {
          title: "The Order of Preachers",
          points: [
            "In 1216, Pope **Honorius III** approved Dominic's Order of Preachers (Dominicans)",
            "Unlike monks, Dominicans were **friars** - mobile, urban, active in the world",
            "Their specific mission: **preaching and teaching** to defend the faith",
            "Adopted **Augustinian Rule** with additions for their preaching mission",
            "Combined **contemplation and action**: 'To contemplate and give to others the fruits of contemplation'"
          ]
        },
        {
          title: "Organization and Growth",
          points: [
            "**Democratic governance**: leaders elected; general chapters made decisions",
            "Emphasis on **education**: every priory had a teacher; talented friars sent to universities",
            "Dominicans became leading **university theologians**: Albertus Magnus, Thomas Aquinas",
            "Also involved in the **Inquisition** - investigating and trying heresy",
            "Spread rapidly across Europe; by Dominic's death (1221), 60 houses in 8 provinces"
          ]
        },
        {
          title: "Dominican Spirituality and Legacy",
          points: [
            "Motto: **'Veritas'** (Truth) - commitment to doctrinal orthodoxy",
            "Called **'Domini canes'** (dogs of the Lord) - a pun on their name; watchdogs of faith",
            "Balance of **study and prayer** - intellectual pursuit as worship",
            "Dominic was canonized in 1234",
            "Produced many saints, scholars, and missionaries",
            "Remain active today in education, preaching, and mission"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "Why did Dominic believe earlier Catholic efforts against the Cathars had failed?",
        type: "short",
        answer: "Dominic observed that Cistercian preachers traveled in worldly style with entourages and fine horses, while Cathar Perfect lived in extreme poverty. He concluded that Catholic preachers needed to adopt apostolic poverty to remove the excuse of hypocrisy and match the Cathars' example.",
        explanation: "Dominic's insight was that credible preaching required living what one preached."
      },
      {
        question: "What is the distinctive mission of the Dominican Order?",
        type: "mc",
        options: ["A) Contemplative silence", "B) Agricultural labor", "C) Preaching and teaching to defend the faith", "D) Hospital work"],
        answer: "C) Preaching and teaching to defend the faith",
        explanation: "The Order of Preachers was founded specifically for learned preaching to combat heresy and spread truth."
      },
      {
        question: "What is the Dominican motto?",
        type: "mc",
        options: ["A) Ora et Labora (Pray and Work)", "B) Veritas (Truth)", "C) Pax (Peace)", "D) Caritas (Love)"],
        answer: "B) Veritas (Truth)",
        explanation: "The commitment to Truth reflects the order's focus on doctrinal orthodoxy and intellectual pursuit of divine truth."
      },
      {
        question: "How did the Dominicans differ from traditional monks?",
        type: "short",
        answer: "Dominicans were friars, not monks. Unlike monks who remained in monasteries, friars were mobile, urban, and active in the world. They did not take vows of stability to one place but traveled to preach, teach, and engage with society directly.",
        explanation: "The mendicant (begging) orders represented a new form of religious life suited to the urban, mobile 13th century."
      }
    ],
    keyTerms: [
      { term: "Cathars/Albigensians", definition: "Dualist heresy teaching matter is evil; flourished in southern France; Dominic founded his order to combat them" },
      { term: "Order of Preachers", definition: "Official name of the Dominican order; founded 1216 for preaching and teaching" },
      { term: "Friars", definition: "Members of mendicant orders (Dominicans, Franciscans); mobile, urban, active in the world unlike cloistered monks" },
      { term: "Veritas", definition: "'Truth' - Dominican motto expressing commitment to doctrinal orthodoxy" },
      { term: "Domini Canes", definition: "'Dogs of the Lord' - punning nickname for Dominicans as watchdogs of the faith" },
      { term: "Inquisition", definition: "Church institution for investigating heresy; Dominicans played a major role as inquisitors" }
    ]
  },
  {
    id: 40,
    title: "Thomas Aquinas - Part 1",
    videoTitle: "Thomas Aquinas - Part 1",
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
    id: 41,
    title: "Thomas Aquinas - Part 2",
    videoTitle: "Thomas Aquinas - Part 2",
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
    id: 42,
    title: "The Medieval Papacy",
    videoTitle: "The Medieval Papacy",
    duration: "~30 min",
    objective: "This module examines the height of papal power in the High Middle Ages, focusing on Innocent III and the claims of papal supremacy over all earthly authority.",
    notes: {
      sections: [
        {
          title: "The Development of Papal Power",
          points: [
            "Papal authority grew steadily from **Late Antiquity** through the **High Middle Ages**",
            "The **Gregorian Reform** (11th century) asserted papal supremacy over secular rulers",
            "**Dictatus Papae** (1075) claimed the pope could depose emperors",
            "The **Investiture Controversy** established papal independence from imperial control",
            "By the 13th century, popes claimed authority over all earthly power"
          ]
        },
        {
          title: "Innocent III: The Height of Papal Power",
          points: [
            "**Innocent III** (r. 1198-1216) was perhaps the most powerful pope in history",
            "Trained canon lawyer; elected pope at only 37 years old",
            "Called himself 'Vicar of Christ' (not just Vicar of Peter)",
            "Claimed to stand **'between God and man, below God, above man'**",
            "Used spiritual weapons (excommunication, interdict) to control secular rulers"
          ]
        },
        {
          title: "Innocent's Political Interventions",
          points: [
            "Forced King **Philip II of France** to take back his wife through interdict on all France",
            "Excommunicated King **John of England**; placed England under interdict; John submitted",
            "Claimed right to judge between rival claimants to the **Holy Roman Empire**",
            "Intervened in the succession disputes of many kingdoms",
            "The Fourth Crusade (which sacked Constantinople) was launched under his auspices"
          ]
        },
        {
          title: "Fourth Lateran Council (1215)",
          points: [
            "Largest medieval church council; over **400 bishops** attended",
            "Required annual **confession and communion** for all Christians",
            "Defined **transubstantiation** as official doctrine",
            "Jews and Muslims required to wear **distinctive clothing**",
            "Condemned various heresies; authorized crusade against Albigensians",
            "Established regulations for clerical behavior and church discipline"
          ]
        },
        {
          title: "The Theory of Papal Supremacy",
          points: [
            "**Two Swords theory**: pope holds both spiritual and temporal swords; lends temporal to kings",
            "Pope **Boniface VIII** (1294-1303) issued **Unam Sanctam** (1302): submission to pope necessary for salvation",
            "The pope was supreme judge, superior to all earthly authority",
            "This theory reached its height just as papal power was about to decline",
            "Conflict with **Philip IV of France** led to Boniface's humiliation at Anagni"
          ]
        },
        {
          title: "Seeds of Decline",
          points: [
            "Rising **national monarchies** (France, England) resisted papal claims",
            "The **taxation** of clergy became a flashpoint of conflict",
            "Phillip IV's conflict with Boniface showed limits of spiritual weapons",
            "The **Avignon Papacy** (1309-1377) would subordinate popes to French kings",
            "The **Great Schism** (1378-1417) would shatter papal prestige",
            "The high medieval papacy's claims outstripped its actual power"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "Why is Innocent III considered the most powerful pope in history?",
        type: "short",
        answer: "Innocent III successfully used spiritual weapons (excommunication, interdict) to control kings across Europe, forcing Philip II of France and John of England to submit. He intervened in imperial elections, called the Fourth Crusade, and presided over the Fourth Lateran Council which legislated for all Christendom.",
        explanation: "No pope before or after wielded such effective authority over secular rulers."
      },
      {
        question: "What was the 'Two Swords' theory of papal power?",
        type: "mc",
        options: ["A) The pope and emperor shared equal power", "B) The pope holds both spiritual and temporal swords, lending the temporal to kings", "C) Church and state are completely separate", "D) Kings have authority over the church"],
        answer: "B) The pope holds both spiritual and temporal swords, lending the temporal to kings",
        explanation: "This theory meant all earthly power ultimately derived from and was accountable to the pope."
      },
      {
        question: "What did Boniface VIII's Unam Sanctam (1302) claim?",
        type: "mc",
        options: ["A) All religions lead to salvation", "B) Submission to the Roman pontiff is necessary for salvation", "C) The pope should stay out of politics", "D) Emperors are equal to popes"],
        answer: "B) Submission to the Roman pontiff is necessary for salvation",
        explanation: "Unam Sanctam represented the most extreme statement of papal supremacy, issued just as that power was about to face serious challenges."
      },
      {
        question: "What did the Fourth Lateran Council (1215) require of all Christians?",
        type: "short",
        answer: "It required annual confession to a priest and reception of communion at least once a year (at Easter). It also defined transubstantiation as official doctrine and established many other regulations for Christian life and church discipline.",
        explanation: "This council shaped Catholic practice for centuries and reflected the papacy's power to legislate for all Christians."
      }
    ],
    keyTerms: [
      { term: "Innocent III", definition: "Pope 1198-1216; arguably the most powerful pope in history; called Fourth Lateran Council" },
      { term: "Vicar of Christ", definition: "Title Innocent III used for the pope, claiming to represent Christ's authority on earth" },
      { term: "Fourth Lateran Council", definition: "1215 council that required annual confession/communion and defined transubstantiation" },
      { term: "Two Swords Theory", definition: "Doctrine that the pope holds both spiritual and temporal authority, delegating the latter to kings" },
      { term: "Unam Sanctam", definition: "Boniface VIII's 1302 bull claiming submission to the pope is necessary for salvation" },
      { term: "Interdict", definition: "Ecclesiastical penalty suspending all church services in a territory; used to pressure rulers" }
    ]
  },
  {
    id: 43,
    title: "The Great Papal Schism",
    videoTitle: "The Great Papal Schism",
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
    id: 44,
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
    id: 45,
    title: "Jan Hus",
    videoTitle: "Jan Hus",
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
    id: 46,
    title: "The Renaissance Papacy",
    videoTitle: "The Renaissance Papacy",
    duration: "~30 min",
    objective: "This module examines the Renaissance popes (1417-1521) who focused on art, politics, and power while church corruption deepened, setting the stage for the Reformation.",
    notes: {
      sections: [
        {
          title: "Context: The Papacy Restored",
          points: [
            "After the **Council of Constance** (1417), the papacy was restored but weakened",
            "Popes reasserted authority against **conciliarism** and conciliar councils",
            "The **Italian Renaissance** was flourishing; popes became major **patrons of art**",
            "Popes were also **Italian princes** controlling the Papal States",
            "This mixture of spiritual authority, art patronage, and worldly power defined the period"
          ]
        },
        {
          title: "The Age of Art and Architecture",
          points: [
            "**Pope Nicholas V** (1447-1455) began the **renovation of St. Peter's Basilica**",
            "Popes employed the greatest artists: **Raphael, Michelangelo, Botticelli, Brunelleschi**",
            "The Vatican became a showcase of **Renaissance beauty and grandeur**",
            "Michelangelo painted the **Sistine Chapel ceiling** under Pope Julius II",
            "The **cost** of this artistic splendor was enormous",
            "Art and architecture were justified as glorifying God; critics saw worldly excess"
          ]
        },
        {
          title: "Political Power and Intrigue",
          points: [
            "Popes acted as **Italian princes**, making alliances and war",
            "**Pope Julius II** (1503-1513) was called the 'Warrior Pope' - led armies in battle",
            "Popes made appointments based on **family interests**, not merit - **nepotism** was rampant",
            "The **Borgia family** produced several popes; they were notorious for corruption",
            "**Pope Alexander VI** (a Borgia) fathered several children while pope",
            "Spiritual leadership was often secondary to political ambition"
          ]
        },
        {
          title: "Church Corruption",
          points: [
            "The **sale of indulgences** became a major papal fundraising mechanism",
            "**Indulgences** were supposed to reduce penance; they became commodities for money",
            "The wealthy could buy their way to forgiveness; the poor could not",
            "**Simony** (buying church offices) was widespread - priests bought their positions",
            "Clergy were often **ignorant, worldly, and immoral**",
            "Reformist critics like **Savonarola** called out clerical corruption from within"
          ]
        },
        {
          title: "Worldly Splendor vs. Spiritual Crisis",
          points: [
            "The contrast between **papal grandeur** and **evangelical poverty** was stark",
            "Medieval ideals of asceticism and service were abandoned",
            "The **Bible** was ignored in favor of **tradition** and **power**",
            "Educated people (especially humanists) began to **criticize the church**",
            "Yet most people still saw the pope as the **spiritual head of Christendom**",
            "Few imagined the church's monopoly on Christian practice would soon shatter"
          ]
        },
        {
          title: "The Indulgence Crisis",
          points: [
            "Pope **Leo X** (1513-1521) needed funds for **St. Peter's completion**",
            "He authorized the **sale of indulgences** on a massive scale",
            "**Johann Tetzel** was sent to Germany as the papal indulgence salesman",
            "Tetzel's aggressive marketing offended many faithful Christians",
            "**Martin Luther's** protest against the indulgence system would trigger the Reformation",
            "The Renaissance papacy's financial needs directly caused the Reformation crisis"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "How did Renaissance popes justify their patronage of art and architecture?",
        type: "short",
        answer: "Renaissance popes argued that beautiful art and architecture glorified God and enhanced the splendor of the church. However, critics pointed out that the enormous cost of these projects (especially St. Peter's Basilica) represented worldly excess that contradicted Christ's example of poverty.",
        explanation: "This tension between theological justification and practical criticism characterized the era."
      },
      {
        question: "Who was Pope Julius II and why is he notable?",
        type: "mc",
        options: ["A) He was a pacifist pope", "B) He was the 'Warrior Pope' who led armies in battle and employed Michelangelo", "C) He abolished papal armies", "D) He rejected Renaissance art"],
        answer: "B) He was the 'Warrior Pope' who led armies in battle and employed Michelangelo",
        explanation: "Julius II exemplified the warrior-prince pope who combined political power with artistic patronage."
      },
      {
        question: "What is simony in the context of Renaissance church corruption?",
        type: "mc",
        options: ["A) The sale of relics", "B) The purchase of church offices", "C) The use of indulgences", "D) The marriage of priests"],
        answer: "B) The purchase of church offices",
        explanation: "Simony meant that priests could buy their positions rather than earning them through merit or calling."
      },
      {
        question: "How did the need to fund St. Peter's Basilica lead to the Reformation?",
        type: "short",
        answer: "Pope Leo X authorized massive sales of indulgences to fund St. Peter's completion. Johann Tetzel aggressively marketed these indulgences in Germany. Martin Luther's protest against this system in 1517 triggered the Protestant Reformation.",
        explanation: "Financial need and aggressive salesmanship created the spark that ignited religious revolution."
      }
    ],
    keyTerms: [
      { term: "Indulgence Sale", definition: "Papal practice of selling remission of penance/punishment; major fundraising mechanism and corruption symbol" },
      { term: "Nepotism", definition: "Practice of appointing family members to church positions; rampant among Renaissance popes" },
      { term: "Simony", definition: "Practice of buying and selling church offices; widespread corruption in Renaissance church" },
      { term: "Julius II", definition: "'Warrior Pope' who ruled 1503-1513; commissioned Sistine Chapel ceiling from Michelangelo" },
      { term: "St. Peter's Basilica", definition: "Great church built in Rome; its cost funded by indulgence sales, triggering Reformation protest" },
      { term: "Renaissance Patronage", definition: "Popes employing artists like Raphael and Michelangelo; created magnificent art at enormous expense" }
    ]
  },
  {
    id: 47,
    title: "Erasmus",
    videoTitle: "Erasmus",
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
    id: 48,
    title: "On the Eve of the Reformation",
    videoTitle: "On the Eve of the Reformation",
    duration: "~30 min",
    objective: "This module examines the religious, intellectual, and social conditions of late medieval Christendom that made the Reformation both possible and inevitable.",
    notes: {
      sections: [
        {
          title: "Institutional Crisis and Loss of Credibility",
          points: [
            "The **Great Schism** (1378-1417) had shattered confidence in papal leadership",
            "The **Avignon Papacy** had shown papal dependence on secular powers",
            "Councils like **Constance** had challenged papal supremacy but then popes reasserted it",
            "The **sale of indulgences** and simony revealed systematic corruption",
            "Yet most people still **believed in the church** and wanted it reformed, not destroyed",
            "The institution had lost moral authority even as its claims remained unchanged"
          ]
        },
        {
          title: "Intellectual Ferment: Humanism and Scholasticism",
          points: [
            "**Renaissance humanism** valued Greek and Latin texts, emphasizing human dignity and reason",
            "Medieval **scholasticism** still dominated universities but seemed increasingly sterile",
            "The **printing press** (c. 1450) made books and ideas spread rapidly",
            "**Erasmus, Valla, and other humanists** questioned church traditions through textual criticism",
            "The **Bible** was being translated into **vernacular languages** despite church opposition",
            "Educated people, especially humanists, were asking hard questions about church authority"
          ]
        },
        {
          title: "Lay Piety and Mysticism",
          points: [
            "A growing movement of **lay piety** emphasized personal devotion over institutional mediation",
            "The **Devotio Moderna** (Modern Devotion) stressed personal prayer and Bible reading",
            "**Mystics** claimed direct encounter with God without priestly intermediary",
            "The **imitation of Christ** through ascetic practice appealed to reformers",
            "Yet **indulgences and masses** for the dead remained pervasive",
            "A gap was opening between **popular piety** and **official church practice**"
          ]
        },
        {
          title: "Rising National Monarchies and Criticism of Papal Power",
          points: [
            "**National kings** (France, Spain, England, Germany) were increasingly powerful",
            "Kings resisted **papal taxation** and claims to appoint bishops",
            "The concept of **Christendom** (unified Christian empire) was breaking down",
            "**Gallicanism** (French church independence), **Erastianism** (state control of church), emerged",
            "Yet national rulers also wanted **religious legitimacy** from the church",
            "This created tension: monarchs wanted reform that increased their power"
          ]
        },
        {
          title: "Heretical Movements and Reform Impulses",
          points: [
            "**Wycliffe's Lollards** continued underground in England",
            "**Hussite churches** thrived in Bohemia and influenced Central Europe",
            "Radical groups like the **Brethren of the Common Life** advocated internal reform",
            "Many wanted to **return to apostolic poverty** and biblical Christianity",
            "The church condemned these movements as **heretical**",
            "Yet their existence showed that **alternatives** to official Catholicism were imaginable"
          ]
        },
        {
          title: "The Crisis Awaiting Resolution",
          points: [
            "By 1500, **no one expected schism**; everyone assumed the church was eternal",
            "Yet the combination of factors made **reform inevitable**:",
            "**Institutional corruption** demanded purification",
            "**Intellectual criticism** questioned traditional authorities",
            "**Lay piety** wanted direct access to Scripture and God",
            "**Political powers** resisted papal supremacy",
            "All it needed was a **catalyst** - which came when **Martin Luther** posted his theses in 1517"
          ]
        }
      ]
    },
    quiz: [
      {
        question: "How did the Great Schism and Avignon Papacy undermine the church's credibility before the Reformation?",
        type: "short",
        answer: "The Great Schism (1378-1417) with multiple rival popes showed that papal leadership was broken. The Avignon Papacy demonstrated papal dependence on secular rulers. Though councils like Constance temporarily restored order, popes quickly reasserted supremacy. This pattern of crisis and reasserted authority eroded confidence in the institution's spiritual leadership.",
        explanation: "Loss of institutional credibility made people receptive to fundamental questioning of the church's authority."
      },
      {
        question: "How did the printing press contribute to conditions favoring reformation?",
        type: "mc",
        options: ["A) It increased papal authority", "B) It spread books, ideas, and criticism rapidly to a wider audience", "C) It had no significant impact", "D) It strengthened scholastic theology"],
        answer: "B) It spread books, ideas, and criticism rapidly to a wider audience",
        explanation: "The printing press democratized knowledge, allowing humanist critiques and biblical translations to reach far more people than manuscripts could."
      },
      {
        question: "What was the Devotio Moderna and how did it contrast with official church practice?",
        type: "short",
        answer: "The Devotio Moderna emphasized personal prayer, Bible reading, and direct devotion to God without dependence on priestly mediation. Yet the official church still centered on indulgences, masses for the dead, and clerical authority. This gap between popular piety seeking direct access to God and official practice emphasized clerical power created tension.",
        explanation: "Lay people were increasingly unwilling to accept that they needed priests as intermediaries for spiritual experience."
      },
      {
        question: "Why did national monarchies support some church criticism?",
        type: "short",
        answer: "National kings resisted papal taxation and claims to appoint bishops. They wanted to increase their own control over the church within their realms. While they still wanted religious legitimacy from the church, they supported criticism that weakened papal supremacy over secular rulers.",
        explanation: "Political interests aligned with reformist goals, creating unlikely allies against papal claims."
      }
    ],
    keyTerms: [
      { term: "Institutional Crisis", definition: "Loss of credibility of the papal church through schism, corruption, and failed reform attempts" },
      { term: "Devotio Moderna", definition: "Movement emphasizing personal piety, Bible reading, and direct devotion to God without priestly mediation" },
      { term: "Christian Humanism", definition: "Intellectual movement combining classical learning with Christian faith; criticized church traditions" },
      { term: "Textual Criticism", definition: "Method of analyzing ancient texts; humanists used it to challenge church traditions" },
      { term: "Gallicanism", definition: "French church's assertion of independence from papal authority" },
      { term: "Erastianism", definition: "Theory that the state should control the church rather than the reverse" },
      { term: "Catalyst of Reform", definition: "The specific event (like Luther's theses) that triggers revolutionary change in a system already in crisis" }
    ]
  }
]

const remainingVideos = []

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
    <Card className="mb-8">
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
              This study guide covers Ryan Reeves&apos; &quot;Early and Medieval Church History&quot; playlist (59 lectures). 
              The modules below cover the Early Church period (c. 30-600 AD).
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>59 Total Videos</Badge>
              <Badge variant="secondary">6 Modules Completed</Badge>
              <Badge variant="outline">19 Early Church Videos Remaining</Badge>
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

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Remaining Early Church Videos (Modules 7-25)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {remainingVideos.map((video, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Module {idx + 7}: {video}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
