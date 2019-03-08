import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { ModalController } from '@ionic/angular';

import Amplify, { API, graphqlOperation } from "aws-amplify";
import { APIService, ListPersonsQuery, CreatePersonInput } from '../API.service';

import { PersonCreateModalComponent } from '../person-create-modal/person-create-modal.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  people: ListPersonsQuery;
  modal: any;

  constructor(public amplifyService: AmplifyService,
              public apiService: APIService,
              public modalController: ModalController) {

  }

  async ngOnInit() {
    this.loadPeople();
  }

  async getNewPerson() {
    console.log('Opening create person modal');
    this.modal = await this.modalController.create({
      component: PersonCreateModalComponent,
      //componentProps: props
    });
    this.modal.onDidDismiss().then((result) => {
      console.log('Modal closed', result);
      this.createPerson(result.data.person);
    });
    return this.modal.present();
  }

  async loadPeople() {
    this.people = await this.apiService.ListPersons();
    console.log('Loaded people', this.people);
  }

  async createPerson(person: CreatePersonInput) {
    const ret = await this.apiService.CreatePerson(person);
    console.log('Created person!');
    this.loadPeople();

    this.amplifyService.analytics().record({
      name: 'personCreated', 
    });
  }

  getProfileImage(path) {
    /*
    const ret = this.amplifyService.storage().get(path);
    console.log('Stogage got', ret);
    */
    //return `https://${amplify.aws_user_files_s3_bucket}.s3.amazonaws.com/${path}`;
  }
}

