import { Component, inject, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslateService } from '@ngx-translate/core';

/**
 * Toggle group that switches the active translation language.
 *
 * @summary Initializes the available languages (`en`, `es`) in the
 * {@link TranslateService} and lets the user pick the active one.
 * English is the default language.
 * @author Johan Alexis Contreras Granados
 */
@Component({
  selector: 'app-language-switcher',
  imports: [MatButtonToggleModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css'
})
export class LanguageSwitcher {

  private readonly translate: TranslateService = inject(TranslateService);

  protected currentLang = signal<string>('en');

  protected languages = signal<string[]>(['en', 'es']);

  constructor() {
    this.translate.addLangs(this.languages());
    this.translate.use('en');
    this.currentLang.set('en');
  }

  protected useLanguage(language: string): void {
    this.translate.use(language);
    this.currentLang.set(language);
  }
}
