import type { WesternZodiac, ChineseZodiac, ZodiacInfo, ChineseZodiacInfo } from '@/types';

export const westernZodiacData: Record<WesternZodiac, ZodiacInfo> = {
  aries: {
    name: 'Aries',
    symbol: '♈',
    element: 'fire',
    traits: ['Energetic', 'Pioneering', 'Courageous', 'Impulsive', 'Passionate'],
    description: 'As the first sign of the zodiac, Aries embodies raw energy and initiative. You thrive on challenge and need foods that fuel your dynamic lifestyle without weighing you down.',
    foods: {
      recommended: ['Lean meats', 'Spinach', 'Tomatoes', 'Spicy foods', 'Citrus fruits', 'Whole grains'],
      limit: ['Heavy dairy', 'Excessive sugar', 'Overly processed foods', 'Too much salt']
    },
    cookingStyles: ['Quick sautéing', 'Grilling', 'Raw preparations', 'Stir-frying'],
    macros: { protein: 30, carbs: 40, fats: 30 }
  },
  taurus: {
    name: 'Taurus',
    symbol: '♉',
    element: 'earth',
    traits: ['Patient', 'Reliable', 'Sensual', 'Practical', 'Grounded'],
    description: 'Taurus is deeply connected to the physical world. You appreciate quality over quantity and find comfort in wholesome, nourishing foods that satisfy all senses.',
    foods: {
      recommended: ['Root vegetables', 'Berries', 'Nuts', 'Whole grains', 'Leafy greens', 'Lean proteins'],
      limit: ['Excessive rich foods', 'Too much starch', 'Artificial ingredients', 'Rushed meals']
    },
    cookingStyles: ['Slow cooking', 'Roasting', 'Baking', 'Mindful preparation'],
    macros: { protein: 25, carbs: 45, fats: 30 }
  },
  gemini: {
    name: 'Gemini',
    symbol: '♊',
    element: 'air',
    traits: ['Adaptable', 'Curious', 'Communicative', 'Quick-witted', 'Versatile'],
    description: 'Gemini needs variety and mental stimulation. Your diet should be diverse and interesting, with small, frequent meals that keep your energy balanced throughout the day.',
    foods: {
      recommended: ['Colorful vegetables', 'Lean proteins', 'Whole grains', 'Fresh herbs', 'Light soups', 'Nuts and seeds'],
      limit: ['Heavy meals', 'Excessive caffeine', 'Overly rich foods', 'Repetitive meals']
    },
    cookingStyles: ['Light steaming', 'Quick cooking', 'Raw dishes', 'Variety-focused'],
    macros: { protein: 25, carbs: 50, fats: 25 }
  },
  cancer: {
    name: 'Cancer',
    symbol: '♋',
    element: 'water',
    traits: ['Nurturing', 'Intuitive', 'Emotional', 'Protective', 'Home-loving'],
    description: 'Cancer is the nurturer of the zodiac. You find comfort in traditional, home-cooked meals that connect you to memory and emotional wellbeing.',
    foods: {
      recommended: ['Comfort foods', 'Seafood', 'Soups and stews', 'Whole grains', 'Dairy', 'Hydrating fruits'],
      limit: ['Overly spicy foods', 'Excessive salt', 'Processed foods', 'Emotional eating triggers']
    },
    cookingStyles: ['Slow simmering', 'Home-style cooking', 'One-pot meals', 'Traditional methods'],
    macros: { protein: 25, carbs: 45, fats: 30 }
  },
  leo: {
    name: 'Leo',
    symbol: '♌',
    element: 'fire',
    traits: ['Confident', 'Generous', 'Creative', 'Passionate', 'Natural leader'],
    description: 'Leo shines brightly and needs foods that support your vibrant energy. You appreciate beautiful presentation and generous portions that match your big heart.',
    foods: {
      recommended: ['Colorful foods', 'Lean meats', 'Citrus fruits', 'Golden spices', 'Heart-healthy fats', 'Antioxidant-rich foods'],
      limit: ['Boring presentations', 'Excessive alcohol', 'Heavy fried foods', 'Small portions']
    },
    cookingStyles: ['Dramatic presentation', 'Grilling', 'Roasting', 'Celebratory cooking'],
    macros: { protein: 30, carbs: 40, fats: 30 }
  },
  virgo: {
    name: 'Virgo',
    symbol: '♍',
    element: 'earth',
    traits: ['Analytical', 'Practical', 'Health-conscious', 'Detail-oriented', 'Service-minded'],
    description: 'Virgo seeks purity and efficiency. You thrive on clean, nutrient-dense foods prepared with precision and attention to digestive health.',
    foods: {
      recommended: ['Organic vegetables', 'Lean proteins', 'Whole grains', 'Fermented foods', 'Leafy greens', 'Seeds'],
      limit: ['Processed foods', 'Excessive sugar', 'Heavy fried foods', 'Artificial additives']
    },
    cookingStyles: ['Precise cooking', 'Meal prepping', 'Clean preparation', 'Nutrient-preserving methods'],
    macros: { protein: 30, carbs: 40, fats: 30 }
  },
  libra: {
    name: 'Libra',
    symbol: '♎',
    element: 'air',
    traits: ['Harmonious', 'Diplomatic', 'Aesthetic', 'Social', 'Balanced'],
    description: 'Libra seeks balance in all things. Your ideal diet is beautifully balanced with a variety of flavors, textures, and nutrients that promote inner harmony.',
    foods: {
      recommended: ['Balanced meals', 'Beautiful presentations', 'Variety of colors', 'Moderate portions', 'Fresh ingredients', 'Shared meals'],
      limit: ['Extreme diets', 'Eating alone', 'Unbalanced meals', 'Rushed eating']
    },
    cookingStyles: ['Balanced plating', 'Artistic presentation', 'Social cooking', 'Moderate techniques'],
    macros: { protein: 25, carbs: 45, fats: 30 }
  },
  scorpio: {
    name: 'Scorpio',
    symbol: '♏',
    element: 'water',
    traits: ['Intense', 'Passionate', 'Mysterious', 'Transformative', 'Deep'],
    description: 'Scorpio experiences life deeply. You benefit from foods that support detoxification and transformation, with bold flavors that match your intensity.',
    foods: {
      recommended: ['Detoxifying foods', 'Deep-colored vegetables', 'Lean proteins', 'Fermented foods', 'Spicy foods', 'Green tea'],
      limit: ['Excessive alcohol', 'Processed toxins', 'Emotional eating', 'Superficial meals']
    },
    cookingStyles: ['Intense flavors', 'Fermentation', 'Slow transformation', 'Deep cooking methods'],
    macros: { protein: 35, carbs: 35, fats: 30 }
  },
  sagittarius: {
    name: 'Sagittarius',
    symbol: '♐',
    element: 'fire',
    traits: ['Adventurous', 'Optimistic', 'Freedom-loving', 'Philosophical', 'Expansive'],
    description: 'Sagittarius craves adventure and expansion. Your diet should include international flavors and foods that support your active, exploratory lifestyle.',
    foods: {
      recommended: ['International cuisines', 'Lean proteins', 'Colorful vegetables', 'Whole grains', 'Exotic spices', 'Natural sugars'],
      limit: ['Restrictive diets', 'Boring routines', 'Heavy meals before activity', 'Excessive alcohol']
    },
    cookingStyles: ['Global cuisines', 'Outdoor cooking', 'Experimental', 'Adventurous flavors'],
    macros: { protein: 30, carbs: 45, fats: 25 }
  },
  capricorn: {
    name: 'Capricorn',
    symbol: '♑',
    element: 'earth',
    traits: ['Ambitious', 'Disciplined', 'Practical', 'Patient', 'Responsible'],
    description: 'Capricorn values structure and long-term results. You benefit from a disciplined approach to nutrition with traditional, time-tested foods that build lasting health.',
    foods: {
      recommended: ['Traditional foods', 'Bone broths', 'Root vegetables', 'Lean proteins', 'Whole grains', 'Calcium-rich foods'],
      limit: ['Quick fixes', 'Fad diets', 'Excessive sugar', 'Unstructured eating']
    },
    cookingStyles: ['Traditional methods', 'Slow cooking', 'Meal planning', 'Disciplined preparation'],
    macros: { protein: 30, carbs: 40, fats: 30 }
  },
  aquarius: {
    name: 'Aquarius',
    symbol: '♒',
    element: 'air',
    traits: ['Innovative', 'Independent', 'Humanitarian', 'Unconventional', 'Intellectual'],
    description: 'Aquarius marches to your own drum. You thrive on innovative, plant-forward diets that align with your values and support your active mind.',
    foods: {
      recommended: ['Plant-based proteins', 'Unique superfoods', 'Sustainable choices', 'Technology-assisted prep', 'Brain foods', 'Alkaline foods'],
      limit: ['Conventional restrictions', 'Unethical sources', 'Rigid rules', 'Outdated approaches']
    },
    cookingStyles: ['Innovative techniques', 'Plant-forward', 'Experimental', 'Future-focused'],
    macros: { protein: 25, carbs: 50, fats: 25 }
  },
  pisces: {
    name: 'Pisces',
    symbol: '♓',
    element: 'water',
    traits: ['Intuitive', 'Compassionate', 'Artistic', 'Dreamy', 'Spiritual'],
    description: 'Pisces is deeply sensitive and intuitive. You need gentle, calming foods that support your dreamy nature and help ground your ethereal energy.',
    foods: {
      recommended: ['Seafood', 'Mediterranean foods', 'Gentle spices', 'Hydrating foods', 'Dreamy presentations', 'Soul-comforting meals'],
      limit: ['Harsh stimulants', 'Excessive alcohol', 'Heavy toxins', 'Chaotic eating environments']
    },
    cookingStyles: ['Gentle cooking', 'Flowing presentations', 'Intuitive preparation', 'Soulful methods'],
    macros: { protein: 25, carbs: 45, fats: 30 }
  }
};

export const chineseZodiacData: Record<ChineseZodiac, ChineseZodiacInfo> = {
  rat: {
    name: 'Rat',
    animal: '🐀',
    element: 'water',
    yinYang: 'yang',
    traits: ['Quick-witted', 'Resourceful', 'Versatile', 'Charming', 'Intelligent'],
    description: 'The Rat is adaptable and resourceful. You benefit from foods that support mental agility and quick energy without crashes.',
    foods: {
      recommended: ['Brain foods', 'Small frequent meals', 'Nuts and seeds', 'Berries', 'Lean proteins', 'Whole grains'],
      limit: ['Heavy meals', 'Excessive sugar', 'Foods that cause brain fog', 'Irregular eating']
    }
  },
  ox: {
    name: 'Ox',
    animal: '🐂',
    element: 'earth',
    yinYang: 'yin',
    traits: ['Diligent', 'Dependable', 'Strong', 'Determined', 'Patient'],
    description: 'The Ox is steady and strong. You need substantial, grounding foods that provide sustained energy for your methodical approach to life.',
    foods: {
      recommended: ['Hearty meals', 'Root vegetables', 'Quality proteins', 'Whole grains', 'Bone broths', 'Substantial breakfasts'],
      limit: ['Skipping meals', 'Light snacks only', 'Excessive caffeine', 'Unstable blood sugar foods']
    }
  },
  tiger: {
    name: 'Tiger',
    animal: '🐅',
    element: 'wood',
    yinYang: 'yang',
    traits: ['Brave', 'Confident', 'Competitive', 'Charismatic', 'Passionate'],
    description: 'The Tiger is bold and energetic. You thrive on foods that match your intensity and support your active, competitive nature.',
    foods: {
      recommended: ['Energy-boosting foods', 'Lean meats', 'Iron-rich foods', 'Spicy foods', 'Antioxidants', 'Power foods'],
      limit: ['Energy-draining foods', 'Excessive alcohol', 'Heavy greasy foods', 'Low-nutrient options']
    }
  },
  rabbit: {
    name: 'Rabbit',
    animal: '🐇',
    element: 'wood',
    yinYang: 'yin',
    traits: ['Gentle', 'Elegant', 'Compassionate', 'Sensitive', 'Diplomatic'],
    description: 'The Rabbit is gentle and refined. You benefit from delicate, beautifully prepared foods in peaceful settings that honor your sensitive nature.',
    foods: {
      recommended: ['Gentle foods', 'Fresh vegetables', 'Light proteins', 'Calming teas', 'Beautiful presentations', 'Peaceful meals'],
      limit: ['Aggressive spices', 'Chaotic eating', 'Heavy foods', 'Harsh stimulants']
    }
  },
  dragon: {
    name: 'Dragon',
    animal: '🐉',
    element: 'earth',
    yinYang: 'yang',
    traits: ['Powerful', 'Ambitious', 'Charismatic', 'Lucky', 'Innovative'],
    description: 'The Dragon is powerful and magnetic. You need foods that support your dynamic energy and natural leadership abilities.',
    foods: {
      recommended: ['Premium foods', 'Energizing meals', 'Antioxidant-rich foods', 'Bold flavors', 'Status ingredients', 'Power proteins'],
      limit: ['Boring meals', 'Low energy foods', 'Excessive processed foods', 'Anything that dims your shine']
    }
  },
  snake: {
    name: 'Snake',
    animal: '🐍',
    element: 'fire',
    yinYang: 'yin',
    traits: ['Wise', 'Mysterious', 'Intuitive', 'Elegant', 'Strategic'],
    description: 'The Snake is wise and intuitive. You benefit from foods that support deep thinking and transformation, with elegant simplicity.',
    foods: {
      recommended: ['Wisdom foods', 'Detoxifying foods', 'Elegant presentations', 'Mediterranean diet', 'Brain-boosting foods', 'Transformation foods'],
      limit: ['Overly complicated meals', 'Toxic foods', 'Anything that clouds intuition', 'Heavy processed foods']
    }
  },
  horse: {
    name: 'Horse',
    animal: '🐴',
    element: 'fire',
    yinYang: 'yang',
    traits: ['Energetic', 'Independent', 'Adventurous', 'Cheerful', 'Quick'],
    description: 'The Horse is free-spirited and energetic. You need foods that fuel your active lifestyle without weighing you down.',
    foods: {
      recommended: ['High-energy foods', 'Quick meals', 'Portable nutrition', 'Lean proteins', 'Complex carbs', 'Hydrating foods'],
      limit: ['Heavy meals', 'Slow digestion foods', 'Restrictive eating', 'Anything that limits freedom']
    }
  },
  goat: {
    name: 'Goat',
    animal: '🐐',
    element: 'earth',
    yinYang: 'yin',
    traits: ['Gentle', 'Artistic', 'Creative', 'Compassionate', 'Peaceful'],
    description: 'The Goat is artistic and gentle. You thrive on beautiful, creative meals that nourish your soul and inspire your artistic nature.',
    foods: {
      recommended: ['Artistic presentations', 'Gentle flavors', 'Comfort foods', 'Creative cuisines', 'Soul-nourishing meals', 'Beautiful ingredients'],
      limit: ['Harsh flavors', 'Ugly presentations', 'Aggressive eating environments', 'Rushed meals']
    }
  },
  monkey: {
    name: 'Monkey',
    animal: '🐒',
    element: 'metal',
    yinYang: 'yang',
    traits: ['Clever', 'Playful', 'Adaptable', 'Curious', 'Intelligent'],
    description: 'The Monkey is clever and playful. You benefit from varied, interesting foods that keep you mentally engaged and physically agile.',
    foods: {
      recommended: ['Variety of foods', 'Brain-boosting nutrients', 'Playful presentations', 'International cuisines', 'Colorful meals', 'Fun healthy snacks'],
      limit: ['Boring routines', 'Repetitive meals', 'Overly serious food', 'Restrictive diets']
    }
  },
  rooster: {
    name: 'Rooster',
    animal: '🐓',
    element: 'metal',
    yinYang: 'yin',
    traits: ['Observant', 'Hardworking', 'Confident', 'Practical', 'Organized'],
    description: 'The Rooster is precise and organized. You thrive on structured, well-planned meals that support your efficient, detail-oriented nature.',
    foods: {
      recommended: ['Organized meal plans', 'Precise portions', 'High-quality proteins', 'Structured eating times', 'Clean foods', 'Efficient nutrition'],
      limit: ['Chaotic eating', 'Unplanned meals', 'Messy presentations', 'Disorganized approaches']
    }
  },
  dog: {
    name: 'Dog',
    animal: '🐕',
    element: 'earth',
    yinYang: 'yang',
    traits: ['Loyal', 'Honest', 'Caring', 'Fair', 'Protective'],
    description: 'The Dog is loyal and caring. You benefit from honest, wholesome foods shared with loved ones in a supportive environment.',
    foods: {
      recommended: ['Wholesome foods', 'Shared meals', 'Comfort foods', 'Trusted ingredients', 'Home cooking', 'Loyal favorites'],
      limit: ['Dishonest ingredients', 'Isolated eating', 'Overly fancy foods', 'Anything that breaks trust']
    }
  },
  pig: {
    name: 'Pig',
    animal: '🐖',
    element: 'water',
    yinYang: 'yin',
    traits: ['Compassionate', 'Generous', 'Diligent', 'Optimistic', 'Enjoys life'],
    description: 'The Pig enjoys the good things in life. You thrive on abundant, pleasurable meals that satisfy your generous, life-loving nature.',
    foods: {
      recommended: ['Abundant meals', 'Pleasurable eating', 'Rich flavors', 'Generous portions', 'Celebration foods', 'Satisfying textures'],
      limit: ['Restrictive portions', 'Guilt-inducing foods', 'Overly strict rules', 'Anything that diminishes joy']
    }
  }
};

export function getWesternZodiac(date: Date): WesternZodiac {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
  return 'pisces';
}

export function getChineseZodiac(year: number): ChineseZodiac {
  const animals: ChineseZodiac[] = [
    'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
    'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'
  ];
  return animals[(year - 4) % 12];
}
