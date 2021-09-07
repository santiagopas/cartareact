const menu = [
  {
    id: 1,
    title: 'Amaretto Sour',
    category: 'Vademécum',
    price: 100,
    img: './images/item-1.png',
    desc: `Licor de amaretto, Jugo de limón, clara de huevo/aquafaba.`,
  },
  {
    id: 2,
    title: 'Black Russian',
    category: 'Vademécum',
    price: 300,
    img: './images/item-1.png',
    desc: `Vodka Smirnoff, licor Borghetti y granos de café.`,
  },
  {
    id: 3,
    title: 'Blue Blazer',
    category: 'Vademécum',
    price: 360,
    img: './images/item-1.png',
    desc: `Johnnie Walker Red Label, almíbar, agua hirviendo, twist de limón/naranja.`,
  },
  {
    id: 4,
    title: 'Boulevardier',
    category: 'Vademécum',
    price: 360,
    img: './images/item-1.png',
    desc: `Whiskey Bourbon, bitter rojo , vermut rosso, slice de naranja.`,
  },
  {
    id: 5,
    title: 'Fernet con cola',
    category: 'Vademécum',
    price: 300,
    img: './images/item-4.png',
    desc: `Fernet con gaseosa cola.`,
  },
  {
    id: 6,
    title: 'Caipiroska',
    category: 'Vademécum',
    price: 310,
    img: './images/item-1.png',
    desc: `Vodka Smirnoff, jugo de lima y almíbar.
    Variación: Caipirinha.`,
  },
  {
    id: 7,
    title: 'Captain Levi',
    category: 'Vademécum',
    price: 330,
    img: './images/item-1.png',
    desc: `Whisky irlandés, fernet branca, almíbar simple y menta.`,
  },
  {
    id: 8,
    title: 'Cream dream',
    category: 'Vademécum',
    price: 330,
    img: './images/item-1.png',
    desc: `Amarula, Ron añejo, crema, Rayadura de cacao.`,
  },
  {
    id: 9,
    title: 'Cuba libre',
    category: 'Vademécum',
    price: 300,
    img: './images/item-4.png',
    desc: `Ron blanco, gaseosa cola, jugo y gajo/piel de limón.`,
  },
  {
    id: 10,
    title: 'Cynar julep',
    category: 'Vademécum',
    price: 260,
    img: './images/item-8.png',
    desc: `Cynar 70, jugo de lima, menta, azúcar y jugo de pomelo.`,
  },
  {
    id: 11,
    title: 'Dry Martini',
    category: 'Vademécum',
    price: 290,
    img: './images/item-5.png',
    desc: 'Gin Gordon´s, vermut dry, piel de limón, aceituna.'
  },
  {
    id: 12,
    title: 'Gin Tonic',
    category: 'Vademécum',
    price: 300,
    img: './images/item-3.png',
    desc: 'Gin Gordon´s, tónica, piel de limón (y/o tus botánicos favoritos).'
  },
  {
    id: 13,
    title: 'God Father',
    category: 'Vademécum',
    price: 320,
    img: './images/item-1.png',
    desc: 'Johnnie Walker Red label y licor de amaretto'
  },
  {
    id: 14,
    title: 'Hanky Panky',
    category: 'Vademécum',
    price: 300,
    img: './images/item-5.png',
    desc: 'Gin Gordon´s, vermut rosso, fernet y twist de naranja.'
  },
  {
    id: 15,
    title: 'Long island ice tea',
    category: 'Vademécum',
    price: 380,
    img: './images/item-4.png',
    desc: 'Gin Gordon´s, tequila, vodka Smirnoff, ron blanco, triple sec, almíbar, jugo de limón, gaseosa cola, slice de limón.'
  },
  {
    id: 16,
    title: 'Manhattan',
    category: 'Vademécum',
    price: 360,
    img: './images/item-5.png',
    desc: 'Whiskey, vermut rosso, bitter aromático y cereza.'
  },
  {
    id: 17,
    title: 'Margarita',
    category: 'Vademécum',
    price: 290,
    img: './images/item-5.png',
    desc: 'Tequila, triple sec, jugo de lima, almíbar.'
  },
  {
    id: 18,
    title: 'Martínez',
    category: 'Vademécum',
    price: 290,
    img: './images/item-5.png',
    desc: 'Gin Gordon’s, vermut dry, maraschino, bitter aromático, piel de lima.'
  },
  {
    id: 19,
    title: 'Mojito',
    category: 'Vademécum',
    price: 300,
    img: './images/item-8.png',
    desc: 'Ron blanco, lima, almíbar, menta, soda. '
  },
  {
    id: 20,
    title: 'Moscow Mule',
    category: 'Vademécum',
    price: 290,
    img: './images/item-1.png',
    desc: 'Vodka Smirnoff, jugo de lima, ginger ale.'
  },
  {
    id: 21,
    title: 'Negroni',
    category: 'Vademécum',
    price: 290,
    img: './images/item-1.png',
    desc: 'Gin Gordon’s, bitter rojo, vermut rosso.'
  },
  {
    id: 22,
    title: 'Old Fashioned',
    category: 'Vademécum',
    price: 360,
    img: './images/item-1.png',
    desc: 'Whiskey, bitter aromático, azúcar, slice de naranja, cereza.'
  },
  {
    id: 23,
    title: 'Paloma',
    category: 'Vademécum',
    price: 300,
    img: './images/item-2.png',
    desc: 'Tequila, jugo de lima, pomelo.'
  },
  {
    id: 24,
    title: 'Penicillin',
    category: 'Vademécum',
    price: 290,
    img: './images/item-1.png',
    desc: 'Whisky escocés, jugo de limón, jengibre, miel.'
  },
  {
    id: 25,
    title: 'Piña colada',
    category: 'Vademécum',
    price: 290,
    img: './images/item-1.png',
    desc: 'Ron blanco, ananá, crema de coco, lima, almíbar.'
  },
  {
    id: 26,
    title: 'Pisco sour',
    category: 'Vademécum',
    price: 260,
    img: './images/item-5.png',
    desc: 'Pisco, Jugo de lima, almíbar, clara de huevo, bitter’s.'
  },
  {
    id: 27,
    title: 'Presidente',
    category: 'Vademécum',
    price: 260,
    img: './images/item-5.png',
    desc: 'Ron blanco, vermut bianco, triple sec, granadina, piel de naranja.'
  },
  {
    id: 28,
    title: 'Ramoz Gin Fizz',
    category: 'Vademécum',
    price: 380,
    img: './images/item-1.png',
    desc: 'Gin Gordon’s, almíbar, jugo de lima, jugo de limón, crema, clara de huevo, dashes de agua de azahar, vainilla, soda, piel de naranja.'
  },
  {
    id: 29,
    title: 'Rob Roy',
    category: 'Vademécum',
    price: 300,
    img: './images/item-5.png',
    desc: 'Johnnie Walker Red Label, vermut rosso, bitter aromático y cereza.'
  },
  {
    id: 30,
    title: 'Sazerac',
    category: 'Vademécum',
    price: 290,
    img: './images/item-1.png',
    desc: 'Coñac, absenta, almíbar, bitter aromático, piel de limón.'
  },
  {
    id: 31,
    title: 'Sex on the Beach',
    category: 'Vademécum',
    price: 320,
    img: './images/item-4.png',
    desc: 'Vodka Smirnoff, Licor de Durazno, Jugo de lima, Jugo de naranja, arándanos y almíbar.'
  },
  {
    id: 32,
    title: 'Spritz',
    category: 'Vademécum',
    price: 280,
    img: './images/item-2.png',
    desc: 'Aperol Spritz, espumante, soda, rodaja de naranja.'
  },
  {
    id: 33,
    title: 'T.N.T.',
    category: 'Vademécum',
    price: 330,
    img: './images/item-3.png',
    desc: 'Tequila, agua tónica, piel de limón.'
  },
  {
    id: 34,
    title: 'Tom Collins',
    category: 'Vademécum',
    price: 350,
    img: './images/item-4.png',
    desc: 'Gin Old Tom, Jugo de limón, azúcar, soda, bitter.'
  },
  {
    id: 35,
    title: 'Wiskey sour',
    category: 'Vademécum',
    price: 400,
    img: './images/item-1.png',
    desc: 'Whiskey bourbon, jugo de limón, almíbar.'
  },
  {
    id: 36,
    title: 'White lady',
    category: 'Vademécum',
    price: 280,
    img: './images/item-5.png',
    desc: 'Gin Gordon’s, triple sec, jugo de limón, piel de limón.'
  },
  {
    id: 37,
    title: 'White russian',
    category: 'Vademécum',
    price: 320,
    img: './images/item-1.png',
    desc: 'Vodka Smirnoff, Borghetti, crema, granos de café.'
  },
  {
    id: 38,
    title: 'Rook (Br. Maximiliano Aguirre)',
    category: 'Vademécum',
    price: 350,
    img: './images/item-5.png',
    desc: 'Ron añejo, Borghetti, amaretto, malibu, crema y cacao.'
  },
  {
    id: 39,
    title: 'Elixir',
    category: 'Fórmulas-magistrales',
    price: 330,
    img: './images/item-5.png',
    desc: 'Absenta, coñac, miel, jugo de mandarina, jugo de lima, aquafaba, ahumado.'
  },
  {
    id: 40,
    title: 'Dr. Silvyus',
    category: 'Fórmulas-magistrales',
    price: 310,
    img: './images/item-8.png',
    desc: 'Branca menta, ginebra, punt e mes, jugo de naranja, jugo de lima, orange bitter, pimienta.'
  },
  {
    id: 41,
    title: 'Serendipity',
    category: 'Fórmulas-magistrales',
    price: 390,
    img: './images/item-5.png',
    desc: 'Gin Gordon’s, hesperidina, licor de cassis, jugo de naranja y lima.'
  },
  {
    id: 42,
    title: 'Hechizo de las 100 primaveras',
    category: 'Fórmulas-magistrales',
    price: 330,
    img: './images/item-5.png',
    desc: 'Gin Gordon’s, liquore Strega, jugo de limón, naranja, azahar, jengibre'
  },
  {
    id: 43,
    title: 'Electuario',
    category: 'Fórmulas-magistrales',
    price: 290,
    img: './images/item-1.png',
    desc: 'Absenta, Pineral, jugo de naranja, almíbar de miel.'
  },
  {
    id: 44,
    title: 'Diga 33',
    category: 'Fórmulas-magistrales',
    price: 310,
    img: './images/item-5.png',
    desc: 'Grappa, apricot brandy, jugo de naranja.'
  },
  {
    id: 45,
    title: 'Clonazepam',
    category: 'Fórmulas-magistrales',
    price: 310,
    img: './images/item-1.png',
    desc: 'Gin Gordon’s, jengibre, jugo de limón, bitter de naranja, slice de pepino.'
  },
  {
    id: 46,
    title: 'Aspirineta',
    category: 'Fórmulas-magistrales',
    price: 310,
    img: './images/item-1.png',
    desc: 'Whisky, almíbar, Jugo de naranja, bitter aromático, piel de naranja.'
  },
  {
    id: 47,
    title: '2 cada 8hs',
    category: 'Fórmulas-magistrales',
    price: 330,
    img: './images/item-7.png',
    desc: 'Ron blanco, vermut bianco, almíbar de miel, jugo de naranja, lima.'
  },
  {
    id: 48,
    title: 'Jarabe para la tos',
    category: 'Fórmulas-magistrales',
    price: 330,
    img: './images/item-1.png',
    desc: 'Tequila, licor de cassis, pomelo, lima, menta.'
  },
  {
    id: 49,
    title: 'Terapia de media noche',
    category: 'Fórmulas-magistrales',
    price: 350,
    img: './images/item-2.png',
    desc: 'Los intocables Malbec, Whisky Escocés, Triple sec, Punt e mes, Jugo de naranja, lima, almíbar, cardamomo, clavo de olor, canela y menta.'
  },
  {
    id: 50,
    title: 'Valium',
    category: 'Fórmulas-magistrales',
    price: 350,
    img: './images/item-5.png',
    desc: 'Absenta, vermut bianco, Gin Gordon’s, truple sec, jugo de lima, aquafaba y anís estrellado.'
  },
  {
    id: 51,
    title: 'Ritalin',
    category: 'Fórmulas-magistrales',
    price: 350,
    img: './images/item-1.png',
    desc: 'Absenta,  Brandy, Almíbar de IPA, Jugo de naranja, bitter’s y twist de naranja.'
  },
  {
    id: 52,
    title: 'Remedio Escocés',
    category: 'Fórmulas-magistrales',
    price: 380,
    img: './images/item-1.png',
    desc: 'Johnnie Walker Red, almíbar de mascabo, canela y cayena, Jugo de limón, Piel de limón y canela.'
  },
  {
    id: 53,
    title: 'BBQ Chicken Tender´s',
    category: 'Comidas',
    price: 380,
    img: './images/item-1.png',
    desc: 'Tenders rebozados con salsa BBQ.'
  },
]
export default menu;