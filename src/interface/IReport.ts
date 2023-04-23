import { ReportStateType } from '../type';

export interface IReport {
	reportId: number;
	userId: number;
	username: String;
	category: String;
	content: String;
	createdAt: Date;
	managerAnswer: String;
	answeredAt: Date;
	state: ReportStateType;
}
