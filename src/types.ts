export enum StoryIndex {
  Story1,
  Story2,
  Story3,
  Story4,
  Story5,
}
export type StoryType = {
  contents: string[];
  selected?: Option;
  withOption: boolean;
  title: string;
  options?: OptionType[];
};

export type OptionType = {
  optionId: string;
  optionValue: Option;
  optionText: string;
};

export enum Option {
  None = "NONE",
  A = "A",
  B = "B",
}
export type surveyResultType = {
  questionId: number;
  responseChoice?: number;
  responseText?: string;
};
export type UserInfoType = {
  email: string;
  options: Option[];
};
export type UserInfoContext = {
  userInfo: UserInfoType;
  setUserInfo(e: UserInfoType): void;
};

export const defaultOptions = [Option.None, Option.None, Option.None];
