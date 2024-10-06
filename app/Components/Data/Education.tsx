interface EducationData {
  id: number;
  name: string;
  description: string;
  link: string;
}

export const educationLIST: EducationData[] = [
  {
    id: 1,
    name: "ELSAMINA",
    description: `High-School in Informatics 2010-2015`,
    link: "https://www.facebook.com/groups/460476108900004",
  },
  {
    id: 2,
    name: "ELTE",
    description: `Bsc in Computer Science 2015-2021`,
    link: "https://www.elte.hu/en/",
  },
  {
    id: 3,
    name: "BGE",
    description: `Master in Int. Business and Economy`,
    link: "https://international.uni-bge.hu/",
  },
];
