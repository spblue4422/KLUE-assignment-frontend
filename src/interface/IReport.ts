import { ReportStateType } from '../type';

export interface IReport {
	reportId: number;
	userId: number;
	username: string;
	category: string;
	content: string;
	createdAt: string;
	managerAnswer: string;
	answeredAt: string;
	state: ReportStateType;
}
