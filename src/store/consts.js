import frail1 from "../img/frail1.png"
import frail2 from "../img/frail2.png"
import frail3 from "../img/frail3.png"
import frail4 from "../img/frail4.png"
import frail5 from "../img/frail5.png"
import frail6 from "../img/frail6.png"
import frail7 from "../img/frail7.png"
import frail8 from "../img/frail8.png"
import frail9 from "../img/frail9.png"

export const levels = {
  age: {
    1: {
      score: null,
      group: "< 65 years",
      value: 1,
    },
    2: {
      score: 2,
      group: "65 to 75 years",
      value: 2,
    },
    3: {
      score: 3,
      group: "> 75 years",
      value: 3,
    },
  },
  frailty: {
    1: {
      score: null,
      group: "Very Fit",
      description:
        "People who are robust, active, energetic and motivated. These people commonly exercise regularly. They are among the fittest for their age.",
      value: 1,
      image: frail1,
    },
    2: {
      score: null,
      group: "Well",
      description:
        "People who have <strong>no active disease symptoms</strong> but are less fit than category 1. Often, they exercise or are very <strong>active occasionally</strong>, e.g. seasonally.",
      value: 2,
      image: frail2,
    },
    3: {
      score: null,
      group: "Managing Well",
      description:
        "People whose <strong>medical problems are well controlled</strong>, but are not regularly active beyond routine walking.",
      value: 3,
      image: frail3,
    },
    4: {
      score: 3,
      group: "Vulnerable",
      description:
        "While not dependent on others for daily help, often <strong>symptoms limit activities</strong>. A common complaint is being 'slowed up', and/or being tired during the day.",
      value: 4,
      image: frail4,
    },
    5: {
      score: 4,
      group: "Mildly Frail",
      description:
        "These people often have <strong>more evident slowing</strong>, and need help in <strong>high order IADLs</strong> (finances, transportation, heavy housework, medications). Typically, mild frailty progressively impairs shopping and walking outside alone, meal preparation, and housework.",
      value: 5,
      image: frail5,
    },
    6: {
      score: null,
      group: "Moderately Frail",
      description:
        "People who need help with <strong>all outside activities</strong> and with <strong>keeping house</strong>. Inside, they often have problems with stairs and need <strong>help with bathing</strong> and might need minimal assistance (cuing, standby) with dressing.",
      value: 6,
      image: frail6,
    },
    7: {
      score: null,
      group: "Severely Frail",
      description:
        "<strong>Completely dependent for personal care</strong>, from whatever cause (physical or cognitive). Even so, they seem stable and not at high risk of dying (within ~ 6 months).",
      value: 7,
      image: frail7,
    },
    8: {
      score: null,
      group: "Very Severely Frail",
      description:
        "Completely dependent, approaching the end of life. Typically, they could not recover even from a minor illness.",
      value: 8,
      image: frail8,
    },
    9: {
      score: null,
      group: "Terminally Ill",
      description:
        "Approaching the end of life. This category applies to people with a <strong>life expectancy < 6 months</strong>, who are <strong>not otherwise evidently frail</strong>.",
      value: 9,
      image: frail9,
    },
  },
  ecog: {
    0: {
      score: null,
      group: "Fully active",
      description:
        "Fully active, able to carry on all pre-disease performance without restriction.",
      value: 0,
    },
    1: {
      score: 2,
      group: "Restricted in activity",
      description:
        "Restricted in physically strenuous activity but ambulatory and able to carry out work of a light or sedentary nature, e.g., light house work, office work.",
      value: 1,
    },
    2: {
      score: 3,
      group: "Ambulatory and capable",
      description:
        "Ambulatory and capable of all selfcare but unable to carry out any work activities; up and about more than 50% of waking hours.",
      value: 2,
    },
    3: {
      score: 4,
      group: "Limited selfcare",
      description:
        "Capable of only limited selfcare; confined to bed or chair more than 50% of waking hours.",
      value: 3,
    },
    4: {
      score: null,
      group: "Completely disabled",
      description:
        "Completely disabled; cannot carry on any selfcare; totally confined to bed or chair.",
      value: 4,
    },
  },
}
