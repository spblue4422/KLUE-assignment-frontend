import {
	LectureEvalStateType,
	StarAttendanceType,
	StarGradeType,
} from '../type';

export interface ILecutreEval {
	lectureEvalId: number;
	userId: number;
	starTotal: number;
	starAttendance: StarAttendanceType;
	starGrade: StarGradeType;
	starDifficulty: number;
	starStudyTime: number;
	starAchievement: number;
	starCompetency: number;
	recommendationFlag: boolean;
	content: string;
	state: LectureEvalStateType;
	createdAt: string;
	updatedAt: string;
	likeCount: number;
	dislikeCount: number;
	accusationCount: number;
	version: number;
}
