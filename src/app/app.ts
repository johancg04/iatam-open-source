import { Component, signal } from '@angular/core';
import { Layout } from './shared/presentation/components/layout/layout';

/**
 * Root component of the IATA Flight Monitoring Platform.
 *
 * @summary Mounts the shared application layout, which in turn hosts the
 * toolbar, the routed content and the footer.
 * @author Johan Alexis Contreras Granados
 */
@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /**
   * Window title placeholder.
   */
  protected readonly title = signal('ea11834u202423752');
}
