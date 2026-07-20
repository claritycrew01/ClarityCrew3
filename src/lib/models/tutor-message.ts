export interface TutorMessage {
  id: string;
  role: "user" | "tutor";
  text: string;
  contentId?: string;
  timestamp: number;
}

export interface TutorConversation {
  messages: TutorMessage[];
  lastContentId?: string;
}
