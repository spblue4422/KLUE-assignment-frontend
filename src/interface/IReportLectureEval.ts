// import { ReportStateType } from '../type';
import { ILecutreEval } from './ILecutreEval';
import { IReport } from './IReport';

export interface IReportLectureEval extends IReport {
	lectureEval: ILecutreEval;
}
