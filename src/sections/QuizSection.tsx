import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SacredRings, GlowOrb } from '@/components/SacredGeometry';
import { ChevronLeft } from 'lucide-react';
import { mbtiQuizQuestions, doshaQuizQuestions } from '@/data';
import type { BloodType } from '@/types';

interface QuizSectionProps {
  type: 'mbti' | 'dosha';
  userProfile: Partial<{
    name: string;
    birthDate: string;
    bloodType: BloodType;
  }>;
  onComplete: (answers: number[], bloodType?: string) => void;
  onBack: () => void;
  onProgressChange?: (details: { progress: number; label: string }) => void;
}

const AUTO_ADVANCE_DELAY = 377; // milliseconds

export function QuizSection({ type, userProfile, onComplete, onBack, onProgressChange }: QuizSectionProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedBloodType, setSelectedBloodType] = useState<BloodType | null>(userProfile.bloodType || null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const questions = type === 'mbti' ? mbtiQuizQuestions : doshaQuizQuestions;
  const totalSteps = type === 'mbti' ? questions.length + 1 : questions.length; // +1 for blood type selection in MBTI
  const isBloodTypeStep = type === 'mbti' && currentStep === 0;
  const questionIndex = type === 'mbti' ? currentStep - 1 : currentStep;
  const currentQuestion = questions[questionIndex];
  
  const progress = ((currentStep + 1) / totalSteps) * 100;

  useEffect(() => {
    if (!onProgressChange) {
      return;
    }

    const stepNumber = currentStep + 1;
    const label =
      type === 'mbti'
        ? isBloodTypeStep
          ? 'MBTI: blood type'
          : `MBTI: ${questionIndex + 1}/${questions.length}`
        : `Dosha: ${questionIndex + 1}/${questions.length}`;

    onProgressChange({
      progress,
      label: `${label} (${stepNumber}/${totalSteps})`,
    });
  }, [currentStep, isBloodTypeStep, onProgressChange, progress, questionIndex, questions.length, totalSteps, type]);

  const handleBloodTypeSelect = (bloodType: BloodType) => {
    if (isTransitioning) return;
    setSelectedBloodType(bloodType);
    // Auto-advance after delay
    setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(1);
        setIsTransitioning(false);
      }, AUTO_ADVANCE_DELAY);
    }, 50);
  };

  const handleAnswerSelect = (optionIndex: number) => {
    if (isTransitioning) return;
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
    // Auto-advance after delay
    setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        if (currentStep < totalSteps - 1) {
          setCurrentStep(currentStep + 1);
          setIsTransitioning(false);
        } else {
          if (type === 'mbti') {
            onComplete(newAnswers, selectedBloodType!);
          } else {
            onComplete(newAnswers);
          }
        }
      }, AUTO_ADVANCE_DELAY);
    }, 50);
  };

  const handleBack = () => {
    if (isTransitioning) return;
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10] via-[#0F1218] to-[#0B0D10]" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
        <GlowOrb size={500} />
      </div>
      
      {/* Sacred rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <SacredRings size={600} />
      </div>
      
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleBack}
        disabled={isTransitioning}
        className="absolute top-8 left-8 flex items-center gap-2 text-secondary-custom hover:text-gold transition-colors z-20 disabled:opacity-50"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="font-mono text-sm uppercase tracking-wider">Back</span>
      </motion.button>
      
      {/* Progress indicator */}
      <div className="absolute top-8 right-8 z-20">
        <span className="font-mono text-sm text-secondary-custom">
          Step {currentStep + 1} of {totalSteps}
        </span>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-2xl mx-4">
        {/* Progress bar */}
        <div className="progress-bar mb-8">
          <motion.div 
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <AnimatePresence mode="wait">
          {isBloodTypeStep ? (
            <motion.div
              key="bloodtype"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-10"
            >
              <div className="label-mono mb-4">Blood Type</div>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                What is your blood type?
              </h2>
              <p className="text-secondary-custom mb-8">
                Your blood type influences your optimal diet and exercise patterns according to both 
                Western and Korean blood type theories.
              </p>
              
              {/* Blood type options */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {(['A', 'B', 'AB', 'O'] as BloodType[]).map((type) => (
                  <motion.button
                    key={type}
                    whileHover={{ scale: isTransitioning ? 1 : 1.05 }}
                    whileTap={{ scale: isTransitioning ? 1 : 0.95 }}
                    onClick={() => handleBloodTypeSelect(type)}
                    disabled={isTransitioning}
                    className={`option-card py-10 text-center transition-all ${selectedBloodType === type ? 'selected ring-2 ring-gold' : ''} ${isTransitioning ? 'opacity-70' : ''}`}
                  >
                    <span className="text-6xl">
                      {type === 'A' && '🅰️'}
                      {type === 'B' && '🅱️'}
                      {type === 'AB' && '🆎'}
                      {type === 'O' && '🅾️'}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`question-${questionIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-10"
            >
              {/* Category label */}
              <div className="label-mono mb-4">{currentQuestion.category}</div>
              
              {/* Question */}
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-8">
                {currentQuestion.question}
              </h2>
              
              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ scale: isTransitioning ? 1 : 1.01 }}
                    whileTap={{ scale: isTransitioning ? 1 : 0.99 }}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={isTransitioning}
                    className={`option-card w-full text-left flex items-center gap-4 transition-all ${answers[questionIndex] === index ? 'selected ring-2 ring-gold' : ''} ${isTransitioning ? 'opacity-70' : ''}`}
                  >
                    <span className="text-2xl flex-shrink-0">{option.emoji}</span>
                    <span className="text-foreground">{option.text}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Navigation - Back button only */}
        <div className="flex justify-start mt-6">
          <button
            onClick={handleBack}
            disabled={isTransitioning}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-secondary-custom hover:text-foreground hover:border-white/20 transition-colors disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="font-mono text-sm uppercase">Back</span>
          </button>
        </div>
      </div>
    </section>
  );
}
