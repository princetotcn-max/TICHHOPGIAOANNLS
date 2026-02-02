
export enum CompetencyDomain {
  INFORMATION = 'Khai thác dữ liệu và thông tin',
  COMMUNICATION = 'Giao tiếp và hợp tác',
  CREATION = 'Sáng tạo nội dung số',
  SAFETY = 'An toàn và bảo mật',
  PROBLEM_SOLVING = 'Giải quyết vấn đề',
  SELF_DEVELOPMENT = 'Học tập và phát triển'
}

export interface CompetencyLevel {
  level: number;
  description: string;
}

export interface Competency {
  id: string;
  domain: CompetencyDomain;
  title: string;
  description: string;
  levels: CompetencyLevel[];
}

export interface IntegratedLessonPlan {
  originalTopic: string;
  integratedContent: string;
  metadata: {
    competenciesTargeted: string[];
    gradeLevel: string;
  };
}

export interface LessonAnalysis {
  topic: string;
  suggestedCompetencies: {
    domain: CompetencyDomain;
    reasoning: string;
    activitySuggestion: string;
  }[];
  overallDigitalStrategy: string;
}
