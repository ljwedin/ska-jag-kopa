export type CriteriaType = {
  key: string;
  question: string;
  buy: string;
  noBuy: string;
};

export const criteria: CriteriaType[] = [
  {
    key: '1',
    question: 'Har jag tänkt på saken i över två veckor?',
    buy: 'Ja',
    noBuy: 'Nej'
  },
  {
    key: '2',
    question: 'Löser den ett problem jag har tänkt på innan?',
    buy: 'Ja',
    noBuy: 'Nej'
  },
  {
    key: '3',
    question: 'Äger jag redan något liknande?',
    buy: 'Nej',
    noBuy: 'Ja'
  },
  {
    key: '4',
    question: 'Är det värt att ta ett steg från mina finansiella mål?',
    buy: 'Ja',
    noBuy: 'Nej'
  },
  {
    key: '5',
    question: 'Var kommer den vara om fem år?',
    buy: 'Används eller använd',
    noBuy: 'Oanvänd'
  },
  {
    key: '6',
    question: 'Var ska jag sätta den om jag köper den?',
    buy: 'Jag vet exakt var',
    noBuy: 'Oklart'
  },
  {
    key: '7',
    question: 'Hur länge måste jag jobba för att tjäna ihop till den?',
    buy: 'Inte länge',
    noBuy: 'Länge'
  },
  {
    key: '8',
    question: 'Kan jag vara produktiv och glad utan den?',
    buy: 'Nej',
    noBuy: 'Ja'
  },
  {
    key: '9',
    question: 'Vad är kostnaden per användning?',
    buy: 'Värd pengarna',
    noBuy: 'Inte värd pengarna'
  },
  {
    key: '10',
    question: 'Stämmer den här med mina prioriteringar?',
    buy: 'Ja',
    noBuy: 'Nej'
  },
  {
    key: '11',
    question: 'Är det här det bästa sättet för mig att skaffa saken?',
    buy: 'Ja',
    noBuy: 'Nej'
  },
  {
    key: '12',
    question: 'Är den av hög kvalitet och har ett rimligt pris?',
    buy: 'Ja',
    noBuy: 'Nej'
  },
  {
    key: '13',
    question: 'Hur är mitt humör just nu?',
    buy: 'Lugn och neutral',
    noBuy: 'Exalterad, ledsen, arg eller uttråkad'
  },
  {
    key: '14',
    question: 'Är det här ett impulsköp?',
    buy: 'Nej',
    noBuy: 'Ja'
  }
];
