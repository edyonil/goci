import {Component} from "@angular/core";
import {GlobalService} from "../services/GlobalService";

@Component({
	selector: 'app-header',
	templateUrl: 'app-header.component.html',
	styleUrls: ['app-header.component.css']
})

export class AppHeaderComponent {

	private jobs: number = 0;

	constructor(private globalService: GlobalService) {
		globalService.jobsCountEmitter.subscribe((value: any) => {
			this.jobs = value;
		});
	}

}
