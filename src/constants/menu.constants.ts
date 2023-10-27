export type Category = {
  title: string;
  tag: string;
};

export type PrimaryCategory = {
  id: string;
  title: string;
  categories: Category[];
  image: any;
};

export type Recipe = {
  id: string;
  name: string;
  price: string;
  description: string;
  tags: string[];
  image?: any;
  sticker?: any;
};

export type Menu = {
  primaries: PrimaryCategory[];
  recipes: Recipe[];
};

export const MENU: Menu = {
  primaries: [
    {
      id: "drinks",
      title: "Drinks",
      categories: [
        {
          title: "Artisanal Elixirs",
          tag: "elixir"
        },
        {
          title: "Signature Cocktails",
          tag: "cocktail"
        },
        {
          title: "Fine Wine Selection",
          tag: "finewine"
        }
      ],
      image: require("src/assets/images/image-menu-drinks.png"),
    },
    {
      id: "mains",
      title: "Main Course",
      categories: [
        {
          title: "Global Inspirations",
          tag: "global",
        },
        {
          title: "Classic Creations",
          tag: "classic"
        }
      ],
      image: require("src/assets/images/image-menu-mains.png"),
    },
    {
      id: "desserts",
      title: "Desserts",
      categories: [
        {
          title: "Sweet Artistry",
          tag: "artistry"
        },
        {
          title: "Dessert Wines",
          tag: "dessertwine"
        }
      ],
      image: require("src/assets/images/image-menu-desserts.png"),
    }
  ],
  recipes: [
    {
      id: "MDRAE001",
      name: "Symphony of Citrus",
      price: "1500",
      description: "A refreshing blend of lemon, lime, and orange, kissed with a hint of mint.",
      tags: ["drinks", "elixir"],
      image: require("src/assets/images/recipes/drink-1.png"),
      sticker: require("src/assets/images/recipes/sticker-1.png")
    },
    {
      id: "MDRAE002",
      name: "Sunset Serenity",
      price: "1600",
      description: "A soothing mix of hibiscus, rose, and lavender, kissed with a touch of honey.",
      tags: ["drinks", "elixir"],
      image: require("src/assets/images/recipes/drink-2.png"),
      sticker: require("src/assets/images/recipes/sticker-2.png")
    },
    {
      id: "MDRAE003",
      name: "Berry Bliss",
      price: "1300",
      description: "A vibrant concoction of mixed berries and sparkling water.",
      tags: ["drinks", "elixir"],
      image: require("src/assets/images/recipes/drink-3.png"),
      sticker: require("src/assets/images/recipes/sticker-3.png")
    },
    {
      id: "MDRAE004",
      name: "Garden Infusion",
      price: "1400",
      description: "A garden-fresh medley of cucumber, basil, and elderflower.",
      tags: ["drinks", "elixir"],
      image: require("src/assets/images/recipes/drink-4.png"),
      sticker: require("src/assets/images/recipes/sticker-4.png")
    },
    {
      id: "MDRAE005",
      name: "Citrus Burst",
      price: "1200",
      description: "A zesty combination of grapefruit, lemon, and sparkling soda.",
      tags: ["drinks", "elixir"],
      image: require("src/assets/images/recipes/drink-5.png"),
      sticker: require("src/assets/images/recipes/sticker-5.png")
    },
    {
      id: "MDRSC001",
      name: "Gastronomic Fusion",
      price: "1800",
      description: "Our mixologist's masterpiece featuring a fusion of tropical flavors and premium spirits.",
      tags: ["drinks", "cocktail"],
      image: require("src/assets/images/recipes/drink-6.png"),
      sticker: require("src/assets/images/recipes/sticker-6.png")
    },
    {
      id: "MDRSC002",
      name: "Velvet Sunset",
      price: "1700",
      description: "A delightful blend of pomegranate and passion fruit with a velvety smooth finish.",
      tags: ["drinks", "cocktail"],
      image: require("src/assets/images/recipes/drink-7.png"),
      sticker: require("src/assets/images/recipes/sticker-7.png")
    },
    {
      id: "MDRSC003",
      name: "Mellow Mule",
      price: "1600",
      description: "A twist on the classic Moscow Mule with ginger, lime, and elderflower liqueur.",
      tags: ["drinks", "cocktail"],
      image: require("src/assets/images/recipes/drink-8.png"),
      sticker: require("src/assets/images/recipes/sticker-5.png")
    },
    {
      id: "MDRSC004",
      name: "Lavender Martini",
      price: "1700",
      description: "A fragrant martini infused with lavender, gin, and a touch of citrus.",
      tags: ["drinks", "cocktail"],
      image: require("src/assets/images/recipes/drink-9.png"),
      sticker: require("src/assets/images/recipes/sticker-9.png")
    },
    {
      id: "MDRSC005",
      name: "Golden Elixir",
      price: "1800",
      description: "A golden-hued cocktail with turmeric, pineapple, and rum.",
      tags: ["drinks", "cocktail"],
      image: require("src/assets/images/recipes/drink-10.png"),
      sticker: require("src/assets/images/recipes/sticker-1.png")
    },
    {
      id: "MDRFW001",
      name: "Red Elegance",
      price: "2500",
      description: "A curated collection of the finest red wines from around the world.",
      tags: ["drinks", "finewine"],
      image: require("src/assets/images/recipes/drink-11.png"),
    },
    {
      id: "MDRFW002",
      name: "White Symphony",
      price: "2400",
      description: "A harmonious selection of crisp white wines to complement your meal.",
      tags: ["drinks", "finewine"],
      image: require("src/assets/images/recipes/drink-12.png"),
    },
    {
      id: "MDRFW003",
      name: "Rosé Reverie",
      price: "2600",
      description: "A refreshing array of rosé wines with notes of berries and florals.",
      tags: ["drinks", "finewine"],
      image: require("src/assets/images/recipes/drink-13.png"),
    },
    {
      id: "MDRFW004",
      name: "Sparkling Stars",
      price: "2700",
      description: "A selection of sparkling wines and champagnes to elevate your dining experience.",
      tags: ["drinks", "finewine"],
      image: require("src/assets/images/recipes/drink-14.png"),
    },
    {
      id: "MDRFW005",
      name: "Reserve Cabernet",
      price: "2800",
      description: "A robust collection of aged Cabernet Sauvignon wines.",
      tags: ["drinks", "finewine"],
      image: require("src/assets/images/recipes/drink-15.png"),
    },
    {
      id: "MMCGI001",
      name: "Tandoori Delight",
      price: "2200",
      description: "Succulent chicken or paneer marinated in aromatic spices and slow-cooked in a traditional tandoor.",
      tags: ["mains", "global"],
      image: require("src/assets/images/recipes/mains-1.png"),
    },
    {
      id: "MMCGI002",
      name: "Mediterranean Medley",
      price: "2400",
      description: "Grilled lamb with a fusion of Mediterranean herbs and flavors, served with couscous.",
      tags: ["mains", "global"],
      image: require("src/assets/images/recipes/mains-2.png"),
    },
    {
      id: "MMCGI003",
      name: "Thai Basil Seafood",
      price: "2500",
      description: "A tantalizing stir-fry of mixed seafood with Thai basil and chili.",
      tags: ["mains", "global"],
      image: require("src/assets/images/recipes/mains-3.png"),
    },
    {
      id: "MMCGI004",
      name: "Osso Buco Milanese",
      price: "2800",
      description: "Braised veal shanks in a rich saffron-infused sauce, served with gremolata.",
      tags: ["mains", "global"],
      image: require("src/assets/images/recipes/mains-4.png"),
    },
    {
      id: "MMCGI005",
      name: "Japanese Teriyaki Salmon",
      price: "2600",
      description: "Grilled salmon glazed with sweet teriyaki sauce, served with jasmine rice.",
      tags: ["mains", "global"],
      image: require("src/assets/images/recipes/mains-5.png"),
    },
    {
      id: "MMCCC001",
      name: "Filet Mignon",
      price: "3200",
      description: "A perfectly grilled filet mignon, served with truffle-infused mashed potatoes and buttered asparagus.",
      tags: ["mains", "classic"],
      image: require("src/assets/images/recipes/mains-6.png"),
    },
    {
      id: "MMCCC002",
      name: "Shrimp Delight",
      price: "3500",
      description: "Grilled shrimp tail paired with a fresh lettuce salad served with square pieces of savory butter-poached chicken.",
      tags: ["mains", "classic"],
      image: require("src/assets/images/recipes/mains-7.png"),
    },
    {
      id: "MMCCC003",
      name: "Coq au Vin",
      price: "2600",
      description: "A traditional French dish of chicken slow-cooked in red wine with mushrooms and pearl onions.",
      tags: ["mains", "classic"],
      image: require("src/assets/images/recipes/mains-8.png"),
    },
    {
      id: "MMCCC004",
      name: "Beef Wellington",
      price: "3400",
      description: "Tender beef fillet encased in puff pastry with mushroom duxelles.",
      tags: ["mains", "classic"],
      image: require("src/assets/images/recipes/mains-9.png"),
    },
    {
      id: "MMCCC005",
      name: "Eggplant Parmesan",
      price: "2200",
      description: "Layers of breaded eggplant, marinara, and mozzarella, baked to perfection.",
      tags: ["mains", "classic"],
      image: require("src/assets/images/recipes/mains-10.png"),
    },
    {
      id: "MDESA001",
      name: "Decadent Chocolate Fondue",
      price: "1200",
      description: "A sinful indulgence of warm chocolate fondue with fresh fruit and marshmallows for dipping.",
      tags: ["desserts", "artistry"],
      image: require("src/assets/images/recipes/dessert-1.png"),
    },
    {
      id: "MDESA002",
      name: "Raspberry Symphony",
      price: "1000",
      description: "A harmonious melody of raspberry sorbet, fresh berries, and a hint of mint.",
      tags: ["desserts", "artistry"],
      image: require("src/assets/images/recipes/dessert-2.png"),
    },
    {
      id: "MDESA003",
      name: "Tiramisu Delight",
      price: "1100",
      description: "Classic Italian tiramisu with layers of coffee-soaked ladyfingers and mascarpone.",
      tags: ["desserts", "artistry"],
      image: require("src/assets/images/recipes/dessert-3.png"),
    },
    {
      id: "MDESA004",
      name: "Crème Brûlée",
      price: "1000",
      description: "A velvety vanilla custard with a caramelized sugar crust.",
      tags: ["desserts", "artistry"],
      image: require("src/assets/images/recipes/dessert-4.png"),
    },
    {
      id: "MDESA005",
      name: "Mango Tango",
      price: "1200",
      description: "Fresh mango mousse served with a mango coulis and whipped cream.",
      tags: ["desserts", "artistry"],
      image: require("src/assets/images/recipes/dessert-5.png"),
    },
    {
      id: "MDEDW001",
      name: "Dessert Wine Flight",
      price: "1500",
      description: "A curated selection of sweet dessert wines to elevate your sweet endings.",
      tags: ["desserts", "dessertwine"],
      image: require("src/assets/images/recipes/dessert-6.png"),
    },
    {
      id: "MDEDW002",
      name: "Late Harvest Riesling",
      price: "1400",
      description: "A luscious dessert wine with honeyed notes and apricot.",
      tags: ["desserts", "dessertwine"],
      image: require("src/assets/images/recipes/dessert-7.png"),
    },
    {
      id: "MDEDW003",
      name: "Port Wine Selection",
      price: "1600",
      description: "A variety of aged port wines with flavors of dried fruits and nuts.",
      tags: ["desserts", "dessertwine"],
      image: require("src/assets/images/recipes/dessert-8.png"),
    },
    {
      id: "MDEDW004",
      name: "Moscato d'Asti",
      price: "1500",
      description: "A sparkling and sweet Italian wine with floral and peachy aromas.",
      tags: ["desserts", "dessertwine"],
      image: require("src/assets/images/recipes/dessert-9.png"),
    },
    {
      id: "MDEDW005",
      name: "Sauternes",
      price: "1700",
      description: "A French sweet wine with notes of honey, apricot, and citrus.",
      tags: ["desserts", "dessertwine"],
      image: require("src/assets/images/recipes/dessert-10.png"),
    }
  ]  
};