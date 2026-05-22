import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { FooterContent } from '../footer-content/footer-content';
import { environment } from '../../../../../environments/environment';

/**
 * Application shell.
 *
 * @summary Hosts the toolbar (IATA logo, app title, navigation options and
 * language switcher), the routed view via {@link RouterOutlet} and the
 * footer.
 * @author Johan Alexis Contreras Granados
 */
@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    TranslatePipe,
    LanguageSwitcher,
    FooterContent
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

  protected readonly logoUrl = `${environment.logoProviderBaseUrl}/iata.org?token=${environment.logoDevKey}`;

  protected readonly options = signal([
    { link: '/home',                label: 'option.home' },
    { link: '/flight-records/new',  label: 'option.new-flight-record' }
  ]);
}
