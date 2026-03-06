import { motion } from 'framer-motion';
import { SacredRings, GlowOrb } from '@/components/SacredGeometry';
import type { UserProfile, SacredArchetype } from '@/types';
import { doshaData, westernZodiacData, chineseZodiacData, mbtiData, koreanBloodTypePersonality, bloodTypeData } from '@/data';
import { Sparkles, ChevronRight, Leaf, Flame, Droplets, Wind, Mountain } from 'lucide-react';

interface ResultSectionProps {
  result: SacredArchetype;
  userProfile: UserProfile;
  onViewMealPlan: () => void;
}

export function ResultSection({ result, userProfile, onViewMealPlan }: ResultSectionProps) {
  const { dominantDosha, westernZodiac, chineseZodiac, mbti, bloodType } = userProfile;
  
  const doshaPercentages = {
    vata: Math.round((userProfile.dosha.vata / 15) * 100),
    pitta: Math.round((userProfile.dosha.pitta / 15) * 100),
    kapha: Math.round((userProfile.dosha.kapha / 15) * 100)
  };

  const getElementIcon = (element: string) => {
    switch (element) {
      case 'fire': return <Flame className="w-4 h-4 text-orange-400" />;
      case 'water': return <Droplets className="w-4 h-4 text-blue-400" />;
      case 'air': return <Wind className="w-4 h-4 text-cyan-400" />;
      case 'earth': return <Mountain className="w-4 h-4 text-green-400" />;
      default: return null;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10] via-[#0F1218] to-[#0B0D10]" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
        <GlowOrb size={500} />
      </div>
      
      {/* Sacred rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <SacredRings size={600} />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl mx-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          {/* Archetype title */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-secondary-custom">
              Your Sacred Archetype
            </span>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            {result.name}
          </h1>
          
          <p className="text-secondary-custom text-lg max-w-xl mx-auto">
            {result.dietStyle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mt-5">
            {result.signatureThemes.map((theme) => (
              <span
                key={theme}
                className="px-3 py-1.5 rounded-full border border-gold/25 bg-gold/10 text-xs uppercase tracking-[0.14em] text-gold"
              >
                {theme}
              </span>
            ))}
          </div>
        </motion.div>
        
        {/* Profile cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
        >
          {/* Western Zodiac */}
          <div className="glass-card-light p-5">
            <div className="label-mono mb-2">Western Zodiac</div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{westernZodiacData[westernZodiac].symbol}</span>
              <div>
                <div className="font-heading text-lg text-foreground">{westernZodiacData[westernZodiac].name}</div>
                <div className="text-xs text-secondary-custom capitalize flex items-center gap-1">
                  {getElementIcon(westernZodiacData[westernZodiac].element)}
                  {westernZodiacData[westernZodiac].element} Element
                </div>
              </div>
            </div>
            <p className="text-xs text-secondary-custom mt-2 leading-relaxed">
              {westernZodiacData[westernZodiac].traits.slice(0, 3).join(' • ')}
            </p>
          </div>
          
          {/* Chinese Zodiac */}
          <div className="glass-card-light p-5">
            <div className="label-mono mb-2">Chinese Zodiac</div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{chineseZodiacData[chineseZodiac].animal}</span>
              <div>
                <div className="font-heading text-lg text-foreground">Year of the {chineseZodiacData[chineseZodiac].name}</div>
                <div className="text-xs text-secondary-custom capitalize">
                  {chineseZodiacData[chineseZodiac].element} · {chineseZodiacData[chineseZodiac].yinYang}
                </div>
              </div>
            </div>
            <p className="text-xs text-secondary-custom mt-2 leading-relaxed">
              {chineseZodiacData[chineseZodiac].traits.slice(0, 3).join(' • ')}
            </p>
          </div>
          
          {/* Blood Type */}
          <div className="glass-card-light p-5">
            <div className="label-mono mb-2">Blood Type</div>
            <div className="flex items-center gap-3">
              <span className="font-heading text-3xl text-gold">{bloodType}</span>
              <div>
                <div className="font-heading text-lg text-foreground">{koreanBloodTypePersonality[bloodType].title}</div>
                <div className="text-xs text-secondary-custom">Korean Theory</div>
              </div>
            </div>
            <p className="text-xs text-secondary-custom mt-2 leading-relaxed">
              {bloodTypeData[bloodType].traits.slice(0, 3).join(' • ')}
            </p>
          </div>
          
          {/* MBTI */}
          <div className="glass-card-light p-5">
            <div className="label-mono mb-2">Personality Type</div>
            <div>
              <div className="font-heading text-xl text-foreground">{mbti}</div>
              <div className="text-xs text-gold">{mbtiData[mbti].name}</div>
            </div>
            <p className="text-xs text-secondary-custom mt-2 leading-relaxed">
              {mbtiData[mbti].traits.slice(0, 3).join(' • ')}
            </p>
          </div>
          
          {/* Dosha */}
          <div className="glass-card-light p-5 md:col-span-2 lg:col-span-1">
            <div className="label-mono mb-2">Dosha Balance</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs w-12">Vata</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-400/70 rounded-full"
                    style={{ width: `${doshaPercentages.vata}%` }}
                  />
                </div>
                <span className="text-xs w-8 text-right">{doshaPercentages.vata}%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs w-12">Pitta</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-orange-400/70 rounded-full"
                    style={{ width: `${doshaPercentages.pitta}%` }}
                  />
                </div>
                <span className="text-xs w-8 text-right">{doshaPercentages.pitta}%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs w-12">Kapha</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-400/70 rounded-full"
                    style={{ width: `${doshaPercentages.kapha}%` }}
                  />
                </div>
                <span className="text-xs w-8 text-right">{doshaPercentages.kapha}%</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gold">
              Dominant: {doshaData[dominantDosha].name} ({doshaData[dominantDosha].elements})
            </div>
          </div>
        </motion.div>

        {/* How Each Factor Shapes Your Plate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card p-6 md:p-8 mb-10"
        >
          <h3 className="font-heading text-xl text-foreground mb-6">How Each Factor Shapes Your Sacred Sync</h3>
          
          <div className="space-y-5">
            {/* Dosha influence */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <span className="text-gold text-lg">✦</span>
              </div>
              <div>
                <h4 className="font-heading text-gold text-sm mb-1">Your {doshaData[dominantDosha].name} Dosha (30% influence)</h4>
                <p className="text-secondary-custom text-sm leading-relaxed">
                  As a {doshaData[dominantDosha].name}-dominant individual, your body thrives on {doshaData[dominantDosha].foods.favor.slice(0, 3).join(', ')}. 
                  Your {doshaData[dominantDosha].qualities.slice(0, 3).join(', ')} nature calls for {doshaData[dominantDosha].mealTiming.toLowerCase()}.
                </p>
              </div>
            </div>

            {/* Blood Type influence */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <span className="text-gold text-lg">🩸</span>
              </div>
              <div>
                <h4 className="font-heading text-gold text-sm mb-1">Your Type {bloodType} Blood (20% influence)</h4>
                <p className="text-secondary-custom text-sm leading-relaxed">
                  Type {bloodType} individuals benefit most from {bloodTypeData[bloodType].foods.highlyBeneficial.slice(0, 3).join(', ')}. 
                  Your {koreanBloodTypePersonality[bloodType].traits.slice(0, 2).join(', ')} personality aligns with {bloodTypeData[bloodType].exercise.slice(0, 2).join(' and ')}.
                </p>
              </div>
            </div>

            {/* MBTI influence */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <span className="text-gold text-lg">🧠</span>
              </div>
              <div>
                <h4 className="font-heading text-gold text-sm mb-1">Your {mbti} Personality (15% influence)</h4>
                <p className="text-secondary-custom text-sm leading-relaxed">
                  As {mbtiData[mbti].name}, you naturally {mbtiData[mbti].eatingHabits[0].toLowerCase()}. 
                  Your ideal approach: {mbtiData[mbti].dietStyle}
                </p>
              </div>
            </div>

            {/* Western Zodiac influence */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <span className="text-gold text-lg">☉</span>
              </div>
              <div>
                <h4 className="font-heading text-gold text-sm mb-1">Your {westernZodiacData[westernZodiac].name} Sun Sign (15% influence)</h4>
                <p className="text-secondary-custom text-sm leading-relaxed">
                  Born under the {westernZodiacData[westernZodiac].element} sign of {westernZodiacData[westernZodiac].name}, 
                  you resonate with {westernZodiacData[westernZodiac].foods.recommended.slice(0, 3).join(', ')}. 
                  {westernZodiacData[westernZodiac].cookingStyles[0]} brings out your best.
                </p>
              </div>
            </div>

            {/* Chinese Zodiac influence */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <span className="text-gold text-lg">🐉</span>
              </div>
              <div>
                <h4 className="font-heading text-gold text-sm mb-1">Your Year of the {chineseZodiacData[chineseZodiac].name} (10% influence)</h4>
                <p className="text-secondary-custom text-sm leading-relaxed">
                  The {chineseZodiacData[chineseZodiac].element} {chineseZodiacData[chineseZodiac].name} brings {chineseZodiacData[chineseZodiac].traits.slice(0, 2).join(' and ')} energy to your nutrition. 
                  You benefit from {chineseZodiacData[chineseZodiac].foods.recommended.slice(0, 3).join(', ')}.
                </p>
              </div>
            </div>

            {/* Korean Blood Type influence */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <span className="text-gold text-lg">🇰🇷</span>
              </div>
              <div>
                <h4 className="font-heading text-gold text-sm mb-1">Your Korean Blood Type Profile (10% influence)</h4>
                <p className="text-secondary-custom text-sm leading-relaxed">
                  In Korean theory, Type {bloodType} represents the {koreanBloodTypePersonality[bloodType].title}. 
                  Your {koreanBloodTypePersonality[bloodType].traits.slice(0, 3).join(', ')} nature 
                  thrives in {koreanBloodTypePersonality[bloodType].career.split(' ').slice(0, 5).join(' ')}...
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card p-6 md:p-8 mb-10"
        >
          <h3 className="font-heading text-xl text-foreground mb-4">Your Sacred Story</h3>
          <p className="text-secondary-custom leading-relaxed whitespace-pre-line">
            {result.narrative}
          </p>
        </motion.div>
        
        {/* Macros */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-card-light p-6 mb-10"
        >
          <h3 className="font-heading text-lg text-foreground mb-3">Meal Rhythm That Fits You</h3>
          <p className="text-secondary-custom leading-relaxed">
            {result.mealRhythm}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="glass-card-light p-6 mb-10"
        >
          <h3 className="font-heading text-lg text-foreground mb-4">Your Optimal Nutrition</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="font-heading text-2xl text-gold">{result.macros.protein}%</div>
              <div className="text-xs text-secondary-custom uppercase tracking-wider">Protein</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-2xl text-gold">{result.macros.carbs}%</div>
              <div className="text-xs text-secondary-custom uppercase tracking-wider">Carbs</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-2xl text-gold">{result.macros.fats}%</div>
              <div className="text-xs text-secondary-custom uppercase tracking-wider">Fats</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-2xl text-gold">{result.macros.fiber}g</div>
              <div className="text-xs text-secondary-custom uppercase tracking-wider">Fiber</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="font-heading text-sm text-gold">{result.macros.hydration}</div>
              <div className="text-xs text-secondary-custom uppercase tracking-wider">Hydration</div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-center"
        >
          <button
            onClick={onViewMealPlan}
            className="btn-gold-filled inline-flex items-center gap-3"
          >
            <Leaf className="w-5 h-5" />
            <span>View Your Sacred Ingredients</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
