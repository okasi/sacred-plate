import type { BloodType, BloodTypeInfo } from '@/types';

export const bloodTypeData: Record<BloodType, BloodTypeInfo> = {
  A: {
    type: 'A',
    traits: ['Organized', 'Sensitive', 'Responsible', 'Perfectionist', 'Cooperative', 'Empathetic'],
    description: 'Type A individuals thrive on structure and harmony. Your digestive system favors plant-based foods and responds well to calm, mindful eating practices. You benefit from foods that support your sensitive nature and promote inner balance.',
    koreanPersonality: {
      title: 'The Sensitive Perfectionist',
      traits: ['Considerate', 'Loyal', 'Patient', 'Creative', 'Reserved'],
      description: 'In Korean blood type personality theory, Type A individuals are seen as sensitive souls who value harmony and cooperation. You are thoughtful, reliable, and often put others before yourself. You prefer peaceful environments and may be introverted.'
    },
    foods: {
      highlyBeneficial: [
        'Fish (salmon, sardines, cod)',
        'Vegetables (especially leafy greens)',
        'Whole grains (rice, oats, quinoa)',
        'Legumes (lentils, beans)',
        'Fruits (berries, apples, pears)',
        'Olive oil',
        'Soy products',
        'Green tea'
      ],
      neutral: [
        'Chicken',
        'Turkey',
        'Eggs',
        'Yogurt',
        'Nuts and seeds',
        'Most vegetables',
        'Most fruits'
      ],
      avoid: [
        'Red meat (beef, pork)',
        'Dairy (milk, cheese)',
        'Wheat products',
        'Corn',
        'Tomatoes',
        'Eggplant',
        'Peanuts',
        'Processed sugars'
      ]
    },
    exercise: ['Yoga', 'Tai chi', 'Walking', 'Swimming', 'Gentle cycling'],
    macros: { protein: 20, carbs: 55, fats: 25 }
  },
  B: {
    type: 'B',
    traits: ['Creative', 'Passionate', 'Independent', 'Flexible', 'Optimistic', 'Individualistic'],
    description: 'Type B individuals have a robust digestive system that handles variety well. You thrive on diverse, balanced meals and benefit from foods that support your creative, active lifestyle. Your metabolism appreciates moderate protein with plenty of vegetables.',
    koreanPersonality: {
      title: 'The Passionate Individualist',
      traits: ['Creative', 'Passionate', 'Strong-willed', 'Optimistic', 'Independent'],
      description: 'In Korean theory, Type B personalities are passionate free spirits. You follow your own path, are highly creative, and can be very focused when interested. You value freedom and may resist rigid structures or expectations.'
    },
    foods: {
      highlyBeneficial: [
        'Lamb and mutton',
        'Rabbit',
        'Venison',
        'Fish (cod, salmon, halibut)',
        'Green vegetables',
        'Eggs',
        'Low-fat dairy',
        'Oats and millet',
        'Bananas and grapes'
      ],
      neutral: [
        'Turkey',
        'Beef (lean)',
        'Most vegetables',
        'Most fruits',
        'Rice',
        'Olive oil'
      ],
      avoid: [
        'Chicken',
        'Pork',
        'Shellfish',
        'Wheat',
        'Corn',
        'Lentils',
        'Tomatoes',
        'Sesame seeds'
      ]
    },
    exercise: ['Hiking', 'Cycling', 'Tennis', 'Martial arts', 'Dance', 'Moderate cardio'],
    macros: { protein: 25, carbs: 50, fats: 25 }
  },
  AB: {
    type: 'AB',
    traits: ['Rational', 'Adaptable', 'Diplomatic', 'Organized yet creative', 'Unique', 'Balanced'],
    description: 'Type AB is the rarest and most complex blood type, combining traits of both A and B. Your digestive system is sensitive but adaptable. You benefit from smaller, more frequent meals and a balanced approach that includes both plant and animal proteins in moderation.',
    koreanPersonality: {
      title: 'The Rational Diplomat',
      traits: ['Rational', 'Adaptable', 'Diplomatic', 'Unique', 'Complex'],
      description: 'Type AB is seen as the most rare and complex personality. You can be both rational and creative, organized yet flexible. You often serve as a mediator and can understand multiple perspectives. You may be seen as mysterious or hard to read.'
    },
    foods: {
      highlyBeneficial: [
        'Lamb and mutton',
        'Turkey',
        'Fish (tuna, cod, sardines)',
        'Dairy (yogurt, kefir)',
        'Tofu and tempeh',
        'Green vegetables',
        'Pineapple',
        'Lemons and limes',
        'Olive oil'
      ],
      neutral: [
        'Eggs',
        'Most vegetables',
        'Most fruits',
        'Rice and oats',
        'Nuts and seeds'
      ],
      avoid: [
        'Beef',
        'Chicken',
        'Pork',
        'Shellfish',
        'Corn',
        'Buckwheat',
        'Kidney beans',
        'Sesame seeds',
        'Peppers'
      ]
    },
    exercise: ['Yoga', 'Pilates', 'Swimming', 'Walking', 'Light cardio', 'Stretching'],
    macros: { protein: 22, carbs: 52, fats: 26 }
  },
  O: {
    type: 'O',
    traits: ['Confident', 'Leadership-oriented', 'Energetic', 'Practical', 'Determined', 'Athletic'],
    description: 'Type O is the oldest blood type with a digestive system optimized for protein. You thrive on lean meats, vegetables, and intense physical activity. Your metabolism benefits from a higher protein intake and regular exercise to maintain optimal energy.',
    koreanPersonality: {
      title: 'The Confident Leader',
      traits: ['Confident', 'Ambitious', 'Athletic', 'Natural leader', 'Resilient'],
      description: 'Type O personalities are seen as natural leaders. You are confident, ambitious, and often athletic. You tend to be resilient under pressure and have a strong presence. You may be seen as competitive and goal-oriented.'
    },
    foods: {
      highlyBeneficial: [
        'Lean red meat (beef, lamb)',
        'Fish (cod, halibut, salmon)',
        'Kale and spinach',
        'Broccoli',
        'Sea vegetables',
        'Iodized salt',
        'Walnuts and pumpkin seeds',
        'Figs and plums'
      ],
      neutral: [
        'Chicken',
        'Turkey',
        'Most vegetables',
        'Most fruits',
        'Eggs',
        'Rice'
      ],
      avoid: [
        'Wheat and gluten',
        'Corn',
        'Dairy (milk, cheese)',
        'Legumes (beans, lentils)',
        'Cabbage and cauliflower',
        'Brussels sprouts',
        'Mustard greens',
        'Oranges and tangerines'
      ]
    },
    exercise: ['High-intensity training', 'Running', 'Weight lifting', 'Competitive sports', 'Power activities'],
    macros: { protein: 35, carbs: 40, fats: 25 }
  }
};

export const koreanBloodTypePersonality = {
  A: {
    title: 'The Sensitive Perfectionist',
    traits: ['Considerate', 'Loyal', 'Patient', 'Creative', 'Reserved', 'Responsible'],
    description: 'Type A individuals are seen as sensitive souls who value harmony and cooperation. You are thoughtful, reliable, and often put others before yourself. You prefer peaceful environments and may be introverted.',
    compatibility: 'Best with Type O (complementary) or Type AB (understanding)',
    career: 'Excel in roles requiring attention to detail, creativity, and teamwork'
  },
  B: {
    title: 'The Passionate Individualist',
    traits: ['Creative', 'Passionate', 'Strong-willed', 'Optimistic', 'Independent', 'Curious'],
    description: 'Type B personalities are passionate free spirits who follow their own path. You are highly creative, can be very focused when interested, and value freedom. You may resist rigid structures or expectations.',
    compatibility: 'Best with Type AB (flexible) or Type O (grounding)',
    career: 'Thrive in creative fields, entrepreneurship, and roles allowing independence'
  },
  AB: {
    title: 'The Rational Diplomat',
    traits: ['Rational', 'Adaptable', 'Diplomatic', 'Unique', 'Complex', 'Balanced'],
    description: 'Type AB is the rarest personality type, combining traits of both A and B. You can be both rational and creative, organized yet flexible. You often serve as a mediator and can understand multiple perspectives.',
    compatibility: 'Best with Type AB (mutual understanding) or Type B (stimulating)',
    career: 'Excel in diplomacy, analysis, research, and roles requiring adaptability'
  },
  O: {
    title: 'The Confident Leader',
    traits: ['Confident', 'Ambitious', 'Athletic', 'Natural leader', 'Resilient', 'Goal-oriented'],
    description: 'Type O personalities are natural leaders. You are confident, ambitious, and often athletic. You tend to be resilient under pressure and have a strong presence. You may be seen as competitive and goal-oriented.',
    compatibility: 'Best with Type A (supportive) or Type O (mutual drive)',
    career: 'Thrive in leadership, management, sales, and competitive environments'
  }
};
