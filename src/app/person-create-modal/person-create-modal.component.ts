import { Component, OnInit } from '@angular/core';
import { CreatePersonInput } from '../API.service';
import { ModalController } from '@ionic/angular';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-person-create-modal',
  templateUrl: './person-create-modal.component.html',
  styleUrls: ['./person-create-modal.component.scss']
})
export class PersonCreateModalComponent implements OnInit {
  person: CreatePersonInput = {
    name: ''
  };

  constructor(private modalController: ModalController,
              private amplify: AmplifyService) {
  }

  save() {
    this.modalController.dismiss({
      person: {
        ...this.person
      }
    });
  }

  /*
  onImagePicked(file) {
    let key = `pics/${file.name}`;
    
    this.amplify.storage().put( key, file, {
      'level': 'private',
      'contentType': file.type
    })
    .then ((result: any) => {
      console.log('uploaded: ', result)
      this.person.profileImage = result.key;
    })
    .catch(err => console.log('upload error: ', err));
  }
  */

  cancel() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
