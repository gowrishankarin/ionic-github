import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GithubService } from '../../providers/github-service/github-service';
import { User } from '../../models/user.interface';

/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {

	username: string;
	user: User;

	constructor(
		private navCtrl: NavController, 
		private navParams: NavParams,
		private githubService: GithubService) {
	}

	ionViewWillLoad() {
		console.log('ionViewDidLoad ProfileSearchResultsPage');
		this.username = this.navParams.get('username');
		console.log(this.username);

		if(this.username) {
			this.getUserInformation();
		}
	}

	getUserInformation(): void {
		this.githubService.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
	}

}
