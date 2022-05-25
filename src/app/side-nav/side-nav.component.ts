import { Component } from '@angular/core';
/** @title Basic sidenav */

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent {

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

}


