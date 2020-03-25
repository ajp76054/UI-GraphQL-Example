import { PastLaunchesListGQL } from './../services/spacexGraphql.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-launch-list',
    templateUrl: './launch-list.component.html',
    styleUrls: ['./launch-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchListComponent implements OnInit {
    constructor(private pastLaunchesService: PastLaunchesListGQL) {}

    pastLaunches$ = this.pastLaunchesService.fetch({ limit: 30 }).pipe(map(res => res.data.launchesPast));

    ngOnInit() {}
}
