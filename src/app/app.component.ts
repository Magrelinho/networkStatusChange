import { Component } from '@angular/core';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  networkListener: any;
  constructor() {
    this.networkListener = Network.addListener('networkStatusChange', (status: { connected: boolean }) => {
      console.log(`Network change: ${status.connected ? 'Online' : 'Offline'}`);
    });
  }
}
