import {
  faCalendarCheck,
  faStar,
  faDiagramProject,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const statsData = [
  {
    id: 1,
    icon: faCalendarCheck,
    end: 25,
    decimals: 0,
    prefix: "",
    suffix: "+",
    label: "Years of Experience",
  },
  {
    id: 2,
    icon: faStar,
    end: 4.9,
    decimals: 1,
    prefix: "",
    suffix: "",
    label: "Genuine Rating",
    subEnd: 15.5,
    subDecimals: 1,
    subSuffix: "K",
    subLabel: "reviews",
  },
  {
    id: 3,
    icon: faDiagramProject,
    end: 100,
    decimals: 0,
    prefix: "",
    suffix: "+",
    label: "Completed Projects",
  },
  {
    id: 4,
    icon: faUsers,
    end: 25,
    decimals: 0,
    prefix: "",
    suffix: "+",
    label: "Satisfied Customers",
  },
];