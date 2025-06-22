
export enum ContentItemType {
  HEADING1 = 'h1', // Chapter Title (used contextually)
  HEADING2 = 'h2', // Section Title (used contextually)
  HEADING3 = 'h3', // Sub-heading within section content
  HEADING4 = 'h4', // Sub-sub-heading within section content
  PARAGRAPH = 'p',
  LIST = 'list', // Represents a <ul>
  TABLE = 'table',
  FORMULA = 'formula', // For LaTeX math formulas
  CHART = 'chart', // For Chart.js data
  DIAGRAM = 'diagram', // For Mermaid.js syntax
  KEY_TAKEAWAYS = 'key_takeaways', // For AI-generated summary points
  REVIEW_QUESTION = 'review_question', // For AI-generated review questions
  PRACTICAL_SCENARIO = 'practical_scenario', // For AI-generated "what-if" or application tips
  FURTHER_STUDY = 'further_study', // For AI-generated links to external resources
  INTERACTIVE_SCENARIO = 'interactive_scenario', // For gamified learning modules
  PRACTICAL_EXERCISE = 'practical_exercise', // For structured hands-on exercises
  PHISHING_SIMULATOR = 'phishing_simulator', // For Phishing Email Simulator
  PASSWORD_STRENGTH_CHECKER = 'password_strength_checker', // For Password Strength Checker
  WIFI_SIMULATOR = 'wifi_simulator', // For Public Wi-Fi Simulator
  CAUTIONARY_TALE = 'cautionary_tale', // New: For brief real-world examples
  INTERACTIVE_CONCEPT = 'interactive_concept', // New: For clickable concept explanations (e.g., CIA Triad)
  THREAT_EXPLAINER = 'threat_explainer', // New: For step-by-step threat explanations
  ACTIONABLE_CHECKLIST = 'actionable_checklist', // New: For "My Security Dashboard" style items
  MICRO_LEARNING_TIP = 'micro_learning_tip', // New: For short tips between sections/chapters
  END_OF_CHAPTER_ACTIONS = 'end_of_chapter_actions', // New: For actionable "3 Things to Do Now"
  FLASHCARD_SET = 'flashcard_set' // New: For interactive flashcards
}

export interface TableRowData {
  [key: string]: string | number; // Cell values, keys are header names
}

export interface TableData {
  headers: string[];
  rows: TableRowData[];
  caption?: string;
}

export interface ChartDataset {
  label:string;
  data: number[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
  fill?: boolean;
  // Add other Chart.js dataset properties as needed
}

export interface ChartDataType { // Renamed to avoid conflict with ContentItemType.CHART
  type: 'bar' | 'line' | 'pie' | 'doughnut' | 'radar' | 'polarArea'; // Supported chart types
  labels: string[];
  datasets: ChartDataset[];
  options?: Record<string, any>; // Chart.js options
  title?: string; // Optional title for the chart
}

export interface ReviewQuestionItem {
  question: string;
  options?: string[]; // For multiple choice
  answer: string; // Could be the letter for MC or the direct answer for short answer
  explanation?: string; // Optional explanation for the answer
}

export interface PracticalScenarioItem {
  description: string;
  guidance?: string[]; // Optional bullet points for "things to consider" or "hints"
}

export interface FurtherStudyItem {
  title: string;
  link?: string;
  description: string;
}

export interface InteractiveScenarioChoice {
  id: string; // e.g., "action1"
  text: string; // Text on the button
  feedback: string; // Feedback to show the user
  isCorrect: boolean; // Marks the "winning" choice
  feedbackType?: 'success' | 'warning' | 'error'; // For styling feedback
}

export interface InteractiveScenarioData {
  title: string;
  description: string; // The scenario setup
  choices: InteractiveScenarioChoice[];
  successMessage: string; // Overall success message if isCorrect choice is made
}

export interface PracticalExerciseTask {
  id: string; // e.g., "task-1"
  description: string; // Detailed description of the task
  details?: string; // Optional: further clarification or sub-steps for the task
  // completed?: boolean; // Optional: for user self-tracking, not implemented in this pass
}

export interface PracticalExerciseData {
  title: string;
  introduction: string; // Brief intro to the exercise
  tasks: PracticalExerciseTask[]; // List of tasks
  expectedOutcome: string; // What the user should achieve or observe
  notes?: string; // Any additional notes, hints, or warnings
}

// --- Phishing Email Simulator Types ---
export interface PhishingEmailItem {
  id: string;
  sender: string;
  subject: string;
  bodyPreview: string; // Short snippet
  fullBody?: string; // Optional full body for a modal display
  isPhishing: boolean;
  feedbackCorrect: string;
  feedbackIncorrect: string;
  clues?: string[]; // Specific clues if it's a phish
}

export interface PhishingSimulatorData {
  title: string;
  introduction: string;
  emails: PhishingEmailItem[];
  completionMessage: string; // Message when all phishing emails identified or all emails assessed
}

// --- Password Strength Checker Types ---
export interface PasswordCriterion {
  id: string;
  regex: string; // Regex to test against
  message: string; // Tip associated with this criterion (e.g., "Add a number")
  strengthScore: number; // How much this criterion adds/subtracts from strength
  isMet?: boolean; // For UI to show if criterion is met
}

export interface PasswordStrengthCheckerData {
  title: string;
  disclaimer: string;
  criteria: PasswordCriterion[]; // Define criteria for strength evaluation
  // Additional config like minLength can be added here
}

// --- Public Wi-Fi Simulator Types ---
export interface WifiNetworkChoice {
  id: string;
  ssid: string;
  securityType: string; // e.g., "Open", "WEP", "WPA2-PSK", "WPA3-SAE", "Captive Portal"
  isRecommended: boolean; // Is this a good choice? (can be more nuanced than true/false)
  feedback: string; // Explanation of risks/benefits
  signalStrength?: number; // Optional: 1-5
}

export interface WifiSimulatorData {
  title: string;
  scenarioDescription: string;
  networks: WifiNetworkChoice[];
  generalAdvice?: string;
}

// --- New Content Item Types ---

export interface CautionaryTaleData {
  text: string;
  source?: string;
}

export interface InteractiveConceptItemDetail {
  title: string;
  explanation: string;
  example?: string;
}

export interface InteractiveConceptItem {
  id: string;
  term: string;
  brief: string;
  details: InteractiveConceptItemDetail[];
}

export interface InteractiveConceptData {
  title: string;
  introduction?: string;
  concepts: InteractiveConceptItem[];
}

export interface ThreatExplainerStep {
  title: string;
  description: string;
}
export interface ThreatExplainerData {
  title: string;
  introduction: string;
  steps: ThreatExplainerStep[];
}

export interface ActionableChecklistItem {
  id: string;
  text: string;
  guideLink?: string;
  guideLinkText?: string;
}
export interface ActionableChecklistData {
  title: string;
  items: ActionableChecklistItem[];
}

export interface MicroLearningTipData {
  tip: string;
}

export interface EndOfChapterActionItem {
  text: string;
  link?: string;
  linkText?: string;
}
export interface EndOfChapterActionsData {
  title: string;
  actions: EndOfChapterActionItem[];
}

export interface FlashcardItem {
  id: string;
  term: string;
  definition: string;
}
export interface FlashcardSetData {
  title: string;
  cards: FlashcardItem[];
}

// Main ContentItem interface extended
export interface ContentItem {
  type: ContentItemType;
  text?: string;       // For HEADING3, HEADING4, PARAGRAPH
  items?: string[];    // For LIST (array of list item texts), KEY_TAKEAWAYS
  tableData?: TableData; // For TABLE
  formulaString?: string; // For FORMULA (LaTeX string)
  chartData?: ChartDataType; // For CHART
  diagramDefinition?: string; // For DIAGRAM (Mermaid syntax)
  reviewQuestions?: ReviewQuestionItem[]; // For REVIEW_QUESTION
  scenario?: PracticalScenarioItem; // For PRACTICAL_SCENARIO
  furtherStudyItems?: FurtherStudyItem[]; // For FURTHER_STUDY
  interactiveScenarioData?: InteractiveScenarioData; // For INTERACTIVE_SCENARIO
  practicalExerciseData?: PracticalExerciseData; // For PRACTICAL_EXERCISE
  phishingSimulatorData?: PhishingSimulatorData; // For PHISHING_SIMULATOR
  passwordStrengthCheckerData?: PasswordStrengthCheckerData; // For PASSWORD_STRENGTH_CHECKER
  wifiSimulatorData?: WifiSimulatorData; // For WIFI_SIMULATOR
  cautionaryTaleData?: CautionaryTaleData; // New
  interactiveConceptData?: InteractiveConceptData; // New
  threatExplainerData?: ThreatExplainerData; // New
  actionableChecklistData?: ActionableChecklistData; // New
  microLearningTipData?: MicroLearningTipData; // New
  endOfChapterActionsData?: EndOfChapterActionsData; // New
  flashcardSetData?: FlashcardSetData; // New
}

export interface Section {
  id: string; // e.g., "1.1"
  title: string;
  content: ContentItem[];
}

export interface Chapter {
  id: string; // e.g., "chapter-1"
  title: string;
  shortTitle?: string; // For sidebar display if title is too long
  sections: Section[];
  endOfChapterContent?: ContentItem[]; // Optional: For tips or actions at the end of a chapter
}

export interface NotebookData {
  title: string;
  chapters: Chapter[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  isLoading?: boolean;
}

export interface MasteredSections {
  [sectionId: string]: boolean;
}

export type ChapterProgressStatus = 'Not Started' | 'In Progress' | 'All Sections Mastered';
