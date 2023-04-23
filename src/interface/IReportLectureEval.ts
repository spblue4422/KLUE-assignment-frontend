// import { ReportStateType } from '../type';
import { ILecutreEval } from './ILecutreEval';
import { IReport } from './IReport';

export interface IReportLectureEval extends IReport {
	// reportId: number;
	// userId: number;
	// username: String;
	// category: String;
	// content: String;
	// createdAt: Date;
	// managerAnswer: String;
	// answeredAt: Date;
	// state: ReportStateType;
	lectureEval: ILecutreEval;
}
