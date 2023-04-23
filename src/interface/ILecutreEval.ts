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
	content: String;
	state: LectureEvalStateType;
	createdAt: Date;
	updatedAt: Date;
	likeCount: number;
	dislikeCount: number;
	accusationCount: number;
	version: number;
}
