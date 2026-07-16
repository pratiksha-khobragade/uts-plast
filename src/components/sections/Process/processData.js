import { faLayerGroup, faGears, faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";

export const processData = [
  {
    id: 1,
    number: "01",
    icon: faLayerGroup,
    title: "Material Selection",
    description:
      "Our process begins with the careful selection of premium materials. Depending on the rope's intended use, we choose from a wide range of fibers.",
    filled: true,
  },
  {
    id: 2,
    number: "02",
    icon: faGears,
    title: "Rope Manufacturing & Braiding",
    description:
      "Our advanced machinery takes over, braiding or twisting the fibers into durable ropes. Using state-of-the-art technology, we ensure each strand is perfectly aligned and tightly bound for superior strength and flexibility.",
    filled: false,
  },
  {
    id: 3,
    number: "03",
    icon: faMagnifyingGlassChart,
    title: "Quality Control & Testing",
    description:
      "Before any rope leaves our facility, it undergoes rigorous testing. We perform load testing, tensile strength checks, and quality assessments to ensure that every product meets or exceeds industry standards.",
    filled: true,
  },
];